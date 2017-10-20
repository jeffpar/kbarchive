---
layout: page
title: "Q145909: FPNW: Invalid User Name Consumes a Seat License"
permalink: /kb/145/Q145909/
---

## Q145909: FPNW: Invalid User Name Consumes a Seat License

{% raw %}

	Article: Q145909
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Novell NetWare client logs into File and Print Services for NetWare
	(FPNW) with a user name that is not known in the local user account database or
	in any trusted domain, the login fails.
	
	Although the login failed, FPNW reports a license usage to the licensing server
	if it is set up in per seat licensing mode. Therefore, the License Manager list
	of per seat licenses for File and Print Services may become filled with invalid
	user names. If the license limit is reached, the administrator has to use
	License Manager and manually delete invalid user accounts.
	
	CAUSE
	=====
	
	FPNW registers the user with License Manager before it tries to logon the user.
	FPNW does not have the SID so it reports the user by name. Any misspelled user
	name or logon attack against FPNW uses one per seat license.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 4.0. This problem was first corrected in Windows NT 4.0 Service
	Pack 4.0.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbServicesNetwareSearch kbFPNW400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
