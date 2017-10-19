---
layout: page
title: "Q271490: NETSET.EXE Cannot Change Machine Name And Join Domain Simultaneo"
permalink: /kb/271/Q271490/
---

## Q271490: NETSET.EXE Cannot Change Machine Name And Join Domain Simultaneo

	Article: Q271490
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 Server Resource Kit ISBN 1-57231-805-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the Windows 2000 Server Resource Kit utility NETSET.EXE to change an
	individual computer name and, at the same time, add the computer to a domain,
	you will not be able to log into the domain with the new name.
	
	MORE INFORMATION
	================
	
	You will not receive an error message after you add the appropriate entries to
	the unattend.txt file and run NETSET.EXE. However, you will not be able to log
	into the domain because the computer joined the domain before the name was
	changed.
	
	To work around this, you will need to perform these two operations separately.
	The first procedure requires changing the individual computer name and rebooting
	the client. You will then need to add the computer to the domain and reboot the
	client a second time.
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: RKBOOK RESKIT WIN2000 1-57231-805-8 TOOLS WIN2K W2K SERVER
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
