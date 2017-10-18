---
layout: page
title: "Q138431: System Policy Custom Desktop Icons Not Downloaded"
permalink: kb/138/Q138431/
---

## Q138431: System Policy Custom Desktop Icons Not Downloaded

	Article: Q138431
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a system policy for a group and define custom folders, the
	custom folders may not appear when a member of the group logs on to the
	network.
	
	In addition, when a member of the group tries to connect to a Universal Naming
	Convention (UNC) path, the following error message may occur:
	
	  The folder \\<computer name>\<share name> does not exist.
	
	CAUSE
	=====
	
	The Hide Network Neighborhood option is enabled in the system policy.
	
	RESOLUTION
	==========
	
	Use System Policy Editor (Poledit.exe) to open the system policy file. Click the
	Hide Network Neighborhood check box to clear it. This option is located under
	Shell/Restrictions.
	
	WARNING: Using System Policy Editor incorrectly can cause serious problems that
	may require you to reinstall Windows 95. Microsoft cannot guarantee that
	problems resulting from the incorrect use of System Policy Editor can be solved.
	Use System Policy Editor at your own risk. System Policy Editor is available in
	the Admin\Apptools\Poledit folder on the Windows 95 CD-ROM. Use the Add/Remove
	Programs tool in Control Panel to install System Policy Editor.
	
	NOTE: Poledit.exe is included in the CD-ROM version of Windows 95, but not in the
	floppy disk version. If you are using the floppy disk version of Windows 95 and
	want to use Poledit.exe, please see the following article in the Microsoft
	Knowledge Base for information about the availability of Poledit.exe:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	MORE INFORMATION
	================
	
	The ability to connect to a UNC path is the only network functionality affected.
	You can still connect to the same path by mapping a drive letter to the path.
	Any program that uses a UNC path will be affected.
	
	Note that the symptoms described in this article can also occur if you install
	the TweakUI PowerToy and then use TweakUI to remove the Network Neighborhood
	icon from the desktop.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
