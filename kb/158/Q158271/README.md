---
layout: page
title: "Q158271: SNA Windows 95 Client Not Support Windows NT Password Change"
permalink: /kb/158/Q158271/
---

## Q158271: SNA Windows 95 Client Not Support Windows NT Password Change

{% raw %}

	Article: Q158271
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use SNA Server version 2.11 Service Pack 1 (SP1) Windows 3.x client
	software, and you connect to SNA Server over TCP/IP sockets, NetWare IPX/SPX, or
	Banyan IP, you may experience the following problem.
	
	The SNA Server Windows 95 client software does not support the ability to change
	the Microsoft Windows NT password during SNA client logon. If the Windows NT
	administrator has configured their Windows NT user accounts for User Must Change
	Password at Next Logon, or if the user password has expired, the SNA Server
	Windows 95 client will display the following error messages:
	
	  SnaBase
	  ERROR: Cound not open sponsor connection to <servername>
	  Do you want to run the SNA Client configuration program ?
	
	  ERROR: The SnaBase Service is not started.
	
	NOTE: Many possible causes exist for a logon error besides a bad user ID,
	password, domain, or expired password. Other possibilities include:
	
	- The user account has been disabled.
	
	- The user account has been locked out due to excessive failed logon attempts.
	
	- Restricted user logon hours has been defined.
	
	- The user must logon from a specific workstation.
	
	- The user is logging on using a trusted domain account and Windows NT is
	  currently unable to contact a domain controller in the trusted domain.
	
	CAUSE
	=====
	
	The SNA Server Windows 95 client does not support the Windows NT password change
	function.
	
	RESOLUTION
	==========
	
	Do one of the following:
	
	- Use the Windows 95 Control Panel Password utility to change the user[ASCII
	  146]s Windows NT password. This requires that the Windows 95 user is already
	  logging into the Windows NT domain (for example, to the domain user account
	  that has been assigned SNA Server resources) and his or her Windows 95
	  computer is configured with the Microsoft Networking redirector.
	
	- Disable password expiration on the Windows NT account used by the SNA Server
	  Windows 95 user.
	
	- Require the Windows NT administrator to reset the Windows NT account when the
	  SNA Windows 95 client logon fails.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	2.11 and 2.11 Service Pack 1 Windows 95 client software. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	Additional query words: sp1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
