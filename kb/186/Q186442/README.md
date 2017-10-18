---
layout: page
title: "Q186442: XWEB: Exchange Personal Views Unavailable in Outlook or OWA"
permalink: kb/186/Q186442/
---

## Q186442: XWEB: Exchange Personal Views Unavailable in Outlook or OWA

	Article: Q186442
	Product(s): Microsoft Exchange
	Version(s): Macintosh:8.0;WinNT:5.5,8.0,8.03,8.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Outlook 97, version 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 97, version 8.03, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Exchange client, you can create and apply personal views to quickly
	view information in any folder you choose. The personal views you create in the
	Exchange client will not automatically be available when you log on to the
	Outlook client or the Outlook Web Access client.
	
	CAUSE
	=====
	
	The personal view is not stored inside the individual folder, but is stored as a
	hidden property in your Exchange Server mailbox. This personal view is not shown
	in the Outlook and Outlook Web Access clients.
	
	WORKAROUND
	==========
	
	To work around this problem, you can copy the personal view in the Exchange
	client to a folder view, which will then be available when you use the Outlook
	client or the Outlook Web Access client.
	
	To copy a personal view to a folder view, perform the following steps:
	
	1. Start the Exchange client.
	
	2. Select the folder you want to copy your personal view to, such as your Inbox
	  folder, then from the Tools menu, point to Application Design, and then click
	  Copy Folder Design.
	
	3. In the "Copy design from this folder" dialog box, select the Mailbox
	  <username>.
	
	4. Also, ensure the check box for Forms and Views is selected in the "Copy
	  design of" dialog box, and then click OK.
	
	5. When you are prompted at the "If any folder design conflicts exist the
	  changes you are copying will take precedence" dialog box, click Yes.
	
	Your personal views are now stored inside your Inbox folder and can be seen in
	the Outlook and Outlook Web Access clients.
	
	MORE INFORMATION
	================
	
	In Outlook, you can see the personal view by selecting your Inbox folder. From
	the View menu, click Current View, and the Personal Views will be displayed on
	the pop-up menu.
	
	In the Outlook Web Access client, select your Inbox folder and select the view
	from the view dropdown list on the toolbar menu.
	
	For more information on publishing Outlook views for the Outlook Web Access
	client, please see the following Microsoft Knowledge Base article:
	
	  Q175114 XWEB: Cannot Access Custom Views Created with Outlook in OWA
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbOWASearch kbZNotKeyword3
	Version           : Macintosh:8.0;WinNT:5.5,8.0,8.03,8.5
	Issue type        : kbprb
	
	=============================================================================
	
