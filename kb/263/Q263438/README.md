---
layout: page
title: "Q263438: Integrated SQL Setup Does Not Work if Server Name Has Hyphens"
permalink: kb/263/Q263438/
---

## Q263438: Integrated SQL Setup Does Not Work if Server Name Has Hyphens

	Article: Q263438
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsetup kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) Setup cannot perform an integrated SQL
	installation on site server computers that contain hyphen characters (-) in
	their names. Note that the Express Setup option for SMS also exhibits this
	problem.
	
	CAUSE
	=====
	
	This problem can occur because the SQL version 6.5 installation is restricted to
	servers without hyphens in their names. SQL 7.0 does not have this restriction.
	However, SMS Setup does not differentiate between the two while considering the
	server name for a SQL installation. SMS Setup does not accept hyphenated server
	names for either SQL version during the SQL installation.
	
	SQL 6.5 does not work properly if the computer name contains hyphens, but SQL 7.0
	removed this restriction. SMS Setup was never updated for the new behavior, so
	it checks the computer name under the assumption that every version of SQL
	server has the hyphen restriction. This blocks Express Setup and integrated SQL
	installations on these computers.
	
	WORKAROUND
	==========
	
	To work around this problem, avoid installing SQL on servers whose names contain
	hyphens. If you are running SQL 7.0, install SQL first, and then perform a
	custom installation for SMS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
