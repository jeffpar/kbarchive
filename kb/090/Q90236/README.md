---
layout: page
title: "Q90236: NET May Not Exit When You Press the Escape Key"
permalink: /kb/090/Q90236/
---

## Q90236: NET May Not Exit When You Press the Escape Key

	Article: Q90236
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some MS-DOS-based applications trap the ESCAPE key for their own use. When an
	MS-DOS-based application traps this key code before it reaches Windows for
	Workgroups' or Workgroup Connections' NET terminate-and-stay-resident (TSR)
	program, you cannot exit the network connections by pressing the ESCAPE key.
	
	To exit NET, use the F1 key or tab to the Exit button and press the ENTER key.
	
	Once you have exited Windows for Workgroups NET, one or more escape characters
	are sent to the application.
	
	MORE INFORMATION
	================
	
	NET is started by NET START POPUP. NET POP is part of NET.EXE.
	
	Additional query words: 3.10 Harvard Graphics Netpop Net pop esc wc escape key net.exe wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1; :1.0
	
	=============================================================================
	
