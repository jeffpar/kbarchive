---
layout: page
title: "Q187829: XCLN: ShivaRemote Connectivity with Windows 3.1x &amp; WinNT RAS"
permalink: /kb/187/Q187829/
---

## Q187829: XCLN: ShivaRemote Connectivity with Windows 3.1x &amp; WinNT RAS

	Article: Q187829
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,8.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you are using the ShivaRemote client software to establish a connection
	through a Windows NT Remote Access Service (RAS) server to an Exchange Server
	computer, the following error message may appear:
	
	  "Unable to negotiate LCP connection. Please check that remote device is
	  installed and configured and that dial-in is enabled"
	
	This is most commonly seen with clients using an Exchange or Outlook client for
	Windows 3.x. ShivaRemote software is shipped with these clients for dial-up
	access.
	
	CAUSE
	=====
	
	The RAS server is a Windows NT Server 4.0 computer. If your RAS server is
	configured to "Allow any authentication including clear text," a RAS client is
	able to connect with Password Authentication Protocol (PAP), Shiva Password
	Authentication Protocol (SPAP), Challenge Handshake Authentication Protocol
	(CHAP), or MS-CHAP, depending on what the client supports. Normally, a client
	attempts to connect with CHAP or MS-CHAP, if that is valid for the RAS server to
	which it is connecting. In the case of ShivaRemote client connections, Shiva
	does not support MS-CHAP, which causes the client to fail.
	
	WORKAROUND
	==========
	
	There are four possible workarounds:
	
	1. Set the Windows NT Server 4.0 RAS computer to use NetBEUI as the only
	  protocol. This allows the Exchange connection to work. However, the NetBEUI
	  protocol has limitations that others do not.
	
	2. Downgrade the RAS server to Windows NT version 3.51 with the latest service
	  pack. Shiva can negotiate connections through Windows NT 3.51 RAS servers
	  using any protocol.
	
	3. Upgrade the client to Windows 95 and use dial-up networking to configure a
	  remote connection.
	
	4. Change the RAS server so that it is forced to use PAP only. If your RAS
	  server is configured to "Allow any authentication including clear text," a
	  RAS client is able to connect with PAP, SPAP, CHAP, or MS-CHAP depending on
	  what the client supports. Normally, a Microsoft RAS client attempts to
	  connect with CHAP or MS-CHAP, if that is valid for the RAS server to which it
	  is connecting. To force a RAS client to use PAP, you must delete the SPAP and
	  CHAP registry keys from your RAS server using the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the following subkey:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\RasMan\PPP
	 
	
	3. Click SPAP, click Edit, and click Delete.
	
	4. Click Yes to confirm the deletion.
	
	5. Click CHAP, click Edit, and click Delete.
	
	6. Click Yes to confirm the deletion.
	
	7. Close Registry Editor. Stop and restart the Routing and Remote Access
	  Service.
	
	NOTE: This procedure does not work on normal Windows NT RAS servers, only Windows
	NT Server 4.0 RAS computers that have Routing and Remote Access installed. If
	you delete these registry keys on a normal RAS server, the RAS services will
	fail to start after you restart.
	
	MORE INFORMATION
	================
	
	The following are recommended methods for connecting remote Windows 3.1x users
	to an Exchange Server computer:
	
	1. Outlook for Windows 3.1x that ships with Exchange 5.5, also ships with Shiva
	  connectivity (the same version of Shiva that shipped with Exchange 5.0
	  clients, version 3.59). If your RAS server is Windows NT 4.0, then you can
	  connect your clients via Shiva using NetBEUI only. See detailed information
	  above.
	
	2. Outlook Web Access (OWA), which is basically connecting to the Exchange
	  Server computer through an Internet browser (no separate Exchange/Outlook
	  client). OWA is not a full-featured client but may work well in your
	  scenario.
	
	3. Outlook for Windows 3.1x that ships with Exchange 5.5 with Shiva
	  connectivity. If your RAS server is Windows NT 3.51 (instead of 4.0), you can
	  use TCP/IP, IPX, or NetBEUI to connect to the Exchange Server computer via
	  Shiva RAS.
	
	For more information about remote connectivity using Windows 3.1x clients, see
	the Readme.txt file included with Exchange and Outlook clients.
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,8.0
	Issue type        : kbprb
	
	=============================================================================
	
