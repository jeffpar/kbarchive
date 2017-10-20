---
layout: page
title: "Q171767: OS/2 Clients Do Not Receive Print Notification"
permalink: /kb/171/Q171767/
---

## Q171767: OS/2 Clients Do Not Receive Print Notification

{% raw %}

	Article: Q171767
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you print from an OS/2 client computer to a printer on a Windows NT server,
	the user does not receive a Print Notification pop-up message, although the user
	is able to send network pop-up messages to the server from other clients on the
	local network.
	
	MORE INFORMATION
	================
	
	The client computer is only running TCP/IP. The user can send network pop- up
	commands between computers on the local subnet only. The OS/2 Messenger service
	is compatible with Microsoft's Messenger service, but in a TCP/IP network, it
	depends on name resolution. OS/2 Warp is not a WINS client and, therefor, the
	user name and workstation name are not registered in the WINS database.
	
	If the users do not roam between workstations, static entries can be created in
	the WINS database to make this work properly. Both the workstation name and the
	user name, if different, should be entered. It should be noted that Print
	Notification uses the sender's user name as the pop-up destination, not the
	workstation name.
	
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kb3rdparty kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
