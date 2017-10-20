---
layout: page
title: "Q189725: BUG: GETFONT Causes Error on Empty Fontname"
permalink: /kb/189/Q189725/
---

## Q189725: BUG: GETFONT Causes Error on Empty Fontname

{% raw %}

	Article: Q189725
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs when the GETFONT function is passed an empty
	fontname. This is Visual FoxPro error number 11.
	
	  Function argument value, type or count is invalid.
	
	RESOLUTION
	==========
	
	The GETFONT function requires at least a space for the fontname:
	
	     GETFONT(" ")
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The syntax for the GETFONT function is GETFONT(cFontName [,nFontSize
	[,cFontStyle]]). The cFontName should at least be a space.
	
	Steps to Reproduce Behavior
	---------------------------
	
	In the Command window, issue the following command:
	
	        GETFONT("") && Without a space between the quotes an Error 11 occurs.
	
	Additional query words: font name kbVFp600bug kbXBase kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
