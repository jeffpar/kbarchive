---
layout: page
title: "Q74715: Windows Err Msg: Cannot Run PageMaker 4.0, Aldus Directory..."
permalink: kb/074/Q74715/
---

## Q74715: Windows Err Msg: Cannot Run PageMaker 4.0, Aldus Directory...

	Article: Q74715
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start Aldus PageMaker 4.0, the following error message may be
	displayed:
	
	  Cannot run PageMaker 4.0, Aldus Directory.
	  WIN.INI setting missing or incorrect.
	
	This error can be caused by one of the following:
	
	- The [Aldus] section in the WIN.INI file is missing or incorrect. This section
	  should appear as follows
	
	        [Aldus]
	        AldusDirectory=[Drive:]Aldus
	        NetAldusDirectory=None
	        PM4LangDir=Usenglsh
	
	  where [Drive:] is the letter of the drive that contains the directory named
	  ALDUS.
	
	  -or-
	
	- The ALDUS directory does not exist.
	
	MORE INFORMATION
	================
	
	The ALDUS directory is created when PageMaker 4.0 is installed. This directory
	contains DLL files required for PageMaker 4.0. Contact Aldus technical support
	for more information.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3rdparty 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
