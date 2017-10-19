---
layout: page
title: "Q191777: XCLN: Unable to Access MAPI Calendar"
permalink: /kb/191/Q191777/
---

## Q191777: XCLN: Unable to Access MAPI Calendar

	Article: Q191777
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to view other peoples' calendars or calendar folders when other
	users are running Microsoft Outlook 97 on a personal computer, and you are
	running on an Apple Macintosh.
	
	CAUSE
	=====
	
	The Macintosh client is limited by the available Application Programming
	Interface (API) calls on the Macintosh operating system, and is not able to
	access a MAPI calendar directly.
	
	RESOLUTION
	==========
	
	Have all users in the office use Schedule+ 7.x as their primary calendar.
	
	MORE INFORMATION
	================
	
	In a mixed office environment with both personal computer and Macintosh users
	connected to an Exchange Server computer, it is often desirable to see other
	peoples' calendars. Because of the API call limits on the Macintosh client, the
	Calendar folders of personal computer users are not visible as Calendar items.
	They are viewed as normal e-mail messages. This is true for any Outlook item
	that is based on the extended MAPI specification, such as Contacts, Tasks,
	Journal, and Notes.
	
	For everybody in the mixed client environment to see each others' calendar, share
	contacts, tasks, and so on, all users must use Schedule+ as their primary
	calendar.
	
	The Macintosh clients will continue to have exactly the same Calendar, Contacts,
	and Task features that are available in Schedule+ version 7.0, and they will
	continue to display Calendar, Contacts, and Task information in a separate
	window, accessible through the Calendar icon on the Outlook Bar.
	
	The personal computer clients will have to use the Schedule+ icon on the Standard
	toolbar. Even though the personal computer clients still have the extended MAPI
	folders available, these folders will not be usable to Macintosh clients if they
	share out their mailbox, or the folders contained therein.
	
	Schedule+ for the personal computer can be installed as a separate application,
	and from the Microsoft Office 95 installation CD.
	
	If the mail server is Exchange Server version 5.5, and Outlook Web Access (OWA)
	is installed on the server, Macintosh users can get their mail, see calendars,
	and so on, on the Exchange Server computer. They can also see and use shared
	public folders along with the PC clients. See your system administrator for the
	correct setup parameters, and Uniform Resource Locator (URL) for the OWA.
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbOutlookMacSearch kbOutlook800Mac
	Version           : MACINTOSH:8.0
	Issue type        : kbprb
	
	=============================================================================
	
