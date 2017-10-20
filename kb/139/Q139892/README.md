---
layout: page
title: "Q139892: SNA Server Banyan Interface Updated to Support Win95 SNA Clients"
permalink: /kb/139/Q139892/
---

## Q139892: SNA Server Banyan Interface Updated to Support Win95 SNA Clients

{% raw %}

	Article: Q139892
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server Windows 95 client software has been updated to support Banyan
	Vines clients. While testing this new Windows 95 client support against SNA
	Server 2.11, a memory leak problem was found in the SNA Server 2.11 Vines
	transport interface (SNABV.DLL). This problem does not occur if the SNA Server
	Windows 95 Banyan client is not being used.
	
	
	RESOLUTION
	==========
	
	Microsoft has updated the file LIBS\WIN32\SNABV.DLL to correct this problem.
	
	
	STATUS
	======
	
	The correction to this problem is included in the latest U.S. Service Pack for
	SNA Server for Windows NT, version 2.11. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
