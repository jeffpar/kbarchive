---
layout: page
title: "Q138254: Memory Leak in SQL Server 6.0 Affects SMS"
permalink: /kb/138/Q138254/
---

## Q138254: Memory Leak in SQL Server 6.0 Affects SMS

	Article: Q138254
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 09-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT running Systems Management Server may experience the following:
	
	- Gradually run out of virtual memory causing slowed performance.
	
	- Stopped processing of alerts, jobs, and other critical functions of Systems
	  Management Server.
	
	CAUSE
	=====
	
	The problems can occur on systems running any one of the following
	combinations:
	
	- Windows NT 3.5x with Systems Management Server 1.1 and SQL 4.21a
	
	- Windows NT 3.5x with Systems Management Server 1.1 and SQL 6.0
	
	In short, any combination which is using the NTWDBLIB.DLL with a 6.0.x version.
	
	The account being used to connect to SQL Server has an out-of-date password. When
	Systems Management Server processes attempt to connect to SQL Server using an
	out-of-date password, the SQL 6.0 NTWDBLIB.DLL's dbopen() function leaks 32K.
	Because Systems Management Server processes attempt to connect quite often to
	perform processing, memory can be consumed at a rapid rate until the system runs
	out of virtual memory. The "Unable to allocate virtual memory" error message
	appears.
	
	
	RESOLUTION
	==========
	
	To avoid the memory leak, ensure that the password set in SQL matches the
	password being used by the Systems Management Server processes. Logon failures
	caused by a password problem can render the site inoperable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SQL Server version
	6.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sql prodnt prodsms sms
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
