---
layout: page
title: "Q85924: Using UNC Redirections for File and Groups"
permalink: kb/085/Q85924/
---

## Q85924: Using UNC Redirections for File and Groups

	Article: Q85924
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	3.10
	WINDOWS
	kbnetwork kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	                                 SUMMARY
	                                 =======
	
	Microsoft Windows operating system version 3.1 supports the use of
	universal naming conventions (UNCs) for entries in Program Item Properties,
	Program Group Properties, PIF command lines, and File Manager.
	
	UNC redirection is:
	
	1. The ability to use a network resource, without formally connecting
	  to it, using the MS-DOS NET USE command
	
	2. The use of a program such as File Manager or Control Panel's
	  Printers to access network resources
	
	UNC redirection is supported in LAN Manager version 1.1 or later, and
	on 100-percent compatible networks.
	
	                            MORE INFORMATION
	                            ================
	
	USING UNC IN PROGRAM ITEM AND GROUP PROPERTIES
	==============================================
	
	To have access to a program or group (.GRP) located on a
	network server, without formally connecting to the resource,
	use UNC redirection in the command lines, as follows:
	
	  UNC Redirection for a Group (.GRP) File
	  ---------------------------------------
	
	  1. From Program Manager's File menu, choose New.
	
	  2. Select Program Group, and choose OK.
	
	  3. In the Group File text box, type the UNC address for the
	     .GRP file. For example:
	
	        \\netname\netdir\netsubdir\MYGROUP.GRP
	
	  UNC Redirection for a Program Item
	  ----------------------------------
	
	  1. From Program Manager's File menu, choose New.
	
	  2. Select Program Item, and choose OK.
	
	  3. In the Command Line text box, type the UNC address for the
	     program. For example:
	
	        \\netname\netdir\netsbdir\WINPROG.EXE
	
	     When using UNC addressing for programs, you may receive the
	     following message:
	
	        The specified path points to a file that may not be
	        available during later Windows sessions. Do you want to
	        continue?
	
	     If you choose Yes, then the icon for the program item is built.
	     UNC redirection for programs is dependent upon the modules or
	     parts that the program uses, where they are located, and how they
	     are loaded. This may not function for all applications.
	
	  Limitations Using UNC Redirection for a Program Items and Groups
	  ----------------------------------------------------------------
	
	  The server and share names must conform to the eight-character
	  filename, three-character extension MS-DOS filename convention for UNC
	  redirection to work with Program Manager. For example, you cannot use
	  \\SERVER12.SERVE\SHARE, but you can use \\SERVER12.NEW\SHARE or
	  \\SERVER12\SHARE.
	
	  This applies to programs that use the Windows application program
	  interface (API) function OpenFile(). If the application uses SOpen()
	  or Open(), it can use UNC names that don't conform to the
	  eight-character filename, three-character extension convention.
	
	UNC REDIRECTION IN PROGRAM INFORMATION FILES (PIFs)
	===================================================
	
	To have access to an MS-DOS-based application located on a network
	server, without formally connecting to the resource, use UNC
	redirection in the PIF's command line, as follows:
	
	1. Run the PIF Editor.
	
	2. In the Program Filename text box, enter the UNC address for the
	  application:
	
	     \\netname\netdir\DOSPROG.EXE
	
	UNC redirection for programs is dependent upon the modules or parts
	that the program uses, where they are located, and how they are
	loaded. This may not function for all applications.
	
	This can work even if the executable file relies on another file to
	run (for example, if MS-DOS 5.0's EDIT.COM and QBASIC.EXE [the later
	is needed to run the former] are both copied onto the network share,
	UNC redirection will work properly).
	
	UNC REDIRECTION IN FILE MANAGER
	===============================
	
	To copy or move files and directories in File Manager to a network
	share without formally connecting to the resource, use UNC
	redirection as follows:
	
	  To Copy or Move File(s) or Directory(s) in File Manager
	  -------------------------------------------------------
	
	  1. Run File Manager.
	
	  2. Select the file you want to copy or move.
	
	  3. From the File menu, choose Move or Copy.
	
	  4. In the To text box, type the UNC address. For example:
	
	        \\netname\netdir\data\ 
	
	Additional query words: 3.10 unique pipes piping gray grey
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
