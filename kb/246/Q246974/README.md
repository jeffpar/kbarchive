---
layout: page
title: "Q246974: SMS: Mandatory Assignments May Not Run If CAP Cannot Be Reached"
permalink: /kb/246/Q246974/
---

## Q246974: SMS: Mandatory Assignments May Not Run If CAP Cannot Be Reached

{% raw %}

	Article: Q246974
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbAdvertisement kbCAP kbSoftwareDist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a client computer that belongs to more than one Systems Management Server
	(SMS) site receives a mandatory assignment configured as "not mandatory over
	slow links," the Advertised Programs Manager (APM) on the client tries to
	connect to a Client Access Point (CAP) of the first site in the site list.
	
	If the CAP of this site cannot be reached, APM incorrectly determines that the
	client is on a slow link, even if the advertisement came from a site whose CAPs
	are reachable, and over a fast link. When this happens, the Smsapm32.log on the
	client may show the following output:
	
	SCHEDULER: ERROR: Unable to connect to CAP to test network speed - assuming
	network is slow~  $$<APM><Mon Nov 15 08:38:12.050 1999><thread=4199866221 (0xFA54DF6D)>
	
	SCHEDULER: Not scheduling job because it's not mandatory over a slow link~
	$$<APM><Mon Nov 15 08:38:12.050 1999><thread=4199866221 (0xFA54DF6D)>
	
	This error message can also occur if the first site in the site list was
	uninstalled, but the client settings for the site are not removed.
	
	WORKAROUND
	==========
	
	To work around this problem, make the site with accessible CAPs the first site
	in the list. To switch the site order:
	
	1. Start the Systems Management tool in Control Panel.
	
	2. On the Sites tab, click the appropriate site, and then click Move Up until
	  the site is at the top of the list.
	
	If the error message occurs because a site server was uninstalled but the clients
	still have settings for the site, you can expedite the removal of the site
	settings on the client by changing the value of the following registry key to a
	value of greater than 60 days:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Client\Sites\Shared\<sitecode>\Site
	  Config Last Checked
	
	The settings are deleted during the next Client Configuration Installation
	Manager (CCIM) interval (every 23 hours).
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbAdvertisement kbCAP kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
