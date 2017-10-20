---
layout: page
title: "Q171194: Components Added to Network Properties by DUN 1.2 for Windows 95"
permalink: /kb/171/Q171194/
---

## Q171194: Components Added to Network Properties by DUN 1.2 for Windows 95

{% raw %}

	Article: Q171194
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the components installed by Dial-Up Networking (DUN)
	version 1.2 for Windows 95.
	
	MORE INFORMATION
	================
	
	The following components are added to Network properties:
	
	- Dial-Up Adapter #2 (VPN Support)
	
	- Microsoft virtual private network Adapter
	
	- NDISWAN -> Microsoft virtual private network Adapter
	
	Also, each installed protocol gains an additional entry. For example, if you have
	the NetBEUI, TCP/IP, and IPX/SPX protocols installed, the following entries are
	added:
	
	- NetBEUI -> Dial-Up Adapter #2 (VPN Support)
	
	- TCP/IP -> Dial-Up Adapter #2 (VPN Support)
	
	- IPX/SPX-Compatible Protocol -> Dial-up Adapter #2 (VPN Support)
	
	virtual private network is a new networking technology that you can use to
	connect to corporate networks securely across the Internet or a LAN. virtual
	private network uses a tunneling protocol such as Point-to- Point Tunneling
	Protocol (PPTP). You set up a virtual private network connection using Dial-Up
	Networking.
	
	Additional query words: ras 1.20
	
	======================================================================
	Keywords          : kbnetwork dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
