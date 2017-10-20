---
layout: page
title: "Q186709: How to Move SNA from One Domain to Another"
permalink: /kb/186/Q186709/
---

## Q186709: How to Move SNA from One Domain to Another

{% raw %}

	Article: Q186709
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One of the following methods could be used when you are considering moving SNA
	Server from one Windows NT domain to another.
	
	MORE INFORMATION
	================
	
	You can choose one of the methods below to help make a smooth transition. These
	steps will work as long as the Windows NT servers are Member Servers. If they
	are a primary domain controller (PDC) or backup domain controller (BDC) of the
	OLD domain, then Windows NT would need to be reinstalled as well as SNA Server.
	
	Method 1
	--------
	
	- Remove all SNA Servers to be moved from the OLD domain through Server Manager
	  (in Windows NT Administrative Tools).
	
	- Then add all SNA Servers to NEW domain through Server Manager under the
	  Windows NT Administrative Tools.
	
	- Change all SNA-related services under the Control Panel Services tool to use
	  the new user name and password that was created on the NEW domain for SNA
	  Services to Log On As interactively.
	
	- Change the following three User Rights located on the Polices menu of User
	  Manager on the NEW Windows NT domain:
	  1. Act as part of the operating system.
	
	  2. Generate security audits.
	
	  3. Log on as a service.
	
	     NOTE: For SNA Server 2.11, the services run under the Local System account,
	     so this is not necessary.
	
	- This new user account has to be added to the following groups:
	
	- If it is in a Windows NT domain, then add the account to the domain
	  administrators group.
	
	- If it is a Windows NT Member Server, the account also needs to be added to
	  the Local Administrators group.
	
	Method 2
	--------
	
	NOTE: This method can be used as long as you are not currently using or planning
	to use in the future any SNA service specifying a specific user account such as
	Host Security, SNA Print Server, Encryption, or any other account that may
	require one.
	
	- Remove all SNA Servers from the OLD domain through Server Manager (in Windows
	  NT Administrative Tools).
	
	- Add all SNA Servers to the NEW domain through Server Manager (in Windows NT
	  Administrative Tools).
	
	- Change all SNA-related services in the Control Panel Services tool to use the
	  System Account to Log On As.
	
	Method 3
	--------
	
	- Remove all SNA Servers from the OLD domain through Server Manager (in Windows
	  NT Administrative Tools).
	
	- Add all SNA Servers to the NEW domain through Server Manager (in Windows NT
	  Administrative Tools).
	
	- Copy the Com.cfg from <Drive:>\<SnaRoot>\System\Config\ to a safe
	  location.
	
	- Remove SNA Server from all three servers.
	
	- Reinstall all SNA Servers one at a time, specifying the new user name and
	  password.
	
	- Then copy back the Com.cfg file to the location specified above.
	
	REFERENCES
	==========
	
	For more information on Windows NT Server roles in a domain, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q126436 Q&A: The Role of a Windows NT Server in a Domain
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400
	Version           : WINDOWS:2.11,3.0,4.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
