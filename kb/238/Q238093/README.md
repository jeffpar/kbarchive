---
layout: page
title: "Q238093: SMS: Upgrade Error: Setup Cannot Upgrade the SMS Database"
permalink: /kb/238/Q238093/
---

## Q238093: SMS: Upgrade Error: Setup Cannot Upgrade the SMS Database

{% raw %}

	Article: Q238093
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbsms200 smssetup
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply a Systems Management Server 2.0 Service Pack, you may receive the
	following error message:
	
	  Fatal Error
	  Systems Management Server setup cannot continue because of the following
	  error.
	
	  Setup cannot upgrade the SMS database contact SQL administrator.
	
	Also, the Smssetup.log file may contain the following entry:
	
	  FAILED Sql Script: Creating indexes on <failed table name> SQL error
	
	For example, this message may be similar to this error message:
	
	  FAILED Sql Script: Creating indexes on StatusMessages
	
	CAUSE
	=====
	
	This issue can occur if the SMS database size is too small. The SMS database
	should be at least 30 percent greater that the data size.
	
	RESOLUTION
	==========
	
	To resolve this issue if you are using Microsoft SQL 7.0, verify that there is
	not a restriction on the database size and that the Auto Grow feature is
	enabled:
	
	1. In the SQL enterprise Manager tool, right-click the database name, and then
	  click Properties.
	
	2. On the General tab, you can adjust the database size and maximum file size.
	  If the Auto Grow feature is enabled and "Unrestricted filegrowth" is checked,
	  ensure there is enough free disk space on the drive specified as the database
	  file location.
	
	
	Additional query words: prodsms sp1 sp2 sp3 sp4
	
	======================================================================
	Keywords          : kbsetup kbsms200 smssetup 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
