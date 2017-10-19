---
layout: page
title: "Q196286: Vb4Run.exe Run-Time .dlls for Visual Basic 4.0 Apps"
permalink: /kb/196/Q196286/
---

## Q196286: Vb4Run.exe Run-Time .dlls for Visual Basic 4.0 Apps

	Article: Q196286
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbfile kbtophit kbAppSetup kbVBp kbVBp400 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Vb4Run.exe is a self-extracting file that contains the run-time engine(s) for
	both the Microsoft Visual Basic 4.0 16-bit and 32-bit versions.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Vb4Run.exe
	  (http://download.microsoft.com/download/vb40ent/Sample27/1/W9XNT4/EN-US/Vb4Run.exe)
	
	Release Date: NOV-25-1998
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	   File Name               Size
	   -------------------------------
	   Vb40016.dll              913KB
	   Vb40032.dll              705KB
	
	Copy these files into the Windows\System directory on the computer where the
	Microsoft Visual Basic 4.0 applications will be run.
	
	If the proper run-time engine is not installed on a system, the following errors
	occur when you try to run a Microsoft Visual Basic 4.0 application:
	
	Windows 95 or Windows 98
	------------------------
	
	  Cannot find VB40016.DLL. Windows needs this file to run
	  C:\Project1.exe
	
	  -or-
	
	  Cannot find VB40032.DLL. Windows needs this file to run
	  C:\Project1.exe
	
	Windows NT
	----------
	
	  Cannot find VB40016.DLL
	
	  -or-
	
	  Cannot find VB40032.DLL
	
	After clicking the OK button, the follow error displays:
	
	  Cannot find file C:\Project1.exe (or one of its components). Check
	  to ensure the path and filename are correct and that all required
	  libraries are available.
	
	NOTE: The filename that appears in the error message will be application
	specific.
	
	Vb40016.dll is the run-time engine used by applications developed in Microsoft
	Visual Basic version 4.0 16-bit.
	
	Vb40032.dll is the run-time engine used by applications developed in Microsoft
	Visual Basic version 4.0 32-bit.
	
	In order to successfully run Visual Basic 4.0 applications, one of the preceding
	run-time files must be installed.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q196285 FILE: VB3Run.exe Run-Time .dll for Visual Basic 3.0 Apps
	
	Additional query words: Vb4Run
	
	======================================================================
	Keywords          : kbfile kbtophit kbAppSetup kbVBp kbVBp400 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
