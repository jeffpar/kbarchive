---
layout: page
title: "Q181872: HOWTO: Display Ellipses Button for a UserControl Property"
permalink: /kb/181/Q181872/
---

## Q181872: HOWTO: Display Ellipses Button for a UserControl Property

	Article: Q181872
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB kbhowto
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to create an ellipses button for a property of a
	UserControl.
	
	MORE INFORMATION
	================
	
	To show the ellipses button for a property, you can set the appropriate options
	in the Procedure Attributes dialog.
	
	The Procedure Attributes dialog box allows you to set a variety of attributes by
	clicking the Advanced button. The "Use This Page in Property Browser" procedure
	attribute specifies which property page is associated with a specific property.
	It is this attribute that tells Visual Basic to display the ellipses button in
	the property window. A property page can be one of the standard property pages
	like Font or Color or a property page you create.
	
	To Enable the Ellipses Button of a Property
	-------------------------------------------
	
	1. Open the UserControl project in Visual Basic.
	
	2. From the Tools Menu, click Procedure Attributes. The Procedure Attributes
	  dialog box appears.
	
	3. In the Procedure Attributes dialog box, click Advanced >>. The
	  Procedure Attributes dialog box expands to display additional attributes.
	
	4. In the Procedure ID listbox, select the name of the property.
	
	5. In the Use This Page in Property Browser list box, select the property page
	  to displayed for the property. Click Apply to apply this setting, then click
	  OK to close the dialog box.
	
	  The ellipses button should now appear in the container property page. If the
	  form hosting the UserControl is still open in your project, it may be
	  necessary to right-click on the form (in design mode) and select "Update
	  UserControl" to refresh the property window.
	
	Additional query words: ocx user control
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB kbhowto 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
