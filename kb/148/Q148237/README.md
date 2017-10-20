---
layout: page
title: "Q148237: IDC: Error Performing Query Connecting to SQL Server"
permalink: /kb/148/Q148237/
---

## Q148237: IDC: Error Performing Query Connecting to SQL Server

{% raw %}

	Article: Q148237
	Product(s): Internet Information Server
	Version(s): WINNT: 1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you execute an IDC script that connects to a remote SQL Server, one of the
	following error messages appear from the web browser:
	
	  Error Performing Query
	
	  [State=01000][Error=1385][Microsoft][ODBC SQL Server
	  Driver][dbnmpntw]ConnectionOpen (CreateFile()).
	
	  [State=08001][Error=1385][Microsoft][ODBC SQL Server Driver]Unable
	  to connect to data source
	
	  -or-
	
	  [State=01000][Error=1326][Microsoft][ODBC SQL Server
	  Driver][dbnmpntw]ConnectionOpen (CreateFile()).
	
	  [State=08001][Error=1326][Microsoft][ODBC SQL Server Driver]Unable
	  to connect to data source
	
	CAUSE
	=====
	
	This problem occurs because of one or all of the following:
	
	- The user account IUSR_<Server Name> (where <Server Name> is the
	  name of your Internet Information Server) does not have the "Access this
	  computer from the network" user right configured on the SQL Server.
	
	- The Internet Information Server and the SQL Server are on different domains
	  and the IUSR_<Server Name> account does not exist in the SQL Server's
	  local user database or domain.
	
	- The Internet Information Server and SQL Server are on the same domain;
	  however, the Internet Information Server is installed on a Server (non-domain
	  controller) and the SQL Server is installed on a Domain Controller. The
	  IUSR_<Server Name> account does not exist on the domain.
	
	RESOLUTION
	==========
	
	To correct this problem, do one or all of the following:
	
	- Grant the IUSR_<Server Name> the "Access this computer from network"
	  user right on the SQL Server.
	
	- If there is a trust established between the domains, whereas the Internet
	  Information Server in the Resource domain, then you can set the "Username:"
	  value under "Anonymous Logon" to be MASTERDOMAIN\username (where username is
	  a user account that was created on the Master Domain).
	
	  If there is not a trust relationship involved, you must create an
	  IUSR_<Server Name> account on the remote domain and give it the
	  appropriate rights. (See first resolution above)
	
	  Note: If there is no trust, the username and password in one domain must match
	  the username and password on the other domain.
	
	- Modify the "Username:" value under "Anonymous Logon" in the Microsoft
	  Internet Service Manager to use the following format:
	
	     DOMAIN\IUSR_<Server Name>.
	
	  If the IUSR_<Server Name> does not exist on the domain, then create the
	  account using User Manager for Domains.
	
	- See Q141086 in the SQL Server Knowledge Base for information on fixing a bug
	  in the SQL Server 2.5 ODBC driver.
	
	MORE INFORMATION
	================
	
	The Internet Information Server accesses the SQL Server by first connecting to
	the IPC$ share of the SQL Server. It uses the user name and password specified
	for Anonymous Logon (entry is in the Service tab of Internet Service Manager).
	
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200 kbiis100
	Version           : WINNT: 1.0,2.0,3.0,4.0
	Hardware          : ALPHA x86
	
	=============================================================================
	

{% endraw %}
