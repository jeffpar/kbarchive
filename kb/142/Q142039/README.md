---
layout: page
title: "Q142039: Restrictions on Making SQL Server Changes for a Child Site"
permalink: /kb/142/Q142039/
---

## Q142039: Restrictions on Making SQL Server Changes for a Child Site

	Article: Q142039
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Running SMSSetup at a central site does not allow you to change the reporting of
	a child site from one SQL server to another or to change the SQL password for a
	child site.
	
	CAUSE
	=====
	
	SMSSetup is run directly from a site server and is used to make changes for that
	site only. SMSSetup allows you to make changes to the SQL Server, such as the
	server name, database, logon ID, and password. These changes are changed for the
	current site only. If you change the name of the SQL Server, this means that the
	current site, from which you are running SMSSetup, will report to the new
	server. Currently there is no way to focus on a child site and run SMSSetup to
	change the SQL Server information for that child site.
	
	The SMS Administrator's Manual and online Help indicate that changes made are for
	the current site, but in fact you cannot use the SMSSetup to make changes for a
	child site.
	
	RESOLUTION
	==========
	
	In order to make changes for a child site, SMSSetup must be run from the site
	server for the child site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.x. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
