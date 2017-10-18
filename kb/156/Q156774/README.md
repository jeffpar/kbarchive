---
layout: page
title: "Q156774: PRB: Cannot Find Setup.exe Error Installing to NT 4.0"
permalink: kb/156/Q156774/
---

## Q156774: PRB: Cannot Find Setup.exe Error Installing to NT 4.0

	Article: Q156774
	Product(s): Microsoft FoxPro
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): kbnetwork kbvfp500 kbvfp600
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may have problems installing Visual FoxPro or a Setup Wizard-created
	distribution across a network from a share on a Windows 95 machine to an NT 4.0
	machine. If the path to the Setup program contains a space or long directory
	name, you will receive the error:
	
	  "Cannot find <UNC or mapped drive\path>\setup.exe. Windows needs this
	  file to run <UNC or mapped drive\path>\setup.exe".
	
	WORKAROUND
	==========
	
	- Remove any spaces or long directory names from the path to the Setup
	  program.
	
	  - or -
	
	- Install from a share on an NT 3.51 or NT 4.0 machine.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Method 1
	--------
	
	1. Run the Setup Wizard under Visual FoxPro 3.0 or Visual FoxPro 5.0.
	
	2. Copy the Netsetup directory to a Windows 95 machine.
	
	3. Change the Netsetup directory name to "Net setup" (without the quotes).
	
	4. Share the directory created above.
	
	5. Connect to the Windows 95 share from an NT 4.0 machine with a Start/Run
	  \\<UNC name to share> or by mapping the drive.
	
	6. Run Setup.exe in the "Net setup" from the NT 4.0 machine.
	
	Method 2
	--------
	
	1. Share your Visual FoxPro 3.0 or 5.0 CD on a Windows 95 machine. Place a space
	  in the share name.
	
	2. Connect to the Windows 95 share from an NT 4.0 machine with a Start/Run
	  \\<UNC name to share> or by mapping the drive.
	
	3. Run Setup.exe in the root directory of the CD from the NT 4.0 machine.
	
	With both methods, the following error will be displayed and setup cannot be
	completed:
	
	  "Cannot find <UNC or mapped drive\path>\setup.exe. Windows needs this
	  file to run <UNC or mapped drive\path>\setup.exe"
	
	Notes
	-----
	
	The error does not occur if:
	
	- there are no spaces or long directory names in the path.
	
	- the source directory is on an NT 3.51 or 4.0 machine.
	
	- the destination machine is running NT 3.51 or Windows 95.
	
	Additional query words: Vfoxwin kbdse
	
	======================================================================
	Keywords          : kbnetwork kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : 5.00
	Issue type        : kbprb
	
	=============================================================================
	
