---
layout: page
title: "Q75252: Tips on Installing WDEB386"
permalink: /kb/075/Q75252/
---

## Q75252: Tips on Installing WDEB386

	Article: Q75252
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows 80386 debugger, WDEB386, provided with the Microsoft
	Windows Software Development Kit (SDK) is automatically made available by the
	installation process; however, additional procedures may be needed to take full
	advantage of the features it provides. This article describes the procedures
	necessary to fully configure this protected-mode debugger.
	
	MORE INFORMATION
	================
	
	Hardware
	--------
	
	A terminal connected to a COM port is required to use WDEB386. Unlike Microsoft
	CodeView for Windows (CVW), WDEB386 does not support running the debugger on a
	secondary monitor. Optionally, attach a second computer to a COM port on the
	primary computer. Running the Windows Terminal application on the second machine
	allows you to save and print portions of debug traces and memory dumps.
	
	Use the /C:n option (where n is 1 or 2) to specify which COM port to use with
	WDEB386. WDEB386 sends all output to the specified COM port. However, if the
	debugging version of WIN386.EXE (explained below) is run without running
	WDEB386, output is directed by default to COM1.
	
	Related Files
	-------------
	
	Because of the similarity of the names of a number of files, there is some
	confusion as to what the debugger is and how to install and use it. The
	following list describes some files that have similar names, but completely
	different functions.
	
	WDEB386.EXE - This file is the actual WDEB386 debugger. The debugger is described
	in more detail in Chapter 5 of the "Programming Tools" manual distributed with
	the Windows SDK version 3.1 and in Chapter 9 of the "Tools" manual distributed
	with the Windows SDK version 3.0.
	
	WIN386.EXE - This executable file comprises the core of the Windows enhanced-mode
	operating system layer. It includes the VMM (virtual machine manager), and
	various standard VxDs (virtual devices).
	
	WINDEBUG.386 - This VxD may be installed in Windows running in enhanced mode (it
	is not included in WIN386.EXE). It provides a number of low-level services for
	debuggers, the most well-known being the ability to use the key combination
	CTRL+ALT+SYS RQ as a break request. This VxD is not necessary for WDEB386 to
	function properly.
	
	By default, the WDEB386.EXE file is installed in the C:\WINDEV directory, which
	makes it available in the MS-DOS PATH environment variable. The WINDEBUG.386
	file is also installed during the SDK installation process. The file itself is
	copied to the Windows system directory (by default, C:\WINDEV\SYSTEM), and the
	line "DEVICE=WINDEBUG.386" is added to the [386enh] section in the SYSTEM.INI
	file. Therefore, these modules should require no special attention regarding
	their installation.
	
	WIN386.EXE
	----------
	
	Special care may be required concerning WIN386.EXE. The retail version of this
	file is part of Windows, and Windows does not run in enhanced mode without it.
	To take advantage of some of the more advanced and extremely useful features of
	WDEB386, however, the debugging version of WIN386.EXE must first be installed.
	This step is optional, but without it, a significant number of WDEB386 commands
	are not available.
	
	Most programmers are aware of the procedure to install "the debugging version of
	Windows." This procedure is not sufficient to install the debugging version of
	WIN386.EXE. The difference is that the debugging version of Windows consists of
	the debugging versions of the kernel, user, and GDI modules, along with their
	corresponding symbol files. These files are all available as part of the SDK. In
	contrast, the debugging version of WIN386.EXE is available only as part of the
	Microsoft Windows Device Driver Kit (DDK) in the 386\TOOLS\DEBUG directory.
	(Under Windows 3.0, the file is in the DDK VXD\TOOLS\DEBUG directory.)
	
	Therefore, even after installing the debugging version of Windows, an additional
	action is required to install the debugging version of WIN386.EXE. Installing
	WIN386.EXE is easy. Copy the retail version of WIN386.EXE to a different
	filename and copy the debugging version from the DDK disks into the Windows
	system directory. The retail version has a file size of around 500K bytes,
	whereas the debugging version is significantly larger.
	
	NOTE: The SYM file for the debugging version of WIN386.EXE is not available.
	There is a WIN386.SYM file supplied on the DDK in the same directory as the
	debugging version of WIN386.EXE, but this file contains the symbols for the
	retail version, and does not contain symbol information that matches the
	accompanying EXE file. Attempting to use this SYM file is worse than not using
	one at all because it assigns labels to addresses incorrectly.
	
	The Grabber
	-----------
	
	Once the debugging version of WIN386.EXE is installed, it may also be necessary
	to install the debugging version of the "grabber" file. To determine if the
	debugging grabber is required, start the debugging Windows system in enhanced
	mode and attempt to start an MS-DOS session. If the attempt fails with the
	message "Incorrect System Version," then it is necessary to build and install
	the debugging version of the 386 grabber. This should be in the \386\GRABBER
	directory in the DDK (under Windows 3.0, this file is in the \VXD\GRABBER
	directory). Set the DEBUG flag in the makefile, build the grabber with the MAKE
	utility, and copy the grabber to the Windows system directory. You can change
	the name of the file, however, the "386grabber=" line in the SYSTEM.INI file
	must reflect the correct name. If it is possible to start an MS-DOS session on
	the Windows debugging system while running in enhanced mode, then this step has
	been completed successfully.
	
	Starting the Debugger
	---------------------
	
	During the process of testing the grabber, you should see a number of messages
	written to the COM1 terminal by Windows. These messages indicate that the
	debugging version of WIN386.EXE has been correctly installed, and that the
	system is ready for the debugger. At this point, refer to Chapter 5 of the
	"Programming Tools" manual (or Chapter 9 of the "Tools" manual) for instructions
	on starting and using the debugger. For some tips on using the WDEB386 debugger,
	query on the words:
	
	  wdeb386
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
