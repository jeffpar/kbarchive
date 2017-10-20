---
layout: page
title: "Q108480: Set Up Applications Does Not Search Mapped Network Drives"
permalink: /kb/108/Q108480/
---

## Q108480: Set Up Applications Does Not Search Mapped Network Drives

{% raw %}

	Article: Q108480
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Windows 3.1 and Novell NetWare on a workstation that does not
	have a hard disk, choosing Set Up Applications from the Options menu in the
	Windows Setup program searches the path only.
	
	WORKAROUND
	==========
	
	To work around this problem, include every network drive and directory to be
	searched in the path.
	
	STATUS
	======
	
	This problem occurs with Novell NetWare versions 3.11 and 4.0.
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If you run the Set Up Applications command on a system that has a hard disk
	installed but is still using a network installation of Windows, Setup searches
	the path, any local drives, and all mapped network drives.
	
	Additional query words: 3.10 3.1 3.11 apps
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
