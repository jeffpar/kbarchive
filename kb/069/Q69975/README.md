---
layout: page
title: "Q69975: Network Server Allows Only One User to Access Windows"
permalink: kb/069/Q69975/
---

## Q69975: Network Server Allows Only One User to Access Windows

	Article: Q69975
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If only one workstation at a time can successfully access Windows (installed on
	a network server), verify that the files in the shared Windows directory on the
	server have all been marked share and read only.
	
	MORE INFORMATION
	================
	
	When Windows is installed on a network server, the Windows files in the shared
	directory must be flagged share and read only, as described in the "Microsoft
	Windows User's Guide" on page 554.
	
	For Novell NetWare, this can be done from the shared Windows directory with the
	FLAG command:
	
	  FLAG *.* SRO
	
	To verify that the files are marked share and read only, type
	
	  flag w:
	
	where w: is the drive mapped to Windows.
	
	Note: Similar problems may be caused by typing "setup" without "/n" on the
	server.
	
	For more information on running Windows from a network, query on:
	
	  novell and netware and rights and setup /n
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide." version 3.0, page 554.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
