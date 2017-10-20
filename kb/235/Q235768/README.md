---
layout: page
title: "Q235768: SMS: Using /Upgrade Switch with Command Line Setup Causes Error"
permalink: /kb/235/Q235768/
---

## Q235768: SMS: Using /Upgrade Switch with Command Line Setup Causes Error

{% raw %}

	Article: Q235768
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the Systems Management Server setup to upgrade a version 1.2 site
	from a command line, the following error appears:
	
	  Setup cannot upgrade the Systems Management Server database. Contact your SQL
	  Administrator.
	
	Microsoft has seen the problem in both Single Domain and Master Domain
	environments. This error occurs regardless of the security implementation of
	Microsoft SQL Server.
	
	When an administrator runs SETUP /UPGRADE from the x:\smssetup\bin\i386 directory
	on the Systems Management Server CD, the error is generated. Setup starts
	normally, then it begins the shutdown for the 1.2 site, and creates the server
	connection account. When the setup process trys to upgrade the site database the
	stops responding.
	
	At this point, the Systems Management Server 1.2 site is unrecoverable. If an
	administrator attempts to run it from the User Interface, it does not respond.
	If setup is run from the Configuration Manager, it does not respond. If a site
	reset is attempted, the reset will fail with Site Configuration Manager unable
	to start, and a Site Control file that cannot be written to.
	
	If a Systems Management Server site is upgraded using the Wizard provided in the
	Administration Console, the database is converted with no errors.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
