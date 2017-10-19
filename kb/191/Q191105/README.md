---
layout: page
title: "Q191105: BUG: RestoreToolbar Method May Not Restore Toolbar Correctly"
permalink: /kb/191/Q191105/
---

## Q191105: BUG: RestoreToolbar Method May Not Restore Toolbar Correctly

	Article: Q191105
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbToolbar kbVBp500bug kbVBp600bug kbGrpDSVB kbComCtrls
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the RestoreToolbar method to restore a Toolbar that was saved with
	the SaveToolbar method after a user customized the Toolbar it does not restore
	correctly.
	
	RESOLUTION
	==========
	
	Make sure all buttons use an image. You can create a 16x16 (pixel) bitmap and
	set the Mask Property of an ImageList control so the user does not see the
	image. Use a Timer control to restore a Toolbar when a form loads.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Toolbar control will not restore a button if the button does not have an
	image. Also, if you try to use the RestoreToolbar method in the form Load or
	Activate event, it will fail.
	
	The following example demonstrates the problems of restoring a Toolbar control
	and how to work around them. You can also run into a problem if you add a button
	to a Toolbar with code and do not set the Image. If you don't have an Image for
	any of the buttons, the default ButtonHeight is not large enough to display the
	Caption. To fix this, you need to make sure you set the ButtonHight property
	larger than the default. The resolution (discussed previously in the RESOLUTION
	section) of creating a masked .bmp for the button ensures that the ButtonHight
	is large enough to display the Caption.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. On the Projects menu, select Components. In the Components dialog box, click
	  the Controls Tab, select the Microsoft Windows Common Controls check box, and
	  then click OK.
	
	3. Place two ImageList controls, two Toolbar controls, one Timer control, and
	  four CommandButtons on Form1.
	
	4. Set the ButtonHeight for Toolbar2 to 400.
	
	5. Add six images to ImageList1. (Use the Images Tab on the ImageList Property
	  Page).
	
	6. Use a graphics program like Microsoft Paint to create a blank 16x16 bitmap.
	  Add that bitmap to the Images of ImageList2 and make sure you select 16x16
	  for the size on the General Tab of the Property page. On the Color tab of
	  ImageList2 Property page set the MaskColor to the color of your 16x16 bitmap.
	
	7. Add the following code to the code window of Form1:
	
	        Private Sub Command1_Click()
	          ' Save the toolbar configuration.
	          Toolbar1.SaveToolbar "Test", "bar1", "Toolbar1"
	          Toolbar2.SaveToolbar "Test", "bar2", "Toolbar2"
	        End Sub
	
	        Private Sub Command2_Click()
	          ' Restore the toolbar configuration.
	          Toolbar1.RestoreToolbar "Test", "bar1", "Toolbar1"
	          Toolbar2.RestoreToolbar "Test", "bar2", "Toolbar2"
	        End Sub
	
	        Private Sub Command3_Click()
	          ' Customize Toolbar1.
	           Toolbar1.Customize
	        End Sub
	
	        Private Sub Command4_Click()
	          ' Customize Toolbar2.
	          Toolbar2.Customize
	        End Sub
	
	        Private Sub Form_Load()
	          Dim i As Integer
	          Command1.Caption = "Save Toolbars"
	          Command2.Caption = "Restore Toolbars"
	          Command3.Caption = "Customize 1"
	          Command4.Caption = "Customize 2"
	          Toolbar2.Align = vbAlignBottom
	          Toolbar1.ImageList = ImageList1
	          Toolbar2.ImageList = ImageList2
	          ' Add some buttons to the toolbars.
	          For i = 1 To 6
	            Toolbar1.Buttons.Add Caption:=Str(i), Image:=i
	            Toolbar2.Buttons.Add Caption:=Str(i), Image:=0
	            ' Make the third button a separator.
	            If i = 3 Then
	              Toolbar1.Buttons(i).Style = tbrSeparator
	              Toolbar2.Buttons(i).Style = tbrSeparator
	            End If
	          Next i
	          ' Uncomment the following For loop to fix the issue with
	          ' the captions for the buttons on toolbar2 not showing up when
	          ' you restore toolbar2.
	          'For i = 1 To 6
	            'Toolbar2.Buttons(i).Image = 1
	          'Next i
	          ' Uncomment the next two lines to have the Toolbars restore when
	          ' the form loads.
	          'Timer1.Enabled = True
	          'Timer1.Interval = 1
	        End Sub
	
	        Private Sub Timer1_Timer()
	          ' This will restore the Toolbars when the form first loads.
	          Toolbar1.RestoreToolbar "Test", "bar1", "Toolbar1"
	          Toolbar2.RestoreToolbar "Test", "bar2", "Toolbar2"
	          Timer1.Enabled = False
	        End Sub
	
	8. Save and run the project. Use the Customize buttons to change the order of
	  the buttons on the Toolbar. (You will not see button captions in the
	  Customize Toolbar dialog box).
	
	9. Click the Save Toolbars button to save the customized Toolbars, and close the
	  form.
	
	10. Run the form again, and click Restore Toolbars.
	
	RESULT: Toolbar1 is restored but Toolbar2 shows up empty (with no buttons).
	
	Close the form and follow the comments in the Form1_Load to fix the restore
	Toolbar problem. Repeat step 10, and you will see the buttons.
	
	To make the customized Toolbars load when the form starts, follow the comments in
	the Form1_Load and repeat step 10, except you do not need to click Restore
	Toolbars. You will see the customized Toolbars when the form first appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbToolbar kbVBp500bug kbVBp600bug kbGrpDSVB kbComCtrls 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
