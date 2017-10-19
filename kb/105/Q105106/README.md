---
layout: page
title: "Q105106: PC WFW: Mail DoubleSpace and Highest Security Options"
permalink: /kb/105/Q105106/
---

## Q105106: PC WFW: Mail DoubleSpace and Highest Security Options

	Article: Q105106
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In version 3.11 of Microsoft Windows for Workgroups Mail, there are additional
	menu items not supplied in the retail package of Microsoft Mail for PC
	Networks.
	
	Under the Mail Options menu, there is a section titled Optimize Local Mail File.
	There are two choices listed:
	
	  DoubleSpace
	  Highest Security
	
	These two choices are specific to version 3.11 of Microsoft Windows for
	Workgroups mail, and are only available when you are running Windows for
	Workgroups under MS-DOS version 6.0 or higher.
	
	MORE INFORMATION
	================
	
	DoubleSpace is considered to have less encryption (less security) but better
	performance (speed) than Highest Security. DoubleSpace is only available with
	MS-DOS version 6.0 or higher.
	
	The Highest Security option uses the same Mail Message File (MMF) encryption
	algorithm used by Microsoft Mail for PC Networks. Highest Security is not as
	fast as DoubleSpace because time is taken to encrypt or decrypt the .MMF file.
	
	The DoubleSpace encryption is built into DoubleSpace itself. You cannot copy a
	file off of a DoubleSpace drive, import it to a different computer, and easily
	read the file. Because the file allocation table (FAT) system is cluster based,
	DoubleSpace uses its own FAT [which is called the Microsoft DoubleSpace FAT
	(MDFAT)] to achieve sector allocation. This encryption option is fast; however,
	it is not as secure as the encryption algorithm used in the Highest Security
	setting.
	
	For more information on DoubleSpace, see pages 118-136 in the MS-DOS "User's
	Guide" and Chapter 3 of the MS-DOS "Technical Reference."
	
	
	Additional query words: double space WFW WGPO
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbWFWSearch kbWFW311
	Version           : :3.11
	
	=============================================================================
	
