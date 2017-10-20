---
layout: page
title: "Q259726: FIX: Debugger Encounters Invisible Breakpoints in Assembly Code"
permalink: /kb/259/Q259726/
---

## Q259726: FIX: Debugger Encounters Invisible Breakpoints in Assembly Code

{% raw %}

	Article: Q259726
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC600 kbVS600sp4fix kbVS600sp5fix
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- The Integrated Debugger 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you debug your code locally, you may encounter invisible breakpoints in the
	Visual C++ Debugger when you single step or step over certain assembly
	instructions.
	
	On a Microsoft Windows 2000-based computer, remote debugging may stop responding
	(hang).
	
	CAUSE
	=====
	
	This occurs because of a bug in the debugger.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	The behavior described in the "Symptoms" section can appear in the following
	assembly instructions.
	
	When stepping into:
	
	INSB,INSW,OUTSB,OUTSW,PUSHFD,POPFD,CLI,STI,IRET.
	
	-or-
	
	When stepping over:
	
	INSB,INSW,OUTSB,OUTSW,MOVSB,MOVSW,CMPSB,CMPSW,STOSB,STOSW,LODSB,LODSW,SCASB
	,SCASW.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbDebug kbide kbVC600 kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch kbIntegratedDebugger
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
