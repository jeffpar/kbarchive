---
layout: page
title: "Q138817: FIX: ODBC SDK May Overwrite Latest Version of Msvcrt20.dll"
permalink: /kb/138/Q138817/
---

## Q138817: FIX: ODBC SDK May Overwrite Latest Version of Msvcrt20.dll

	Article: Q138817
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbDatabase kbODBCkbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Visual Basic 4.0 is already installed before you install the ODBC SDK, Visual
	Basic fails to start and gives this error message:
	
	  The procedure entry point _adjust_fdiv could not be located in the dynamic
	  link library Msvcrt20.dll
	
	CAUSE
	=====
	
	The ODBC SDK versions 2.10a and earlier fail to check versions on the file
	Msvcrt20.dll. It will blindly copy over any previously existing copy of the .dll
	file. In this case, the ODBC SDK is copying Msvcrt20.dll version 2.00.000 over
	the Msvcrt20.dll version 2.10.000 that comes with Visual Basic 4.0. Because
	compiled applications use Msvcrt20.dll (it is a dependency of Vb40032.dll), this
	problem may also affect compiled applications on computers that do not have the
	Visual Basic 4.0 32-bit development environment installed.
	
	The ODBC SDK also overwrites the Mfc300.dll file, but this file isn't included
	with Visual Basic.
	
	RESOLUTION
	==========
	
	Extract the newer version of the Msvcrt20.dll from your original Visual Basic
	floppy disks or compact disc, and copy it over the old version installed by the
	ODBC SDK. The extract.exe program (a new version of which comes with Visual
	Basic) can be run using the following line to extract the file to the directory
	you specify (replace the path after the '/l' switch):
	
	     extract /e /l c:\temp vb4-1.cab msvcrt20.dll
	
	For more information on Extract.exe, type 'extract /?' at the command prompt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in versions of the ODBC SDK earlier
	than 2.10b. This problem was correct in version 2.10b and later.
	
	Additional query words: 4.00 vb4win vb4all fixlist2.10b buglist2.10a
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
