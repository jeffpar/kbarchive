---
layout: page
title: "Q222130: PRB: Short Filename Autogeneration fails on WIn95 and Win95"
permalink: kb/222/Q222130/
---

## Q222130: PRB: Short Filename Autogeneration fails on WIn95 and Win95

	Article: Q222130
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbOSWin95 kbDSupport
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a file or directory with a short (8.3) path is renamed to a long file name
	with the same extension, and the first 8 characters of the long path are the
	same as the 8 characters of the short path, the short path is not updated. For
	example, if you create a file named "filename", rename the file "filename1", the
	long path is now "filename1", but the short path, which should be changed to
	something similar to "filena~1", remains as "filename".
	
	CAUSE
	=====
	
	This is due to a problem in Windows 95 original release and Windows 95 SR1.
	
	RESOLUTION
	==========
	
	To work around this problem, either rename the file/path to one that does not
	have the same first 8 characters, or to one that has a long path extension, for
	example, ".temp." This method causes the short filename to be regenerated
	correctly. To see this behavior in the example show in the "Symptoms" section,
	create a directory named "pathname", type "ren pathname pathname.temp", and then
	type "ren pathname.temp pathname1". The long and short filenames will be
	generated properly.
	
	The following is sample code for a console application that renames the file
	through a unique temporary filename:
	
	  #include "stdafx.h"
	
	  #include <windows.h>
	  #include <winbase.h>
	  #include <stdlib.h>
	
	  int main(int argc, char* argv[])
	  {
	
	  	if (argc != 3) return 1; // Make sure we have source and destination paths.
	
	  	// Allocate and initialize storage.
	  	char szTempName[MAX_PATH], szTempPath[MAX_PATH];
	  	char * szOldName = argv[1];
	  	char * szNewName = argv[2];
	  	char szPrefix[2];
	  	char szDrive[MAX_PATH], szDir[MAX_PATH], szFname[MAX_PATH],
	  		szExt[MAX_PATH];
	  	ZeroMemory(szTempName, sizeof(szTempName));
	  	ZeroMemory(szTempPath, sizeof(szTempPath));
	  	ZeroMemory(szPrefix,sizeof(szPrefix));
	
	  	// Construct our necessary paths.
	  	_splitpath(szOldName, szDrive, szDir, szFname, szExt);
	  	strcpy(szTempPath, szDrive);
	  	strcat(szTempPath, szDir);
	  	
	  	// Create a filename that is different from the source filename by
	  	// generating a prefix string with a different first character.
	  	if (szFname[0] == 'Z')
	  		szPrefix[0] = 'A';
	  	else szPrefix[0] = 'Z';
	
	  	// Create a unique filename in the same directory.
	  	GetTempFileName(szTempPath, szPrefix, 0, szTempName);
	  	remove(szTempName); // GetTempFileName created this file--we need to nuke it.
	  	rename(szOldName, szTempName); // Do the first rename.
	  	rename(szTempName, szNewName); // Do the second rename.
	
	  	// All is well
	  	return 0;
	  }
	
	STATUS
	======
	
	This problem was corrected in Windows 95 OSR 2.0 and later releases.
	
	MORE INFORMATION
	================
	
	A common manifestation of this problem is to get the error "file already exists"
	when you try to replace a renamed file. For example, in the example show in the
	"Symptoms" section, where "filename" is changed to "filename1", if you attempt
	to rename a third file to "filename", you will receive the following error
	message:
	
	  file already exists
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. On Windows 95 gold-based computer or Windows 95 SR1-based computer, type "md
	  pathname" (without the quotation marks) in a DOS window.
	
	2. Type "dir" (without the quotation marks) to display the new directory named
	  "pathname".
	
	3. Type "ren pathname pathname1" (without the quotation marks).
	
	4. Type "dir" (without the quotation marks) to display a directory with the
	  short name "pathname" and a long path of "pathname1".
	
	  Windows 95 OSR2, Microsoft Windows 98, and Microsoft Windows NT 4.0 and later
	  will change the short path to "pathna~1".
	
	The same behavior is observed if the file or directory is renamed
	programmatically by using any of the file manipulation functions or C Runtime
	Library (CRTL) functions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin95 kbDSupport 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
