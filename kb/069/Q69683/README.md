---
layout: page
title: "Q69683: Packard-Bell PB1000 286 Requires PadCodeSegments=1"
permalink: kb/069/Q69683/
---

## Q69683: Packard-Bell PB1000 286 Requires PadCodeSegments=1

	Article: Q69683
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience the following symptoms with the Packard-Bell PB1000 running
	Microsoft Windows 3.0:
	
	- Unrecoverable Application Errors (UAEs) occur randomly.
	
	- Your system stops responding (hangs, or locks up) randomly.
	
	- Windows halts and exits to MS-DOS.
	
	RESOLUTION
	==========
	
	According to Packard-Bell Technical Support, the Packard-Bell PB1000, a 12MHz
	286 must have the line "PadCodeSegments=1" (without the quotation marks) in the
	[STANDARD] section of the SYSTEM.INI file for the machine to function properly.
	
	Use any text editor to add this line to the SYSTEM.INI file.
	
	MORE INFORMATION
	================
	
	The PB1000 is not listed as a supported machine on the Windows Hardware
	Compatibility List, and the addition of this line is not guaranteed to
	completely solve the above problems; however, it should reduce the frequency
	with which they occur.
	
	For more information, contact Packard-Bell technical support.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a UAE win30 KBHW 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
