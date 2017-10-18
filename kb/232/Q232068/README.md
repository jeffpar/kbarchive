---
layout: page
title: "Q232068: HOW TO: Download, Install, and Remove IIS MetaEdit 2.2 Utility"
permalink: kb/232/Q232068/
---

## Q232068: HOW TO: Download, Install, and Remove IIS MetaEdit 2.2 Utility

	Article: Q232068
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbfile kbHOWTOmaster
	Last Modified: 20-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Warnings
	
	- Download the Utility
	- Install the Utility
	- Remove the Utility
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article explains how to download, install, and remove MetaEdit
	2.2. The MtaEdt22.exe file is a downloadable, self-extracting file that contains
	the IIS MetaEdit 2.2 utility. The MetaEdit 2.2 utility is used to help to
	troubleshoot issues and to modify IIS metabase values.
	
	Warnings
	--------
	
	- Microsoft provides this utility "as-is," without the warranty either
	  expressed or implied, including, but not limited to, the implied warranties
	  of merchantability and or fitness for a particular purpose. This article
	  assumes that you are familiar with the IIS metabase and the tools that are
	  used to back up and to restore the metabase. Microsoft support professionals
	  can only help explain the functionality of the IIS snap-in for the Microsoft
	  Management Console (MMC).
	
	- Using the MetaEdit utility incorrectly causes serious problems that require
	  you to re-install IIS or your operating system. Microsoft cannot guarantee
	  that problems that result from the incorrect use of the MetaEdit utility can
	  be solved. Use MetaEdit at your own risk.
	
	- For information about how to edit the IIS metabase, view the Help topics in
	  MetaEdit.
	
	  NOTE: Always back up the metabase by using the IIS snap-in for the MMC before
	  you edit the metabase. Verify that the backup copy can be restored if a
	  problem occurs. For more information, view the "Configuration Backup/Restore"
	  Help topic in the MMC.
	
	Download the Utility
	--------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload MtaEdt22.exe now
	  (http://download.microsoft.com/download/iis50/Utility/5.0/NT45/EN-US/MtaEdt22.exe)
	
	Release Date: March 1, 2001
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	To download this utility, click the link, and then click Save to save the
	MtaEdt22.exe utility to a folder of your choice on drive C.
	
	Install the Utility
	-------------------
	
	NOTE: Microsoft Product Support Services does not support the installation or use
	of this tool. It is provided "as-is" to help IIS users. (See the Warnings
	section in this article.)
	
	1. Open a command prompt and change to the directory where you downloaded and
	  saved the utility.
	
	2. Double click MtaEdt22.exe to run and extract the files it contains.
	
	3. Click Yes if you agree with the terms of the license agreement. The
	  installation routine extracts the files contained in the MtaEdt22.exe file,
	  and then runs an extracted Setup.exe file to install MetaEdit 2.2.
	
	4. When the main setup routine begins, accept the default installation directory
	  or select another directory, and then click the large setup button to
	  continue.
	
	5. Select the program group where you want to add the MetaEdit 2.2 icon or
	  accept the default, and then click OK.
	
	6. Click Continue when the installation has completed.
	
	Remove the Utility
	------------------
	
	1. Click Start, click Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click to select MetaEdit 2.2 (x86), and then click Change/Remove.
	
	4. When you are prompted to completely remove MetaEdit 2.2 (x86), click Yes.
	
	5. When the Add/Remove Programs tool has completed removing the application,
	  click OK.
	
	REFERENCES
	==========
	
	For additional information about MetaEdit and Adsutil, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q240225 Description of Adsutil and MetaEdit Utilities Used to Modify the
	  Metabase
	
	Additional query words: kbfile uninstaller meta-edit meta-base regedit regedt
	
	======================================================================
	Keywords          : kbfile kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
