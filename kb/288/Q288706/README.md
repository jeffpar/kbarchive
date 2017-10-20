---
layout: page
title: "Q288706: PRB: CLSID {00000010-0000-0010-8000-00AA006D2EA4} Not Found"
permalink: /kb/288/Q288706/
---

## Q288706: PRB: CLSID {00000010-0000-0010-8000-00AA006D2EA4} Not Found

{% raw %}

	Article: Q288706
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbCtrl kbDatabase kbDeployment kbJET kbVBp kbVBp600 kbGrpDSVB kbDSu
	Last Modified: 15-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you first try to run an application that a Visual Basic 6.0 Setup package
	installed and that the Packaging and Deployment Wizard (PDW) created, you may
	receive the following error message:
	
	  Class not registered.
	  Looking for object with CLSID {00000010-0000-0010-8000-00AA006D2EA4}.
	
	CAUSE
	=====
	
	This error occurs when the Visual Basic 6.0 project references the Microsoft
	Data Access Objects (DAO) 3.6 Object Library (DAO360.dll) and not DAO350.dll.
	The {00000010-0000-0010-8000-00AA006D2EA4} CLSID is associated with DAO350.dll.
	
	When the intrinsic Data control's Connect property is set to Access, and the
	application uses this Data control, the application requires that DAO350.dll is
	registered on the system. However, DAO350.dll is not included in the
	distribution package that the PDW creates because it is not referenced in the
	project.
	
	RESOLUTION
	==========
	
	To resolve this problem, set the Connect property of the intrinsic Data control
	to Access 2000, which uses DAO360.dll. This resolution is valid even if you are
	using a Microsoft Access 97 database. For additional information, see the steps
	in the "More Information" section.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic 6.0. Form1 is created by
	  default.
	
	2. On the Start menu, click Run, and type the following command to unregister
	  DAO350.dll:
	
	  
	
	  regsvr32 -u "C:\Program Files\Common Files\Microsoft Shared\DAO\dao350.dll"
	
	  Note: Make sure that you specify the path for DAO350.dll as it appears on your
	  system.
	
	3. Add the intrinsic Data control to Form1. Change the Connect property to
	  Access. Set the DatabaseName property to the Nwind.mdb or the Biblio.mdb
	  database under the \Program Files\Microsoft Visual Studio\VB98 folder.
	
	4. Press the F5 key to run the project. You receive the above-mentioned error
	  message. If the Data control is tied to a data-aware control, you do not see
	  any information in that control.
	
	Steps to Resolve Behavior
	-------------------------
	
	1. Stop the project, and change the Connect property for the Data control to
	  Access 2000.
	
	2. Press F5 to run the project. The error message does not appear.
	
	3. Stop the project.
	
	4. On the Start menu, click Run, and type the following command to register
	  DAO350.dll:
	
	  
	
	  regsvr32 "C:\Program Files\Common Files\Microsoft Shared\DAO\dao350.dll"
	
	  Note: Make sure that you specify the path for DAO350.dll as it appears on your
	  system.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbCtrl kbDatabase kbDeployment kbJET kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
