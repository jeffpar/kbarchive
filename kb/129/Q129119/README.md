---
layout: page
title: "Q129119: Unable to Set Typematic Rate on AT&amp;T Globalyst"
permalink: kb/129/Q129119/
---

## Q129119: Unable to Set Typematic Rate on AT&amp;T Globalyst

	Article: Q129119
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows NT 3.5, you are unable to set the typematic rate on a 90 mHz
	AT&T Globalyst 600 (3356) Pentium ISA/PCI. Changing these settings in the
	CMOS or in Control Panel has no effect.
	
	NOTE: The AT&T Globalyst 600 (3356) Pentium ISA/PCI in on the December 1994
	Hardware Compatibility List (HCL). The NCR H0150-STD1-12-17 and 3299-K440- V003
	are the standard keyboards for this computer.
	
	CAUSE
	=====
	
	The problem appears to be related to the speed of the machine. Slower machines
	with the same keyboard work fine, but the 90mhz machines fail consistently.
	
	MORE INFORMATION
	================
	
	The initialization code for i8042prt sends a control byte to the keyboard
	controller to set the typematic rate and the keyboard indicator lights. It then
	waits a preset, but arbitrary, amount of time for a return. If no return is
	received, a message is posted to event viewer and initialization proceeds. The
	waiting period is not configurable through the user interface or the registry.
	
	The Events posted include:
	
	  Event ID 19: I8042_SET_TYPEMATIC_FAILED
	  Message Text: Could not set the keyboard typematic rate and delay.
	  Status: 0xC0050013
	
	  Event ID 20: I8042_SET_LED_FAILED
	  Message Text: Could not set the keyboard indicator lights.
	  Status: 0xC0050014
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt light
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
