---
layout: page
title: "Q161357: FIX: MediaView 1.41 Control Causes Unusual Behavior with Form"
permalink: /kb/161/Q161357/
---

## Q161357: FIX: MediaView 1.41 Control Causes Unusual Behavior with Form

	Article: Q161357
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After placing the Multimedia 1.41 control on a form, the control cannot be
	selected, moved, or deleted. The control does not respond to a right- click.
	Additionally, after adding other objects, such as CommandButtons, or TextBoxes
	to the form, those objects may not be able to be removed by pressing the Delete
	key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Form called Ztest.
	
	2. Add an OLE Container Control and click the Insert Control button.
	
	3. Choose the Mediaview 1.41 control, and click the OK button.
	
	4. Click on the Form so that the Mediaview control loses focus.
	
	5. Attempt to click or right-click on the Mediaview control. The control cannot
	  be selected.
	
	6. Choose OLEControl1 in the Properties sheet. The control appears selected.
	  Press the Delete key. The control is not deleted.
	
	7. Add a CommandButton to the Form and then click on the Mediaview control.
	  Click on the CommandButton and press the Delete key. This may or may not
	  delete the object.
	
	8. Click on the CommandButton to select it and right-click it. Choose Cut from
	  the shortcut menu to remove the object.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
