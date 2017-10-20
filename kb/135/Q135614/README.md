---
layout: page
title: "Q135614: FIX: GET Field Default Sizes on the Desktop Are Too Small"
permalink: /kb/135/Q135614/
---

## Q135614: FIX: GET Field Default Sizes on the Desktop Are Too Small

{% raw %}

	Article: Q135614
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When issuing an @...GET with a default value to the Visual FoxPro Desktop, the
	displayed GET field is too small for the displayed value.
	
	WORKAROUND
	==========
	
	- Add a SIZE cause to @...GET command to increase the size of the displayed GET
	  field. See Example Two in the "More Information" section.
	
	-or-
	
	- Issue the @...GET in a user-defined window. See Example Three in the "More
	  Information" section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce and Work Around Problem
	------------------------------------------
	
	Example One:
	
	From the Command window, issue this command:
	
	     @2,2 GET MyField1 DEFAULT "Too Small"
	
	The GET field will not display the entire default value.
	
	Example Two: Re-issue the @...GET command as follows:
	
	     @2,2 GET MyField2 DEFAULT "Too Small" SIZE 1,15
	
	The entire default GET field will be displayed.
	
	Example Three:
	
	Define and activate a window and then issue the @...GET.
	
	     DEFINE WINDOW MyWindow AT 2,2 SIZE 30,30
	     ACTIVATE WINDOW MyWindow
	     @2,2 GET MyField3 DEFAULT "Is this Too Small"
	
	The entire default GET field will be displayed.
	
	Additional query words: 3.00 VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
