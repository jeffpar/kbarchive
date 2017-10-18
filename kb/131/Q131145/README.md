---
layout: page
title: "Q131145: How to Add Properties/Methods to a Button in Button Group"
permalink: kb/131/Q131145/
---

## Q131145: How to Add Properties/Methods to a Button in Button Group

	Article: Q131145
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to add properties or methods to buttons in a
	command-button group
	
	MORE INFORMATION
	================
	
	Neither properties nor methods can be added directly to buttons in a
	command-button group. This is by design. Properties or methods added to a button
	in a command-button group appear as part of the command-button group object, not
	part of the button itself.
	
	To add properties or methods to a button in a command-button group, you must:
	
	1. Subclass the command button in the Class Designer.
	
	2. Add the property or method there.
	
	3. Create a container class.
	
	4. Add the new button class to the new container.
	
	Steps to Add a Property or Method to a Command Button
	-----------------------------------------------------
	
	1. From the file menu, choose New. Select Class as the file type, and click New
	  File.
	
	2. Type in a class name for this new class, select CommandButton from the Based
	  on menu, and enter a .VCX file name to store the class in. You can use one
	  that already exists or enter a new .VCX file name for Visual FoxPro to
	  create.
	
	3. When the Visual Class Designer window appears, choose New Property from the
	  Class menu. Enter a name for this new property in the name text box of the
	  New Property dialog box. Click the OK button, and scroll through the property
	  sheet for this class. Notice that your new property appears at the bottom of
	  the list. This property defaults to value of false (.F.).
	
	4. Close and save the changes to this new class.
	
	5. Create another new class (see step 1) based on a container.
	
	6. Click the View Classes button of the Form Controls toolbar. Select Add, and
	  choose the .VCX file you just created. From this file, select the class you
	  created if prompted.
	
	7. Click the commandbutton button on this new toolbar. Then click the container
	  window in the Visual Class Designer. This adds a command button to the
	  container that has the property you added by subclassing the commandbutton
	  class in step 2 above.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
