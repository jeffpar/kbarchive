---
layout: page
title: "Q223127: FIX: PDW Reports Out-of-Date Dependency Info"
permalink: kb/223/Q223127/
---

## Q223127: FIX: PDW Reports Out-of-Date Dependency Info

	Article: Q223127
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While creating a setup package with the Visual Basic Package and Deployment
	Wizard (PDW), the following files might appear in the "Out-of-Date Dependencies"
	list:
	
	Msadodc.ocx, Msdatgrd.ocx, Msdatlst.ocx, Msbind.dll, and Msstdfmt.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, select Components. In the Components dialog box, check
	  the following and click OK:
	
	   - Microsoft ADO Data Control 6.0 (OLEDB)
	   - Microsoft Datagrid Control 6.0 (OLEDB)
	   - Microsoft Datalist Controls 6.0 (OLEDB)
	
	3. Add an Adodc control, a DataGrid control, and one of the Datalist controls to
	  Form1.
	
	4. Save the project.
	
	5. Run the Package and Deployment Wizard and choose Standard Setup Package.
	
	  RESULT: Msadodc.ocx, Msdatgrd.ocx, Msdatlst.ocx, Msbind.dll, and Msstdfmt.dll
	  may appear in the Out-of-Date Dependencies list.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
