---
layout: page
title: "Q93124: Setting up WfW with TCP Manually: Resource Kit Manual Error"
permalink: kb/093/Q93124/
---

## Q93124: Setting up WfW with TCP Manually: Resource Kit Manual Error

	Article: Q93124
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	On page E-5 of the Microsoft Windows for Workgroups "Resource Kit" version 3.1
	manual, the device driver name in the [ms$tcp] section of the PROTOCOL.INI file
	is incorrectly shown in lowercase letters:
	
	  [ms$tcp]
	  drivername=TCPIP$ (not tcpip$ as shown in the guide)
	
	SYMPTOMS
	========
	
	If the drivername is lowercase, TCPDRV.DOS fails to initialize in the CONFIG.SYS
	file, and this error message is displayed:
	
	  DOS TCP/IP Resident Driver Initialzation failed
	
	(with "initialization" misspelled as shown).
	
	CAUSE
	=====
	
	Initialization fails because the drivername contains lowercase letters.
	
	RESOLUTION
	==========
	
	Use uppercase letters for the drivername.
	
	LAN Manager 2.2 includes a protocol disk in Windows for Workgroups format, so you
	can ignore the NDIS transport protocol integration procedure described in the
	"Resource Kit."
	
	REFERENCES
	==========
	
	Microsoft Windows for Workgroups "Resource Kit," Appendix E, p. E-5.
	
	Additional query words: wfw wfwg 2.2 2.20 failed ntdocerr doc err
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
