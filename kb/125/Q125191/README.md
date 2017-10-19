---
layout: page
title: "Q125191: NETAPI.DLL Failure Code 02 in BOOTLOG.TXT"
permalink: /kb/125/Q125191/
---

## Q125191: NETAPI.DLL Failure Code 02 in BOOTLOG.TXT

	Article: Q125191
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When viewing the BOOTLOG.TXT file in the Windows directory, you may see the
	following line:
	
	       LoadFail = NETAPI.DLL Failure code is 02
	
	CAUSE
	=====
	
	This error code is placed in the BOOTLOG.TXT file during Setup. Error code 02
	means that the file (in this case, NETAPI.DLL) was not found.
	
	When setting up Microsoft Windows for Workgroups 3.11, Setup searches for
	NETAPI.DLL. If Setup cannot find NETAPI.DLL, an error entry is placed in
	BOOTLOG.TXT file.
	
	When you run WIN /B, Windows for Workgroups appends the original BOOTLOG.TXT file
	that Setup created. The failure code error remains in the BOOTLOG.TXT file until
	the file is deleted.
	
	RESOLUTION
	==========
	
	The "LoadFail = NETAPI.DLL Failure code is 02" entry in the BOOTLOG.TXT file is
	added during Setup only. You can rename or delete the BOOTLOG.TXT file so that a
	new file will be created when you run WIN /B.
	
	MORE INFORMATION
	================
	
	The LoadFail error is recorded in the BOOTLOG.TXT file when installing Windows
	for Workgroups 3.11 in the following ways:
	
	- When you upgrade Windows 3.x to Windows for Workgroups 3.11
	
	- When you upgrade Windows for Workgroups 3.1 to Windows for Workgroups 3.11
	
	- When you install Windows for Workgroups 3.11 to a clean directory
	
	When installing over an existing Windows for Workgroups 3.11 installation, this
	error is not recorded in the BOOTLOG.TXT file unless NETAPI.DLL is missing or
	damaged.
	
	Additional query words: 3.10 3.11 install netapi setup err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
