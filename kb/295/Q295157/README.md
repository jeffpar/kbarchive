---
layout: page
title: "Q295157: Preinst.exe and Delgrp.exe Utilities May Return Errors on SQL 2K"
permalink: /kb/295/Q295157/
---

## Q295157: Preinst.exe and Delgrp.exe Utilities May Return Errors on SQL 2K

	Article: Q295157
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,2.0
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbServer kbsms200 kbsms200bug kbsms120 kbsms120bug kbsmsUtil tslic_t
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft BackOffice Server 4.5 Resource Kit utilities, Preinst.exe and
	Delgrp.exe, may return errors when they are run on Systems Management Server
	(SMS) running Microsoft SQL Server 2000.
	
	When you attempt to run the Delgrp.exe utility with a SQL Server 2000 database,
	you may receive the following error message:
	
	  Cannot get SQL connection.
	
	When you attempt to run the Preinst.exe utility (which is included with SMS 2.0
	Support Tools), you may receive the following error message:
	
	  Cannot connect to the SQL server.
	
	If you have enabled the Failure Auditing feature for SQL Server 2000, you may
	receive the following SQL event in the Application event log:
	
	  18452 : Login failed for user '(null)'. Reason: Not associated with a trusted
	  SQL server connection.
	
	CAUSE
	=====
	
	This problem can occur because the default client network protocol has been
	changed from "Named Pipes" in Microsoft SQL Server 7.0 (and earlier) to "TCP/IP"
	in SQL Server 2000.
	
	WORKAROUND
	==========
	
	To work around this problem, change the default SQL network library to "Named
	Pipes." For example, start the SQL Server Client Network Utility (from SQL
	Server 2000) on the site server from which you are attempting to run either the
	Preinst.exe or Delgrp.exe utility.
	
	On the General tab, ensure that "Named Pipes" is listed in the "Enabled protocols
	by order" list. Use the arrows that are displayed to move "Named Pipes" so that
	it is first in the list.
	
	If you cannot set "Named Pipes" as the primary protocol, make the following
	configurations to the SQL Server 2000 and SMS security settings:
	
	1. Configure SMS so that it does not use integrated security.
	
	2. Configure SQL Server 2000 to use "SQL Server and Windows" security.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbConfig kbServer kbsms200 kbsms200bug kbsms120 kbsms120bug kbsmsUtil tslic_tslic 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : :1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
