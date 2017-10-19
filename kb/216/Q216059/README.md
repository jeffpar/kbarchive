---
layout: page
title: "Q216059: SMS: SQL Server Requirements Incorrect in Administrator's Guide"
permalink: /kb/216/Q216059/
---

## Q216059: SMS: SQL Server Requirements Incorrect in Administrator's Guide

	Article: Q216059
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbdocerr kbDatabase kbsms200
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some errors in the Microsoft Systems Management Server
	2.0 Administrator's Guide about SQL Server requirements.
	
	MORE INFORMATION
	================
	
	Microsoft Systems Management Server 2.0 Administrator's Guide incorrectly states
	SQL Server 6.5 Service Pack 5 or later as a requirement for Systems Management
	Server 2.0. The errors are in Chapter 5 on page 127, and in Appendix A on page
	669.
	
	Systems Management Server 2.0 running with SQL Server 6.5 requires SQL Server 6.5
	Service Pack 4 or later. In addition to applying SQL Server 6.5 Service Pack 4,
	you should copy the Sqlcrt60.dll file from the Sqlsetup\Sqlhotfix folder on the
	Systems Management Server 2.0 CD-ROM to the Mssql\Binn folder on the SQL Server
	computer.
	
	Additional query words: prodsms sp sp4 sp5 sp5a
	
	======================================================================
	Keywords          : kbdocerr kbDatabase kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
