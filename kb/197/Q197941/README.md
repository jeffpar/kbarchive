---
layout: page
title: "Q197941: FIX: Setup Wizard Cannot Register Foxhhelpps.dll File"
permalink: /kb/197/Q197941/
---

## Q197941: FIX: Setup Wizard Cannot Register Foxhhelpps.dll File

	Article: Q197941
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbvfp600 kbVS600sp3fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install an application that includes HTML Help using
	diskettes created with the Setup Wizard dated October 7, 1998 on a "clean"
	Windows 95 computer, the following error occurs:
	
	  FOXHHELPPS.DLL was unable to register itself in the system registry.
	
	NOTE:In this case, "clean" is defined as the original version of Windows 95,
	version 4.00.950 without having Internet Explorer 4.0 installed.
	
	CAUSE
	=====
	
	The Rpcrt4.dll file is the wrong version. The Foxhhelps.dll file has a
	dependency in Rpcrt4.dll and may not be supported with some early versions of
	the Rpcrt4.dll file. If you install an outdated version of the Rpcrt4.dll file
	on the target computer, registration of the Foxhhelpps.dll file fails during the
	installation.
	
	RESOLUTION
	==========
	
	Install the Distributed Component Object Model (DCOM) 95 on the Windows 95
	computer before running the Setup.exe file to install the application.
	
	You can install the Distributed Component Object Model (DCOM) for Windows 95 from
	the following Web site:
	
	http://msdn.microsoft.com/library/default.htm
	
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
	
	This behavior does not occur on Windows 98 or Windows NT 4.0. Both of these
	operating systems have an updated version of the Rpcrt4.dll. However, the
	original version of Windows 95 does not have the proper version of this file. If
	Internet Explorer 4.0 is installed on the Windows 95 computer, the Rpct4.dll
	file may be the correct version. Setup does not install an updated version of
	Rpcrt4.dll during the setup process.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an executable file that contains a WAIT WINDOW command.
	
	2. Run the Setup Wizard and choose the HTML help Engine option in step 2.
	
	3. Continue through the remaining steps and build the disks.
	
	4. Go to a computer with a clean install of Windows 95 and attempt to install
	  the setup disks.
	
	RESULTS: Setup proceeds normally until registry updates occur. Then, the
	following message appears:
	
	  FOXHHELPPS.DLL was unable to register itself in the system registry.
	
	Setup then terminates with the following message:
	
	  Setup was not completed successfully.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbvfp600 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
