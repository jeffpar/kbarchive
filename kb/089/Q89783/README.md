---
layout: page
title: "Q89783: Windows Err Msg: Insufficient File Handles..."
permalink: /kb/089/Q89783/
---

## Q89783: Windows Err Msg: Insufficient File Handles...

	Article: Q89783
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an MS-DOS-based application is run from Microsoft Windows in 386 enhanced
	mode, the following error messages may occur:
	
	  Insufficient file handles, Increase Files in the CONFIG.SYS
	
	  -and/or-
	
	  Cannot find file; check to ensure the path and filename are correct
	
	WORKAROUND
	==========
	
	If the problem occurs while running on a network, check to be sure that the
	network is correctly installed. Refer to "Troubleshooting a Network Setup,"
	below.
	
	If the problem is not related to the network setup, try increasing the number of
	files in the CONFIG.SYS file (FILES=<number>) or in the SYSTEM.INI file
	(PerVMFILES=<number>) to solve the problem. Refer to "Additional
	Troubleshooting," later in this article.
	
	Troubleshooting a Network Setup
	-------------------------------
	
	1. Confirm that you have the proper network and version installed, as follows:
	
	  a. Choose the Windows Setup icon from the Program Manager Main group.
	
	  b. The Windows Setup dialog box is displayed. This dialog box identifies the
	     type of network that you have installed on your system. If the dialog box
	     says "No Network Installed," You need to install the proper network.
	
	     If the network is correctly installed, go to step 2.
	
	  c. To install the correct network, from the Options menu, select "Change
	     System Settings..." and press ENTER.
	
	     Under the Networks option, select the proper network from the list
	     provided, then choose OK.
	
	2. If the problem still occurs under a Novell Network, check to see if Windows
	  is set up with the No Network option selected or an incorrect network driver.
	  If either of these is the problem, run Windows Setup in maintenance mode (run
	  Setup from outside Windows), then select and install the correct Novell
	  network.
	
	  NOTE: This problem occurs if No network is specified for Windows and you are
	  connecting to Novell NetWare. Windows works in standard mode without the
	  network specified, but it needs needs the virtual device drivers to run in
	  enhanced mode.
	
	3. If the problem still occurs, check to see that IPX.COM and NETX.COM files are
	  the correct versions.
	
	Additional Troubleshooting
	--------------------------
	
	If the above steps don't work, troubleshoot your file settings as follows:
	
	1. Increase the FILES= setting in the CONFIG.SYS file. Informal testing has
	  shown that the FILES= statement in the CONFIG.SYS file should have a value of
	  at least 45. Increasing this setting increases the number of global file
	  handles available to each application running in the MS-DOS environment.
	
	2. This error message may refer to private file handles, which are specific to
	  each virtual machine running under Windows. To specify the number of private
	  file handles that will be set for each Windows virtual machine, place the
	  following statement in the [386enh] section of SYSTEM.INI:
	
	  PerVMFILES=<number>
	
	  Increase the number of files until the application runs without displaying the
	  above error message. The default number is 10.
	
	3. If the above problem occurs when running under a Novell network, the
	  SHELL.CFG file may need to be edited to include the following line:
	
	  FILE HANDLES=60
	
	  If the SHELL.CFG file does not exist, use a text editor to create it. This
	  file must reside in the same directory as the NETX.COM file.
	
	  NOTE: The sum of the FILES= setting in the CONFIG.SYS file, the PerVMFILES=
	  setting in the SYSTEM.INI file, and the FILE HANDLES= setting in the
	  SHELL.CFG file cannot exceed 255.
	
	MORE INFORMATION
	================
	
	Insufficient file handles can be caused by the following:
	
	- An MS-DOS 5.0 floppy installation [type "setup/f" (without the quotation
	  marks)] was performed. This procedure creates a CONFIG.SYS file with the
	  statement FILES=10 included. If the system is then started with the Startup
	  disk or if CONFIG.SYS from the Startup disk is copied to the root directory
	  of the boot drive, the above error messages appears in Windows running in 386
	  enhanced mode.
	
	
	- You are running version 6.0 of the Microsoft Macro Assembler (MASM) and the
	  NEW-CONFIG.SYS file was renamed to CONFIG.SYS. This file contains the
	  statement FILES=20.
	
	Additional query words: 3.10 3.11 tshoot err msg wp homemm win95
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
