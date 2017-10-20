---
layout: page
title: "Q270218: &quot;Use All Detected Servers&quot; in Multisite Domain Causes Errors"
permalink: /kb/270/Q270218/
---

## Q270218: &quot;Use All Detected Servers&quot; in Multisite Domain Causes Errors

{% raw %}

	Article: Q270218
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP4
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 29-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When two or more sites are configured in the same domain and one site has the
	"Use All Detected Servers" option selected in the "Domain Properties for logon
	servers" dialog box, newly installed clients may not show up in the Sites window
	of the Microsoft Systems Management Server (SMS) Administrator. You may also see
	the following error message in the Hman.log with blank entries for the SQL
	Server name, SQL Login name, and SQL database name:
	
	  {6534} INFO: Beginning processing cycle~ $$(SMS_HIERARCHY_MANAGER)(Mon Jun 26
	  16:18:55 2000~)(thread=326)
	  SQL Server = ~ $$(SMS_HIERARCHY_MANAGER)(Mon Jun 26 16:18:55
	  2000~)(thread=326)
	  SQL Login = ~ $$(SMS_HIERARCHY_MANAGER)(Mon Jun 26 16:18:55
	  2000~)(thread=326)
	  SQL database = ~ $$(SMS_HIERARCHY_MANAGER)(Mon Jun 26 16:18:55
	  2000~)(thread=326)
	  {6562} INFO: Checking access to SQL Server $$(SMS_HIERARCHY_MANAGER)(Mon Jun
	  26 16:18:55 2000~)(thread=326)
	  {6581} ERROR: Cannot establish a SQL connection.~
	  $$(SMS_HIERARCHY_MANAGER)(Mon Jun 26 16:18:55 2000~)(thread=326)
	  {6354} INFO: Work cycle completed: sleeping 300000 milliseconds~
	  $$(SMS_HIERARCHY_MANAGER)(Mon Jun 26 16:18:55 2000~)(thread=326)
	
	CAUSE
	=====
	
	When multiple sites within the same domain have the "Use All Detected Servers"
	option selected, one of the sites tries to install a logon server on top of the
	other site's existing logon server. This attempted installation results in the
	removal of several required SMS site registry settings. The blank or missing
	registry keys are:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Sms\Identification
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Sms\SQL Server
	
	WORKAROUND
	==========
	
	To work around this behavior, follow these steps:
	
	1. Change the logon server setting in all cases from "Use All Detected Servers"
	  to Use Specified Servers. Do not select any site servers.
	
	2. Remove and rebuild the site. For additional information about inactive SMS
	  site servers, click the article numbers below to view the articles in the
	  Microsoft Knowledge Base:
	
	  Q188055 SMS: How to Remove Inactive SMS Site Servers
	
	  Q183348 SMS: Secondary Sites Are No Longer Active
	
	3. Restore the SMS keys from a recent backup.
	
	4. Restore the SMS keys from the Software._ hive located in either the
	  %SystemRoot%\Repair directory or on the emergency repair disk.
	
	For additional information about the Rdisk.exe program, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q265422 How Rdisk.exe Updates Repair Information
	
	
	5. Rebuild the registry keys with the site information. Call Microsoft's SMS
	  Support office for assistance with this step.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120SP4
	Version           : :1.2 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
