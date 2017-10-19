---
layout: page
title: "Q191881: PRB: DIRECTORY() Fails to See System or Hidden Folder"
permalink: /kb/191/Q191881/
---

## Q191881: PRB: DIRECTORY() Fails to See System or Hidden Folder

	Article: Q191881
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the DIRECTORY() function to check if a specified directory is found
	on disk and the attribute of the directory is set to system and/or hidden, the
	DIRECTORY() function returns .F. even though the directory exists.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This behavior also happens with the GETDIR() function and CD command. The
	GETDIR() function will not display a directory that has hidden and/or system
	attributes. Issuing CD to a directory that has hidden and/or system attributes
	generates the following error:
	
	  Invalid path or filename.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Command window, issue the following command:
	
	        ?DIRECTORY("c:\windows\fonts") && Using your Windows directory path.
	
	RESULT: The DIRECTORY function reported .F.
	
	2. Go into the Windows Explorer and look for the Fonts directory in the Windows
	  directory. The attribute of the directory is set to system.
	
	Additional query words: kbVFp600 kbVFp500 kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
