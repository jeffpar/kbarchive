---
layout: page
title: "Q298726: SMS: Backup Status Message 5013 Has Missing Insertion String"
permalink: /kb/298/Q298726/
---

## Q298726: SMS: Backup Status Message 5013 Has Missing Insertion String

	Article: Q298726
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) Backup service status message 5013 that
	signals a successful database dump of SQL Server databases during the SMS Backup
	process may be missing an insertion string in the status message description. In
	the following example, database names and locations are examples:
	
	  SMS Site Backup successfully backed up master database
	  C:\backups\test\SiteDBServer\SMSbkSQLDBmaster.dat to.
	
	The description should appear as:
	
	  SMS Site Backup successfully backed up site database master to
	  C:\backups\test\SiteDBServer\SMSbkSQLDBmaster.dat
	
	Note that the string site database is missing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms sms backup process
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
