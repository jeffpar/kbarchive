---
layout: page
title: "Q112198: WinPopup Sends Multiple Messages to a Workgroup"
permalink: /kb/112/Q112198/
---

## Q112198: WinPopup Sends Multiple Messages to a Workgroup

{% raw %}

	Article: Q112198
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a WinPopup message is sent to a workgroup, everyone in that workgroup may
	receive the message multiple times. The number of times the message is received
	is dependent on what protocol(s) the sending machine is using.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows for Workgroups
	version 3.11. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following behavior has been reported:
	
	- If you use only the NetBEUI protocol on the sending workstation, members of
	  the workgroup receive one message.
	
	- If you use only the IPX/SPX Compatible Transport on the sending workstation,
	  members of the workgroup receive one message.
	
	- If you use only the IPX/SPX Compatible Transport with NetBIOS on the sending
	  computer, members of the workgroup receive two messages.
	
	- If you use the NetBEUI protocol and the IPX/SPX Compatible Transport on the
	  sending machine, members of the workgroup receive two messages.
	
	- If you use the NetBEUI protocol and the IPX/SPX Compatible Transport with
	  NetBIOS on the sending workstation, members of the workgroup receive three
	  messages.
	
	- If you use the NetBEUI protocol and TCP/IP on the sending machine, members of
	  the workgroup receive three messages.
	
	- If you use the NetBEUI, IPX/SPX Compatible Transport, and TCP/IP on the
	  sending workstation, members of the workgroup receive four messages.
	
	Additional query words: 3.11 popup winpopup.exe broadcast datagram several lots more than one
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
