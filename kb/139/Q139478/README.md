---
layout: page
title: "Q139478: INFO: _heapwalk() Does Not Work On Win32s"
permalink: /kb/139/Q139478/
---

## Q139478: INFO: _heapwalk() Does Not Work On Win32s

	Article: Q139478
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On Win32s, _heapwalk() does not work because the underlying API is not
	implemented). A call to _heapwalk() returns _HEAPEND and sets errno to ENOSYS.
	Because Win32s does not implement the API required for the heapwalk function, it
	sets the appropriate error number.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : :4.0
	
	=============================================================================
	
