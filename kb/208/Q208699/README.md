---
layout: page
title: "Q208699: BUG: Error &quot;&#36;(DllSelfRegisterEx) Could Not Be Registered&quot;"
permalink: /kb/208/Q208699/
---

## Q208699: BUG: Error &quot;&#36;(DllSelfRegisterEx) Could Not Be Registered&quot;

	Article: Q208699
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,5.5,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbtophit kbAppSetup kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport
	Last Modified: 09-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Explorer (Programming) version 5.5 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a Setup program created with the Visual Basic 5.0 Application Setup
	Wizard, the following error message appears:
	
	  The file '<Windows System Folder>\$(DLLSelfRegisterEx)' could not be
	  registered because it was not found.
	
	where <Windows System Folder> is the path of the Windows\System or
	Winnt\System32 folder.
	
	When you run a Setup program created with the Visual Basic 6.0 Package and
	Deployment Wizard (PDW), the following error message appears:
	
	  The file '<TEMP Folder>\Msftqws.pdw\$(DllSelfRegisterEx)' could not be
	  registered because it was not found.
	
	where <TEMP Folder> is the Windows\Temp folder on Windows 95, Windows 98,
	and Windows Me or the path to the folder specified by the TEMP environment
	variable on Windows NT or Windows 2000.
	
	CAUSE
	=====
	
	This problem occurs when distributing the Microsoft Calendar control
	(MSCal.ocx). The "Register=" line in the dependency file (MSCal.dep) is
	incorrectly set to $(DLLSelfRegisterEx).
	
	RESOLUTION
	==========
	
	To fix the problem, do the following:
	
	1. Open the Setup.lst file in a text editor, such as Notepad. Setup.lst is one
	  of the files created for your application setup by the Setup Wizard or PDW.
	
	2. Find $(DLLSelfRegisterEx). You should see $(DLLSelfRegisterEx) highlighted in
	  the entry for MSCal.ocx.
	
	3. Change $(DLLSelfRegisterEx) to $(DLLSelfRegister).
	
	4. Save your changes and close Notepad.
	
	5. Run the application Setup.exe.
	
	To fix the problem for all setup.exes created with the Setup Wizard and PDW,
	follow these steps:
	
	1. Open the MSCal.dep file in a text editor, such as Notepad. You should find
	  MSCal.dep in the same folder as MSCal.ocx, which is normally located in the
	  Windows\System folder on Windows Windows 95, Windows 98, or Windows Me and
	  the Winnt\System32 folder on Windows NT or Windows 2000.
	
	2. Find $(DLLSelfRegisterEx). You should see $(DLLSelfRegisterEx) highlighted in
	  the entry for "Register=".
	
	3. Change $(DLLSelfRegisterEx) to $(DLLSelfRegister).
	
	4. Save your changes and close Notepad.
	
	5. Run the Setup Wizard or PDW to create a new setup.
	
	  NOTE: Do not use an existing template in the Setup Wizard or an existing
	  packaging script in the PDW.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	In addition to updating the "Register=" setting in MSCal.dep, you might also
	need to update the "Version=" setting. For more information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q197123 PRB: Out-Of-Date Dependency Information for MSCal.ocx
	
	The Microsoft Calendar control does not ship with Visual Basic. The control ships
	with Microsoft Access 97 and Visual Studio 6.0. You can download the control for
	no charge from the following Web page:
	
	  http://www.microsoft.com/officedev/tips/regactx.htm
	
	Microsoft Access 97 ships with MSCal.ocx version 8.0.0.3432, which is only
	redistributable if you own a copy of Microsoft Office 97 Developer Edition. For
	more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170692 ADT/ODE: Can't Redistribute Calendar Control Without ODE License
	
	
	
	Additional query words: DLLSelfRegisterEx DLLSelfRegister msftqws
	
	======================================================================
	Keywords          : kbwizard kbtophit kbAppSetup kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbie550 kbOSWinME 
	Technology        : kbVBSearch kbIEsearch kbAudDeveloper kbZNotKeyword6 kbSDKIESearch kbZNotKeyword kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbSDKIE550
	Version           : :5.0,5.5,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
