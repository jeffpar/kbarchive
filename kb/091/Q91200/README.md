---
layout: page
title: "Q91200: How To: Setting Up a Resource in Schedule+ with WFWG"
permalink: kb/091/Q91200/
---

## Q91200: How To: Setting Up a Resource in Schedule+ with WFWG

	Article: Q91200
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Rooms or other physical items, such as a conference room or vehicle, can be set
	up as a resource to be scheduled using Microsoft's Schedule+ program included
	with Windows for Workgroups (WFWG).
	
	Only the postoffice administrator can set up a resource to be scheduled.
	
	MORE INFORMATION
	================
	
	Workgroups for Windows Mail Postoffice (WGPO) and Windows for Workgroups
	Schedule+ must be installed and set up before beginning this process.
	
	1. The Mail Postoffice administrator needs to create an account for the room. An
	  example would be for the Conference room #1.
	
	2. Create a mail account called CONFER1 for the Name and CONFER1 for the
	  Mailbox. The password must be the same as the administrator's password for
	  the Mail Postoffice.
	
	3. Exit and sign out of Mail and Schedule+.
	
	4. Rename the MSMAIL.MMF file in your local Windows directory.
	
	5. Start Schedule+. When it prompts for a name and password, use CONFER1 as the
	  name and enter the password. This starts the account for this room.
	
	6. From the Schedule+ Options menu, choose General Options. Select This Account
	  Is For A Resource, then chose OK.
	
	7. If each person running Schedule+ is to have the ability to add and delete
	  appointments for the room CONFER1, follow these steps. (If only one person
	  will add or delete appointments, skip this step and go on to step 8.)
	
	  a. Choose Exit and Sign Out from the File menu.
	
	  b. From your local Windows directory, delete the MSMAIL.MMF file that
	     Schedule+ just created.
	
	  c. Rename your previous MSMAIL.MMF file back to MSMAIL.MMF.
	
	  d. Start Schedule+. From the File menu, choose Open Other's Appt. Book.
	
	  e. Choose the room that was set up (CONFER1). The room is now set up.
	
	8. If there is to be only one person in charge of setting up and modifying the
	  times for the room CONFER1, do the following:
	
	  a. From the Options menu, choose Set Access Privileges.
	
	  b. Set the default Privilege to "Read Appointments & Tasks."
	
	  c. Select the Add option and choose the person who is to be in charge of
	     making appointments to the room CONFER1.
	
	  Select the Assistant option for this person, then choose OK.
	
	  d. Choose Exit and Sign Out from the File menu.
	
	  e. From your local Windows directory, delete the MSMAIL.MMF file that
	     Schedule+ just created.
	
	  f. Rename your previous MSMAIL.MMF file back to MSMAIL.MMF.
	
	  g. Start Schedule+.
	
	  h. From the File menu, choose Open Other's Appt. Book.
	
	  i. Choose the room that was set up (CONFER1). The room is now set up.
	
	Additional query words: 3.10 3.1 how to 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbScheduleSearch kbWFWSearch kbWFW310 kbWFW311 kbSchedule100
	Version           : WINDOWS:1.0,3.1,3.11
	
	=============================================================================
	
