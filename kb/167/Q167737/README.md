---
layout: page
title: "Q167737: FIX: Deploy to a Unix Server Via FTP Fails"
permalink: /kb/167/Q167737/
---

## Q167737: FIX: Deploy to a Unix Server Via FTP Fails

	Article: Q167737
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbVS97sp2fix
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you deploy files through FTP to a UNIX server, the files are incorrectly
	deployed to the parent directory and renamed to include the directory name. You
	do not receive an error message warning you that the files were incorrectly
	deployed.
	
	CAUSE
	=====
	
	This problem is caused by the way Visual SourceSafe 5.0 parses the UNIX FTP
	deploy path. SourceSafe uses the '\' character when deploying, such that
	ftp://ftp.microsoft.com/test is interpreted as ftp.microsoft.com\test. Under
	UNIX, the '\' character is a valid character for a filename, so UNIX
	concatenates the path names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Set up a Visual SourceSafe project so that it is a Web-based project.
	
	2. Select an FTP:// deploy path that goes to *any* UNIX server.
	
	3. Deploy the project to the FTP:// location.
	
	  Assuming that you have a project $/Source/Web/Default.html and that the deploy
	  was to /pub/web, you will see the following under UNIX:
	
	  pub/web/Web\Default.html
	
	  UNIX interprets the slash character so that the filename is actually
	  Web\Default.html rather than putting a file called Default.html under the Web
	  directory.
	
	  Note that Visual SourceSafe gives the "Deploying..." message on the files and
	  everything appears to go as planned. You do not receive an error message.
	
	Additional query words: SP1
	
	======================================================================
	Keywords          : kbSSafe500bug kbVS97sp2fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
