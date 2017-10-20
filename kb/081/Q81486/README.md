---
layout: page
title: "Q81486: Novell SHELL.CFG and Windows"
permalink: /kb/081/Q81486/
---

## Q81486: Novell SHELL.CFG and Windows

{% raw %}

	Article: Q81486
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following contains information on the NetWare SHELL.CFG file settings that
	apply to Microsoft Windows.
	
	The SHELL.CFG file is a NetWare configuration file used to define configuration
	options for the NetWare shell components IPX, NET3/NET4/NET5/NETX, and Net BIOS.
	It should be located in the start-up directory of the network shell programs.
	Many network installations do not have a SHELL.CFG present by default; in this
	case, one may be created by using a non-formatting text editor, such as Windows'
	Notepad or the MS-DOS 5.0 Editor.
	
	MORE INFORMATION
	================
	
	SHELL.CFG accepts the following options that relate to Windows:
	
	  
	
	  SHOW DOTS=ON/OFF
	  ----------------
	
	  The MS-DOS directory entries (.) and (..) represent the current and previous
	  directories in the directory tree structure, respectively. NetWare does not
	  normally show these directory entries. This can make File Open dialog boxes
	  in Windows applications difficult to use because the (..) will not be
	  available to easily return to a directory level. The SHOW DOTS=ON option
	  allows these entries to appear. However, this new shell functionality is not
	  compatible with earlier versions of the NetWare administration utilities
	  MAKEUSER and BINDFIX.
	
	  If planning to use SHOW DOTS=ON, make sure these utilities have been updated
	  with the new versions supplied in the workstation shell update package.
	  Consult your NetWare documentation and/or Novell for more information.
	
	  NOTE: With Novell Netware 3.1.1, the line SHOW DOTS+ON/OFF can be added to the
	  NET.CFG file for the same effect.
	
	  FILE HANDLES=
	  -------------
	
	  As a default, NetWare allows 40 files to be open simultaneously across the
	  network. This default limit can be easily exceeded within a multitasking
	  environment such as Windows. If this occurs, errors may occur when starting
	  applications or opening files.
	
	  To correct this problem, increase the default number of NetWare file handles
	  by using this parameter. FILE HANDLES=60 is recommended.
	
	  NOTE: The new Novell requestor (VLM.EXE) does not use the file handle
	  statement in the NET.CFG file. All modifications to the number of file
	  handles to be used in the NetWare environment should be made in the
	  CONFIG.SYS file.
	
	
	  NETBIOS BROADCAST COUNT=5
	
	  NETBIOS BROADCAST DELAY=10
	
	  -------------------------------------------------------
	
	  Applications that use Net BIOS communications, especially 3270 network
	  terminal emulation packages, require specific timing on Net BIOS broadcasts.
	  If problems occur with Net BIOS sessions hanging or locking up, try setting
	  these parameters to the recommended values above.
	
	If SHELL.CFG is properly recognized, a verification will appear that these
	features are enabled when the NetWare shell loads.
	
	For more information on other SHELL.CFG options, see the "NetWare Supervisor
	Reference Guide." Note that some of these options are new and will not be
	present in earlier versions of the NetWare documentation.
	
	For additional information, contact Novell technical support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.00a Novell Shell.cfg NET3.COM NET4.COM NET5.COM NETX.COM Winword Excel Works 3.10 showdots 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
