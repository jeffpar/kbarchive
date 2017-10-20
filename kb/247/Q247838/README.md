---
layout: page
title: "Q247838: SMS: Clients Not Installed When Site Server in Resource Domain"
permalink: /kb/247/Q247838/
---

## Q247838: SMS: Clients Not Installed When Site Server in Resource Domain

{% raw %}

	Article: Q247838
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsetup kbClient kbConfig kbSecurity kbsms200 kbCAP
	Last Modified: 10-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Systems Management Server (SMS) site server is installed in a resource
	domain and the clients reside in the master domain, only the Available Programs
	Manager (APM) and client-based components are installed. It is possible that the
	clients will not be able to access the client access point (CAP) for the site.
	When this behavior occurs, the remainder of the client components are not
	installed.
	
	To fully install the client components, you must perform the following tasks:
	
	For sites where the CAP resides on a member server:
	
	- Add the Domain Admins group from the master domain to the local
	  Administrators group on the member server with the CAP.
	
	  -and-
	
	- Add the Domain Users group from the master domain to the local Users group on
	  the member server with the CAP.
	
	-or-
	
	For sites where the CAP resides on a domain controller in the resource domain:
	
	- Add the Domain Users group from the master domain to the local Users group of
	  the resource domain where the SMS site server resides.
	
	After the CAP's security has been addressed, the SMS client components can be
	installed. When you either stop and start the SMS Client Service on the SMS
	clients or run one of the client-installation methods, the client contacts the
	CAP. It then installs the additional client components that have been enabled
	from the SMS Administrator Console.
	
	Additional query words: prodsms not available
	
	======================================================================
	Keywords          : kbsetup kbClient kbConfig kbSecurity kbsms200 kbCAP 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
