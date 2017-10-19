---
layout: page
title: "Q149907: Browsing a Remote Network from a DUN Client Using Only TCP/IP"
permalink: /kb/149/Q149907/
---

## Q149907: Browsing a Remote Network from a DUN Client Using Only TCP/IP

	Article: Q149907
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork _IK12469 kbSDKPlatform kbGrpDSNetkbfaq
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to configure the Remote Access Service (RAS) so that
	a Dial-Up Networking (DUN) client using only the TCP/IP protocol can browse a
	remote network.
	
	MORE INFORMATION
	================
	
	NOTE: A DUN client is referred to as a RAS client in Windows NT versions 3.5 and
	3.51.
	
	By default, a Windows NT DUN client will browse a remote network only if the
	client belongs to a workgroup or domain on the remote network. The workgroup or
	domain name for the DUN client computer should be the same as the workgroup or
	domain name of the RAS server to which it is connecting.
	
	To configure RAS so that a DUN client using only the TCP/IP protocol can browse a
	remote network, follow these steps:
	
	1. Configure the DUN client's workgroup name to be the same as the workgroup or
	  domain name of the remote network to which you are connecting. This setting
	  can be adjusted in the Network tool in Control Panel.
	
	  NOTE: On a Windows NT 4.0-based computer, click the Logon Using Dial-Up
	  Networking check box on the logon screen to enable it. This is needed to log
	  on to a remote domain from the DUN client.
	
	2. On the remote network, install and configure the WINS service.
	
	  NOTE: The WINS server service does not need to be installed on the computer
	  acting as the RAS server.
	
	3. On the RAS server, configure the TCP/IP protocol to register with the WINS
	  server. This setting can be adjusted in the Network tool in Control Panel.
	
	  NOTE: For a computer on the remote network to appear on the browse list on the
	  DUN client, it must be registered with the WINS server.
	
	4. The DUN client is configured to use server-assigned name server addresses by
	  default; this is the recommended setting for this configuration.
	
	  NOTE: If needed, you can specify name server addresses in the TCP/IP settings
	  of the DUN phone book entry, and then use the IP address of the remote WINS
	  server.
	
	Additional query words: 3.50 3.51 4.00 file manager net view
	
	======================================================================
	Keywords          : kbnetwork _IK12469 kbSDKPlatform kbGrpDSNet kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
