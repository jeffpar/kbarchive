---
layout: page
title: "Q311836: FIX: SQL Server Driver Fails to Connect over TCP/IP"
permalink: /kb/311/Q311836/
---

## Q311836: FIX: SQL Server Driver Fails to Connect over TCP/IP

{% raw %}

	Article: Q311836
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.6,2.6 SP1,2.6 sp2,2.7,2000.80.194
	Operating System(s): 
	Keyword(s): kbGrpDSVCDB kbGrpDSMDAC
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server 2000, version 2000.80.194 
	- Microsoft Data Access Components versions 2.6, 2.6 SP1, 2.6 sp2, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A connection to a back-end SQL Server database may fail with the following
	error:
	
	  [Microsoft][ODBC SQL Server Driver][TCP/IP Sockets]ConnectionOpen
	  (Connect()).
	  [Microsoft][ODBC SQL Server Driver][TCP/IP Sockets]SQL Server does not exist
	  or access denied.
	
	This error occurs under the following conditions:
	
	- You are using the Microsoft ODBC Driver for SQL Server 2000 that comes with
	  Microsoft Data Access Components (MDAC) version 2.6, 2.6 SP1, 2.6 SP2, or
	  2.7.
	
	- The TCP/IP protocol is used; in other words, the Network keyword is set to
	  DBMSSOCN.
	
	- The Address keyword contains three parameters; for example, the server name
	  or IP address, the port number, and an urgent token:
	
	  "DSN=DSNName;SERVER=servername;DATABASE=pubs;Network=DBMSSOCN;Address=IP_Address,1433,urgent;"
	
	- The server to which you are connecting is not a local server.
	
	CAUSE
	=====
	
	Beginning with MDAC 2.6, the SQL Server ODBC driver uses a "Super Socket"
	network library architecture which encapsulates all network libraries. If it
	finds three parameters in the Address keyword of a connection string, the Super
	Socket library assumes the SPX protocol instead of TCP/IP. (The SPX protocol is
	the only protocol that requires three parameters in the Address keyword; the
	TCP/IP protocol requires only two parameters. See the "More Information" section
	for details.)
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next MDAC service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	IMPORTANT: Microsoft is releasing this fix for backward compatibility only. It is
	strongly recommended that you use the workaround described in the "Workaround"
	section instead of using this fix.
	
	The English version of this fix should have the following file attributes or
	later:
	
	MDAC 2.6, 2.6 SP1, and 2.6 SP2:
	
	Date         Version            Size     File name     Platform
	---------------------------------------------------------------
	9-NOV-2001   2000.080.0467.00   86,097   Dbnetlib.dll  x86
	
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, do not use three parameters in the Address keyword
	of the connection string when using TCP/IP. To connect to SQL Server over
	TCP/IP, only two parameters are needed: the server name or IP address, and the
	port number.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Early Microsoft SQL Server 4.2 releases which first supported TCP/IP connections
	allowed an additional urgent parameter that changed the way that cancel requests
	were handled by the TCP/IP protocol stack. Later SQL Server 4.2 network
	libraries did not need the additional parameter and ignored it. The redesigned
	Super Socket network library does not take into account the use of this outdated
	additional parameter.
	
	Note that using the urgent token does not affect a connection in any way. Prior
	to MDAC version 2.5, the urgent token was not used. Not using the urgent token
	did not cause any error and allowed the connection to occur.
	
	For additional information on valid SQL Server connection string keywords, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q229929 INFO: Registry Entries and Keywords for SQL Server Connection Strings
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSVCDB kbGrpDSMDAC 
	Technology        : kbAudDeveloper kbSQLServ2000Search kbODBCSearch kbMDACSearch kbMDAC260 kbODBCSQLServ200080194 kbMDAC260SP1 kbMDAC270 kbMDAC260SP2
	Version           : :2.6,2.6 SP1,2.6 sp2,2.7,2000.80.194
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
