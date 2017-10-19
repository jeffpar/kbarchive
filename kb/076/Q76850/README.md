---
layout: page
title: "Q76850: README.TXT: Using HIMEM.SYS"
permalink: /kb/076/Q76850/
---

## Q76850: README.TXT: Using HIMEM.SYS

	Article: Q76850
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	1.00
	
	WINDOWS
	
	kbref
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Windows with Multimedia Extensions
	version 1.0 README.TXT file. The Setup program copies this file to the Windows
	with Multimedia Windows directory.
	
	This information does not apply to later versions of Windows.
	
	MORE INFORMATION
	================
	
	Using HIMEM.SYS
	---------------
	
	HIMEM.SYS is a driver required by Windows 3.0 for using extended
	memory. It must be included in your CONFIG.SYS file. The method HIMEM
	uses to access extended memory depends on your hardware.
	
	When you boot your computer, HIMEM is loaded from your CONFIG.SYS
	file. After it is loaded, you will see a message like the following
	telling you the method HIMEM will use to access extended memory on
	your computer.
	
	 Installed A20 handler number X.
	
	where X is 1 through 8 which corresponds to one of the following
	methods:
	
	     Number   Name               Computer type
	 --------------------------------------------------------------
	       1        at               ; IBM AT or 100% compatible.
	       2        ps2              ; IBM PS/2
	       3        ptlcascade       ; Phoenix Cascade BIOS
	       4        hpvectra         ; HP Vectra (A & A+)
	       5        att6300plus      ; AT&T 6300 Plus
	       6        acer1100         ; Acer 1100
	       7        toshiba          ; Toshiba 1600 & 1200XE
	       8        wyse             ; Wyse 12.5 Mhz 286
	
	If HIMEM does not work properly, you can try a different method.
	Specify the switch for your computer type on the device=HIMEM.SYS line
	in your CONFIG.SYS file. Computer type corresponds to either the
	number or the name of your computer from the table.
	
	For example the following lines are equivalent:
	
	 device=c:\himem.sys /M:ps2
	 device=c:\himem.sys /M:2
	
	This entry forces HIMEM to use the IBM PS/2 A20 method for
	accessing extended memory.
	
	Additional query words: MMWIN kbmm readme
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	
