---
layout: page
title: "Q246052: XCLN: No Offline Folder Settings Button in Service Properties"
permalink: /kb/246/Q246052/
---

## Q246052: XCLN: No Offline Folder Settings Button in Service Properties

	Article: Q246052
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to set up an offline folder file, the Enable Offline Use and
	Offline Folder Settings buttons may be missing from the Advanced tab in the
	Properties of the Exchange Server service in the profile.
	
	When you right-click any of the default folders and then click Properties, there
	is no Synchronization tab.
	
	CAUSE
	=====
	
	This behavior can occur when you are run Windows NT 4.0 Terminal Server Edition
	or Windows 2000 Server (or Advanced Server or Datacenter), and Terminal Services
	are enabled.
	
	RESOLUTION
	==========
	
	For Windows 2000, remove Terminal Services and Terminal Services licensing, and
	then restart the computer.
	
	MORE INFORMATION
	================
	
	Offline folders are not allowed on Windows NT 4.0 Terminal Server Edition or on
	a Windows 2000 server that is running Terminal Services. When you install
	Outlook on such a computer, you do not receive the question, "Do you travel with
	this computer?". This behavior is by design.
	
	Additional query words: enable synchronization 8.0 8.01 8.02 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
