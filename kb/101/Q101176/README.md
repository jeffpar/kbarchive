---
layout: page
title: "Q101176: Comprehensive List of Windows 3.0 &quot;User's Guide&quot; Doc Errs"
permalink: /kb/101/Q101176/
---

## Q101176: Comprehensive List of Windows 3.0 &quot;User's Guide&quot; Doc Errs

	Article: Q101176
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on the documentation errors in the "Microsoft
	Windows User's Guide" for version 3.0. The following topics are covered:
	
	- Printing a File from the Search Results Window
	
	- EMM386.SYS Page Frame Uses "p3" Parameter, Not "p4"
	
	- Setup Does Not Detect That Windows 3.0 Is Already Installed
	
	- Configuring an 8086 or 8088 System
	
	- Null Modem Connector Settings in Terminal
	
	- Invalid Set Temp Directory Name
	
	- Windows 3.0 File Manager Will Not Search Entire Hard Disk Drive
	
	- How Paintbrush Uses Fonts
	
	- SPART.PAR and 386SPART.PAR Incorrectly Described
	
	- Clicking Outside a Copied Cutout in Paintbrush
	
	- Dithered Colored Text Can be Drawn in Paintbrush
	
	- Blank Window Title in PIF Editor Defaults to PIF Name
	
	- Terminal Will Not Accept Eight Data Bits and Odd Parity
	
	- Location of Terminal Function Keys Incorrect in "User's Guide"
	
	Printing a File from the Search Results Window
	----------------------------------------------
	
	Pages 124-125 of the "Microsoft Windows User's Guide" for version 3.0,
	incorrectly states you can select files and directories in the Search Results
	window and use File menu commands to print, copy, and move window contents. You
	can copy and move Search Results window contents, but you cannot print them.
	
	Under Windows version 3.0 you cannot print a file from the Search Results window.
	The Print option is unavailable (dimmed) and cannot be chosen.
	
	Microsoft has confirmed this to be a problem in Windows version 3.0. This problem
	was corrected in Windows version 3.1.
	
	EMM386.SYS Page Frame Uses "p3" Parameter, Not "p4"
	---------------------------------------------------
	
	Page 598 of the "Microsoft Windows User's Guide" for version 3.0 discusses two
	methods for indicating the beginning address of the expanded-memory page frame
	created by EMM386.SYS. The second method is incorrect.
	
	The first method uses the frame= parameter and creates a LIM 3.2-compatible page
	frame beginning at D000:0000. The second method is incorrect and is shown as
	follows:
	
	  device=emm386.sys 512 p0=D000 p1=D400 p2=D800 p4=DC00
	
	This command line in CONFIG.SYS will generate the following error:
	
	  WARNING - EMM386 installed without a LIM 3.2 compatible Page Frame
	
	The "p4" parameter on the command line is the source of the error. The fourth
	page of the page frame is specified with the parameter "p3," not "p4." Hence, to
	generate a LIM 3.2 compatible page frame, the command line should read as
	follows:
	
	       device=emm386.sys 512 p0=D000 p1=D400 p2=D800 p3=DC00
	
	Setup Does Not Detect That Windows 3.0 Is Already Installed
	-----------------------------------------------------------
	
	The "Microsoft Windows User's Guide" for version 3.0 provides instructions on how
	to install new Windows device drivers on page 564 under "To install a device
	driver not supplied with Windows." Step 1 is correct but does not specify that
	you must be in the Windows directory after exiting Windows in order for Setup to
	display the list of the current Windows configuration as expected in step 2.
	
	If you attempt to change the Windows configuration and you are NOT logged into
	the Windows directory (where the SETUP.EXE resides) before you start Windows 3.0
	SETUP.EXE, the Setup program will not detect that Windows 3.0 is already
	installed and will not display the current Windows configuration as you would
	expect. Setup will begin installing a new copy of Windows 3.0.
	
	Program Manager Doesn't Shrink Group to Program Item Icon
	---------------------------------------------------------
	
	There is a documentation error on page 82 of the "Microsoft Windows User's
	Guide." The statement reads as follows:
	
	  Group Windows do not close like other Windows. If you double-click the
	  group's Control-menu box or choose Close from the Control menu, Program
	  Manager shrinks the group to a program item icon.
	
	Program Manager group windows shrink to group icons, not program item icons.
	
	Configuring an 8086 or 8088 System
	----------------------------------
	
	The "Microsoft Windows User's Guide" for version 3.0 contains incorrect
	information in the "Configuring an 8086 or 8088 Computer" on page 502. The
	statement reads:
	
	  If your system has an EGA monitor and you run non-Windows applications with
	  Windows in real mode or standard mode, your CONFIG.SYS file should contain a
	  command line like the following:
	
	  device=c:\windows\ega.sys
	
	An 8086 or 8088 computer cannot run Windows in standard mode. Standard mode
	requires a 80286, 80386, or 80486 microprocessor and extended memory.
	
	Null Modem Connector Settings in Terminal
	-----------------------------------------
	
	The "Microsoft Windows User's Guide" incorrectly states on page 328 that "If you
	are using a null modem, select None" for the Connector field of the
	Communications dialog box under the Settings menu of Terminal. If the Connector
	is set to None, Terminal cannot send or receive data.
	
	When using Terminal for null modem communications, you must set the Connector
	field to match the communications port to which the null modem cable is
	connected.
	
	Invalid Set Temp Directory Name
	-------------------------------
	
	On page 538 of the "Microsoft Windows User's Guide," the example of the set temp
	directory variable is incorrect:
	
	  set temp=c:\tempfiles
	
	This is a nine character directory name; MS-DOS has a limit of eight characters.
	
	Windows 3.0 File Manager Will Not Search Entire Hard Disk Drive
	---------------------------------------------------------------
	
	The Search Entire Disk option in File Manager's Search dialog box causes File
	Manager to search the entire partition, not the entire disk. For example, if you
	want to search partitions C, D, and E, you need to perform a separate search for
	each partition.
	
	On page 124 of the "Microsoft Windows User's Guide," step 4 states that after you
	select the Search Entire Disk check box, "File Manager will search the entire
	disk drive." This is incorrect.
	
	How Paintbrush Uses Fonts
	-------------------------
	
	Page 275 of the "Microsoft Windows User's Guide" for version 3.0 incorrectly
	states:
	
	  The availability of point sizes depends on the resolution of your printer.
	
	It should state:
	
	  The availability of point sizes depends on the resolution of your screen.
	
	To determine what fonts Paintbrush will use, look at the [FONTS] section of the
	WIN.INI file. Up to the first 15 fonts listed will appear in the Fonts menu of
	Paintbrush. When Paintbrush selects these fonts, it will ignore duplicate
	instances of the same font, showing only the first instance.
	
	SPART.PAR and 386SPART.PAR Incorrectly Described
	------------------------------------------------
	
	Page 521 of the "Microsoft Windows User's Guide" for version 3.0 incorrectly
	states:
	
	  A permanent Windows swap file consists of two hidden, write- protected files.
	  The files are named SPART.PAR and 386SPART.PAR. Do not delete, move, or
	  rename these files."
	
	The 386SPART.PAR file is hidden but not write protected, while SPART.PAR is write
	protected (read-only attribute) but not hidden.
	
	Performing a directory listing from the MS-DOS command prompt of the Windows
	directory using "DIR *.PAR" will show the SPART.PAR. Through File Manager,
	performing a Search for *.PAR with or without showing HIDDEN/SYSTEMS FILES, will
	show both files.
	
	Clicking Outside a Copied Cutout in Paintbrush
	----------------------------------------------
	
	The "Microsoft Windows User's Guide" explains how to use the mouse and the SHIFT
	key to move a cutout in Paintbrush. The directions tell you to:
	
	1. Move the cutout and release the mouse when the cutout is were you want to
	  leave it.
	
	2. Click outside the cutout to paste the cutout permanently.
	
	However, the guide does not explain that if you don't click outside the cutout,
	it will appear to work correctly. The cutout will be pasted on the screen, but
	when the file is saved, it will not save the newly pasted cutout.
	
	Dithered Colored Text Can be Drawn in Paintbrush
	------------------------------------------------
	
	The "Microsoft Windows User's Guide" incorrectly states on page 277 that text can
	only be drawn in solid colors, and that when a dithered color is selected,
	Paintbrush will use the solid color that is closest to the selected dithered
	color. Paintbrush will draw text in dithered colors.
	
	Blank Window Title in PIF Editor Defaults to PIF Name
	-----------------------------------------------------
	
	Pages 451 and 459 of the "Microsoft Windows User's Guide" for version 3.0
	incorrectly state that when creating a program information file (PIF) and
	leaving the Window Title text box blank, the icon title, when minimized, will
	contain the application's filename without the extension.
	
	If you leave the Window Title text box blank while in real, standard, or 386
	enhanced mode, the icon title does not assume the application's filename without
	the extension. Rather, the icon title assumes the name of the application's PIF
	without the .PIF extension.
	
	Note: This also holds true for the title that appears in the Task List when you
	press CTRL+ESC. While the manual is incorrect, the on-screen Help program that
	appears when you place the cursor in the Window Title text box and press F1
	correctly states that the title bar will display the name of the PIF without the
	.PIF extension.
	
	Terminal Will Not Accept Eight Data Bits and Odd Parity
	-------------------------------------------------------
	
	Page 339 of the "Microsoft Window User's Guide" states that when using the Kermit
	protocol and eight data bits, parity can be specified as even, odd, or none.
	
	By definition, parity is the eighth bit. If eight data bits are specified, parity
	cannot be specified (odd, even, mark or space). This is the definition and is
	supported in the serial chip (Intel 8250).
	
	Terminal simply supports the available communications protocols, which are
	unrelated to the download protocol chosen (Xmodem, Kermit, ASCII, and so on).
	
	Location of Terminal Function Keys Incorrect in "User's Guide"
	--------------------------------------------------------------
	
	The Terminal function key chart incorrectly displays the Fx key layouts (where x
	is a value between 1 and 8) on page 331 of the "Microsoft Windows User's Guide"
	for Windows 3.0:
	
	  F1              F2              F3              F4
	  F5              F6              F7              F8
	
	The correct layout is:
	
	  F1              F3              F5              F7
	  F2              F4              F6              F8
	
	Additional query words: 3.00 3.0 3.0a 3.00a documentation error errors filemanager winfile grey gray grayed greyed card file limit
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
