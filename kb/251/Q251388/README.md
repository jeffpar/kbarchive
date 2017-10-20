---
layout: page
title: "Q251388: XCLN: Schedule+ User Calendar Opens Blank Outlook Calendar"
permalink: /kb/251/Q251388/
---

## Q251388: XCLN: Schedule+ User Calendar Opens Blank Outlook Calendar

{% raw %}

	Article: Q251388
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0; WINDOWS:2000,7.0a,7.5,97,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	- Microsoft Schedule+, versions 7.0a, 7.5 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to open a Microsoft Schedule+ user's calendar by clicking Open on the
	File menu, and then clicking Other User's Folder, a blank Microsoft Outlook
	calendar may be displayed instead.
	
	For example, if user A is a Schedule+ user and user B is an Outlook user, when
	user B clicks Open on the File menu, clicks Other User's Folder, and then clicks
	the user A Calendar folder, the user A calendar isn't displayed as a Schedule+
	calendar as expected. Instead, the User A calendar is displayed as an Outlook
	calendar and is blank.
	
	CAUSE
	=====
	
	The Schedule+ user's mailbox has been accessed by using Outlook. This creates an
	Outlook Calendar folder, which is displayed as the Schedule+ user's calendar.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Log on as the Schedule+ user, and then start the Microsoft Exchange Client
	  version 5.0.
	
	2. Delete the Calendar folder.
	
	3. Log on as an Outlook personal computer user, and then open the Schedule+
	  calendar. The Schedule+ calendar is displayed.
	
	MORE INFORMATION
	================
	
	If the Schedule+ user migrates to Outlook, that user should start Outlook the
	first time by using the /resetfolders command line switch.
	
	For additional information about other command-line switches, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q182112 OL98: Additional Command-Line Switches
	
	Additional query words: OL97 OL98 OL20
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbOutlookSearch kbExchangeSearch kbZNotKeyword2 kbOutlook2000Search kbScheduleSearch kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlookMacSearch kbSchedule700a kbSchedule750 kbOutlook800Mac
	Version           : MACINTOSH:8.0; WINDOWS:2000,7.0a,7.5,97,98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
