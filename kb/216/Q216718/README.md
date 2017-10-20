---
layout: page
title: "Q216718: FIX: C1001 in 'E:&#92;8168&#92;vc98&#92;p2&#92;src&#92;P2&#92;main.c', With /Zi and Yc"
permalink: /kb/216/Q216718/
---

## Q216718: FIX: C1001 in 'E:&#92;8168&#92;vc98&#92;p2&#92;src&#92;P2&#92;main.c', With /Zi and Yc

{% raw %}

	Article: Q216718
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCompiler kbCPPonly kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling with /ZI and /Yc (without a file name), you may receive the
	following error:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'E:\8168\vc98\p2\src\P2\main.c', line 494)
	
	RESOLUTION
	==========
	
	Please use one of the following workarounds:
	
	1. Compile with /Zi instead of /ZI.
	
	2. Supply a file name with /Yc; i.e. /Yc"filename".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3. For more information about Visual Studio service packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCompiler kbCPPonly kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
