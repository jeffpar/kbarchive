---
layout: page
title: "Q285104: PRB: SSARC.exe with the -X Switch Does Not Recurse Through Delet"
permalink: /kb/285/Q285104/
---

## Q285104: PRB: SSARC.exe with the -X Switch Does Not Recurse Through Delet

	Article: Q285104
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0,6.0c
	Operating System(s): 
	Keyword(s): kbCommandLine kbDSupport kbGrpDSSSafe
	Last Modified: 18-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 5.0, 6.0, 6.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SSARC.exe utility with the -x command-line switch to archive a
	project from Visual SourceSafe, files that have been deleted but not destroyed
	are not archived unless you explicitly reference the deleted files in the
	command-line command.
	
	RESOLUTION
	==========
	
	To work around this behavior, always reference the file to archive in the
	command-line command explicitly. If there are multiple deleted files in a
	project, reference each file in the command-line command.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a project named $/ProjectA in Visual SourceSafe.
	
	2. Add three blank text files to the project, and then name the text files
	  A.txt, B.txt, C.txt.
	
	3. Delete but do not destroy the A.txt file.
	
	4. From the VSS/Win32 directory, type the following command at a command
	  prompt:
	
	  "ssarc $/projecta -x" (without the quotation marks)
	
	  Notice that the A.txt file is not archived and that you receive the following
	  error message:
	
	  File or project not found
	
	5. To work around this behavior, type the following command at a command prompt:
	
	  "ssarc $/projecta/a.txt -x" (without the quotation marks)
	
	Additional query words: ss archive recurse recursive -x flag option
	
	======================================================================
	Keywords          : kbCommandLine kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500 kbSSafe32bitSearch
	Version           : :5.0,6.0,6.0c
	Issue type        : kbprb
	
	=============================================================================
	
