---
layout: page
title: "Q171504: FIX: Problems Setting PropertyPage Caption Property"
permalink: /kb/171/Q171504/
---

## Q171504: FIX: Problems Setting PropertyPage Caption Property

	Article: Q171504
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Caption property of a Property Page in the Property Page's
	Initialize or Click event causes an erroneous window to be displayed on the
	Property Page when the Builder (...) button is pressed for the "Custom"
	properties of an ActiveX control, or when the click event is fired.
	Additionally, the PropertyPage Caption property is not changed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	NOTE: While the problem of the additional window has been resolved, setting the
	caption property will work only in the Initialize event of the Property Page.
	Attempts to set the Caption property in the Click event of the Property Page
	will not be successful.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX Control project.
	
	2. Place the following statement in the General Declarations of the
	  UserControl:
	
	  Public aProperty As String
	
	3. From the Add-Ins menu, select Property Page Wizard.
	
	  NOTE: If this selection is not available, select Add-In Manager on the Add-Ins
	  menu and check "VB Property Page Wizard."
	
	4. Click "Next" in the first Property Page Wizard Screen.
	
	5. In the second Property Page Wizard screen, click Add and then OK to add a
	  Property Page named "PropertyPage1." Click Next.
	
	6. On the Third screen, double-click "aProperty" in the Available Properties
	  list box. Click Next, then Finish, then OK, then Close.
	
	7. Add the following code to the Property Page Initialize event:
	
	        PropertyPage.Caption = "New Caption"
	
	8. From the File menu, choose Make Project1.ocx.
	
	9. Save and close the project.
	
	10. Create a new "Standard EXE" project.
	
	11. Click Components on the Project menu and add a reference to Project1.
	
	12. Draw the UserControl on the Form.
	
	13. Click on the Builder Button (...) for the "Custom" property in the
	  properties window.
	
	14. Note that an additional window is opened on top of the Property Page window.
	
	NOTE: To reproduce this problem using the click event, place the code from step 7
	in the Click event of the Property Page and repeat the remaining steps. This
	errant window will appear when you click on the Property Page.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
