---
layout: page
title: "Q155317: INFO: File Manipulation Commands Now Support MS-DOS Wildcards"
permalink: kb/155/Q155317/
---

## Q155317: INFO: File Manipulation Commands Now Support MS-DOS Wildcards

	Article: Q155317
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The COPY FILE, ERASE, and DELETE FILE (file manipulation) commands now support
	the use of the MS-DOS wildcard characters.
	
	MORE INFORMATION
	================
	
	MS-DOS uses two characters to represent wildcard characters in file names. The
	question mark (?) allows the substitution of any single character in its place
	in the file name. The asterisk character (*) allows the substitution of several
	characters within a file name. These wildcard characters make the Visual FoxPro
	file manipulation commands more flexible.
	
	For example, the following command creates backup copies of all program files
	with a .prg extension in the current directory or folder:
	
	  COPY FILE *.PRG TO *.BAK
	
	To erase backup files, issue the following command:
	
	  ERASE *.BAK
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
