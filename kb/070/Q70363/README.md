---
layout: page
title: "Q70363: FIX: /PAGESIZE Option Not Supported in LIB 3.10"
permalink: /kb/070/Q70363/
---

## Q70363: FIX: /PAGESIZE Option Not Supported in LIB 3.10

	Article: Q70363
	Product(s): Microsoft Programming Utilities
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LIB for MS-DOS, version 3.1 
	- Microsoft LIB for OS/2, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Library Manager utility (LIB) version 3.10 (that shipped with MASM
	5.10) does not support the /PAGESIZE option. Regardless of the value specified
	with this option, LIB 3.10 returns the following error:
	
	  LIB : warning U4153: PAGESIZE:x : page size invalid; ignored
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LIB version 3.1. This problem
	was corrected in LIB version 3.11.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbLibSearch kbZNotKeyword3 kbLibMan310DOS kbLibMan311OS2
	Version           : :3.1
	Solution Type     : kbfix
	
	=============================================================================
	
