---
layout: page
title: "Q169772: PRB: VB5 .OCX Property Missing from VB4 Properties Window"
permalink: /kb/169/Q169772/
---

## Q169772: PRB: VB5 .OCX Property Missing from VB4 Properties Window

{% raw %}

	Article: Q169772
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A public property of an ActiveX Control (.OCX) created in Visual Basic 5.0 or
	Visual Basic 6.0 does not appear in the Properties Window when the control is
	used in Visual Basic 4.0's design environment.
	
	CAUSE
	=====
	
	By default, a Public Property Let procedure passes its arguments by reference
	and not by value. When these arguments are passed by reference from an ActiveX
	Control (.OCX), the property will not be visible in the Visual Basic 4.0
	Properties Window.
	
	RESOLUTION
	==========
	
	To resolve this problem, be sure that all arguments passed by a Public Property
	Let procedure are passed by value. For example, if you have the following
	property procedure definition:
	
	     Public Property Let MyProperty(newValue As Boolean)
	
	it needs to be changed to:
	
	     Public Property Let MyProperty(ByVal newValue As Boolean)
	
	to work correctly.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic 5.0 or 6.0, start a new ActiveX Control project. UserControl1
	  is created by default. Change the Project name (not the file name) to
	  "UserCtl1."
	
	2. Add the following code to the General Declarations section of UserControl1:
	
	        'A public variable is always visible in the Properties Window.
	        Public VisibleProperty as Boolean
	
	        Public Property Get HiddenProperyA() as Boolean
	        End Property
	
	        Public Property Let HiddenPropertyA(newValue as Boolean)
	          'By default the argument is passed by reference.
	          'This property will not be displayed in Properties Window.
	        End Property
	
	        Public Property Get HiddenPropertyB() as Boolean
	        End Property
	
	        Public Property Let HiddenPropertyB(ByVal newValue as Boolean)
	           'This argument is passed by value.
	           'This property will be displayed in Properties Window.
	        End Property
	
	3. Save the project and select 'Make UserCtl1.ocx...' from the File menu. Close
	  Visual Basic.
	
	4. If Visual Basic 4.0 is installed on the same system as Visual Basic 5.0 or
	  6.0, skip to step 5. If Visual Basic 4.0 is installed on a different system,
	  you will need to create a set of distribution disks or a net setup to install
	  your ActiveX Control on the Visual Basic 4.0 computer. Once the ActiveX
	  Control is successfully installed and registered on the Visual Basic 4.0
	  system, you can continue.
	
	5. Create a new project in Visual Basic 4.0. Form1 is created by default.
	
	6. Select Custom Controls from the Tools menu and select your ActiveX Control.
	  It should be listed as 'UserCtl1.'
	
	7. Add your ActiveX Control to Form1 and view the Properties Window. You should
	  be able to see and set the values of "VisibleProperty" and "HiddenPropertyB"
	  in the Properties Window. You cannot see the "HiddenPropertyA" property in
	  the Properties Window.
	
	  In the Object Browser you will be able to see all of the control's properties.
	  All of these properties can be set in code at runtime.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
