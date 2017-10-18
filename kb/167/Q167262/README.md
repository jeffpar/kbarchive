---
layout: page
title: "Q167262: PRB: Unable to Open User Login File"
permalink: kb/167/Q167262/
---

## Q167262: PRB: Unable to Open User Login File

	Article: Q167262
	Product(s): Microsoft SourceSafe
	Version(s): 4.0 4.0a 5.0
	Operating System(s): 
	Keyword(s): kbui kbSSafe kbSSExplorer
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual SourceSafe 5.0, the user receives the message:
	
	  Unable to create user login file <LogFile Name>
	
	A similar message occurs in Visual SourceSafe 4.0:
	
	  Access to the file Rights.Dat denied.
	
	CAUSE
	=====
	
	These errors occur because the user does not have Write access to the Visual
	SourceSafe database.
	
	RESOLUTION
	==========
	
	The solution to these problems is to grant the user full rights to the Visual
	SourceSafe directory and all subdirectories.
	
	All Visual SourceSafe users must have the ability to read, write, create and
	erase files in the Visual SourceSafe directory and all subdirectories.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q131022 Required Network Rights for the SourceSafe Directories
	
	  Q149586 INFO: VSS on Windows NT Workstation w/ FAT Partition
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In addition, when you use Windows NT as the server for the Visual SourceSafe
	database you must make sure that the Share and Directory permissions are the
	same. In Windows NT, you grant a user access by giving them permission to access
	a share. You can also control rights to individual directories. If the user has
	full rights to the directory and read-only rights to the share, he/she will get
	the error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui kbSSafe kbSSExplorer 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : 4.0 4.0a 5.0
	Issue type        : kbprb
	
	=============================================================================
	
