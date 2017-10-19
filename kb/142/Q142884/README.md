---
layout: page
title: "Q142884: PRB: Error &quot;FOXUT16.DLL is the wrong version&quot; Running EXE"
permalink: /kb/142/Q142884/
---

## Q142884: PRB: Error &quot;FOXUT16.DLL is the wrong version&quot; Running EXE

	Article: Q142884
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running an executable built with Visual FoxPro 3.0x under Windows 3.1 or Windows
	for Workgroups results in the following error message:
	
	  FOXUT16.DLL is the wrong version
	
	CAUSE
	=====
	
	The Visual FoxPro executable was built using version 3.0 of the Setup Wizard and
	was installed with the run-time file Vfp300.esl from version 3.0b.
	
	RESOLUTION
	==========
	
	If Visual FoxPro version 3.0b is installed in the same directory as Visual
	FoxPro version 3.0, you may encounter problems trying to install disks created
	from the Setup Wizard. The Setup Wizard will use the .esl file that is installed
	with version 3.0b with older setup files from the Distrib directory to create
	the disks.
	
	To check the version of Vfp300.esl file:
	
	- Under Windows 3.1, Windows for Workgroups, or Windows NT, use File Manager to
	  select the Vfp300.esl file in the System or System32 subdirectory. Then press
	  ALT+ENTER to display version information.
	
	- Under Windows 95, use Explorer and select the Vfp300.esl in the System
	  subidirectory. Right-click the file, point to properties, and click the
	  Version tab.
	
	The "More Information" section of this article lists the steps you need to follow
	to ensure that the Foxut16.dll matches the corresponding version of the Visual
	FoxPro run-time file (Vfp300.esl) as is necessary.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	How to Distribute a Visual FoxPro 3.0 Application
	-------------------------------------------------
	
	1. Remove the 3.0b version of Vfp300.esl from the System or System32 directory.
	
	2. Delete the Distrib directory under the Visual FoxPro directory.
	
	3. Delete Dkcontrl.cdx and Dkcontrl.dbf from your distribution directory.
	
	4. Delete the Compress directory from your disk images directory.
	
	5. Reinstall Visual FoxPro, or extract Vfp300.esl from Vfp15.cab.
	
	6. Run the Setup Wizard.
	
	How to Distribute a Visual FoxPro 3.0b Application
	--------------------------------------------------
	
	1. Delete the Distrib directory under the Visual FoxPro directory.
	
	2. Delete Dkcontrl.cdx and Dkcontrl.dbf from your distribution directory.
	
	3. Delete the Compress directory from your disk images directory.
	
	4. Run the Setup Wizard.
	
	5. Allow the Setup Wizard to create a new Distrib directory.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
