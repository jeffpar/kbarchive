---
layout: page
title: "Q194197: FIX: Application Setup Fails on Some Computers"
permalink: /kb/194/Q194197/
---

## Q194197: FIX: Application Setup Fails on Some Computers

	Article: Q194197
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbwizard kbAppSetup kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install an application on a computer running Windows 95, the
	application setup terminates with the following messages:
	
	  MSDADC.DLL was unable to register itself in the system registry.
	
	-and-
	
	  Setup was not completed successfully.
	
	This error message is incomplete and does not describe the real cause of the
	problem.
	
	CAUSE
	=====
	
	This behavior occurs due to an incompatibility between the version of the
	Msdadc.dll file installed by Setup and the existing version of the Ole32.dll
	file on the target computer.
	
	RESOLUTION
	==========
	
	You can work around this issue by installing Distributed Component Object Model
	(DCOM) for Windows 95 or Internet Explorer version 4.0 or later.
	
	You can install DCOM for Windows 95 (DCOM95) from the following Web address:
	
	http://www.microsoft.com/COM/resources/downloads.asp
	
	You can install Internet Explorer 4.0 or later from the following Web address:
	
	http://www.microsoft.com/ie/download/windows.htm
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in the updated version of the
	Setup Wizard Vfp6swiz.exe dated 10/08/1998. This bug was corrected in Visual
	Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	NOTE: The bug that Visual Studio Service Pack 3 fixes concerns the error
	message. Service pack 3 does not install an updated version of DCOM. You must
	still install DCOM from the locations listed in the RESOLUTION section above.
	
	In service pack 3, the error message now reads:
	
	  The ODBC drivers need DCOM95, which does not appear to be installed. DCOM 95
	  is available from the Microsoft Web site. We highly recommend you click Yes
	  to exit now, install DCOM95, and run this setup again. Terminate setup?
	
	Two buttons titled Yes and No appear below the message. If you select Yes, the
	setup terminates.
	
	If you choose No, the setup continues to run. At the end of the setup routine,
	you see the following message:
	
	  MSDADC.DLL was unable to register itself in the system registry.
	
	The setup program then terminates.
	
	The Msdadc.dll file supports Visual FoxPro's ODBC functions and is installed in
	the Windows\System directory, by the Setup Application. The Msdadc.dll file has
	dependencies in the Ole32.dll file, and registration of the Msdadc.dll file
	fails if it is not supported by the existing version of the Ole32.dll file.
	Installation of either DCOM for Windows 95 or Internet Explorer 4.0 updates the
	version of the Ole32.dll file on the target computer.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project and add a program file containing the following code:
	
	  WAIT WINDOW "This Application is Running"
	
	2. Build the project into an executable.
	
	3. Run the Setup Wizard and select ODBC Drivers in step 2.
	
	4. Install the .exe file on a Windows 95 computer that has Ole32.dll version
	  2.1.
	
	  RESULTS: Setup proceeds normally until registry updates occur. Then, the
	  following message appears:
	
	  MSDADC.DLL was unable to register itself in the system registry.
	
	Setup then terminates with the following message:
	
	  Setup was not completed successfully.
	
	REFERENCES
	==========
	
	For more information on the updated Setup Wizard, please see the following URL:
	
	http://msdn.microsoft.com/vfoxpro/downloads/updates.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbwizard kbAppSetup kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP600
	Version           : WINDOWS:2.5,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
