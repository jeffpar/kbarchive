---
layout: page
title: "Q240779: Event Log Error: Event ID 105 from Service W3SVC or FTPSVC"
permalink: /kb/240/Q240779/
---

## Q240779: Event Log Error: Event ID 105 from Service W3SVC or FTPSVC

	Article: Q240779
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Internet Information Server (IIS) 4.0, one of the following errors
	may occur in the event log:
	
	  Source: W3SVC
	  Event ID: 105
	  Description: The server was unable to register the administration tool
	  discovery information. The administration tool may not be able to see this
	  server. The data is the error code.
	
	-or-
	
	  Source: FTPSVC
	  Event ID: 105
	  Description: The server was unable to register the administration tool
	  discovery information. The administration tool may not be able to see this
	  server. The data is the error code.
	
	RESOLUTION
	==========
	
	Remove, and then reinstall the NetBIOS Interface network service. To do this,
	perform the following steps:
	
	1. In Control Panel, double-click Network, and then click the Services tab.
	
	2. Select NetBIOS Interface, and then click Remove.
	
	3. Click Close (this will cause the bindings to be rebuilt). When you are
	  prompted to restart the computer, click Yes.
	
	4. After the computer restarts, open Control Panel again, double-click Network,
	  and then click the Services tab.
	
	5. Click Add, select NetBIOS Interface from the list of network services, and
	  then click OK.
	
	6. Click Close (this will cause the bindings to be rebuilt). When you are
	  prompted to restart the computer, click No.
	
	7. Re-apply the latest Windows NT service pack, all Windows NT Security Rollup
	  packages, and all IIS Security Rollup Packages.
	
	8. Restart the computer.
	
	Additional query words: net bios event viewer error kberrmsg errmsg akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
