---
layout: page
title: "Q148353: Access Denied Using CHGPASS with DSMN"
permalink: /kb/148/Q148353/
---

## Q148353: Access Denied Using CHGPASS with DSMN

{% raw %}

	Article: Q148353
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 19-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you connect to more than one NetWare or File and Print Services for NetWare
	(FPNW) computer and run the CHGPASS command on a NetWare client computer, an
	"Access Denied" error message appears using Directory Services Manager for
	NetWare (DSMN).
	
	CAUSE
	=====
	
	CHGPASS tries to change the password for each of the computers you are currently
	logged on and attached. The password change takes effect the first time, but
	subsequent attempts to change the password fail with "Access Denied" as the old
	password is no longer correct. The password is successfully changed on the
	Primary Domain Controller (PDC). Logging out and then back in with the new
	password proves this.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
