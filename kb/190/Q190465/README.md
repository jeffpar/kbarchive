---
layout: page
title: "Q190465: PRB: &quot;Edit Redo&quot; Not Available for Text Box"
permalink: /kb/190/Q190465/
---

## Q190465: PRB: &quot;Edit Redo&quot; Not Available for Text Box

{% raw %}

	Article: Q190465
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Edit Undo and Redo options function differently for a text box and an edit
	box. A text box operation does not have the Redo option but the Undo option can
	be used to perform the same function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Redo Edit option is not available for a text box but is available for an
	edit box. A text box operation can be redone by selecting Undo from the Edit
	menu.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code:
	
	        frmEditRedo=CREATEOBJECT("form")
	        frmEditRedo.CAPTION = "Edit Undo/Redo"
	        frmEditRedo.ADDOBJECT("txt","textbox")
	        frmEditRedo.ADDOBJECT("ed","editbox")
	        frmEditRedo.txt.VISIBLE=1
	        frmEditRedo.ed.VISIBLE = 1
	        frmEditRedo.ed.LEFT = 150
	        frmEditRedo.SHOW(1)
	
	2. Type a letter in the text box and select the Edit menu. Undo is available on
	  the Edit menu and selecting Undo will undo the last entry. Select the Edit
	  menu item again and the Undo option is available but Redo is not available.
	
	3. Type a letter in the edit box and then select the Edit menu. Undo is
	  available, and selecting Undo will undo the last entry. Select the Edit menu
	  item again and the Redo option is available.
	
	Additional query words: kbVFp300b kbVFp300 kbVFp500 kbVFp500a kbVFp600 kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
