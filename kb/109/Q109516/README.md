---
layout: page
title: "Q109516: SETUP.TXT from Windows for Workgroups 3.11 (Part 1 of 3)"
permalink: /kb/109/Q109516/
---

## Q109516: SETUP.TXT from Windows for Workgroups 3.11 (Part 1 of 3)

	Article: Q109516
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft Windows for Workgroups
	version 3.11 SETUP.TXT file.
	
	MORE INFORMATION
	================
	
	MS-DOS is a registered trademark and Windows is a trademark of Microsoft
	Corporation.
	
	AT&T is a registered trademark of American Telephone and Telegraph Company.
	RAMpage! is a registered trademark of AST Research, Inc.
	SideKick is a registered trademark of Borland International, Inc.
	PC Tools and PC Tools Deluxe are trademarks of Central Point Software, Inc.
	COMPAQ is a registered trademark of Compaq Computer Corporation.
	HP is a registered trademark of Hewlett-Packard Company.
	IBM and PS/2 are registered trademarks of International
	Business Machines Corporation.
	Intel is a registered trademark, and Inboard and LANSight are trademarks,
	of Intel Corporation.
	Logitech is a trademark of Logitech, Inc.
	NEC is a registered trademark of NEC Corporation.
	Exos, NetWare, and Novell are registered trademarks of Novell, Inc.
	Norton Utilities is a registered trademark of Peter Norton Computing,
	Incorporated.
	386MAX is a registered trademark of Qualitas, Inc.
	Radius is a trademark of Radius, Inc.
	Stacker is a registered trademark of STAC Electronics.
	Norton Anti-Virus is a registered trademark of Symantec Corporation.
	Zenith is a registered trademark of Zenith Electronics Corporation.
	
	------------------------------------------------------------
	
	SETUP.TXT
	=========
	
	This file contains information about problems that may occur while you are
	running Windows for Workgroups Setup or when you are using terminate-and-
	stay-resident (TSR) programs or drivers with Windows for Workgroups or
	Setup. If you are using a TSR or if you encounter problems setting up
	Windows for Workgroups, read this document BEFORE you run Setup again.
	
	GENERAL SETUP NOTES
	===================
	
	This section includes notes on specific system configurations that may
	prevent Setup from installing Windows for Workgroups successfully. A
	possible solution to each problem is provided.
	
	If you are using a hardware or software product listed here, follow the
	proposed recommendations before you run Setup.
	
	Network Cards
	-------------
	
	If you are using one of the following network cards, you must run
	Setup with the /i option:
	
	   Novell(R)/Anthem NE1500
	   Novell/Anthem NE2100
	   Advanced Micro Devices (AMD) AM2100
	   Microdyne Exos(R) 105
	
	To do this, type the following at the MS-DOS prompt:
	
	   setup /i
	
	MS-DOS(R) Screen Savers
	-----------------------
	
	If you are using an MS-DOS screen saver, you should turn it off before
	running Setup. These screen savers can cause problems when running Setup.
	
	COMPAQ(R) Computer with MS-DOS Version 5.0 or later and EGA or VGA Display
	------------------------------------------------------------
	
	If you are using the upgrade version of Microsoft MS-DOS 5.0 or later,
	check your CONFIG.SYS file to make sure the following drivers (if present)
	appear in this order:
	
	   HIMEM.SYS
	   EMM386.EXE
	   ANSI.SYS
	
	Note: If you are using the COMPAQ version of MS-DOS 5.0, HIMEM.EXE is used
	in place of HIMEM.SYS and CEMM.EXE is used in place of EMM386.EXE.
	
	If ANSI.SYS is loaded before HIMEM.SYS or EMM386.EXE (or if you are using
	COMPAQ MS-DOS 5.0 before HIMEM.EXE or CEMM.EXE), Setup may restart your
	system before Windows for Workgroups is installed. Also, if you are using
	the DOS=HIGH,UMB command line to load MS-DOS into upper memory, loading
	EMM386.EXE (or CEMM.EXE) before loading ANSI.SYS will create the maximum
	amount of upper memory space on a COMPAQ computer.
	
	AT&T(R) Safari Computer
	-----------------------
	
	If you have an AT&T Safari computer, you cannot maintain two versions of
	Windows on your system. You must upgrade over your previous version of
	Windows, if you have one. If you set up Windows for Workgroups version 3.11
	in its own directory, it will not use the special drivers required to run
	on the Safari computer.
	
	Displays That May Require Driver Updates with Windows for Workgroups
	--------------------------------------------------------------------
	
	Certain third-party display drivers designed for Windows version 3.0 can
	cause problems with Windows for Workgroups version 3.11. The most serious
	problem is a system failure while you are running Windows for Workgroups
	Setup. If you encounter this problem, run Custom Setup, and then select one
	of the standard display types, such as VGA, that is provided with Windows
	for Workgroups.
	
	With other Windows version 3.0 display drivers, Windows for Workgroups may
	be set up successfully, but TrueType fonts may not appear correctly on your
	screen.
	
	An updated driver may be available from your display vendor or 
	manufacturer. 
	
	Windows version 3.0 drivers for the following display adapters may cause
	problems:
	
	- ATI Graphics Ultra, Vantage, and Mach32
	
	NOTE: These adapters are 8514/a-compatible and run well with the 8514/a
	driver provided with Windows for Workgroups.
	
	- DGIS display adapters (Direct Graphics Interface Standard)
	 from Graphic Software Systems, including the following:
	
	    NEC(R) MultiSynch Graphics Engine (MGE)
	    Zenith(R) Z-649
	    HP(R) IGC-10, IGC-20
	    GSS 1000 Series
	
	NOTE: Some DGIS-based adapters are TIGA-compatible and run well when used
	with the appropriate TIGACD.EXE MS-DOS driver and with the TIGA driver
	provided with Windows for Workgroups.
	
	- HP Ultra VGA (versions earlier than 1.4 only)
	- IBM(R) Image Adapter/A
	- Matrox MG Series/M-WIN Series
	- Palettized VGA 640x480, 16-color (provided with Windows
	  Multimedia Extensions version 1.0)
	- Radius(R) SVGA MultiView
	
	- RGDI (Renaissance Graphics Device Interface) display
	 adapters from Appian, Inc., including the following:
	
	      Appian Rendition II, IIe, II/XE, and III
	      Appian GV1024
	      Decpc 433
	
	- S3 adapters, including the following:
	
	     Orchid Fahrenheit 1280
	     STB WIND/X
	     Diamond Stealth VRAM
	
	Using the ATI Mach 32 Video Adapter
	-----------------------------------
	
	Before you run Windows Setup, make sure the Mach 32 adapter is set up
	correctly. In the Mach 32 Install program, choose the Set Power-Up
	Configuration option. Set the VGA Memory Size to half the RAM available on
	the Mach 32 adapter. Since most Mach 32 adapters come with 1 MB of RAM, the
	appropriate setting is usually 512K.
	
	Using Stacker(R)
	----------------
	
	If you are using Stacker to compress your hard disk, you need to take the
	following steps before setting up Windows for Workgroups.
	
	- If you want to use a swap file with Windows for Workgroups, you must set
	up the swap file on the uncompressed drive. When you set up Stacker, you
	can leave at least 1 MB of disk space uncompressed for storing system
	files. To leave enough space for the swap file, it is recommended that the
	amount of uncompressed disk space equal at least twice the amount of system
	memory. For example, if your system has 4 MB of memory, you should leave at
	least 8 MB of disk space uncompressed.
	
	If Stacker is already set up on your system and there is not enough
	uncompressed disk space for a swap file, you can run the STAC utility
	provided with Stacker to increase the amount of uncompressed disk space.
	For more information, see your Stacker documentation.
	
	- If you are using Stacker version 2.0 or later, Windows for Workgroups
	Setup modifies your CONFIG.SYS and AUTOEXEC.BAT files. When Setup finishes
	making the modifications, it displays a message notifying you of the
	modifications. If you have used Stacker to swap your startup drive, when
	you restart your system Stacker will ask whether you want to update to the
	new version of the CONFIG.SYS or AUTOEXEC.BAT file. It is  recommended that
	you update.
	
	If you are using a version of Stacker earlier than 2.0, you may need to
	modify your CONFIG.SYS and AUTOEXEC.BAT files yourself. For more
	information, see the following topic, "Modifying Your CONFIG.SYS and
	AUTOEXEC.BAT Files Yourself."
	
	- For best performance, do not use SMARTDrive to cache the compressed
	drive. You only need to cache the uncompressed drive. You can include
	options on the SMARTDRV.EXE line of your CONFIG.SYS file to specify which
	drives to cache.
	
	For example, if the Stacker swap utility swaps drives C and D, so that C is
	compressed and D is uncompressed, you would include the following line in
	your AUTOEXEC.BAT file:
	
	  c:\windows\smartdrv.exe c- d+
	
	For more information about swap files and using SMARTDrive, see Chapter 11,
	"Managing Memory and Performance," in the "Microsoft Windows for Workgroups
	User's Guide."
	
	Solving Memory Conflicts by Using MONOUMB.386 or MONOUMB2.386
	-------------------------------------------------------------
	
	If you encounter the following message when you start Windows for
	Workgroups, your display driver may be accessing the monochrome address
	range (B000-B7FF), which prevents the memory manager from using this range
	for upper memory blocks:
	
	  Windows cannot set up an upper memory block at segment B000. Exclude
	  this address space by using the syntax of your memory manager. For more
	  information, use an MS-DOS editor to read the SETUP.TXT file.
	
	To solve this problem, try installing MONOUMB2.386 on your system.
	MONOUMB2.386 is a device driver that allows certain memory managers to use
	the monochrome address range for upper memory blocks even if your display
	driver is accessing this range.
	
	You can get MONOUMB2.386 from Windows for Workgroups 3.1 or from Microsoft.
	It is not included on the Windows for Workgroups 3.11 disks. To install
	MONOUMB2.386, carry out the following procedure:
	
	1. Copy and expand the MONOUMB2.38_ file to your Windows SYSTEM directory
	  by typing the following at the MS-DOS prompt:
	
	     expand  a:\monoumb2.38_  c:\windows\system\monoumb2.386
	
	2. Add the following setting to the [386Enh] section of your SYSTEM.INI
	  file:
	
	     device=monoumb2.386
	
	3. Start Windows for Workgroups.
	
	NOTE: MONOUMB2.386 may not work with some memory managers, such as
	EMM386.EXE. 
	
	You can also exclude the address region B000-B7FF. This specifies that the
	memory manager should not try to use this address range for upper memory
	blocks. For information about excluding specific address ranges, see the
	following topic.
	
	Solving Memory Conflicts by Excluding an Address Range
	------------------------------------------------------
	
	If you encounter the following message when you start Windows for
	Workgroups, and the address specified in the message is not B000, you must
	exclude the address range:
	
	  Windows cannot set up an upper memory block at segment xxxx. Exclude
	  this address space by using the syntax of your memory manager. For more
	  information, use an MS-DOS editor to read the SETUP.TXT file.
	
	If the address specified in the message is B000, you can try installing
	MONOUMB2.386 or MONOUMB.386, as described in the preceding topic.
	
	The method you use to exclude an address range depends on the memory
	manager you are using. For example, if you are using EMM386.EXE, you need
	to remove the I=xxxx option from the device=emm386.exe command line in your
	CONFIG.SYS file, where xxxx is the address range starting at the address
	specified in the error message.
	
	If you are using QEMM, you need to include the X= option on the
	device=qemm386.sys command line in your CONFIG.SYS file. For example, to
	exclude the address range C000-C7FF, you would specify the following:
	
	    device=qemm386.sys  X=C000-C7FF
	
	For more information about modifying your CONFIG.SYS file, see your MS-DOS
	documentation. For more information about installing and configuring
	EMM386.EXE, see "Managing Memory and Performance" in your Windows or
	Windows for Workgroups user's guide. For information about installing and
	configuring other memory managers, see the documentation provided with your
	memory manager.
	
	Modifying Your CONFIG.SYS and AUTOEXEC.BAT Files Yourself
	---------------------------------------------------------
	
	When you set up Windows for Workgroups, Setup usually places the HIMEM.SYS,
	SMARTDRV.EXE, and EMM386.EXE files in the Windows directory. If the Windows
	directory is on a disk that is not available when you start your computer,
	such as a removable or nonlocal disk, or if Setup detects one of the
	following conditions, Setup does not modify your CONFIG.SYS or AUTOEXEC.BAT
	file:
	
	- Your boot drive has been modified by a disk-compression utility.
	
	- Your CONFIG.SYS file contains references to block device drivers.
	
	- Your CONFIG.SYS file is set up for multiple configurations.
	
	- There is not enough available space on your hard disk to copy
	  the files.
	
	- The files are already installed on your system, and Setup
	  cannot overwrite them (they are read-only).
	
	Instead, Setup writes proposed changes to the CONFIG.WIN and AUTOEXEC.WIN
	or the CONFIG.00x and AUTOEXEC.00x files. In this case, you must either
	move the HIMEM.SYS, SMARTDRV.EXE, and EMM386.EXE files to a drive that is
	available when you start your computer, or use a text editor to modify your
	CONFIG.SYS or AUTOEXEC.BAT file so that any references to HIMEM.SYS,
	SMARTDRV.EXE, and EMM386.EXE appear after the device= command line used to
	load the drivers for your disk drives. Refer to the CONFIG.WIN and
	AUTOEXEC.WIN or the CONFIG.00x and AUTOEXEC.00x files for the proposed
	changes.
	
	Using Multiple System Configurations with Windows for Workgroups
	----------------------------------------------------------------
	
	MS-DOS version 6.0 or higher lets you define multiple system configurations
	in a single CONFIG.SYS file. When you install Windows for Workgroups 3.11,
	If you are running MS-DOS version 6.0 or higher, Setup checks the
	CONFIG.SYS file for the [menu] keyword section to determine whether the
	CONFIG.SYS file contains multiple configurations. If so, Windows for
	Workgroups 3.11 Setup creates a file called CONFIG.WIN in the Windows
	directory which contains the entries that need to be present in the
	CONFIG.SYS file.
	
	Setup will not automatically change the CONFIG.SYS file in order to
	preserve the user's configuration in case it has difficulty interpreting
	the user's environment. Once Setup has finished, you can open the
	CONFIG.SYS file and the new CONFIG.WIN file that Setup created, and merge
	the two together.
	
	NOTE: [Windows for Workgroups] is used in this section to refer to the
	configuration block in your CONFIG.SYS file that you use for your Windows
	for Workgroups configuration. The exact name of this block may be different
	than that used here depending on the name you used for your configuration.
	
	When using the multiple-configuration capability in MS-DOS 6 (or any other
	third-party product that provides similar capabilities), it is important to
	note the following information:
	
	The following lines should be in either the [Common] configuration block or
	the [Windows for Workgroups] configuration block of the CONFIG.SYS file so
	that the Windows for Workgroups 3.11 networking components will load
	properly:
	
	    device=C:\WINDOWS\HIMEM.SYS
	    device=C:\WINDOWS\IFSHLP.SYS
	
	NOTE: If you also have a configuration block in your CONFIG.SYS file for
	running Microsoft LAN Manager or Windows for Workgroups 3.1 that you wish
	to continue to use after installing Windows for Workgroups 3.11, place the
	IFSHLP.SYS device driver line in your Windows for Workgroups 3.11
	configuration block instead of in the [common] configuration block. If you
	place IFSHLP.SYS in your [common] configuration block, it will prevent the
	network drivers for LAN Manager or Windows for Workgroups 3.1 from loading
	properly.
	
	Other device driver lines that can be in either the [Common] configuration
	block or the [Windows for Workgroups] configuration block include:
	
	    device=C:\WINDOWS\EMM386.EXE
	    device=C:\WINDOWS\SMARTDRV.EXE /DOUBLE_BUFFER
	
	If you were previously using Windows for Workgroups 3.1, you can remove the
	following device driver lines from the [Windows for Workgroups] block in
	your CONFIG.SYS file if they are still present once Windows for Workgroups
	3.11 has been installed.
	
	    c:\windows\protman.dos /i:c:\windows
	    c:\windows\<network card driver>.DOS { for example,
	    EXP16.DOS }
	    c:\windows\workgrp.sys
	
	If these device driver lines appear in your CONFIG.SYS file more than once,
	Windows for Workgroups Setup only removes their first occurrence. If your
	[Windows for Workgroups] block is not the first one in your CONFIG.SYS
	file, you may need to move them by hand from the [Windows for Workgroups]
	block by hand.
	
	Third-party network transports should be moved to the transports= line in
	the [network drivers] section of the SYSTEM.INI file.
	
	The CONFIG.SYS and AUTOEXEC.BAT files are no longer used to load the NDIS
	network adapter card drivers and network protocol drivers. Windows for
	Workgroups 3.11 specifies the network configuration in the SYSTEM.INI and
	PROTOCOL.INI files.
	
	If you are using different network adapter card drivers or network
	protocols and want to switch between these different configurations, the
	SYSTEM.INI and PROTOCOL.INI files must be changed to reflect the
	configuration settings. The simplest way to enable a quick change of
	configurations is to maintain separate copies of SYSTEM.INI and
	PROTOCOL.INI files that reflect the adapters or protocols you need to
	support.
	
	KBCategory: kbnetwork kbdisplay kb3rdparty kbref
	KBSubcategory: mmwin win30
	
	Additional query words: wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
