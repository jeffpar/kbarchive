---
layout: page
title: "Q136688: FIX: Class Browser: Multiple Control Boxes with Maximized .VCX"
permalink: /kb/136/Q136688/
---

## Q136688: FIX: Class Browser: Multiple Control Boxes with Maximized .VCX

	Article: Q136688
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, Professional Edition, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Maximizing the Visual Class Designer and then starting it again from the Class
	Browser produces multiple Control boxes and Restore buttons.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	The Visual Class Designer is invoked from the Class Browser when you double-
	click a class name. If you maximize the Class Designer window, switch back to
	the Class Browser, and open the Visual Class Designer with another class, the
	second window is maximized as well. However, the Microsoft Visual FoxPro window
	will have two Visual Class Designer Control boxes and two Restore buttons.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open a .vcx file and double-click a class.
	
	2. Maximize the Class Designer window, and switch back to the Class Browser.
	
	3. Double-click the same class, or another one. Multiple control boxes and
	  Restore buttons (and Close buttons under Windows 95) appear.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : :3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
