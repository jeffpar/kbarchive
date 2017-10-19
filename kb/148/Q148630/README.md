---
layout: page
title: "Q148630: Incorrect Token Ring Frame Type Causes &quot;Request Timed Out&quot;"
permalink: /kb/148/Q148630/
---

## Q148630: Incorrect Token Ring Frame Type Causes &quot;Request Timed Out&quot;

	Article: Q148630
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11; :3.11,3.11a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to Ping an address within or beyond your local token ring
	subnet using TCP/IP-32 and NetWare IPX/ODI stack in Windows for Workgroups, the
	following error message appears:
	
	  Request Timed Out
	
	RESOLUTION
	==========
	
	To correct this problem, manually change the frame type in the PROTOCOL.INI (or
	NET.CFG) file. The following are the required Token Ring frame type syntaxes for
	workstations that need PROTOCOL.INI modifications:
	
	- Network Client version 3.0 for MS-DOS and Windows:
	
	        FRAME=TOKENRING
	
	- Windows for Workgroups 3.11:
	
	        FRAME=TOKEN-RING
	
	- NetWare (modify NET.CFG):
	
	     FRAME=TOKEN-RING and TOKEN-RING_SNAP
	
	Additional query words: 3.11 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311 kbTCPIP311a
	Version           : WINDOWS:3.11; :3.11,3.11a
	
	=============================================================================
	
