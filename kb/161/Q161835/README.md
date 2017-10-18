---
layout: page
title: "Q161835: BUG: Visible Property Malfunctions with ComboBox in Container"
permalink: kb/161/Q161835/
---

## Q161835: BUG: Visible Property Malfunctions with ComboBox in Container

	Article: Q161835
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300BUG kbvfp500bug kbvfp600bug
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to set the Visible property of a container from the Valid event of a
	combo box inside the container causes unusual behavior. If you choose something
	from the combo box and move off the object, the container disappears but the
	combo box remains. The combo box is now inactive. However, if the combo box
	merely gains focus with no selection taking place, the container and its
	contents become invisible. You can change the Visible property of the container
	from a command button located on the form without difficulty.
	
	RESOLUTION
	==========
	
	Place the following command in the LostFocus event of the combo box:
	
	     This.Parent.Visible=.F.
	
	Do not attempt to control the Visible property of the container from the Valid
	event of the combo box.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Place a container on the form. Set the Visible property of the Container to
	  false (.F.).
	
	3. In the container, place a command button and a combo box.
	
	4. Change the following combo box properties to the following values:
	
	        RowSource=One,Two,Three
	        RowsourceType=1-Value
	        Valid Method Code:
	           This.Parent.Visible=.f.
	
	5. In the command button change the following properties:
	
	        Caption=One
	        Click Event Code:
	           This.Parent.Visible=.f.
	
	6. Place a command button on the form. Do not place this one in the container.
	  Change the following properties on this object to the following:
	
	        Caption=Two
	        Click Event code:
	           Thisform.container1.visible=.T.
	
	7. Run the form and click on the command button. The container appears.
	
	First, click the command button One and notice the container disappears. Click
	command button Two. Next, if you choose something from the combo box and move
	off the combo box object, the container disappears but the combo box remains;
	however, it is inactive. Press command button Two to show the container again.
	Finally, click on the combo box, make no selection, and press the Tab key. All
	objects in the container disappear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300BUG kbvfp500bug kbvfp600bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
