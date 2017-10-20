---
layout: page
title: "Q71731: Installing Windows Version 3.0 on IBM L40 Laptop"
permalink: /kb/071/Q71731/
---

## Q71731: Installing Windows Version 3.0 on IBM L40 Laptop

{% raw %}

	Article: Q71731
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are several special steps that must be taken to successfully install
	Windows on the IBM L40 386SX Laptop. If these steps are not taken, the following
	may occur:
	
	- The system stops responding (hang) during setup.
	
	- The system hangs during bootup when HIMEM.SYS is executed.
	
	- Windows exhibits erratic behavior.
	
	This information applies to Microsoft Windows versions 3.0, and 3.0a. This
	information does not apply to later versions of Windows.
	
	MORE INFORMATION
	================
	
	Keyboard
	--------
	
	The IBM L40 386SX Laptop has a detachable numeric keypad that must be attached
	when the Setup program is run. If the keypad is not attached, Setup will detect
	an 84-key keyboard, rather than the 101-key keyboard. In this case, the
	"Enhanced 101 or 102 key US" choice should be selected.
	
	Accepting the 84-key choice will not allow the keypad to be used with Windows, if
	it is attached later.
	
	Mouse
	-----
	
	"Microsoft or IBM PS/2 Mouse" should be selected in Setup.
	
	HIMEM.SYS
	---------
	
	The IBM L40 is a PS/2, but it does not have a Micro Channel bus. The L40 uses the
	AT-style bus, which causes HIMEM.SYS to use A20 handler number 1. This will
	cause the system to hang, or cause repeated beeps, during bootup. The IBM L40
	requires HIMEM.SYS to use handler number 2. The following line needs to be in
	the CONFIG.SYS file:
	
	     DEVICE=<drive><pathname>HIMEM.SYS /M:2
	
	L40 Suspend/Resume Option
	-------------------------
	
	The L40 has a Suspend/Resume option, which allows you to close the machine to
	change batteries and retain work in memory. This option will cause erratic
	behavior in Windows unless the following procedure is performed:
	
	1. The file PM_BIOS.386 must be in the WINDOWS\SYSTEM directory. This file can
	  be found on the IBM Reference Disk accompanying the L40.
	
	2. The following lines must be added to the [386ENH] section of the SYSTEM.INI:
	
	        EMMExclude=E000-EFFF
	        DMABufferSize=064
	        Device=PM_BIOS.386
	
	According to IBM, Windows should function normally on the L40 Laptop after these
	steps have been taken.
	
	The IBM products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 win30 3.00a lap top lap-top
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
