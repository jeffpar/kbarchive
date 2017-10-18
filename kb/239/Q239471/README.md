---
layout: page
title: "Q239471: Jet 4.0 Text IISAM Allows User to Append Lines to System Files"
permalink: kb/239/Q239471/
---

## Q239471: Jet 4.0 Text IISAM Allows User to Append Lines to System Files

	Article: Q239471
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 03-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 2000 
	- Microsoft Office 2000 (Setup) 
	- Microsoft ODBC Driver for Access, version 4.0 
	-------------------------------------------------------------------------------
	
	
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	This article applies only to a Microsoft Access database (.mdb).
	
	SYMPTOMS
	========
	
	The Text IISAM allows you to manipulate text files without checking the file
	name extension. This creates a potential security risk because it can be used to
	read or write to a system text file.
	
	CAUSE
	=====
	
	The Text IISAM is able to modify the contents of text files that are formatted
	as data tables. This feature makes it easy for you to exchange data on different
	systems.
	
	RESOLUTION
	==========
	
	Install Microsoft Jet 4.0 Service pack (SP3) or later. The following registry
	key is dynamically added when a program loads the Text IISAM. This registry key
	prevents this type of security risk:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Jet\4.0\Engines\Text\DisabledExtensions
	
	For additional information about how to obtain the latest Microsoft Jet 4.0
	Service Pack, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q239114 ACC2000: Updated Version of Microsoft Jet 4.0 Available in Download
	  Center
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	NOTE: Jet40SP3.exe was updated on October 11, 1999. If you previously installed
	this update and would like to use the stricter security control provided in the
	updated Mstext40.dll, run the installed Mstext40.reg file. To run the
	Mstext40.reg file, locate the file on your system and double-click it.
	
	There could be a possible security risk when someone uses the Text IISAM to
	modify any of the system text files, such as Autoexec.bat, Config.sys,
	System.ini, and so on.
	
	After you install the updated version of Jet, you will only be able to use the
	Text IISAM to update text files with the following extensions:
	
	- txt
	- csv
	- tab
	- asc
	- htm
	- html
	
	These are the default extensions that are added to the registry key listed in the
	"Resolution" section. The Value data for the registry key is:
	
	  !txt,csv,tab,asc,htm,html
	
	In the first release of Jet 4.0 SP3, you were not be able to use the Text IISAM
	to update text files with the following extensions:
	
	- bat
	- cmd
	- ini
	- sys
	- inf
	- vbs
	- js
	
	These are the default extensions that were added to the registry key listed in
	the "Resolution" section with the first release of Jet 4.0 SP3. The Value data
	for the registry key was:
	
	  bat,cmd,ini,sys,inf,vbs,js
	
	NOTE: The first release of Jet 4.0 SP3 did not provide the use of an exclamation
	mark (!). When you place an exclamation mark at the beginning of the Value data,
	you can modify only files with the extensions listed. When you do not place an
	exclamation mark at the beginning of the Value data, you cannot modify files
	with the extension listed. With the Jet 4.0 Text IISAM, you cannot set the
	registry key to an empty string. Therefore, if you do not want to block access
	to any system text files, you should set the registry key to a binary file name
	extension. For example, you can use .exe.
	
	NOTE: Microsoft Access users may receive the following error when trying to
	import a text file that is not one of the enabled extensions:
	
	  Can't Update. Database is read-only.
	
	To resolve the error, either rename the file extension to one of the enabled
	extension types or modify the DisabledExtensions registry key using the methods
	in this article.
	
	
	Additional query words: pra
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbZNotKeyword6 kbAccess2000 kbZNotKeyword4 kbOffice2000Search kbAccess2000Search kbODBCSearch kbODBCAccess400 kbZNotKeyword5 kbOffice2000SetupSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
