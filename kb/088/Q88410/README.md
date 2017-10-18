---
layout: page
title: "Q88410: Windows Err Msg: The Microsoft Windows 32-Bit Disk..."
permalink: kb/088/Q88410/
---

## Q88410: Windows Err Msg: The Microsoft Windows 32-Bit Disk...

	Article: Q88410
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-APR-2000
	
	3.10 3.11
	
	WINDOWS
	
	kb3rdparty kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Windows or Windows for Workgroups, you receive one of
	the following error messages:
	
	  The Microsoft Windows 32-bit disk driver (WDCTRL) cannot be loaded. There is
	  unrecognizable disk software installed on this computer.
	
	  -or-
	
	  The Microsoft Windows 32-bit disk driver (WDCTRL) cannot be loaded. There is
	  a conflict with another virtual device.
	
	  -or-
	
	  This application has tried to access the hard disk in a way that is
	  incompatible with the Windows 32-bit disk access feature (WDCTRL). This may
	  cause the system to become unstable.
	
	  -or-
	
	  The Microsoft Windows 32-bit disk driver (WDCTRL) cannot be loaded. There is
	  unrecognizable disk software installed on this computer. The address that
	  MS-DOS uses to communicate with the hard disk has been changed. Some
	  software, such as disk-caching software, changes this address. If you aren't
	  running such software, you should run a virus-detection program to make sure
	  the computer is virus free. To continue starting Windows without using the
	  32-bit disk driver, press any key.
	
	CAUSE
	=====
	
	The above error messages can be displayed when:
	
	- The system is infected with a virus.
	
	  -or-
	
	- You are running the PC Cillin anti-virus program.
	
	  -or-
	
	- The Device=*WDCTRL entry occurs more than once in [386Enh] section of the
	  SYSTEM.INI file.
	
	  -or-
	
	- You are using a third-party replacement for WDCTRL and you have reinstalled
	  Windows.
	
	  -or-
	
	- You are loading a real-mode driver in the CONFIG.SYS file that alters the
	  manner in which Windows monitors and controls INT 13h.
	
	  -or-
	
	- Using a QD6500A VLB controller that was installed in Windows 3.1 and then
	  installing WFW 3.11. After the install there will be an *int13, WDCTRL, and
	  QDICTRL.386 in [386Enh] section of system.ini. QDICTRL.386 alone breaks the
	  IFSHLP.SYS. Remark out the QDICTRL.386 line and use the WDCTRL. Leave the
	  QD6500.SYS line in the config.sys.
	
	MORE INFORMATION
	================
	
	The System Is Infected with a Virus
	-----------------------------------
	
	During startup, if Windows detects that a particular undocumented interrupt has
	been hooked by a "program" it does not recognize, Windows displays one of the
	above messages. Quite often, the program it does not recognize is a virus. The
	Stoned, Bloomington, and Form viruses can cause these errors.
	
	To correct this problem, run virus-detection software to detect and remove any
	viruses from the hard disk drive. The Anit-CMOSa virus will also cause this;
	McAfee v2.14 will find, but not cure it.
	
	
	You Are Running the PC Cillin Anti-Virus Program
	------------------------------------------------
	
	PC Cillin anti-virus software can cause these error messages. For more
	information on PC Cillin and problems with Windows, query on the following words
	in the Microsoft Knowledge Base:
	
	  pc cillin and windows
	
	You Are Using a Third-Party Replacement
	for WDCTRL and You Have Reinstalled Windows
	-----------------------------------------------------------------------------------
	
	If you have a Western Digital Caviar 2540 hard disk drive (or another model that
	uses WDCDRV.386 as a replacement for WDCTRL) and you reinstall Windows to the
	same directory, Windows puts WDCTRL in the SYSTEM.INI file but does not remove
	the third-party driver. Removing the DEVICE=*WDCTRL entry from the SYSTEM.INI
	file corrects this problem.
	
	
	You are Loading a Real-Mode Driver in the CONFIG.SYS File That
	Alters the Manner in Which Windows Monitors and Controls INT 13h
	-------------------------------------------------------------------------------------------------------------------------------
	
	Real-mode drivers that manipulate the way in which INT13 calls are handled may
	prevent the 32-bit disk access driver from loading.
	
	The issue can also occur if the CD-ROM drivers for a new 50-speed CD-ROM drive
	conflict with 32-bit disk access. Disabling 32-bit disk access in the Virtual
	Memory settings in the 386 Enhanced tool in ControlPanel may allow the CD-ROM to
	be accessed in Windows with no error messages.
	
	Additional query words: 3rdparty err msg 3.10 3.11 scanning anti-virus unrecognized 32 bit disk access 32-bit diskaccess mcafee mcaffee pccillin pccillan cillan forms form michelangelo monkey [mon] stealth ripper Over the Top twice genb jenb jenp
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
