---
layout: page
title: "Q160137: Invalid DNS Server Address Slows Name Resolution on RAS Client"
permalink: /kb/160/Q160137/
---

## Q160137: Invalid DNS Server Address Slows Name Resolution on RAS Client

	Article: Q160137
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have enabled Domain Name System (DNS) and configured a specific DNS server
	address given to you by an Internet Service Provider (ISP) for your Windows 95
	or Windows NT remote client. You are still connected to your local LAN and WINS
	is enabled. Name resolution works fine while you are connected directly to your
	local LAN, but when you disconnect your network adapter and dial in remotely to
	the local LAN, name resolution slows significantly. This slow down may cause
	some server-based applications, such as Lotus Notes, to time out.
	
	CAUSE
	=====
	
	Because you are now dialing into your local LAN and not to your ISP, the
	configured DNS server address is now invalid. Your remote client tries to
	resolve names against a non-existent DNS server and this introduces delays in
	the name resolution process.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the invalid static entry for the DNS server.
	You must remove the entry from both Windows NT and the DUN connectoid.
	
	To remove the invalid DNS server IP address from Windows NT, perform the
	following steps:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Network.
	
	2. Click the Protocols tab, select TCP/IP protocol, and then click Properties.
	
	3. Click the DNS tab, and then delete the IP address.
	
	-and-
	
	To remove the invalid DNS server IP address from the DUN connectoid, perform the
	following steps:
	
	1. From the Desktop, double-click My Computer, and then double-click Dial-Up
	  Networking.
	
	2. Click the More tab for the required phonebook entry, and click: "Edit entry
	  and modem properties..."
	
	3. Click the Server tab, then click TCP/IP Settings...
	
	4. Ensure that the invalid IP address does not exist in the "Specify name server
	  addresses" dialog box for either Primary or Secondary DNS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	With both DNS and WINS installed on the client, Microsoft name resolution
	specifies that the WINS server should be contacted first. In this case, it does
	not happen as intended.
	
	Additional query words: search order hang freeze slowdown
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
