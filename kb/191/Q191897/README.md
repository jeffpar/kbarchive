---
layout: page
title: "Q191897: BUG: Shape on Transparent UserControl May Not Redraw Properly"
permalink: /kb/191/Q191897/
---

## Q191897: BUG: Shape on Transparent UserControl May Not Redraw Properly

{% raw %}

	Article: Q191897
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
	
	If you change the FillStyle property of a Shape control from Transparent to
	Solid at run-time, the Shape control may not redraw properly. This can happen on
	a transparent UserControl that is using a mask.
	
	RESOLUTION
	==========
	
	Set the Windowless property of the UserControl to True or call the Refresh
	method of the Shape control after changing the FillStyle to Solid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The Shape control does not fill in the shape when you change its FillStyle from
	Transparent to Solid at run-time. This happens on a UserControl that has the
	BackStyle set to Transparent, and you have created a masked area by setting the
	MaskPicture and MaskColor properties. You will only see this problem if the
	Windowless property of the UserControl is False.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a UserControl to the project.
	
	3. Set the BackStyle of the UserControl to 0 (Transparent).
	
	4. Set the MaskPicture of the UserControl to an available bitmap, set the
	  MaskColor to a color found in that picture, and set the BackColor of the
	  UserControl to something noticeable.
	
	5. Place a Shape on the UserControl so that it will cover part of the masked and
	  non-masked areas.
	
	6. Insert the following code into the UserControl:
	
	        Private Sub UserControl_Click()
	          Shape1.FillStyle = 0
	          ' Uncomment the following line to fix this bug
	          'Shape1.Refresh
	        End Sub
	
	7. Close the UserControl designer window so that the UserControl becomes
	  available on the Toolbox.
	
	8. Place the UserControl on Form1.
	
	9. Run the project.
	
	10. Click on a non-masked area of the UserControl.
	
	  RESULT: The FillStyle of the shape is now solid. However, only those parts of
	  the control that were not masked before are colored. The expected result is
	  that the entire Shape (rectangle) be drawn on top of the UserControl.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbCtrlCreate
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
