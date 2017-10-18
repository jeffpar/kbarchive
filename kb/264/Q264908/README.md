---
layout: page
title: "Q264908: Err Msg: HTTP 403.15 Forbidden: Client Access Licenses Exceeded"
permalink: kb/264/Q264908/
---

## Q264908: Err Msg: HTTP 403.15 Forbidden: Client Access Licenses Exceeded

	Article: Q264908
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbWin2000SP2Fix
	Last Modified: 03-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to Internet Information Services using a browser, you may
	receive the following error message:
	
	  HTTP 403.15 - Forbidden: Client Access Licenses exceeded
	  Internet Information Services
	
	  The number of authenticated users has exceeded the number of Client Access
	  Licenses (CAL).
	
	The Event Viewer may log the following error message(s):
	
	  Event ID: 27
	  Source: W3SVC
	  Description: The server was unable to acquire a license for a SSL connection.
	
	  Event ID: 201
	  Source: LicenseService
	  Description: No license was available for user <username> using product
	  IIS 5.0.
	
	CAUSE
	=====
	
	This problem is caused by one of two things:
	
	- The number of authenticated users has exceeded the number of Client Access
	  Licenses (CAL).
	
	-or-
	
	- The number of Secure Socket Layer (SSL) users (anonymous or authenticated)
	  has exceeded the number of CALs installed on the server.
	
	NOTE: If the License Logging Service is stopped, then only ten concurrent SSL
	connections are accepted.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	There are two counters at work in this scenario:
	
	- a counter for CALs
	- a counter for SSL connections
	
	By default, the SSL connection limit is set to the number of CALs, which also
	applies to anonymous SSL connections. Microsoft is aware of this issue and a
	hotfix is available that will allow an unlimited number of SSL connections
	regardless of the number of CALs.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time       Version        Size     File name
	  ------------------------------------------------------
	  6/1/2000  9:46:36AM  5.0.2195.2096  356,112  W3svc.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	version 5.0. This problem was first corrected in Windows 2000 Service Pack 2.
	
	MORE INFORMATION
	================
	
	NOTE: This section describes the behavior of the problem as it exists without
	the hotfix. The hotfix mentioned in the "Resolution" section of this article
	fixes this behavior.
	
	SSL connection counting: Each SSL connection (anonymous or authenticated)
	decrements the SSL connection counter. This counter is initialized with the
	total number of CALs that are installed on the system. For example, if you have
	10 CALs installed on a Web server, then the server will support up to 10
	concurrent SSL connections.
	
	To better understand CALs and SSL connection counting, review the following
	scenarios:
	
	- An anonymous user browses a public Web site. No CALs are consumed. Anonymous
	  users do not consume CALs.
	
	- An anonymous user attempts to access a page that requires a logon. The user
	  is authenticated and granted access to the page. One CAL is consumed. Each
	  uniquely authenticated user consumes one CAL.
	
	- An anonymous user attempts to access a page that requires a logon. The user
	  is authenticated and granted access to the page. The same user opens a second
	  Web browser and browses to the same page. He or she authenticates with the
	  same username. One CAL is consumed. Each uniquely authenticated user consumes
	  one CAL regardless of the number of connections to the same server.
	
	- An anonymous user browses to a commerce Web site and shops, adding items to a
	  shopping cart. When this user goes to pay (transition into an SSL session),
	  one SSL connection is consumed for that username. No CALs are consumed. SSL
	  connections do not consume CALs, but the total number of SSL connections is
	  limited to the number of CALs installed on the Web server.
	
	- A Web server has 20 CALs installed. It can support up to 20 authenticated
	  users in addition to 20 SSL (anonymous and/or authenticated) connections
	  concurrently. If a user is authenticated and using SSL, then a CAL is
	  consumed and the SSL connection counter is decremented by one. Only the act
	  of authenticating requires a CAL. Internet Information Server maintains a
	  separate counter for SSL connections.
	
	- An anonymous user browses to an intranet Web site. The same user is also
	  authenticated to the same Web server by an external authentication mechanism
	  such as a UNC network share (\\Computername\Share). One CAL is consumed. The
	  anonymous account does not consume CALs, but authenticated users do.
	
	- An anonymous user attempts to access a page requiring a logon. The user is
	  authenticated and is granted access to the page. The user is also
	  authenticated to the same Web server by an external authentication mechanism
	  such as a universal naming convention (UNC) network share
	  (\\Computername\Share) to the same server. One CAL is consumed. Each uniquely
	  authenticated user consumes one CAL when connecting to the same Web server
	  regardless of multiple connections.
	
	REFERENCES
	----------
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	Additional query words: iis5 authentication license server service
	
	======================================================================
	Keywords          : kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
