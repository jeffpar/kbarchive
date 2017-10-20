---
layout: page
title: "Q176256: FIX: ODBC Driver May Return &quot;TDS Buffer Length Too Large&quot; Error"
permalink: /kb/176/Q176256/
---

## Q176256: FIX: ODBC Driver May Return &quot;TDS Buffer Length Too Large&quot; Error

{% raw %}

	Article: Q176256
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	BUG #: 17365
	
	SYMPTOMS
	========
	
	In a very slow network environment such as a WAN or dial-up network, where TDS
	packets may be delayed during normal transmissions, an ODBC application with
	asynchronous mode enabled may return one of the following TDS protocol related
	errors, depending on the timing of the network read and the versions of the ODBC
	drivers used:
	
	- Unknown Token Received from SQL Server
	
	- TDS Buffer Length Too Large, or TDS Buffer Link Too Large
	
	- Protocol Errors in TDS Stream
	
	- Memory Allocation Failure
	
	This problem is more likely to occur when you are using TCP/IP sockets than other
	IPs.
	
	CAUSE
	=====
	
	When an ODBC driver's call to Net-Library fails to return data immediately due
	to slow network transmissions, the driver switches to asynchronous mode. When
	new TDS data arrives, the ODBC driver resumes its network read. However, under
	TCP/IP sockets with a slow and routed network (such as a WAN), where big TDS
	packets are typically split across different TCP packets and multiple TDS
	packets can be coalesced into a single TCP packet, the resumed network read may
	return the remaining part of the previous TDS packet (as it should), but the
	driver can be confused by this data stream, which causes the error.
	
	Under other IPCs, multiple TDS packets are typically not coalesced together
	during transmissions; therefore, the problem is less likely to occur with other
	IPCs.
	
	WORKAROUND
	==========
	
	To work around this problem, disable the asynchronous mode. For more information
	on how to do this, consult your product documentation or see the following
	article in the Microsoft Knowledge Base:
	
	  Q153908 FIX: 16-bit Driver Times Out on Async Calls to SQLTables
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the SQL Server ODBC driver
	versions 2.5 and 2.65.
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: netlib dblib db-lib async
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300 kbODBC200
	Version           : :2.0,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
