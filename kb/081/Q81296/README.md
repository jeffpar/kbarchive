---
layout: page
title: "Q81296: Toshiba T1600 and Windows 3.0 Setup Issues"
permalink: /kb/081/Q81296/
---

## Q81296: Toshiba T1600 and Windows 3.0 Setup Issues

{% raw %}

	Article: Q81296
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Prior to installing Microsoft Windows version 3.0 on a Toshiba T1600 portable
	computer, you need to use keyboard commands to enable the internal EGA and the
	auto gray scale mode.
	
	MORE INFORMATION
	================
	
	During Windows Setup, select Toshiba 1600 as the machine type rather than the
	default MS-DOS or PC-DOS System selection. Set the display type to EGA Black and
	White. Failure to set the proper video mode switches causes Windows to stop
	responding (hang) during Setup. Windows hangs after the EGALOGO.LGO file is
	copied and Setup switches to graphics mode.
	
	If you select Toshiba 1600 as the machine type, the following line is added to
	your CONFIG.SYS file:
	
	      DEVICE=C:\HIMEM.SYS /M:TOSHIBA
	
	If Setup cannot modify CONFIG.SYS, the CONFIG.SYS file must be edited with a
	plain ASCII text editor (such as Notepad). If you modify CONFIG.SYS with a text
	editor, make sure you use the /M:TOSHIBA or the /M:7 switch. If the switch is
	not used, A20 Handler Number 1 loads and the system performs a cold boot when
	you try to start Windows using the WIN command.
	
	The Toshiba T1600 is manufactured by Toshiba America, vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.0 3.0a toeshbi t 1600
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
