---
layout: page
title: "Q141866: FIX: App Error While Changing Install Dir for Visual C++"
permalink: /kb/141/Q141866/
---

## Q141866: FIX: App Error While Changing Install Dir for Visual C++

{% raw %}

	Article: Q141866
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change the Install Directory during the setup process, an error
	similar to the following occurs.
	
	On Windows NT:
	
	  The instruction at "0x00415900" referenced memory at "0xa6375ebf".
	  The memory could not be read.
	  Click on OK to terminate the application.
	  Click on CANCEL to debug the application.
	
	On Windows 95:
	
	  The program has performed an illegal operation and will be shut down.
	  If the problem persists, contact the program vendor.
	
	Pressing the details button reports:
	
	  ~VCxxxx caused an invalid page fault in module ~VCxxxx.TMP at 0137: 00415900.
	
	NOTE: "xxxx" represents a random number.
	
	CAUSE
	=====
	
	The total length of the installation directory exceeded 248 characters.
	
	STATUS
	======
	
	This bug was corrected in Microsoft Visual C++, version 6.0.
	
	MORE INFORMATION
	================
	
	The error occurs in a temporary file. Setup.exe copies the [CDROM
	Drive]\Msdev\Setup.bin file onto your destination drive as a temporary file
	after which it is erased.
	
	Additional query words: crash
	
	======================================================================
	Keywords          : kbsetup kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
