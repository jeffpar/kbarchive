---
layout: page
title: "Q135626: HOWTO: How to Select Field on Entry on a Form in Visual FoxPro"
permalink: /kb/135/Q135626/
---

## Q135626: HOWTO: How to Select Field on Entry on a Form in Visual FoxPro

{% raw %}

	Article: Q135626
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Screen Designer in FoxPro version 2.x products has a check box in the Field
	dialog box under Options labeled Select Field on Entry. The check box is
	selected by default, and the format picture clause "@K" is generated for the
	field so that when the form is run and the field entered, its contents are
	selected. This option is no longer set by default in Visual FoxPro.
	
	MORE INFORMATION
	================
	
	To achieve the same select-on-entry behavior in Visual FoxPro, use any one of
	these techniques:
	
	- Set the Format property of each text box to K, and set SelectedBackColor to
	  0,0,128.
	
	-or-
	
	- Add the following lines of code to the Init event procedure of the form:
	
	     THISFORM.SetAll("Format","K","Textbox")
	     THISFORM.SetAll("SelectedBackColor",RGB(0,0,128),"Textbox")
	
	-or-
	
	- In the GotFocus event procedure of a text object, enter this code:
	
	     NODEFAULT
	     textbox::GotFocus
	     this.sellength=LEN(<fldname>)
	
	-or-
	
	- In the GotFocus method of the object, place the following code:
	
	        IF !EMPTY(this.value)
	         KEYBOARD "{end}"
	         KEYBOARD "{shift+home}"
	        ENDIF
	
	Additional query words: VFoxWin selected text seltext selstart
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
