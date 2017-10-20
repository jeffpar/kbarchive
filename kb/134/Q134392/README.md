---
layout: page
title: "Q134392: FIX: Shape Control's Mouseup Incorrectly Fired by Form Click"
permalink: /kb/134/Q134392/
---

## Q134392: FIX: Shape Control's Mouseup Incorrectly Fired by Form Click

{% raw %}

	Article: Q134392
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After dragging and dropping a shape control on a form, the shape's mouseup event
	fires when you click anywhere in the form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Run the following code:
	
	  Run the following code:
	
	  PUBLIC f1
	  f1 = CREATEOBJ('obj')
	  f1.SHOW
	
	  DEFINE CLASS s1 AS shape
	
	     PROCEDURE mousedown
	        LPARAMETERS nButton, nShift, nXCoord, nYCoord
	        this.drag(1)
	     ENDPROC
	
	     PROCEDURE mouseup
	        LPARAMETERS nButton, nShift, nXCoord, nYCoord
	        WAIT WINDOW 'Shape MouseUp'
	     ENDPROC
	
	  ENDDEFINE
	
	  DEFINE CLASS obj AS form
	     ADD OBJECT obj AS s1
	
	     PROCEDURE mouseup
	        LPARAMETERS nButton, nShift, nXCoord, nYCoord
	        WAIT WINDOW 'Form MouseUp'
	     ENDPROC
	  ENDDEFINE
	
	  * Drag the shape to a new location and drop it.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
