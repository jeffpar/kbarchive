---
layout: page
title: "Q97153: Norton Desktop Unmounts DoubleSpace-compressed Bernoulli Drive"
permalink: /kb/097/Q97153/
---

## Q97153: Norton Desktop Unmounts DoubleSpace-compressed Bernoulli Drive

	Article: Q97153
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:6.0,6.2; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Symantec's Norton Desktop for Windows or Central Point Software's PC
	Tools for Windows, your DoubleSpace-compressed Bernoulli drive(s) may unmount
	when you start Windows or when you choose to refresh the display. Choosing the
	Bernoulli drive letter in File Manager shows one file called READTHIS.TXT. If
	opened, the file states:
	
	  This disk has been compressed by MS-DOS DBLSPACE.
	  To make this disks contents accessible change to the
	  drive and type: DBLSPACE /MOUNT
	
	CAUSE
	=====
	
	This problem occurs when you use older Bernoulli drivers.
	
	RESOLUTION
	==========
	
	To work around this problem, update your Bernoulli drivers to version 1.21 or
	later.
	
	Norton Desktop for Windows, PC Tools for Windows, and Bernoulli drives are
	manufactured by vendors independent of Microsoft; we make no warranty, implied
	or otherwise, regarding these products' performance or reliability.
	
	Additional query words: ndw 3.0a 3.00 3.00a 3.10 3.1 3.11 6.00 6.20 dos6 dblspace.exe removable media 1.12 msdos
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
