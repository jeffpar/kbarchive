---
layout: page
title: "Q122840: BUG: ODS Driver May Give an Error on Outer Join Escape Clause"
permalink: /kb/122/Q122840/
---

## Q122840: BUG: ODS Driver May Give an Error on Outer Join Escape Clause

	Article: Q122840
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# Addon_Bugs: 10589 (1.02.3231)
	
	SYMPTOMS
	========
	
	This information applies to driver developers writing a resource dynamic link
	library (DLL) for their Open Data Services (ODS) gateway using the ODS ODBC
	driver. The ODS driver gives a syntax error if the resource DLL indicates that
	Transact-SQL style outer joins are not supported by the gateway. Driver
	developers wanting to access an ODS gateway via ODBC can use the ODS ODBC driver
	and write a resource DLL for this driver.
	
	WORKAROUND
	==========
	
	Driver developers should set IDS_FEATURE_TSQL_OJ_SUPPORT to Y, and make sure
	that the gateway supports Transact-SQL style outer joins.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC ODS Driver version
	1.02.3231. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The resource DLL is used to customize the driver to work with the capabilities
	provided by the ODS gateway. One of the things that can be customized is the
	type of outer joins the gateway can handle. This is controlled by two entries in
	the rc file associated with the resource DLL:
	
	- IDS_INFO_OFFSET+SQL_OUTER_JOINS
	
	- IDS_FEATURE_TSQL_OJ_SUPPORT
	
	When IDS_INFO_OFFSET+SQL_OUTER_JOINS is set to Y, it indicates the gateway
	supports outer joins. When IDS_FEATURE_TSQL_OJ_SUPPORT is set to Y, it indicates
	the gateway supports the outer join syntax of Transact-SQL. Setting these to N
	means these features are not supported.
	
	When a gateway supports outer joins but does not support Transact-SQL style outer
	joins, the ODS gateway driver does not parse the outer join escape clause to
	convert it to a Transact-SQL style outer join; instead, it will send it through
	to the gateway.
	
	To achieve this behavior, IDS_INFO_OFFSET+SQL_OUTER_JOINS should be set to Y, and
	IDS_FEATURE_TSQL_OJ_SUPPORT should be set to N. However, when this is done, the
	ODS driver instead of sending the escape clause through to the gateway generates
	a syntax error. For example, if the application calls SQLExecDirect to execute
	the following statement:
	
	  SELECT *  FROM {oj <table1> LEFT OUTER JOIN <table2>
	              ON <table1>.<col1> = <table2>.<col2> }
	
	You get an error:
	
	  SQLSTATE 37000
	  [Microsoft][ODBC ODS Gateway Driver]Syntax error in SQL dynamic statement
	
	Additional query words: 1.02.3231
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
