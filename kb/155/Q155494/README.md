---
layout: page
title: "Q155494: Limiting the Number of Records Returned by IDC"
permalink: /kb/155/Q155494/
---

## Q155494: Limiting the Number of Records Returned by IDC

{% raw %}

	Article: Q155494
	Product(s): Internet Information Server
	Version(s): 1.0 2.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Internet Information Server (IIS) Internet Database Connector
	(IDC) to query large databases, for example, a Microsoft SQL Server, a large
	amount of data may be returned causing the browser to hang for long periods of
	time.
	
	CAUSE
	=====
	
	If the query used is very general, a large number of records may be returned
	from the database. For example, Microsoft SQL Server can return up to 4 billion
	records from a single query. In most cases, this could be a large portion of the
	database. Various browsers will react differently because a large amount of data
	will be received.
	
	WORKAROUND
	==========
	
	To prevent browser overload, use the MaxRecords parameter in the .IDC file that
	you are using to make the database query. For example,
	
	Datasource: Web SQL
	Username: sa
	MaxRecords: 100
	Template: query.htx
	SQLStatement:
	+SELECT FirstName, LastName
	+FROM Guests ...
	
	In this example, MaxRecords would limit the records returned to 100.
	
	Additional query words: odbc iis htx idc
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis200 kbiis100
	Version           : 1.0 2.0
	
	=============================================================================
	

{% endraw %}
