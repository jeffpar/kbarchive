---
layout: page
title: "Q111602: FIX: GetPrivateProfileInt() May Not Read Correct Value"
permalink: /kb/111/Q111602/
---

## Q111602: FIX: GetPrivateProfileInt() May Not Read Correct Value

	Article: Q111602
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSysSettings kbGrpDSUser kbOSWin310bug kbOSWin95fix
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If GetPrivateProfileInt() is used to read a number that has preceding white
	space, the value returned may be incorrect. For example, if the .ini file entry
	is as follows, GetPrivateProfileInt() may return 0 (zero):
	
	  MyValue= 5
	
	CAUSE
	=====
	
	This problem is caused by the white space in front of the number.
	
	RESOLUTION
	==========
	
	Ensure that any numbers written to an .ini file do not contain white space.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. This bug was
	corrected in Windows 95.
	
	Additional query words: whitespace
	
	======================================================================
	Keywords          : kb16bitonly kbSysSettings kbGrpDSUser kbOSWin310bug kbOSWin95fix 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
