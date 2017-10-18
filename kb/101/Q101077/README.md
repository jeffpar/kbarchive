---
layout: page
title: "Q101077: ADT: Windows Setup Ignores ADK, ADT Applications"
permalink: kb/101/Q101077/
---

## Q101077: ADT: Windows Setup Ignores ADK, ADT Applications

	Article: Q101077
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.1,2.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Distribution Kit, version 1.1 
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	Microsoft Windows Setup (found in the Main group in Program Manager) ignores
	applications created with the Microsoft Access Distribution Kit (ADK), or the
	Microsoft Access Developer's Toolkit (ADT), even when these directories are
	listed in the system path.
	
	RESOLUTION
	==========
	
	To cause Windows Setup to recognize your ADK or ADT application, follow these
	steps:
	
	1. Run Windows Setup.
	
	2. From the Options menu, choose Set Up Applications.
	
	3. Select the "Ask you to specify an application" check box.
	
	4. Choose OK, and then specify your ADK or ADT application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Access
	Distribution Kit version 1.1 and the Microsoft Access Developer's Toolkit
	version 2.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Place all files required by your Microsoft Access ADK or ADT application in a
	  directory in your system path.
	
	2. Run Windows Setup.
	
	3. From the Options menu, choose Set Up Applications.
	
	4. Search your path. Note that Windows Setup does not recognize your ADK or ADT
	  application.
	
	Additional query words: nxml
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3 kbAccessDistKit110
	Version           : WINDOWS:1.1,2.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
