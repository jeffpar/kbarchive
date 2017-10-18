---
layout: page
title: "Q172859: ODE97: &quot;You Don't Have a License&quot; Error Using ActiveX Control"
permalink: kb/172/Q172859/
---

## Q172859: ODE97: &quot;You Don't Have a License&quot; Error Using ActiveX Control

	Article: Q172859
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	When you insert an ActiveX control that shipped with the Microsoft Office 97
	Developer Edition (ODE) Tools, or when you attempt to access the properties of
	the ActiveX control, you receive the following error message:
	
	  You don't have the license required to use this ActiveX control.
	
	CAUSE
	=====
	
	Before you installed the ODE Tools, you installed an application that uses
	run-time versions of the ActiveX controls. If more recent versions of the files
	for these controls already existed on your computer when you installed the ODE
	Tools, the ActiveX control (.ocx) files were not updated. As a result, the
	corresponding dependency (.dep) files were not installed, and registry entries
	required to give the controls design-time functionality were not made.
	
	RESOLUTION
	==========
	
	You can use either of the following methods to resolve the problem, but Method 1
	is the recommended resolution.
	
	Method 1
	--------
	
	Download the Odelic.exe file from the Microsoft Download Center.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Odelic.exe
	  (http://download.microsoft.com/download/office97dev/fix/1/WIN98/EN-US/Odelic.exe)
	
	The Odelic.exe file contains the following files:
	
	  OdeOcxFx.exe    Office Developer Edition ActiveX Control Update
	  Readme.txt      Readme file
	
	Running OdeOcxFx.exe provides you with a design-time license to the ActiveX
	controls that ship with the ODE; it updates the registry and copies the .dep
	files onto your computer if they do not already exist.
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Method 2
	--------
	
	1. Rename Comctl32.ocx, Comdlg32.ocx, and Richtx32.ocx, which are files that are
	  located in the Windows\System folder.
	
	2. Rename the Setup.stf file in the ODETools\Setup folder; the default location
	  of this folder is C:\Program Files\Microsoft Office.
	
	3. Reinstall the ODE Tools.
	
	4. Replace Comctl32.ocx, Comdlg32.ocx, and Richtx32.ocx with the original files
	  that you renamed in Step 1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Office 97 Developer
	Edition Tools.
	
	MORE INFORMATION
	================
	
	Scenarios in which this problem can occur include, but are not limited to:
	
	- Installation of the ODE Tools after you have installed the Exchange/Outlook
	  Wizard, which uses Comctl32.ocx.
	
	- Installation of the ODE Tools after you have installed a custom application
	  that uses a run-time version of one of the ActiveX controls. The custom
	  application was developed in Microsoft Visual Basic version 5.0, Microsoft
	  Visual C++ version 4.0, or Microsoft Visual FoxPro version 5.0.
	
	- Installation of the ODE Tools after you have installed a custom application
	  that uses a run-time version of one of the ActiveX controls. Microsoft Visual
	  Basic version 5.0, Microsoft Visual C++ version 4.0, or Microsoft Visual
	  FoxPro version 5.0 is installed on the development computer, and the Setup
	  Wizard included with the ODE Tools was used to package the custom
	  application.
	
	Additional query words: you don t have the license required to use this ActiveX control
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
