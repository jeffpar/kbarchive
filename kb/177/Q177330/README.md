---
layout: page
title: "Q177330: XWEB: How to Set Default Calendar Backend for OWA Client"
permalink: kb/177/Q177330/
---

## Q177330: XWEB: How to Set Default Calendar Backend for OWA Client

	Article: Q177330
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article contains information on how to set the Microsoft Outlook Web Access
	(OWA) default calendar settings when you log on to your mailbox for the first
	time.
	
	MORE INFORMATION
	================
	
	The OWA client supports two calendar backends:
	
	- Outlook Calendar
	
	- Schedule+
	
	When you connect to your Microsoft Exchange Server mailbox, the OWA client tries
	to automatically detect the appropriate scheduling backend being used by your
	mailbox. However, autodetection does not occur if you have never accessed your
	mailbox.
	
	If your mailbox has never been used (and therefore contains no schedule data),
	the OWA client creates an Outlook Calendar folder by default, even if your
	mailbox is configured to use Microsoft Schedule+ as the scheduling backend.
	
	To specify which scheduling backend is used when you log on to your mailbox for
	the first time via the OWA client, follow these steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (REGEDT32.EXE).
	
	2. Select the following key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Messaging Subsystem
	
	3. Select Add Value from the Edit menu and enter the following information:
	
	     Value Name: AMDefaultCalendar
	     Data Type: REG_DWORD
	
	4. Click OK.
	
	5. Enter the following data values based on the type of default calendar your
	  organization uses:
	
	     0 - Use this value to use the Outlook Calendar
	     1 - Use this value to use Schedule+
	
	This Registry setting will force the OWA client to use the specified scheduling
	backend when you log on to your Microsoft Exchange Server mailbox for the first
	time. Therefore, if everyone in your organization is using Microsoft Schedule+,
	the OWA client can be configured to default to Schedule+, instead of Outlook
	Calendar.
	
	NOTE: If you have logged on to your mailbox at least one time, your current
	calendar settings are used, and the above registry entries are ignored.
	
	You can also change the calendar backend by setting the "Use Microsoft Schedule+
	as my primary calendar" option. This setting can be accessed through the Options
	icon on the Outlook Bar of the OWA client.
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
