---
layout: page
title: "Q157191: DOCERR: GotFocus Event Documented Incorrectly in VFP Help"
permalink: /kb/157/Q157191/
---

## Q157191: DOCERR: GotFocus Event Documented Incorrectly in VFP Help

{% raw %}

	Article: Q157191
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The third paragraph in the "Remarks" section of the Visual FoxPro Help topic for
	GotFocus method states the following:
	
	  A form receives the focus only when the form has no controls or when all its
	  controls are disabled or invisible.
	
	This is incorrect. The GotFocus Event of the form occurs even when the form has
	no controls or when all its controls are disabled or invisible.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500
	Version           : WINDOWS:3.0,3.0b,5.0
	
	=============================================================================
	

{% endraw %}
