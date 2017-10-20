---
layout: page
title: "Q139608: SMB Traffic During Windows NT Domain Logon"
permalink: /kb/139/Q139608/
---

## Q139608: SMB Traffic During Windows NT Domain Logon

{% raw %}

	Article: Q139608
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP2,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51 SP2, 4.0 
	- Microsoft Windows NT Workstation versions 3.51 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article explains the network traffic that occurs when a Windows NT
	Workstation logs on to a Windows NT Domain in a Windows Internet Name Service
	(WINS) environment. It focuses on the NetBIOS names that get registered during
	the bootup and logon processes.
	
	MORE INFORMATION
	================
	
	SETUP
	-----
	
	This information is based on a Windows NT Workstation version 3.51 with Service
	Pack 2. The computer name of the workstation is NTWINSCLIENT, and is a member of
	the NTWINSDOM domain. The user login name is NEWUSER. This domain contains a
	single primary domain controller (PDC) and one Windows NT Workstation. There is
	a WINS server on the network, but it is not a member of this domain. The IP
	address of the workstation is xxx.57.9.54 and the IP address of the PDC is
	xxx.57.11.179 where xxx represents any valid number for an IP address.
	
	At the workstation, if you issue the command "NBTSTAT -n" (without the quotation
	marks) at a command prompt, the following information appears:
	
	Node IpAddress: [xxx.57.9.54] Scope Id: []
	
	             NetBIOS Local Name Table
	
	  Name                 Type        Status
	  ---------------------------------------------
	  NTWINSCLIENT   <00>  UNIQUE      Registered
	  NTWINSDOM      <00>  GROUP       Registered
	  NTWINSCLIENT   <03>  UNIQUE      Registered
	  NTWINSCLIENT   <20>  UNIQUE      Registered
	  NTWINSDOM      <1E>  GROUP       Registered
	  NEWUSER        <03>  UNIQUE      Registered
	
	The following explains the relevant server message block (SMB), NetBIOS, and NBT
	traffic during the bootup and logon processes as recorded with Microsoft Network
	Monitor. It also shows items from the NBTSTAT -n command being registered.
	
	1. The Windows NT Workstation boots up. This shows the registration request and
	  reply for the unique computername of NTWINSCLIENT:
	
	  Windows NT Workstation to the WINS Server:
	
	  NBT: NS: Registration req. for NTWINSCLIENT <00>
	
	  WINS Server to the Windows NT Workstation:
	
	  NBT: NS: Registration (Node Status) resp. for NTWINSCLIENT <00>,
	  Success, Owner Addr. xxx.57.9.54
	
	2. The Windows NT Workstation verifies and queries the WINS server for the name
	  and IP address of a domain controller (DC) in its domain:
	
	  Windows NT Workstation to the WINS Server:
	
	  NBT: NS: Registration req. for NTWINSDOM <00>
	
	  WINS Server to the NT Workstation:
	
	  NBT: NS: Registration (Node Status) resp. for NTWINSDOM <00>, Success,
	  Owner Addr. xxx.57.9.54
	
	  Windows NT Workstation to the WINS Server:
	
	  NBT: NS: Query req. for NTWINSDOM <1C>
	
	  WINS Server to the Windows NT Workstation:
	
	  NBT: NS: Query (Node Status) resp. for NTWINSDOM <1C>, Success
	
	3. After obtaining the IP address, it broadcasts the logon request so the
	  computername can exist in the domain:
	
	  Windows NT Workstation Broadcast:
	
	  NBT: DS: Type = 17 (DIRECT GROUP) SMB: C transact, File =
	  \MAILSLOT\NET\NTLOGON NETLOGON: SAM LOGON request from client
	
	  Windows NT Workstation Broadcast:
	
	  ARP_RARP: ARP: Request, Target IP: xxx.57.11.179
	
	4. When the DC responds to the broadcast, it gives the client the name of the
	  server that can validate the computer name in the domain:
	
	  Windows NT DC to the Windows NT Workstation:
	
	  ARP_RARP: ARP: Reply, Target IP: xxx.57.9.54 Target Hdwr Addr: 00AA0051E2B3
	
	5. The Windows NT Workstation then begins the logon process of its computer
	  name:
	
	  Windows NT Workstation to the NT Domain Controller:
	
	  NBT: DS: Type = 17 (DIRECT GROUP) SMB: C transact, File =
	  \MAILSLOT\NET\NTLOGON NETLOGON: SAM LOGON request from client
	
	  Windows NT Workstation to the NT Domain Controller:
	
	  NBT: DS: Type = 17 (DIRECT GROUP) SMB: C transact, File =
	  \MAILSLOT\NET\NTLOGON NETLOGON: SAM LOGON request from client
	
	  Windows NT DC to the Windows NT Workstation:
	
	  NBT: DS: Type = 16 (DIRECT UNIQUE) SMB: C transact, File =
	  \MAILSLOT\NET\GETDC209 NETLOGON: SAM Response to SAM LOGON request
	
	  Windows NT Workstation to the WINS Server:
	
	  NBT: NS: Query req. for NTWINSPDC
	
	  WINS Server to the Windows NT Workstation:
	
	  NBT: NS: Query (Node Status) resp. for NTWINSPDC, Success
	
	  Windows NT Workstation to the Windows NT DC:
	
	  NBT: SS: Session Request, Dest: NTWINSPDC , Source: NTWINSCLIENT<00>,
	  Len: 68
	
	  Windows NT DC to the Windows NT Workstation:
	
	  NBT: SS: Positive Session Response, Len: 0
	
	6. The two machines (DC and workstation) then negotiate at what level of SMB
	  they are going to communicate on:
	
	  Windows NT Workstation to the Windows NT DC:
	
	  SMB: C negotiate, Dialect = NT LM 0.12
	
	  Windows NT DC to the Windows NT Workstation:
	
	  SMB: R negotiate, Dialect # = 7
	
	7. The workstation connects to the IPC$ share on the DC so the computer name can
	  be validated as existing on the domain:
	
	  Windows NT Workstation to the Windows NT DC:
	
	  SMB: C session setup & X, Username = , and C tree connect & X, Share
	  =\\NTWINSPDC\IPC$
	
	  Windows NT DC to the Windows NT Workstation:
	
	  SMB: R session setup & X, and R tree connect & X, Type = IPC
	
	  Windows NT Workstation to the Windows NT DC:
	
	  SMB: C NT create & X, File = \lsarpc
	
	  Windows NT DC to the Windows NT Workstation:
	
	  SMB: R NT create & X, FID = 0x800
	
	  At this point Microsoft RPC traffic over SMBs occurs between the Windows NT DC
	  and the Windows NT Workstation. This traffic is not shown because it does not
	  pertain to the subject matter.
	
	  Windows NT Workstation to the Windows NT DC:
	
	  SMB: C close file, FID = 0x800
	
	  Windows NT DC to the Windows NT Workstation:
	
	  SMB: R close file
	
	  Windows NT Workstation to the Windows NT DC:
	
	  SMB: C NT create & X, File = \NETLOGON
	
	  Windows NT DC to the Windows NT Workstation:
	
	  SMB: R NT create & X, FID = 0x801
	
	  At this point Microsoft RPC traffic over SMBs occurs between the Windows NT DC
	  and the Windows NT Workstation. This traffic is not shown because it does not
	  pertain to the subject matter.
	
	8. The Workstation then registers the computer name for the Messenger Service:
	
	  Windows NT Workstation to the WINS Server:
	
	  NBT: NS: Registration req. for NTWINSCLIENT <03>
	
	  WINS Server to the Windows NT Workstation:
	
	  NBT: NS: Registration (Node Status) resp. for NTWINSCLIENT <03>,
	  Success, Owner Addr. xxx.57.9.54
	
	  Windows NT Workstation to the WINS Server:
	
	  NBT: NS: Registration req. for NTWINSCLIENT
	
	  WINS Server to the Windows NT Workstation:
	
	  NBT: NS: Registration (Node Status) resp. for NTWINSCLIENT,Success, Owner
	  Addr. xxx.57.9.54
	
	  Windows NT Workstation Broadcast:
	
	  NBT: DS: Type = 17 (DIRECT GROUP) SMB: C transact, File = \MAILSLOT\BROWSE
	  BROWSER: Host Announcement [0x01] NTWINSCLIENT
	
	9. The Windows NT Workstation now requests to become a browser for the domain,
	  because a.) there are no backup browsers in this two-computer domain, and b.)
	  the Windows NT Workstation is capable of being a backup browser:
	
	  Windows NT Workstation to the WINS Server:
	
	  NBT: NS: Registration req. for NTWINSDOM <1E>
	
	  WINS Server to the Windows NT Workstation:
	
	  NBT: NS: Registration (Node Status) resp. for NTWINSDOM <1E>, Success,
	  Owner Addr. xxx.57.9.54
	
	  Windows NT Workstation Broadcast:
	
	  NBT: DS: Type = 17 (DIRECT GROUP) SMB: C transact, File = \MAILSLOT\BROWSE
	  BROWSER: Announcement Request [0x02]
	
	  Windows NT Workstation Broadcast:
	
	  NBT: DS: Type = 17 (DIRECT GROUP) SMB: C transact, File = \MAILSLOT\BROWSE
	  BROWSER: Host Announcement [0x01] NTWINSCLIENT
	
	10. The user presses CTRL+ALT+DEL and logs into the domain. Because this user
	  has never logged into this computer before, there is no cached information
	  at the workstation. The workstation needs to contact the domain controller
	  for validation:
	
	  Windows NT Workstation to the Windows NT DC:
	
	  NBT: SS: Session Request, Dest: NTWINSPDC , Source: NTWINSCLIENT<00>,
	  Len: 68
	
	  Windows NT DC to the Windows NT Workstation:
	
	  NBT: SS: Positive Session Response, Len: 0
	
	  Windows NT Workstation to the Windows NT DC:
	
	  SMB: C negotiate, Dialect = NT LM 0.12
	
	  Windows NT DC to the Windows NT Workstation:
	
	  SMB: R negotiate, Dialect # = 7
	
	  Windows NT Workstation to the Windows NT DC:
	
	  SMB: C session setup & X, Username = , and C tree connect & X, Share
	  =\\NTWINSPDC\IPC$
	
	  Windows NT DC to the Windows NT Workstation:
	
	  SMB: R session setup & X, and R tree connect & X, Type = IPC
	
	  Windows NT Workstation to the Windows NT DC:
	
	  SMB: C NT create & X, File = \lsarpc
	
	  Windows NT DC to the Windows NT Workstation:
	
	  SMB: R NT create & X, FID = 0x804
	
	  At this point Microsoft RPC traffic over SMBs occurs between the Windows NT DC
	  and the Windows NT Workstation. This traffic is not shown because it does not
	  pertain to the subject matter.
	
	  Windows NT Workstation to the Windows NT DC:
	
	  SMB: C close file, FID = 0x804
	
	  Windows NT DC to the Windows NT Workstation:
	
	  SMB: R close file
	
	  Windows NT Workstation to the Windows NT DC:
	
	  SMB: C NT create & X, File = \lsarpc
	
	  Windows NT DC to the Windows NT Workstation:
	
	  SMB: R NT create & X, FID = 0x805
	
	  At this point Microsoft RPC traffic over SMBs occurs between the Windows NT DC
	  and the Windows NT Workstation. This traffic is not shown because it does not
	  pertain to the subject matter.
	
	  Windows NT Workstation to the Windows NT DC:
	
	  SMB: C close file, FID = 0x805
	
	  Windows NT DC to the Windows NT Workstation:
	
	  SMB: R close file
	
	  Windows NT Workstation to the Windows NT DC:
	
	  SMB: C NT create & X, File = \NETLOGON
	
	  Windows NT DC to the Windows NT Workstation:
	
	  SMB: R NT create & X, FID = 0x806
	
	  At this point Microsoft RPC traffic over SMBs occurs between the Windows NT DC
	  and the Windows NT Workstation. This traffic is not shown because it does not
	  pertain to the subject matter.
	
	11. This is where the user name gets registered for the Messenger Service:
	
	  Windows NT Workstation to the WINS Server:
	
	  NBT: NS: Registration req. for NEWUSER <03>
	
	  WINS Server to the Windows NT Workstation:
	
	  NBT: NS: WACK (Node Status) resp. for NEWUSER <03>,Success
	
	  WINS Server to the Windows NT Workstation:
	
	  NBT: NS: Registration (Node Status) resp. for NEWUSER <03>, Success,
	  Owner Addr. xxx.57.9.54
	
	Additional query words: prodnt login bootup sniffer trace
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351sp2 kbWinNTW351SP2
	Version           : :3.51 SP2,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
