---
layout: page
title: "Q122551: Files Copied by PC-Based Clients Not Viewable by Mac Clients"
permalink: /kb/122/Q122551/
---

## Q122551: Files Copied by PC-Based Clients Not Viewable by Mac Clients

{% raw %}

	Article: Q122551
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the root directory of a Windows NT Server version 3.5 is a Macintosh volume
	and is shared for the PC-based client computers, any new directories created in
	the root directory by PC-based client computers are viewable by the Macintosh
	client computers, but the files in that directory are not viewable. In addition,
	any new subdirectories added to any existing directory are not viewable.
	
	RESOLUTION
	==========
	
	To work around this problem, remove the Macintosh volume and recreate it.
	
	To correct this problem, upgrade to Windows NT Workstation or Windows NT Server
	3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in Windows NT Workstation and Windows NT Server
	version 3.51.
	
	Additional query words: prodnt sfm services for
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
