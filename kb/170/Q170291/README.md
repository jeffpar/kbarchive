---
layout: page
title: "Q170291: APPC Call to GET_LU_STATUS() Never Returns"
permalink: /kb/170/Q170291/
---

## Q170291: APPC Call to GET_LU_STATUS() Never Returns

{% raw %}

	Article: Q170291
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When calling GET_LU_STATUS to determine the status of a particular APPC LU (when
	Sync Point conversations are being used), the call never returns.
	
	
	CAUSE
	=====
	
	The APPC library was not properly processing the response from the SNA Server,
	causing the GET_LU_STATUS call to fail to return.
	
	RESOLUTION
	==========
	
	The WAPPC32.DLL file has been updated to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server, version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: syncpt sas winappc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
