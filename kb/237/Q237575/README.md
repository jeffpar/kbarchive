---
layout: page
title: "Q237575: ACC2000:Reverting to Access 97 ODBC Driver After Installing MDAC"
permalink: /kb/237/Q237575/
---

## Q237575: ACC2000:Reverting to Access 97 ODBC Driver After Installing MDAC

	Article: Q237575
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2000,97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 29-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 2000 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	
	NOTE: This operation cannot be performed on Windows Me or Windows 2000 because these systems protect against system file manipulation.
	
	SUMMARY
	=======
	
	Installing MDAC version 2.1 or later overwrites the Microsoft Access 97 ODBC
	driver with the Access 2000 ODBC driver without warning. For the reasons
	documented later in this article, you may want to revert to the Access 97 ODBC
	driver. Because both versions of the ODBC drivers have the same DLL name, you
	can only have one or the other installed.
	
	There are two methods to revert to the Access 97 ODBC driver.
	
	1. In Windows or Windows NT explorer, open one of the following folders:
	
	   - If you are running Windows 95/98, open \Windows\SYSTEM.
	   - If you are running Windows NT, open \WINNT\System32.
	
	2. Rename the following files to have the .old file name extension.
	
	  
	  +-------------------------------------------------------+
	  | File name (description)                | Rename to    | 
	  +-------------------------------------------------------+
	  | ODBCJT32.dll (Access 2000 ODBC Driver) | ODBCJT32.old | 
	  +-------------------------------------------------------+
	  | ODBCJI32.dll (Resource DLL)            | ODBCJI32.old | 
	  +-------------------------------------------------------+
	  | Odexl32.dll (Excel)                    | Odexl32.old  | 
	  +-------------------------------------------------------+
	  | Oddbse32.dll (dBase)                   | Oddbse32.old | 
	  +-------------------------------------------------------+
	  | Odpdx32.dll (Paradox)                  | Odpdx32.old  | 
	  +-------------------------------------------------------+
	  | Odtext32.dll (Text)                    | Odtext32.old | 
	  +-------------------------------------------------------+
	  | Odfox32.dll (FoxPro)                   | Odfox32.old  | 
	  +-------------------------------------------------------+
	
	3. To restore most of the ODBC files, re-install Office 97 or Access 97. Leave
	  your CD in the drive.
	
	4. To re-install the remaining ODBC drivers, on the Start menu, click Run, and
	  then type the following command line:
	
	  <CD drive>\Valupack\Dataacc\Dataacc.exe
	
	Reasons for Reverting to the Access 97 ODBC Driver::
	
	- You are unable to import or export from Outlook 97 to the Access 97 format.
	
	- You have a third-party application that requires the Access 97 ODBC driver
	  for design or performance considerations.
	
	- You are unable to update dBASE or Paradox files accessed via the Access 2000
	  ODBC driver.
	
	- You receive this error message:
	
	  Unrecognized database format '<path>\<filename>'.
	
	NOTE:The information used in this article should only be used as a temporary
	emergency measure in a controlled environment. The changes described in this
	article will break applications which require the new Microsoft Access ODBC
	drivers. The changes in this article will be undone if MDAC is upgraded in the
	future, either by applying a service pack or installing a new application.
	
	The following articles provide a more long term solution which will not affect
	applications requiring the newer ODBC drivers:
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q244040 HOWTO: Have Your ODBC Jet 3.5 and 4.0 Applications Co-exist
	
	  Q247440 HOWTO: Rename the Jet 3.51 ODBC Drivers Under Windows 2000
	
	Applications should be migrated to these solutions as soon as possible.
	
	Additional query words: inf OL97 OL98 go back return uninstall reinstall remove original replace
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbAccessSearch kbAccess2000 kbAccess97 kbAccess2000Search kbAccess97Search
	Version           : :2000,97
	Issue type        : kbhowto
	
	=============================================================================
	
