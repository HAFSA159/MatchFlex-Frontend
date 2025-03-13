import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaces
interface Bracelet {
  id: string;
  model: string;
  status: 'active' | 'inactive';
  batteryLevel: number;
  lastSynced: Date;
  storageUsed: number;
}

interface Order {
  id: string;
  date: Date;
  status: 'pending' | 'processing' | 'shipping' | 'delivered';
  items: OrderItem[];
  trackingSteps: TrackingStep[];
  trackingNumber?: string;
}

interface OrderItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface TrackingStep {
  title: string;
  date: Date;
  completed: boolean;
  active: boolean;
  icon: string;
}

interface Event {
  id: string;
  title: string;
  date: Date;
  location: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

interface Notification {
  id: string;
  title: string;
  message: string;
  time: Date;
  read: boolean;
  type: 'ticket' | 'bracelet' | 'promo' | 'system';
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  membershipType: string;
}

@Component({
  selector: 'app-dash-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dash-user.component.html',
  styleUrl: './dash-user.component.scss'
})
export class DashUserComponent implements OnInit {
  // State variables
  activeTab: string = 'dashboard';
  sidebarOpen: boolean = false;
  isMobile: boolean = false;

  // Data
  bracelet: Bracelet | null = null;
  orders: Order[] = [];
  upcomingEvents: Event[] = [];
  notifications: Notification[] = [];
  user: User | null = null;

  // Loading states
  loading = {
    bracelet: true,
    orders: true,
    events: true,
    notifications: true,
    user: true
  };

  constructor() {
    // Check if mobile on init
    this.checkIfMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkIfMobile();
  }

  checkIfMobile(): void {
    this.isMobile = window.innerWidth < 768;
    // Close sidebar by default on mobile
    if (this.isMobile) {
      this.sidebarOpen = false;
    } else {
      this.sidebarOpen = true;
    }
  }

  ngOnInit(): void {
    // Simulate loading data from services
    this.loadMockData();
  }

  loadMockData(): void {
    // Simulate API calls with setTimeout
    setTimeout(() => {
      this.user = {
        id: 'user-1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'assets/avatar.png',
        membershipType: 'Premium Member'
      };
      this.loading.user = false;
    }, 500);

    setTimeout(() => {
      this.bracelet = {
        id: 'MF-2023-8765',
        model: 'MatchFlex Pro',
        status: 'active',
        batteryLevel: 78,
        lastSynced: new Date(Date.now() - 3600000), // 1 hour ago
        storageUsed: 45
      };
      this.loading.bracelet = false;
    }, 800);

    setTimeout(() => {
      this.orders = [
        {
          id: 'MF-2023-1234',
          date: new Date(Date.now() - 86400000 * 3), // 3 days ago
          status: 'shipping',
          items: [
            {
              id: 'item-1',
              name: 'MatchFlex Pro Bracelet',
              price: 89.99,
              image: 'assets/bracelet-box.png',
              quantity: 1
            }
          ],
          trackingSteps: [
            {
              title: 'Order Placed',
              date: new Date(Date.now() - 86400000 * 3), // 3 days ago
              completed: true,
              active: false,
              icon: 'check'
            },
            {
              title: 'Processing',
              date: new Date(Date.now() - 86400000 * 2), // 2 days ago
              completed: true,
              active: false,
              icon: 'check'
            },
            {
              title: 'Shipping',
              date: new Date(Date.now() - 86400000), // 1 day ago
              completed: false,
              active: true,
              icon: 'truck'
            },
            {
              title: 'Delivered',
              date: new Date(Date.now() + 86400000), // 1 day from now (expected)
              completed: false,
              active: false,
              icon: 'home'
            }
          ],
          trackingNumber: 'TRK-12345678'
        }
      ];
      this.loading.orders = false;
    }, 1000);

    setTimeout(() => {
      this.upcomingEvents = [
        {
          id: 'event-1',
          title: 'FC Barcelona vs Real Madrid',
          date: new Date(Date.now() + 86400000 * 5), // 5 days from now
          location: 'Camp Nou Stadium • 8:00 PM',
          status: 'confirmed'
        },
        {
          id: 'event-2',
          title: 'Manchester United vs Liverpool',
          date: new Date(Date.now() + 86400000 * 12), // 12 days from now
          location: 'Old Trafford • 7:30 PM',
          status: 'pending'
        }
      ];
      this.loading.events = false;
    }, 1200);

    setTimeout(() => {
      this.notifications = [
        {
          id: 'notif-1',
          title: 'Ticket Confirmation',
          message: 'Your ticket for FC Barcelona vs Real Madrid has been confirmed.',
          time: new Date(Date.now() - 7200000), // 2 hours ago
          read: false,
          type: 'ticket'
        },
        {
          id: 'notif-2',
          title: 'Bracelet Update',
          message: 'Your MatchFlex bracelet needs to be recharged. Current battery level: 22%',
          time: new Date(Date.now() - 18000000), // 5 hours ago
          read: false,
          type: 'bracelet'
        },
        {
          id: 'notif-3',
          title: 'Special Offer',
          message: 'Get 15% off on your next ticket purchase with code MATCHFLEX15.',
          time: new Date(Date.now() - 86400000), // 1 day ago
          read: true,
          type: 'promo'
        }
      ];
      this.loading.notifications = false;
    }, 1500);
  }

  // Tab navigation
  setActiveTab(tab: string): void {
    this.activeTab = tab;
    if (this.isMobile) {
      this.sidebarOpen = false;
    }
  }

  // Sidebar toggle
  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  // Bracelet actions
  rechargeBracelet(): void {
    console.log('Recharging bracelet...');
    // In a real app, this would call a service
    alert('Recharge initiated. Please connect your bracelet to the charging dock.');
  }

  syncBracelet(): void {
    console.log('Syncing bracelet...');
    // In a real app, this would call a service
    alert('Sync initiated. Please keep your bracelet close to your phone.');
  }

  locateBracelet(): void {
    console.log('Locating bracelet...');
    // In a real app, this would call a service
    alert('Locate signal sent. Your bracelet will beep if it\'s within range.');
  }

  updateBracelet(): void {
    console.log('Updating bracelet...');
    // In a real app, this would call a service
    alert('Update initiated. Please keep your bracelet connected during the update process.');
  }

  // Order actions
  trackOrder(orderId: string): void {
    console.log('Tracking order:', orderId);
    // In a real app, this would navigate to a tracking page or open a modal
    alert(`Tracking information for order ${orderId} will be displayed.`);
  }

  // Notification actions
  markAllNotificationsAsRead(): void {
    this.notifications = this.notifications.map(notification => ({
      ...notification,
      read: true
    }));
  }

  markNotificationAsRead(notificationId: string): void {
    this.notifications = this.notifications.map(notification =>
      notification.id === notificationId
        ? { ...notification, read: true }
        : notification
    );
  }

  getUnreadNotificationsCount(): number {
    return this.notifications.filter(notification => !notification.read).length;
  }

  // Helper methods for date formatting
  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }

  formatTime(date: Date): string {
    const now = new Date();
    const notificationDate = new Date(date);
    const diffInHours = Math.floor((now.getTime() - notificationDate.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - notificationDate.getTime()) / (1000 * 60));
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    }
  }

  getDay(date: Date): string {
    return new Date(date).getDate().toString();
  }

  getMonth(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  }

  getNotificationIcon(type: string): string {
    switch (type) {
      case 'ticket':
        return 'ticket';
      case 'bracelet':
        return 'bracelet';
      case 'promo':
        return 'promo';
      case 'system':
        return 'info';
      default:
        return 'notification';
    }
  }
}
