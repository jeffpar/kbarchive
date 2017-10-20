---
layout: page
title: "Q185207: PRB: ODBC's SQL Config Driver Failed for Driver SQL Server-setup"
permalink: /kb/185/Q185207/
---

## Q185207: PRB: ODBC's SQL Config Driver Failed for Driver SQL Server-setup

{% raw %}

	Article: Q185207
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Visual Basic 5.0, you may receive the following error message:
	
	  ODBC's SQL config driver failed for driver SQL Server-setup not complete.
	
	This error message occurs during the "Updating System" segment of the Visual
	Basic 5.0 installation.
	
	RESOLUTION
	==========
	
	To workaround this problem:
	
	1. In the Operating System root directory (usually C:\Winnt or C:\Windows)
	  rename the file Odbc.ini to Odbc.old.
	
	2. Re-run the Visual Basic 5.0 setup program.
	
	3. After Visual Basic 5.0 setup is complete (and you have rebooted), rename the
	  Odbc.old file to Odbc.ini.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: set up vb6test
	
	======================================================================
	Keywords          : kbnokeyword kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
