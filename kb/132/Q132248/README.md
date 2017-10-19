---
layout: page
title: "Q132248: SMS Fails To Create Jobs On Non-US SQL Server 4.21a"
permalink: /kb/132/Q132248/
---

## Q132248: SMS Fails To Create Jobs On Non-US SQL Server 4.21a

	Article: Q132248
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Systems Management Server fails to create jobs on site servers using a non- U.S.
	version of Microsoft SQL Server version 4.21a and the following appears in the
	Systems Management Server event log:
	
	  323 The job has been failed without performing any actions, because the
	  generated list of target workstations was empty. The provided query, machine
	  group, or machine path, along with any site limiting, resulted in zero
	  machines being targeted. Therefore, the job has nothing to do.
	
	CAUSE
	=====
	
	The time and date format used for SQL Server do not match the required formats
	used for Systems Management Server. For example, if you install a French version
	of SQL Server on a U.S. version of Windows NT, French is the default language
	for the SQL Server.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Run SQL Administrator and connect to SQL Server.
	
	2. Choose Logins to open the System Logins Management window.
	
	3. Double-click on the SMS account used for SQL operations to open the System
	  Logins Properties window for that account.
	
	4. From the Language scroll box, select "us_english".
	
	5. Restart SQL Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbConfig smsconfig 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
