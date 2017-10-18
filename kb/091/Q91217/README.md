---
layout: page
title: "Q91217: Remove Locator Service After Installing LM 2.1 3Com Tape"
permalink: kb/091/Q91217/
---

## Q91217: Remove Locator Service After Installing LM 2.1 3Com Tape

	Article: Q91217
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If you are using 3Servers and you are NOT running XNS on your network, remove
	both XNS and the Locator Service after installing the LAN Manager 2.1 tape. XNS
	is installed by default because it is required for the tape installation to
	succeed.
	
	MORE INFORMATION
	================
	
	Step 8 on page 3-5 of the "LAN Manager Installation and Configuration Guide for
	3Servers" states:
	
	  If you do not need XNS permanently, you can remove it with Remsetup, as
	  described in the Microsoft LAN Manager Protocol Installation and
	  Configuration Guide for 3Servers.
	
	This documentation does not indicate that Remsetup will NOT remove the Locator
	Service. Thus when you boot the machine, Locator will attempt to start and you
	will receive error messages.
	
	After removing XNS with Remsetup, follow the instructions on page 138 in the
	"Microsoft Upgrade Toolkit for 3Com Networks" manual to remove or disable the
	Locator Service.
	
	Reference(s):
	
	Additional query words: 2.1 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
