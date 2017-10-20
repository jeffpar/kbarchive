---
layout: page
title: "Q190262: PRB: ISMOUSE Function Always Returns .T. in Windows 95 &amp; 98"
permalink: /kb/190/Q190262/
---

## Q190262: PRB: ISMOUSE Function Always Returns .T. in Windows 95 &amp; 98

{% raw %}

	Article: Q190262
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Visual FoxPro versions 3.x and 5.x in Windows 95 or Windows 98, the
	ISMOUSE() function always returns .T. regardless of the presence of the mouse.
	However, the ISMOUSE() function works as expected in Windows NT.
	
	CAUSE
	=====
	
	Visual FoxPro is using the GetSystemMetrics API function to check
	SM_MOUSEPRESENT to determine if a mouse is present or not. If GetSystemMetrics
	returns zero (false), you would expect ISMOUSE() to return .F.. However, in
	Windows 95 or Windows 98, the GetSystemMetrics API always returns .T. regardless
	of the presence of the mouse.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make sure that a mouse is connected to the computer.
	
	2. In Visual FoxPro, create a .prg file and place the following code in the .prg
	  file:
	
	        #DEFINE SM_MOUSEPRESENT  19
	        DECLARE Integer GetSystemMetrics IN Win32api Integer
	        ?GetSystemMetrics(SM_MOUSEPRESENT)
	        ?ISMOUSE()
	
	3. Save and run the program.
	
	NOTE: The GetSystemMetrics() and ISMOUSE() are returning .T.
	
	1. Shut down the computer and disconnect the mouse from the computer.
	
	2. Run the same .prg in Visual FoxPro again.
	
	NOTE: The GetSystemMetrics() and ISMOUSE() still return .T. even if the mouse is
	disconnected from the computer.
	
	If you repeat these steps in Windows NT, you receive a .T. for the first scenario
	and a .F. for the second scenario.
	
	Additional query words: kbOOP kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
