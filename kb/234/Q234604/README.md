---
layout: page
title: "Q234604: Files Not Found Using SCM with Terminal Server"
permalink: /kb/234/Q234604/
---

## Q234604: Files Not Found Using SCM with Terminal Server

	Article: Q234604
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you examine the log file in Security Configuration Manager (SCM), the
	following error message may be displayed in the Analyze File Security section:
	
	  The system cannot find the file specified.
	  Error querying security of <userprofile>\windows\<filename>.
	
	NOTE: This error message may be displayed even if SCM is functioning correctly.
	In this case, the error message contains the actual path to the folder where
	Terminal Server is installed. The error message indicates only that a file
	listed in the .inf file is not present. This may or may not indicate a problem.
	Check to see if the file is present in the location specified.
	
	CAUSE
	=====
	
	This behavior occurs because Terminal Server is in Execution mode (change user
	/execute).
	
	The security template files that SCM uses contain the environment variable
	%SystemRoot% to specify the location of files and the desired NTFS security
	settings for those files. When you use SCM to analyze or configure security
	settings on the system, SCM queries the system for the path for the Windows NT
	folder (%SystemRoot%). Terminal Server returns the <userprofile>\Windows
	folder. Error messages are generated when SCM cannot find the files it is
	looking for in the user's profile folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, put the system into Install mode before using SCM. To do
	this, type the following command at a command prompt:
	
	  "change user /install" (without the quotation marks)
	
	NOTE: Before users log on to the system, make sure you return the system to
	Execute mode. To do this, type the following command at a command prompt:
	
	  "change user /execute" (without the quotation marks)
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q186504 Terminal Server Commands: CHANGE
	
	MORE INFORMATION
	================
	
	For additional information about SCM, including installation and usage
	instructions, refer to the Readme.txt file in the Mssce folder on your Windows
	NT Server 4.0, Terminal Server Edition Service Pack 4 CD-ROM.
	
	The Readme.txt file refers to Security Configuration Manager as Security
	Configuration Editor. These names are interchangeable.
	
	Additional query words: servpack SP4 sce
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
