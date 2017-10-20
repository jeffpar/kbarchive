---
layout: page
title: "Q190261: BUG: Returning 1 in Check Box Valid Event Skips Next Object"
permalink: /kb/190/Q190261/
---

## Q190261: BUG: Returning 1 in Check Box Valid Event Skips Next Object

{% raw %}

	Article: Q190261
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pressing the ENTER key while on a check box that returns one (1) from its Valid
	event, causes Visual FoxPro to skip the next object in the tab order. Pressing
	the Spacebar while on the same check box moves the cursor to the proper object
	in the tab order.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following code and run the program:
	
	        o=CREATEOBJECT('Ztest')
	        o.SHOW()
	
	        DEFINE CLASS Ztest AS FORM
	           WINDOWTYPE=1
	           ADD OBJECT chk1 AS CHECKBOX WITH TOP=5,LEFT=5,CAPTION='PPP'
	   
	           FUNCTION chk1.VALID()
	              RETURN 1
	           ENDFUNC
	        ADD OBJECT txt1 AS TEXTBOX WITH ;
	           TOP=35,LEFT=5,WIDTH=50,cVar='thisform.t1'
	        ADD OBJECT txt2 AS TEXTBOX WITH ;
	           TOP=65,LEFT=5,WIDTH=50,cVar='thisform.t1'
	        ENDDEFINE
	
	2. When the form appears, press the Spacebar and note that the focus moves to
	  the first text box. Press the TAB key twice to move back to the check box.
	
	3. Once you are back on the check box, press the ENTER key and note that the
	  focus goes directly to the second text box. The first text box never gets
	  focus.
	
	Additional query words: kbVFp300bbug kbVFp500abug kbVFp600bug kbOOP kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
