---
layout: page
title: "Q114834: ADT: Description of the Visual Basic Compatibility Layer"
permalink: /kb/114/Q114834/
---

## Q114834: ADT: Description of the Visual Basic Compatibility Layer

	Article: Q114834
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbfile kbinterop kbgraphxlinkcritical
	Last Modified: 08-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SUMMARY
	=======
	
	Microsoft Visual Basic version 3.0 has the ability to communicate with Microsoft
	Access databases. However, the modules supplied with Visual Basic version 3.0
	can communicate only with Microsoft Access version 1.x-created databases.
	
	For Visual Basic to communicate with Microsoft Access version 2.0-created
	databases, a group of files referred to as the Visual Basic Compatibility Layer
	(VBCL) is required. Some of these files are new, while others replace or modify
	existing files.
	
	You can obtain the VBCL from the following sources:
	
	- The Microsoft Access Developer's Toolkit (ADT) version 2.0
	- The Microsoft Office Developer's Kit (ODK) version 1.0
	- The following file is available for download from the Microsoft Download
	  Center:
	
	  Download Comlyr.exe now
	  (http://download.microsoft.com/download/access20/doc/1/WIN98/EN-US/Comlyr.exe)
	
	  The Comlyr.exe file contains the VBCL.
	
	  For additional information about how to download Microsoft Support files,
	  click the following article number to view the article in the Microsoft
	  Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	  Microsoft scanned this file for viruses. Microsoft used the most current
	  virus-detection software that was available on the date that the file was
	  posted. The file is stored on secure servers that prevent any unauthorized
	  changes to the file.
	
	MORE INFORMATION
	================
	
	The Microsoft Access Developer's Toolkit version 2.0 supplies the VBCL and the
	Microsoft Jet database engine version 2.0, along with numerous other database
	development tools.
	
	The Microsoft Office Developer's Kit version 1.0 contains the VBCL, along with
	other tools to aid in the development of Microsoft Office applications, but does
	not include version 2.0 of the Microsoft Jet database engine. Version 1.1 of the
	Microsoft Jet database engine is included.
	
	To obtain pre-sales information about new or updated Microsoft products, call the
	Microsoft Sales Information Center at (800) 426-9400. If you are outside the
	United States, contact the Microsoft subsidiary for your area. To locate your
	subsidiary, please see the Microsoft World Wide Offices Web Site at:
	
	  http://www.microsoft.com/worldwide/default.htm
	
	VBCL Files
	----------
	
	NOTE: The file locations listed below assume default installation directories.
	
	File          Description                            Location
	----------------------------------------------------------------------
	VBDB300.DLL   VB to Jet DB engine 1.1 Interface DLL  C:\WINDOWS\SYSTEM
	PDCTJET.DLL   Run-time DLL for Crystal Reports       C:\WINDOWS\SYSTEM
	PDIRJET.DLL   Run-time DLL for Crystal Reports       C:\WINDOWS\SYSTEM
	PDBJET.DLL    Run-time DLL for Crystal Reports       C:\WINDOWS\SYSTEM
	CRW.EXE       Crystal Report Designer application    C:\VB\REPORT
	VB.INI        Visual Basic initialization file       C:\WINDOWS
	SETUPWIZ.INI  Setup Wizard initialization file       C:\WINDOWS
	KBINTEROP
	
	Files Needed to Upgrade Visual Basic Version 3.0:
	
	File          Description                            Location
	----------------------------------------------------------------------
	MSAJT200.DLL  Version 2.0 Jet database engine        C:\WINDOWS\SYSTEM
	MSAJT112.DLL  Jet DB engine 2.0/VBCL                 C:\WINDOWS\SYSTEM
	VBDB300.DLL   VB to Jet DB engine Support DLL        C:\WINDOWS\SYSTEM
	BTRV200.DLL   Btrieve ISAM driver library            C:\WINDOWS\SYSTEM
	PDX200.DLL    Paradox ISAM driver library            C:\WINDOWS\SYSTEM
	XBS200.DLL    Microsoft FoxPro ISAM driver library   C:\WINDOWS\SYSTEM
	CRWACC20.EXE  Program that modifies Crystal Reports  C:\VB
	             files to work with Microsoft Access
	             version 2.0 databases
	ACC2COMP.TXT  Readme file for VBCL                   C:\VB
	
	Note that the Microsoft Access 2.0 Service Pack contains a new BTRV200.DLL file
	that corrects three common issues when using Btrieve data with Microsoft
	Access:
	
	1. Performance improved in queries based on multisegmented indexes and indexes
	  based on Type 8 - COBOL Numeric datatype fields
	2. No longer returns incorrect results when a query uses an index based on Type
	  8 - COBOL Numeric dataype fields
	3. No longer returns "Unexpected Error from External Database Driver [7]" error
	  message when using Btrieve 6.x NLM
	
	Additional query words: interoperability mapping Comlyr exe
	
	======================================================================
	Keywords          : kbfile kbinterop kbgraphxlinkcritical 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
