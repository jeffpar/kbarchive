---
layout: page
title: "Q68649: Troubleshooting Windows 3.0 Standard Mode Problems"
permalink: /kb/068/Q68649/
---

## Q68649: Troubleshooting Windows 3.0 Standard Mode Problems

{% raw %}

	Article: Q68649
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may experience problems running Microsoft Windows version 3.0 in standard
	mode. These problems include the following:
	
	- Windows hanging at the logo screen
	
	- Unrecoverable Application Errors (UAEs)
	
	- Windows defaulting to real mode even when you type Win
	
	MORE INFORMATION
	================
	
	The following steps may reduce problems running Microsoft Windows version 3.0 in
	standard mode:
	
	1. Ensure that the system has at least an 80286 processor and has enough memory
	  to run in standard mode. You need between 384K to 512K of combined
	  conventional and extended memory to run Windows in standard mode. You should
	  have at least 128K free conventional memory and at least 192K free extended
	  memory.
	
	2. Verify that Windows can run in real mode. If so, you may have installed
	  mouse, keyboard, video, or printer drivers designed for an earlier version of
	  Windows. These drivers often prevent Windows from running in standard mode.
	  Update to the proper Windows 3.00 driver. If Windows doesn't run in real or
	  standard mode, you may have selected the wrong driver or computer type.
	  Reinstall Windows.
	
	3. Check your AUTOEXEC.BAT and CONFIG.SYS files for TSRs
	  (terminate-and-stay-resident programs), sufficient buffers, files, and
	  environment space. For more information on troubleshooting the AUTOEXEC.BAT
	  and CONFIG.SYS files, query on the following words:
	
	  tshoot and AUTOEXEC.BAT
	
	4. Verify that Windows 3.00 is correctly installed on the system by clicking the
	  Setup icon from the Main group of Program Manager. Check that the correct
	  keyboard, pointing device, video driver, and network were chosen during
	  setup. Also check through the "Microsoft Windows Version 3.00 Hardware
	  Compatibility List" to see if your computer requires special handling. If so,
	  exit Windows and reinstall, using only minimum drivers (no mouse, no network,
	  lower-resolution video driver) with the SETUP/I option.
	
	5. Disable the autoswitching or autosensing feature on the video card if
	  applicable.
	
	6. Disable RAM shadowing if supported by the system.
	
	7. Verify that you are using the correct version of DOS for the system. You
	  should be using a DOS version 3.10 or later that was designed for the
	  machine. For example, do NOT use IBM PC DOS on non-IBM computers and
	  vice-versa.
	
	8. Ensure that HIMEM loads successfully. If not, try ALL A20 handlers 1 to 8.
	  The CONFIG.SYS file should include the /m:x switch on the DEVICE=C:\HIMEM.SYS
	  line, where x denotes a handler from 1 to 8. For example, if you are using a
	  PS2, this line should read DEVICE=C:\HIMEM.SYS /M:2. Some A20 handlers may
	  lock up your computer. As a result, have a bootable DOS floppy disk available
	  in case of problems.
	
	9. Install Windows in a clean directory. Do not install Windows version 3.00
	  over a 2.x version of Windows because some files and drivers may not get
	  updated properly.
	
	10. Confirm that you are using a recent system BIOS. If not, you may want to
	  contact the manufacturer for an update.
	
	11. Some 286 computers may not run Windows in standard mode unless you put the
	  statement PadCodeSegments=1 in the [Standard] section of the SYSTEM.INI
	  file.
	
	Additional query words: 3.00 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
