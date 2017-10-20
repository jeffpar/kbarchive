---
layout: page
title: "Q150053: Erratic Domain Logon from Windows 95 Dial-Up Networking"
permalink: /kb/150/Q150053/
---

## Q150053: Erratic Domain Logon from Windows 95 Dial-Up Networking

{% raw %}

	Article: Q150053
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.51,4.0,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Remote connection to a Windows NT domain fails using the Windows 95 Dial-Up
	Networking (DUN) client. Your logon scripts will not run, and you get the
	following error message:
	
	  No domain server was available to validate your password. You may not be able
	  to gain access to some network resources.
	
	Following this error you may be prompted with the domain logon dialog box
	requesting your user name, password, and domain name. In most cases you will
	eventually be able to connect but without domain validation.
	
	CAUSE
	=====
	
	This problem occurs when you use a portable computer that was once connected
	locally to a LAN through a network interface card (NIC). The computer's NIC was
	not removed or disabled, and the first two octets of the DHCP-assigned subnetted
	class B IP address are the same for both the NIC and the dial-up adapter.
	
	WORKAROUND
	==========
	
	Create a hardware profile for remote connections that does not include the NIC
	as part of the installed hardware.
	
	NOTE: After you have configured more than one hardware profile for a computer
	running Windows 95, a menu automatically appears during the booting process
	listing all available hardware profiles as numbered choices. The user may choose
	only one per computing session.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows 95.
	
	A potential fix for this issue is documented in the following article in the
	Microsoft Knowledge Base:
	
	  Q154434 Err Msg: No Domain Controller Was Available to Validate...
	
	
	MORE INFORMATION
	================
	
	This problem was reported by corporate users who normally connect their portable
	computers to a corporate LAN when at the office. When they travel, they use a
	Windows 95 DUN connection to access their company's network resources.
	
	The problem usually appears under the following circumstances:
	
	- A portable computer running Windows 95 is connected to a local LAN using
	  TCP/IP. The laptop NIC gets a DHCP-assigned, subnetted class B address.
	
	- Later, the computer is physically disconnected from the LAN, but the NIC
	  remains in the computer.
	
	- From a remote location, the user attempts to dial in to an NT RAS server that
	  allows access to the company's LAN.
	
	- The NT RAS server uses DHCP to assign an IP address to the remote DUN client.
	
	- If the first two octets of the subnetted class B address are the same for the
	  client's NIC as for the PPP connection through the dial-up adapter, then the
	  access problem may appear.
	
	Additional query words: remote access service dial-up win95 timeout
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : :3.51,4.0,95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
