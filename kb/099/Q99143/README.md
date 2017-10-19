---
layout: page
title: "Q99143: Running ftp from Remote Boot Workstation"
permalink: /kb/099/Q99143/
---

## Q99143: Running ftp from Remote Boot Workstation

	Article: Q99143
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	If you try to run ftp from the LAN Manager TCP/IP Utilities from a remote boot
	workstation, you get this error :
	
	  "Network Modules Not Loaded"
	
	even if all modules required for ftp have been loaded.
	
	CAUSE
	=====
	
	The ftp utility needs two TSRs to be loaded before you execute it: nmtsr.exe,
	sockets.exe. Run Nmtsr.exe and Sockets.exe after you configure the remoteboot
	workstation with the TCP/IP protocol
	
	Now, to run ftp you must add this line to Config.sys :
	
	  " remdevice=c:\<lanroot>\protman\protman.dos /i:c:\<lanroot>"
	  (without the quotation marks)
	
	DO NOT insert a space in REMDEVICE. This line generates the error "Unrecognized
	command in config.sys," but allows ftp to function.
	
	You can also use the Config.sys COMMENT command to allow ftp to function without
	generating an error in Config.sys. Add this entry:
	
	  " COMMENT !
	  ! c:\<lanroot>\protman\protman.dos /i:c:\<lanroot>" (without the
	  quotation marks)
	
	
	Additional query words: wfw wfwg 2.20 remoteboot rpl remote boot tcpip utilities fail ftp.exe ftp
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
