---
layout: page
title: "Q195021: FIX: &quot;Version not found&quot; After Running ssarc -d -v"
permalink: /kb/195/Q195021/
---

## Q195021: FIX: &quot;Version not found&quot; After Running ssarc -d -v

	Article: Q195021
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbSSafe600fix kbSSExplorer
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose Show History on a file that was archived with the -d -v
	switches, you receive the following error:
	
	  Version not found
	
	RESOLUTION
	==========
	
	Use the ss history <path to the file> command from command prompt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Visual SourceSafe 5.x Explorer. This
	bug has been corrected in Visual SourceSafe 6.0
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project and add a file to this project.
	
	2. Create some versions for the file.
	
	3. Branch this file to a new project. Note the version at which you are
	  branching.
	
	4. Delete the original file from Visual SourceSafe.
	
	5. Create some more versions to the new (branched) file.
	
	6. ssarc -d -v# <new file> , making sure that v# is a number greater than
	  the version number at which the file was branched.
	
	7. From Visual SourceSafe Explorer, right-click on the new file and click Show
	  History.
	
	RESULT: The error "Version not found" appears.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q176875 INFO: The Primary Functions of Ssarc.exe and Ssrestor.exe
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbSSafe500bug kbSSafe600fix kbSSExplorer 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
