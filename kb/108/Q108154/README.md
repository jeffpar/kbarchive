---
layout: page
title: "Q108154: Problems Accessing B&amp;W NFS Mounted Drives in WFWG 3.11"
permalink: /kb/108/Q108154/
---

## Q108154: Problems Accessing B&amp;W NFS Mounted Drives in WFWG 3.11

	Article: Q108154
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Beame and Whiteside's network file system (BW-NFS) for Lan Workplace
	on open datalink interface (ODI) with Windows for Workgroups 3.11 and you set an
	NFS file system as a mounted drive, the drive is visible but not accessible in
	Windows. (It appears as a blank disk.)
	
	CAUSE
	=====
	
	This behavior is caused by a problem with the Beame and Whiteside NFS
	redirector.
	
	RESOLUTION
	==========
	
	Although the directory appears empty, the files can be accessed if you know the
	name of the file. Beame and Whiteside is aware of this problem.
	
	STATUS
	======
	
	Beame and Whiteside has developed new drivers to make Windows for Workgroups
	3.11 work with its product and the ODI stack. The problem in the redirector will
	be addressed in a future release. For more information, contact Beame and
	Whiteside at (905) 765-0822 (phone)or (905) 765-0815 (fax).
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.11 B&W Beam NFS 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
