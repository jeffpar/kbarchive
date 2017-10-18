---
layout: page
title: "Q98633: Ping Utility Does Not Work with Windows for Workgroups"
permalink: kb/098/Q98633/
---

## Q98633: Ping Utility Does Not Work with Windows for Workgroups

	Article: Q98633
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	If you install TCP/IP protocol under Windows for Workgroups by using the WfW
	connectivity disk, then try to use the Ping utility, you get this error
	message:
	
	  Network modules not loaded, Program aborted.
	
	CAUSE
	=====
	
	This installation procedure copies NMTSR.EXE into the Windows directory but
	doesn't put NMTSR.EXE in the AUTOEXEC.BAT file.
	
	WORKAROUND
	==========
	
	Append NMTSR.EXE to the end of the AUTOEXEC.BAT file.
	
	Additional query words: wfw wfwg 2.20 2.2 tcp ip windows tcpip
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
