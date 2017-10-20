---
layout: page
title: "Q61848: How to Swap Drive Letters with ASSIGN"
permalink: /kb/061/Q61848/
---

## Q61848: How to Swap Drive Letters with ASSIGN

{% raw %}

	Article: Q61848
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the ASSIGN program to swap the drive letter names for any defined
	drive (that is, a drive that actually exists on your machine). For example, to
	swap the drive letter names for drives D and E, type the following:
	
	  " ASSIGN d=e e=d" (without the quotation marks)
	
	To return the drive names to the original names, type the following:
	
	  " ASSIGN <ENTER>" (without the quotation marks)
	
	NOTE: The ASSIGN program is available in MS-DOS 5.0 and earlier. If you have a
	later versions of MS-DOS you can obtain the ASSIGN program with the Microsoft
	MS-DOS Supplemental Disk. You can obtain the MS-DOS Supplemental Disk by using
	the coupon located in the back of your printed MS-DOS documentation.
	
	MORE INFORMATION
	================
	
	Some programs, including Microsoft Windows, can have problems when drive letters
	are changed using ASSIGN. In particular, do not change drive letter assignments
	when a program is active. For additional information about this process, see the
	comments in the "Microsoft MS-DOS User's Guide" and "Microsoft MS-DOS User's
	Reference" about using ASSIGN with commands that require drive information.
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x
	
	=============================================================================
	

{% endraw %}
