---
layout: page
title: "Q96383: AddStor SSUTIL Utility Reports MS-DOS 6.x as Version 5.0"
permalink: /kb/096/Q96383/
---

## Q96383: AddStor SSUTIL Utility Reports MS-DOS 6.x as Version 5.0

	Article: Q96383
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The AddStor compression information utility, SSUTIL, incorrectly reports the
	following information about MS-DOS version 6.0:
	
	  VERSION is MS-DOS 5.0
	  REPORTED version is 6.0
	
	CAUSE
	=====
	
	SSUTIL looks at the boot record signature to determine the version of MS-DOS. It
	then calls the GetMSDOSVersion() function to determine the reported version
	number.
	
	Because the boot record signature is the same for MS-DOS 5.0 and MS-DOS 6.0,
	SSUTIL incorrectly reports the version number.
	
	NOTE: The incorrect version number detection does not cause any problems or
	incompatibilities between MS-DOS 6.x and the AddStor utility.
	
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
