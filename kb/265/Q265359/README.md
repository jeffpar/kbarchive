---
layout: page
title: "Q265359: Error Message &quot;Unknown Registry Failure: Service NDIS WAN&quot;"
permalink: /kb/265/Q265359/
---

## Q265359: Error Message &quot;Unknown Registry Failure: Service NDIS WAN&quot;

	Article: Q265359
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you finish configuring the Remote Access Service (RAS) on a Microsoft
	Windows NT Server 4.0-based computer that is running Service Pack 3 (SP3), you
	may receive the following error message:
	
	  Unknown registry failure: service NDIS WAN
	
	WORKAROUND
	==========
	
	To work around this behavior, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Right-click Modems, click the modem listed, and then click Remove. Do this
	  for all the modems on the list.
	
	3. Restart the computer.
	
	4. Reinstall the modems and the RAS.
	
	5. Reapply SP3.
	
	6. Restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search
	Version           : :4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
