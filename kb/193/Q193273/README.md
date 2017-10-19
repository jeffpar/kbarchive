---
layout: page
title: "Q193273: BUG: FTP Creates Recursive Subfolders When Deploying"
permalink: /kb/193/Q193273/
---

## Q193273: BUG: FTP Creates Recursive Subfolders When Deploying

	Article: Q193273
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbSSafe600bug kbSSExplorer
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to deploy a Visual SourceSafe project through the File Transfer
	Protocol (FTP), Visual SourceSafe might create recursive folders and the
	following error message might appear:
	
	  Could not Deploy <file name> to ftp://<web location>
	
	CAUSE
	=====
	
	This problem only occurs when the specified FTP deploy path ends with a "/"
	character.
	
	RESOLUTION
	==========
	
	Do one of the following to resolve this problem:
	
	- Use the FTP deploy, but leave off the final "/" in the path.
	
	- Type the following in the command line:
	
	        ss deploy <project path> -r
	
	  For example, "ss deploy $/SSafe -r"
	
	  NOTE: In order for the command line to deploy to subfolders, the directory
	  structure must be created ahead of time on the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Visual SourceSafe Explorer, create a project named TestProj under $/
	  and add a subproject named SubProj under TestProj.
	
	2. Add two .htm files to TestProj and two .htm files to SubProj.
	
	3. Start the Visual SourceSafe Admin program. Make TestProj a web project, and
	  set the deploy path to be an FTP site that ends with a "/".
	
	4. In the Visual SourceSafe Explorer, deploy the TestProj project.
	
	RESULT: Go to the FTP location and look at what is deployed. The TestProj project
	will be there with SubProj under it. SubProj will also contain a subdirectory
	called TestProj.
	
	NOTE: The error message will only appear if you are deploying a project that has
	a lot of subdirectories and files. In this situation, the following error
	message is displayed during the project deployment:
	
	  Could not Deploy <file name> to ftp://<web location>
	
	REFERENCES
	==========
	
	Visual SourceSafe Books Online: SS Deploy command
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500bug kbSSafe600bug kbSSExplorer 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
