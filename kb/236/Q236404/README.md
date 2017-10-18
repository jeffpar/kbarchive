---
layout: page
title: "Q236404: INFO: Microsoft Visual Basic 6.0 Int'l Package/Deployment Kit"
permalink: kb/236/Q236404/
---

## Q236404: INFO: Microsoft Visual Basic 6.0 Int'l Package/Deployment Kit

	Article: Q236404
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbreadme kbsetup kbwizard kbDeployment kbIntl kbVBp600 kbLocalization kbGrpDSVB kbDSupp
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains the information from the Microsoft Visual Basic 6.0
	International Package and Deployment Kit readme.
	
	Contents
	--------
	
	IPDK Overview
	
	Supported Languages
	
	Included Files
	
	System Requirements
	
	Download and Installation Instructions
	
	Visual Studio 6.0 Service Pack 3 Required
	
	Incompatibility with Microsoft Office Developer Wizards
	
	Using the IPDK
	
	Deploying and Packaging a Localized Application
	
	Table of Installed Files with End-user Install Paths
	
	Terms of Use
	
	MORE INFORMATION
	================
	
	IPDK Overview
	-------------
	
	The International Package and Deployment Kit (IPDK) is a collection of resources
	and tools that allows developers to produce and distribute localized
	applications using any language version of Visual Basic. It includes a set of
	localized, redistributable files for each supported language, localized files
	for use with the Package and Deployment Wizard (PDWizard), and some tools to
	automatically repackage your application into another language and change the
	Locale ID (LCID) of compiled Visual Basic .exe, .dll and .ocx files. See
	IPDKTool.htm for more information.
	
	The IPDK is designed to solve some of the problems encountered by developers who
	create programs in multiple languages. Even if a program is localized, certain
	error messages and setup dialogs may still appear in the same language as the
	language version of Visual Basic that the program was compiled in. One reason is
	that each language version of Visual Basic doesn't ship all the language
	versions of the Visual Basic resources. The second reason is that if you compile
	any localized application on a given language version of Visual Basic, the
	application .exe, .dll, and .ocx files will still call the run-time resources
	corresponding to the language of the compiler. The set of redistributable files
	included in the IPDK provides a solution to fix these issues.
	
	Supported Languages:
	
	The IPDK supports the following languages:
	
	- English (en)
	- German (de)
	- French (fr)
	- Italian (it)
	- Spanish (es)
	- Japanese (jp)
	- Korean (ko)
	- Simplified Chinese (chs)
	- Traditional Chinese (cht)
	
	Included Files:
	
	The IPDK consists of:
	
	- Localized satellite .dll files for the VB run-time file.
	- Localized Packaging and Deployment Wizard setup files.
	- Satellite .dll files for all .ocx controls.
	- PdWizloc.exe, a tool to automatically repackage your standard application
	  package into another language after localization.
	- VBLocal.exe, to view and change the language settings of a compiled Visual
	  Basic .exe, .dll and .ocx files.
	
	System Requirements
	-------------------
	
	The system requirements for the IPDK are:
	
	- At least 60 MB free disk space for the IPDK files (Visual Basic 6.0 requires
	  a minimum of 400MB free disk space) if you install core IPDK files and all
	  language versions of mdac_typ.exe.
	- Visual Studio 6.0 Service Pack 3.
	
	NOTE: For all other Visual Basic system requirements, see the Before You Run
	Setup section of the Visual Basic Programmer's Guide.
	
	Download and Installation Instructions
	--------------------------------------
	
	To install the core IPDK files, download "Ipdk.exe" and follow the prompts.
	Unless otherwise specified, the IPDK files will be installed into a new folder
	called IPDK under the root of the Windows system drive (for example, C:\IPDK, if
	C: is the Windows system drive). Language subfolders contain the resources and
	localized documentation for each language. If your application is using
	mdac_typ.exe, you need to run the separate mdac_typ.exe setup programs in order
	to install any language versions of this file you would need at the same
	location of the core IPDK files.
	
	Download the IPDK package and any language version of mdac_typ.exe at::
	
	http://msdn.microsoft.com/vbasic/downloads/ipdk.asp
	
	Visual Studio 6.0 Service Pack 3 Required:
	
	Visual Studio 6.0 Service Pack 3 must be installed on your computer before the
	IPDK files can be installed. To determine if you have Visual Studio 6.0 Service
	Pack 3 installed on your system, consult the following Microsoft Knowledge Base
	article:
	
	  Q194295 How To Tell That Visual Studio 6.0 Service Packs Are Installed
	
	To download the service pack and get more information about Visual Studio, see
	the Microsoft Visual Studio Home Page.
	
	Incompatibility with Microsoft Office 2000 Developer Wizards:
	
	The Package and Deployment Wizard that ships with Visual Basic cannot be used
	with Microsoft Office 2000 Developer and vice versa. To avoid damaging projects
	created with either environment, only use the version of the wizard that came
	with that product. For example, if you're packaging a program in Microsoft
	Office 2000 Developer, only use the wizard that shipped with Microsoft Office
	2000 Developer. The IPDK is intended for use only with Visual Basic 6.0.
	
	Using the IPDK
	--------------
	
	Using the IPDK involves replacing some Packaging and Deployment Wizard setup
	files, and changing the Locale ID of the .exe, .dll, and .ocx files of the
	compiled Visual Basic application you are localizing. The tools delivered with
	the IPDK automatically perform all these tasks. This section describes each step
	you must take.
	
	Deploying and Packaging a Localized Application:
	
	Deploying and packaging a localized Visual Basic application with the IPDK
	involves the following steps:
	
	1. Localize the user interface portions of the application (contained in the
	  .res file) in one or multiple languages and compile these versions using your
	  language version of VB. For more information about localization and related
	  issues, see the MSDN topic Designing International Software.
	
	2. Run your language version of Package and Deployment Wizard to create initial
	  standard package(s) of your localized application(s).
	
	3. Use PDWizLoc.exe to finalize the standard package of each localized versions
	  of your application. PDWizloc will automatically add the localized satellite
	  files and localized files listed in the table of installed files to your
	  package, and change the LCID of the compiled Visual Basic application .exe,
	  .dll, and .ocx files to the target language LCID (see the LCID list in
	  IPDKTool.htm). PDWizloc can also be used to add files that are not part of
	  the IPDK package. For more information about using the PDWizloc utility, see
	  IPDKTool.htm (located in your IPDK language directory).
	
	NOTE: You don't need to run PDWizLoc to package your application into your own
	language version of Visual Basic 6.0. PDWizLoc only works on Standard packages.
	PDWizLoc does not support Internet packages.
	For more information about localizing Visual Basic applications, and using the
	Package and Deployment Wizard, consult the following MSDN topics:
	
	- Distributing Your Applications
	- International Issues
	- Using Resource Files for Localization
	- The Package and Deployment Wizard
	
	Table of Installed Files with End-user Install Paths
	----------------------------------------------------
	
	Please refer to the same section of the downloaded version of this readme to
	obtain this information.
	
	Terms of Use
	------------
	
	The accompanying software ("Update Software") is provided to you by Microsoft to
	update, supplement, or replace existing functionality of Visual Studio or Visual
	Basic. The Update Software is licensed under the same terms and conditions
	contained in the End User License Agreement (EULA) you acquired with Visual
	Studio or Visual Basic. If you do not agree to be bound by the terms of the
	EULA, you are not authorized to use the Update Software. You may have additional
	rights to distribute certain files identified in a "redist.txt" file included
	with the Update Software. By exercising a right, you agree to be bound by the
	terms described in the EULA for "REDISTRIBUTABLE CODE." If you do not agree to
	the terms described in the EULA, you are not authorized to use or redistribute
	any of the files. (c) 1999 Microsoft Corporation. All rights reserved. Terms of
	Use.
	
	(c) 1999 Microsoft Corporation. All rights reserved. Other product and company
	names herein may be the trademarks of their respective owners.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbreadme kbsetup kbwizard kbDeployment kbIntl kbVBp600 kbLocalization kbGrpDSVB kbDSupport kbIntlDev 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
