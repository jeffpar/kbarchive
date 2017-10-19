---
layout: page
title: "Q216149: How to Install ODBC or MDAC on Terminal Server"
permalink: /kb/216/Q216149/
---

## Q216149: How to Install ODBC or MDAC on Terminal Server

	Article: Q216149
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The installation of Microsoft Data Access Components (MDAC) presents special
	challenges when installing on Terminal Server. Also, as the Terminal Service
	Licensing service uses Open Database Connectivity (ODBC), an incorrect
	installation of MDAC renders the service inoperable.
	
	Both programs and system services use ODBC, and some manual steps may have to be
	used to ensure that nonprivileged services can access the components.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The first set of steps is necessary to ensure the MDAC service installation will
	finish. The last steps will ensure that MDAC will run on the terminal server and
	all users will be able to take advantage of the updates.
	
	NOTE: The person performing the installation must be in the local Administrators
	group.
	
	1. Stop all ODBC-dependant services including, but not limited to, Internet
	  Information Services (IIS), Structure Query Language (SQL) Server, SQL Server
	  Enterprise Manager, Terminal Server (TS) licensing service, and ODBC
	  Administrator itself, and so on.
	
	2. Remove all users who are logged on.
	
	3. Create a temporary folder in the System32 folder named "Oldodbc" (or any
	  folder not in the computer's path), and then move the following files into
	  that folder:
	
	  Ds16gt.dll
	  Ds32gt.dll
	  Odbc16gt.dll
	  Odbc32.dll
	  Odbc32gt.dll
	  Odbcad32.exe
	  Odbcconf.dll
	  Odbcconf.exe
	  Odbccp32.cpl
	  Odbccp32.dll
	  Odbccr32.dll
	  Odbcinst.cnt
	  Odbcinst.hlp
	  Odbcint.dll
	
	If a webdata package has ever been installed, then all values need to be removed
	under the following registry key. Do not remove the key. Save the key to a file
	before removing the values.
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Setup\ExceptionComponents
	
	
	4. At a command prompt, type "change user /install" (without the quotation
	  marks), and then close the command window.
	
	5. Now you are ready to start the installation. Download MDAC from the following
	  Microsoft Web site and install it with the "complete" option:
	
	  http://www.microsoft.com/data
	
	IMPORTANT: Before closing the Setup screen or restarting, you must run the
	program compatibility script, Odbc.cmd, which is located in the following
	folder:
	
	  <SystemRoot>\Application Compatibility Scripts\Install
	
	6. Shutdown and restart the computer. This will automatically return the
	  computer to Execute mode.
	
	NOTE: Once you have verified that MDAC has installed properly, you may delete the
	folder created in Step 3 and all of its contents.
	
	Access to some components located in <Systemroot>\System32 is limited to
	the person who performed the installation, the Administrator group, and System.
	The generic Everyone group needs Read and Execute rights to the following ODBC
	files. The current rights on these files will vary depending on the version of
	MDAC that is installed.
	
	  Msvcirt.dll
	  Msvcrt.dll
	  Odbc32.dll
	  Odbc32gt.dll
	  Odbccp32.cpl
	  Odbccp32.dll
	  Odbccr32.dll
	  Odbccu32.dll
	  Odbcint.dll
	  Odbcjet.*
	  Odbcji32.dll
	  Odbcjt32.dll
	  Odbctl32.dll
	
	NOTE: If you are installing MDAC 2.6 and higher, the Jet 4.0 database also needs
	to be installed for Terminal Server to operate properly. This is a separate
	installation from MDAC. This is not needed for MDAC 2.6 or earlier. You can
	download the Jet 4.0 Service Pack 3 Release from the following Microsoft Web
	site:
	
	  http://www.microsoft.com/data/download.htm#Jet4SP3info
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q216159 Dr Watson Starting TS License Service with Error 3221487623
	
	  Q232060 HOWTO: MDAC Setup Troubleshooting Guide
	
	  Q307255 INFO: Component Checker: Diagnose Problems and Reconfigure MDAC
	
	  Q243069 INFO: List of Useful MDAC Setup Related Articles
	
	
	Additional query words: com dcom sdk mdac odbc
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
