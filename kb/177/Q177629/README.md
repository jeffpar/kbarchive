---
layout: page
title: "Q177629: HOWTO: Use the OLE_COLOR Property Data Type"
permalink: /kb/177/Q177629/
---

## Q177629: HOWTO: Use the OLE_COLOR Property Data Type

	Article: Q177629
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An ActiveX control property can be any valid data type, such as long or string.
	Visual Basic provides some special data types for ActiveX control properties,
	such as OLE_COLOR. This article demonstrates how to use the OLE_COLOR data type.
	
	MORE INFORMATION
	================
	
	The OLE_COLOR data type is internally represented as a 32-bit long integer.
	However, what makes OLE_COLOR data type unique is that when a property of this
	type is selected, Visual Basic displays the color palette in the Visual Basic
	property window and accepts a selection, the same way that the color palette is
	displayed for the BackColor property of a Form.
	
	An OLE_COLOR property can also be used with the standard color selection window
	in a custom property page.
	
	The steps below describe how to create a simple ActiveX control with a property
	of type OLE_COLOR.
	
	Create ActiveX Control
	----------------------
	
	The following steps describe how to create an ActiveX control, with a property
	name ControlColor of type OLE_COLOR. The control will be designed so the
	BackColor of the custom control is set to the ControlColor property.
	
	1. In Visual Basic, create a new ActiveX Control project.
	
	2. From the Project menu, choose Project1 Properties. In the Project Name field,
	  type "OleColorControl" without the quotes. Click OK.
	
	3. View the code window for the UserControl and copy the following code:
	
	        Option Explicit
	        Private CurrentColor As OLE_COLOR
	
	        Public Property Get ControlColor() As OLE_COLOR
	           'Retrieve the current value of ControlColor
	
	           ControlColor = CurrentColor
	
	        End Property
	
	        Public Property Let ControlColor(ByVal NewColor As OLE_COLOR)
	           CurrentColor = NewColor
	           UserControl.BackColor = NewColor
	           PropertyChanged "ControlColor"
	
	        End Property
	
	        Private Sub UserControl_InitProperties()
	           'The InitProperties in this example is optional, however the
	           'ReadProperties and WriteProperties are required.
	           '
	           'Set the default ControlColor value to gray.
	
	           Me.ControlColor = &H8000000F
	        PropertyChanged "ControlColor"
	
	        End Sub
	
	        Private Sub UserControl_ReadProperties(PropBag As PropertyBag)
	           'Without ReadProperties & WriteProperties the ControlColor
	           'property would only work in the design environment.
	           'The following line of code reads the BackColor property from the
	           'PropertyBag. If there is no value for the BackColor property in
	           'the PropertyBag, the default is set to &H8000000F (gray).
	
	           Me.ControlColor = PropBag.ReadProperty("BackColor", &H8000000F)
	
	        End Sub
	
	        Private Sub UserControl_WriteProperties(PropBag As PropertyBag)
	           'The following line of code saves the BackColor property to the
	           'PropertyBag if the ControlColor property is not set, then set to
	           'the default, gray.
	
	           Call PropBag.WriteProperty("BackColor", Me.ControlColor,
	        &H8000000F)
	
	        End Sub
	
	4. Save the Project and compile the OleColorControl.Ocx.
	
	Creating the Test Container
	---------------------------
	
	The test container is designed to test the OleColorControl created in the steps
	above.
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, choose Components. Select the OleColorControl created
	  in the above steps.
	
	3. Add a OleColorControl to Form1.
	
	4. From the Properties Window, choose the ControlColor property. Note that the
	  Color Palette is displayed. Make a selection.
	
	5. Run the Project.
	
	  NOTE: Without the use of ReadProperties and WriteProperties, the control would
	  still change colors when you selected a new color for ControlColor in the
	  design environment. However, because the control gets reinitialized when the
	  form is executed, the color would return to gray when the form is run.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	
