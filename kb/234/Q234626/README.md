---
layout: page
title: "Q234626: SAMPLE: Setup1.exe Fully Automating MSDE Setup with the PDW"
permalink: /kb/234/Q234626/
---

## Q234626: SAMPLE: Setup1.exe Fully Automating MSDE Setup with the PDW

	Article: Q234626
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbwizard kbAppSetup kbDatabase kbVBp kbVBp600 kbMSDE100
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Data Engine (MSDE), version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Setup1.exe is a customized installation program made when employed with the
	Setup Toolkit project Setup1.vbp. When used with the Package and Deployment
	Wizards, it automatically distributes MSDE with Visual Studio applications.
	
	In order to use this customized Setup1.exe program, do the following:
	
	1. Extract the Msde_ins.exe file into another folder of your choice. You will
	  get Setup1.exe and Readme.txt files.
	
	2. Copy the original Setup1.exe file that ships with Visual Studio version 6.0.
	  from ...\VB98\Wizards\PDWizard to a different folder for later use.
	
	3. Place the customized Setup1.exe file in the ...\VB98\Wizards\PDWizard folder.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Msde_ins.exe
	  (http://download.microsoft.com/download/vb60ent/Sample8/1/W9XNT4/EN-US/Msde_ins.exe)
	
	+----------------------+
	| FileName   | Size    | 
	+----------------------+
	| Setup1.exe | 244 KB  | 
	+----------------------+
	| Readme.txt | 1.70 KB | 
	+----------------------+
	
	Complete the following steps in order to distribute MSDE automatically with the
	Package and Deployment Wizard:
	
	1. On the original development computer, start the Package and Deployment
	  Wizard. Choose a Visual Basic project and click Package.
	
	2. In the Package And Deployment Wizard -Package Type dialog box choose Standard
	  Setup Package.
	
	3. Click Next and leave the default settings.
	
	4. Click Next. On the Package And Deployment Wizard - Included Files dialog box,
	  click Add. Include the following files within the setup wizard:
	
	  - readme.txt
	  - msdex86.exe
	  - unattend.iss
	  - license.txt
	  - Any custom database (.mdf file) that needs to be used with MSDE on the
	  target machine
	
	5. Click Next. On the Package And Deployment Wizard - Cab Options dialog box,
	  choose the Single Cab or Multiple Cab option.
	
	6. Click Next. On the Package And Deployment Wizard - Installation Title dialog
	  box, choose a setup screen title.
	
	7. Continue through the wizard, selecting the default settings until you reach
	  the Package And Deployment Wizard - Shared Files dialog box. In this dialog
	  box, mark the components you wish to have as shared.
	
	8. Continue through the wizard and click Finish. The package is now complete and
	  can be installed onto target computers.
	
	9. Run Setup on the target computer and MSDE will be installed automatically.
	
	10. Once the installation is complete, you should be able to see two program
	  groups on your window's desktop; one for MSDE service manager and one for
	  your Visual Basic application.
	
	REFERENCES
	==========
	
	For additional information on MSDE, please refer to the following Knowledge Base
	articles:
	
	  Q232619 INFO: MSDE for Visual Studio Resources and Readme Contents
	
	  Q231923 HOW TO: Distribute the Microsoft Data Engine (MSDE) With the Package
	  and Deployment Wizard (PDW)
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Ammar
	Abuthuraya, Microsoft Corporation.
	
	
	Additional query words: kbfile
	
	======================================================================
	Keywords          : kbfile kbSample kbwizard kbAppSetup kbDatabase kbVBp kbVBp600 kbMSDE100 
	Technology        : kbVBSearch kbAudDeveloper _IKkbbogus kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbMSDE
	Version           : :1.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
