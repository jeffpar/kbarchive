---
layout: page
title: "Q101042: Comprehensive List of MS-DOS 5 Documentation Errors"
permalink: kb/101/Q101042/
---

## Q101042: Comprehensive List of MS-DOS 5 Documentation Errors

	Article: Q101042
	Product(s): Microsoft Disk Operating System
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a comprehensive list of documentation errors reported for
	the MS-DOS 5 product documentation. The following topics are covered:
	
	"User's Guide and Reference"
	----------------------------
	
	- SETVER Can Be Used Without Being Installing as a Device Driver
	
	- Using the F4 and F5 Keys in DOSKEY
	
	- RAMDRIVE.SYS Maximum Size
	
	- Clarification of the 2.77 HIMEM.SYS Default Handle
	
	- Incorrect Syntax for RESTORE to View Backup Files
	
	- Misleading Information on Monochrome-4 Colors Scheme in Shell
	
	- HIMEM.SYS Is Not an Upper Memory Block Provider
	
	- EMM386.EXE Provides Minimum 64K EMS
	
	- MS-DOS 5 Upgrade Setup Does Not Repartition Hard Drive
	
	- SHIFT+code ASCII Code for C is 67, Not 66 as Shown
	
	- DRIVER.SYS Does Not Accept /I Option
	
	- PRINT Command /S: <ticks3> Switch
	
	- MS-DOS 5.0 Disk Densities Incorrectly Documented
	
	- MS-DOS 5.0 COUNTRY=061, COUNTRY=044, and Time Format
	
	"Getting Started"
	-----------------
	
	- Expanding New MS-DOS Shell Video Drivers
	
	- DCA 10NET Versions 4.20.2 and Later Work with MS-DOS 5.0
	
	MS-DOS 5 Upgrade README.TXT File
	--------------------------------
	
	- README.TXT and ROM Update Available from Columbia Data Products
	
	- README.TXT and 50-Line Mode with an ATI Wondercard
	
	MS-DOS 5 Upgrade APPNOTES.TXT File
	----------------------------------
	
	- APPNOTES.TXT Reference to LOADFIX Documentation Incorrect
	
	- APPNOTES.TXT and Software Carousel
	
	- APPNOTES.TXT Section 1.4 and CodeView 3.14
	
	- APPNOTES.TXT and Borland Turbo Debugger 386
	
	MS-DOS 5 Upgrade Package (Box)
	------------------------------
	
	- System Requirements Error on Microsoft MS-DOS 5 Upgrade Box
	
	"USER'S GUIDE AND REFERENCE"
	----------------------------
	
	SETVER Can Be Used Without Being Installing as a Device Driver
	--------------------------------------------------------------
	
	The following incorrect statement appears on page 562 of the version 5.0
	"Microsoft MS-DOS User's Guide and Reference":
	
	  Before you can use the SETVER command, the version table must be loaded into
	  memory by a device command in your CONFIG.SYS file.
	
	This is not true; the SETVER command can be issued regardless of whether or not
	SETVER.EXE has been loaded as a device driver.
	
	The version table can be modified via the SETVER command as long as SETVER.EXE
	resides in either the current directory or a directory specified in the PATH
	environment variable. For example, the command
	
	  SETVER FORMAT.COM 4.01
	
	would add FORMAT.COM to the version table, regardless of whether or not SETVER
	was specified as a device driver in the CONFIG.SYS file. However, the values in
	the table are not used by MS-DOS unless SETVER has been loaded. In the previous
	example, the entry would have been added to the version table. For the version
	table to take effect, SETVER must be loaded as a device driver in the CONFIG.SYS
	file with a statement such as the following:
	
	  DEVICE=C:\DOS\SETVER.EXE
	
	This line assumes that MS-DOS version 5.0 was installed in the C:\DOS directory,
	and the line is inserted into the CONFIG.SYS file by the MS-DOS 5 installation
	procedure. When this statement is present in the CONFIG.SYS file, the version
	numbers listed in the version table are used by MS-DOS when the specified
	program is executed. In the previous example, MS-DOS would report itself as
	version 4.01 to the program FORMAT.COM.
	
	Using the F4 and F5 Keys in DOSKEY
	----------------------------------
	
	On page 451 of the version 5.0 "Microsoft MS-DOS User's Guide and Reference" the
	F4 and F5 keys for DOSKEY are described. The information in the manual is
	misleading.
	
	The following is the actual behavior of the F4 and F5 keys:
	
	  F4 Deletes from the current character position up to the character you
	  specify (if your cursor happens to be on the first character, the
	  documentation is correct, but if it is at the default position, the end of
	  the line, then it does nothing).
	
	  F5 If you type and execute a few commands and then type another command, but
	  instead of executing it, you press F5, the current line is copied into the
	  buffer (used by F1, F2, F3, and so on). Pressing F3 causes the line to be put
	  in the command line. However, if the command executed prior to the one just
	  typed and copied to the buffer was longer than the current one copied to the
	  buffer, the end of the buffer is not cleared, and you get a combination of
	  the commands.
	
	For example, type the following commands at the MS-DOS command prompt:
	
	  " DIR
	  CLS
	  DIR
	  DIR A:
	  VER <F5>
	  F3" (without the quotation marks)
	
	The result: "VER A:" is displayed on the command line.
	
	According to the documentation, the result should be "VER" only. The DOSKEY
	history will now look like the list above without the VER command, since VER was
	not executed.
	
	RAMDRIVE.SYS Maximum Size
	-------------------------
	
	Page 614 of the "Microsoft MS-DOS User's Guide and Reference" for version 5.0
	incorrectly states
	
	  Valid values for DISK SIZE are in the range 16 through 4096.
	
	where the numbers are given in kilobytes for the size of the RAMDrive utility.
	The maximum value is not correct.
	
	The maximum value for RAMDRIVE.SYS is 32 MB minus 1K, which comes out to 32,767
	kilobytes.
	
	However, when HIMEM.SYS is being used as an XMS provider, RAMDRIVE.SYS can be no
	larger than 16 MB. This is due to a limitation in the version of HIMEM.SYS that
	shipped with MS-DOS 5.0.
	
	NOTE: The documentation error was corrected in the Help file that ships with
	MS-DOS 6.0. The HIMEM.SYS limitation was corrected in the version of HIMEM.SYS
	that ships with Microsoft Windows version 3.1 and MS-DOS version 6.0.
	
	Clarification of the 2.77 HIMEM.SYS Default Handle
	--------------------------------------------------
	
	At the end of the second paragraph on page 611, the "Microsoft MS-DOS User's
	Guide and Reference" states:
	
	  The default value for the /machine:xxxx switch is at or 1.
	
	This is unclear. By default HIMEM.SYS chooses the most appropriate handle for the
	machine it detects. If it does not detect a specific machine type, it then
	defaults to /M:1.
	
	If HIMEM.SYS is not loading correctly, the chosen default handle may be
	incorrect. Type the following to override the HIMEM.SYS default
	
	  " DEVICE=C:\DOS\HIMEM.SYS /M:#" (without the quotation marks)
	
	where "#" is the handle desired.
	
	NOTE: Since HIMEM.SYS may incorrectly default to a different handle than 1, make
	sure to try /M:1. HIMEM.SYS states what handle it uses at startup. Look for the
	following statement
	
	  Installed a20 handle #x
	
	where "x" is the handle used
	
	For more information on MS-DOS 5.0 HIMEM.SYS and machine handles, query on the
	following words:
	
	  himem and /m and dos and 5.0
	
	Incorrect Syntax for RESTORE to View Backup Files
	-------------------------------------------------
	
	On page 144 of the "Microsoft MS-DOS User's Guide and Reference" for version 5.0,
	the command syntax is incorrectly stated as "RESTORE C: A: /D."
	
	The correct syntax is:
	
	  RESTORE A: C:\*.* /D.
	
	- or -
	
	  RESTORE A: C:\*.* /D /S
	
	Misleading Information on Monochrome-4 Colors Scheme in Shell
	-------------------------------------------------------------
	
	The dimmed commands in the DOSSHELL menus are not visible when using the
	Monochrome-4 Colors scheme. The version 5.0 "Microsoft MS-DOS User's Guide and
	Reference" incorrectly states that the only color schemes in which the dimmed
	commands are not visible are Monochrome-2 Colors, and Reverse color.
	
	The information on page 33 of the version 5.0 "Microsoft MS-DOS User's Guide and
	Reference" is misleading. It should state that the dimmed commands are not
	visible in Monochrome-4 Colors, Monochrome-2 Colors, and Reverse color schemes.
	
	HIMEM.SYS Is Not an Upper Memory Block Provider
	-----------------------------------------------
	
	HIMEM.SYS is not an upper memory block (UMB) provider with any known chip set.
	
	Page 436 of the "Microsoft MS-DOS User's Guide and Reference" states:
	
	  On some computers, you might even be able to use HIMEM.SYS itself as the UMB
	  provider.
	
	This statement is incorrect. HIMEM.SYS does NOT have the capability to be used as
	a UMB provider under any circumstances.
	
	EMM386.EXE Provides Minimum 64K EMS
	-----------------------------------
	
	The minimum amount of expanded memory (EMS) that can be provided by EMM386.EXE is
	64K. Page 606 of the "Microsoft MS-DOS User's Guide and Reference" version 5.0
	manual incorrectly states that the minimum value is 16K.
	
	If the memory size is stated as 16K in the DEVICE= line that loads EMM386.EXE in
	the CONFIG.SYS file, the size will be adjusted to 64K and the following message
	will be displayed:
	
	  size of expanded memory pool adjusted
	
	For more information about how EMM386.EXE adjusts the expanded memory pool, query
	on the following words:
	
	  emm386 and ram and xms and 1024
	
	MS-DOS 5 Upgrade Setup Does Not Repartition Hard Drive
	------------------------------------------------------
	
	Page 149 of the "Microsoft MS-DOS User's Guide and Reference" version 5.0 manual
	states the following:
	
	  If MS-DOS 5.0 is the first operating system to be set up on your computer,
	  you can choose to partition your disk when you run the Setup program. By
	  default, the Setup program creates one primary DOS partition that occupies
	  the entire disk.
	
	The MS-DOS 5 Upgrade Setup program does not contain an option to create or
	repartition a hard drive. This information applies only to the full original
	equipment manufacturer (OEM) versions of MS-DOS 5.0, not to MS-DOS 5 Upgrade.
	
	The Microsoft MS-DOS 5 Upgrade is intended for users currently using MS-DOS
	version 2.11 or later who want to upgrade their current MS-DOS system to version
	5.0. Because the MS-DOS 5 Upgrade is designed for systems that have MS-DOS
	currently installed, the MS-DOS 5 Upgrade Setup program will only upgrade the
	current MS-DOS system to version 5.0. It will not repartition or reformat the
	hard drive.
	
	Once the MS-DOS 5 Upgrade installation has been completed, you can then
	repartition and format the hard drive.
	
	For more information on repartitioning hard drives with MS-DOS 5.0, query on the
	following words:
	
	  repartitioning and partition and backing and 5.00
	
	SHIFT+code ASCII Code for C is 67, Not 66 as Shown
	--------------------------------------------------
	
	Page 598 of the version 5.0 "Microsoft MS-DOS User's Guide and Reference" manual
	incorrectly states that the SHIFT+code ASCII key code for the for the letter C
	is 66. This information is incorrect. The correct SHIFT+code ASCII code for C is
	67.
	
	The ASCII code for C (uppercase C) is correctly included in the table on page
	632.
	
	DRIVER.SYS Does Not Accept /I Option
	------------------------------------
	
	Page 75 of the "Microsoft MS-DOS Getting Started" manual incorrectly shows the /i
	option being used with the device driver DRIVER.SYS.
	
	If you use /i with DRIVER.SYS, the following message will be displayed when
	booting your machine
	
	  INVALID SWITCH
	  ERROR IN CONFIG.SYS LINE X
	
	where "X" is the line that DRIVER.SYS is on in the CONFIG.SYS.
	
	The following lines appear on page 75 of the "Microsoft MS-DOS Getting Started"
	manual under Procedure 2, step 3:
	
	  device=driver.sys /d:0 /f:7 /i
	  device=driver.sys /d:1 /f:7 /i
	
	The /i option is only valid with the DRIVPARM statement that is loaded in the
	CONFIG.SYS file. /i specifies an electronically compatible 3.5-inch floppy disk
	drive.
	
	
	PRINT Command /S: <ticks3> Switch
	---------------------------------
	
	The explanation for the MS-DOS PRINT command switch /S:<ticks3> on page 543
	of the "Microsoft MS-DOS User's Guide and Reference" incorrectly states the
	following:
	
	  Increasing this value can speed up printing while slowing down other
	  programs.
	
	The <ticks3> value actually represents the CPU time (expressed in
	time-slice ticks) that passes before PRINT.EXE can use a tick to send characters
	to the printer. If you increase this value, printing slows because more of the
	CPU time is allotted to tasks other than printing. For example, if you set this
	value to 25, PRINT.EXE must wait 25 ticks before it can use one tick's worth of
	time to send characters to the printer. A smaller value for the /S switch gives
	PRINT.EXE more of the CPU cycle and therefore speeds up printing.
	
	
	MS-DOS 5.0 Disk Densities Incorrectly Documented
	------------------------------------------------
	
	Page 126 of the "Microsoft MS-DOS User's Guide and Reference" should read as
	follows:
	
	  5.25-inch, double sided/HIGH density         1228K or 1.2 MB
	  3.5-inch,  double sided/HIGH density         1474K or 1.44 MB
	  3.5-inch,  double sided/EXTRA HIGH density   2949K or 2.88 MB
	
	The information in the manual about the density has been incorrectly reversed.
	The only EXTRA HIGH density entry should be the 3.5-inch 2.88-MB disk. All other
	entries in the table are correct.
	
	MS-DOS 5.0 COUNTRY=061, COUNTRY=044, and Time Format
	----------------------------------------------------
	
	The CONFIG.SYS command, COUNTRY.SYS, does not change the time format to 24-hour
	format when COUNTRY is set equal to 061 (International English) or 044 (United
	Kingdom). This conflicts with the COUNTRY command documentation.
	
	This error occurs on page 395 of the "Microsoft MS-DOS User's Guide and
	Reference."
	
	COUNTRY.SYS can be used to change the time and date format that MS-DOS uses to
	display time and date information. The file COUNTRY.SYS is loaded in the
	CONFIG.SYS file. Following is an example of the COUNTRY.SYS as it should appear
	in the CONFIG.SYS:
	
	  country=061,,[drive:][path]country.sys
	
	The above statement provides support for the International English character
	set.
	
	Page 395 of the "Microsoft MS-DOS User's Guide and Reference" documentation
	incorrectly states that setting COUNTRY= to 061 (International English) or 044
	United Kingdom) in the CONFIG.SYS file will cause MS-DOS 5.0 to display the time
	in 24-hour format. Loading either of the above country codes will cause the time
	to be displayed in 12-hour format. Examples of both formats are as follows:
	
	  24-Hour Format      12-Hour Format
	  ----------------------------------
	  17:35:00.00         5:35:00
	
	"GETTING STARTED"
	-----------------
	
	Expanding New MS-DOS Shell Video Drivers
	----------------------------------------
	
	Page 46 of the version 5.0 "Microsoft MS-DOS Getting Started" manual (which
	discusses how to create a DOSSHELL.INI file) incorrectly states that you should
	expand a file called VGA.IN_; this file does not exist. Instead, a file named
	EGA.IN_ should be expanded if you use a VGA video card.
	
	The file named VGA.IN_ does not exist on the Microsoft MS-DOS 5 Upgrade disks.
	Instead, you should type one of the following commands:
	
	  expand ega.in_ c:\dos\dosshell.ini
	  expand ega.in_ c:\dos\ega.ini
	
	DCA 10NET Versions 4.20.2 and Later Work with MS-DOS 5.0
	--------------------------------------------------------
	
	The version 5.0 "Microsoft MS-DOS Getting Started" manual states that DCA 10NET
	versions 3.0 through 4.2 will work under MS-DOS 5.0. However, according to DCA,
	only version 4.20.2 or version 4.2 level 20 will work correctly with MS-DOS
	5.0.
	
	If you try to run a version of 10NET earlier than 4.20.2 under MS-DOS 5.0, you
	may get a "Wrong DOS version, sorry" or "Incorrect DOS version" error message,
	or the network will not work reliably. Using the DOS LOADFIX and SETVER commands
	will not correct the problem.
	
	To upgrade to the latest version of 10NET, call DCA.
	
	MS-DOS 5 UPGRADE README.TXT FILE
	--------------------------------
	
	README.TXT and ROM Update Available from Columbia Data Products
	---------------------------------------------------------------
	
	There is a documentation error in section 2.14 of the Microsoft MS-DOS 5 Upgrade
	README.TXT file. README.TXT says that the upgrade for Western Digital WD 7000
	FASST or AT/XT SCSI customers can be obtained from the customer's vendor. This
	information is incorrect. The correct source is Columbia Data Products. There is
	a charge of approximately $50 for the driver.
	
	The Seagate ST-01 and ST-02 hard-disk controller cards are made for Seagate by
	Western Digital. Section 2.14 of the MS-DOS 5.0 README.TXT file does apply to
	the ST-01 and ST-02 hard-disk controller cards.
	
	The following is a copy of the incorrect portion of the README.TXT file, which is
	found in the section titled "2. NOTES ON SETUP":
	
	  2.14 Western Digital SCSI Hard-Disk Controller
	  ----------------------------------------------
	  If you are using a Western Digital WD 7000 FASST or AT/XT SCSI
	  controller with hard-disk ROM version 3.35 or earlier, contact your
	  vendor for an upgrade before installing MS-DOS 5.0. The ROM version
	  number is displayed when you start your computer.
	
	Columbia Data Products is also the proper source of the device drivers referred
	to in section 2.8 of the README.TXT file.
	
	README.TXT and 50-Line Mode with an ATI Wondercard
	--------------------------------------------------
	
	The README.TXT file on the Microsoft MS-DOS 5 Upgrade installation disks refer to
	the "ATI Wondercard 3.x" not working in 50-line mode. This can be confusing
	because there are various ATI products that fit this description. ATI believes
	the problem is in the ATI EGA Wondercard which identifies itself as a VGA even
	though it doesn't fully support VGA functions.
	
	To work around this problem, reconfigure the VGA card to work as an EGA card. To
	do this insert the ATI disk in the floppy disk drive and type "<floppy drive
	letter>:\SMS EGABIOS" (without the quotation marks) at the MS-DOS command
	prompt prior to running MS-DOS 5 Upgrade Setup.
	
	If you have already upgraded and are running into a problem running in 50-line
	mode, remove (uninstall) MS-DOS 5, run the command noted above and reinstall
	MS-DOS 5 Upgrade.
	
	
	MS-DOS 5 UPGRADE APPNOTES.TXT FILE
	----------------------------------
	
	APPNOTES.TXT Reference to LOADFIX Documentation Incorrect
	---------------------------------------------------------
	
	The APPNOTES.TXT file located on the last disk in the MS-DOS 5 Upgrade floppy
	disk set refers you to Chapter 4 of the "Microsoft MS-DOS Getting Started"
	manual for more information on the LOADFIX command. However, there is no Chapter
	4 in the specified book.
	
	For more information on LOADFIX, refer to page 41 of the "Microsoft MS-DOS
	Getting Started" manual; there is no reference to LOADFIX in the "Microsoft
	MS-DOS User's Guide and Reference."
	
	APPNOTES.TXT and Software Carousel
	----------------------------------
	
	Section 1.19 ("Software Carousel") of the APPNOTES.TXT file supplied with MS-DOS
	5.0 Upgrade should include the following information:
	
	  Version 5.01 of the Software Carousel works fine with MS-DOS 5. If you have
	  version 5.00 of Software Carousel, you can download the file CAROUSEL.501
	  from SoftLogic Solutions BBS #603-644-5556. This file can be renamed to
	  CAROUSEL.PGM and should replace the file you have by that name. If you have a
	  version previous to 5.00, you can upgrade by calling SoftLogic Solutions's
	  sales department at (800) 272-9900.
	
	APPNOTES.TXT Section 1.4 and CodeView 3.14
	------------------------------------------
	
	Section 1.4 of the APPNOTES.TXT file (located on the last disk) states:
	
	  This problem has been fixed in CodeView version 3.14. Call the Microsoft
	  Sales Information Center (MSIC) for information about obtaining this version;
	  see your registration card for the phone number.
	
	This statement is misleading because CodeView is available with various language
	products such as Microsoft C or Microsoft Basic Professional Development
	System.
	
	When contacting MSIC, please ask for information about the upgrade to Microsoft C
	6.0ax. If you already own Microsoft C 6.0a, the upgrade to 6.0ax is no charge.
	If you own Microsoft C 6.0, the upgrade to 6.0ax is $12.95.
	
	Microsoft C 6.0ax is C 6.0a plus CodeView version 3.14 and the extended memory
	version of the compiler.
	
	If Microsoft Basic Professional Development System version 7.0 or 7.1 is owned,
	the upgrade for CodeView can be obtained from Basic support by calling (425)
	637-7096.
	
	APPNOTES.TXT and Borland Turbo Debugger 386
	-------------------------------------------
	
	Borland Turbo Debugger 386 version 2.5 does not work properly under MS-DOS
	version 5.0. Borland has a maintenance release, version 2.51, of Turbo Debugger
	386. Turbo Debugger 2.51 works correctly only if the line DOS=HIGH is not
	included in the CONFIG.SYS file. Turbo Debugger 2.51 works correctly with
	HIMEM.SYS installed as long as MS-DOS is not loaded into the high memory area
	(HMA).
	
	Turbo Debugger 386 does not work with any program or device driver that uses
	either the virtual or protected modes of the 80386 processor. This includes
	EMM386.EXE.
	
	Section 1.21 of the Microsoft MS-DOS 5 Upgrade APPNOTES.TXT file is incorrect. It
	incorrectly states that Turbo Debugger 386 is configuration dependent. Turbo
	Debugger 386 is NOT configuration dependent.
	
	MS-DOS 5 UPGRADE PACKAGE (BOX)
	------------------------------
	
	System Requirements Error on Microsoft MS-DOS 5 Upgrade Box
	-----------------------------------------------------------
	
	The Microsoft MS-DOS 5 Upgrade package incorrectly states (on the back of the
	box) under "System Requirements" that "256K of memory" is required. The correct
	memory requirement, as stated in the "Microsoft MS-DOS Getting Started" version
	5.0 manual, is 512K bytes of memory. The minimum amount of "free" memory
	necessary to run the MS-DOS 5.0 installation procedure is 256K bytes.
	
	The Borland, ATI, and DCA products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 5 5.0 5.00 5.0a 5.00a 3rdparty wonder card video problem docerr doc err documentation error comprehensive
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : :5.0
	
	=============================================================================
	
