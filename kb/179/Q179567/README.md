---
layout: page
title: "Q179567: ODE97: Setup Wizard Template Files Updater Available"
permalink: kb/179/Q179567/
---

## Q179567: ODE97: Setup Wizard Template Files Updater Available

	Article: Q179567
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfile kbdta kbgraphxlinkcritical
	Last Modified: 02-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Mdtupdtr.exe download file includes a database and associated support files
	that will update the Microsoft Office Developer Tools Setup Wizard templates
	with fixes to the following problems:
	
	- When you run the Setup Wizard for your custom application on a Windows 95
	  computer that is running Microsoft Internet Explorer version 4.0, and then
	  you install your application on a computer that does not have Microsoft
	  Internet Explorer version 4.0 installed, you may receive the error message
	  that "Comcat.dll was unable to register itself in the system registry" and
	  setup is not completed successfully.
	
	  Q174217 ODE97: Comcat.dll Can't Be Registered During Run-time Install
	
	- When you use the Setup Wizard in Microsoft Office 97 Developer Edition Tools
	  to create disk images on a computer that is running Microsoft Internet
	  Explorer version 4.0, and then you use the disk images to install the
	  application on a computer running Microsoft Internet Explorer 3.x, Microsoft
	  Internet Explorer 3.x no longer works. When started, Microsoft Internet
	  Explorer 3.x does not display pages correctly.
	
	  Q174508 ODE: Installing Run-Time Application Breaks IE 3.x
	
	- When you use the Setup Wizard in Microsoft Office 97 Developer Edition Tools
	  to create disk images on a computer that has the Microsoft Data Access
	  Components version 2.1 (MDAC 2.1) or later installed, and you include the
	  ODBC Support for SQL Server component, you will receive an error when you
	  install your application to a computer that does not have MDAC 2.1 or later
	  installed.
	
	  Q234645 ODE97: SQL Config Driver Failed for Driver SQL Server Error during
	  install of ODE application
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Download Mdtupdtr.exe now
	  (http://download.microsoft.com/download/office97dev/Utility/1/WIN98/EN-US/MDTUPDTR.EXE)
	
	The Mdtupdtr.exe file contains the following files:
	
	  
	  +------------------------------------------------------+
	  | Mdtupdtr.mde     | ODE Setup Wizard Template Updater | 
	  +------------------------------------------------------+
	  | Readme.txt       | Readme file                       | 
	  +------------------------------------------------------+
	  | Supporting Files | Listed Below                      | 
	  +------------------------------------------------------+
	
	Supporting Files:
	
	  
	  +-----------------------------+
	  | ODBCJI32.DLL | ODBCJT32.DLL | 
	  +-----------------------------+
	  | ODBCJTNW.HLP | ODBCJET.HLP  | 
	  +-----------------------------+
	  | ODBCKEY.INF  | ODBCSTF.DLL  | 
	  +-----------------------------+
	  | MSCPXL32.DLL | 12520437.CPX | 
	  +-----------------------------+
	  | 12520850.CPX | ODBCAD32.EXE | 
	  +-----------------------------+
	  | ODBCCP32.DLL | ODBCCP32.CPL | 
	  +-----------------------------+
	  | ODBCCR32.DLL | ODBCINST.HLP | 
	  +-----------------------------+
	  | ODBC16GT.DLL | ODBC32GT.DLL | 
	  +-----------------------------+
	  | DS16GT.DLL   | DS32GT.DLL   | 
	  +-----------------------------+
	  | SQLSRV32.DLL | DBNMPNTW.DLL | 
	  +-----------------------------+
	  | DRVSSRVR.HLP | ODBC32.DLL   | 
	  +-----------------------------+
	  | ODBCINT.DLL  | ODBCTRAC.DLL | 
	  +-----------------------------+
	  | ODBCTL32.DLL | COMCAT.DLL   | 
	  +-----------------------------+
	  | WININET.DLL  | URLMON.DLL   | 
	  +-----------------------------+
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: problems with custom applications apps Mdtupdtr exe mde
	
	======================================================================
	Keywords          : kbfile kbdta kbgraphxlinkcritical 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
