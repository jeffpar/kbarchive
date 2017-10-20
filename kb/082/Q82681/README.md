---
layout: page
title: "Q82681: How Windows 3.1 Looks for COM Ports"
permalink: /kb/082/Q82681/
---

## Q82681: How Windows 3.1 Looks for COM Ports

{% raw %}

	Article: Q82681
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows version 3.1 has solved most of the COM port configuration
	problems that existed in Windows 3.0. By looking at both the BIOS port table and
	SYSTEM.INI file, you can tell Windows exactly how your COM ports are configured
	without having to modify your BIOS port table with DEBUG.COM or any other
	program.
	
	MORE INFORMATION
	================
	
	Windows 3.1, in both standard and enhanced modes, checks the BIOS table at 40:0
	first to see if the BIOS has specified a base port address. If the table
	specifies the base, then that is what Windows uses.
	
	If the value is 0, then Windows checks the SYSTEM.INI [386enh] section for
	COMxBASE=xxxh. Windows also defaults the COM3 base port address to 3E8h:, which
	means that if there is a 0 value in the BIOS table at 40:4 and there is no
	COM3BASE= switch, then Windows assumes a base of 3E8h as if the switch exists.
	
	Windows would have defaulted COM4 to 2E8h, but this address overlaps both the
	8514 display adapter and the default configuration of some Arcnet adapters.
	
	The COMxBASE= switch entries can be created using the Ports section of Control
	Panel, so it is not necessary to edit the SYSTEM.INI file. It is not possible to
	override non-zero BIOS port table entries using a COMxBASE= switch.
	
	
	KBCategory: kbenv kbdisplay
	KBSubcategory: win31 wincomm
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
