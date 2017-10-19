---
layout: page
title: "Q200713: SMS: Smsiddup.exe Fails with Case-Sensitive SQL Server Code Page"
permalink: /kb/200/Q200713/
---

## Q200713: SMS: Smsiddup.exe Fails with Case-Sensitive SQL Server Code Page

	Article: Q200713
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbsmsUtil smsdatabase smsutil
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Smsiddup.exe is a utility provided with Systems Management Server 1.2 Service
	Pack 4 that generates a report, Smsiddup.log, containing computers that have
	duplicate SMSIDs. This utility will fail on a database where Microsoft SQL
	Server is configured with a case-sensitive code page. Note that the default code
	page for SQL Server is not case-sensitive.
	
	When this problem occurs, you receive the following messages:
	
	  Searching Database for Machines with Duplicate SMS IDs
	
	  SQL Server message 207, state 2, severity 16:
	  Invalid column name 'SMSid0'.
	
	  SQL Server message 145, state 1, severity 15:
	  Order-by items must appear in the select-list if SELECT DISTINCT is
	  specified.
	
	  DB-LIBRARY error:
	  General SQL Server error: Check messages from the SQL Server.
	
	  SQL Server message 208, state 1, severity 16:
	  Invalid object name '#clonefind4'.
	
	  DB-LIBRARY error:
	  General SQL Server error: Check messages from the SQL Server.
	
	  No Machines with Duplicate SMS IDs Found
	
	  SQL Server message 3701, state 1, severity 11:
	  Cannot drop the table '#clonefind4', because it doesn't exist in the system
	  catalogs.
	
	  DB-LIBRARY error:
	  General SQL Server error: Check messages from the SQL Server.
	
	CAUSE
	=====
	
	The column names being passed to SQL Server are not the correct case for a
	case-sensitive server.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Systems
	Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time         Size     File name      Platform
	  -------------------------------------------------------
	  09/29/98  10:57        40,960   Smsiddup.exe   (x86)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms codepage codepages
	
	======================================================================
	Keywords          : kbDatabase kbsmsUtil smsdatabase smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
