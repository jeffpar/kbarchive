---
layout: page
title: "Q280513: PRB: VB6 App Has Run-Time Error 3633 When Run on New Computer"
permalink: kb/280/Q280513/
---

## Q280513: PRB: VB6 App Has Run-Time Error 3633 When Run on New Computer

	Article: Q280513
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDeployment kbGrpDSVBDB kbGrpDSMDAC kbDSupport
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build setup disks for a Microsoft Jet-based database application with
	the Package and Deployment Wizard (PDW), the Package and Deployment Wizard does
	not include the Microsoft Jet database engine files. When you install the
	application and try to run it, you get the following error message:
	
	  Run-time error '3633'
	
	CAUSE
	=====
	
	The Package and Deployment Wizard does not know to add the Microsoft Jet 4.0
	database engine if you are using the Microsoft DAO 3.6 Object Library.
	
	RESOLUTION
	==========
	
	Add the MDAC_TYP.EXE to your setup package.
	
	NOTE: MDAC 2.6 and later no longer include the Jet engine. If you are using MDAC
	2.6 or higher, you need to use the Jet redistribution pack.
	
	For more information about downloading the Jet redistribution for use with your
	application, see the following Microsoft Web site at:
	
	  http://www.microsoft.com/data
	
	MORE INFORMATION
	================
	
	This problem does not occur on Windows 2000-based computers or computers that
	have Microsoft Office 2000 installed. To reproduce the problem, install the
	following application that is created on a clean installation of Microsoft
	Windows 98, Microsoft Windows 95. or Microsoft Windows NT 4.0 SP3.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new application and add a reference to the Microsoft DAO 3.6 Object
	  Library.
	
	2. Create setup disks by using the Package and Deployment Wizard.
	
	3. Install the application on a new computer that does not already have Jet
	  installed.
	
	4. Run the application, and note that you receive the error message.
	
	5. Repeat the preceding steps, but add a reference to the Microsoft DAO 3.5
	  Object Library. Note that the application runs correctly.
	
	REFERENCES
	==========
	
	For more information about Jet 4.0 and DAO 3.6, see the following MSDN Web site
	at:
	
	  http://msdn.microsoft.com
	
	Additional query words: 3633
	
	======================================================================
	Keywords          : kbDeployment kbGrpDSVBDB kbGrpDSMDAC kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
