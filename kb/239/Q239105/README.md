---
layout: page
title: "Q239105: Jet 3.5 Text ISAM Allows User to Append Lines to System File"
permalink: kb/239/Q239105/
---

## Q239105: Jet 3.5 Text ISAM Allows User to Append Lines to System File

	Article: Q239105
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.5,97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 23-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Office 97 Professional Edition for Windows 
	- Microsoft ODBC Driver for Access, version 3.5 
	-------------------------------------------------------------------------------
	
	
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	The Text ISAM allows you to manipulate text files without checking the file name
	extension. This creates a potential security risk because it can be used to read
	or write to a system text file.
	
	NOTE: Until you add the nonstandard text file extension to the
	HKEY_LOCAL_MACHINE\Software\Microsoft\Jet\3.5\Engines\Text\DisabledExtensions
	registry key, the error that you will receive during export/import operations
	using the updated text ISAM will be:
	
	  Can't Update. Database or object is read-only.
	
	  An error occurred trying to import file.
	  '<FullPath and Filename>'. The file was not imported.
	
	CAUSE
	=====
	
	The Text ISAM is able to modify the contents of text files that are formatted as
	data tables. This feature makes it easy for you to exchange data on different
	systems.
	
	RESOLUTION
	==========
	
	Install the latest update to the Microsoft Jet database engine. The following
	registry key is dynamically added when a program loads the Text ISAM. This
	registry key prevents this type of security risk.
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Jet\3.5\Engines\Text\DisabledExtensions
	
	For additional information about how to obtain the Microsoft Jet 3.51 update,
	please click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q172733 ACC97: Updated Version of Microsoft Jet 3.5 Available on MSL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	NOTE: Jet35sp3.exe was updated on October 11, 1999. If you previously installed
	this update and would like to use the stricter security control provided in the
	updated MSText35.dll run the installed MSText35.REG file. To run the
	Mstext35.reg file, locate the file on your system and double-click it.
	
	There could be a possible security risk when someone uses the Text ISAM to modify
	any of the system text files, such as Autoexec.bat, Config.sys, System.ini, and
	so on.
	
	After you install the updated version of Jet, you will only be able to use the
	Text ISAM to update text files with the following extensions:
	
	- txt
	- csv
	- tab
	- asc
	- htm
	- html
	
	These are the default extensions that are added to the registry key listed in the
	"Resolution" section. The Value data for the registry key is:
	
	  !txt,csv,tab,asc,htm,html
	
	In the first release of Jet 3.5 SP3, you were not be able to use the Text ISAM to
	update text files with the following extensions:
	
	- bat
	- cmd
	- ini
	- sys
	- inf
	- vbs
	- js
	
	These are the default extensions that were added to the registry key listed in
	the "Resolution" section with the first release of Jet 3.5 SP3. The Value data
	for the registry key was:
	
	  bat,cmd,ini,sys,inf,vbs,js
	
	NOTE: The first release of Jet 3.5 SP3 did not provide the use of an exclamation
	mark (!). When you place an exclamation mark at the beginning of the Value data,
	you can modify only files with the extensions listed. When you do not place an
	exclamation mark at the beginning of the Value data, you cannot modify files
	with the extension listed. NOTE: Microsoft Access users may receive the
	following error when trying to import a text file that is not one of the enabled
	extensions:
	
	  Can't Update. Database is read-only.
	
	To resolve the error, either rename the file extension to one of the enabled
	extension types or modify the DisabledExtensions registry key using the methods
	in this article.
	
	
	Additional query words: pra
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbOffice97Search kbODBCSearch kbAccess97Search kbOffice97 kbODBCAccess350
	Version           : WINDOWS:3.5,97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
