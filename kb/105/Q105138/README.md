---
layout: page
title: "Q105138: WFWG Mail: DoubleSpace and Highest Security Options"
permalink: kb/105/Q105138/
---

## Q105138: WFWG Mail: DoubleSpace and Highest Security Options

	Article: Q105138
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In version 3.11 of Microsoft Windows for Workgroups, there are additional menu
	items not supplied in the retail package of Microsoft Mail for PC Networks.
	
	Under the Mail Options menu, there is a section titled "Optimize Local Mail
	File." The following new choices are available:
	
	  DoubleSpace
	  Highest Security
	
	These two choices are specific to version 3.11 of Microsoft Windows for
	Workgroups Mail and are only available when running with MS-DOS version 6.0 or
	later.
	
	MORE INFORMATION
	================
	
	DoubleSpace is considered to have less encryption (resulting in less security)
	but better performance (that is, increased speed) than the Highest Security
	option. DoubleSpace is available with MS-DOS version 6.0 or later only.
	
	The Highest Security option uses the same Mail message file (.MMF) encryption
	algorithm that Microsoft Mail for PC Network uses. Highest Security is not as
	fast as DoubleSpace because time is used to encrypt and decrypt the .MMF file.
	
	The DoubleSpace encryption is built into DoubleSpace itself. A file cannot be
	copied from a DoubleSpace drive, imported to a different computer, and easily
	read. Since the file allocation table (FAT) system is cluster-based, DoubleSpace
	uses its own FAT (which is called the Microsoft DoubleSpace FAT [MDFAT]) to
	achieve sector allocation. This encryption option is fast, however, it is not as
	secure as the encryption algorithm used in the Highest Security setting.
	
	Additional information about DoubleSpace can be found on pages 118-136 in the
	MS-DOS "User's Guide" and in Chapter 3 of the MS-DOS "Technical Reference
	Manual."
	
	Additional query words: double space WGPO
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
