---
layout: page
title: "Q157026: Print.doc File Does Not Exist on Windows NT 4.0 Compact Disc"
permalink: /kb/157/Q157026/
---

## Q157026: Print.doc File Does Not Exist on Windows NT 4.0 Compact Disc

	Article: Q157026
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT Workstation 4.0 and Windows NT Server 4.0 ship with several
	additional documentation files to assist users in taking full advantage of these
	products. However, some of these files are incorrectly identified in the
	documentation.
	
	MORE INFORMATION
	================
	
	In the support literature contained on both the server and workstation compact
	discs, the support files Readme.wri, Printer.wri, and Network.hlp are
	incorrectly identified as Readme.doc, Printer.doc, and Network.doc. The
	reference file that incorrectly identifies these files on Windows NT Workstation
	is Xsh_01w.doc. On the server compact disc, the file is Xsh_01s.doc. Both of
	these files can be found in the Support\Books directory of the compact disc. The
	specific file references can be found under the heading Additional Files on Your
	Compact Disc. The three files listed under this heading are located in the
	directory for the relevant platform: i386, MIPS, ALPHA, or PPC. To view these
	files, you need to decompress them with the Expand.exe utility. This utility can
	be found in the System32 directory of a computer installed with Windows NT and
	on the compact disc media. The following is an example of how this utility can
	be used to unpack the desired files:
	
	Expand e:\i386\Printers.wr_ c:\temp\Printers.wri
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
