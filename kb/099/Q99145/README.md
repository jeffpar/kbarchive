---
layout: page
title: "Q99145: RAS RemoteListen Parameter"
permalink: /kb/099/Q99145/
---

## Q99145: RAS RemoteListen Parameter

{% raw %}

	Article: Q99145
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.10, 4.0 
	- Microsoft Windows NT Workstation versions 3.10, 4.0 
	-------------------------------------------------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	SUMMARY
	=======
	
	Windows NT and Microsoft LAN Manager Remote Access Service (RAS) can provide
	access to remote clients as if they were on the local area network (LAN). If you
	enable full RemoteListen functionality, all systems on the LAN can access the
	RAS client just as if it were locally connected. The following features are
	supported: IPC, mail slots, RPC, named pipes, and NBF/NetBEUI. This article is
	divided into two sections:
	
	- RemoteListen Functionality
	
	- Enabling RemoteListen
	
	RemoteListen Functionality
	--------------------------
	
	Beyond simply connecting to and accessing a remote client, these other mechanisms
	function over RAS: IPC, mail slots, RPC (Windows NT), named pipes, and
	NBF\NetBEUI. The following information describes the functionality of the three
	different settings for RemoteListen:
	
	- All
	
	- Messages
	
	- None
	
	Note: You can only set RemoteListen for the RAS server. You cannot specify
	different configurations for different clients.
	
	All
	---
	
	LAN Manager: messages = all
	Windows NT: RemoteListen = 2
	
	The RAS Server posts an NCB_Listen network control block (NCB) for all client
	NetBIOS names on each protocol bound to the RAS server.
	
	Under LAN Manager, each client has an average of five NetBIOS names. This equates
	to 80 names per protocol (16 ports x 5 names = 80). To support this many names,
	you need to modify the MaxNames parameter for RAS and the Names parameter for
	each protocol that you are using on the RAS server.
	
	Under Windows NT, clients have an average of seven to eight names, and the RAS
	Server can support up to 64 ports. This results in an even more significant
	drain on resources than under LAN Manager.
	
	Messages
	--------
	
	LAN Manager: messages = messages
	Windows NT: RemoteListen = 1
	
	The default for RemoteListen is set to Messages. This instructs the RAS server to
	post only the Messenger service-related NetBIOS names for the client. This
	allows them to receive things like print notifications and NET SEND commands.
	This does not allow another LAN workstation to create a network session with the
	remote client as in the case of a NET USE command.
	
	None
	----
	
	LAN Manager: messages = none
	Windows NT: RemoteListen = 0
	
	This option instructs the server to not post any NCB_Listens for client NetBIOS
	names. This reduces the resources consumed and the connect time. If you are not
	concerned with any of the previously mentioned functionality, this is the best
	setting to use.
	
	Enabling RemoteListen
	---------------------
	
	To enable RemoteListen, add or modify the RemoteListen parameter:
	
	For LAN Manager:
	
	1. Open the LANMAN.INI file on the RAS server in a text editor.
	
	2. Find the [RemoteAccess] section and add the following line:
	
	  remotelisten = <all, messages, or none>
	
	For more information, see the LAN Manager "RAS Administrator's Guide."
	
	For Windows NT or Windows NT Advanced Server:
	
	1. Start Registry Editor and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \RemoteAccess\Parameters\NetBIOSGateway
	
	2. If you can find a RemoteListen key, choose Edit Value from the Edit menu and
	  change the value to 2. If there is no RemoteListen key, choose Add Key from
	  the Edit menu and use the following information:
	
	  Value Name: RemoteListen Data Type: REG_DWORD Value: <0, 1, or 2>
	
	For more information, see Windows NT "RAS Administrator's Guide"
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 3.1 4.0
	
	=============================================================================
	

{% endraw %}
