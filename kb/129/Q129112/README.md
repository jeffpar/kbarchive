---
layout: page
title: "Q129112: How to Install SourceSafe on a Windows 95 Workstation"
permalink: kb/129/Q129112/
---

## Q129112: How to Install SourceSafe on a Windows 95 Workstation

	Article: Q129112
	Product(s): Microsoft SourceSafe
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows NT, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can install SourceSafe on a Windows 95 Workstation when the repository is on
	a network drive.
	
	MORE INFORMATION
	================
	
	With SourceSafe for Windows NT installed on a network server, do the following
	on the Windows 95 workstation:
	
	1. Double-click "My Computer" to start Explorer.
	
	2. Select View, and make sure that the toolbar is checked.
	
	3. Map the server where SourceSafe is installed to a named drive letter, such as
	  Z:, making sure the Reconnect at logon box is checked.
	
	4. Click the Start button, and choose Run... from the Start menu.
	
	5. Type SYSEDIT in the edit box.
	
	6. Add the following line to your AUTOEXEC.BAT file: SET SSDIR=Z:\
	
	7. Return to the Explorer, and locate the SSNT.EXE in the WINNT folder.
	
	8. Drag-and-Drop this on the Windows 95 desktop. It will become a shortcut to
	  SourceSafe.
	
	Additional query words: ss3 vbwin
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310NT
	Version           : :3.1
	Issue type        : kbinfo
	
	=============================================================================
	
