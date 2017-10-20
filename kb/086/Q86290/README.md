---
layout: page
title: "Q86290: Microsoft Windows 3.1 &amp; MS-DOS 5 Upgrade"
permalink: /kb/086/Q86290/
---

## Q86290: Microsoft Windows 3.1 &amp; MS-DOS 5 Upgrade

{% raw %}

	Article: Q86290
	Product(s): Microsoft Disk Operating System
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-2001
	
	3.10    | 5.00
	WINDOWS | MS-DOS
	kbref
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Windows & MS-DOS 5 Upgrade
	APPNOTES.TXT file.
	
	MORE INFORMATION
	================
	
	MICROSOFT WINDOWS 3.1 & MS-DOS 5 UPGRADE
	
	APPNOTES.TXT
	====================================
	
	This file provides important information not included in the
	"Microsoft Getting Started" manual, the "Microsoft MS-DOS
	User's Guide and Reference," the "Windows User's Guide" or in
	online Help. Specifically, this file explains how to use applications
	with MS-DOS.
	
	For information about other files and documentation, see the
	"Welcome" section of "Getting Started."
	
	Look through the following table of contents to determine
	whether your application is included.
	
	Note: Sections 1 and 4 contain critical information
	     about using Intel Above Board and CodeView with
	     MS-DOS 5.0.
	
	For information about installing MS-DOS 5.0 and using
	hardware and networks with MS-DOS 5.0, see the README.TXT
	file. For the location of this file, see the PACKING.LST file
	on Setup disk 1.
	
	The following topics are discussed in this file:
	
	1. Above Board 286 and Above Board Plus Installation
	  Programs
	2. AutoCAD release 10
	3. AUTORUN.EXE
	4. CodeView
	5. Easel 6.0
	6. Fastback
	7. GeoWorks
	8. Lotus 1-2-3 version 3.0
	9. Manifest
	10. Paintbrush 2.0
	11. Paradox 3.5
	12. PC-Kwik Disk Accelerator
	13. PeachTree Complete III
	14. Pklite
	15. ProKey Plus
	16. Sidekick 2.0
	17. Soft-ICE
	18. Software Carousel
	19. Task Swapper and Asynchronous I/O
	20. Ventura Publisher
	21. WordPerfect WPINFO.EXE 5.1
	22. WordPerfect Office 3.0
	23. XTreeNet
	
	1. Above Board 286 and Above Board Plus Installation
	   Programs
	----------------------------------------------------
	
	CAUTION: The Intel Above Board installation program that
	        shipped before May 1989 tests extended memory in a
	        way that can corrupt extended memory.
	
	Before using an Above Board installation program prior to
	May 1989, make sure you haven't loaded software such as
	SMARTDrive or RAMDrive that uses extended memory.  After the
	Above Board has been installed, other software using
	extended memory is unaffected.
	
	2. AutoCAD
	---------------------
	To run AutoCAD release 10 and 11 (AutoCad 386) with MS-DOS,
	contact Autodesk.
	
	3. AUTORUN.EXE
	--------------
	If you can't use Mountain Network Solutions AUTORUN.EXE, a
	tape-drive backup program, contact your vendor for an
	upgrade.
	
	4. CodeView
	-----------
	CAUTION: Using versions 3.0 to 3.13 of the CodeView CV.EXE
	file may cause data loss if your system has a 80386 memory
	manager (such as EMM386.EXE) and device drivers or programs
	that use extended memory. To determine which version you
	have, type CV.EXE at the command prompt.
	
	To start CodeView versions 3.0 to 3.13 safely, use the
	CV.COM file included with MS-DOS 5.0, and HIMEM.SYS version
	2.77 or later.
	
	To use the CV.COM file included with MS-DOS 5.0, copy it
	from the Setup disks to the directory that contains your
	CV.EXE file.
	
	This problem has been fixed in CodeView version 3.14. Call
	Microsoft C Support to get this version.
	
	5. Easel 6.0
	------------
	Interactive Images Easel 6.0 is incompatible with the
	DOS=HIGH and EMM386 commands. Contact your vendor for an
	update.
	
	6. Fastback
	-----------
	If you have a version of Fifth Generation Systems Fastback
	earlier than 3.0, you must use the LOADFIX command before
	running Fastback or the Fastback installation program. Type
	the following:
	
	LOADFIX FB.EXE
	
	or
	
	LOADFIX FBINSTAL.EXE
	
	For information about the LOADFIX command, see the section
	"You receive the 'Packed file corrupt' message"
	in the "System Messages" section of Chapter 6, "Troubleshooting
	MS-DOS," in "Getting Started."
	
	7. GeoWorks
	-----------
	If you have a version of GeoWorks (PC/GEOS) earlier than
	1.2, use the SETVER command to report version number 4.01 to
	the GEOS.EXE file. Type the following:
	
	SETVER GEOS.EXE 4.01
	
	Do not run the installation program for GeoWorks Ensemble
	when MS-DOS Shell Task Swapper is active.
	
	Use the Exclusive Tasking option when running GeoWorks
	Ensemble with Windows.
	
	8. Lotus 1-2-3 version 3.0
	--------------------------
	For information about Lotus 1-2-3 version 3.0, see the
	section "Lotus 1-2-3 version 3.0 or 3.1 won't start" in the
	"Programs" section of Chapter 6, "Troubleshooting MS-DOS,"
	in "Getting Started."
	
	9. Manifest
	-----------
	Versions 1.01 and later of Quarterdeck Manifest are
	compatible with MS-DOS 5.0. If you have a version earlier
	than 1.01, contact your vendor for an upgrade.
	
	10. Paintbrush 2.0
	------------------
	If you have an EGA monitor and want to run Microsoft or
	ZSoft Paintbrush 2.0, you must remove the DEVICE=EGA.SYS
	command from your CONFIG.SYS file. After removing the
	command, you may have difficulty with screen swapping when
	using Task Swapper in MS-DOS Shell.
	
	11. Paradox 3.5
	---------------
	For information about Paradox version 3.5, see the section
	"Lotus 1-2-3 version 3.0 or 3.1 won't start" in Chapter 6,
	"Troubleshooting MS-DOS," in "Getting Started." This information
	also applies to Paradox 3.5.
	
	12. PC-Kwik Disk Accelerator
	----------------------------
	Do not load versions of Multisoft PC-Kwik Disk Accelerator
	earlier than 2.0 into the upper memory area.
	
	13. PeachTree Complete III Single-User Version
	----------------------------------------------
	If you are using the single-user version of PeachTree
	Complete III (batch 01 through batch 13), contact PeachTree
	for an update.
	
	There is no compatibility problem with the network version.
	
	14. Pklite
	----------
	Do not use Pklite to pack device drivers.
	
	If you have a PC-Kwik cache on your system, and you can't
	run a packed program, do one of the following:
	  * Use the LOADFIX command to start the program.
	  * Run MS-DOS 5.0 in conventional memory.
	  * Run a version of the program that was not packed with
	    Pklite.
	  * Disable asynchronous reads on the PC-Kwik cache.
	
	For information about the LOADFIX command, see the section
	"You receive the 'Packed file corrupt' message" in the
	"System Messages" section of Chapter 6, "Troubleshooting
	MS-DOS," in "Getting Started."
	
	15. ProKey Plus
	---------------
	If you have problems using a version of RoseSoft ProKey Plus
	earlier than 5.0, contact your vendor for an upgrade.
	
	ProKey Plus is incompatible with MS-DOS Editor and QBasic.
	
	16. Sidekick 2.0
	----------------
	If you are running MS-DOS 5.0 in the high memory area, use
	the following LOADFIX command to start Borland Sidekick 2.0:
	
	   LOADFIX sk2.exe
	
	For information about the LOADFIX command, see the section
	"You receive the 'Packed file corrupt' message" in the
	"System Messages" section of Chapter 6, "Troubleshooting
	MS-DOS," in "Getting Started."
	
	17. Soft-ICE
	------------
	When using Nu-Mega Soft-ICE, load it before loading other
	drivers. Otherwise, you may lose data stored in extended
	memory by drivers such as SMARTDrive.
	
	18. Software Carousel
	---------------------
	Software Carousel 5.01 is compatible with MS-DOS 5.0.
	If you have an earlier version, contact SoftLogic Solutions
	for an update.
	
	To use DOSKEY, load it after you load Software Carousel into
	memory.
	
	19. Task Swapper and Asynchronous I/O
	-------------------------------------
	Some programs that perform asynchronous communications are
	incompatible with MS-DOS Shell Task Swapper. Terminal-
	emulation software (such as SmartCom and Procomm Plus) and
	server/client software (such as Laplink and Blast) are
	asynchronous communications programs. If you can't use an
	asynchronous program with Task Swapper, contact your vendor
	for more information, or disable Task Swapper.
	
	20. Ventura Publisher
	---------------------
	If you can't start Ventura Publisher, make sure your Ventura
	Publisher directory is within the first 70 characters of the
	PATH command in your AUTOEXEC.BAT file.
	
	21. WordPerfect WPINFO.EXE 5.1
	------------------------------
	Some versions of the WPINFO.EXE file included with
	WordPerfect 5.1 are incompatible with MS-DOS 5.0. Contact
	your vendor for more information.
	
	22. WordPerfect Office 3.0
	--------------------------
	Some versions of WordPerfect Office 3.0 are incompatible
	with MS-DOS 5.0. Contact your vendor for more information.
	
	23. XTreeNet
	------------
	To use XTreeNet with MS-DOS Shell Task Swapper, select the
	Prevent Program Switch option in the MS-DOS Shell Advanced
	dialog box. For more information about specifying advanced
	properties, see Chapter 8 of the "Microsoft MS-DOS User's
	Guide and Reference."
	
	Additional query words: 3.1 3.10 5 5.0 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
