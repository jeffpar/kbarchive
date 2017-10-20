---
layout: page
title: "Q174216: PRB: TransparentPaint Backstyle Option Unavailable"
permalink: /kb/174/Q174216/
---

## Q174216: PRB: TransparentPaint Backstyle Option Unavailable

{% raw %}

	Article: Q174216
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual Basic 5.0 documentation discusses a TransparentPaint option for the
	BackStyle property of the UserControl. However, this feature was not implemented
	in the product. Without this option, it is not possible to create a completely
	transparent ActiveX Control using Visual Basic. If you need a transparent
	ActiveX Control, develop the control using Microsoft Visual C++.
	
	This presents two problems when working with ActiveX controls created using
	Visual Basic. Transparent controls cannot be drawn on and they do not respond to
	events that occur on the control; these events are passed on to the container.
	
	NOTE: This documentation error has been corrected in Visual Basic version 6.0.
	
	RESOLUTION
	==========
	
	There is no way to simulate the TransparentPaint option, but under some
	circumstances it may be possible to achieve the desired result. There are two
	such situations:
	
	1. The ActiveX control is being used in a container that has a solid-color
	  background.
	
	2. You have a bitmap that contains some type of symbol, drawing or "hot spot"
	  that is not transparent.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Background Color Matching with the Container
	--------------------------------------------
	
	If the container has a solid color background, the backcolor of your UserControl
	can be set to match the backcolor of the container. This has the same effect as
	transparency. To accomplish this, add the following code to your UserControl's
	Paint Event:
	
	     BackColor = Parent.Backcolor
	
	Using a "Hot Spot" Bitmap
	-------------------------
	
	The UserControl has two properties that can be used to create transparent areas
	on the control: MaskColor and MaskPicture. These properties allow you to have
	non-transparent areas on a transparent control that will respond to events and
	can be drawn on. The transparent areas on the control, however, will still not
	respond to events and cannot be drawn on.
	
	Step-by-Step Example
	--------------------
	
	1. Create a bitmap with a white background and containing a filled red circle.
	
	2. Start a new ActiveX Control project.
	
	3. Set the following properties for the UserControl:
	
	  BackStyle:      0 - Transparent
	  MaskColor:      White
	  MaskPicture:    The bitmap created in Step 1.
	  BackColor:      &H00FF0000&
	
	4. Add the following code to the UserControl:
	
	        Private Sub UserControl_Click()
	           MsgBox "UserControl Click"
	        End Sub
	
	        Private Sub UserControl_Paint()
	           'Test to see if background of control is same color as container
	           'If it is, change it, or the unmasked area will be invisible
	           If BackColor = Parent.BackColor Then BackColor = vbGreen
	        End Sub
	
	5. Add a Standard EXE project.
	
	6. Add the following code to Form1:
	
	        Private Sub Form_Click()
	           MsgBox "Form Click"
	        End Sub
	
	7. Close the UserControl and add it to Form1.
	
	8. Run the project.
	
	9. Clicking on the circle should result in the "UserControl Click" message box.
	
	10. Clicking on the transparent area of the UserControl should display the "Form
	  Click" message box.
	
	It is important that the MaskColor be set to the same color as the background of
	the bitmap. To prevent problems using your control under different versions of
	Windows, use White as the color. Notice also that in this example the "Red"
	circle on the bitmap was blue or green when the UserControl was displayed on the
	form. The actual color of the unmasked area is determined by the BackColor
	property of the UserControl, not the colors in the bitmap.
	
	Although it is not demonstrated here, the non-transparent area of the UserControl
	can also be drawn on.
	
	REFERENCES
	==========
	
	Readme.hlp
	
	Additional query words: kbVBp kbdsd kbDSupport KBCONTROL KBCTRLCREATE kbVBp500 kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
