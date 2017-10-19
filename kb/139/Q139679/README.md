---
layout: page
title: "Q139679: PRB: ImageEdit Icon Not Created with Workstation Installation"
permalink: /kb/139/Q139679/
---

## Q139679: PRB: ImageEdit Icon Not Created with Workstation Installation

	Article: Q139679
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a normal installation of Visual FoxPro (Professional edition), Visual
	FoxPro creates a program group with eleven icons that includes an icon for
	ImageEdit. However, on a computer with a workstation installation, Visual FoxPro
	fails to add the ImageEdit icon.
	
	RESOLUTION
	==========
	
	To create the ImageEdit Icon after a workstation installation, you must add the
	ImageEdit icon manually. To achieve this in Windows 3.1, Windows for Workgroups,
	and Windows NT, select the Visual FoxPro program group in Program Manager, and
	add a program item. The new program item's command line must point to the
	Imagedit.exe file on the network. In Windows 95, modify the taskbar to include a
	shortcut to ImageEdit on the Network.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Perform a Network installation of Visual FoxPro 3.0 (Professional edition) to
	  a Network server using the SETUP /A option.
	
	2. Connect to the server from a workstation and run Setup from the Visual FoxPro
	  directory.
	
	3. In the Setup dialog box, perform a "Workstation Installation" to the Visual
	  FoxPro directory on the local computer.
	
	4. After Setup is complete, note the ImageEdit icon was not added to the Visual
	  FoxPro program group.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
