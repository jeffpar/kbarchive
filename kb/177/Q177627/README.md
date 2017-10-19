---
layout: page
title: "Q177627: HOWTO: Use the OLE_OPTEXCLUSIVE Property Data Type"
permalink: /kb/177/Q177627/
---

## Q177627: HOWTO: Use the OLE_OPTEXCLUSIVE Property Data Type

	Article: Q177627
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
	such as OLE_OPTEXCLUSIVE. This article demonstrates how to use the
	OLE_OPTEXCLUSIVE data type.
	
	MORE INFORMATION
	================
	
	The OLE_OPTEXCLUSIVE data type is internally represented as a Boolean, with
	valid values True and False. However, what makes OLE_OPTEXCLUSIVE unique is that
	if several controls of this data type are placed within a container (such as a
	Frame or Form), only one member of the group will be capable of being set to
	True, all others will be set to False.
	
	For example, you could use an OLE_OPTEXCLUSIVE control if you created a option
	group with three options (Paper, Scissors, and Rock), where users can only
	select one of the three choices. Basically, when controls of this type are
	placed into a container, they are expected to behave as an option button; no
	more than one control can have its value set to True at any given time.
	
	The steps below describe how to create a simple ActiveX control of type
	OLE_OPTEXCLUSIVE.
	
	Create ActiveX Control
	----------------------
	
	The following steps describe how to create an ActiveX control whose default value
	will be of type OLE_OPTEXCLUSIVE. If its default value is set to True, its color
	turns green. If its default value is set to False, its color turns red.
	
	1. In Visual Basic, create a new ActiveX Control project.
	
	2. From the Project menu, choose Project1 Properties. In the Project Name field,
	  type "OptExclusiveControl" without the quotes. Click OK.
	
	3. Set the UserControl BackColor property to red (&H000000FF&). This
	  will be the default color for the UserControl.
	
	4. View the code window for the UserControl and copy the following code:
	
	        Option Explicit
	        Private CurrentValue As OLE_OPTEXCLUSIVE
	
	        Private Sub UserControl_InitProperties()
	           'Set the initial value for the Value property to False...much
	           'like an option button would set its initial value to False
	           '(unselected).
	
	           Me.Value = False
	
	        End Sub
	
	        Private Sub UserControl_Click()
	           'When the User Clicks on the control, the Value property of the
	           'control will be set to True, just as an option button
	           'sets its value to True when it is clicked.
	
	           Me.Value = True
	
	        End Sub
	
	        Public Property Get Value() As OLE_OPTEXCLUSIVE
	           'Retrieve the current value of the Value property
	
	           Value = CurrentValue
	
	        End Property
	
	        Public Property Let Value(ByVal NewValue As OLE_OPTEXCLUSIVE)
	           'If the NewValue is True, the UserControls color is set
	           'to green and all other instances of the control within
	           'a container are set to False automatically.
	           '
	           'If NewValue is False, the UserControls color is set to red.
	
	           If NewValue = True Then
	              UserControl.BackColor = &HFF00&   'Green
	              CurrentValue = NewValue
	              PropertyChanged "Value"   'Notifies the container that the
	                                        'property has changed. If you exclude
	                                        'this line of code, the ActiveX
	                                        'control will not behave as an
	                                        'option group because there is no
	                                        'mechanism to inform the container
	                                        'that the property has changed.
	              Else
	                 UserControl.BackColor = &HFF&     'Red
	                 CurrentValue = NewValue
	                 PropertyChanged "Value"
	              End If
	           End Property
	
	5. From the Tools menu, choose Procedure Attributes.
	
	6. In the Procedure Attributes window, be sure the Value property is selected in
	  the Name combo box, and then click Advanced.
	
	7. For Procedure ID, choose (Default) from the drop-down list. Only one property
	  procedure can be set to the default. This becomes the default property for
	  your ActiveX Control. If you do not set the OLE_OPTEXCLUSIVE property to the
	  default value, it will not function as expected. In this example, the
	  property was named "Value" for simplicity. However, you can set any named
	  property procedure as your default.
	
	8. Save the Project and compile the OptExclusiveControl.Ocx.
	
	  You now have an ActiveX Control whose data type is OLE_OPTEXCLUSIVE. The next
	  set of steps describe how to build a container to test the control.
	
	Creating the Test Container
	---------------------------
	
	The test container is designed to test the OptExclusiveControl created in the
	steps above.
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, choose Components. Select the OptExclusiveControl
	  created in the above steps.
	
	3. Add a Frame control to Form1.
	
	4. Add three OptExclusiveControls to the Frame.
	
	5. Run the Project.
	
	  When the project is running, Form1 will display the frame with three of the
	  OptExlcusiveControls on it. Clicking on a OptExclusiveControl turns its color
	  green. As you click on the other OptExlcusiveControls, notice that only one
	  OptExclusiveControl can be green at any given time.
	
	NOTE: OLE_OPTEXCLUSIVE controls behave as such within a container. The example
	above uses a frame to demonstrate the OLE_OPTEXCLUSIVE behavior. However, the
	form itself could server as the container.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	
