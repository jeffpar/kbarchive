---
layout: page
title: "Q214942: SMS: WQL Queries Fail When Using Datetime in the Format 19981201"
permalink: /kb/214/Q214942/
---

## Q214942: SMS: WQL Queries Fail When Using Datetime in the Format 19981201

{% raw %}

	Article: Q214942
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 24-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a WQL query using datetime as a criteria in the format
	19981201000000.000000+000, the query fails with the error:
	
	  Generic Failure
	
	To view detailed error information, click the More Information button and look
	under Properties. The detailed error information for this problem is:
	
	  Query Failed. SQL Err >> #241 Sev 16: Syntax error converting datetime
	  from character string
	
	CAUSE
	=====
	
	WQL datetime format is not converted to Transact-SQL datetime format. Any WQL
	query against datetime fails. WQL requires the datepart keyword for this type of
	query.
	
	WORKAROUND
	==========
	
	A query using the standard WQL datetime format, such as below, would fail:
	
	  select * from sms_statusmessage where time="19981201000000.000000+000"
	
	Instead, use datepart to build a successful query:
	
	  select * from sms_statusmessage where datepart(mm, time) = 12 and datepart(dd, time) = 1 and datepart(yy, time) = 1998
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Although using datepart produces the most consistent results, you can query
	using other datetime formats. Several example queries are listed below. Because
	SQL stores (and returns) milliseconds, queries that do not anticipate the
	milliseconds returned by SQL will produce unpredictable results.
	
	Examples of unsuccessful queries:
	
	  select * from sms_statusmessage where time="12/01/98"
	  select * from sms_statusmessage where time="12/01/98 00:00"
	
	Examples of similar queries that are successful:
	
	  select * from sms_statusmessage where time >"12/01/98"
	  select * from sms_statusmessage where time >"12/01/98 00:00"
	  select * from sms_statusmessage where time between "12/01/1998 0:00" and "12/2/1998 23:59"
	
	NOTE: The order of the datetime format is language dependent; the examples given
	above are based on US English.
	
	For additional information about the Systems Management Server Web-Based
	Enterprise Management Query Language see the Microsoft Systems Management Server
	Toolkit.
	
	Additional query words: prodsms wbem tsql t-sql tran-sql trans-sql
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
