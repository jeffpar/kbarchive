---
layout: page
title: "Q171492: FIX: ActiveX Control Incorrectly Reports ScaleWidth/ScaleHeight"
permalink: /kb/171/Q171492/
---

## Q171492: FIX: ActiveX Control Incorrectly Reports ScaleWidth/ScaleHeight

{% raw %}

	Article: Q171492
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbprogramming kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft PowerPoint 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using an ActiveX control created in Visual Basic 5.0 in Microsoft
	PowerPoint 97, the ScaleWidth and ScaleHeight of the control are changed after
	going to "Slide Show" mode and back.
	
	CAUSE
	=====
	
	PowerPoint 97 zooms the control's window when the slide is displayed, even if
	Zoom is set to 100%. Because ScaleWidth and ScaleHeight are based on the size of
	the control's window, and PowerPoint doesn't resize this window back to the
	control's extents when the control gets deactivated, the window retains its
	"zoomed" size until explicitly resized. In all containers that don't zoom, these
	values are always identical and do not exhibit this problem.
	
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
	
	1. Create a new ActiveX Control Project.
	
	2. Select Project1 Properties from the Project menu, and change the Project Name
	  to "ScaleTest."
	
	3. Add the following to the Paint event:
	
	          Private Sub UserControl_Paint()
	           Dim sCaption As String
	           sCaption = ScaleWidth & " ," & ScaleHeight
	           CurrentX = (ScaleWidth - TextWidth(sCaption)) / 2
	           CurrentY = (ScaleHeight - TextHeight(sCaption)) / 2
	           Print sCaption
	           Line (0, ScaleHeight / 2)-(ScaleWidth / 2, 0)
	           Line (ScaleWidth / 2, 0)-(ScaleWidth, ScaleHeight / 2)
	           Line (ScaleWidth, ScaleHeight / 2)-(ScaleWidth / 2, ScaleHeight)
	           Line (ScaleWidth / 2, ScaleHeight)-(0, ScaleHeight / 2)
	        End Sub
	
	4. Select "Make ScaleTest.ocx" from the File menu.
	
	5. Close Visual Basic and start PowerPoint 97.
	
	6. Create a new Blank Presentation that contains one Blank Slide.
	
	7. Use the "More Controls" button on the ToolBox to add the previously- created
	  control to the slide. Note the ScaleWidth and ScaleHeight.
	
	8. Select "Slide Show" from the View menu. The control will get larger and the
	  ScaleWidth and ScaleHeight will be changed.
	
	9. Press the Escape key to return to layout mode and note that the ScaleWidth
	  and ScaleHeight still reflect the "Slide Show" settings.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbPowerPt97Search
	Version           : WINDOWS:5.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
