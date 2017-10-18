---
layout: page
title: "Q189751: INFO: Limitations of the FileSystemObject"
permalink: kb/189/Q189751/
---

## Q189751: INFO: Limitations of the FileSystemObject

	Article: Q189751
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the limitations of the FileSystemObject stored in the
	Microsoft Scripting Runtime file, scrrun.dll. For more information about the
	FileSystemObject, see the appropriate topics in the Visual Basic documentation.
	
	MORE INFORMATION
	================
	
	- Reads only ASCII data - while the FileSystemObject can create an ASCII or
	  Unicode text file, the FileSystemObject can only read ASCII text files.
	
	- Forward reading line-by-line - the FileSystemObject reads a text file in one
	  direction: from the beginning to the end of the text file. Further, the
	  FileSystemObject only reads line-by-line. If you need to go back to a
	  previous line, then you must return to the beginning of the file and read
	  forward to the required line.
	
	- Cannot open a file for simultaneous reading and writing - you can open a file
	  for reading by using the ForReading IOMode parameter of the OpenTextFile
	  method. However, if you want to modify the file, you must reopen the file for
	  appending or writing and then open a textstream object to make your file
	  modifications.
	
	- Cannot search for file names using wildcards - the FileSystemObject can only
	  retrieve a specified file using the GetFile method. You cannot use wildcard
	  characters in the filespec parameter of the GetFile method.
	
	- Cannot return the file version number - the File object in the Files
	  collection of the FileSystemObject can return several file properties.
	  However, there is no version property. Use the GetFileVersionInfo Windows API
	  function to get a file's version information.
	
	- Cannot sort file names from the files collection - you can iterate through
	  the File objects in the Files collection to obtain a list of the files in a
	  folder. However, the File objects are not sorted. You need to use a sort
	  routine to sort the File objects in the Files collection.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q185476 : HOWTO: Search Directories to Find or List Files
	
	  Q185601 : HOWTO: Recursively Search Directories Using FileSystemObject
	
	  Q186118 : HOWTO: Use FileSystemObject with Visual Basic
	
	Additional query words: kbDSupport kbDSD kbVBp500 kbVBp kbNoKeyWord kbCtrl kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
