---
layout: page
title: "Q166280: DOC: T-SQL Debugger Server Setup Provides Incorrect Location"
permalink: /kb/166/Q166280/
---

## Q166280: DOC: T-SQL Debugger Server Setup Provides Incorrect Location

{% raw %}

	Article: Q166280
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbnokeyword kbVBp500 kbVBp600
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for setting up Server-Side T-SQL Debugging incorrectly states
	that you can find Sdi_nt4.exe and Readme.txt in the \CliSrv\Tsql\SrvSetup
	directory of your Visual Basic Enterprise installation.
	
	The documentation should that the Readme.txt file can be found in the
	\Tools\Tsql\Srvsetup directory of your Visual Basic Enterprise CD-ROM.
	
	Sdi_nt4.exe is located in the CliSrv\Tsql\SrvSetup directory of your Visual Basic
	Enterprise Edition version 5.0 CD and under the sqdbg_ss\ directory on the
	Visual Basic Enterprise Edition version 6.0 CD Two. For Visual Basic 6.0, run
	the setup.exe found under the sqdbg_ss\ directory. For Visual Basic 5.0, on
	Windows NT 4.0, run the Sdi_nt4.exe setup program.
	
	MORE INFORMATION
	================
	
	Following is the corrected version of the documentation:
	
	Server-Side Setup
	-----------------
	
	With SQL Server version 6.5 and Service Pack 1 installed, you can install and
	register the SQL Debugger interface and Remote Automation component on the
	server. These components are located in the \Tools\Tsql\Srvsetup directory of
	your Visual Basic Enterprise CD-ROM. On Windows NT 4.0, run the setup program
	Sdi_nt4.exe.
	
	NOTE: For set up on Windows NT Server 3.51, you must manually copy and register
	the necessary files. Complete instructions for this process are included in the
	Readme.txt file in the \Tools\Tsql\Srvsetup directory of your Visual Basic
	Enterprise CD-ROM.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Jon Fowler,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbnokeyword kbVBp500 kbVBp600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
