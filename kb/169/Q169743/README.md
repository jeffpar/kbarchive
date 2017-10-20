---
layout: page
title: "Q169743: XCLN: Exchange Windows 3.x client Does Not Receive New Mail"
permalink: /kb/169/Q169743/
---

## Q169743: XCLN: Exchange Windows 3.x client Does Not Receive New Mail

{% raw %}

	Article: Q169743
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Microsoft Exchange Client for Windows 3.x, you may not
	automatically receive new mail when it is delivered. You must perform another
	function, such as selecting another folder and then clicking the Inbox again,
	before the new mail appears.
	
	CAUSE
	=====
	
	Notification of new mail is a task initiated from the server. The server
	notifies the client that new mail has arrived so the client can update its Inbox
	display. However, in order for the server to notify the client of an update, the
	server must send directly to the client's IP address.
	
	RESOLUTION
	==========
	
	Verify that the correct IP address entries for the client computer are on the
	Domain Name Services (DNS) server, WINS server, or in the HOSTS file on the
	Exchange Server computer. You can also try to resolve the problem by adding the
	computer name and IP address of the client machine to its own HOSTS file.
	
	For more information on how to troubleshoot Microsoft Exchange for Windows 3.x
	client using TCP/IP, see Q155048, "Troubleshooting Startup of Windows Client
	Using TCP/IP" in the Microsoft Knowledge Base.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
