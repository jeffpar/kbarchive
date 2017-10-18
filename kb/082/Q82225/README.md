---
layout: page
title: "Q82225: Removing Windows Files to Increase Disk Space"
permalink: kb/082/Q82225/
---

## Q82225: Removing Windows Files to Increase Disk Space

	Article: Q82225
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Microsoft Windows, increasing free disk space provides additional storage
	space for files and additional capacity for running applications.
	
	The following files can be deleted to free disk space:
	
	- Delete any ~xxxxxxx.TMP files that remain in the \TEMP directory when Windows
	  is not running.
	
	- Delete any files that start with the characters ~WOA.
	
	- Delete the file WIN386.SWP from the \WINDOWS directory if it remains when
	  Windows is not running.
	
	- Delete the permanent swap file.
	
	- Delete optional files from the Windows directory.
	
	MORE INFORMATION
	================
	
	The following text provides more detailed information.
	
	- When Windows is not running, delete any ~xxxxxxx.TMP files that remain in the
	  \TEMP directory.
	
	  This directory is defined as an environment variable in your AUTOEXEC.BAT
	  file. To identify the \TEMP directory location, type "SET" (without quotation
	  marks) at the MS-DOS command prompt. Windows and applications for Windows use
	  the \TEMP directory to save temporary work files to the disk. Untracked files
	  hurt the performance of some applications for Windows, particularly when they
	  are attempting to print.
	
	- Delete any files that start with the characters ~WOA.
	
	  These files are Windows application swap files. Windows deletes application
	  swap files when you exit the associated application. However, these files may
	  remain on your hard disk if Windows terminates unexpectedly. You can safely
	  delete application swap files if Windows is not currently running.
	
	- Delete the file WIN386.SWP from the Windows directory if it remains when
	  Windows is not running.
	
	  WIN386.SWP is the temporary swap file used by Windows in 386 enhanced mode
	  when a permanent swap file does not exist. Windows creates WIN386.SWP when
	  started and then deletes it upon exiting. If Windows terminates unexpectedly,
	  it is possible that Windows will never have the opportunity to delete
	  WIN386.SWP. You can recover room on your hard disk by manually removing this
	  file from your Windows directory. CAUTION: The WIN386.SWP file should ONLY be
	  removed if it exists on your disk when you are NOT running Windows. If you
	  delete WIN386.SWP in the middle of a Windows session and Windows is
	  attempting to use a temporary swap file, its removal causes your machine to
	  hang.
	
	  NOTE: Do NOT delete files named 386SPART.PAR or SPART.PAR. Together these two
	  files constitute a permanent swap file, and they should not be manually
	  removed.
	
	- Delete the permanent swap file. Do not manually delete this file. Instead,
	  follow the appropriate procedure listed below.
	
	  Windows 3.0 and 3.0a
	
	  a. Start Windows in real mode (type "win /r" without quotation marks at the
	     MS-DOS command prompt).
	
	  b. In Program Manager, choose Run from the File menu.
	
	  c. In the Command Line box, type "swapfile" (without quotation marks).
	
	  Windows 3.1 and 3.11
	
	  a. Start Control Panel.
	
	  b. Choose the 386 Enhanced icon.
	
	  c. Choose the Virtual Memory button.
	
	  d. Choose the Change button.
	
	  e. From the Type list, select None.
	
	- Delete optional files from the Windows directory.
	
	  If your system is short on disk space, you may consider deleting some optional
	  Windows files to conserve disk space. The following list provides more
	  information on files that Windows loads but are not essential to its
	  operation:
	
	     Filename(s)                  Description
	     ----------------------------------------
	
	     *.BMP                        Bitmap files with the *.BMP
	                                  filename extension. Setup
	                                  automatically installs
	                                  several bitmap files for use as
	                                  desktop wallpaper.
	
	     SOL.EXE, SOL.HLP             Solitaire game and help file.
	
	     REVERSI.EXE, REVERSI.HLP     Reversi game and help file.
	
	     MSDOS.EXE                    The MS-DOS Executive.
	
	     PBRUSH.EXE, PBRUSH.DLL       Paintbrush accessory, help file,
	     PBRUSH.HLP                   and its dynamic-link library.
	
	     WRITE.EXE, WRITE.HLP         Write accessory and its help file.
	
	     CALENDAR.EXE, CALENDAR.HLP   Calendar accessory and its help file.
	
	     CALC.EXE, CALC.HLP           Calculator accessory and its help file.
	
	     CARDFILE.EXE, CARDFILE.HLP   Cardfile accessory and its help file.
	
	     TERMINAL.EXE, TERMINAL,HLP   Terminal accessory and its help file.
	
	     RECORDER.EXE, RECORDER.HLP,  Recorder accessory, help file,
	     RECORDER.DLL                 and its dynamic-link library.
	
	     CLOCK.EXE                    Clock accessory.
	
	     EMM386.SYS                   Expanded memory emulator.
	
	  In Windows 3.1 and 3.11, optional files such as those listed directly above,
	  can be automatically added and deleted by running Windows Setup and choosing
	  Add/Remove Window Components from the Options menu.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," version 3.0, pages 509-510
	
	"Microsoft Windows User's Guide," version 3.1, pages 557-569
	
	Additional query words: 3.00 3.00a 3.10 3.0 3.0a 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	
	=============================================================================
	
