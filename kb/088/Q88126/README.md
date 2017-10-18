---
layout: page
title: "Q88126: BUG: HC Error 2050 from #include in Help Project File (.HPJ)"
permalink: kb/088/Q88126/
---

## Q88126: BUG: HC Error 2050 from #include in Help Project File (.HPJ)

	Article: Q88126
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are building a Help file with the Microsoft Windows Help Compiler, the
	process stops with the following error message:
	
	  Error 2050: line <number> of <filename>.HPJ : Invalid #include
	  syntax
	
	CAUSE
	=====
	
	The Help project (.HPJ) file contains a #include statement where the filename is
	delimited by quotation marks ("") rather than angle brackets (<>).
	
	RESOLUTION
	==========
	
	To work around this problem, modify the .HPJ file to delimit the filename in the
	#include statement with angle brackets. For example, replace the following
	statement
	
	     #include "map.h"
	
	with the following:
	
	     #include <map.h>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the Windows Help Compiler
	version 3.1. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: buglist3.10 3.10 HC31 HC31.EXE HCP HCP.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
