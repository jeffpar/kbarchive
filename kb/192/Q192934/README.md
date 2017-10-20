---
layout: page
title: "Q192934: PRB: Error &quot;The Jet VBA File...Failed to Initialize When Called&quot;"
permalink: /kb/192/Q192934/
---

## Q192934: PRB: Error &quot;The Jet VBA File...Failed to Initialize When Called&quot;

{% raw %}

	Article: Q192934
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbtophit kbAppSetup kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an application that uses Microsoft DAO, you receive the following
	error message (run-time error 3447):
	
	  The Jet VBA file (VBAJET.dll for 16-bit versions, or VBAJET32.dll for 32-bit
	  versions) failed to initialize when called. Try reinstalling the applications
	  that returned the error.
	
	CAUSE
	=====
	
	The Microsoft DAO or Jet files are mismatched, or one or more of the DAO or Jet
	files is missing.
	
	This error most commonly occurs when you deploy a Visual Basic 5.0 application
	from a development computer that has the Visual Studio 6.0 versions of the DAO
	and Jet files installed. The Jet files that come with the Visual Studio 6.0
	products require an additional file, Expsrv.dll. Because the Vb5dep.ini file
	does not include this file in the dependency information for Jet, the Visual
	Basic 5.0 Setup Wizard does not include Expsrv.dll in the Setup files for your
	application.
	
	RESOLUTION
	==========
	
	Use one of the following resolutions, depending upon your situation.
	
	Expsrv.dll Is Missing from Setup Files
	--------------------------------------
	
	If you are deploying a Visual Basic 5.0 application from a development computer
	that has the Visual Studio 6.0 versions of the DAO and Jet files installed, you
	can work around the problem by adding Expsrv.dll in the File Summary screen of
	the Setup Wizard. However, you might encounter problems distributing other
	updated components.
	
	The safest alternatives are as follows:
	
	- Develop and create setup files for your Visual Basic 5.0 application on a
	  "clean" computer. (See the MORE INFORMATION section later in this article.)
	
	-or-
	
	- Upgrade the application to Visual Basic 6.0 and create the setup files using
	  the Package and Deployment Wizard (PDW).
	
	-or-
	
	- Download and install the latest MDAC components from:
	
	  http://www.microsoft.com/data/
	
	  Then run the setup for your application again.
	
	
	Other DAO or Jet Files Are Missing or Mismatched
	------------------------------------------------
	
	According to the master list of dependency files for Visual Basic 5.0 and 6.0
	(Vb5dep.ini and Vb6dep.ini, respectively), the following files are required for
	DAO and Jet. Check for these files with the appropriate version numbers on the
	computer where the error occurs.
	
	If you distribute an application using a Setup created by the Setup Wizard or
	Package and Deployment Wizard, you also need to check the file Setup.lst to
	verify the appropriate files and file version numbers. Setup.lst is the master
	list of the files that are installed by the application setup. You can find
	Setup.lst in the folder that contains the setup files for your application.
	
	NOTE: All of these files are located in the \Windows\System (or on Windows NT, in
	the \Winnt\System32) folder, except DAO350.dll. The DAO350.dll file can be found
	in the \Program Files\Common Files\Microsoft Shared\DAO folder.
	
	Visual Basic 5.0 Files and Version Numbers::
	
	DAO350.dll     3.50.3602.0
	MSJet35.dll    3.50.3602.4
	MSJInt35.dll   3.50.3602.5  
	MSJtEr35.dll   3.50.3602.0  
	MSRD2x35.dll   3.50.3602.0
	MSRepl35.dll   3.50.3602.0   
	MSVCRT40.dll   4.10.6038 or later
	VB5DB.dll      5.00.3724
	VBAJet32.dll   5.0.7122
	
	Visual Basic 6.0 Files and Version Numbers::
	
	DAO350.dll     3.51.1608.0
	ExpSrv.dll     6.0.8167
	MSJet35.dll    3.51.0623.4
	MSJInt35.dll   3.51.0623.0
	MSJtEr35.dll   3.51.0623.0
	MSRepl35.dll   3.51.0623.0
	MSRD2x35.dll   3.51.0623.0
	MSVCRT40.dll   4.21.0000 or later
	VB5DB.dll      6.00.8169
	VBAJet32.dll   6.1.8167
	
	
	For more information about the files installed for each version of Jet, please
	refer to the following article in the Microsoft Knowledge Base:
	
	Q178880 INFO: Identifying the Jet Database Engine Components
	
	
	If you determine that the version of a file on the system is incorrect, perform
	the following steps to replace it. If you determine that a file is missing, skip
	to step 3.
	
	1. If the file is one that requires registration (MSRD2x35.dll, MSJet35.dll, or
	  DAO350.dll), perform the following steps to unregister it:
	
	  a. On the taskbar, click the Start button, and then click Run.
	
	  b. In the Run dialog, type the following command:
	
	  Regsvr32.exe /u <DLL Name>
	
	     where DLL Name is the name of the DLL file, such as DAO350.dll.
	
	  c. Click OK.
	
	2. Rename the mismatched file.
	
	3. Copy the appropriate version of the mismatched or missing file from the
	  Visual Basic product CD to the computer experiencing the problem.
	
	  NOTE: For Visual Basic 6.0, all the files are located in the OS\System folder
	  on Disk 1.
	
	  For Visual Basic 5.0, all the files, except DAO350.dll, are located in the
	  OS\System folder on the Visual Basic CDs and the VB5.0\OS\System folder on
	  the Visual Studio 97 CDs. DAO350.dll is located in the OS\MSAPPS\DAO folder
	  on the Visual Basic CDs and the VB5.0\OS\MSAPPS\DAO folder on the Visual
	  Studio 97 CDs.
	
	4. If the file is one that requires registration (MSRD2x35.dll, MSJet35.dll, or
	  DAO350.dll), register it using the following steps:
	
	  a. On the taskbar, click Start, and then click Run.
	
	  b. In the Run dialog box, type the following command:
	
	  Regsvr32.exe <DLL Name>
	
	     where DLL Name is the name of the DLL file, such as DAO350.dll.
	
	  c. Click OK.
	
	As an alternative solution, you can run the DAO SDK redistribution setup on the
	target computer that has missing or mismatched DAO or Jet files. The DAO SDK
	redistribution is provided in the DAOSDK\REDIST folder on Disk 1 of Visual
	Studio 6.0 Professional Edition and Disk 3 of Visual Studio 6.0 Enterprise
	Edition. It consists of three folders -- Disk 1, Disk 2, and Disk 3. You can
	either run Setup.exe from the Disk 1 folder on the CD, or you can copy each of
	the folders to a diskette and run Setup.exe from the first diskette.
	
	MORE INFORMATION
	================
	
	If you have multiple versions of Visual Basic or Visual Studio on the same
	computer, it typically does not alter the development environment. However,
	regarding application deployment, multiple versions can cause a Visual Basic
	application to fail to install correctly. This can be caused by newer versions
	of components that exist on the computer and the inability of the installation
	application to correctly determine dependency information or register those
	components. To ensure good distribution of your application, the development
	machine should have only the necessary version of Visual Basic or Visual Studio
	installed.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	Q193270 INFO: Troubleshooting VB Application Installation Issues
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	Q196057 PRB: The Jet VBA File VBAJet32.dll Failed to Initialize
	
	
	Q191735 PRB: The Jet VBA File Failed to Initialize When Called
	
	
	
	Additional query words: distribute deploy
	
	======================================================================
	Keywords          : kbwizard kbtophit kbAppSetup kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
