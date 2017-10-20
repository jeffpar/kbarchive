---
layout: page
title: "Q127845: PRB: Property is Ignored Under Program Control"
permalink: /kb/127/Q127845/
---

## Q127845: PRB: Property is Ignored Under Program Control

{% raw %}

	Article: Q127845
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Assigning a value to a property in a class definition has no effect at run time.
	The value of the property is ignored.
	
	CAUSE
	=====
	
	The property, or any property that affects it, is misspelled or not assigned to
	the correct member object. A new property is therefore declared, and no error
	message is generated.
	
	RESOLUTION
	==========
	
	You can use the DISPLAY OBJECTS command or the Amembers() function to verify
	that all of the attributes of an object hold the correct value.
	
	For more information about DISPLAY OBJECTS or Amembers(), refer to Visual FoxPro
	Help.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	When running the following sample program, the ToolTipText property does not
	display any text. The reason for this behavior is that the ShowTips property,
	which specifies whether or not a tool tip can be displayed for a control, is set
	as a property of a control instead of a property of the form.
	
	     frmTest = CREATEOBJECT("FormToolTip")
	     frmTest.Show
	     READ EVENTS
	
	     DEFINE CLASS FormToolTip AS FORM
	         * Uncomment the line below for the ToolTip to display.
	         * ShowTips = .T.
	           Caption="No tool Tip for the Text Box"
	      ADD OBJECT text1 AS textbox
	         * Incorrect setting for the ShowTips property
	          text1.ShowTips = .T.
	          text1.ToolTipText = "This is the Text"
	          text1.left=(thisform.width-this.text1.width)/2 && center text box
	      PROCEDURE Destroy
	          CLEAR EVENTS
	      ENDPROC
	     ENDDEFINE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
