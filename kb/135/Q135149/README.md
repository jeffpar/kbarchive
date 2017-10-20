---
layout: page
title: "Q135149: Cannot Use Dial-Up Networking on Server-Based-Setup Client"
permalink: /kb/135/Q135149/
---

## Q135149: Cannot Use Dial-Up Networking on Server-Based-Setup Client

{% raw %}

	Article: Q135149
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your server-based-setup (SBS) client computer connects to the server using
	only the IPX network protocol, or you are connected to a NetWare server using
	only the IPX protocol, you see the following message when you try to use a
	Dial-Up Networking connection using the IPX protocol:
	
	  You are currently using NetWare servers which will be inaccessible
	  if you establish this connection.
	
	  Click OK to continue dialing. Click Cancel if you do not want to
	  dial at this time.
	
	If you click OK and Dial-Up Networking starts, your computer does not function
	properly and you receive page fault error messages.
	
	CAUSE
	=====
	
	This issue can occur for either of the following reasons:
	
	- When you use the IPX protocol, you can connect to only one network at a time.
	  When you use a Dial-Up Networking connection, your SBS client computer cannot
	  access the server containing the system components.
	
	- If your active connection has IPX/SPX as a server type, this same error
	  occurs even if IPX is not bound to your Dial-Up adapter.
	
	RESOLUTION
	==========
	
	To work around this behavior, use either of the following methods:
	
	- If possible, use multiple protocols to connect to the server. This methods
	  allows the SBS client computer to remain connected to the server.
	
	- Configure Dial-Up Networking to use a protocol other than IPX. To do so,
	  follow these steps:
	
	  1. Use the right mouse button to click the Dial-Up Networking connectoid, and
	     then click Properties on the menu that appears.
	
	  2. Click Server Type.
	
	  3. Click the IPX/SPX Compatible check box to clear it, and make sure that
	     either the NetBEUI or TCP/IP check box contains a check mark.
	
	  4. Click OK.
	
	MORE INFORMATION
	================
	
	If TCP/IP is already a supported protocol in Network properties, check the
	connectoid's properties. Click Server Type, and then clear the IPX/SPX check box
	in the Allowed Network Protocols area.
	
	Additional query words: ras
	
	======================================================================
	Keywords          : kbnetwork dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
