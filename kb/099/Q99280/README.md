---
layout: page
title: "Q99280: Comprehensive List of MS-DOS 6 Documentation Errors"
permalink: kb/099/Q99280/
---

## Q99280: Comprehensive List of MS-DOS 6 Documentation Errors

	Article: Q99280
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on the documentation errors in the "User's
	Guide," MS-DOS Help, "Technical Reference," VSAFE Help, Microsoft Anti-Virus
	Help, and Defrag help.
	
	The following topics are covered:
	
	"User's Guide" Errors
	---------------------
	
	- To obtain a user identification code for the BBS
	
	- Page 160 "To Free Enough Conventional Memory to Run MemMaker"
	
	- English (International) Keyboard Code Listed as "+"
	
	- Page 163: "<Double Buffering>"
	
	- BUSETUP Runs from Drive A Only
	
	- Page 104: Holding SHIFT at Startup Displays a Message
	
	
	MS-DOS 6 Help Errors
	--------------------
	
	- Backup does not Support Automatic/Regular Basis Backups
	
	- EMM386 Page Frame (Pn=) Valid Range is not 0 through 255
	
	- Incomplete List of Files Copied with FORMAT /S
	
	- Incomplete List of Files Copied with SYS command
	
	- Online Help Incorrectly Defines MSAV Check All Files
	
	- Online Help Gives Incorrect LASTDRIVE Default Value
	
	- Question Mark After Blank Space Results in Error Message
	
	- MS-DOS 6 Help for SMARTDrive (BufferSize)
	
	- Error in MS-DOS Help Example for the MENUCOLOR Command
	
	- PRINT Command /S: <ticks3> Switch
	
	- Setup /I Disables Video Detection Only, Not Hardware Detection
	
	- Incorrect Statement Regarding VERIFY
	
	Microsoft "User's Guide" and MS-DOS 6 Help Errors
	-------------------------------------------------
	
	- NUMLOCK Is Independent of Other Multiple-Configuration Commands
	
	- DMA Default Value Is 32
	
	"Technical Reference" Errors
	----------------------------
	
	- "Technical Reference" - Page 3
	
	- "Technical Reference" - Page 13, Incorrect Compression Example
	
	- "Technical Reference" - Page 14 "A CVF Is Just a Hidden, Read-Only File..."
	
	- "Technical Reference" - Page 32
	
	- "Technical Reference" - Page 177
	
	- "Technical Reference" - Page 229, Incomplete List of Files Copied with FORMAT
	  /S
	
	- "Technical Reference" - Page 341, Incomplete List of Files Copied with SYS
	  command
	
	- "Technical Reference" - Page 347, Incorrect Value for SENTRY Directory
	
	- "Technical Reference" - Page 353, Incorrect Statement Regarding VERIFY
	
	MS-DOS Utilities Online Help Errors
	-----------------------------------
	
	- Defrag Help - FULL OPTIMIZE with MS-DOS Defragmenter (Defrag)
	
	- DoubleSpace Help: Drive Letter Memory Use Is Listed Incorrectly
	
	- Undelete Help: Incomplete
	
	- VSAFE Help: Incorrect VSAFE Memory Requirement
	
	- Anti-Virus Help: Incorrect Help Text
	
	- Anti-Virus Help: Misleading Help Text for /S Switch
	
	- MS Backup for Windows Help: Command-Line Syntax Error
	
	- Interlnq Help: Pinout Chart Is Incorrect
	
	- Undelete: Incorrect Value for SENTRY Directory
	
	"USER'S GUIDE" ERRORS
	---------------------
	
	"To obtain a user identification code for the BBS"
	--------------------------------------------------
	
	On page 277 of the MS-DOS 6 User's Guide (has the Roadmap book cover) and page
	255 of the MS-DOS User's Guide (has the MS-DOS logo book cover), the procedure
	"To obtain a user identification code for the BBS" states in step 2 to call
	(503) 531-8100 to obtain a user identification code in order to download the
	most recent Microsoft Anit-Virus signatures.
	
	Indentification codes are no longer required to obtain Microsoft Anti-Virus
	signatures. To obtain the most recent Microsoft Anti-Virus signtures, call
	Central Point Software BBS at (503) 984-5366.
	
	Page 160 "To Free Enough Conventional Memory to Run MemMaker"
	-------------------------------------------------------------
	
	On page 160 of the "User's Guide," the procedure titled "To free enough
	conventional memory to run MemMaker" includes an error in step 4. You are
	instructed to bypass all but the following commands in the CONFIG.SYS file:
	
	  HIMEM.SYS
	  EMM386.EXE
	  SHELL
	
	If you bypass the command line loading CHKSTATE.SYS, the error message is
	displayed and the procedure fails. To make this procedure work correctly, make
	sure you do not bypass CHKSTATE.SYS.
	
	English (International) Keyboard Code Listed as "+"
	---------------------------------------------------
	
	Page 237 of the "User's Guide" incorrectly implies that the keyboard code for
	English (International) is the PLUS SIGN (+) character.
	
	There is no two-character keyboard code used for English (International); you
	simply use the default U.S. keyboard.
	
	The PLUS SIGN is used in the "User's Guide" to indicate that there is no separate
	international keyboard for English (International).
	
	"User's Guide" Page 163: "<Double Buffering>"
	---------------------------------------------
	
	On page 163 of the "User's Guide," the fifth bullet in the section "Streamlining
	Your CONFIG.SYS and AUTOEXEC.BAT Files" uses the term "<double
	buffering>."
	
	It should say "<SMARTDRV.EXE>."
	
	BUSETUP Runs from Drive A Only
	------------------------------
	
	Page 5 of the "User's Guide" indicates that you can use the BUSETUP /E command to
	install the optional utilities from either drive A or drive B.
	
	This information is incorrect, you can run BUSETUP from drive A only.
	
	Page 104: Holding SHIFT at Startup Displays a Message
	-----------------------------------------------------
	
	Page 104 of the "MS-DOS 6 User's Guide" incorrectly states that holding down the
	SHIFT key (to perform a Clean Start) causes the following message to be
	displayed:
	
	  MS-DOS is bypassing your CONFIG.SYS and AUTOEXEC.BAT files.
	
	Although MS-DOS does bypass your CONFIG.SYS and AUTOEXEC.BAT files, it does not
	display the above message when you hold down the SHIFT key. This message is
	displayed only when you press the F5 key.
	
	
	MICROSOFT MS-DOS 6 HELP ERRORS
	------------------------------
	
	Backup Does Not Support Automatic/Regular Basis Backups
	-------------------------------------------------------
	
	MS-DOS 6.0 Help states the following:
	
	  You can back up all files on a disk or files that have changed since your
	  last backup, schedule backups so they are done automatically on a regular
	  basis, and restore files that you have backed up.
	
	This is incorrect. You cannot "schedule backups so they are done automatically on
	a regular basis" with Microsoft Backup.
	
	EMM386 Page Frame (Pn=) Valid Range Is Not 0 Through 255
	--------------------------------------------------------
	
	Help incorrect states zero (0) through 255 is the valid range for the Pn=
	parameter. The valid parameters for Pn= are 0, 1, 2, 3, 254, and 255.
	
	Incomplete List of Files Copied with FORMAT /S
	----------------------------------------------
	
	The explanation of the FORMAT command indicates that issuing the command with the
	/S switch copies the IO.SYS, MSDOS.SYS, and COMMAND.COM files from your system
	startup drive to your newly formatted disk.
	
	In addition to the files indicated, FORMAT /S copies the DBLSPACE.BIN file to
	your newly formatted disk.
	
	Incomplete List of Files Copied with SYS Command
	------------------------------------------------
	
	The explanation of the SYS command indicates that issuing the command creates a
	startup disk by copying the IO.SYS, MSDOS.SYS, and COMMAND.COM files from your
	system startup drive to your newly formatted disk.
	
	In addition to the files indicated, SYS copies the DBLSPACE.BIN file to the
	startup disk.
	
	Online Help Incorrectly Defines MSAV Check All Files
	----------------------------------------------------
	
	In the Notes section of Microsoft Anti-Virus Help, the Check All Files option is
	incorrectly described as follows:
	
	  When the Check All Files option is selected, Anti-Virus for MS-DOS checks
	  only files with the following extensions: .386, .APP, .BIN, .CMD, .DOM, .DLL,
	  .DRV, .EXE, .FON, .ICO, .OV*, .PGM, .PIF, .PRG, .SYS.
	
	It should state that only files with those extensions are checked when this
	option is NOT selected. When this option is selected, ALL files are checked for
	viruses.
	
	Online Help Gives Incorrect LASTDRIVE Default Value
	---------------------------------------------------
	
	The Notes section of LASTDRIVE Help incorrectly describes the default value for
	LASTDRIVE as "the letter following the last one in use."
	
	It should state that the default value for LASTDRIVE is E: or the last drive
	specification in use.
	
	Question Mark After Blank Space Results in Error Message
	--------------------------------------------------------
	
	According to MS-DOS Help, you can insert a question mark character (?) just
	before the equal sign (=) to specify that MS-DOS is to ask for confirmation
	before carrying out the command.
	
	This works correctly as long as there are no spaces or parameters between the
	command and the question mark character.
	
	For example, DEVICE?=C:\DOS\ANSI.SYS causes the following prompt to be
	displayed:
	
	  DEVICE=C:\DOS\ANSI.SYS [Y,N]?
	
	However, if you have DEVICEHIGH /L:1,12048 ?=C:\DOS\ANSI.SYS, you receive the
	following error message:
	
	  Bad or Missing ?
	  Error in CONFIG.SYS line <number>
	
	Similarly, the command DOS ?=HIGH results in an error message.
	
	To use the question mark character properly, place the question mark character
	immediately after the command, not immediately before the equal sign. For
	example:
	
	  DEVICEHIGH? /L:1,12048 =C:\DOS\ANSI.SYS
	  DOS? = HIGH
	
	MS-DOS 6 Help for SMARTDrive (BufferSize)
	-----------------------------------------
	
	The help text for SMARTDrive under /B:BufferSize says:
	
	  If an application reads 512K of information..."
	
	It should state:
	
	  " If an application reads 512 bytes of information..."
	
	Error in MS-DOS Help Example for the MENUCOLOR Command
	------------------------------------------------------
	
	If you are using an MS-DOS 6.0 multiple-configuration menu and you set the
	MENUCOLOR command in the CONFIG.SYS file to match the example shown in MS-DOS
	Help, the menu color does not display.
	
	The example in MS-DOS Help shows a space after the comma, which causes MS-DOS to
	stop reading the MENUCOLOR command when the CONFIG.SYS file is processed. As a
	result, the menu color is not displayed.
	
	To work around this problem, remove the space after the comma.
	
	PRINT Command /S: <ticks3> Switch
	---------------------------------
	
	The explanation for the MS-DOS PRINT command switch /S:<ticks3> on in the
	Microsoft on-line Help incorrectly states the following:
	
	  Increasing this value can speed up printing while slowing down other
	  programs.
	
	The <ticks3> value actually represents the CPU time (expressed in
	time-slice ticks) that passes before PRINT.EXE can use a tick to send characters
	to the printer. If you increase this value, printing slows because more of the
	CPU time is allotted to tasks other than printing. For example, if you set this
	value to 25, PRINT.EXE must wait 25 ticks before it can use one tick's worth of
	time to send characters to the printer. A smaller value for the /S switch gives
	PRINT.EXE more of the CPU cycle and therefore speeds up printing.
	
	Setup /I Disables Video Detection Only, Not Hardware Detection
	--------------------------------------------------------------
	
	The Setup /I switch is documented incorrectly. When you use the /? parameter,
	Setup displays the following:
	
	  SETUP [/B] [/E] [/F] [/G [/H]] [/I] [/M] [/Q] [/U]
	
	  /B           Displays Setup screens in monochrome instead of color.
	  /E           Installs Windows and MS-DOS optional programs.
	  /F           Installs a minimal MS-DOS 6 system on a floppy disk.
	  /G           Does not create the Uninstall Disk and does not prompt
	               you when you need to update your network.
	  /H           Uses default Setup options.
	  /I           Turns off hardware detection.
	  /M           Installs a minimal MS-DOS 6 system.
	  /Q           Copies MS-DOS files to a hard disk.
	  /U           Installs MS-DOS even if Setup detects disk partitions
	               that might be incompatible with MS-DOS 6.
	
	Setup /I disables video detection only. To disable video detection and hardware
	detection (including FastDisk compatibility detection [borrowed from Windows
	Setup]), use the /I and /U parameters.
	
	Incorrect Statement Regarding VERIFY
	------------------------------------
	
	The VERIFY section of MS-DOS Help incorrectly states:
	
	  You can use VERIFY either from the command line or the CONFIG.SYS.
	
	The correct statement is:
	
	  You can use VERIFY from the command line or the AUTOEXEC.BAT.
	
	"USER'S GUIDE" AND MICROSOFT MS-DOS 6 HELP ERRORS
	-------------------------------------------------
	
	NUMLOCK Is Independent of Other Multiple-Configuration Commands
	---------------------------------------------------------------
	
	Both the "User's Guide" and MS-DOS Help document the NUMLOCK command as a special
	CONFIG.SYS command for defining startup menus and multiple configurations.
	Although NUMLOCK is valid in multiple configurations, it can be used independent
	of multi-config commands.
	
	The "User's Guide," Appendix A, page 249 states the following:
	
	  NUMLOCK
	
	  Specifies whether the NUMLOCK setting on your numeric keypad is set to ON or
	  OFF. You can use this command only within a menu block in your CONFIG.SYS
	  file.
	
	The first sentence above is correct; the second sentence is not. NUMLOCK is a
	valid command anywhere in your CONFIG.SYS file.
	
	MS-DOS Help (accessed by typing "help numlock" (without the quotation marks) at
	the MS-DOS command prompt) states the following:
	
	  Related Commands
	
	  The NUMLOCK command is one of six special CONFIG.SYS commands for defining
	  startup menus and multiple configurations.
	
	This is also inaccurate. The NUMLOCK command has is unrelated to the use of
	startup menus and multiple configurations. It is a valid CONFIG.SYS command
	whether or not you are defining menus or multiple configurations.
	
	DMA Default Value Is 32
	-----------------------
	
	MS-DOS Help and page 209 of the "Technical Reference" state the following in the
	EMM386.EXE section:
	
	  D=nnn
	
	  Specifies how many kilobytes of memory should be reserved for buffered direct
	  memory access (DMA). Discounting floppy-disk DMA, this value should reflect
	  the largest DMA transfer that will occur while EMM386 is active. Valid values
	  for nnn are in the range 16 through 256. The default value is 16.
	
	This is incorrect, the default value is 32.
	
	"TECHNICAL REFERENCE" ERRORS
	----------------------------
	
	"Technical Reference" - Page 3
	------------------------------
	
	On page 3, the "Technical Reference" incorrectly states:
	
	  For example, if your MS-DOS files are in C:\DOS, Setup might add the
	  following lines to the [386Enh] section of your PROGMAN.INI:
	
	The statement should read:
	
	  For example, if your MS-DOS files are in C:\DOS, Setup might add the
	  following lines to the [386Enh] section of your SYSTEM.INI:
	
	"Technical Reference" - Page 13
	-------------------------------
	
	The example of how DoubleSpace compresses "The rain in Spain falls mainly on the
	plain," found on page 13 of the "Technical Reference," is incorrect. The correct
	representation of the compressed sentence is:
	
	  The rain <3,3>Sp<9,4>falls m<11,3>ly on
	  t<34,3>pl<15,3>.
	
	NOTE: The difference is in the fourth offset; in the "Technical Reference" it is
	shown as 37, it should be 3.
	
	"Technical Reference": Page 14 - "A CVF Is Just a Hidden,
	Read-Only File..."
	----------------------------------------------------------------------------
	
	On page 14 of the "Technical Reference," the second paragraph under the section
	"How Does DoubleSpace Store Compressed Data on a Drive?" begins as follows:
	
	  A CVF is just a Hidden, Read-Only file until you mount it. Mounting a CVF
	  establishes...
	
	It should read as follows:
	
	  A CVF is just a Hidden, System, Read-Only file until you mount it. Mounting a
	  CVF establishes...
	
	Technical Reference - Page 32
	-----------------------------
	
	The third bit flag definition on page 32 of the "Technical Reference" appears as
	follows:
	
	  micapDECOMPRESS   equ  0000000000000010b ; Standard compress
	
	It should read:
	
	  micapDECOMPRESS   equ  0000000000000010b ; Standard decompress
	
	Technical Reference - Page 177
	------------------------------
	
	On page 177 of the "Technical Reference," the "Examples" section contains
	improper command syntax.
	
	It incorrectly states:
	
	  device=c:\\DOS\\himem.sys
	  device=c:\\DOS\\emm386.exe ram
	  DOS=umb
	
	It should read:
	
	  device=c:\DOS\himem.sys
	  device=c:\DOS\emm386.exe ram
	  DOS=umb
	
	Incomplete List of Files Copied with FORMAT /S
	----------------------------------------------
	
	The explanation of the FORMAT command on page 229 of the "Technical Reference"
	for MS-DOS 6.0 indicates that issuing the command with the /S switch copies the
	IO.SYS, MSDOS.SYS, and COMMAND.COM files from your system startup drive to your
	newly formatted disk.
	
	In addition to the files indicated, FORMAT /S copies the DBLSPACE.BIN file to
	your newly formatted disk.
	
	Incomplete List of Files Copied with SYS Command
	------------------------------------------------
	
	The explanation of the SYS command on page 341 of the "Technical Reference" for
	MS-DOS 6.0 indicates that issuing the command creates a startup disk by copying
	the IO.SYS, MSDOS.SYS, and COMMAND.COM files from your system startup drive to
	your newly formatted disk.
	
	In addition to the files indicated, SYS copies the DBLSPACE.BIN file to the
	startup disk.
	
	Incorrect Value for SENTRY Directory
	------------------------------------
	
	Page 347 of the "MS-DOS Technical Reference" incorrectly states:
	
	  The size of the SENTRY directory and its files is limited to approximately 7
	  percent of your hard disk space.
	
	Actually, the size of the SENTRY directory and its files is limited to
	approximately 20 percent of your hard disk space (by default). Page 349 states
	this correctly.
	
	Incorrect Statement Regarding VERIFY
	------------------------------------
	
	The Verify section on page 353 of the "MS-DOS Technical Reference" incorrectly
	states:
	
	  You can use VERIFY either from the command line or the CONFIG.SYS.
	
	The correct statement is:
	
	  You can use VERIFY from the command line or the AUTOEXEC.BAT file.
	
	MS-DOS UTILITIES ONLINE HELP ERRORS
	-----------------------------------
	
	Degrag Help: FULL OPTIMIZE with MS-DOS Defragmenter (Defrag)
	------------------------------------------------------------
	
	MS-DOS Defragmenter (Defrag) Help incorrectly states that the FULL OPTIMIZE
	option will move directories to the front of the disk.
	
	DoubleSpace Help: Drive Letter Memory Use Is Listed Incorrectly
	---------------------------------------------------------------
	
	Under "Last drive reserved for Dblspace's use," MS-DOS DoubleSpace Help
	incorrectly states the following:
	
	  Each drive letter uses 24K of memory: to conserve memory, decrease this
	  amount.
	
	Actually, each drive letter uses 24 bytes of memory.
	
	Undelete Help: Incomplete
	-------------------------
	
	The help topic displayed by UNFORMAT (when you use the /? parameter) is different
	than the information displayed by MS-DOS Help. UNFORMAT /? lists several
	switches such as /J and /PARTN that are omitted from HELP UNFORMAT.
	
	VSAFE Help: Incorrect VSAFE Memory Requirement
	----------------------------------------------
	
	The online help for the VSAFE utility in MS-DOS 6.0 incorrectly states that VSAFE
	requires approximately 22 kilobytes (K) of memory for operation. The correct
	memory requirement, 44K, is stated on page 72 of the "User's Guide."
	
	Anti-Virus Help: Incorrect Help Text
	------------------------------------
	
	The following text in Microsoft Anti-Virus help is not relevant to this release
	of Microsoft Anti-Virus:
	
	  Indexed (visible in Index):
	
	  After Microsoft Anti-Virus performs an action, a summary of that action is
	  recorded in the activity log. The activity log holds a maximum of 200
	  entries. When this limit is reached, the oldest entry is deleted each time a
	  new activity is recorded.
	
	  Not-Indexed (visible only by scanning through the help windows):
	
	  The version of DOS you are using is not supported by Microsoft Anti-Virus.
	  Microsoft Anti-Virus requires DOS 3.3 and later.
	
	  A virus has been detected but could not be removed from the file. Please
	  contact Microsoft about getting an update to Microsoft Anti-Virus to clean
	  the file.
	
	  The virus signature you have entered is incorrect. Verify that the data you
	  have entered is correct. Contact Microsoft if the problem persists.
	
	  Choose the Update Virus List command if you have information about a new
	  virus. The data describes the virus "signature"--the unique set of
	  hexadecimal characters that distinguishes it from other programs or pieces of
	  code.
	
	Anti-Virus Help: Misleading Help Text for /S Switch
	---------------------------------------------------
	
	According to Microsoft Anti-Virus Help (MSAV /?), the /S switch scans the disk
	and files for viruses and is always on by default. This is true only when you
	specify more than one drive.
	
	For example, if you type
	
	  " msav c:" (without the quotation marks)
	
	at the MS-DOS command prompt and then press ENTER, the Microsoft Anti-Virus
	interface starts.
	
	However, if you type
	
	  " msav c: d:" (without the quotation marks)
	
	at the MS-DOS command prompt and then press ENTER, the Microsoft Anti-Virus
	interface starts, scans for viruses, and then returns to the MS-DOS command
	prompt.
	
	To scan only one drive from the MS-DOS command prompt (or from a batch file), be
	sure to use the /S parameter.
	
	
	MS Backup for Windows Help: Command-Line Syntax Error
	-----------------------------------------------------
	
	The online help for Microsoft Backup for Windows states the following in the
	Command-Line Options section:
	
	  Syntax
	  ------
	     WINBACK.EXE  [SETUP.SET] [/M]
	
	This help topic should read as follows:
	
	  Syntax
	  ------
	     MWBACKUP.EXE [SETUP.SET] [/M]
	
	Interlnq Help: Pinout Chart Is Incorrect
	----------------------------------------
	
	The Pinout Chart under Notes is incorrect for 9-Pin to 9-Pin Serial Connections.
	The chart states to connect pin 6 to pin 4, and pin 4 to pin 6. If this is done,
	the cable does not work properly.
	
	If you leave pin 6 blank and connect pin 4 to pin 4, the cable works correctly.
	
	Undelete: Incorrect Value for SENTRY Directory
	----------------------------------------------
	
	The NOTES section of the Undelete online help incorrectly states:
	
	  The size of the SENTRY directory and its files is limited to approximately 7
	  percent of your hard disk space.
	
	Actually, the size of the SENTRY directory and its files is limited to
	approximately 20 percent of your hard disk space (by default). Further down in
	the same online help section under the "The UNDELETE.INI file" heading, the
	following information is correctly stated:
	
	  - The amount of total disk space reserved for deleted files. The following
	  entry defines the default value:
	
	  percentage=20
	
	Additional query words: 6.00 6.20 doc err errors docerr documentation double space dblspace num lock multi config menu on-line mem virus vsafe.com multi-config keyb us virus vsafe.com msav.exe mwav anti mwbackup msbackup command reference fastdisk comprehensive nowin4
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	
