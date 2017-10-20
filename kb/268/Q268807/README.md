---
layout: page
title: "Q268807: PRB: Application Error Running or Closing a Project"
permalink: /kb/268/Q268807/
---

## Q268807: PRB: Application Error Running or Closing a Project

{% raw %}

	Article: Q268807
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbComboBox kbCmnCtrls kbCtrl kbListBox kbMonthCalCtrl kbVBp600 kbIDEProject kbGrpDSVB k
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Application Error occurs in the development environment in one of the
	following scenarios:
	
	- An attempt is made to close an object containing a control that implements
	  the DataFormat property. The attempt to close the container object may be
	  executed by the following actions:
	
	   - Run a project.
	
	   - Manually close the designer window of the object.
	
	   - Start a new project while a project is already open.
	
	   - Exit the Visual Basic application.
	
	-or-
	
	- An attempt is made to view an object by using the View menu or the Project
	  Explorer.
	
	-or-
	
	- An attempt is made to delete a control from an object designer.
	
	CAUSE
	=====
	
	The Microsoft Standard Data Formatting Object Library, msstdfmt.dll, is
	incorrectly registered.
	
	RESOLUTION
	==========
	
	Correctly register msstdfmt.dll by using RegSvr32.exe, a utility program that
	ships with Visual Basic and allows you to register DLLs and other files into the
	system registry.
	
	To correctly register msstdfmt.dll, follow the steps below:
	
	1. Verify that msstdfmt.dll is located in the Microsoft Windows 95 or Microsoft
	  Windows 98 Windows\System folder or in the Microsoft Windows NT or Microsoft
	  Windows 2000 Windows\System32 folder. If you cannot locate msstdfmt.dll, copy
	  it from the Visual Basic installation media into the appropriate folder.
	
	2. On the Start menu, choose Run.
	
	3. Type the following command into the Run dialog box, replacing [Path To
	  Windows\System] with the full path to your Windows\System folder: "regsvr32
	  [Path To Windows\System]\msstdfmt.dll" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The Microsoft Standard Data Formatting Object Library is required for controls
	that implement a DataFormat property. An Application Error occurs when a control
	makes an attempt to use the DataFormat property and the Microsoft Standard Data
	Formatting Object Library is not registered. Controls that implement a
	DataFormat property include, but are not limited to, the following:
	
	  CheckBox, ComboBox, Image, Label, ListBox, PictureBox, TextBox, ImageCombo,
	  MonthView, DTPicker, Calendar, DataCombo, DataList, DBCombo, DBList,
	  MaskEdBox, RichTextBox.
	
	Steps to Reproduce Behavior::
	
	1. Unregister msstdfmt.dll by using RegSvr32.exe: "regsvr32 /u [Path To
	  Windows\System]\msstdfmt.dll" (without the quotation marks)
	
	2. Start Visual Basic and create a new Standard EXE project. Form1 is created by
	  default.
	
	3. Add a Label control to Form1.
	
	4. Run the project, and note that an Application Error occurs.
	
	Additional query words: illegal operation invalid page general protection fault vb6.exe referenced memory
	
	======================================================================
	Keywords          : kbComboBox kbCmnCtrls kbCtrl kbListBox kbMonthCalCtrl kbVBp600 kbIDEProject kbGrpDSVB kbProperties 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
