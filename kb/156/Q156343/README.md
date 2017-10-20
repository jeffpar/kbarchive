---
layout: page
title: "Q156343: PRB: Unknown Member Error Using Thisformset.ActiveControl"
permalink: /kb/156/Q156343/
---

## Q156343: PRB: Unknown Member Error Using Thisformset.ActiveControl

{% raw %}

	Article: Q156343
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Referencing an active control with Thisformset.ActiveControl.<property or
	method> generates the following error message in Visual FoxPro version 5.0:
	
	  Unknown member ACTIVECONTROL
	
	Referencing an active control in this manner does not generate an error in Visual
	FoxPro 3.0 and 3.0b.
	
	RESOLUTION
	==========
	
	Reference the active control as follows:
	
	     Thisformset.ActiveForm.ActiveControl.<property or method>
	
	This works properly in all versions of Visual FoxPro.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This is undocumented in Visual FoxPro 3.0 and is not intended to work, as
	Formset objects do not have an ActiveControl property in any version of Visual
	FoxPro.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	     * Start of code example
	     *
	     PUBLIC oFormset
	     oFormset = CREATEOBJECT('formset')
	     oFormset.ADDOBJECT('form1','frm')
	     oFormset.form1.VISIBLE=.T.
	     oFormset.SHOW()
	
	     DEFINE CLASS frm AS FORM
	        CAPTION = "Click on Form to Demonstrate Error"
	        ADD OBJECT text1 AS TEXTBOX WITH ;
	           TOP = 100, ;
	           LEFT = 120
	
	        PROCEDURE CLICK
	           * This will not generate an error in VFP 3.0 or 3.0b
	           WAIT WINDOW THISFORMSET.ACTIVECONTROL.NAME TIMEOUT 3
	        ENDPROC
	
	     ENDDEFINE
	     *
	     * End of code example
	
	2. Click anywhere on the form (outside of the text box).
	
	3. In Visual FoxPro 5.0 or 6.0, the error "Unknown member ACTIVECONTROL"
	  appears. In Visual FoxPro 3.0 or 3.0b, "TEXT1" is displayed in the WAIT
	  WINDOW.
	
	The preceding code works without error in any version of Visual FoxPro if
	modified as follows:
	
	        PROCEDURE CLICK
	        * This will not generate an error in VFP 3.0, 3.0b, or 5.0
	        WAIT WINDOW THISFORMSET.ACTIVEFORM.ACTIVECONTROL.NAME TIMEOUT 3
	       ENDPROC
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	

{% endraw %}
