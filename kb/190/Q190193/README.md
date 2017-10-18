---
layout: page
title: "Q190193: HOWTO: Use a Satellite DLL to Localize an Add-In"
permalink: kb/190/Q190193/
---

## Q190193: HOWTO: Use a Satellite DLL to Localize an Add-In

	Article: Q190193
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When developing an Add-In, it is possible to localize its Display Name and
	Description using a Satellite DLL. This article describes how to accomplish this
	task.
	
	MORE INFORMATION
	================
	
	Microsoft Visual Basic features a Connect designer for Add-Ins. Under the
	"Advanced" tab of this designer, there is an option to specify a Satellite DLL.
	The Satellite DLL will contain resource information for localizing an Add-In.
	
	Create a Satellite DLL
	----------------------
	
	The sample below demonstrates how to create a Satellite DLL containing string
	resources necessary for localizing the Display Name and Description of an
	Add-In. It requires the Resource Editor to create the string resources. If the
	Resource Editor is not already installed within the Visual Basic IDE, select
	Add-In Manager under the Add-Ins menu and double-click on "VB 6 Resource Editor"
	so that the Load Behavior is Loaded.
	
	1. Create a new ActiveX DLL project in Microsoft Visual Basic.
	
	2. From the Tools menu, select Resource Editor.
	
	3. In the Visual Basic Resource Editor dialog box, click the Edit String Tables
	  button on the toolbar.
	
	4. In the Edit String Tables dialog box, type "This is My Add-In" (without the
	  quotation marks) for resource Id 101.
	
	5. Click the Insert New Row button on the Toolbar to create a new resource item
	  102, then type "This is a description of My Add-In" (without the quotation
	  marks) for resource Id 102.
	
	6. Close the Edit String Tables dialog box.
	
	7. In the Visual Basic Resource Editor dialog box, right-click the Resource File
	  entry and click Save. Save the file as SatTest.res.
	
	8. Close the Visual Basic Resource Editor.
	
	9. On the Project menu, click Project1 Properties, and then click the General
	  tab.
	
	10. In the Project Name box, enter SatTest and click OK.
	
	11. On the File menu, click Make SatTest.DLL.
	
	12. On the File menu, click Save Project to save the SatTest.DLL project.
	
	Using the Satellite Resource DLL with an Add-In
	-----------------------------------------------
	
	In the satellite DLL (SatTest.DLL) created above, two string resources were
	created:
	
	- String resource #101, "This is My Add-In"
	
	- String resource #102, "This is a description of My Add-In"
	
	The sample below shows how to bind SatTest.DLL to an Add-In, and use the string
	resources to determine the Display Name and Description of the Add-In.
	
	1. On the File menu, click New and create a new Add-In project.
	
	2. In the Project Explorer, expand the Designer folder and double-click the
	  Connect designer.
	
	3. In the Connect Designer dialog box, enter #101 in the Add-In Display Name box
	  and enter #102 in the Add-In Description box.
	
	  NOTE: These values correspond to the resource IDs of the strings contained
	  within SatTest.DLL.
	
	4. Click the Advanced tab, and enter SatTest.DLL in the Satellite DLL Name box.
	  This field binds the Add-In to the satellite DLL and will look in it for any
	  requested resources.
	
	5. Close the Connect Designer dialog box.
	
	6. On the File menu, click Make MyAddin.dll.
	
	7. On the File menu, click Save Project to save the MyAddin.dll project.
	
	  NOTE : Make sure the Satellite DLL (SatTest.DLL) and the compiled Add-In
	  (MyAddin.DLL) reside within the same directory.
	
	Test the Add-In
	---------------
	
	1. On the File menu, click New and create a Standard EXE project.
	
	2. On the Add-Ins menu, click Add-In Manager.
	
	3. In the Add-In Manager Dialog Box, "This is My Add-In" is listed under
	  "Available Add-Ins."
	
	4. Click on "This is My Add-In." The Description field displays "This is a
	  description of My Add-In."
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q188659 HOWTO: Use a Satellite DLL for Localization Purposes
	
	In the Visual Studio 6.0 MSDN, refer to the following topics in the Visual Basic
	Reference section.
	
	  Add-In Designer
	  Satellite ActiveX DLLs
	  Resource Editor
	  Localization
	
	Additional query words: kbDSupport kbAddIn kbVBp kbdss kbVBp600 kbVBp kbvs600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
