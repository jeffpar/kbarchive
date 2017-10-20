---
layout: page
title: "Q296377: SMS: Access Violation Errors During SQL Server Upgrade"
permalink: /kb/296/Q296377/
---

## Q296377: SMS: Access Violation Errors During SQL Server Upgrade

{% raw %}

	Article: Q296377
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbDatabase kbServer kbsms200 kbUpgrade
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a service pack upgrade to a Microsoft SQL Server that is a
	Systems Management Server (SMS) Site Database server, the SMS Executive service
	may generate an "Access Violation" error and log the following entries
	repetitively:
	
	Compsumm.log:
	
	  Error: Could not get a SQL connection from the connection cache. Will try
	  again in 60 seconds. : The handle is invalid.~~
	
	Sitestat.log:
	
	  Error: Could not get a SQL connection from the connection cache. Will try
	  again in 60 seconds. : The handle is invalid.~~
	  ---->: This is a Primary Site, the datastore is SQL
	
	CAUSE
	=====
	
	This issue occurs because during a SQL Server service pack upgrade, the
	MSSQLSERVER service restarts in single-user mode, which disconnects any
	processes that are currently connected to the SQL Server databases and which
	does not allow them access to any database objects until the upgrade is
	complete.
	
	WORKAROUND
	==========
	
	To work around this issue, on the SMS Site server, manually stop the
	SMS_SITE_COMPONENT_MANAGER service, the SMS_EXECUTIVE service, and the
	SMS_SQL_MONITOR service prior to performing the SQL Server service pack upgrade.
	
	MORE INFORMATION
	================
	
	Sites may stop and cease to function until you manually restart the services if
	you do not stop them prior to any SQL upgrades. Microsoft recommends that you
	always shut down the SMS_SITE_COMPONENT_MANAGER service, the SMS_EXECUTIVE, and
	the SMS_SQL_MONITOR service before you perform a SQL Server upgrade.
	
	Additional query words: prodsms sql database AV
	
	======================================================================
	Keywords          : kbinterop kbsetup kbDatabase kbServer kbsms200 kbUpgrade 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
