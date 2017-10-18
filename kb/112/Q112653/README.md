---
layout: page
title: "Q112653: WFWG 3.11 Err Msg: Network Modules Not Loaded"
permalink: kb/112/Q112653/
---

## Q112653: WFWG 3.11 Err Msg: Network Modules Not Loaded

	Article: Q112653
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running FTP.EXE from TCP Utilities after installing that software package under
	Windows for Workgroups may generate the following error message:
	
	  Network modules not loaded. Program aborted.
	
	CAUSE
	=====
	
	A number of the utilities in the TCP Utilities package (for example, FTP.EXE)
	parse the CONFIG.SYS file for the following device statement:
	
	       DEVICE=C:\LANMAN.DOS\DRIVERS\PROTMAN\PROTMAN.DOS /I:C:\WINDOWS
	
	If this statement does not exist, FTP.EXE does not load and displays the
	aforementioned error. FTP.EXE is hard coded to search for the location of the
	TCPUTILS.INI file using the "/I:C:\Windows" part of the PROTMAN.DOS device
	statement. TCPUTILS.INI must reside at the location specified by the /I: switch
	on the PROTMAN.DOS line.
	
	RESOLUTION
	==========
	
	To correct this problem, create the following device statement in the CONFIG.SYS
	file:
	
	  DEVICE=C:\PROTMAN\PROTMAN.DOS /I:C:\WINDOWS
	
	This modification results in a "Bad or missing C:\PROTMAN\PROTMAN.DOS error" when
	you start your computer; however, it is safe to ignore this error.
	
	Additional query words: 3.11 tcp ip protocol manager
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
