---
layout: page
title: "Q137819: Microsoft Plus! Readme.txt File Contents (1 of 2)"
permalink: /kb/137/Q137819/
---

## Q137819: Microsoft Plus! Readme.txt File Contents (1 of 2)

{% raw %}

	Article: Q137819
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 26-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is a copy of the information in the Microsoft Plus!
	for Windows 95 Readme.txt file (part 1 of 2).
	
	MORE INFORMATION
	================
	
	--------
	CONTENTS
	--------
	LIST OF MICROSOFT PLUS! README FILES
	MICROSOFT PLUS! SETUP NOTES
	SYSTEM AGENT
	TROUBLESHOOTING VISUAL ENHANCEMENTS
	OTHER MICROSOFT PLUS! PROGRAMS
	
	LIST OF MICROSOFT PLUS! README FILES
	====================================
	
	In addition to README.TXT, Microsoft Plus! provides the following
	README files:
	
	   DRVSPACE.TXT    Provides information about using DriveSpace 3
	                   disk compression and the Compression Agent
	                   file-compression program.
	
	   INTERNET.TXT    Provides information to help you connect to
	                   and browse the Internet. This file is located
	                   in the folder that contains your Microsoft
	                   Plus! Internet files.
	
	   SUPPORT.TXT     Provides additional information about product
	                   support for Microsoft Plus!.
	
	   PINBALL.DOC     Explains how scoring works in the 3D Pinball
	                   game, and describes the components of the Space
	                   Cadet table. To view PINBALL.DOC, use WordPad
	                   or another word processor. PINBALL.DOC is
	                   located in the folder that contains your
	                   3D-Pinball game files.
	
	   SCRIPT.DOC      Describes the Dial-Up Scripting command
	                   language. Refer to this document for the
	                   commands you can use to create a Dial-Up
	                   Networking script. To view SCRIPT.DOC, you
	                   will need WordPad or another word processor.
	                   SCRIPT.DOC is located in the folder that
	                   contains your Microsoft Plus! program files.
	
	MICROSOFT PLUS! SETUP NOTES
	===========================
	
	Uninstalling Microsoft Plus!
	----------------------------
	
	To remove Microsoft Plus! from your computer:
	
	1. Click the Start button, point to Settings, and then click Control
	  Panel.
	
	2. Double-Click the Add/Remove Programs icon.
	
	3. Click Microsoft Plus! for Windows 95, and then click Add/Remove.
	
	4. Click Remove All.
	
	If You Start Windows 95 From a Network Drive
	--------------------------------------------
	
	If you are running Windows 95 from a network drive, you cannot
	install Microsoft Plus!.  To set up Microsoft Plus!, you must
	first set up Windows 95 entirely on your local hard disk.
	
	Do Not Install DriveSpace 3 If You Use Banyan Vines
	---------------------------------------------------
	
	If you use Banyan Vines networking, do not install the DriveSpace 3
	component of Microsoft Plus!. The Banyan network driver requires
	more memory than is available when DriveSpace 3 is present.
	
	To install Microsoft Plus! on a system with Banyan Vines,
	choose Custom Setup, and then clear the DriveSpace 3 check box.
	
	For an updated version of Banyan Vines, contact the manufacturer.
	
	If You Reinstall Windows 95 After Installing Microsoft Plus!
	------------------------------------------------------------
	If you reinstall Win95 after installing Microsoft Plus!, your
	desktop icons will be reset to the standard Windows 95 icons.
	To restore the Microsoft Plus! enhanced desktop icons,
	reinstall Microsoft Plus! after Windows 95 Setup is complete.
	
	SYSTEM AGENT
	============
	
	Including Command-Line Switches When Scheduling Programs
	--------------------------------------------------------
	
	If the path to a program that you are scheduling includes long
	filenames, you must enclose the path and program name with quotation
	marks. To include switches in the command line, type the switches
	after the quotation marks.
	
	For example:
	
	  "c:\program files\accessories\myprogram.exe" /switch1 /switch2
	
	If Your Program Did Not Run At the Scheduled Time
	-------------------------------------------------
	
	If you receive a notification that your program did not run at its
	scheduled time, it may be because of the following:
	
	- Your computer was turned off.
	
	- You were using your computer, and your program was scheduled to
	 run while your computer was idle.
	
	- Your computer was running on batteries.
	
	- System Agent could not find the program file you specified.
	
	To make sure the program information is correct:
	
	1. Click the Start button, point to Accessories, point to System
	  Tools, and then click System Agent.
	
	  NOTE: You can also double-click the System Agent icon on the
	  taskbar.
	
	2. Click the program that didn't run.
	
	3. On the Program menu, click Properties.
	
	4. Make sure the information in the Command Line box is correct.
	  Double-check the file name for the program.
	
	5. If you want to change the schedule so that the program runs even
	  if you are using your computer or your computer is running on
	  batteries, click Change Schedule, and then make changes to the
	  schedule as needed.
	
	Running Disk-Tool Programs While Other Programs Are Using Your Disk
	-------------------------------------------------------------------
	
	Programs that write to your hard disk when you aren't using your
	computer (such as some screen savers, system-monitoring programs,
	or mail programs) can cause problems when you use System Agent to
	run disk tools. For example, if your mail program downloads mail
	every few minutes, it might cause a scheduled disk-tool program
	to restart repeatedly without making much progress, or even to
	close before it has finished running.
	
	If you encounter this problem:
	
	1. Schedule your disk-tool programs to run at a time when
	  you know you won't be running other programs (for example,
	  at night).
	
	2. When you are finished working on your computer, make sure you
	  close any mail or system-monitoring programs that regularly write
	  to your disk.
	
	3. If you are using a screen saver (for example, Microsoft Scenes)
	  that writes to your hard disk, you might want to disable
	  it during the times disk tools are scheduled to run.
	
	Running Scheduled Programs While Playing Games That Use a Joystick
	------------------------------------------------------------------
	
	System Agent does not recognize joystick activity when checking to
	see if you are using your computer. Therefore, if programs are
	scheduled to run while you are not using your computer, and you
	are currently playing a game that uses a joystick, System Agent
	will run the scheduled programs anyway. This may cause your game
	to run significantly more slowly. To solve this problem, suspend
	System Agent to prevent scheduled programs from running while
	you are playing your game.
	
	To suspend System Agent:
	
	> Right-click the System Agent icon on the taskbar, and then
	  click Suspend System Agent.
	
	After you are finished playing your game, you can resume System
	Agent by clicking the Suspend System Agent command again.
	
	If System Agent Does Not List Your Scheduled Programs
	-----------------------------------------------------
	
	If your list of scheduled programs does not appear in the
	System Agent window, it usually means that System Agent could
	not find your SAGE.DAT file.
	
	The following things could cause this problem:
	
	* You ran a program such as LFNBK.EXE that temporarily
	  or permanently modified your long filenames.
	
	* The file is located on a drive that was unavailable when
	  System Agent started (for example, a network drive or
	  a removable drive).
	
	* Your Sage.dat file may have been accidentally moved or deleted
	
	To restore your list of scheduled programs:
	
	1. In System Agent, choose Stop Using System Agent from
	  the Advanced menu.
	
	2. In Explorer, choose Options from the View menu in Explorer,
	  and then make sure Show All Files is selected.
	
	3. Copy the Sage.dat file from the C:\Program Files\Plus!\System
	  folder to the C:\ folder.
	
	4. Explorer will ask whether or not you want to replace
	  the current copy of the C:\Sage.dat file. Click Yes.
	
	5. To restart System Agent, click the Start button, point to
	  Programs, point to Accessories, point to System Tools,
	  and then click System Agent.
	
	Your list of scheduled programs should now be restored.
	
	If ScanDisk Stops With an Error, But SCANDISK.LOG Reports No Errors
	-------------------------------------------------------------------
	
	If ScanDisk for Windows stops checking your drives and displays
	the error "Check was stopped because of an error (255)", but
	the SCANDISK.LOG file does not report any errors, the problem
	might be that one of the drive(s) being checked no longer exists.
	
	For example, this problem might appear if you undocked your laptop,
	and ScanDisk then attempted to check all your drives. Or, it might
	occur if you uncompressed a drive that ScanDisk was configured to
	check.
	
	To work around this problem:
	
	1. Double-click the System Agent icon on the taskbar.
	
	2. In the list of scheduled programs, click ScanDisk.
	
	3. In the Program menu, click Properties, and then click Settings
	  in the Properties dialog box.
	
	4. In the list of drives, deselect the selected drive(s) by
	  clicking a drive other than the currently selected drive(s).
	
	5. Click the drive(s) you want ScanDisk to check.
	
	TROUBLESHOOTING VISUAL ENHANCEMENTS
	===================================
	
	This section provides tips for troubleshooting problems with
	Microsoft Plus! visual enhancements.
	
	Some of the problems in this section are caused by problems
	with specific display drivers.
	
	If You Are Using Multiple System Configurations
	-----------------------------------------------
	
	If you run Microsoft Plus! on more than one system configuration
	(for example, if you have a laptop computer with a docking station
	and run Microsoft Plus! when your laptop is both docked and undocked),
	make sure that the display settings for both configurations are set
	up to use at least 256 colors. If this is not possible, you might
	not want to use desktop themes.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbGamesSearch kbPlusSearch kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
