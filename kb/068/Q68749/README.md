---
layout: page
title: "Q68749: Windows Err Msg: Protected Mode Violation (LeadingTech 6000sx)"
permalink: kb/068/Q68749/
---

## Q68749: Windows Err Msg: Protected Mode Violation (LeadingTech 6000sx)

	Article: Q68749
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On the Leading Technology 6000 SX, if the extended features are enabled, you get
	the following protected-mode violation error message when you attempt to run
	Windows in standard or enhanced mode:
	
	  Protect Mode Violation, cancel all Programs and Restart Windows in Real Mode
	
	If the extended features are enabled, the Leading Technology 6000 SX displays the
	following message when you boot up:
	
	  Extended Features are enabled
	
	CAUSE
	=====
	
	Extended features on the Leading Technology 6000 SX is a disk caching program
	running in protected mode. This protected-mode program does not allow Windows to
	operate in protected mode. Windows can operate in real mode only, when extended
	features are enabled.
	
	WORKAROUND
	==========
	
	To enable Windows to run in the standard or 386 enhanced mode, change the system
	configuration and turn the Global Extended Features off. Use the Leading
	Technology's Utilities Disk to change the system configuration.
	
	MORE INFORMATION
	================
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise regarding this product's performance
	or reliability.
	
	REFERENCES
	==========
	
	Leading Technology Utilities Disk
	
	Additional query words: 3.00 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
