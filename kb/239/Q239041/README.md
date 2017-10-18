---
layout: page
title: "Q239041: IIS: The FTP PORT Command May be Issued Before Client has Logon"
permalink: kb/239/Q239041/
---

## Q239041: IIS: The FTP PORT Command May be Issued Before Client has Logon

	Article: Q239041
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis500
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the FTP Server that ships with Internet Information Services 5.0, you
	may notice some supposedly inconsistent behavior. For example, if you were to
	create a control connection to a restricted FTP server (one in which the you do
	not have a valid logon), then issue a PORT command, this command would result in
	the server returning the following message:
	
	  200 PORT Command Successful.
	
	You are never prompted for credentials during this phase of the FTP connection
	process even though the FTP site has been restricted (meaning anonymous access
	is disabled). This may be looked at as a possible security problem, but it is
	actually normal behavior for FTP.
	
	CAUSE
	=====
	
	FTP requires that you are identified before a connection is officially
	established. In other words, a connection has not officially been made yet. You
	cannot transfer files unless you first logon the server.
	
	STATUS
	======
	
	This is a known issue with Internet Information Services 5.0 (and most FTP
	servers as well).
	
	Additional query words: iis ftp port
	
	======================================================================
	Keywords          : kbDSupport kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
