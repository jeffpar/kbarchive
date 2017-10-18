---
layout: page
title: "Q166027: Extra Security Dialog Displayed with Windows 3.x Client"
permalink: kb/166/Q166027/
---

## Q166027: Extra Security Dialog Displayed with Windows 3.x Client

	Article: Q166027
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you configure the SNA Server 3.0 client for Windows 3.x to use named pipes
	as the transport, the Enter Domain Credentials dialog box appears after the
	client is started.
	
	NOTE: This will only occur on a Windows for Workgroups (WFW) 3.x system if
	Password Caching is disabled. Windows 3.x does not support password caching.
	This also occurs when the SNA Server client for Windows 3.x is installed on a
	Windows 95/98 system because password caching is not supported.
	
	CAUSE
	=====
	
	Changes were made to the SNA Server 3.0 Windows 3.x client to support the data
	encryption feature that was added in SNA Server 3.0. The Windows 3.x client was
	using the NTLM logon process for validation by the SNA Server; this caused the
	extra security Enter Domain Credentials dialog box to appear.
	
	RESOLUTION
	==========
	
	There are two resolutions to the problem that will prevent the Enter Domain
	Credentials dialog box from being displayed:
	
	- Enable password caching if the Windows 3.x SNA Server client is installed on
	  a Windows for Workgroups 3.x system.
	
	  -or-
	
	- Do not enable Client/Server Encryption for Users/Groups in SNA Server Manager
	  upgrade to SNA Server client for Windows 3.x version 3.0 SP1 or later.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The SNA Server client for Windows 3.x versions 3.0 SP1 and later have been
	updated to include a parameter that is used to specify the logon method used for
	the SNA application (non-sponsor) connection to SNA Server. The following
	parameter can be added to the [WNAP] section of the Win.ini file:
	
	  LastLogonMethod=<value>
	
	Where <value> is either LSA or NTLM.
	
	The default value is LSA if the parameter is not defined in the Win.ini.
	
	Prior to adding the LastLogonMethod parameter, the Enter Domain Credentials
	dialog box was displayed even if Client/Server Encryption was not being used
	when the client was configured to use Microsoft Networking (Named Pipes) to
	communicate with SNA Server. This is because the NTLM logon method was always
	being used.
	
	The following apply if using the SNA Server client for Windows 3.x versions 3.0
	SP1 or later:
	
	- If Client/Server Encryption is being used, LastLogonMethod=NTLM has to be
	  specified in the Win.ini.
	
	- If the SNA Server client for Windows 3.x is configured in the following
	  manner, the Enter Domain Credentials dialog box will continue to be displayed
	  the first time an SNA application is started after WFW (or Windows 95/98) is
	  started:
	
	   - Microsoft Networking (that is, Named Pipes) is used for the SNA Server
	     client protocol.
	
	   - Client/Server Encryption is enabled for the user.
	
	   - LastLogonMethod=NTLM in the Win.ini.
	
	   - Password caching on WFW disabled or on Windows 95/98 if the SNA client is
	     installed on Windows 95/98.
	
	The Enter Domain Credentials dialog box will be displayed when using this
	configuration even if the user has logged onto the Windows NT Domain that
	contains the SNA Server because the User Credentials are not available to the
	SNA Server client for logon validation because password caching is not enabled.
	
	As long as the user does not exit WFW or restart Windows 95/98, the Enter Domain
	Credentials dialog box will not appear after the initial information is entered
	even if the SNA application is stopped and restarted.
	
	
	Additional query words: snaencrypt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
