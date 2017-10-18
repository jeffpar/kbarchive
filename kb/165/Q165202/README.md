---
layout: page
title: "Q165202: WinNT Client Logon in Resource and Master Domain Environment"
permalink: kb/165/Q165202/
---

## Q165202: WinNT Client Logon in Resource and Master Domain Environment

	Article: Q165202
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 29-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start a Windows NT Workstation-based computer or a Windows NT
	Server-based computer that is a member of a domain, the computer attempts to
	establish a secure channel to a domain controller in its domain to validate its
	machine account. This occurs before the CTRL+ALT+DEL logon screen is displayed.
	If the domain that the Windows NT client is a member of trusts another domain,
	you can log on to that trusted domain at the console.
	
	If you log on to this trusted domain, your credentials are passed from the
	Windows NT client to a domain controller in its domain that it established a
	secure channel with at startup time. This resource domain controller then does
	pass-through authentication to a domain controller in the accounts or master
	domain that it established a secure channel with at startup time. If you have a
	logon script, or if the client is Windows NT version 4.0 that implements
	Policies, the domain controller in the accounts domain that validated your
	credentials through pass-through authentication is also used to service the log
	on script or Policies request.
	
	MORE INFORMATION
	================
	
	The following Network Monitor frames summarize the critical communication
	between a Windows NT Workstation-based computer and a domain controller in the
	domain in which the machine account for the Windows NT Workstation-based
	computer resides:
	
	  NAME QUERY FOR MEMBER WORKSTATION'S DOMAIN NAME:
	  NBT: NS: Query req. for RANDYMCD       <1C>
	
	  MEMBER WORKSTATION INITIATING SECURE CHANNEL WITH ITS DOMAIN CONTROLLER.
	  BROADCASTS FIRST, THEN TRIES LIST RETURNED BY WINS:
	  NETLOGON: SAM LOGON request from client
	
	  MEMBER WORKSTATION ESTABLISHING SESSION WITH ITS DOMAIN CONTROLLER:
	  SMB: C session setup & X, Username = , and C tree connect & X,
	  Share = \\RANDYMC1\IPC$
	
	  MEMBER WORKSTATION REQUESTING LIST OF TRUSTED DOMAINS:
	  R_LSARPC: RPC Client call lsarpc:LsarEnumerateTrustedDomains(..)
	
	  MEMBER WORKSTATION AUTHENTICATIONG ITS MACHINE ACCOUNT:
	  SMB: C NT create & X, File = \NETLOGON
	  R_LOGON: RPC Client call logon:NetrServerReqChallenge(..)
	  R_LOGON: RPC Client call logon:NetrServerAuthenticate2(..)
	
	The following Network Monitor frames summarize the critical communication between
	a Windows NT Workstation-based computer or a Windows NT Server-based computer in
	a resource domain, a domain controller in the same resource domain, and a domain
	controller in an accounts domain.
	
	  MEMBER WORKSTATION NAME QUERY FOR ITS DOMAIN CONTROLLER:
	  NBT: NS: Query req. for RANDYMC1
	
	  MEMBER WORKSTATION ESTABLISHING SESSION WITH ITS DOMAIN CONTROLLER:
	  NBT: SS: Session Request, Dest:RANDYMC1, Source: RANDYMC3<00>, Len: 68
	  SMB: C session setup & X, Username = , and C tree connect & X,
	  Share = \\RANDYMC1\IPC$
	
	  NOTE:  WINDOWS NT 4.0 UPDATES THE TRUSTED DOMAIN LIST CACHE EVERY 2
	  MINUTES BY DEFAULT:
	  R_LSARPC: RPC Client call lsarpc:LsarEnumerateTrustedDomains(..)
	
	  MEMBER WORKSTATION PASSING ITS MACHINE NAME, USERNAME, AND TRUSTED
	  DOMAIN NAME TO ITS RESOURCE DOMAIN CONTROLLER:
	  SMB: C NT create & X, File = \NETLOGON
	  R_LOGON: RPC Client call logon:NetrLogonSamLogon(..)
	  00160:  0000000000000900 0000420050005300   ..........B.P.S.
	  00170:  490047004E004F00 4600460074000600   I.G.N.O.F.F.t...
	  00180:  0000000000000600 0000450053005300   ..........E.S.S.
	  00190:  44004F004D000900 0000000000000800   D.O.M...........
	  001A0:  0000520041004E00 440059004D004300   ..R.A.N.D.Y.M.C.
	  001B0:  33000300                            3...
	
	  RESOURCE DOMAIN CONTROLLER PASSING CLIENTS CREDENTIALS TO TRUSTED
	  ACCOUNTS DOMAIN CONTROLLER:
	  MSRPC: c/o RPC Request:  call 0x4  opnum 0x2  context 0x0  hint 0x10A
	  00160:  0000090000004200 5000530049004700   ......B.P.S.I.G.
	  00170:  4E004F0046004600 0000060000000000   N.O.F.F.........
	  00180:  0000060000004500 5300530044004F00   ......E.S.S.D.O.
	  00190:  4D00090000000000 0000080000005200   M.............R.
	  001A0:  41004E0044005900 4D00430033000300   A.N.D.Y.M.C.3...
	
	  ACCOUNTS DOMAIN CONTROLLER PASSING AUTHENTICATION TO RESOURCE DOMAIN
	  CONTROLLER ALONG WITH LOGON SCRIPT NAME:
	  MSRPC: c/o RPC Response: call 0x4 context 0x0  hint 0x198  cancels 0x0
	  00170:  0000000000000600 0000450053005300   ..........E.S.S.
	  00180:  44004F004D000B00 0000000000000A00   D.O.M...........
	  00190:  0000650073007300 64006F006D002E00   ..e.s.s.d.o.m...
	  001A0:  6200610074000300 0000010200000700   b.a.t...........
	  001B0:  0000000200000700 0000180400000700   ................
	  001C0:  0000080000000000 0000070000004500   ..............E.
	  001D0:  5300530044004F00 4D0031006F000A00   S.S.D.O.M.1.o...
	  001E0:  0000000000000900 0000420050005300   ..........B.P.S.
	  001F0:  490047004E004F00 4600460070000400   I.G.N.O.F.F.p...
	
	  RESOURCE DOMAIN CONTROLLER PASSING POSITIVE AUTHENTICATION RESPONSE TO
	  MEMBER WORKSTATION ALONG WITH ACCOUNTS DOMAIN CONTROLLER COMPUTER NAME
	  THAT DID THE AUTHENTICATION:
	  R_LOGON: RPC Server response logon:NetrLogonSamLogon(..)
	  00170:  0000000000000600 0000450053005300   ..........E.S.S.
	  00180:  44004F004D000B00 0000000000000A00   D.O.M...........
	  00190:  0000650073007300 64006F006D002E00   ..e.s.s.d.o.m...
	  001A0:  6200610074000300 0000010200000700   b.a.t...........
	  001B0:  0000000200000700 0000180400000700   ................
	  001C0:  0000080000000000 0000070000004500   ..............E.
	  001D0:  5300530044004F00 4D00310000000A00   S.S.D.O.M.1.....
	  001E0:  0000000000000900 0000420050005300   ..........B.P.S.
	  001F0:  490047004E004F00 4600460000000400   I.G.N.O.F.F.....
	
	  MEMBER WORKSTATION NAME QUERY FOR ACCOUNTS DOMAIN CONTROLLER COMPUTER
	  NAME:
	  NBT: NS: Query req. for ESSDOM1
	
	  MEMBER SERVER ESTABLISHING SESSION WITH ACCOUNTS DOMAIN CONTROLLER:
	  SMB: C session setup & X, Username = ESSDOM, and C tree connect & X,
	  Share = \\ESSDOM1\NETLOGON
	
	  MEMBER WORKSTATION VERSION 4.0 CHECKING FOR A POLICY:
	  SMB: C NT create & X, File = \ntconfig.pol
	
	  MEMBER WORKSTATION CHECKING FOR ITS LOGON SCRIPT:
	  SMB: C transact2 Query path info, File = \essdom.bat
	
	For additional information about secure channels, Windows NT trusts, and
	pass-through authentication, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q158148 Domain Secure Channel Utility -- Nltest.exe
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
