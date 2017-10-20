---
layout: page
title: "Q321485: How to Verify VSS User Name and Password from a Command Prompt"
permalink: /kb/321/Q321485/
---

## Q321485: How to Verify VSS User Name and Password from a Command Prompt

{% raw %}

	Article: Q321485
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows 6.0 
	- Microsoft Visual SourceSafe 6.0c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Ssidchk.exe command-line utility determines whether the user name and the
	password that are specified are valid for the Visual SourceSafe database. This
	information is then forwarded to the user or a batch file (or both).
	
	MORE INFORMATION
	================
	
	Typically, if an invalid user name or password is passed to Ss.exe from a
	command prompt, the user is prompted to type a valid user name or password.
	However, when you script with Ss.exe, the invalid user name or password stops
	the batch file from running.
	
	With the Ssidchk.exe utility, you can validate user names and passwords before
	they are passed to Ss.exe. This can provide the user with the appropriate
	feedback. In Visual SourceSafe version 5.0 or earlier, the Sslogin.exe program,
	which is included with Visual SourceSafe, provides this functionality.
	
	The Ssidchk.exe utility is a stand-alone, executable file that you do not have to
	install. The utility is designed to work on the Intel x86 platform with
	Microsoft Windows 95, Microsoft Windows 98, Microsoft Windows NT, Microsoft
	Windows 2000, and Microsoft Windows XP.
	
	Download
	--------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Ssidchk.exe now
	
	Release Date: May 23, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Syntax
	------
	
	To use the Ssidchk.exe utility, use the following syntax at a command prompt:
	
	  ssidchk <vss_data_path> <user_name> <password>
	
	For example, run the following command at a command prompt:
	
	  ssidchk f:\vss\data <myusername> <mypassword>
	
	Return Values
	-------------
	
	+-----------------------------------------------+
	| 0    | Valid user name and password           | 
	+-----------------------------------------------+
	| 100  | Valid user name and invalid password   | 
	+-----------------------------------------------+
	| 200  | Invalid user name and invalid password | 
	+-----------------------------------------------+
	| -100 | Unable to read user information        | 
	+-----------------------------------------------+
	
	Sample Script Usage
	-------------------
	
	  @echo off
	  ssidchk data\ MyUsername MyPassword
	  echo.
	  echo.
	
	  if not %ERRORLEVEL% EQU 0 goto FAILURE
	  Echo Valid Username and Password
	  Echo.
	  SS Dir $/ -yMyUsername,MyPassword
	  GOTO ENDSCRIPT
	
	  :FAILURE
	  ECHO Bad Username and/or Password
	  GOTO ENDSCRIPT
	
	  :ENDSCRIPT
	
	Additional query words: SSIDCHK
	
	======================================================================
	Keywords          : kbfile 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe32bitSearch kbSSafe600C
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
