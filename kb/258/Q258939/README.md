---
layout: page
title: "Q258939: Recommendations for Connecting to Databases Through IIS"
permalink: kb/258/Q258939/
---

## Q258939: Recommendations for Connecting to Databases Through IIS

	Article: Q258939
	Product(s): Internet Information Server
	Version(s): 1.5,2.0,2.01,2.1,2.1 SP1,2.1 SP2,2.5,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 03-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0, 5.0 
	- ActiveX Data Objects (ADO), versions 1.5, 2.0, 2.01, 2.1, 2.1 SP1, 2.1 SP2, 2.5 
	- Microsoft Active Server Pages 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is intended as a "best practices" guide for when you call database
	components from Web applications in Internet Information Server/Services (IIS),
	though most recommendations apply to any distributed application that accesses
	database connections, either locally or remotely.
	
	MORE INFORMATION
	================
	
	When Using ADO in ASP, Make Sure to...
	--------------------------------------
	
	- Always close recordsets and connections.
	
	  rs.close
	  set rs=nothing
	  conn.close
	  set conn=nothing
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q176056 INFO: ADO/ASP Scalability FAQ
	
	- Open late, close early: Open ADO objects just before they're needed and close
	  them immediately after you're done. This frees resources while other logic is
	  processing.
	
	- Don't create ADO objects in session variables. This effectively bypasses MTX
	  connection and thread pooling. If threads aren't pooled, each object created
	  per user can tie up a thread. Also, if the object isn't specifically closed,
	  a session object variable can live and tie up a thread for the life of a
	  session (20 minutes after the last click).
	
	- Do not pass parameters to the command object in the execute statement.
	
	- If you are not marshalling data through a firewall, instantiate objects with
	  Server.CreateObject. The Server part tells Microsoft Transaction Server to
	  create the object in a Transaction Server package so that resources are
	  pooled. (NOTE: this does not apply to IIS 5.0/COM+.)
	
	- Do not reuse recordset or command variables. Create new ones.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q197449 PRB: Problems Reusing ADO Command Object on Multiple Recordsets
	
	Additional Items to Consider:
	
	- While configuring Open Database Connectivity (ODBC) settings for your data
	  source, use system data source names (DSNs) as much as possible, rather than
	  file DSNs. A system DSN is three times faster than a file DSN.
	
	- Don't put ADO connections in session object. ODBC 3.x does connection pooling
	  automatically for you.
	
	- Use TCP/IP sockets to connect to Microsoft SQL Server if it is running on
	  another computer. Use named pipes if SQL Server is running on the same
	  computer as Active Server Pages (ASP).
	
	- Ensure that a proxy account is used to connect to Oracle because Oracle
	  assigns user context to each thread.
	
	- Ensure that connection objects are created in each ASP page.
	
	PerfMon Counters:
	
	The ASP object provides excellent counters to do detailed monitoring of your ASP
	application. The following points are particularly important:
	
	- Errors-related counters (such as "Errors During Script Runtime") - these
	  should be near zero in value. Any errors-related counters that are
	  significantly larger than zero should be further investigated before
	  proceeding with troubleshooting.
	
	- Requests executing - This is very important because it tells you whether your
	  application is forced to be single-threaded or not. The default worker
	  threads for executing ASP requests in IIS 4.0 is 10 (ProcessorThreadMax in
	  the registry). If the ASP Requests Executing counter returns a value of "1",
	  then your requests are definitely being serialized for some reason. Make sure
	  Web Application debugging is not on because this will serialize your
	  requests.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q216580 PRB: Blocking/Serialization When Using InProc Component (DLL) from
	  ASP
	
	- Requests queued - If this number keeps increasing continuously, your ASP
	  pages have blocked all threads for some reason and no threads are being
	  released to service additional requests from the queue.
	
	- Sessions total - This is the total number of sessions since the Web service
	  was started. You may want to stop and restart the Web service before a test
	  run to more accurately monitor the total sessions being created for a
	  specific test script run. Make sure that while your script is running this
	  number keeps gradually increasing until it reaches the desired total.
	
	ADO/MDAC:
	
	To obtain the latest version Microsoft Data Access Components (MDAC) as well as
	some "getting started" information, see the following links:
	
	  General Information:
	  http://www.microsoft.com/data/
	
	  Pooling in the Microsoft Data Access Components
	  http://msdn.microsoft.com/library/techart/pooling2.htm
	
	  Improve the Performance of Your MDAC Application
	  http://www.microsoft.com/data/impperf.htm
	
	  Microsoft ActiveX Data Objects (ADO) Programming
	  http://www.microsoft.com/accessdev/articles/movs202.htm
	
	Articles on Best Practices for Developing Data Access-Enabled Web Applications
	------------------------------------------------------------------------------
	
	Data Access:
	
	  Setting Object Scope
	  http://msdn.microsoft.com/library/psdk/iisref/iiwaobu.htm
	
	  Q176056 INFO: ADO/ASP Scalability FAQ
	
	  Q216950 How to Enable ODBC Connection Pooling Performance Counters
	
	  Q233299 INFO: Identity and Auto-Increment Fields in ADO 2.1 and Beyond
	
	  Q230101 FIX: Data Queries Sporadically Return Empty Recordsets
	
	  Q195047 HOWTO: Call a Parameterized SQL Server Stored Procedure from ADO
	
	  Q200300 HOWTO: Synchronize Writes and Reads with the Jet OLE DB Provider and
	  ADO
	
	General ASP:
	
	  Q243543 PRB: Do Not Store Objects in Session or Application
	
	  Q243815 PRB: Storing STA COM Component in Session Locks to Single Thread
	
	  Q243548 INFO: Design Guidelines for Visual Basic Components Under ASP
	
	  Q243544 INFO: Component Threading Model Summary Under Active Server Page
	
	  Q243547 PRB: ASP Does Not Provide Progress Notifications to Client Browsers
	
	  Q243828 BUG: Session_OnEnd Changes Security Context of InProcess Components
	
	  Q172925 INFO: Security Issues with Objects in ASP and ISAPI Extensions
	
	  Q158229 INFO: Security Ramifications for IIS Applications
	
	  Q150777 Descriptions and Workings of OLE Threading Models
	
	  Q156223 HOWTO: Launching OLE Servers from ISAPI Extensions
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbiisSearch kbAudDeveloper kbADOsearch kbASPsearch kbADO150 kbADO210 kbADO201 kbADO200 kbADO210sp1 kbADO210sp2 kbADO250 kbiis500 kbiis400 kbiis300
	Version           : :1.5,2.0,2.01,2.1,2.1 SP1,2.1 SP2,2.5,3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
