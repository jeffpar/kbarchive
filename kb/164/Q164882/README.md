---
layout: page
title: "Q164882: Practical Recommendations for Securing Internet-Connections"
permalink: kb/164/Q164882/
---

## Q164882: Practical Recommendations for Securing Internet-Connections

	Article: Q164882
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Proxy Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you connect computers to the Internet it becomes possible to communicate
	with millions of people and computers world wide by using the TCP/IP protocols.
	This broad flexibility imposes a degree of risk: Not only can you communicate
	with people and systems using the protocols that you choose, it is also possible
	for users to try to initiate communication with your systems. Most of the
	following recommendations assume you are using the Microsoft Proxy Server.
	However, some may apply even if you do not have a proxy server.
	
	MORE INFORMATION
	================
	
	Review the following list to learn how to reduce security risks:
	
	- If your private network runs TCP/IP, the servers Enable IP Forwarding check
	  box in the Network application should not be selected.
	
	  Clearing the Enable IP Forwarding check box prevents unauthorized IP packets
	  from infiltrating your network. The Enable IP Forwarding check box is located
	  in the Microsoft TCP/IP Properties dialog box. To open this, use the Network
	  application in Control Panel.
	
	To disable IP forwarding on Microsoft Windows NT Server version 4.0:
	
	1. From the Start menu, select Settings, and then click Control Panel.
	
	2. In Control Panel, double-click the Network icon.
	
	3. In the Network dialog box, click the Protocols tab, select TCP/IP Protocol,
	  and then click Properties.
	
	4. In the Microsoft TCP/IP Properties dialog box, click Routing.
	
	5. Make sure the check box for Enable IP Forwarding is cleared.
	
	6. Click OK, then click OK again.
	
	WARNING: If the Windows NT Remote Access Service (RAS) is installed on your
	gateway after Microsoft Proxy Server is installed, IP forwarding will be
	enabled. You must disable IP forwarding after installing RAS.
	
	- Block Nonessential Inbound TCP/IP Ports.
	
	  If your Windows NT Server is highly exposed, with the mission of offering
	  services like Web and FTP, then only two inbound paths need to exist from the
	  router to the server: HTTP on port 80 and FTP on port 21. The router should
	  block all other inbound traffic.
	
	  If you are using the Proxy Server and have 2 netcards on your Computer, you
	  can bind ONLY IPX on the Internal netcard and ONLY IP on the external
	  netcard.
	
	- Disable NetBios over TCP/IP.
	
	  By default an Internet-connected Windows NT computer will support two
	  transport protocols: NetBeui and TCP/IP. Windows networking operations
	  require syntax of the form of \\Name. These operations include directory and
	  printer sharing, NetDDE, and remote administration. Connecting to a drive or
	  editing a registry across the Internet requires only a mapping, in the local
	  LMHOSTS file, between the remote computer's NetBIOS name and its IP address.
	
	  You can control the use of NetBIOS over TCP/IP (NBT) by going into Control
	  Panel, Network and the Bindings tab and disabling any of the bindings between
	  NetBIOS-based services and TCP/IP. This way no one can try to remote-mount
	  drives or remote-edit registries. Windows NT networking services run
	  promiscuously over multiple transports; therefore, internally your computers
	  can still talk to each other over the NetBEUI protocol, which does not go
	  over the Internet.
	
	- Use NTFS volumes.
	
	  The Windows NT File System (NTFS) provides security and access control for
	  your data files. By using NTFS, you can limit access to portions of your file
	  system for specific users and services. A File Allocation Table (FAT) only
	  supports share level security.
	
	  For safety's sake it is best to layer multiple defenses, so use NTFS on
	  Internet-connected Windows NT computers. Windows NT takes the intersection of
	  NTFS ACLs and share permissions, for example if NTFS ACLs gives a network
	  user full access to a partition but the share-level permissions grant only
	  read access, then the effective access is read only. If you create new
	  shares, be sure to alter the default permissions assigned by Windows NT.
	  Otherwise, by default, the group Everyone will have Full Control of all that
	  is visible through the share.
	
	- Run only the services that you need.
	
	  The fewer services you are running on your computer, the less likely a mistake
	  will be made in administration that could be exploited. Use the Services
	  application in the Control Panel to disable any services not absolutely
	  necessary. Also, if FTP or Gopher services are not needed or used, turn off
	  these services using Internet Service Manager to stop each service.
	
	- Unbind unnecessary services from your Internet adapter cards.
	
	  Use the Bindings feature in the Network application in the Control Panel to
	  unbind any unnecessary services from any network adapter cards connected to
	  the Internet. For example, you might use the Server service to upload new
	  images and documents from computers in your internal network, but you might
	  not want users to have direct access to the Server service from the Internet.
	  If you need to use the Server service on your private network, the Server
	  service binding to any network adapter cards connected to the Internet should
	  be disabled.
	
	  You can use the Windows NT Server service over the Internet; however, you
	  should fully understand the security implications and comply with Windows NT
	  Server licensing requirements issues. When you are using the Windows NT
	  Server service you are using Microsoft networking or the Server Message Block
	  (SMB) protocol and all Windows NT Server licensing requirements still apply.
	
	- Check permissions set on network shares.
	
	  If you are running the Server service on your Internet adapter cards, be sure
	  to double check the permissions set on the shares you have created on the
	  computer. It is also wise to double check the permissions set on the files
	  contained in the shares directories to ensure that you have set them
	  appropriately.
	
	- Access from Network privilege can be revoked.
	
	  By default, Windows NT grants the group Everyone the right to Access from the
	  network. By revoking this right you can block all networking services, but
	  maintain support for the Web service because the Web server runs either as a
	  System or Local user.
	
	- Rename and limit the membership of the Administrator group.
	
	  Rename the Administrator account by selecting User, Rename from User Manager
	  menu. By limiting the members of the Administrator group, you limit the
	  number of users who might choose bad passwords.
	
	- Enforce strict account policies.
	
	  User Manager for Domains provides configuration options called security
	  policies, such as one that allows a system administrator to specify how
	  quickly account passwords expire (forcing users to regularly change
	  passwords), and another that determines how many bad logon attempts will be
	  tolerated before a user is locked out. Use the User Manager for Domains
	  security policies to configure the server against exhaustive or random
	  password attacks.
	
	- Choose good passwords.
	
	  Although this may seem obvious, a stolen or easily guessed password is the
	  best opportunity for someone to gain access to your computer. Make sure that
	  all passwords used, especially those with administrative rights, have
	  difficult-to-guess passwords. In particular make sure to select a good
	  administrator password (long, mixed-case, alphanumeric password) and set the
	  appropriate account policies. Passwords can be set by using Windows NT User
	  Manager for Domains.
	
	  For additional information, please see Chapter 2 of the Microsoft Proxy Server
	  documentation has information on the above topic.
	
	More information on securing an Internet connected Web server can be found in
	Chapter 8 of the Microsoft Internet Information Server Resource Kit.
	ISBN:1-57231-638-1
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q282060 Resources for Securing Internet Information Services
	
	Additional query words: prx iis
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbiisSearch kbAudDeveloper kbiis500 kbiis400 kbiis300 kbiis200 kbiis100 kbProxyServ100 kbProxyServSearch
	Version           : :1.0,2.0,3.0,4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
