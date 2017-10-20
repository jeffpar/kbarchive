---
layout: page
title: "Q298033: SMS: Can't Use Remote Control w. Unsupported Database Collation"
permalink: /kb/298/Q298033/
---

## Q298033: SMS: Can't Use Remote Control w. Unsupported Database Collation

{% raw %}

	Article: Q298033
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbDatabase _IK964 kbServer kbsms200 kbHelpDesk kbRemoteProg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have appropriate Systems Management Server (SMS) security rights and
	try to remotely control an SMS client, you may be unable to do so. The following
	error message may be generated:
	
	  Remote Tools
	  Security rights to run remote tools on this client have been denied.
	
	Note that this issue may also occur when you run the Remote.exe command from a
	command prompt.
	
	CAUSE
	=====
	
	This issue can occur if the SMS database is located on a Microsoft SQL Server
	2000 computer on which the database is configured to use
	SQL_SwedishStd_Pref_CP1_CI_AS collation. Unless this configuration is specified
	manually, either on database or server level, this issue occurs when you upgrade
	the database server from SQL Server 7.0 configured with ISO character set (ID=1)
	and Swedish/Finnish (Std) dict order, case insensitive, uppercase pref sort
	order (ID=185). To determine whether this is the configured database collation,
	right-click the SMS database in SQL Server Enterprise Manager, and then click
	Properties. You can view the configured collation under Collation Name.
	
	MORE INFORMATION
	================
	
	Microsoft does not recommend or support the use of this collation in conjunction
	with SMS. If you are already running this database configuration, you may want
	to contact Microsoft Product Support Services (PSS) for assistance transferring
	the data in the SMS database to a server that is running a different collation.
	For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, view the following Microsoft Web site:
	
	  http://www.microsoft.com/support/supportnet/overview/overview.asp
	  (http://www.microsoft.com/support/supportnet/overview/overview.asp)
	
	
	
	Additional query words: prodsms SQL Error: Cannot resolve collation conflict for equal to operation.
	
	======================================================================
	Keywords          : kbinterop kbConfig kbDatabase _IK964 kbServer kbsms200 kbHelpDesk kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
