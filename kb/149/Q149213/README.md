---
layout: page
title: "Q149213: How Resource Accounts Automatically Accept Meeting Requests"
permalink: kb/149/Q149213/
---

## Q149213: How Resource Accounts Automatically Accept Meeting Requests

	Article: Q149213
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Schedule+ 7.0 accounts can be created as Resource Accounts, for example
	Conference Rooms, Overhead Projectors, Company Vehicles, etc. These Resources
	can also be configured to automatically accept meeting requests and clear
	canceled meetings from their appointment book.
	
	NOTE: Auto-booking of appointments does not work when you send meeting requests
	between Microsoft Mail for PC Networks postoffices and Microsoft Exchange Server
	version 4.0 environments. Mail for PC Networks does not support Bcc:
	recipients.
	
	
	MORE INFORMATION
	================
	
	By placing the Resource account into the RESOURCE address box of the Meeting
	Attendees dialog box, it will place the ResourceID in the Bcc: line of the
	meeting request message. The ResourceID will also be displayed in the Where:
	field of the meeting request message. Schedule+ will only search for users
	listed in the Bcc: box to perform the auto-booking of appointments. This
	eliminates overhead of parsing addresses, locating the appointment book,
	determining the Account-type (Resource or not) and accessing permissions to all
	users; therefore, it improves performance.
	
	NOTE: Entering ResourceIDs into any address box other than that of a Resource
	Attendee (for example, Required or Optional) will disable the Auto-booking
	features.
	
	Setting Up the Resource Account
	-------------------------------
	
	NOTE: These steps will assume a Microsoft Exchange Profile has be previously
	configured for the Resource Account.
	
	1. Log into Schedule+ 7.0 as the Resource ID.
	
	2. In the Welcome to Schedule+ 7.0 dialog box, select the I Do Not Want a
	  Schedule File on this Machine option, if you do not the creation of a local
	  file for the Resource account on the workstation you are on.
	
	3. Click Options on the Tools menu. Select General and the following options:
	
	   - This Account is a for a Resource....
	
	   - Automatically Accept Meeting Requests
	
	   - Automatically Remove Canceled Meetings
	
	4. Click Options on the Tools menu. Select Synchronize and clear the option to
	  Work Primarily from Local File.
	
	5. Click Set Access Permissions on the Tools menu. Check the following:
	
	   - Default access permission is set to CREATE or Higher
	
	   - Specified user(s) are given access privileges CREATE or Higher
	
	
	6. Exit and Sign Out as the Resource.
	
	Inviting the Resource to Attend a Meeting
	-----------------------------------------
	
	NOTE: Entering ResourceIDs into any address box other than that of a Resource
	Attendee (for example, Required or Optional) will disable the Auto-booking
	features.
	
	1. Login to Schedule+ as a user other than a Resource account.
	
	2. Click Appointments on the Insert menu to display a New Appointment dialog
	  box.
	
	3. In the General tab, type the description of the appointment.
	
	4. Select the Attendees tab. Then use either method A or B below.
	
	Method A
	--------
	
	  1. Enter the ResourceID directly into the RESOURCES address box.
	
	  2. Select the OK button. Meeting Request dialog box is displayed.
	
	  3. Select the Envelope button to send the mail.
	
	Method B
	--------
	
	  1. Select the Invite Others button to display the address book.
	
	  2. Select the ResourceID from the address book and press the Resources button
	     to place the Resource address into the Resources: address box.
	
	  3. Enter the ResourceID directly into the Resources box.
	
	
	Additional query words: 7.00 schedule plus
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbScheduleSearch kbSchedule700
	Version           : :7.0
	
	=============================================================================
	
