---
layout: page
title: "Q168007: FIX: Remote Debugging Very Slow in Visual C++ Version 5.0"
permalink: /kb/168/Q168007/
---

## Q168007: FIX: Remote Debugging Very Slow in Visual C++ Version 5.0

{% raw %}

	Article: Q168007
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbtool kbDebug kbide kbVC500bug kbVS97sp1fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Remote debugging in Visual C++ version 5.0 is very slow in establishing
	connection and doing Step Into (F11) and Step Over (F10).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a default MFC Appwizard project and build it for debug mode. Consult the
	online help on "Setting Up the Remote Debug Monitor" and the following article
	in the Microsoft Knowledge Bas to setup remote debugging:
	
	  Q131058 Tips for Remote Debugging with Visual C++ 2.x and 4.0
	
	Start the debugger by hitting the F5 (Debug Go) key or the F11 ( Step Into) key.
	Note that it may take about 25 to 30 seconds for the debugger to start.
	Subsequently, trying to Step Into or Step Over, or moving to the next break
	point may take up to 5 to 8 seconds.
	
	======================================================================
	Keywords          : kbtool kbDebug kbide kbVC500bug kbVS97sp1fix 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
