---
layout: page
title: "Q145797: No User Account Authentication Appears in Internet Explorer"
permalink: kb/145/Q145797/
---

## Q145797: No User Account Authentication Appears in Internet Explorer

	Article: Q145797
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you set up the Internet Information Server 1.0 FTP server and try to
	connect to the server using Internet Explorer, a Windows NT user account
	authentication dialog box does not appear. Instead, the following error message
	appears:
	
	  The attempt to load 'ftp://<ftpservername>' failed.
	
	CAUSE
	=====
	
	This problem occurs if you clear the Allow Anonymous Connection check box for
	the FTP server in Internet Information Server and disable the Internet Guest
	account.
	
	WORKAROUND
	==========
	
	To work around this problem, enter the user account information in the following
	format:
	
	  ftp://<user name>:<password>@<ftpservername>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 1.0 and Microsoft Internet Explorer versions 1.5 and 2.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Then the Allow Anonymous Connection check box is cleared, Windows NT passwords
	are sent to the server without encryption. Therefore, users are required to
	enter valid Windows NT user names and passwords to log onto the FTP service.
	This check box is checked by default for security reasons.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : :1.0
	
	=============================================================================
	
