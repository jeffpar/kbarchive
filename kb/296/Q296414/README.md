---
layout: page
title: "Q296414: Err Msg: There Was a Problem Starting Microsoft Schedule Plus"
permalink: kb/296/Q296414/
---

## Q296414: Err Msg: There Was a Problem Starting Microsoft Schedule Plus

	Article: Q296414
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 7.0,7.0a,7.5
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Schedule+, versions 7.0, 7.0a, 7.5 
	-------------------------------------------------------------------------------
	
	NOTE: These procedures only apply if you have installed Outlook with 
	the Internet Mail Only option. To determine your installation type, on the 
	Help menu, click About Microsoft Outlook. In About Microsoft Outlook, you 
	should see "Internet Mail Only" if you have the Internet Mail Only option 
	installed.
	
	For information about differences between Microsoft Outlook and 
	Microsoft Outlook Express e-mail clients, click 
	the article number below to view the article in the 
	Microsoft Knowledge Base:
	
	  Q257824 OL2000: Differences Between Outlook and Outlook Express
	
	SYMPTOMS
	========
	
	When you start Schedule+ version 7.x on a computer that runs Outlook 98, you may
	receive one of the following error messages:
	
	  There was a problem starting Microsoft Schedule Plus. An unexpected error has
	  occurred.
	
	or
	
	  There was a problem starting Microsoft Outlook Calendar. Memory is low. Close
	  some windows before continuing.
	
	This behavior occurs on computers that run Outlook 98 Internet Only Mode.
	
	CAUSE
	=====
	
	This behavior can occur if Schedule+ 7.x is configured for Group-Enabled mode
	and Outlook is configured for Internet Mail Only mode.
	
	RESOLUTION
	==========
	
	To resolve this behavior, configure Outlook for Corporate or Workgroup E-Mail
	mode:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft Outlook 98, and then click Add/Remove.
	
	4. Click Add New Components, and then click Install From CD.
	
	5. Click Yes to allow Active Setup to detect installed components.
	
	6. Scroll down to Mail Components, and then click to select the Corporate or
	  Workgroup E-Mail check box.
	
	7. Click Next to continue, and complete the installation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbOutlookSearch kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbOutlook98Search kbZNotKeyword3 kbSchedule700a kbSchedule750
	Version           : :7.0,7.0a,7.5
	Issue type        : kbprb
	
	=============================================================================
	
