---
layout: page
title: "Q158471: PRB: 'File not found' When Attempting Command Line Check In"
permalink: /kb/158/Q158471/
---

## Q158471: PRB: 'File not found' When Attempting Command Line Check In

	Article: Q158471
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you check in files from the Command Line, you may receive the message:
	
	  File "<filename>" not found
	
	where <filename> is the name of the file you want to check in. This message
	appears if the following four conditions exist:
	
	1. You changed the working directory for the file prior to checking it out.
	
	2. You did not close the Visual SourceSafe Explorer after changing the working
	  directory.
	
	3. As indicated in your Ss.ini file, your current SourceSafe project is set to
	  the wrong project, not the project that you are attempting to check it into.
	  This setting is saved as:
	
	     ; Your current SourceSafe project.
	     Project = <ProjectName>
	
	4. The FORCE_DIR entry in your Ss.ini file is set to NO.
	
	CAUSE
	=====
	
	When checking in a file, the Visual SourceSafe Command Line examines your Ss.ini
	file to determine the working directory for a given project. When you change the
	working directory in the Visual SourceSafe Explorer, the change is cached in
	memory until the Visual SourceSafe Explorer is closed. This means that the
	Ss.ini will not be updated until you close Visual SourceSafe. Consequently, if
	you change a file's working directory and then check it out, the Visual
	SourceSafe Explorer sees the updated working directory but the Command Line does
	not.
	
	RESOLUTION
	==========
	
	- Check in the file using the Visual SourceSafe Explorer.
	
	- If you change the working directory and intend to use any Command Line
	  functions, close and restart the Visual SourceSafe Explorer.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open your Ss.ini file and verify that the setting FORCE_DIR=NO is present.
	  (If it is not, set it to FORCE_DIR=NO.)
	
	2. Open or switch to Visual SourceSafe Explorer.
	
	3. Select any project and set its working directory to "C:\Test". (If the
	  directory doesn't exist, create it.)
	
	4. Activate $/ as the current project by double-clicking it. Close and restart
	  Visual SourceSafe Explorer.
	
	5. Select the project from step 3 and reset its working directory to "C:\Test2".
	  (If the directory doesn't exist, create it.)
	
	6. Check out a file from the project. It will be checked out to C:\Test2.
	
	7. Minimize Visual SourceSafe and Open a DOS Box. If you are running on a 32-bit
	  operating system, switch to the \Vss\Win32 subdirectory. If you are not,
	  switch to the WIN subdirectory.
	
	8. Type the following command:
	
	     SS CHECKIN $/<projectname/filename>
	
	  where <projectname/filename> is the Visual SourceSafe path and file name
	  of the file checked out in step 6. You get the following message:
	
	  $/<projectname/filename> was checked out from C:\Test2, not from the
	  current directory. Continue anyway?(Y/N)
	
	  N cancels the Check-In. Y prompts the following message:
	
	  File "C:\Test1\<filename>" not found
	
	  where <filename> is the name of the file checked out in step 6.
	
	NOTE: If you repeat these steps with the Ss.ini file set to FORCE_DIR=YES, the
	error will not occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	
