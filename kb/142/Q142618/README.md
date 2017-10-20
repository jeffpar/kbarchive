---
layout: page
title: "Q142618: NCP Client Stops Responding When Saving File"
permalink: /kb/142/Q142618/
---

## Q142618: NCP Client Stops Responding When Saving File

{% raw %}

	Article: Q142618
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 17-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a NetWare Core Protocol (NCP) client tries to save a file that the user
	does not have write permissions to through File and Print Services for NetWare
	(FPNW), the client machine will stop responding.
	
	CAUSE
	=====
	
	FPNW returns an incorrect error code to the client.
	
	WORKAROUND
	==========
	
	Obtain the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	
	Additional query words: prodnt Novell
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
