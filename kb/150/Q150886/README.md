---
layout: page
title: "Q150886: Unsup.exe Finds Commands Not Supported by ODBC Drivers"
permalink: /kb/150/Q150886/
---

## Q150886: Unsup.exe Finds Commands Not Supported by ODBC Drivers

{% raw %}

	Article: Q150886
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.0,2.5,2.6
	Operating System(s): 
	Keyword(s): kbfile kbGrpDSMDAC kbDSupport kbMDAC250 kbGrpDSODBC kbMDAC260
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro (Build 6.00.8281.00), version 1.0 
	- Microsoft Data Access Components versions 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Unsup.exe is a sample that searches a text (.txt) file or program (.prg) file
	for commands that are not supported by the Visual FoxPro ODBC driver version
	1.0.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Unsup.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Utility File Information
	------------------------
	
	The UNSUP utility is written in the Visual FoxPro Xbase language and can be run
	in Visual FoxPro. This utility produces a log file containing the following
	information:
	
	- The line number with the problem.
	
	- The actual line of code that causes a problem.
	
	- The unsupported command that caused the error.
	
	The self-extracting file, Unsup.exe, contains the following files:
	
	  File           Description
	  ----------------------------------------------------------------------
	  Unsup.prg      Utility that finds unsupported commands.
	
	  Unsup.dbf      Table of unsupported commands; it is used by Unsup.prg.
	
	  Tastrade.txt   Copy of Tastrade-stored procedures that demonstrates
	                 utility.
	
	NOTE: ODBC drivers are now part of Microsoft Data Access Components, which can be
	downloaded from the following Web site:
	
	  http://microsoft.com/data (http://microsoft.com/data)
	
	Additional query words: Unsup 1.00 unsupported ODBC DRIVER
	
	======================================================================
	Keywords          : kbfile kbGrpDSMDAC kbDSupport kbMDAC250 kbGrpDSODBC kbMDAC260 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbMDAC260
	Version           : :1.0,2.5,2.6
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
