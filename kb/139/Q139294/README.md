---
layout: page
title: "Q139294: FIX: Replace &quot;Beginning of Line&quot; Skips Blank Lines"
permalink: /kb/139/Q139294/
---

## Q139294: FIX: Replace &quot;Beginning of Line&quot; Skips Blank Lines

{% raw %}

	Article: Q139294
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbide kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSTools
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Find What field in the Replace dialog box is set to "^" (the Beginning
	of Line symbol), The characters in the Replace with field are not inserted at
	the beginning of blank lines.
	
	RESOLUTION
	==========
	
	You can record a macro to help work around this problem. Record a macro by on
	the Tools menu, clicking Record Keystrokes. Move to the beginning of the line by
	pressing the HOME key. Then enter the characters you want, and press the DOWN
	ARROW key to move to the next line. Then press the HOME key again, and stop the
	recording. To run the macro, position the insertion point on the starting line.
	Then press and hold down CRTL+SHIFT+P until all the insertions are made.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	For this example, assume that the following text is in your open file:
	
	  a
	
	  b
	  <end of file>
	
	1. On the edit menu, click Replace, and make the following entries in the
	  Replace dialog box:
	
	  " Find what: ^
	  Replace with: // " (without the quotation marks)
	
	2. Click Replace All. Your results will look like this:
	
	  //a
	
	  //b
	  <end of file>
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbide kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
