---
layout: page
title: "Q131010: How To Speed Site Property Changes"
permalink: /kb/131/Q131010/
---

## Q131010: How To Speed Site Property Changes

{% raw %}

	Article: Q131010
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbHMan kbSCMan smsdatabase smshierman smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Depending on the Site Server's service response settings, the services involved
	in changing a site's properties may sit idle for an extended period of time
	waiting for their polling interval to expire. If proposed site property changes
	exist, their implementation can be expedited, rather than waiting up to 30
	minutes for them to be imposed.
	
	MORE INFORMATION
	================
	
	Proposed site properties are written to the SQL database for the site, and there
	they wait for the Hierarchy Manager service to extract them to a .CT1 file for
	hand-off to the Site Configuration Manager. Because the Hierarchy Manager bases
	its interaction for reads from the database on a polling interval, the service
	can be stopped and restarted in order to force it to check the database for
	changes.
	
	Once it has pulled the changes from the database, it writes them to a *.CT1 file
	and the Site Configuration Manager immediately wakes up (upon detecting the new
	*.CT1 file) and implement the changes.
	
	Finally, Site Configuration Manager writes a new *.CT2 file containing
	confirmation of the proposed changes and this file is handed off to the
	Hierarchy Manager. Hierarchy Manager then updates the database, making the
	proposed site properties, actual site properties.
	
	NOTE: Use of the unsupported SENDCODE.EXE utility to wake up the Site Config
	Manager will do nothing until there is a valid *.CT1 file containing the
	proposed changes. Stopping and starting the Hierarchy Manager is the proper way
	to jump-start the process.
	
	Additional query words: config prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbHMan kbSCMan smsdatabase smshierman smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
