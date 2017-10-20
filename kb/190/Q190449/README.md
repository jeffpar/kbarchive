---
layout: page
title: "Q190449: Corrupted SAM Hangs Windows NT Server"
permalink: /kb/190/Q190449/
---

## Q190449: Corrupted SAM Hangs Windows NT Server

{% raw %}

	Article: Q190449
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Occasionally, the security accounts manager (SAM) database may become corrupted.
	If this happens, the Netlogon service may fail to start and access to the server
	from both the network and the console is prohibited. The following error message
	may be displayed:
	
	  Unable to log you on because the Netlogon service is not running.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	With the addition of the hotfix, if the SAM cannot be loaded on a backup domain
	controller (BDC) because it is corrupted, the following sequence of events
	occurs:
	
	1. The BDC displays a blue screen error message.
	
	2. The SAM is deleted.
	
	3. The BDC restarts.
	
	4. The SAM is re-created with information from the primary domain controller
	  (PDC).
	
	If the SAM is corrupted on the PDC, server, or workstation, a STOP error is
	raised and the SAM will have to be restored from tape or an emergency repair
	disk. The STOP error that is encountered is:
	
	  STOP: c00000e5 This error indicates that the SAM server has
	  encountered an internal consistency error in its database. This
	  catastrophic failure will prevent further operation of SAM.
	
	This message appears on the PDC as a blue screen error message; the PDC then
	restarts, and this sequence (the error message and the PDC restarting) repeats.
	
	
	Additional query words: kbDSupport blue screen security accounts manager
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
