---
layout: page
title: "Q160243: HOWTO: Create Log File for Distributed Setup"
permalink: kb/160/Q160243/
---

## Q160243: HOWTO: Create Log File for Distributed Setup

	Article: Q160243
	Product(s): Microsoft FoxPro
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbvfp300 kbvfp500 kbvfp600
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Setup.exe can create a log file when you run it. This assists in troubleshooting
	setup problems with distributed applications.
	
	MORE INFORMATION
	================
	
	To tell Setup.exe to create a log file, follow these steps:
	
	1. In a text editor, modify the file Setup.1st.
	
	2. If you are running on Windows 95 go to the [Windows 95 Params] section
	  heading. If you are running on Windows NT 3.51 or higher go to the [NT3.51
	  Intel Params] section.
	
	3. Under your section modify the line:
	
	        CmdLine     = acmsetup /T setup.stf /S %s %s
	
	  To read:
	
	        CmdLine     = acmsetup /T setup.stf /S %s %s /G "LOG.TXT"
	
	  NOTE: In Visual FoxPro 5.0, the Windows NT section already has the /G
	  "LOG.TXT" switch added. However, this not already added in Visual FoxPro 6.0.
	
	4. Save and Close the file.
	
	5. When you run Setup.exe, Log.txt appears in the temp directory. This file
	  contains information about each step of the setup program and tells you
	  whether or not it was successful.
	
	REFERENCES
	==========
	
	For more information about what switches exist for the setup application, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q137391 OFF7: Setup Switches for Office 7.0
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
