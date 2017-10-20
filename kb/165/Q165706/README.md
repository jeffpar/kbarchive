---
layout: page
title: "Q165706: MacFile Volume Icon Changes after Permissions Are Changed"
permalink: /kb/165/Q165706/
---

## Q165706: MacFile Volume Icon Changes after Permissions Are Changed

{% raw %}

	Article: Q165706
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you mount a Windows NT shared volume from a Macintosh client, you may see a
	generic file icon instead of a standard Windows NT Connected Drive icon on the
	desktop.
	
	MORE INFORMATION
	================
	
	This can be caused by assigning LIST permissions to the logon user or group used
	by the client to mount the shared volume. By default, LIST uses the following
	NTFS permissions:
	
	  Special Directory Access:
	  READ    (R)
	  EXECUTE (E)
	
	  Special File Access:
	  N/A
	
	To resolve the problem, modify the NTFS permissions to allow the user group to
	have READ access on the volume. This change would provide the following
	permissions:
	
	  Special Directory Access:
	  READ    (R)
	  EXECUTE (E)
	
	  Special File Access:
	  READ    (R)
	  EXECUTE (E)
	
	Additional query words: sfm macfile chooser paper with corner folded over
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
