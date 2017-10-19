---
layout: page
title: "Q190477: BUG: Run-time Error '326' with LoadResData"
permalink: /kb/190/Q190477/
---

## Q190477: BUG: Run-time Error '326' with LoadResData

	Article: Q190477
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When loading an Icon from a resource file with LoadResData, you receive the
	following run-time error:
	
	  Run-Time error '326': Resource with identifier '101' not found
	
	The LoadResData documentation states that it is possible to return an icon from a
	resource file in the form of a byte array. Doing so will result in the above
	error.
	
	RESOLUTION
	==========
	
	Use the LoadResPicture function to load an icon resource. For example,
	
	     Private Sub Form_Load()
	        Dim vMyIcon As Variant
	
	        vMyIcon = LoadResPicture(101,vbResIcon)
	
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: These steps assume the Resource Editor is installed and available in Visual
	Basic from the Tools menu.
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Paste the following code into the Form1's code window:
	
	        Private Sub Form_Load()
	           Dim vMyIcon As Variant
	
	           vMyIcon = LoadResData(101, 3)
	
	        End Sub
	
	3. From the Tools menu, select the Resource Editor.
	
	4. Select the Add Icon option.
	
	5. Browse and select an icon to use. After selecting the icon, the Resource
	  Editor should show an Icon resource with the id of '101'.
	
	6. Select the Save option on the Resource Editor. Save the Resource File as
	  "TEST.RES". Once this is done, the Project Browser will show an additional
	  folder called "Related Documents." This folder will contain the newly-created
	  Resource File.
	
	7. Press the F5 key to run the application. Note that the following error will
	  occur:
	
	  Run-time error "326"; Resource with identifier '101' not found
	
	REFERENCES
	==========
	
	Refer to the Visual Basic Online documentation for LoadResPicture on how to
	properly use this function to retrieve images from a resource file.
	
	Additional query words: kbdss kbDSupport kbVBp kbResourceEd kbVBp500bug kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
