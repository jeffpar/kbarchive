---
layout: page
title: "Q176895: BUG: FOR EACH Fails to Remove All Objects"
permalink: kb/176/Q176895/
---

## Q176895: BUG: FOR EACH Fails to Remove All Objects

	Article: Q176895
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use FOR EACH in Visual FoxPro version 5.x as a looping mechanism to
	remove all objects in a container, only half of the objects in the container are
	removed.
	
	RESOLUTION
	==========
	
	Wrap the FOR EACH command with the DO WHILE command. The following sample code
	is the workaround for the problem illustrated in the Steps to Reproduce Behavior
	section.
	
	Replace the code in the Click method with the following code:
	
	        DO WHILE Thisform.CommandGroup1.ButtonCount <> 0
	        FOR EACH oControl IN Thisform.CommandGroup1.Buttons
	        Thisform.CommandGroup1.RemoveObject(oControl.Name)
	        ENDFOR
	        ENDDO
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add a CommandGroup to the form and set the following properties:
	
	  Height = 180 Width = 96
	  ButtonCount = 6
	
	3. Add a second Commandbutton to the form and set the following property:
	
	  Caption = "Click Me"
	
	4. In the Click method of the Commandbutton, type the following code:
	
	        FOR EACH oControl IN Thisform.CommandGroup1.Buttons
	        Thisform.CommandGroup1.RemoveObject(oControl.Name)
	        ENDFOR
	
	5. Run the form, and click the "Click Me" button.
	
	NOTE: Only three buttons in the CommandGroup are deleted and the other three
	still show up.
	
	Additional query words: container remove kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
