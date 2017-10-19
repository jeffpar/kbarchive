---
layout: page
title: "Q148311: XCLN: Setup /G Fails on 16-bit Client"
permalink: /kb/148/Q148311/
---

## Q148311: XCLN: Setup /G Fails on 16-bit Client

	Article: Q148311
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Setup from the Microsoft Exchange Windows 3.x client installation
	point using the following command
	
	  setup /g c:\setup.log
	
	the following Setup - Usage message box appears:
	
	  Usage:  setup [/A]
	  Use the /A switch to run in administrator mode
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 1.1 of the Microsoft
	ACME Setup program for Windows 3.x. This version does not support log files and
	no updated versions will be produced.
	
	Please note that this is also true for the /r switch of setup.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0
	
	=============================================================================
	
