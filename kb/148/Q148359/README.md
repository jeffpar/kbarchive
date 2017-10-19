---
layout: page
title: "Q148359: SNA Server APPC Error: F004 AP_COMM_SUBSYSTEM_NOT_LOADED"
permalink: /kb/148/Q148359/
---

## Q148359: SNA Server APPC Error: F004 AP_COMM_SUBSYSTEM_NOT_LOADED

	Article: Q148359
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start an SNA Server APPC Transaction Program (TP), the
	following error message appears:
	
	  Primary Return Code = F004 AP_COMM_SUBSYSTEM_NOT_LOADED
	
	One or both the following secondary return codes also appear:
	
	  Secondary Return Code = 010000F0
	
	  Secondary Return code = 020000F0
	
	CAUSE
	=====
	
	The two secondary return codes appear due to the causes described below. The
	secondary return codes are documented on page 101 of the SNA Server APPC
	Programmer's Guide as X'F0000001' and X'F0000002' respectively. Intel processors
	store double-word values in byte inversed format. Therefore, an application may
	display the secondary return code as 0x010000F0 or 0x020000F0.
	
	Secondary Return Code = 010000F0
	--------------------------------
	
	This error occurs when the SNA Server client does not find any active SNA Servers
	running in the SNA Server domain or subdomain. If there are SNA Servers running,
	then this can also indicate that the SNA client is unable to receive a "sponsor"
	connection to an SNA Server in the domain. Specific causes of this problem
	include the following:
	
	- The SNA Server service is not started on the SNA Server.
	
	- When you run SNA Server 2.11 or greater and no more SNA Server licenses are
	  left (Per Server Reached = Per Server Purchased, or Per Server Purchased is
	  set to 0). To verify the status of the licenses, use License Manager in the
	  Network Administration group.
	
	- The SNA Server client software is unable to connect to the SNA Server over
	  the client-server LAN interface that has been selected. The following are
	  reasons that prevents a LAN session from opening:
	   - User does not have permission to connect to the Windows NT Server where
	     SNA Server is running.
	
	   - If this error occurs on an SNA Server Windows NT client, the SNA Server
	     that the client is connected to must have the Windows NT Guest account
	     enabled.
	
	     SNA Server aware applications, such as the 5250 or 3270 applet, rely on the
	     SNA Server client-server interface to create LAN sessions on its behalf.
	     If a user logs on to a client (where the SNA Server application is
	     running), which does not have permissions to create a LAN session with the
	     SNA Server, then this error occurs. If you select Microsoft Networking
	     during SNA client installation, connect to the IPC$ resource on the
	     server:
	
	     \\<SNA_Server_name>\ipc$
	
	     If this prompts for a password, there is a user permission problem with
	     your Windows NT domain user name and password. If you select Microsoft
	     Networking, the SNA Server client relies on the client-side redirector to
	     connect to the IPC$ resource through the Windows NT Server. For Banyan IP,
	     native TCP/IP and IPX/SPX, the user provides the Windows NT user ID,
	     password and Windows NT domain information to the SNA Server client
	     software. Then this authenticates the user request against the Windows NT
	     Server.
	
	     The Otherservers entry is used to append an SNA Server outside the client's
	     local Windows NT domain to the client's local service table. If the local
	     LU you are attempting to connect to is only defined on an Otherservers SNA
	     Server, the user must have the permission to create a Windows NT LAN
	     session to that SNA Server. The Windows Domain Administrator may want to
	     enable the Guest account on that SNA Server because the Otherservers SNA
	     Servers are commonly outside the client's local domain.
	
	- If the SNA Server has two network interface cards (NICs) and TCP/IP sockets
	  are used to connect to the server. For additional information, see the
	  following article in the Microsoft Knowledge Base:
	
	  Q128986 Connecting over TCP/IP to SNA Server with Multiple Net Cards
	
	- In a Windows 3.x or Windows for Workgroups client computer, the SNA client
	  software or network software may encounter memory allocation errors. The
	  following appears in an application internal trace when there is not enough
	  memory to read on a pipe (if Microsoft Networking is selected in the SNA
	  Server client setup):
	
	  47.67 DASYR 03-05 15:23:53 Asynch read failed, pipe handle 11, rc = 8
	
	  For additional information on how to tune memory on a Windows client, see the
	  following article in the Microsoft Knowledge Base:
	
	  Q126432 SNA Server Windows Client Memory Tuning
	
	
	Secondary Return code = 020000F0
	--------------------------------
	
	This error occurs if the local LU alias is not contained within the "LU_Alias"
	field of the TP_Started APPC verb. For example, if you do not enter a local LU
	Alias in the SNA Server 5250 Applet, do not default the User record with an
	appropriate local LU alias in SNA Server Admin Users and Groups window, or do
	not define the local APPC LU as a member of the default outgoing pool, this
	error occurs.
	
	NOTE: If you use a CPIC application, the following CPIC error message and the
	"APPC error F004 020000F0" error message appear:
	
	  Error 20 (CM_PRODUCT_SPECIFIC_ERROR)
	
	For additional information on Error 20 above, see the following article in the
	Microsoft Knowledge Base:
	
	  Q132720 SNA Server CPIC Allocate Error 20 (CM_PRODUCT_SPECIFIC_ERROR)
	
	Additional query words: prodsna sp1
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
