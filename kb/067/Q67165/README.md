---
layout: page
title: "Q67165: AllocCStoDSAlias Function Not Documented &amp; Not Supported"
permalink: kb/067/Q67165/
---

## Q67165: AllocCStoDSAlias Function Not Documented &amp; Not Supported

	Article: Q67165
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The source code for version 3.0 of the Microsoft Windows communications driver,
	COMM.DRV, uses the AllocCStoDSAlias function. This function is not documented
	and will not be supported in future versions of Windows.
	
	The proper method to create a code or data selector for a block of memory is to
	use the PrestoChangoSelector function. This function is documented as the
	ChangeSelector function in the "Windows Software Development Kit Reference
	Volume 1" manual for Windows 3.0.
	
	Additional query words: 3.00 DDKMISC
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300
	Version           : :3.0
	
	=============================================================================
	
