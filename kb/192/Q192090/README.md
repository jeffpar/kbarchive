---
layout: page
title: "Q192090: BUG: UserControl Property Value Changes Lost When Building EXE"
permalink: /kb/192/Q192090/
---

## Q192090: BUG: UserControl Property Value Changes Lost When Building EXE

{% raw %}

	Article: Q192090
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Standard EXE project that contains a UserControl. You change the
	property values of the UserControl and build the EXE. The property value changes
	you made do not take effect in the compiled application, and the property values
	in the project have reverted back to previous or default values.
	
	RESOLUTION
	==========
	
	There are three resolutions to this problem:
	
	1. Run the project before building the EXE. (Make sure the form containing the
	  UserControl is displayed during this process.)
	
	2. Close the form hosting the UserControl before building the EXE.
	
	3. Save the project before building the EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, add an User Control to the project.
	
	3. Add the following code to UserControl1:
	
	        Public Property Get BackColor() As OLE_COLOR
	           BackColor = UserControl.BackColor
	        End Property
	
	        Public Property Let BackColor(ByVal New_BackColor As OLE_COLOR)
	           UserControl.BackColor() = New_BackColor
	           PropertyChanged "BackColor"
	        End Property
	
	        ' Load property values from storage
	
	        Private Sub UserControl_ReadProperties(PropBag As PropertyBag)
	        UserControl.BackColor = PropBag.ReadProperty("BackColor", &H8000000F)
	        End Sub
	
	        ' Write property values to storage
	        Private Sub UserControl_WriteProperties(PropBag As PropertyBag)
	           Call PropBag.WriteProperty("BackColor", _
	              UserControl.BackColor, &H8000000F)
	        End Sub
	
	4. Place an instance of UserControl1 on Form1.
	
	5. Click on the UserControl to select it, and change the value of the BackColor
	  property.
	
	6. Build the project (File...Make Project1.exe).
	
	7. Note that the BackColor of the UserControl reverts back to its original color
	  in the IDE.
	
	8. Run the EXE created in step 5. Note that the change to the BackColor property
	  was lost.
	
	Additional query words: kbDSupport kbDSD kbVBp kbCtrl kbVBp600bug kbVBp500bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
