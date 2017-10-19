---
layout: page
title: "Q266240: PRB: Custom SDK Not Available for Existing eVC Projects"
permalink: /kb/266/Q266240/
---

## Q266240: PRB: Custom SDK Not Available for Existing eVC Projects

	Article: Q266240
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSETK
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual C++ version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a custom Software Development Kit (SDK) that was exported by
	Platform Builder 2.12 or later, you may not be able to select the new platform
	in the eMbedded Visual C++ IDE for any existing projects.
	
	Also, if you create a new project and don't select the CPU that exists only in
	the custom SDK, you may not be able to select the new custom platform for the
	newly created project.
	
	RESOLUTION
	==========
	
	To build an existing project to target the newly installed platform SDK, create
	a new, empty project, and then select the existing source files from the
	existing project.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	In the case where a user has some existing projects and then installs a custom
	SDK, this behavior can be simulated by creating a new project and omitting the
	CPU support for the custom SDK:
	
	1. Install eMbedded Visual C++. Include all the toolkits and SDKs.
	
	2. Obtain or export an SDK from Platform Builder version 2.12 or 3.0 based on
	  the x86 chip only. For example, build a MAXALL-based platform for CEPC and
	  export the SDK for it.
	
	3. Install the exported, custom SDK on the system where eMbedded Visual C++ and
	  other SDKs are installed.
	
	4. Start the eMbedded Visual C++ IDE.
	
	5. Create a new application project (from the File menu, click New). Click WCE
	  Application and make sure that Win32 (WCE x86) in the CPUs field is not
	  selected. Click A Typical Hello World Application, and then click Finish.
	
	After the eMbedded Visual C++ application wizard creates the application, attempt
	to select the various platforms to target on the IDE toolbar. Notice that the
	custom SDK is not available.
	
	NOTE: There is no option to select a CPU that is exclusively supported in a
	custom SDK. For example, if you have installed a custom SDK for a custom x86
	CEPC device, that SDK only supports the X86 CPU. Yet X86 is not listed in the
	CPU drop-down list box in the Build Configurations dialog box. Consequently, you
	must create a new, empty project to target the X86 CPU, and then include the
	existing project's source files.
	
	Create a Project to Support the Custom Platform
	-----------------------------------------------
	
	Follow Steps 1 through 2 to create a project to support the custom platform:
	
	1. Create a new application project (on the File menu, click New). Click WCE
	  Application and make sure Win32 (WCE x86) in the CPUs field is selected.
	  Click A Typical Hello World Application, and then click Finish.
	
	2. After the eMbedded Visual C++ application wizard creates the application,
	  select the various platforms to target on the IDE.
	
	Notice that the custom platform supported by the custom SDK installed is listed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSETK 
	Technology        : kbVCsearch kbAudDeveloper kbVCeMb
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	
