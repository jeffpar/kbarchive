---
layout: page
title: "Q151354: Sslogin Utility to Validate User Name and Password"
permalink: kb/151/Q151354/
---

## Q151354: Sslogin Utility to Validate User Name and Password

	Article: Q151354
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbSSafe400 kbSSafe500
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sslogin.exe is a utility that allows you to validate a user name and password
	when using the Visual SourceSafe Command Line.
	
	The following files are included in the file Sslogin.exe:
	
	  Readme.doc
	  Sslog16.dll -- 16-bit DLL
	  Sslogin.dll -- 32-bit DLL
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Sslogin.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	If an invalid password or user name is passed to the Command Line, Visual
	SourceSafe does not return an error message that can be detected. The Command
	Line prompts the user to enter a new password. This causes a problem when the
	Command is included in an application because the control does not return to the
	file, and the process does not complete. The Sslogin DLL allows you to check the
	user name before calling the Command Line functions. Once the user name and
	password are validated, then the programmer may call the Command Line.
	
	The Sslogin.dll takes three parameters:
	
	  Username (case insensitive)
	  Password (case insensitive)
	  Path to the UM.DAT file
	
	The DLL returns an integer value representing the success or failure of the
	operation.
	
	Additional query words: Logged login
	
	======================================================================
	Keywords          : kbfile kbsample kbSSafe400 kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
