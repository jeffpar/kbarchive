---
layout: page
title: "Q138375: PRB: Errors Caused by Setting _GENMENU to an Invalid Value"
permalink: /kb/138/Q138375/
---

## Q138375: PRB: Errors Caused by Setting _GENMENU to an Invalid Value

{% raw %}

	Article: Q138375
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to generate a menu, under certain circumstances, the Generate
	option of the Menu menu is disabled, or one of the following errors may occur:
	
	  Function argument value, type, or count is invalid.
	
	  -or-
	
	  Function argument value, type, or count is invalid. Line Number: 2202
	
	CAUSE
	=====
	
	One of these problems will occur if the system memory variable _GENMENU is
	initialized to an invalid value or the Genmenu.prg file is corrupt.
	
	
	RESOLUTION
	==========
	
	You may be able to fix this problem by setting _GENMENU to a valid value using
	the following syntax in the Command window:
	
	  _GENMENU = SYS(2004) + "GENMENU.PRG"
	
	Or you may be able to fix it by adding this line of code as the first line of
	Vfpstart.prg, which is located in the main Visual FoxPro directory and is the
	program that starts by default when you launch Visual FoxPro.
	
	If the Genmenu.prg file is corrupt, you may need to replace it by reinstalling
	Visual FoxPro or by expanding it from the installation media.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Ths following steps cause the Generate option to be disabled.
	
	
	1. In the Command window, enter the following line of code:
	
	      _GENMENU = ""
	
	2. Modify a menu.
	
	3. Click the Menu menu.
	
	4. Note that the Generate option is disabled.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
