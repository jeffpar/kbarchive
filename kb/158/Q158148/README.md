---
layout: page
title: "Q158148: Domain Secure Channel Utility -- Nltest.exe"
permalink: /kb/158/Q158148/
---

## Q158148: Domain Secure Channel Utility -- Nltest.exe

	Article: Q158148
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows NT 4.0 Resource Kit contains a very powerful command-line
	utility to test secure channels between Windows NT computers that are members of
	a domain, and between domain controllers that are trusting other domains. Below
	is a detailed discussion.
	
	MORE INFORMATION
	================
	
	NLTEST Overview
	---------------
	
	Nltest.exe is a very powerful command-line utility that can be used to test trust
	relationships and the state of domain controller replication in a Windows NT
	domain. A domain consist of domain controllers in which there is a single
	primary domain controller (PDC) and zero or more backup domain controllers
	(BDC).
	
	When the word Trust is used in the context of Windows NT, it describes a
	relationship between two Windows NT domains. Each domain involved has either the
	role of being the trusting domain, or the trusted domain. For any given trust
	relationship, there is a single discreet communication channel between each
	domain controller in the trusting domain and a domain controller in the trusted
	domain. For example if Domain "A" trusts Domain "B", then "B" is the trusted
	domain, and "A" is the trusting domain. In a another example, suppose Domain "I"
	trusts Domain "J", and Domain "J" trusts Domain "I". In this example, there are
	two distinct trust relationships between the domain controllers. Often, this is
	called the Complete Trust mode, or a 2-way trust. Yet, for secure channel
	diagnosis, it is best to think of these as two separate secure channels, between
	each domain controller in the trusting domain and a domain controller in the
	trusted domain.
	
	Trust relationships are not transitive. For example, suppose Domain "X" trusts
	Domain "Y", which in turn trusts Domain "Z". This does NOT imply Domain "X"
	trusts Domain "Z". The reason for this is that the administrator in each domain
	must grant explicit permission on either side of the trust relationship for it
	to take place.
	
	Another form of trust relationship is sometimes referred to as an "implicit"
	trust. In a single domain model, or in an environment where there are no
	"explicit" trust relationships between any two domains, the "implicit" trust
	relationship is active and functionally needed. This implicit trust exists
	between all computers running Windows NT that are members of a domain and a
	domain controller in their domain. Explicit trust relationships are established
	through User Manager For Domains. Implicit trust relationships are established
	by becoming a member of a domain.
	
	Nltest.exe can be used to test the trust relationship between a computer running
	Windows NT that is a member of a domain and a domain controller where its
	machine account resides. NLTEST can also verify the trust between the BDCs in a
	domain and their PDC. In domains where an explicit trust has been defined,
	NLTEST can test the trust relationship between all domain controllers in the
	trusting domain and a domain controller in the trusted domain.
	
	These sessions of communication are called Secure Channels and are used to
	authenticate Windows NT machine accounts. They are also used to authenticate
	User Accounts when a remote user connects to a network resource and the user
	account exists in a trusted Domain. This is called Pass-Through Authentication,
	and it allows a computer running Windows NT that has joined a domain to have
	access to the User Account Database in its domain and in any Trusted Domains.
	
	Nltest.exe can use the Browser Service to enumerate domain controllers.
	Therefore, if browsing is not working correctly, Nltest.exe may produce
	inconsistent results. The computer where Nltest.exe is run and those providing
	the browsing services need to share the same protocols that are used by the
	domain controllers to carry out their domain activity. In addition, the
	enumeration of the specified computer and domain names depend on the status of
	name-resolution, such as WINS server replication, IPX router configuration, or
	NetBEUI bridging.
	
	All of these trust relationships, and domain synchronization, can be monitored,
	tested, and verified by Nltest.exe.
	
	Sample Output Obtained by Typing "NLTEST.EXE" Without the Quotes
	----------------------------------------------------------------
	
	C:\NTRESKIT>nltest
	Usage: nltest [/OPTIONS]
	
	  /SERVER:<ServerName> - Specify <ServerName>
	
	  /QUERY - Query <ServerName> netlogon service
	
	  /REPL - Force replication on <ServerName> BDC
	
	  /SYNC - Force SYNC on <ServerName> BDC
	
	  /PDC_REPL - Force UAS change message from <ServerName> PDC
	
	  /SC_QUERY:<DomainName> - Query secure channel for <Domain> on
	  <ServerName>
	
	  /SC_RESET:<DomainName> - Reset secure channel for <Domain> on
	  <ServerName>
	
	  /DCLIST:<DomainName> - Get list of DC's for <DomainName>
	
	  /DCNAME:<DomainName> - Get the PDC name for <DomainName>
	
	  /DCTRUST:<DomainName> - Get name of DC is used for trust of
	  <DomainName>
	
	  /WHOWILL:<Domain>* <User> [<Iteration>] - See if
	  <Domain> will log on <User>
	
	  /FINDUSER:<User> - See which trusted <Domain> will log on
	  <User>
	
	  /TRANSPORT_NOTIFY - Notify of netlogon of new transport
	
	  /RID:<HexRid> - RID to encrypt Password with
	
	  /USER:<UserName> - Query User info on <ServerName>
	
	  /TIME:<Hex LSL> <Hex MSL> - Convert NT GMT time to ASCII
	
	  /LOGON_QUERY - Query number of cumulative logon attempts
	
	  /TRUSTED_DOMAINS - Query names of domains trusted by workstation
	
	  /BDC_QUERY:<DomainName> - Query replication status of BDCs for
	  <DomainName>
	
	  /SIM_SYNC:<DomainName> <MachineName> - Simulate full sync
	  replication
	
	  /LIST_DELTAS:<FileName> - display the content of given change log file
	
	  /LIST_REDO:<FileName> - display the content of given redo log file
	
	Additional Comments and Descriptions of the Nltest.exe Switches
	---------------------------------------------------------------
	
	  /SERVER:<ServerName>: Remotes the Nltest.exe command to the specified
	  server. If this switch is not specified, the command is run from the local
	  computer.
	
	  /QUERY Queries the local or specified server for a healthy secure channel to a
	  domain controller, and the status of Directory Services replication with the
	  PDC. This is very helpful in determining the general status of the Netlogon
	  service.
	
	  /REPL Force partial synchronization of the local or specified BDC.
	
	  /SYNC Forces a full, immediate synchronization of the local or specified BDC.
	
	  /PDC_REPL The specified PDC forces a change message to all BDCs.
	
	  /SC_QUERY:<DomainName> Verifies the secure channel in the specified
	  domain for a local or remote workstation, server, or BDC. This can be run for
	  a PDC if an explicit trust relationship exists between two domains and the
	  trusted domain is specified.
	
	  /SC_RESET:<DomainName> Resets the secure channel between the local or
	  remote workstation, server, or BDC. This can be run for a PDC if an explicit
	  trust relationship exists between two domains and the trusted domain is
	  specified.
	
	  /DCLIST:<DomainName> Lists all the domain controllers, PDC, and BDCs in
	  a given domain.
	
	  /DCNAME:<DomainName> Lists the primary domain controller for a given
	  domain.
	
	  /DCTRUST:<DomainName> Queries and tests the secure channel every time
	  the command is executed. Specify the domain for the local or remote
	  workstation, server, or BDC. This can be run for a PDC if an explicit trust
	  relationship exists between two domains and the trusted domain is specified.
	
	  /WHOWILL:<Domain><User> Queries the domain and indicates which
	  Domain Controller has the account in their local user account database. This
	  is very useful in determining if a given domain controller contains the user
	  account. If the username specified is that of the currently logged on user,
	  the user's current password is NOT sent to the domain controller. This is
	  helpful in determining if duplicate accounts exist across several domains.
	
	  /FINDUSER:<User> Queries explicit trusted domains for the user
	  specified. This is very useful when determining what trusted domain
	  controller or what trusted domain out of several trusted domains will
	  authenticate a user's credentials when a Domain name is not specified in the
	  Server Message Block (SMB) packet. Many down-level clients, such as Windows
	  for Workgroups version 3.1 and the real-mode redirector in Windows 95, do not
	  specify a domain name.
	
	  /USER:<UserName> Displays many of the attributes for the specified user
	  account that are maintained in the user account database.
	
	  /LOGON_QUERY Specifies the number of attempted logon queries at the console,
	  or over the network.
	
	  /TRUSTED_DOMAINS Displays a list of explicit trusted domains.
	
	  /BDC_QUERY:<DomainName> List the backup domain controllers in the
	  specified Domain and provides the state of their synchronization.
	
	  /LIST_DELTAS:<FileName> List information from the Netlogon.chg file
	  specifying changes to the user account database.
	
	  /LIST_REDO:<FileName> List information from the Netlogon.chg file
	  specifying changes to the user account database.
	
	Example Output from Nltest.exe
	------------------------------
	
	As an example, suppose the TESTD domain trusts the ESS domain, and a computer
	running Windows NT Workstation called TEST3 is a member of the TESTD domain.
	
	NLTEST can be used to show this trust relationship.
	
	  C:\>nltest /trusted_domains
	  Trusted domain list:
	     ESS
	  The command completed successfully
	
	To determine the domain controllers in the TESTD domain:
	
	  C:\>nltest /dclist:testd
	  List of DCs in Domain testd
	     \\TEST2 (PDC)
	     \\TEST1
	  The command completed successfully
	
	To determine the domain controllers in the ESS domain:
	
	  C:\>nltest /dclist:ess
	  List of DCs in Domain ess
	     \\NET1 (PDC)
	  The command completed successfully
	
	Below are the secure channels between each domain controller in TESTD and a DC in
	the ESS domain.
	
	  C:\>nltest /server:test1 /sc_query:ess
	  Flags: 0
	  Connection Status = 0 0x0 NERR_Success
	  Trusted DC Name \\NET1
	  Trusted DC Connection Status Status = 0 0x0 NERR_Success
	  The command completed successfully
	
	  C:\>nltest /server:test2 /sc_query:ess
	  Flags: 0
	  Connection Status = 0 0x0 NERR_Success
	  Trusted DC Name \\NET1
	  Trusted DC Connection Status Status = 0 0x0 NERR_Success
	  The command completed successfully
	
	The workstation that is a member of the TESTD domain has an implicit trust with a
	domain controller.
	
	  C:\>nltest /server:test3 /sc_query:testd
	  Flags: 0
	  Connection Status = 0 0x0 NERR_Success
	  Trusted DC Name \\TEST2
	  Trusted DC Connection Status Status = 0 0x0 NERR_Success
	  The command completed successfully
	
	To determine if a domain controller can authenticate a user account:
	
	  C:\>nltest /whowill:ESS bob
	  [20:58:55] Mail message 0 sent successfully
	  (\MAILSLOT\NET\GETDC939)
	  [20:58:55] Response 0: S:\\NET1 D:ESS A:bob (Act found)
	  The command completed successfully
	
	  C:\>nltest /whowill:testd test
	  [21:26:13] Response 0: S:\\TEST2 D:TESTD A:test (Act found)
	  [21:26:15] Mail message 0 sent successfully
	  (\MAILSLOT\NET\GETDC295)
	  The command completed successfully
	
	NLTEST can be used to find a trusted domain that has a given user account.
	
	  C:\>nltest /finduser:sweppler
	  Domain Name: ESS
	  Trusted DC Name \\NET1
	  The command completed successfully
	
	To verify the status of BDC synchronization:
	
	  C:\>nltest /bdc_query:testd
	  Server : \\TEST1
	     SyncState : IN_SYNC
	     ConnectionState : Status = 0 0x0 NERR_Success
	  The command completed successfully
	
	Nltest.exe can also be used to synchronize the accounts database from a command
	line or a batch job.
	
	To run the utility to synchronize the domain from a PDC, type:
	
	" C:\ nltest /PDC_Repl " (without the quotation marks)
	
	To run the utility from a member server, backup domain controller, or Windows NT
	workstation, type
	
	" C:\ nltest /Server:<PDCName> /PDC_Repl " (without the quotation marks)
	
	where PDCName is the actual name of the PDC, not the name of the domain)
	
	You will see the successful synchronization events in Event Viewer on the primary
	domain controller, as well as the backup domain controllers.
	
	Additional query words: reskit secure channel
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
