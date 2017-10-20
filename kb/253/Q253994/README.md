---
layout: page
title: "Q253994: SMS: Network Discovery Does Not Change &quot;client=1&quot; to &quot;client=0&quot;"
permalink: /kb/253/Q253994/
---

## Q253994: SMS: Network Discovery Does Not Change &quot;client=1&quot; to &quot;client=0&quot;

{% raw %}

	Article: Q253994
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clients that have been uninstalled from a site may still be reported as existing
	clients in the discovery database, preventing Windows NT Remote Client
	Installation from attempting to reinstall uninstalled clients. This issue occurs
	only under the following circumstances:
	
	- Windows NT Remote Client Installation is the only enabled installation
	  method.
	
	- Network Discovery and Heartbeat Discovery are the only enabled discovery
	  methods.
	
	CAUSE
	=====
	
	This behavior occurs because the Network Discovery agent does not include the
	"client" property in discovery data records (DDRs) that it generates.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	There are two stored procedures to implement this fix: sp_SMSDisplayOldClient
	and sp_SMSUpdateOldClient. The 60052.sql script creates both of them.
	
	sp_SMSDisplayOldClient
	----------------------
	
	This procedure lists all systems that have not been discovered by Windows NT
	Logon Discovery or Heartbeat Discovery within the specified day interval and
	whose client property is currently set to "installed" (1).
	
	Syntax: sp_SMSDisplayOldClient [<dayinterval>]
	
	<dayinterval> is the number of days within which a client is considered
	current. Set this value to something higher than the Heartbeat Discovery
	interval. The range is 1 - 366.
	
	sp_SMSUpdateOldClient
	---------------------
	
	This procedure changes the client property to "not installed" (0) on all systems
	that have not been discovered by Windows NT Logon Discovery or Heartbeat
	Discovery within the specified day interval and whose client property is
	currently set to "installed" (1).
	
	Syntax: sp_SMSUpdateOldClient [<dayinterval>]
	
	<dayinterval> is the number of days within which a client is considered
	current. Set this to something higher than the heartbeat discovery interval. The
	range is 1 - 366.
	
	NOTE: To provide ongoing maintenance, you can schedule sp_SMSUpdateOldClient to
	run as a recurring SQL command in the Systems Management Server (SMS)
	Administrator console. To do so:
	
	1. Stop the SMS_SITE_COMPONENT MANAGER and SMS_EXECUTIVE services.
	
	2. Run the 60052.sql script by using SQL Query Analyzer or ISQL/W.
	
	3. Restart the services that you stopped in step 1.
	
	4. In the SMS Administrator console, expand the Site Hierarchy, <Site
	  Code>, Site Settings, Database Maintenance, and SQL Commands nodes.
	
	5. Right-click the node, point to New and then click SQL Command.
	
	6. Type a descriptive name for the command.
	
	7. In the SQL Command box, type the following line:
	
	  exec sp_SMSUpdateOldClient [<dayinterval>]
	
	8. Select a log path.
	
	9. Set an appropriate schedule.
	
	10. Click OK.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
