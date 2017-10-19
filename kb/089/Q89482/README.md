---
layout: page
title: "Q89482: NET START WORKSTATION Command AutoStart= Switch in WFWG"
permalink: /kb/089/Q89482/
---

## Q89482: NET START WORKSTATION Command AutoStart= Switch in WFWG

	Article: Q89482
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Workgroup Connections workstation services may run either the basic or full
	redirector.
	
	Type the following to load basic workstation services (basic services are the
	default):
	
	  net start workstation
	
	-or-
	
	  net start basic
	
	Type the following to load the full redirector services:
	
	  net start full
	
	You can change the default workstation service to full by adding the entry
	AutoStart=Full in the [Network] section of the SYSTEM.INI file.
	
	MORE INFORMATION
	================
	
	The full redirector differs from the basic redirector in that it allows
	named-pipe support and full LAN Manager API support.
	
	The AutoStart= entry specifies which network terminate-and-stay- resident (TSR)
	programs are loaded when the NET START command is issued with no arguments. By
	default, this performs only a NETBIND to complete loading of protocols and
	adapter drivers. If a later NET command requires loading of a redirector, the
	full redirector is loaded by default.
	
	If, however, you change the entry to AutoStart=Basic as the Workgroup Connections
	installation program does, the NET START command placed in your AUTOEXEC.BAT
	file starts the basic redirector. When the redirector loads, the NetBEUI TSR
	also loads (if you don't already have a NetBIOS protocol present).
	
	Other NET START options include:
	
	  NET START [{POPUP | BASIC | FULL | WORKSTATION | NETBIND |
	  NETBEUI}] [/LIST] [/YES]
	
	  POPUP           Loads the pop-up interface into memory.
	                  Use this option if the pop-up interface
	                  is not automatically loaded each time you
	                  start your computer.
	  BASIC           Starts the basic redirector.
	  FULL            Starts the full redirector.
	  WORKSTATION     Starts the default redirector.
	  NETBIND         Binds protocols and network card drivers.
	  NETBEUI         Starts the NetBIOS interface.
	  /LIST           Displays a list of the Workgroup Connection
	                  components that have been started.
	  /YES            Carries out the NET START command without
	                  first prompting you to provide information or
	                  confirm actions.
	
	This entry takes a comma-separated list; for example
	
	  AutoStart=NETBEUI,BASIC,POPUP
	
	causes the indicated three services to start when NET START is issued from
	AUTOEXEC.BAT.
	
	Additional query words: 3.10 3.11 named pipe wc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : :1.0,3.1,3.11
	Issue type        : kbinfo
	
	=============================================================================
	
