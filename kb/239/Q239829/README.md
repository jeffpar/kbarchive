---
layout: page
title: "Q239829: How to Automate Uninstalling the DLC Protocol"
permalink: kb/239/Q239829/
---

## Q239829: How to Automate Uninstalling the DLC Protocol

	Article: Q239829
	Product(s): Microsoft Windows NT
	Version(s): NT:4.0,4.5
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server versions 4.0, 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can uninstall the data link control (DLC) protocol only by using the
	graphical user interface (GUI). This method is not efficient or flexible if you
	want to uninstall the DLC protocol on many computers. However, you can automate
	the uninstallation using the Setup.exe file located in the %SystemRoot%\System32
	folder.
	
	MORE INFORMATION
	================
	
	To uninstall the DLC protocol, you must first uninstall the protocol and then
	update the bindings using the following steps:
	
	1. Create a batch or script file and give it a name (for example, Unistdlc.bat).
	
	2. Make sure the Oemnxpdl.inf file is available in the %SystemRoot%\System32
	  folder.
	
	3. Type the following commands into the batch file:
	
	  cd %SystemRoot%
	  setup.exe /f /i%SystemRoot%\system32\ncpashel.inf /t NTN_InstallMode =
	  deinstall /t NTN_Origination = deinstall /t NTN_Infname =
	  %SystemRoot%\system32\oemnxpdl.inf /t NTN_SRCPATH = %SystemRoot%\system32 /T
	  NTN_Infoption = DLC
	
	NOTE: The command line that begins with "Setup.exe" must be on one line without a
	carriage return (CR) or line feed (LF). It is wrapped in this article for
	readability purposes.
	
	4. Save and close the batch file.
	
	5. Run the batch file to uninstall the DLC protocol.
	
	6. Update the bindings by running the Runncpa.exe tool from Microsoft BackOffice
	  SNA Server at a command prompt.
	
	
	7. Restart your computer.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400 kbBackOfficeServ450
	Version           : NT:4.0,4.5
	Issue type        : kbinfo
	
	=============================================================================
	
