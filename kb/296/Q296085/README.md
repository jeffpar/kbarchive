---
layout: page
title: "Q296085: HOWTO: Use SQL Server to Analyze Web Logs"
permalink: /kb/296/Q296085/
---

## Q296085: HOWTO: Use SQL Server to Analyze Web Logs

	Article: Q296085
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbGrpDSSIE kbDSupport
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Information Server/Services provides a number of formats to gather data
	in the form of web logs. For busy sites, these text-based flat files sometime
	become too much of burden to review and are ignored. A better way to review the
	data would make these logs a better resource for administrators and web
	masters.
	
	This article describes a method to import IIS logs in World Wide Web Consortium
	(W3C) Extended Logging format into Microsoft SQL Server to facilitate the review
	of the IIS log files. The techniques provided can also be altered for other log
	file formats.
	
	MORE INFORMATION
	================
	
	Web logs are delimited text files as specified by RFC 2616, "Hypertext Transfer
	Protocol -- HTTP/1.1" (http://www.rfc-editor.org/rfc/rfc2616.txt).
	
	In W3C Extended Logging format the fields are somewhat self explanatory: data and
	time are just what they seem; [c-ip] is the IP address of the client;
	[cs-method] is the HTTP method for the request that was met; [cs-uri-stem] is
	the document that has been requested; [cs-uri-query] is the query string that
	was sent as part of the request being logged; [sc-status] is the status code
	returned by the server; [sc-bytes] is the number of bytes that have been
	returned to the user; [time-taken] is the time in milliseconds that it took for
	the server to complete the processing of the request; [cs(Cookie)] is the
	cookie, or persistent data in the request; and [cs(Referer)] is the URL of the
	previous site visited by the user. For the W3C Extended Logging format, there
	are a number of additional fields that can be chosen, which are described in IIS
	Help and at the following Microsoft Web site:
	
	  http://www.microsoft.com/windows2000/en/server/iis/htm/core/iiintlg.htm
	
	The logs are formatted as follows:
	
	+----------------------------------------------------------------------------------------------------------------------------------------------+
	| date | time | c-ip | cs-method | cs-uri-stem | cs-uri-query | sc-status | sc-bytes | time-taken | cs(User-Agent) | cs(Cookie) | cs(Referrer) | 
	+----------------------------------------------------------------------------------------------------------------------------------------------+
	
	The header of the log files corresponds to the fields chosen in the Properties of
	the Web site, on the Web Site tab, and in the case of W3C Extended Logging, the
	Extended Properties tab. If your web logs are already in a table in Microsoft
	SQL Server, it is likely because of ODBC logging. However, when you are using
	ODBC logging the fields are not configurable. IIS Help has instructions on
	setting up ODBC logging, which includes using Logtemp.sql to create the table in
	the expected structure.
	
	You could use Enterprise Manager to create the table, but to make it faster and
	to aid in the automation of the process, instead use the following script in
	Query Analyzer to create the table:
	
	  CREATE TABLE [dbo].[tablename] (
	  	[date] [datetime] NULL,
	  	[time] [datetime] NULL ,
	  	[c-ip] [varchar] (50) NULL ,
	  	[cs-method] [varchar] (50) NULL ,
	  	[cs-uri-stem] [varchar] (255) NULL ,
	  	[cs-uri-query] [varchar] (2048) NULL ,
	  	[sc-status] [int] NULL ,
	  	[sc-bytes] [int] NULL ,
	  	[time-taken] [int] NULL ,
	  	[cs(User-Agent)] [varchar] (255) NULL ,
	  	[cs(Cookie)] [varchar] (2048) NULL ,
	  	[cs(Referer)] [varchar] (2048) NULL 
	  	)
	
	Note that some of these fields are quite large and may not be necessary for
	reviewing your particular log files.
	
	Once the table has been created, you can import the data by using the Import
	Wizard, mapping from the *.log file to the database and table.
	
	Using the Wizard can be tedious, so the following can be used to expedite
	importing the web logs:
	
	  BULK INSERT [dbo].[tablename] FROM 'c:\weblog.log'
	  WITH (
	      FIELDTERMINATOR = ' ',
	      ROWTERMINATOR = '\n'
	  )
	
	Note that the bulk insert will fail when it encounters lines that start with "#".
	For web logs, this includes the first four lines, as well as any other instances
	when the server is stopped and started, since the header lines are written when
	the service is restarted. The following Microsoft Knowledge Base article
	provides a utility and source code to remove these lines and prepare the log for
	the bulk insert to SQL Server:
	
	  Q296093 FILE: PrepWebLog Utility Prepares IIS Logs for SQL Bulk Insert
	
	When the import has completed, you can use Query Analyzer to run queries to
	organize the data. For example:
	
	  Select [cs-uri-stem], [time-taken] from tablename where [time-taken] >= 20000 and time between '1899-12-30 16:30:00.000' and '1899-12-30 17:30:00.000' 
	
	This query will display the names of all the pages that took more than 20 seconds
	to process and that were processed between 4:30 and 5:30 PM, along with the
	process time (in milliseconds) for each.
	
	Note that by default web logs are recorded in Greenwich mean time, so unless the
	changes have been made to record the logs in local time, you must adjust for
	local time when you review the logs.
	
	Another sample query:
	
	  Select distinct [cs-uri-stem], [time-taken] from tablename where [time-taken] > (select avg([time-taken]) from tablename)order by [time-taken] desc
	
	This query finds the average [time-taken] for each entry in the log file, and
	then selects the [cs-uri-stem] and the [time-taken] and organizes this in
	descending order by [time-taken]. Adding a "time between" clause could further
	isolate the results of this query.
	
	REFERENCES
	==========
	
	NOTE: Bulk insert will not work with SQL Server 7.0, but it does work with SQL
	Server 2000. For additional information, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q272292 BUG: Error 7399 When You Bulk Insert into Table with Column Default
	  on a NUMERIC or DECIMAL Column
	
	For more information on LocalTimeRollover for the IIS logs and the
	LogFileLocaltimeRollover setting:
	
	  http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/iisref/apro186q.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSSIE kbDSupport 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : :3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
