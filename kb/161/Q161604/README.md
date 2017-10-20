---
layout: page
title: "Q161604: SMS: PGC Application Is Reset with a &quot;Configure&quot; Status"
permalink: /kb/161/Q161604/
---

## Q161604: SMS: PGC Application Is Reset with a &quot;Configure&quot; Status

{% raw %}

	Article: Q161604
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A shared network application is required to rerun the one-time configuration
	script after it has been successfully configured.
	
	CAUSE
	=====
	
	If a package property is changed for a shared network application, the network
	applications database (NAD) timestamp for that shared network application is
	updated as well.
	
	When Program Group Control (PGC) runs on the client, it resets the package status
	in the client registry from "Status=Success" to "Status=Configure." This forces
	the application to run the one-time installation again.
	
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. This problem was corrected in the latest Microsoft
	Systems Management Server 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	----------------
	
	The package property may have been updated by the administrator, or it may have
	been updated as the result of a NAD update triggered by a Systems Management
	Server utility (the ones provided in the Support or PSSTools directories of the
	Systems Management Server compact disc).
	
	Minimizing changes to the packages reduces the frequency of having to reinstall
	any shared network applications.
	
	Additional query words: prodsms apptcl
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : :1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
