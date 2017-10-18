---
layout: page
title: "Q90513: WFWG Err Msg: MS-DOS Error SYS0002"
permalink: kb/090/Q90513/
---

## Q90513: WFWG Err Msg: MS-DOS Error SYS0002

	Article: Q90513
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the real mode network redirector, NET.EXE, from a
	network installation of Windows for Workgroups on a Novell network, you may
	receive the following error message:
	
	  MS-DOS error SYS0002 occurred trying to open the file "x:\system.ini"
	
	CAUSE
	=====
	
	This error occurs because NET.EXE starts from your shared Windows for Workgroups
	directory and your personal copy of the SYSTEM.INI file is located in your
	personal Windows for Workgroups directory.
	
	WORKAROUND
	==========
	
	To run the real mode redirector successfully, you need to add a search drive
	that includes both the SYSTEM.INI and NET.EXE files.
	
	MORE INFORMATION
	================
	
	After Windows for Workgroups installation, a typical NetWare search path might
	look as follows:
	
	  SEARCH1:=Z:.[XXX\SYS:PUBLIC \]
	  SEARCH2:=Y:.[XXX\SYS:USER\JEFF\WFWG\] - (User directory. Setup /N)
	  SEARCH3:=X:.[XXX\SYS:WINDOWS\WFWG\] - (Shared directory. Setup /A)
	  and so on
	
	When you start the redirector by typing
	
	  net start workstation
	
	NET.EXE is first found on drive X. Drive X only contains the expanded Windows for
	Workgroups files with no specific installation information. Your SYSTEM.INI file
	is actually located on drive Y.
	
	To successfully start the real mode network redirector, make sure both NET.EXE
	and SYSTEM.INI are located on a drive together. The boot drive (drive C
	typically) is a good drive for this. To start the redirector, change to drive C
	first, or add drive C to your NetWare search path prior to the shared Windows
	for Workgroups directory:
	
	  SEARCH1:=Z:.[XXX\SYS:PUBLIC \]
	  SEARCH2:=Y:.[XXX\SYS:USER\JEFF\WFWG\] - (User directory. Setup /N)
	  SEARCH3:=C:\ - (Location of NET.EXE and SYSTEM.INI)
	  SEARCH4:=X:.[XXX\SYS:WINDOWS\WFWG\] - (Shared directory. Setup /A)
	  and so on
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
