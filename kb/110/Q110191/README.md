---
layout: page
title: "Q110191: Cannot Find NONET.DRV with WordPerfect 6.0 for Windows"
permalink: /kb/110/Q110191/
---

## Q110191: Cannot Find NONET.DRV with WordPerfect 6.0 for Windows

	Article: Q110191
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When installing, running, or printing from WordPerfect 6.0 for Windows under
	Microsoft Windows for Workgroups version 3.11, you may receive the following
	error
	
	  Cannot find <entry>.DRV
	
	where <entry> is the text referenced on the Multinet= line in the [Network]
	section of the SYSTEM.INI file. Two common entries are NONET.DRV and
	NETWARE3.DRV.
	
	
	CAUSE
	=====
	
	This error is referencing a file that does not exist. During the installation of
	WordPerfect 6.0 for Windows, the setup program reads the Multinet= entry and
	looks for a .DRV file whose name reflects the entry. Since no such file exists,
	the above error is generated.
	
	Default installations of Windows for Workgroups contain a Multinet=NONET entry;
	therefore, the most common occurrence of the error will be as follows:
	
	  Cannot find NONET.DRV.
	
	If you ignore the error during installation, it will reoccur each time you start
	WordPerfect 6.0.
	
	WORKAROUND
	==========
	
	At an MS-DOS command prompt, you can create a zero-byte file to match the
	Multinet= entry by using the following syntax
	
	     Cannot find <entry>.DRV
	
	where <entry> matches the filename referenced in the error message. This
	generates a "File not found - AAA" error, which can be ignored.
	
	Move the newly created <entry>.DRV file to the Windows SYSTEM
	subdirectory.
	This prevents the error message from occurring.
	
	For more information concerning this error, contact WordPerfect Technical
	Support.
	
	MORE INFORMATION
	================
	
	For more information see COBB Inside Microsoft Windows, Networking Edition, Vol.
	1 No. 2, page 16.
	
	WordPerfect is manufactured by WordPerfect Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 3.11 nonet netware3 "cannot find netware3.drv" nonet.drv"
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
