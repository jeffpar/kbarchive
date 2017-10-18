---
layout: page
title: "Q119268: WFWG 3.11 Print Manager Causes 3- to 5-Second Pauses"
permalink: kb/119/Q119268/
---

## Q119268: WFWG 3.11 Print Manager Causes 3- to 5-Second Pauses

	Article: Q119268
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Windows for Workgroups 3.11, you experience temporary hangs
	or pauses. Typically, you enter several characters that do not appear on the
	screen for several seconds, or the mouse cursor freezes for several seconds.
	
	CAUSE
	=====
	
	Print Manager can cause this behavior when a remote printer is in an error
	condition or the remote station is offline. Print Manager polls for the remote
	printer approximately once per minute and continues to do so throughout the
	Windows for Workgroups session.
	
	RESOLUTION
	==========
	
	There are several ways to correct this condition:
	
	- Bring the remote workstation/print server online.
	
	  -or-
	
	- Close Print Manager on the local machine. This disables print sharing on the
	  local machine.
	
	  -or-
	
	- Leave Print Manager running and disconnect from the remote printer that is
	  not online.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.11 pause hang delay pointer freeze freezes lock-up lockup temporary spool DOS
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
