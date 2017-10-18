---
layout: page
title: "Q198441: XCLN: How to determine the Organizer of Direct Booked Appt."
permalink: kb/198/Q198441/
---

## Q198441: XCLN: How to determine the Organizer of Direct Booked Appt.

	Article: Q198441
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be necessary at times to determine who created an appointment in a
	calendar in which the appointment organizer has Author permissions.
	
	To determine who created the appointment, you must change the default view of the
	calendar to a table format, and add the Organizer field.
	
	MORE INFORMATION
	================
	
	To change the default view of the calendar, and add the Organizer field follow
	these steps:
	
	1. In Outlook 97, open the calendar by clicking File, pointing to Open Special
	  Folders, and clicking Exchange Server Folder. In Outlook 98, on the File
	  menu, point to Open, and click Other Users Folder.
	
	2. Type the name of the Calendar Mailbox and select Calendar as the Folder
	  option.
	
	3. To change the view of the Calendar, on the View menu, point to Current View,
	  and click Active Appointments.
	
	  NOTE: The default view for a calendar is Day/Week/Month.
	
	4. Add the Organizer field to the Active Appointments view.
	
	  In Outlook 97:
	
	  a. On the View menu, click Show Fields.
	
	  b. In the Select Fields From drop-down box, select All Appointment Fields,
	     and the Organizer field will be available in the Available Fields dialog
	     box.
	
	  In Outlook 98:
	
	  a. On the View menu, point to Current View, click Customize Current View,
	     then click Fields.
	
	  b. Select the Organizer field (listed alphabetically), then click Add to add
	     it to the "Show These Fields In This Order" dialog box. Click OK, click OK
	     again, and then click Close.
	
	The Current View will now display the Organizer field, which is populated by the
	Name of the mailbox of the user who created the appointment.
	
	Views are personal settings in Outlook and will not modify the actual view of the
	Calendar you are viewing.
	
	If you modify a default view then attempt to change to another view, you may be
	prompted with a Save View Settings dialog box.
	
	  Discard the current view settings....
	  This option signifies that a change was made to the view. Do you want
	  to discard it?
	
	  Save the current view settings...
	  This option signifies that a change was made to the current view. Do
	  you want to save it to another name?
	
	  Update the view "Name of View" with the current view settings...
	  This option signifies that a change was made to the current view. Do
	  you want to save the settings in the default view name?
	
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbZNotKeyword3
	Version           : :8.0,8.01,8.02,8.03; WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	
