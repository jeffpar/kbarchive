---
layout: page
title: "Q88091: Windows Only Starts from Windows Directory"
permalink: /kb/088/Q88091/
---

## Q88091: Windows Only Starts from Windows Directory

{% raw %}

	Article: Q88091
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Windows starts from the Windows directory but not from another directory,
	such as the root directory, then one or more of the following conditions may
	exist:
	
	- There are multiple WIN.COM files. For example, WIN.COM file has been copied
	  to the root directory of the boot drive.
	
	- A batch file is being used to start Windows.
	
	- There is a pathing problem.
	
	- Incompatible files are present in the current directory or path.
	
	MORE INFORMATION
	================
	
	Make sure you are starting Windows by typing "WIN" (without the quotation marks)
	instead of using a batch file to start Windows.
	
	Edit the AUTOEXEC.BAT file and make WINDOWS the first directory in your PATH=
	statement. This usually resolves any pathing problems.
	
	Windows requires that certain file are in the same directory as the WIN.COM file.
	To search for multiple WIN.COM files or a batch file that is attempting to start
	Windows from another directory:
	
	1. Run File Manager.
	
	2. From the File menu, choose Search.
	
	3. In the Search For box, type "WIN.COM" (without the quotation marks) to search
	  for multiple WIN.COM files or "WIN.BAT" (without the quotation marks) to
	  search for a batch file that might start Windows.
	
	4. Make sure the Start From text box contains C:\ and that the Search All
	  Subdirectories check box is selected.
	
	If you are using MS-DOS 5.0 or later, you can search for these files using the
	DIR command.
	
	1. Change to the root directory by typing the following at the MS-DOS command
	  prompt:
	
	  cd \
	
	2. Type the following command to check for duplicate WIN.COM files:
	
	  dir win.com /s
	
	3. Type the following command to check for a batch file called WIN.BAT:
	
	  dir win.bat /s
	
	These commands will list all WIN.COM and WIN.BAT files on the current hard drive.
	If you have more than one WIN.COM file, delete all the extra ones, leaving just
	one WIN.COM file on the hard drive in the WINDOWS directory.
	
	If you find a WIN.BAT file, rename it to something else, such as GOWIN.BAT.
	Rename the file WINSTART.BAT because Windows treats this as a special file to be
	read after starting Windows.
	
	If you have tried all of the above, and Windows will start from the WINDOWS
	directory, but it won't start from another directory such as the root directory,
	you probably have incompatible device drivers in the directory from which
	Windows will not start. To correct this problem, compare a directory listing of
	the Windows directory with the directory from which Windows will not start, and
	look for duplicate files (or device drivers) such as MOUSE.DRV, LMOUSE.DRV,
	VGA.DRV, VGA.3GR, and so on.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
