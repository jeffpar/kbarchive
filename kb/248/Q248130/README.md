---
layout: page
title: "Q248130: FILE: AutoSave.exe Provides AutoSave for Visual C++"
permalink: kb/248/Q248130/
---

## Q248130: FILE: AutoSave.exe Provides AutoSave for Visual C++

	Article: Q248130
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbAutomation kbide kbMFC kbVC500 kbVC600 kbDevStudio kbDSupport
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	AutoSave.exe is a unsupported add-in sample that provides an autosave feature
	for Visual C++. The AutoSave add-in saves the currently open workspace in Visual
	C++ after a specified time interval.
	
	The AutoSave add-in is based on the Developer Studio Object Model and Microsoft
	Foundation Classes (MFC).
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  AutoSave.exe
	  (http://download.microsoft.com/download/vc60std/Utility/6/WIN98/EN-US/AutoSave.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The self-extracting AutoSave.exe file contains the following files:
	
	+--------------------------+
	| Commands.cpp       | 3KB | 
	+--------------------------+
	| Commands.h         | 2KB | 
	+--------------------------+
	| DSAddIn.cpp        | 4KB | 
	+--------------------------+
	| DSAddIn.h          | 2KB | 
	+--------------------------+
	| AutoSave.cpp       | 5KB | 
	+--------------------------+
	| AutoSave.def       | 1KB | 
	+--------------------------+
	| AutoSave.dsp       | 5KB | 
	+--------------------------+
	| AutoSave.dsw       | 1KB | 
	+--------------------------+
	| AutoSave.h         | 1KB | 
	+--------------------------+
	| AutoSave.odl       | 2KB | 
	+--------------------------+
	| AutoSave.rc        | 6KB | 
	+--------------------------+
	| AutoSave.clw       | 4KB | 
	+--------------------------+
	| AutoSave_i.c       | 2KB | 
	+--------------------------+
	| AutoSaveConfig.cpp | 4KB | 
	+--------------------------+
	| AutoSaveConfig.h   | 2KB | 
	+--------------------------+
	| AutoSaveTypes.h    | 6KB | 
	+--------------------------+
	| Resource.h         | 1KB | 
	+--------------------------+
	| StdAfx.cpp         | 1KB | 
	+--------------------------+
	| StdAfx.h           | 3KB | 
	+--------------------------+
	| AutoSave.rc2       | 1KB | 
	+--------------------------+
	| TBarLrge.bmp       | 2KB | 
	+--------------------------+
	| TBarMedm.bmp       | 1KB | 
	+--------------------------+
	
	Steps to Install the Add-In
	---------------------------
	
	1. Run AutoSave.exe to extract the Visual C++ project.
	
	2. Build the project in Visual C++ in Release or Debug configuration.
	
	3. In Visual C++, click Customize from the Tools menu.
	
	4. In the Customize dialog box, click the Add-Ins and Macro Files tab.
	
	5. Click the Browse button and locate the AutoSave.dll file that was built in
	  step 2.
	
	6. Click OK to save the settings.
	
	A toolbar with the AutoSave command appears.
	
	Using the AutoSave Add-In
	-------------------------
	
	Click on the AutoSave button to launch the AutoSave Configuration dialog box.
	This dialog has an edit box where you can enter the time in minutes; the default
	setting is 3 minutes. Click Start to start the timer and Stop to stop it.
	
	The timer setting is stored in the following registry key:
	
	  
	
	  HKEY_CURRENT_USER\Software\Microsoft\AutoSaveAddIn
	
	REFERENCES
	==========
	
	See the following topics in the MSDN Library
	(http://msdn.microsoft.com/library/default.htm) for Visual C++ 6.0 for
	documentation on Visual C++ Automation:
	
	  MSDN Library; Visual Studio Documentation; Visual C++ Documentation; Using
	  Visual C++; Visual C++ User's Guide; Automating Tasks in Visual C++
	
	Additional query words: AutoSave
	
	======================================================================
	Keywords          : kbfile kbSample kbAutomation kbide kbMFC kbVC500 kbVC600 kbDevStudio kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
