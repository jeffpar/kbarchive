---
layout: page
title: "Q80671: Novell Err Msg: VIPX.386 Cannot Load"
permalink: kb/080/Q80671/
---

## Q80671: Novell Err Msg: VIPX.386 Cannot Load

	Article: Q80671
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Novell has versions of IPX.COM and VIPX.386 available through CompuServe. These
	files are contained within two separate compressed (PKZIP) files and are located
	in the Novell forum.
	
	If you use one of the new files without the other, Windows halts while loading
	and returns an error message indicating that VIPX.386 cannot load.
	
	MORE INFORMATION
	================
	
	The following error messages may result if you load Windows in 386 enhanced mode
	with mismatched IPX.COM and VIPX.386 files:
	
	  VIPX.386 could not load since a proper version of IPX was not in memory. In
	  order to access a NetWare file server from Windows, be sure to run the IPX
	  and Shell programs before starting Windows.
	
	This error occurs because IPX.COM version 3.1 requires a later version of
	VIPX.386. If you receive this error message, either use an older version of
	IPX.COM or obtain the latest version of VIPX.386. This file is dated 11-21-91
	and has a file size of 18998 bytes. The file is located on CompuServe in a file
	named VIPX.ZIP.
	
	The following is another error message you may receive:
	
	  VIPX.386 could not load since a proper version of IPX was not in memory.
	  Please upgrade your IPX to the most current version. Be sure to load IPX
	  before starting Windows.
	
	This error occurs if you have not upgraded IPX.COM to version 3.1. If you receive
	this error message, do one of the following:
	
	- Use an earlier version of VIPX.386, such as the version that ships with
	  Microsoft Windows version 3.0 or the Microsoft Windows 3.0 Supplemental
	  Driver Library (SDL).
	
	  -or-
	
	- From CompuServe, download version 3.1 of IPX and regenerate the shell. This
	  version is contained in a file called DOSUP4.ZIP.
	
	These workstation files are available in the Novell forum on CompuServe.
	Customers should log onto CompuServe, and type the following at the ! prompt:
	
	  GO Novell
	
	For additional information, contact Novell technical support.
	
	The products included here are manufactured by Novell, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11pkzip.exe 3rdparty err msg win31 IPX
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
