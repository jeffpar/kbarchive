---
layout: page
title: "Q158431: HOWTO: Deploy a Project Adds Two .GIF Files"
permalink: /kb/158/Q158431/
---

## Q158431: HOWTO: Deploy a Project Adds Two .GIF Files

	Article: Q158431
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When deploying a Web project, two files that are not in the project are created
	in the deployment location. By default, they are FOLDER.GIF and HTMLFILE.GIF.
	
	MORE INFORMATION
	================
	
	You can customize these images by editing the following lines in the SRCSAFE.INI
	file:
	
	  Img_File = HTMLFILE.GIF
	  Img_Folder = FOLDER.GIF
	
	to read, for example:
	
	  Img_File = MYIMGFILE.GIF
	  Img_Folder = MYIMGFOLDER.GIF
	
	NOTE: The default .GIF files are located in the Visual SourceSafe install
	directory on the server. If you customize these SRCSAFE.ini lines, you need to
	be sure to have the actual .GIFs in this location. For example, not having
	MYIMGFILE.GIF under the VSS directory will prevent it from being copied to the
	deploy location.
	
	Placing a semicolon (;) at the beginning of these lines will also prevent these
	files from being copied to the deployment location and will cause the Site Map
	file to be created with a red "X" glyph where these glyphs would normally
	appear.
	
	Steps to Reproduce
	------------------
	
	1. Create a Visual SourceSafe project.
	
	2. In the Visual SourceSafe administrator, designate this project as a Web
	  project and specify a Deployment Path, such as C:\deploy.
	
	3. In the Visual SourceSafe Explorer, deploy the project. Note that the
	  deployment folder contains the files from the project and the two additional
	  .gif files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
