---
layout: page
title: "Q66646: PRB: U4007 Error Can Be Caused By Missing Quotation Marks"
permalink: kb/066/Q66646/
---

## Q66646: PRB: U4007 Error Can Be Caused By Missing Quotation Marks

	Article: Q66646
	Product(s): Microsoft Programming Utilities
	Version(s): NT:1.4; OS/2:1.11,1.12,1.13,1.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for OS/2, versions 1.11, 1.12, 1.13, 1.21 
	- Microsoft NMAKE Utility for Windows NT, version 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to use a makefile that uses the long filenames available in OS/2 or
	Windows NT fails and NMAKE generates the following message:
	
	  U4007: file name too long: truncating to 8.3
	
	RESOLUTION
	==========
	
	Place quotation marks around the long filenames.
	
	STATUS
	======
	
	NMAKE 1.5 (included in Visual C++ 2.0) will handle long filenames.
	
	MORE INFORMATION
	================
	
	For more information about this behavior, please refer to the README.DOC file
	provided with Microsoft C version 6.0 for OS/2, or to the NMAKE.WRI file
	provided with Visual C++ 32-bit Edition version 1.0.
	
	Additional query words: 1.40
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2 kbNMAKE140NT
	Version           : NT:1.4; OS/2:1.11,1.12,1.13,1.21
	
	=============================================================================
	
