---
layout: page
title: "Q171826: FIX: Tabbing Problems with Controls Contained with Controls"
permalink: /kb/171/Q171826/
---

## Q171826: FIX: Tabbing Problems with Controls Contained with Controls

{% raw %}

	Article: Q171826
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a UserControl contains three textboxes and is placed upon a form with two
	more textboxes, the default behavior at run-time is to Tab between each textbox
	with the TabIndexes.
	
	If you placed this same UserControl upon a UserDocument that has two more
	textboxes, pressing Tab at run-time allows the user to switch between the
	TextBoxes directly upon the UserDocument. Continuing to press the Tab key
	eventually gives the UserControl focus and where the Tab key fails.
	
	If you tab into the UserControl and the first Textbox within the UserControl gets
	focus, when you press the Tab key, instead of going to the next Textbox within
	the UserControl you go the next Textbox on the UserDocument.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic and create an ActiveX Control project.
	
	2. Place two textbox controls on the Usercontrol you are creating.
	
	3. Close the designer window in Visual Basic.
	
	4. Add an ActiveX Document Project in Visual Basic.
	
	5. Place an instance of the UserControl you created on the ActiveX Document.
	
	6. Run the project in Visual Basic. This will create a .vbd file in the Visual
	  Basic 5.0 root directory.
	
	7. Start IE and load the ActiveX Document(.vbd) you just created.
	
	8. Now, try tabbing to the next textbox on the UserControl. Note that you cannot
	  tab between the controls in the UserDocument
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
