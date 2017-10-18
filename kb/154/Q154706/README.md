---
layout: page
title: "Q154706: GSNW Should Not Be Able to Be Removed While DSMN Is Installed"
permalink: kb/154/Q154706/
---

## Q154706: GSNW Should Not Be Able to Be Removed While DSMN Is Installed

	Article: Q154706
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	While removing Gateway Services for NetWare (GSNW), the following ID event
	occurs:
	
	  Event ID:    7003
	  Source:      Service Control Manager
	  Type:        Error
	  Description: The Directory Service Manager for NetWare Service depends
	               on the following nonexistent service: NwcWorkstation
	
	CAUSE
	=====
	
	Gateway Services for NetWare was removed while the Directory Service Manager for
	NetWare (DSMN) was still installed. The gateway services should not be able to
	be removed while the DSMN is installed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
