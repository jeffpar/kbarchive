---
layout: page
title: "Q181877: FIX: UserControl Not Printing Correctly From Access"
permalink: /kb/181/Q181877/
---

## Q181877: FIX: UserControl Not Printing Correctly From Access

{% raw %}

	Article: Q181877
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A UserControl (OCX) created in Visual Basic does not print correctly from
	Microsoft Access. The control is either partially cut off or is blank when
	previewed or printed.
	
	CAUSE
	=====
	
	This problem occurs when version 05.00.4319 of the Visual Basic run-time File
	MSVBVM50.DLL is installed. This version is installed by Visual Studio Service
	Pack 2 and 3 and Microsoft Internet Explorer 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX Control project. UserControl1 is created by default.
	
	2. Click Project1 Properties from the Project menu and set the Project Name to
	  "AccessTest."
	
	3. Using the Shape control, draw a rectangle on the UserControl.
	
	4. Set the following Shape1 control properties:
	
	  Property     Value
	  --------     -----
	  BackColor    &H000000FF& (Red)
	  BackStyle    Opaque
	  Height       2295
	  Left         480
	  Top          600
	  Width        3855
	
	5. Save the project and make AccessTest.ocx. Exit Visual Basic.
	
	6. Start Microsoft Access and create a blank database (db1.mdb).
	
	7. Click the Forms tab, and then click the New button to create a new form.
	
	8. Click OK to create new form in Design View.
	
	9. Choose Insert, ActiveX Control and insert the AccessTest.UserControl1.
	
	10. Choose Print Preview from the File menu. Note that the rectangle is
	  partially cut off.
	
	11. Click the Close button on the Toolbar to return to Form design.
	
	12. Move the control to the right so that it is centered on the form and then
	  return to print preview. Note the problem is more apparent and that the
	  control may appear as an empty box.
	
	Additional query words: white box kbIE400 kbVs97 kbVS97sp2 kbVS97sp3 kbVBp kbdsd kbDSupport kbVBp500bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbAccessSearch kbZNotKeyword6 kbAccess97 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVB500 kbAccess97Search kbAccess95Search kbZNotKeyword3 kbAccess700
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
