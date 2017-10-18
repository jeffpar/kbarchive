---
layout: page
title: "Q110318: WFWG 3.11 Err Msg: General Protection Fault in WFWSETUP.DLL"
permalink: kb/110/Q110318/
---

## Q110318: WFWG 3.11 Err Msg: General Protection Fault in WFWSETUP.DLL

	Article: Q110318
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade to Windows for Workgroups 3.11, you may receive the following
	error message:
	
	  General Protection fault in WFWSETUP.DLL
	
	If you choose OK, you may receive a general protection (GP) fault in USER.EXE and
	then the following error message may be displayed:
	
	  Standard Mode: Bad Fault in MS-DOS Extender.
	  Fault: 000D Stack Dump: 0000 0000 0070
	  Raw fault frame: EC=0000 IP=5EF7 CS=03AF FL=3087 SP=FFEE SS=02DF
	
	CAUSE
	=====
	
	The GP fault occurs because of the number and size of .INF files. Windows for
	Workgroups Setup loads the variable strings (information to the right of the
	equal sign) for all of the .INF files when it starts. If the size of the
	variables in all the .INF files exceeds the 32-kilobyte (K) stack allocated for
	.INF file variables, you receive a GP fault.
	
	RESOLUTION
	==========
	
	To correct this problem, rename (or delete) some of the additional .INF files in
	the Windows SYSTEM subdirectory to filenames with extensions other than .INF.
	After you have deleted or renamed the files, restart Setup.
	
	NOTE: Never rename or delete the SETUP.INF file in this subdirectory.
	
	Additional query words: 3.11 setup boundary exceeded
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
