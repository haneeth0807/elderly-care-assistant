
// Mock data for the elderly care assistant system

// Health vitals data
export interface VitalData {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'alert' | 'critical';
  trend: 'up' | 'down' | 'stable';
  time: string;
}

export const vitalData: VitalData[] = [
  {
    id: "v1",
    name: "Heart Rate",
    value: 72,
    unit: "bpm",
    status: "normal",
    trend: "stable",
    time: "11:30 AM"
  },
  {
    id: "v2",
    name: "Blood Pressure",
    value: 128,
    unit: "/ 85 mmHg",
    status: "normal",
    trend: "up",
    time: "11:30 AM"
  },
  {
    id: "v3",
    name: "Blood Glucose",
    value: 112,
    unit: "mg/dL",
    status: "normal",
    trend: "stable",
    time: "10:45 AM"
  },
  {
    id: "v4",
    name: "Oxygen Level",
    value: 97,
    unit: "%",
    status: "normal",
    trend: "stable",
    time: "11:30 AM"
  },
  {
    id: "v5",
    name: "Body Temperature",
    value: 99.1,
    unit: "°F",
    status: "warning",
    trend: "up",
    time: "11:15 AM"
  }
];

// Health vitals history for charts
export interface VitalHistoryEntry {
  time: string;
  value: number;
}

export interface VitalHistory {
  id: string;
  name: string;
  unit: string;
  data: VitalHistoryEntry[];
}

export const vitalHistory: VitalHistory[] = [
  {
    id: "vh1",
    name: "Heart Rate",
    unit: "bpm",
    data: [
      { time: "8:00 AM", value: 68 },
      { time: "9:00 AM", value: 72 },
      { time: "10:00 AM", value: 75 },
      { time: "11:00 AM", value: 73 },
      { time: "12:00 PM", value: 72 }
    ]
  },
  {
    id: "vh2",
    name: "Blood Pressure (Systolic)",
    unit: "mmHg",
    data: [
      { time: "8:00 AM", value: 125 },
      { time: "9:00 AM", value: 127 },
      { time: "10:00 AM", value: 130 },
      { time: "11:00 AM", value: 128 },
      { time: "12:00 PM", value: 128 }
    ]
  }
];

// Reminder data
export interface Reminder {
  id: string;
  title: string;
  description: string;
  time: string;
  isCompleted: boolean;
  type: 'medication' | 'appointment' | 'activity' | 'other';
  priority: 'high' | 'medium' | 'low';
}

export const reminderData: Reminder[] = [
  {
    id: "r1",
    title: "Blood Pressure Medication",
    description: "Take 1 tablet with water",
    time: "8:00 AM",
    isCompleted: true,
    type: "medication",
    priority: "high"
  },
  {
    id: "r2",
    title: "Diabetes Medication",
    description: "Take 1 tablet after breakfast",
    time: "9:30 AM",
    isCompleted: true,
    type: "medication",
    priority: "high"
  },
  {
    id: "r3",
    title: "Doctor's Appointment",
    description: "Dr. Smith - Annual checkup",
    time: "2:30 PM",
    isCompleted: false,
    type: "appointment",
    priority: "high"
  },
  {
    id: "r4",
    title: "Short Walk",
    description: "20 minute walk around the garden",
    time: "4:00 PM",
    isCompleted: false,
    type: "activity",
    priority: "medium"
  },
  {
    id: "r5",
    title: "Evening Medication",
    description: "Take 1 tablet with dinner",
    time: "6:00 PM",
    isCompleted: false,
    type: "medication",
    priority: "high"
  }
];

// Alert data
export interface Alert {
  id: string;
  title: string;
  description: string;
  time: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'active' | 'resolved' | 'acknowledged';
  type: 'fall' | 'medication' | 'vital' | 'inactivity' | 'other';
}

export const alertData: Alert[] = [
  {
    id: "a1",
    title: "Fall Detected",
    description: "Living room motion sensor detected a potential fall",
    time: "Yesterday, 4:32 PM",
    severity: "high",
    status: "resolved",
    type: "fall"
  },
  {
    id: "a2",
    title: "Missed Medication",
    description: "Evening blood pressure medication not taken",
    time: "Yesterday, 6:30 PM",
    severity: "medium",
    status: "resolved",
    type: "medication"
  },
  {
    id: "a3",
    title: "Elevated Heart Rate",
    description: "Heart rate above normal range (98 bpm) for 15 minutes",
    time: "Today, 9:45 AM",
    severity: "medium",
    status: "resolved",
    type: "vital"
  },
  {
    id: "a4",
    title: "Elevated Temperature",
    description: "Body temperature reading of 99.1°F",
    time: "Today, 11:15 AM",
    severity: "low",
    status: "active",
    type: "vital"
  }
];

// User profile data
export interface UserProfile {
  id: string;
  name: string;
  age: number;
  gender: string;
  emergencyContact: {
    name: string;
    relation: string;
    phone: string;
  };
  caregiver: {
    name: string;
    phone: string;
    email: string;
  };
  conditions: string[];
  allergies: string[];
}

export const userProfile: UserProfile = {
  id: "user1",
  name: "Eleanor Thompson",
  age: 78,
  gender: "Female",
  emergencyContact: {
    name: "Michael Thompson",
    relation: "Son",
    phone: "(555) 123-4567"
  },
  caregiver: {
    name: "Sarah Johnson",
    phone: "(555) 987-6543",
    email: "sarah.j@careagency.com"
  },
  conditions: [
    "Hypertension",
    "Type 2 Diabetes",
    "Mild Arthritis"
  ],
  allergies: [
    "Penicillin",
    "Shellfish"
  ]
};
