---
layout: page
title: "Q128766: ADT2: Installing ADT Application on Workstation Causes Error"
permalink: /kb/128/Q128766/
---

## Q128766: ADT2: Installing ADT Application on Workstation Causes Error

	Article: Q128766
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you install a custom application created with the Microsoft Access
	Developer's Toolkit (ADT) on a workstation, you may receive the following error
	message:
	
	  An error has occurred at changing workgroup database.
	
	CAUSE
	=====
	
	Another user is using the system database (SYSTEM.MDA) for the custom
	application.
	
	Each time the custom application is set up on a workstation, the Setup program
	tries to create the shared system database on the network server.
	
	If one user is running the application and a second user tries to install it,
	Setup cannot recreate the SYSTEM.MDA file, and the second user receives the
	error message.
	
	STATUS
	======
	
	This behavior no longer occurs in Microsoft Access for Windows 95 version 7.0.
	
	RESOLUTION
	==========
	
	You can prevent Setup from creating the SYSTEM.MDA file after the first
	workstation installation is completed by modifying the SETUP.STF file on the
	network server as follows:
	
	
	1. Make a backup copy of the SETUP.STF file located in the shared directory of
	  the administrator's installation on the network server, and name the backup
	  copy SETUPSTF.BAK.
	
	2. Open the SETUP.STF file on the network server using an application (such as
	  Microsoft Excel) that supports a delimited-text file format.
	
	3. In first column of the SETUP.STF file, scroll down to the row that contains
	  ObjID. Note that the ObjID row contains column headings. Three of these
	  column headings (ObjID [column 1], Title [column 3], and Object Data [column
	  6]) are referenced in steps 4 through 10.
	
	4. In the ObjID row, go to the Title column (column 3).
	
	5. In the Title column, scroll down to the row that contains "Create
	  SYSTEM.MDA." This row is usually located near the bottom of the SETUP.STF
	  file.
	
	6. In the Create SYSTEM.MDA row, go to the ObjID column (column 1), and write
	  down the ObjID value.
	
	7. Go to the Title column (column 3), and scroll to the row that contains "User
	  Non File Work."
	
	8. In the User Non File Work row, go to the Object Data column (column 6), and
	  delete the ObjID value that you wrote down in step 6.
	
	9. Go to the Title column (column 3), and scroll up to the row that contains
	  "&Complete." This row is usually located near the top of the SETUP.STF
	  file.
	
	10. In the &Complete row, go to Object Data column (column 6), and add the
	  ObjID value that you wrote down in step 6.
	
	11. Save the SETUP.STF file as a delimited-text file.
	
	REFERENCES
	==========
	
	For more information about modifying the SETUP.STF file for multiuser
	applications, see the topic "Setting Up Shared Applications on a Network" in the
	README.TXT file located in the Microsoft Access\ADT subdirectory.
	
	For more information about installing Microsoft Access to a network server, see
	the topic "Network Installation" in the ACREADME.HLP file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
