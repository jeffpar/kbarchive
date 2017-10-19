---
layout: page
title: "Q82535: Mismatch Between ATM and PostScript on Times"
permalink: /kb/082/Q82535/
---

## Q82535: Mismatch Between ATM and PostScript on Times

	Article: Q82535
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using Adobe Type Manager version 2.0 or earlier, you may receive the
	following error message when using Microsoft Windows operating system version
	3.1:
	
	  ADOBE Type Manager ATM fonts and Postscript printer fonts don't match on
	  TIMES
	
	To correct this problem:
	
	1. Edit the ATM.INI file with a standard ASCII text editor.
	
	2. Add the following line to the [Aliases] and [Synonyms] sections:
	
	  Times Roman=Times
	
	Note: This procedure corrects this problem only in situations where ATM was
	installed before the upgrade to Windows 3.1, or where Printer ports were added
	or changed after installing ATM.
	
	MORE INFORMATION
	================
	
	This problem occurs at different times while in various applications. The
	message occurs while using Excel, Word for Windows, Write, and so on. The
	message may occur while the application is initializing, when using the OK
	button from a File/Page Setup menu, and when you print a document.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 3.1 adobe type manager
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
