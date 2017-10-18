---
layout: page
title: "Q90549: Novell NETX.COM May Reset System Time"
permalink: kb/090/Q90549/
---

## Q90549: Novell NETX.COM May Reset System Time

	Article: Q90549
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.10
	
	WINDOWS
	
	kbnetwork kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the Novell NetWare shell NETX.COM by resets the local workstation
	time to match that of the default (or preferred) server when loaded. If that
	server is in a different time zone, or otherwise has a different time-of-day (or
	date) than the local workstation, the local workstation's system clock may be
	reset to match the server's date and time.
	
	This behavior can be avoided by placing the following command in the
	workstation's SHELL.CFG file:
	
	  SET STATION TIME=OFF
	
	MORE INFORMATION
	================
	
	The Novell NetWare redirector (shell) NETX.COM (or equivalent) must be installed
	to allow connectivity to a Novell LAN. When NETX loads, it attaches the
	workstation to a default server, or a preferred server as specified by the user
	or network administrator.
	
	When the server is attached, NETX.COM by default resets the local workstation's
	date and time to match that of the server. If the server resides in a different
	time zone, or maintains a different date or time-of-day than that of the local
	workstation, the resetting of the workstation clock may result in an incorrect
	date and/or time relative to local time.
	
	To override the resetting of the local workstation time, the above line should be
	added to the SHELL.CFG file.
	
	The SHELL.CFG file is an ASCII text file and may be created and/or edited using
	any text editor, such as the MS-DOS 5.0 EDIT command, or the Windows for
	Workgroups Notepad program. NETX.COM should then be loaded in the following
	manner to read the configuration file:
	
	  NETX /C=[drive:][\path\]SHELL.CFG
	
	This instructs NETX to load and read the SHELL.CFG file from the drive and
	directory specified for proper configuration information. If SHELL.CFG is
	properly recognized, a verification appears that these features are enabled when
	the NetWare shell loads.
	
	For more information on other SHELL.CFG options, see the "NetWare Supervisor
	Reference Guide." Note that some SHELL.CFG options are new and will not be
	present in earlier versions of the NetWare documentation.
	
	For additional information, contact Novell technical support.
	
	The Novell products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
