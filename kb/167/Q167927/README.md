---
layout: page
title: "Q167927: PRB: Building ATL Service Project Does Not Register the Service"
permalink: kb/167/Q167927/
---

## Q167927: PRB: Building ATL Service Project Does Not Register the Service

	Article: Q167927
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.0
	Operating System(s): 
	Keyword(s): kbATL200 kbATL210 kbLocalSvr kbRegistry kbServer kbService kbVC600 kbGrpDSMFCATL
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build an ATL service, using the AppWizard, the COM objects are
	registered, but the service does not appear in the Control Panel's list of
	services.
	
	CAUSE
	=====
	
	The Wizard creates a custom build rule for self-registration. The rule uses the
	/RegServer switch instead of the /Service switch.
	
	RESOLUTION
	==========
	
	The Wizard adds the following custom build command:
	
	     "$(TargetPath)" /RegServer
	
	Change the build command to:
	
	     "$(TargetPath)" /Service
	
	To change the command, bring up the Project Settings dialog box, click the Custom
	Build tab, and edit the command in "Build command(s):". NOTE: If using Visual
	Studio.NET, the Wizard adds the following "Post-Build Events" command line under
	the "Buils Events" property page:
	
	  "$(TargetPath)" /RegServer
	
	Change the build command to:
	
	  "$(TargetPath)" /Service
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Because debugging local servers is easier than debugging services, most people
	prefer the default to be /RegServer. Once you have completed testing the EXE as
	a local server, you can either change the custom build step or run the EXE with
	/Service.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Chuck Bell,
	Microsoft Corporation.
	
	Additional query words: kbatl200 kbatl210 kbatl300 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbATL200 kbATL210 kbLocalSvr kbRegistry kbServer kbService kbVC600 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbATL200 kbATL300 kbATL210 kbVCNET
	Version           : :2.0,2.1,3.0
	Issue type        : kbprb
	
	=============================================================================
	
