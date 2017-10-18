---
layout: page
title: "Q81604: Novell Err Msg: Invalid COMMAND.COM After Windows Exit"
permalink: kb/081/Q81604/
---

## Q81604: Novell Err Msg: Invalid COMMAND.COM After Windows Exit

	Article: Q81604
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After exiting Microsoft Windows, you may receive one of the following error
	messages if you are using a Novell network:
	
	  Invalid COMMAND.COM
	
	  -or-
	
	  Cannot load COMMAND, System halted
	
	NOTE: One of these error messages may occur with a run-time version of Windows or
	with MS-DOS-based applications.
	
	CAUSE
	=====
	
	The error occurs due to a problem with early releases of the Novell NETX.COM
	network shell program.
	
	STATUS
	======
	
	Novell has corrected the problem in NETX.COM version 3.26 revision A included
	with Microsoft Windows 3.1.
	
	
	WORKAROUND
	==========
	
	In most cases, you can work around the problem by correctly setting the COMSPEC
	environment variable in the CONFIG.SYS or AUTOEXEC.BAT file. The following
	SHELL= line will load COMMAND.COM from the root directory of drive C. If you
	change your SHELL= statement to point to a new location, make sure COMMAND.COM
	is in the directory you are pointing to, or you may not be able to start your
	system.
	
	       SHELL=C:\COMMAND.COM /P
	
	Note that COMMAND.COM is loaded from the root directory of drive C; not from the
	DOS directory. Certain versions of the Novell shell program may prevent the
	resident portion of COMMAND.COM from reloading the transient portion if the
	COMSPEC variable is set to the DOS directory. This causes the "Invalid
	COMMAND.COM" or "Cannot load COMMAND, System halted" error message to be
	displayed after you exit Windows.
	
	If necessary, consult Novell technical support or Novell documentation for
	assistance in modifying your personal login script, and/or upgrade the Novell
	Shell. If you are using MS-DOS version 3.3 or earlier, you can work around the
	problem by modifying the Novell NetWare COMSPEC variable. For more detailed
	information on this subject, contact Novell Product Support.
	
	MORE INFORMATION
	================
	
	Runtime Version of Excel
	------------------------
	
	If this error message occurs when you are running the run-time version of Excel
	(with run-time Windows), configure Excel to look for COMMAND.COM in the root
	directory of the boot drive (usually drive C) or copy COMMAND.COM to the EXCEL
	directory. To configure Excel to point to the root directory of the boot drive:
	
	1. From the File menu, choose Open.
	
	2. In the Directories box, select the boot drive. For example:
	
	  [-C-]
	
	3. Choose Cancel.
	
	The default directory for Excel is now the root directory of drive C, allowing
	Excel to locate COMMAND.COM.
	
	NOTE: This message can also be caused by too little hard disk space. This can
	occur when exiting Windows or an application, such as Microsoft Excel. If you
	are using a permanent swap file, you need to have a minimum of 4 MB of available
	disk space; if you are using a temporary swap file, you need to have a minimum
	of 9 MB of available disk space. Also, be sure that you have a valid TEMP
	directory.
	
	The Novell NetWare products included here are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: wdnovell wderror 3.10 3.00 3.00a 3.1 3.0 3.0a 2.03 2.10 2.11 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
