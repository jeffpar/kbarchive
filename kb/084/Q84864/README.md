---
layout: page
title: "Q84864: Using MS-DOS 4.x Shell Under MS-DOS 5.0 and later"
permalink: kb/084/Q84864/
---

## Q84864: Using MS-DOS 4.x Shell Under MS-DOS 5.0 and later

	Article: Q84864
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is often possible to use MS-DOS version 4.0, 4.01, or 4.01a Shell under
	MS-DOS 5.0 and later. Although this configuration has no known problems, it has
	not been fully tested. MS-DOS 5.0 and later were not designed to support the
	MS-DOS 4.x Shell. For more information, see the "Potential Problems section
	below.
	
	
	This configuration can be useful in the following instances:
	
	- You want to refer to your 4.x Shell program items and groups while
	  configuring MS-DOS 5.0 or 6.0 Shell.
	
	- You want to use a feature that only exists in the 4.x Shell.
	
	- You prefer the 4.x Shell user interface.
	
	- You are a support professional and your customers have MS-DOS 4.0, 4.01, or
	  4.01a and require assistance with the 4.x Shell. You are running MS-DOS 5.0
	  or later, but need to have the 4.x Shell available for reference.
	
	MORE INFORMATION
	================
	
	To reinstall the MS-DOS 4.x Shell on your hard disk after installing MS-DOS 5.0
	or later, do the following:
	
	1. Create a directory to contain the MS-DOS Shell files (for example, C:\SHELL).
	
	2. Copy the following files from the MS-DOS 4.x MS-DOS Shell disk to the
	  directory you created in step 1.
	
	  DOSUTIL.MEU
	  SHELL.CLR
	  SHELL.HLP
	  SHELL.MEU
	  SHELLB.COM
	  SHELLC.EXE
	  PCIBMDRV.MOS
	
	  For example, if the MS-DOS Shell disk is in drive A, you could use the
	  following commands:
	
	  copy a:\dosutil.meu c:\shell
	  copy a:\shell*.* c:\shell
	  copy a:\pcibmdrv.mos c:\shell
	
	  NOTE: Do not copy all the files from the MS-DOS Shell disk.
	
	3. Copy any other .MEU files found in the former MS-DOS 4.x directory to the
	  directory containing Shell. For example, type "copy c:\dos\*.meu c:\shell"
	  (without the quotation marks) at the MS-DOS command prompt and then press
	  ENTER.
	
	  These .MEU files describe individual groups within the MS-DOS 4.x Shell that
	  you have created.
	
	4. Using MS-DOS Editor or another text editor, create the following batch file
	  and name it SHELL.BAT. Use this batch file to run 4.x Shell. This batch file
	  is based on the one included in Appendix A of the Microsoft MS-DOS Shell
	  "User's Guide" for version 4.x.
	
	        @ECHO OFF
	        C:
	        CD C:\SHELL
	        SHELLB DOSSHELL
	        IF ERRORLEVEL 255 GOTO END
	        :COMMON
	        SHELLC /TRAN/COLOR/DOS/MENU/MUL/SND/MEU:SHELL.MEU/CLR:SHELL.CLR
	        /PROMPT/MAINT/EXIT/SWAP/DATE
	        :END
	        BREAK=ON
	
	  NOTES
	  -----
	
	  The line beginning with "SHELLC" ends after "/DATE". When you type this line,
	  do not press the ENTER key until after "/DATE."
	
	  This example works if the MS-DOS Shell files have been placed in a C:\SHELL
	  directory on drive C. If you have placed the files in another directory, you
	  must change lines 2 and 3 accordingly. SHELLC.EXE will only find SHELL.CLR
	  and .MEU files that are located in the directory SHELLC.EXE was executed
	  from.
	
	  If you use a name other than DOSSHELL.BAT for this batch file, use that name
	  on the "SHELLB" line in place of DOSSHELL. For example, if you name this
	  batch file SHELL401.BAT, the line should read "SHELLB SHELL401."
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  " dosshell.bat and 4.00 " (without the quotation marks)
	
	Potential Problems
	------------------
	
	When you upgrade a system from MS-DOS 4.01 to MS-DOS 6.2, Setup moves the
	SHELLB.COM and SHELLC.EXE files to the UNINSTALL subdirectory. To correct this
	problem, copy these two files from the C:\OLD_DOS.1 directory to the DOS
	directory. If you have already deleted OLD_DOS.1, expand SHELLB.CO_ and
	SHELLC.EXE from the original MS-DOS 4.01 disks.
	
	If you receive the error message "Color file missing or unreadable" when you try
	to run Shell 4.x under MS-DOS 6.2, ensure that all necessary files are in the
	directory that contains your MS-DOS files (typically C:\DOS). If you still
	receive the error message:
	
	1. Make a backup copy of the DOSSHELL.BAT file. For example, type "copy
	  c:\dos\dosshell.bat c:\dos\dosshell.pss" (without the quotation marks) at the
	  MS-DOS command prompt and then press ENTER.
	
	2. Use MS-DOS Editor to edit the DOSSHELL.INI file and remove any lines between
	  "SHELLC" and "/TRAN..." (usually "/MOS:PCIBMDRV.MOS").
	
	3. Save the DOSSHELL.INI file and exit MS-DOS Editor.
	
	You should now be able to run Shell 4.x under MS-DOS 6.2.
	
	
	REFERENCES
	==========
	
	Microsoft MS-DOS "User's Guide," version 4.x, Appendix A
	
	Additional query words: 6.22 4.00 4.01 4.01a 5.00 5.00a dosshell 6.00 6.20 dosutil.meu shell.clr shell.hlp shell.meu shellb.com shellc.exe dosshell.bat
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
