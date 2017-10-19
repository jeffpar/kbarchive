---
layout: page
title: "Q193826: How to Hide the Security Tab"
permalink: /kb/193/Q193826/
---

## Q193826: How to Hide the Security Tab

	Article: Q193826
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to hide the Security tab of a file or folder when
	Windows NT is formatted for NTFS. This may be useful if you do not want other
	users to change the permissions on a particular file or folder.
	
	MORE INFORMATION
	================
	
	The Rshx32.dll file controls the Security tab. To hide the security tab, change
	the permissions of this system file. By default, everyone has read permissions
	to this file, and the local administrator has full control rights.
	
	To change the permissions on the file:
	
	1. Log on to the computer running Windows NT Server or Workstation as a local
	  user who has Administrator rights.
	
	2. Open Windows NT Explorer and go to Winnt\System32.
	
	3. Search for the Rshx32.dll file.
	
	4. Go to the Properties of this file.
	
	5. Click the Security tab and then click Permission.
	
	6. Remove the Read permission of everyone and then add the appropriate rights to
	  the appropriate users or user groups.
	
	7. Restart the computer.
	
	Now, only the users who have been assigned the rights can see the Security tab.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
