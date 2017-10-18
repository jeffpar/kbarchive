---
layout: page
title: "Q173607: Client Not Authenticated by Domain Through RAS Member Server"
permalink: kb/173/Q173607/
---

## Q173607: Client Not Authenticated by Domain Through RAS Member Server

	Article: Q173607
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you use Microsoft Windows 95 Dial-up Networking to access a remote network
	via a RAS member server that has been configured to use only the IPX/SPX
	protocol, you may receive the following error message when the remote Windows NT
	domain controller attempts to send back a logon response through the RAS member
	server:
	
	  There is no domain controller available
	
	After receiving the error message, the dial-up client may still have access to
	the remote network (without authentication), and may be able to access some
	resources on the domain.
	
	CAUSE
	=====
	
	The RAS member server cannot authenticate logon attempts, so it forwards the
	NetBIOS broadcast (type 20 packets) to the domain controller on the local area
	network (LAN). The domain controller tries to respond with a type 20 broadcast
	back through the RAS gateway to the client. By default, the RAS member server
	will not forward type 20 Packets (14h) back to the client unless two-way
	broadcasting of type 20 packets (NetBIOS over IPX) is enabled on the RAS member
	server.
	
	RESOLUTION
	==========
	
	To enable two-way broadcasting of NetBIOS over IPX through a RAS gateway, change
	the data value in the registry on the RAS server.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the Changing Keys and Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	1. Start Registry Editor (Regedt32.exe), then locate the following registry
	  subkey in the HKEY_LOCAL_MACHINE subtree:
	
	  \System\CurrentControlSet\Services\NwlnkRip\Parameters
	
	2. Select the value NetBiosRouting.
	
	3. On the Edit menu, click DWORD.
	
	4. If the system has one network adapter, change the data value from 2 to 6. Or,
	  if the system has multiple network adapters and you are already forwarding
	  between LANs, change the data value from 3 to 7.
	
	  This is a 3-bit FLAG field set depending on whether you have multiple network
	  adapters and/or RAS. The following is a list of the data values you can use
	  for NetBiosRouting:
	
	   - 0 = Do not forward broadcasts. (This is the default, to reduce network
	     traffic.)
	
	   - 1 = Forward NetBIOS packets from the LAN to LAN.
	
	   - 2 = Forward NetBIOS packets from the remote client to the LAN (WAN to
	     LAN).
	
	   - 4 = Forward NetBIOS packets from the LAN to the remote client (LAN to
	     WAN).
	
	  Additionaly, you can set multiple flags simultaneously (that is, 3, 6 or 7).
	  This can enable NetBIOS packets being forwarded both ways between remote
	  clients and the LAN (LAN to WAN and WAN to LAN) and between LANs if 7 is
	  selected.
	
	
	5. Click OK, and then quit Registry Editor.
	
	6. Shut down and restart Windows NT Server.
	
	NOTE: Forwarding 14h packets significantly increases network and RAS traffic. It
	is more efficient to enable the NetBEUI protocol over the RAS connection (RAS
	Server + PDC) than to enable two-way broadcasting of type 20 (14h) packets.
	
	For additional information, see the following article in the Microsoft Knowledge
	Base:
	
	ARTICLE-ID: Q148693
	TITLE : IPX RAS Clients Unable to View or Access NetBIOS Resources
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
