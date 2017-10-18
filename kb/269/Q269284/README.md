---
layout: page
title: "Q269284: INFO: Undocumented Function SYS(1104)"
permalink: kb/269/Q269284/
---

## Q269284: INFO: Undocumented Function SYS(1104)

	Article: Q269284
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbXBase kbGrpDSFox kbDSupport
	Last Modified: 29-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SYS(1104) function may be used to force Visual FoxPro to purge unused
	buffers.
	
	NOTE: This function is undocumented, and therefore may be changed or omitted,
	without notice, in future releases of Visual FoxPro. The reliability of this
	function is not guaranteed.
	
	MORE INFORMATION
	================
	
	Calling this function can improve performance after executing commands that make
	extensive use of memory buffers. This function is also useful when you are
	manipulating large tables.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John
	Desch, Microsoft Corporation.
	
	
	Additional query words: SYS() BUFFER 1104
	
	======================================================================
	Keywords          : kbvfp600 kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
