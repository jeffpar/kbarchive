---
layout: page
title: "Q206897: BUG: Behavior of Lightweight WLVScroll Different from VScrollBar"
permalink: /kb/206/Q206897/
---

## Q206897: BUG: Behavior of Lightweight WLVScroll Different from VScrollBar

	Article: Q206897
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbScrollBar kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The behavior of the lightweight vertical scrollbar is different from the
	intrinsic scrollbar. This difference is accentuated when the scrollbar is set to
	a small maximum value. The lightweight scrollbar always rounds down the position
	of the slider to the next lower value. The intrinsic scrollbar rounds the slider
	position either up or down to the nearest position as a function of its
	proximity. This difference is likely to be noticed, especially if developers are
	going to be using sliders as an input device to allow users to select from a
	discrete, small number of options.
	
	RESOLUTION
	==========
	
	The lightweight scrollbar can be made to behave like the intrinsic vertical
	scrollbar by scaling it. The following procedure outlines the procedure.
	
	Step-By-Step Instructions
	-------------------------
	
	1. Start a Standard EXE project in Visual Basic. Form1 is added by default.
	
	2. On the Project menu, select Components, check Microsoft Windowless Controls
	  6.0, and then click OK.
	
	3. Place an intrinsic VScrollBar and a WLVScroll control on Form1.
	
	4. Set the Max value on the WLVScroll control to 100 and set the Max value on
	  the VScrollBar to 1.
	
	5. Set the LargeChange property on the WLVScroll to 100. This makes the
	  WLVScroll look identical to the ScrollBar.
	
	6. Add the following code to the Change event of the WLVScroll:
	
	  Private Sub WLVScroll1_Change
	  If WLVScroll1.Value > 70 Then
	     WLVScroll1.Value = WLVScroll1.Max
	  Else
	     WLVScroll1.Value = 0
	  End If
	  End Sub
	
	7. Run the project from the Start menu, or by pressing the F5 key.
	
	8. Drag the slider of ScrollBar downward, almost to the bottom, and release it.
	  The slider jumps to the bottom of the scrollbar.
	
	9. Drag the slider of the WLVScroll to the same position as in the previous
	  step. The slider jumps down to the bottom of the scrollbar. The two controls
	  now have the identical behavior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a Standard EXE project in Visual Basic. Form1 is added by default.
	
	2. From the Project menu, select Components, check Microsoft Windowless Controls
	  6.0, and then click OK.
	
	3. Place an intrinsic VScrollBar and a WLVScroll control on Form1.
	
	4. Set the Max values on both the WLVScroll and the VScrollBar to 1.
	
	5. From the Start menu, or with F5, run the project.
	
	6. Drag the slider on the intrinsic VScrollBar down to nearly, but not quite,
	  the bottom. You should see the slider jump the rest of the way down to the
	  bottom. This is the expected behavior.
	
	7. Drag the slider on the WLVScroll control to about the same position as in the
	  previous step.
	
	8. Unlike the intrinsic control, the slider of the WLVScroll jumps back to the
	  top.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q184687 INFO: Lightweight controls in Visual Basic 6.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbScrollBar kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
