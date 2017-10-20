---
layout: page
title: "Q256202: SMS: Upgrading SQL Server May Not Succeed When Running SMS"
permalink: /kb/256/Q256202/
---

## Q256202: SMS: Upgrading SQL Server May Not Succeed When Running SMS

{% raw %}

	Article: Q256202
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbDatabase kbsms200 kbsms200bug
	Last Modified: 03-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SQL servers that host the Systems Management Server (SMS) database may
	experience error messages when you are upgrading SQL Server from one version to
	another or from one service pack level to another. This behavior may also occur
	when you attempt to perform an upgrade to the SQL servers by using Smssetup and
	the integrated SQL installation methodology.
	
	Note that this behavior may occur with any program that requires SQL connectivity
	and is not disabled before you run a SQL upgrade.
	
	CAUSE
	=====
	
	When the SQL upgrade starts, SQL services are stopped and then restarted in
	Single User mode for the upgrade. If the SMS services (or other software that
	actively accesses SQL) are not stopped before you start the upgrade, SMS may
	continue to make requests for SQL connections while the SQL service is stopped.
	When the SQL service is restarted in Single User mode, SMS may have queued a
	request for a SQL connection. At startup, SQL services have a slight delay
	before requesting a connection to SQL. Because of this delay, SMS (or other SQL
	programs) may have already taken the connection; SQL will not be able to connect
	to the database to perform the requested upgrade.
	
	When you perform an upgrade to SQL Server, always disable any program (including
	SMS) that relies upon SQL Server. Use the following steps as a general guideline
	to make sure that SMS (or other programs or services) does not cause a problem
	with a SQL upgrade:
	
	1. Copy the SQL upgrade image locally (that is, do not upgrade over the
	  network).
	
	2. Stop all processes and services not directly related to Microsoft Windows NT
	  or SQL.
	
	3. For SMS 2.0, stop and disable Windows Management so that no other process can
	  restart it.
	
	4. Remove the computer from the network.
	
	5. Run the SQL upgrade from a local CD-ROM or a locally copied image.
	
	6. Put the computer back on the network.
	
	7. Restart Windows Management and reconfigure it for an automatic start.
	
	8. Reboot the computer to ensure a typical startup sequence for all programs and
	  services.
	
	WORKAROUND
	==========
	
	If you have experienced this behavior, stop all services as described earlier,
	and then run the SQL Setup program again to allow the installation to run
	correctly.
	
	MORE INFORMATION
	================
	
	Note that the integrated SQL Setup feature in SMS Setup only supports clean
	installations of SQL. Using this feature to upgrade existing installations of
	SQL is not supported.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
