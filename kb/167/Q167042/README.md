---
layout: page
title: "Q167042: Legal Notice Dialog Box Interferes with Remote Shutdowns"
permalink: kb/167/Q167042/
---

## Q167042: Legal Notice Dialog Box Interferes with Remote Shutdowns

	Article: Q167042
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to remotely shut down a computer that has the Legal Notice dialog box
	displayed, the InitiateSystemShutdown API will wait indefinitely on it. Once you
	click OK on the dialog box, you can log on to the system like normal. You will
	see this behavior if you use an application such as Shutgui.exe or Shutdown.exe
	to remotely shut down the computer running Windows NT.
	
	
	CAUSE
	=====
	
	This problem was caused by a problem in Winlogon.exe
	
	STATUS
	======
	
	This problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
