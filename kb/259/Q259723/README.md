---
layout: page
title: "Q259723: FIX: Debugger Fails on Fast Dual Processors"
permalink: /kb/259/Q259723/
---

## Q259723: FIX: Debugger Fails on Fast Dual Processors

{% raw %}

	Article: Q259723
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbide kbVS600sp3bug kbVS600sp4fix kbVS600sp5fix
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual C++ Debugger may stop responding during a debug session on a fast
	dual processor computer (equal to or faster than 500 MHz CPU Clock speed).
	
	The Visual C++ Debugger might fail when you start the debugger or when the
	application is run with the debugger.
	
	NOTE: The failure may occur in the Shcv.dll file at memory location 0x525f73.
	
	CAUSE
	=====
	
	This problem is caused by a bug in the Visual C++ 6.0 debugger.
	
	RESOLUTION
	==========
	
	Install the latest service pack for Visual C++ 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in Visual Studio
	6.0 Service Pack 4.
	
	For additional informationabout Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q258648 INFO: Visual Studio 6.0 Service Pack 4, What, Where, Why
	
	  Q258649 HOWTO: Tell That Visual Studio 6.0 Service Pack 4 Is Installed
	
	You can download Visual Studio Service Pack 4 from the following Microsoft Web
	site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbide kbVS600sp3bug kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch kbIntegratedDebugger
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
