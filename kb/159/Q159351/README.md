---
layout: page
title: "Q159351: SecureSponsor Disables SNA 3.0 Win 3.x Password Change Feature"
permalink: /kb/159/Q159351/
---

## Q159351: SecureSponsor Disables SNA 3.0 Win 3.x Password Change Feature

{% raw %}

	Article: Q159351
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbusage
	Last Modified: 31-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If SNA Server 3.0 Windows 3.x client software is being used, and encryption has
	been configured for the sponsor connection (enabled using the SnaBase
	SecureSponsor registry parameter), the user will be unable to logon to Windows
	NT if their Windows NT userid has expired. Note that encryption can still be
	enabled for application data.
	
	If no sponsor encryption is configured, and client application data encryption
	has been configured (via SNA Server Manager, for the user or group), then the
	SNA Server 3.0 Windows 3.x client will support Windows NT password changes, as
	supported under SNA Server 2.11 Service Pack 1.
	
	MORE INFORMATION
	================
	
	The SNA Server 3.0 client and server software support the ability to encrypt
	client-server data that flows over the network, if the administrator has
	configured encryption for the user or group within the SNA Server Manager
	program. This encryption only affects SNA application data, unless the
	SecureSponsor registry parameter is set to YES or ON (upper case) on the SNA
	Server in the following registry key:
	
	HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/SnaBase/Parameters
	  SecureSponsor: REG_SZ: YES    (or "ON")
	
	This causes the server's SnaBase service to implement encryption of all "sponsor
	connection" data. The "sponsor connection" is a special service connection where
	the following messages flow:
	
	- the SNA Server sends "service table" messages to the client, listing the SNA
	  Servers running in the SNA subdomain.
	
	- the SNA Server sends "dynamic load requests" to start invokable APPC or CPIC
	  transaction programs which may be configured to run on the client machine.
	
	- the SNA client sends "RPC" requests to the server, to determine which servers
	  support the resources being requested by the client application (such as
	  3270, LUA and APPC LU names).
	
	- the SNA client sends logging information to the SNA Server to record in the
	  Windows NT application event log.
	
	If sponsor connection encryption is enabled, the SNA Server Windows 3.x client
	software no longer supports the ability to update the Windows NT user password,
	if the password expires.
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbusage 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	
	=============================================================================
	

{% endraw %}
