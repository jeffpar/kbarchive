---
layout: page
title: "Q128168: Configuring Windows 3.x Clients to use TCP/IP with SNA Server"
permalink: /kb/128/Q128168/
---

## Q128168: Configuring Windows 3.x Clients to use TCP/IP with SNA Server

{% raw %}

	Article: Q128168
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1,3.0,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbsetup kbusage kbsna211sp1 sna4
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To configure Windows 3.x clients to use TCP/IP when communicating with SNA
	Servers running Microsoft TCP/IP, either run setup and choose TCP/IP or manually
	change the WIN.INI file.
	
	MORE INFORMATION
	================
	
	To manually change the WIN.INI file so Windows 3.x clients use TCP/IP when
	communicating with SNA Servers running Microsoft TCP/IP:
	
	1. Set LocalFlag= ( REMOTE | LOCAL ).
	
	  Use remote if the domain or workgroup name of the SNA Server is different from
	  the one used in the WORKGROUP= entry or if there are routers between the
	  client and the SNA Server. Use Local if the WORKGROUP= name is the same as
	  the SNA Server. This LocalFlag entry is only used by setup to determine which
	  option was selected.
	
	2. Set Remote = ( domainname | \\servername | \\ipaddress ), where:
	
	  domainname = The Windows NT domain name where SNA Server resides
	  \\servername = The Windows NT computername of an SNA Server in the
	  domain
	  \\ipaddress = The Windows NT IP address of SNA Server (for example,
	  \\11.22.33.44)
	
	3. Change NosType= ( TCPIP | NOVELL | LANMAN ) to NosType=TCPIP.
	
	4. Change NosSetup= ( TCPIP | NOVELL | WFW ) to NosSetup=TCPIP.
	
	5. Add LogonUserName= and LogonDomainName=. These entries are used to specify
	  the default username and logon domain for the workstation. These options are
	  also used by the NetWare and Vines interfaces.
	
	After you configure Windows 3.x clients to use TCP/IP when communicating with SNA
	Servers running Microsoft TCP/IP, you can use two additional command line
	switches (/user: and /pwd:) with WNAP.EXE.
	
	NOTE: If you don't want to have to provide user and password information when you
	use the above command, add the preftrans= entry to the [network] section of
	Windows for Workgroups client's SYSTEM.INI file.
	
	Please refer to Article Q130854 (Automating the SNA Server Win3x Client Login
	Process) for details on how to automate the client login process when TCP/IP,
	IPX/SPX, or Banyan Vines is used.
	
	Additional query words: prodsna domain computer server name local flag nos setup type logon user log on
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbsetup kbusage kbsna211sp1 sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.1,2.11,2.11 SP1,3.0,4.0
	
	=============================================================================
	

{% endraw %}
