---
layout: page
title: "Q265384: Snasii.dll Always Tries to Locate Host Account Cache Database"
permalink: /kb/265/Q265384/
---

## Q265384: Snasii.dll Always Tries to Locate Host Account Cache Database

	Article: Q265384
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The host security DLL (Snasii.dll) is initialized when the SNA Server service is
	started on computers running both SNA Server versions 3.0 and 4.0 and Host
	Integration Server 2000. Snasii.dll tries to locate a Host Account Cache (HAC)
	database to use for Single Sign-On (SSO) account lookups. This occurs even if
	SNA Server or Host Integration Server 2000 have not been configured to use the
	Host Security Integration feature.
	
	If Host Security Integration is not being used, the Snasii.dll file cannot locate
	an HAC database. The failure to locate an HAC database does not cause any
	visible symptoms on the computer running SNA Server or Host Integration Server.
	The Snasii.dll file does not log any events in the Windows NT or Windows 2000
	event logs when it cannot locate an HAC database during its initialization.
	
	If SNA Server and/or network traces are enabled, they capture data that
	corresponds to the HAC location process. This unexpected data may cause some
	confusion while troubleshooting other issues.
	
	CAUSE
	=====
	
	The SNA Server service (Snaservr.exe) in SNA Server versions 3.0 and 4.0 and
	Host Integration Server 2000 does not validate if the Host Security Integration
	feature is installed. Therefore, the Snasii.dll file is always initialized by
	the SNA Server service when it is started.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 (all
	SP), 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, and Host Integration Server 2000.
	
	
	MORE INFORMATION
	================
	
	The following article details the process used by the Snasii.dll file to locate
	an HAC database:
	
	  Q248479 Host Account Database Location for Single Sign-On
	
	As this article explains, the Snasii.dll file searches for a Secondary HAC
	Database (SDB) on its local system, and then for each of the Backup Domain
	Controllers (BDCs) in the domain if the MDB is not available. If the Snasii.dll
	file fails to locate an SDB on any of the BDCs in the domain, it stops trying to
	locate an HAC database until it receives a Single Sign-On account lookup request
	from the SNA Server service. If it receives an SSO account lookup request, it
	moves through the process to locate a HAC database, which is described in the
	referenced article.
	
	If Host Security Integration is not configured, the Snasii.dll file never
	receives an SSO account lookup request, which is why it does not try to locate
	an HAC database after is goes through the location process. Therefore, this only
	occurs each time the SNA Server service is started.
	
	If SNA Server internal message traces (Nodemsg?.atf) are enabled through the SNA
	Server trace program (Snatrace.exe) while the SNA Server service is starting,
	the following messages are logged while the Snasii.dll file is trying to locate
	an HAC database when there is not one available:
	
	  ____________________________________________________________
	  MSG_OUTGOING to ServerType: MDB, Address: 0x2379b0
	  Message Type: UDI_LOCATE. Sequence Number: 0
	  Request: ResourceType: SDB, DomainName: IBMHOST, NumRegVectors: 0, Status: 0
	  MSG_OUTGOING to ServerType: MDB - Error: ErrorCode: 1753
	  ____________________________________________________________
	  MSG_OUTGOING to ServerType: MDB, Address: 0x2379b0
	  Message Type: UDI_LOCATE. Sequence Number: 0
	  Request: ResourceType: SDB, DomainName: IBMHOST, NumRegVectors: 0, Status: 0
	  MSG_OUTGOING to ServerType: MDB - Error: ErrorCode: 1722
	  ____________________________________________________________
	  MSG_OUTGOING to ServerType: SDB, Address: 0x2379b0
	  Message Type: UDI_LOCATE. Sequence Number: 0
	  Request: ResourceType: SDB, DomainName: IBMHOST, NumRegVectors: 0, Status: 0
	  MSG_OUTGOING to ServerType: SDB - Error: ErrorCode: 1753
	  ____________________________________________________________
	  MSG_OUTGOING to ServerType: SDB, Address: 0x2379b0
	  Message Type: UDI_LOCATE. Sequence Number: 0
	  Request: ResourceType: SDB, DomainName: IBMHOST, NumRegVectors: 0, Status: 0
	  MSG_OUTGOING to ServerType: SDB - Error: ErrorCode: 1722
	  ____________________________________________________________
	
	The first two messages are the error messages returned when Snasii.dll tries to
	contact the Master HAC Database (MDB) on the Primary Domain Controller (PDC).
	The last two messages are the error messages returned when Snasii.dll tries to
	contact a Secondary HAC Database (SDB) on one of the Backup Domain Controllers
	(BDCs) in the domain.
	
	The following is an excerpt of a SNA Server internal trace (Nodeint?.atf) that
	captures the enumeration of the BDCs in the domain and the connection attempt to
	one of the BDCs:
	
	  Enumerate Backup Domain Controllers
	  Found 56 BDCs
	  Trying server TST-BDC-01
	  OpenConnection begin
	  OpenConnection: acquired the open/close lock
	  OpenConnection: acquired the modify lock
	  RpcClient: connect begin
	  RpcClient: connect using Client Binding: b1c7c350-c091-11cf-a65e-0020afc28c52@ncacn_ip_tcp:TST-BDC-01
	  RpcClient: connect using current user's security context to set authentication credentials on RPC binding handle.
	  RpcClient: connect successful
	  RpcClient: End
	  OpenConnection: network address specified to Connect for server type SDB is TST-BDC-01
	  OpenConnection: opened connection to server type SDB
	  OpenConnection: reset synchronization variables
	  OpenConnection: released modify lock
	  OpenConnection: released open/close lock
	  OpenConnection end
	  RpcDirectSendMessage begin
	  SendGenericMessage begin
	  Incremented the send count, connection handle 0x234DB8 - outstanding sends 1
	  StartRpcCancelTimer begin
	  StartRpcCancelTimer end
	  About to invoke RPC on binding b1c7c350-c091-11cf-a65e-0020afc28c52@ncacn_ip_tcp:TST-BDC-01
	  RPC on binding b1c7c350-c091-11cf-a65e-0020afc28c52@ncacn_ip_tcp:TST-BDC-01 returned error: 0x6D9 (There are no more endpoints available from the endpoint mapper. )
	  RPC on binding b1c7c350-c091-11cf-a65e-0020afc28c52@ncacn_ip_tcp:TST-BDC-01 returned error, mapping to server unavailable error
	  StopRpcCancelTimer begin
	  StopRpcCancelTimer end
	  Acquired the modify lock
	  RpcClient: disconnect begin
	  RpcClient: disconnect end
	
	A network trace captured with Microsoft's Network Monitor (or any other network
	trace utility) while the HAC database location is occurring shows RPC data
	flowing between the computer running SNA Server or Host Integration Server 2000
	and the domain controllers.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	Issue type        : kbbug
	
	=============================================================================
	
