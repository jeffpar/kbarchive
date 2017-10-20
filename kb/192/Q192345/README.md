---
layout: page
title: "Q192345: FIX: DISPLAY/LIST DLLS NOCONSOLE Echo to Screen"
permalink: /kb/192/Q192345/
---

## Q192345: FIX: DISPLAY/LIST DLLS NOCONSOLE Echo to Screen

{% raw %}

	Article: Q192345
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the LIST DLLS or DISPLAY DLLS commands with the NOCONSOLE clause, the
	.dlls still echo to the FoxPro screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Using the NOCONSOLE clause in supported FoxPro commands, prevents the
	information from displaying to the FoxPro screen. Unfortunately, the LIST DLLS
	and DISPLAY DLLS commands echo the information back to the FoxPro screen.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, type the following commands:
	
	        DECLARE INTEGER GetActiveWindow IN WIN32API  && Ensures that a dll
	                                                    &&  displays.
	        LIST STATUS TO FILE mystats.txt NOCONSOLE
	        LIST DLLS TO FILE mydlls2.txt NOCONSOLE
	
	Note that the FoxPro status does not appear on the FoxPro screen, however, any
	dlls in use, display on the screen.
	
	Additional query words: kbVFp500abug kbVFp300bbug kbVFp600fix kbXBase kbVFp500bug kbVFp300bug
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
