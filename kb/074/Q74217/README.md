---
layout: page
title: "Q74217: EXPAND.EXE Halts upon Expanded File in Windows"
permalink: /kb/074/Q74217/
---

## Q74217: EXPAND.EXE Halts upon Expanded File in Windows

{% raw %}

	Article: Q74217
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you want to expand or decompress a group of Windows files, you should use the
	batch file EXPALL.BAT instead of the Windows utility file EXPAND.EXE. You can
	create the EXPALL.BAT file by following the steps on page 553 in the "Microsoft
	Windows User's Guide."
	
	When you use the EXPAND.EXE utility with wildcard characters on the command line,
	EXPAND.EXE halts processing when it comes to a file that is already in the
	expanded file format. It processes all the files on a disk in the order they
	appear in the directory listing until all files are decompressed, or until it
	comes upon a file that is not compressed.
	
	MORE INFORMATION
	================
	
	When EXPAND.EXE is used with wildcard arguments to expand an entire Windows
	disk, EXPAND.EXE will halt processing at the point where it finds a file already
	in the expanded format. For example, the command
	
	  EXPAND A:\*.* C:\KBNETWORK
	
	will process all the files on the disk found in drive A, and will halt processing
	when it tries to expand a file already in the expanded format and generate the
	error message:
	
	  input file <filename.ext> already in expanded format
	
	The rest of the files on the disk will not be expanded.
	
	This is why the EXPALL.BAT file must be used for a network installation of
	Windows.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," pages 553-4
	
	NetWare and Windows Integration, NetWare Application Notes, pages 27-8
	
	Additional query words: 3.00 3.0 3.0a 3.00a kbsetup win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
