---
layout: page
title: "Q80479: Corrupt Permanent Swap File Error and DR DOS 6.0 SSTOR.EXE"
permalink: kb/080/Q80479/
---

## Q80479: Corrupt Permanent Swap File Error and DR DOS 6.0 SSTOR.EXE

	Article: Q80479
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows allows the creation of a permanent swap file on a disk compressed with
	the Digital Research (DR) DOS version 6.0 utility, SuperStor (SSTOR.EXE).
	SuperStor is a utility included with the DR DOS 6.0 operating system. However,
	if you attempt to load Windows in 386 enhanced mode with a swap file on a
	SuperStor drive, a corrupt swap file error results.
	
	To prevent this error, re-create the permanent swap file on a drive that is not
	compressed with SuperStor.
	
	MORE INFORMATION
	================
	
	The "DR DOS 6.0 User's Guide" states the following in Appendix E:
	
	  Also, remember that Windows permanent swap files cannot be stored on a
	  SuperStor compressed disk. Running the SuperStor utility, SSTOR.EXE, on a
	  disk and then creating the Windows permanent swap file on the compressed disk
	  may generate the following message on attempting to load Windows in 386
	  enhanced mode:
	
	  Corrupt Swap File Warning
	
	  Your swap file is corrupt. See Chapter 13, "Optimizing Windows," in the
	  "Microsoft Windows User's Guide" for instructions about re-creating the
	  file.
	
	  Press any key to continue
	
	Microsoft Windows may then come up in enhanced mode after you press any key
	(without the use of a swap file) or may not load at all on some systems.
	
	For additional information, contact Novell technical support.
	
	The Digital Research products included here are manufactured by Novell, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.00 3rdparty 6.00 super stor win30 KBSetup 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
