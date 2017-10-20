---
layout: page
title: "Q67508: BIOS Version for Tandy 3000 Computers"
permalink: /kb/067/Q67508/
---

## Q67508: BIOS Version for Tandy 3000 Computers

{% raw %}

	Article: Q67508
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ROM BIOS version needed for Windows version 3.0 to run in standard (286
	protected) mode on a Tandy 3000 is version 1.03.02.
	
	The Tandy 3000 uses an OEM (original equipment manufacturer) Phoenix ROM BIOS.
	The nomenclature of the OEM BIOS does not follow the "generic" ROM BIOS
	nomenclature. It is important that the Tandy/Phoenix ROM BIOS version 1.03.02 or
	later is used in these systems.
	
	MORE INFORMATION
	================
	
	BIOS versions earlier than 1.03.02 do not allow the 80286 processor to run in
	protected mode. Therefore, systems with an earlier ROM BIOS cannot run version
	3.00 in standard mode. This error message may be displayed, indicating a
	possible need for a ROM BIOS upgrade:
	
	  Unexpected hardware interrupt
	
	For more information, or for help in upgrading your ROM BIOS, please contact
	Tandy technical support or contact your local Tandy computer center.
	
	The Tandy products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.00a 3.0 3.0a 3rdparty KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
