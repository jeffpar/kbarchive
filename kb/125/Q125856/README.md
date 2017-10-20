---
layout: page
title: "Q125856: How to Join a Domain from a Windows NT Workstation Using RAS"
permalink: /kb/125/Q125856/
---

## Q125856: How to Join a Domain from a Windows NT Workstation Using RAS

{% raw %}

	Article: Q125856
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Remote Access Service (RAS) as your
	network connection when logging on to a Windows NT domain. This may be necessary
	if you do not have access to a Wide Area Network (WAN), but you are able to dial
	and connect to a remote network through RAS. The following topics are
	discussed:
	
	- How to join a remote domain using RAS
	
	- Creating an account for your RAS client computer on a remote domain
	
	- Connecting to a network using RAS to create a domain list
	
	When you create an account for your RAS client computer on a remote domain, you
	can be validated by a domain controller on the remote network. This gives you
	access to domain resources using the same account you use when you are connected
	directly to the network.
	
	MORE INFORMATION
	================
	
	How to Join a Remote Domain Using RAS
	-------------------------------------
	
	To join a remote domain using RAS, follow these steps:
	
	1. Verify that your Windows NT-based computer is configured as a member of a
	  workgroup and not a domain.
	
	2. In Control Panel, double-click Network.
	
	3. Click Add Software, and then install RAS.
	
	NOTE: The next step requires dial-in permissions for your account.
	
	4. Use RAS to connect to a RAS server on the remote domain.
	
	NOTE: When a RAS client tries to connect to a resource on a Windows NT
	Workstation-based computer acting as a RAS server, you may receive the following
	error message:
	
	  The logon server could not be found.
	
	To work around this issue, configure your workstation to be a member of a
	workgroup with the same name as the domain name.
	
	Creating an Account for Your RAS Client Computer on a Remote Domain
	-------------------------------------------------------------------
	
	It may be necessary to configure an Lmhosts file on the RAS client to enable it
	to locate the domain controllers if you are utilizing the TCP/IP protocol. You
	must have the following entries:
	
	  a.b.c.d <PDC name> #PRE #DOM:<domain name>
	  a.b.c.d "domainname \0x1B" #PRE
	
	where a.b.c.d is the IP address of the Primary Domain Controller (PDC), <PDC
	name> is the NetBIOS name of the PDC, domainname is the NT Domain name, and
	there exist a total of 15 characters between the opening quotes and the
	backslash. (for example "<15 char.>\0x1B")
	
	To create an account for your RAS client computer on a remote domain, follow
	these steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click Change, click Domain, and then type the name of the remote domain you
	  want to join in the Domain box.
	
	3. Select the "Create Computer Account In Domain" check box.
	
	4. Type the name of a user account (with administrative privileges in the domain
	  you are joining) in the User Name box, and then type the password for that
	  account in the Password box.
	
	5. Click OK. If this procedure is successful, the following message appears:
	
	  Welcome to the <domain name> domain
	
	6. Restart your computer.
	
	Connecting to a Network Using RAS to Create a Domain List
	---------------------------------------------------------
	
	To connect to a network using RAS to create a domain list, follow these steps:
	
	1. Log on to your Windows NT-based computer using a local user account.
	
	2. Use RAS to connect to a RAS server on the remote domain.
	
	3. Click Logoff on the Program Manager File menu. Note that your RAS connection
	  is maintained when you do this.
	
	  NOTE: For Windows NT version 4.0 you will need to set the KeepRASConnections
	  registry key to keep the RAS connection open when you logoff.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q158909 How to Keep RAS Connections Active After Logging Off
	
	4. Press CTRL+ALT+DELETE, and then log on. The domain list is created through
	  the RAS link.
	
	5. Log on to the remote domain.
	
	NOTE: After you have logged on to the remote domain once, your domain credentials
	are cached locally. Therefore, you do not have to repeat step 5 when you log
	onto the remote domain again.
	
	Additional query words: prodnt applet off machine
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
