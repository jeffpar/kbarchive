---
layout: page
title: "Q141478: FIX: Floating Toolbars Disappear in Developer Studio"
permalink: /kb/141/Q141478/
---

## Q141478: FIX: Floating Toolbars Disappear in Developer Studio

{% raw %}

	Article: Q141478
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbui kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An undocked or floating toolbar may disappear when you minimize and restore
	Developer Studio.
	
	RESOLUTION
	==========
	
	On the View menu, click Toolbars. In the Toolbars dialog box, clear the
	selections and then reselect the toolbar you want to restore it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	This problem has primarily been reported on Risc platforms. One way to
	demonstrate the problem on an Intel platform is to follow these steps:
	
	1. Using a default AppWizard-generated application, set a breakpoint in the
	  OnAppAbout() message handler.
	
	2. Start debugging by pressing F5.
	
	3. Make sure you have the Debug toolbar visible and floating.
	
	4. Minimize Visual C++.
	
	5. On your application's Help menu, click About. When Visual C++ is restored the
	  Debug toolbar will not be visible.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbui kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
