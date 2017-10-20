---
layout: page
title: "Q116301: PRB: Visual WB Matches Enclosure Symbols in Comments"
permalink: /kb/116/Q116301/
---

## Q116301: PRB: Visual WB Matches Enclosure Symbols in Comments

{% raw %}

	Article: Q116301
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbide kbVC
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0, used with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 2.0, 2.1, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Visual Workbench or Developer Studio Editor, CTRL+] or the Find
	Matching Brace command under the Edit menu, finds a matching brace when the
	caret is located to the left of an enclosure symbol: either a parenthesis "(",
	brace "{", or bracket "[".
	
	The editor is unable to distinguish whether these enclosure symbols are located
	within valid code or within a comment. As a result, using CTRL+] may find a
	matching enclosure symbol within a comment, as shown in the source code in the
	"MORE INFORMATION" section, below.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	        void main(void)
	        {
	         /* { */ 
	        }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC 
	Technology        : kbVSsearch kbAudDeveloper kbVWB
	Version           : :1.0,1.5,2.0,2.1,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
