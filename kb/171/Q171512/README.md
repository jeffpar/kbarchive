---
layout: page
title: "Q171512: FIX: UserControls on Property Pages Do Not Trigger Focus Events"
permalink: /kb/171/Q171512/
---

## Q171512: FIX: UserControls on Property Pages Do Not Trigger Focus Events

{% raw %}

	Article: Q171512
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Property Pages that contain UserControls, code that is contained
	within the UserControls' Focus events (EnterFocus, ExitFocus, GotFocus,
	LostFocus) is not triggered.
	
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
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project.
	
	2. Add a UserControl.
	
	3. Insert a CommandButton into the UserControl's designer.
	
	4. Add the following code to the UserControl's code window:
	
	        Private Sub Command1_GotFocus()
	                Debug.Print "Command GF"
	            End Sub
	
	            Private Sub Command1_LostFocus()
	                Debug.Print "Command LF"
	            End Sub
	
	            Private Sub UserControl_EnterFocus()
	                Debug.Print "ENTERFOCUS"
	            End Sub
	
	            Private Sub UserControl_ExitFocus()
	                Debug.Print "EXITFOCUS"
	            End Sub
	
	5. Add a PropertyPage to the project.
	
	6. Insert an instance of the UserControl onto the PropertyPage.
	
	7. Insert a CommandButton onto the PropertyPage.
	
	8. Add the following code to the PropertyPage's code window:
	
	        Private Sub Command1_GotFocus()
	            Debug.Print "Command1 on property page GF"
	        End Sub
	
	        Private Sub Command1_LostFocus()
	            Debug.Print "Command1 on property page LF"
	        End Sub
	
	9. In the UserControl's property browser, set the PropertyPage to PropertyPage1.
	
	10. Insert an instance of the UserControl on Form1.
	
	11. Right-click on the UserControl. Click Properties.
	
	12. Click on the CommandButton.
	
	  RESULT: NO EVENTS fire off, the Usercontrol's CommandButton should have
	  gotten its LostFocus, the Usercontrol should have gotten its ExitFocus and
	  the CommandButton should have gotten its GotFocus event.
	
	REFERENCES
	==========
	
	For more information on creating UserControls, please see Chapter 4 and 9 in the
	Component Tools Guide.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
