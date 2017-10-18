---
layout: page
title: "Q198252: PRB: Installation Error with Setup Wizard in Visual Basic 5.0"
permalink: kb/198/Q198252/
---

## Q198252: PRB: Installation Error with Setup Wizard in Visual Basic 5.0

	Article: Q198252
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500 kbVBp500bug kbGrpDSVB
	Last Modified: 10-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a setup program for your Visual Basic application using the setup
	wizard in Visual Basic 5.0 and then install it on a target computer, which uses
	either Windows NT 4.0 SP3, Windows NT 4.0 SP4, or Windows 95 as the operating
	system, the following errors may occur:
	
	  The ordinal 401 could not be located in the dynamic link library
	  OLEAUT32.dll.
	
	  -or-
	
	  Invalid procedure call or argument, An unexpected setup error has occurred!
	
	CAUSE
	=====
	
	There is a version mismatch with the Msvbvm50.dll file. The following version of
	the Msvbvm50.dll file causes this error:
	
	  File Name        Date         Version       Size
	  -----------------------------------------------------
	  Msvbvm50.dll     11/18/97     6.0.73.22     1340688
	
	This version of the Msvbvm50.dll file ships with the following book by Sybex:
	
	  MCSD: SQL Server 6.5 Database Design Study Guide
	  By Kevin Hough
	  ISBN: 0-7821-2269-8
	
	The Sybex software contains a non-release beta version of the Visual Basic
	run-time DLL, Msvbvm50.dll (version 6.00.73.22). Because the version number is
	higher than any other released versions of the Msvbvm50.dll file, it will
	replace any existing Msvbvm50.dll file on the target computer.
	
	RESOLUTION
	==========
	
	1. Unregister the Msvbvm50.dll file and remove it on both the development
	  computer and the target computer.
	
	  To unregister the Msvbvm50.dll file, use the Regsvr32.exe utility. The
	  Msvbvm50.dll file resides in the Windows system directory. For example, on
	  Windows NT enter the following line using the Start/Run menu option:
	
	  regsvr32 /u C:\WINNT\SYSTEM32\MSVBVM50.DLL
	
	  When the Msvbvm50.dll file is successfully unregistered, delete or rename it
	  from the Windows system directory.
	
	2. Download the Msvbvm50.exe file from the Microsoft Web site as specified in
	  the following Microsoft Knowledge Base article:
	
	  Q180071 : FILE: Msvbvm50.exe Installs Visual Basic 5.0 Run-Time Files
	
	3. Run the Msvbvm50.exe file on the development computer.
	
	4. Recreate the setup program for your application.
	
	REFERENCES
	==========
	
	For more information on problems relating to this version of the Msvbvm50.dll
	file, please see the following article in the Microsoft Knowledge Base:
	
	  Q193358 PRB: Books Online Causes an IPF at 00DE:00000003
	
	For more information about downloading Microsoft Support files, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp500 kbVBp500bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
