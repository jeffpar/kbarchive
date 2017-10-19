---
layout: page
title: "Q65389: Mac Gty: Gateway Installer Hangs Macintosh Plus"
permalink: /kb/065/Q65389/
---

## Q65389: Mac Gty: Gateway Installer Hangs Macintosh Plus

	Article: Q65389
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway Installer may hang a Macintosh Plus during the
	installation of a gateway if the Macintosh is an AppleShare workstation and if
	it has the older version of the Macintosh ROM. This is a result of a conflict
	between the Gateway Installer, AppleShare, and the older ROMs.
	
	MORE INFORMATION
	================
	
	A possible solution to the problem is to remove the AppleShare and AppleShare
	Prep files from the System Folder and restart the Macintosh. The AppleShare
	files can be moved back into the System Folder after the installation of the
	Gateway.
	
	There are three versions of the Macintosh Plus ROM. To check which version of the
	ROM is being used:
	
	1. Enter the debugger by pressing the interrupt switch on the side of the
	  computer.
	
	2. Type in "dm 400000" (without the quotation marks) without quotation marks.
	
	3. Check the first eight numbers listed and compare them to the following:
	
	  a. The older version is checksum 4d 1e ea e1 (these ROMs are called "lonely
	     heifers").
	
	  b. The newer version is checksum 4d 1f 81 72 (these ROMs are called "loud
	     harmonicas").
	
	If the problem is caused by an older ROM, install the Gateway on another
	computer. Copy the installed files to the original Macintosh Plus.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
