---
layout: page
title: "Q302433: Cannot Install Legacy Version Of MSN Software After Uninstalling"
permalink: kb/302/Q302433/
---

## Q302433: Cannot Install Legacy Version Of MSN Software After Uninstalling

	Article: Q302433
	Product(s): The Microsoft Network
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You install version 6.0 of DellNet by MSN software, and then upgrade to version
	6.1 of the DellNet by MSN software after installation. You uninstall the DellNet
	by MSN software by clicking Add/Remove Programs in the Control Panel. Next, you
	attempt to install an earlier version of the MSN software on the computer
	(version 5.2). You receive an error message stating that a newer version of the
	software is already installed on the machine, and the installation is cancelled.
	This occurs even though the DellNet by MSN software has been uninstalled.
	
	CAUSE
	=====
	
	The registry key HKLM\Software\Microsoft\MSN\SoftwareInstalled remains on the
	machine, falsely indicating that version 6.0 of the MSN software is installed on
	the computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, you must delete the registry key
	HKLM\Software\Microsoft\MSN\SoftwareInstalled.
	To delete HKLM\Software\Microsoft\MSN\SoftwareInstalled
	
	1. Click Start, and then click Run.
	
	2. Type regedit in the box, and then click OK.
	  The registry editor box appears
	
	3. Next to HKEY_LOCAL_MACHINE, click +.
	
	4. In the expanded list that appears, click + next to Software.
	
	5. Click + next to Microsoft.
	
	6. Click + to MSN.
	
	7. Select SoftwareInstalled.
	
	8. In the top menu of the registry editor, click File, and then click Delete.
	  A warning dialog box that appears.
	
	9. Click Yes.
	
	10. Click X in the upper-right corner to close the Registry Editor.
	  After this key has been removed, you should be able to install an earlier
	  version (pre 6.0) of the MSN software.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN600 kbMSN610 kbMSN520 kbMSNExplorer
	Version           : :6.1
	Issue type        : kbprb
	
	=============================================================================
	
