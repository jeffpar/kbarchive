---
layout: page
title: "Q114474: PRB: Setup Toolkit Error &quot;Parser out of memory&quot;"
permalink: /kb/114/Q114474/
---

## Q114474: PRB: Setup Toolkit Error &quot;Parser out of memory&quot;

{% raw %}

	Article: Q114474
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the setup program created by the Microsoft Setup Toolkit is reading the
	script, the following error message is given:
	
	  Parser out of memory
	
	CAUSE
	=====
	
	This means that the script interpreter has exceeded its memory limit on some
	memory object. The memory object could be a data segment, a code segment, or one
	of the parser tables. There is no way to know which memory object it is. The
	chance of running out of interpreter table space is rare -- you will almost
	always run out of code or data space first.
	
	RESOLUTION
	==========
	
	Try breaking the script into multiple scripts and try running them
	independently. This can be done by using Microsoft Test's RUN command. For
	example:
	
	  RUN "_mstest script1.mst"
	
	Other tricks that can bed used to reduce the size of the code and data segments
	include:
	
	1. Eliminate excess code, by using only those .INC files that are needed. For
	  example, if you are not using the registration database, do not include
	  MSREGDB.INC.
	
	2. Within each .INC files, comment out unused functions.
	
	3. DLL calls are expensive in terms of code generation. If a script makes
	  frequent calls to a function in a DLL, it might be better to place the call
	  to that function in a wrapper function/subroutine within the script file.
	  This will reduce memory consumption.
	
	4. Finally, consider using text files to hold your strings and read them in at
	  run time.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
