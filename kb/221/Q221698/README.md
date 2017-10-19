---
layout: page
title: "Q221698: FIX: Project Manager Not Refreshed Correctly After Build"
permalink: /kb/221/Q221698/
---

## Q221698: FIX: Project Manager Not Refreshed Correctly After Build

	Article: Q221698
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbProjManager kbvfp600 kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 09-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Document and Class tabs in the Project Manager might not refresh properly
	after building a project, application, or executable.
	
	RESOLUTION
	==========
	
	Try one of the following to resolve this problem:
	
	- Close down the Project Manager and then re-open it.
	
	- Upgrade to Visual Studio 6.0 Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Tastrade project.
	
	2. Select the Document tab, then click the Build button.
	
	3. Select the Build Application button, then click OK.
	
	Once the build application is completed, toggle back and forth between the
	Document and Class tabs. The content does not refresh correctly on either tab .
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProjManager kbvfp600 kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
