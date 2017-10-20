---
layout: page
title: "Q102974: TCP/IP Transport Entries, Part 2"
permalink: /kb/102/Q102974/
---

## Q102974: TCP/IP Transport Entries, Part 2

{% raw %}

	Article: Q102974
	Product(s): Microsoft Windows NT
	Version(s): 3.1,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The article contains REGISTRY entries for the TCP/IP Transport, Part 2. These
	subgroups are included:
	
	- FTP Server Service Entries for TCP/IP
	
	- NBT Parameters for TCP/IP
	
	- Streams Parameters for TCP/IP
	
	- Windows Sockets Entries for TCP/IP
	
	This is the second of two articles on these entries; for the other entries, see
	"TCP/IP Transport Entries, Part 1."
	
	TCP/IP TRANSPORT ENTRIES
	------------------------
	
	The various TCP/IP keys do not appear in the Registry unless TCP/IP is installed
	using the Network icon in Control Panel. With Registry Editor, you can modify
	the following parameters for the TCP/IP transport. This section does not include
	all the TCP/IP parameters that can be set using the Networks application in
	Control Panel.
	
	The startup parameters defined in this section are found in these subkeys of
	HKEY_LOCAL_MACHINE\SYSTEM\System\CurrentControlSet\Services:
	
	  TCPIP\Parameters Adapter_name#\Parameters\TCPIP, (where adapter_name#
	  indicates a Services subkey for a network adapter card)
	
	  Ftpsvc\Parameters NBT\Parameters Streams\Parameters
	
	Parameters for network bindings for this service are described in the article
	"NetRules Subkey Entries." See also IsDomainMasterBrowser in the article
	"Browser Service Entries."
	
	FTP SERVER SERVICE ENTRIES FOR TCP/IP
	-------------------------------------
	
	The following Registry path contains parameters that affect the behavior of the
	FTP server service component:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Ftpsvc\Parameters
	
	The Ftpsvc subkey does not appear until you install the FTP service using the
	Network icon in Control Panel. Also, you must restart the FTP server service
	(Ftpsvc) using the Services icon in Control Panel for any changes to these
	values to take effect.
	
	There can also be an AccessCheck subkey under Ftpsvc, which allows access to FTP
	for new users. If the AccessCheck subkey exists, but cannot be opened, the user
	is refused FTP services. If the subkey exists but can only be opened for read
	access, the user is granted read-only FTP access. If the subkey does not exist,
	it is not used to influence FTP access. By default, this subkey does not exist
	and therefore has no impact on FTP operations. An administrator can create this
	Registry subkey and attach specific access controls. which will serve to control
	user access to the FTP service.
	
	AllowAnonymous   REG_DWORD   0 or 1:
	
	Default: 1 (true - anonymous logins are allowed)
	
	Controls anonymous logins. Anonymous logins are only allowed if this value is
	non-zero (true).
	
	AnnotateDirectories   REG_DWORD   0 or 1:
	
	Default: 0 (false -do not send directory annotations)
	
	When this value is 1, every time a user changes directories (that is, sends the
	server a CWD command), an attempt is made to open a file named ~FTPSVC~.CKM in
	the new directory. If this file is found, its contents are sent to the user as
	part of the successful reply to the CWD command. This may be used to attach
	annotations to specific directories. This value is used as a default for new
	users. Users can toggle their own personal annotate directories flag with the
	site-specific CKM command (SITE CKM).
	
	AnonymousOnly   REG_DWORD   0 or 1:
	
	Default: 0 (false -non-anonymous logins are allowed)
	
	When this value is 1, only anonymous logins are allowed. Otherwise, non-
	anonymous logins are allowed as well.
	
	AnonymousUserName   REG_SZ   UserName:
	
	Default: "Guest"
	
	Contains the anonymous login alias. When a user attempts an anonymous login, the
	username specified ("anonymous") is mapped to this Registry value for
	authentication and impersonation. The password for this account is stored in an
	LSA secret object named FTPD_ANONYMOUS_DATA.
	
	ConnectionTimeout   REG_DWORD   Seconds:
	
	Default: 600 (10 minutes)
	
	Specifies the time to allow clients to remain idle before forcibly disconnecting
	them. This prevents idle clients from consuming server resources indefinitely.
	This value may be set to 0 if time-outs are not to be enforced. If set to 0,
	idle clients may remain connected indefinitely.
	
	DebugFlags   REG_DWORD   BitFields:
	
	Default: 0 (no debug output)
	
	Used only by the debugging (checked) builds of the FTP Server to control the
	output of various debugging information. This value is unused (and ignored) by
	retail builds.
	
	ExitMessage   REG_SZ   Message:
	
	Default: "Goodbye."
	
	Specifies a signoff message sent to an FTP client upon receipt of a QUIT
	command.
	
	GreetingMessage   REG_MULTI_SZ   Strings:
	
	Default: None (no special greeting message)
	
	Specifies the message (if this value exists in the Registry) to be sent to new
	clients after their account has been validated. In accordance with de facto
	Internet behaviour, if a client logs on as anonymous and specifies an identity
	starting with a '-' (minus), then this greeting message is not sent.
	
	HomeDirectory   REG_EXPAND_SZ   Path:
	
	Default: C:\
	
	Specifies the initial home directory for new clients. After a new client is
	validated, an attempt is made to change to this directory with the Chdir
	command. If this directory is inaccessible, the client is refused FTP services.
	If Chdir is successful, then an attempt is made to change to a directory with
	the same name as the client's username. If this fails, an attempt is made to
	change to a directory called DEFAULT. If this fails, the current directory is
	left at home. If a new client connects and finds the home directory is
	inaccessible, an event is written to the event log.
	
	LogAnonymous   REG_DWORD   0 or 1:
	
	Default: 0 (false -do not log successful anonymous logins)
	
	When this value is 1, all successful anonymous logins are logged to the system
	event log.
	
	LogNonAnonymous   REG_DWORD   0 or 1:
	
	Default: 0 (false, that is, do not log successful non-anonymous logins)
	
	When this value is 1, all successful non-anonymous logins are logged to the
	system event log.
	
	MaxClientsMessage   REG_SZ   Message:
	
	Default: "Maximum clients reached, service unavailable."
	
	Specifies the message (if this value exists in the Registry) to be sent to a
	client if the maximum number of clients has been reached or exceeded. This
	indicates that the server is currently servicing the maximum number of
	simultaneous clients and is refusing additional clients. See MaxConnections.
	
	MaxConnections   REG_DWORD   0 or 1:
	
	Default: 20
	
	Specifies the maximum number of simultaneous clients the server will service.
	This value may be set to 0 if there is to be no limit on simultaneous clients.
	
	MsdosDirOutput   REG_DWORD   0 or 1:
	
	Default: 1 (true-directory listings will look like MS-DOS)
	
	When this value is 1, the output of the LIST command (usually sent as a result of
	a DIR command from the client) will look like the output of the MS-DOS dir
	command. If this value is 0, the output of the LIST command looks like the
	output of the Unix ls command.
	
	This value also controls slash flipping in the path sent by the PWD command. When
	this value is 1 (true), the path contains backward slashes (\). If this value is
	0 (false), the path contains forward slashes (/). This value is used as a
	default for new users. Users can toggle their own personal MS-DOS directory
	output flag with the site-specific DIRSTYLE command (SITE DIRSTYLE).
	
	ReadAccessMask   REG_DWORD   BitFields:
	
	Default: 0 (all read access denied)
	
	This value is a bitmask and controls the read ability of the various disk volumes
	in the system. Drive A corresponds to bit 0, drive B corresponds to bit 1, drive
	C corresponds to bit 2, and so on. A user may only read from a specific volume
	if the corresponding bit is set.
	
	WriteAccessMask   REG_DWORD   BitFields:
	
	Default: 0 (all write access denied)
	
	This value is a bitmask and controls the write ability of the various disk
	volumes in the system. Drive A corresponds to bit 0, drive B corresponds to bit
	1, drive C corresponds to bit 2, and so on. A user may only write to a specific
	volume if the corresponding bit is set.
	
	NBT PARAMETERS FOR TCP/IP
	-------------------------
	
	NBT is the NetBIOS over TCP/IP service. Parameters for TCP/IP are also configured
	under NBT in the following Registry path:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NBT\Parameters
	
	MaxPreload   REG_DWORD   Number:
	
	Default: 100
	
	Specifies the maximum NBT number of entries for LMHOSTS that are preloaded into
	the NBT NetBIOS name cache. LMHOSTS is a file located in the directory specified
	by DatabasePath.
	
	NbProvider   REG_SZ   DLL name:
	
	Default: _tcp
	
	This value is only present for network services that provide a NetBIOS interface.
	Its presence causes LanMan information to be maintained for the transport. The
	value data represents the RPC provider string used to select the proper DLL for
	interfacing RPC to the transport.
	
	NbtKeepAlive   REG_DWORD   Number in seconds:
	
	Default: 0 (Do not generate NBT keep-alive traffic.)
	
	Specifies how often NBT will generate keep-alive traffic. When NBT determines
	that no activity has occurred on a connection for the specified time interval,
	it will generate keep-alive traffic to probe the connection. If TCP/IP is unable
	to deliver this traffic, it marks the connection as down and notifies NBT.
	
	PermanentName   REG_SZ   Unique name:
	
	Default: The value of IPAddress in dotted decimal
	
	Specifies the permanent name of the NetBIOS node for NBT. In many NetBIOS
	implementations, this is the MAC address. This name must be unique.
	
	STREAMS PARAMETERS FOR TCP/IP
	-----------------------------
	
	The TCP/IP parameter for Streams are found under the following Registry path:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Streams\Parameters
	
	MaxMemoryUsage   REG_DWORD   Number of bytes:
	
	Default: No limit
	
	Specifies the maximum amount of memory that can be allocated to the Streams
	environment. Once this limit is reached, Streams will fail allocation requests
	made by Streams-based drivers.
	
	WINDOWS SOCKETS ENTRIES FOR TCP/IP
	----------------------------------
	
	All Windows Sockets parameters can be set by choosing the Network icon in Control
	Panel. These parameters are found in two locations, as shown here.
	
	HKEY_LOCAL_MACHINE\SYSTEM\
	
	CurrentControlSet\Services\Winsock\Parameters:
	
	Transports   REG_Multi_SZ   Strings:
	
	Default: Depends on installation
	
	Contains the Regisry key names of installed transports that support Windows
	Sockets. If TCP/IP is the only installed transport that supports Windows
	Sockets, then this value is Tcpip. The Windows Sockets DLL uses the strings in
	Transports to find information about each transport.
	
	HKEY_LOCAL_MACHINE\SYSTEM\
	
	CurrentControlSet\Services\TCPIP\Parameters\Winsock:
	
	HelperDllName   REG_EXPAND_SZ   Path and filename:
	
	Default: Depends on the transport; %SystemRoot%\system32\wshtcpip.dll for
	TCP/IP.
	
	Specifies the name of the Windows Sockets helper DLL for the TCP/IP transport.
	This value is set by the Windows Sockets DLL and is not a user settable
	parameter.
	
	IRPStackSize   REG_DWORD   Number:
	
	Default: 4
	
	Specifies the number of IRP stack locations needed by AFD, the driver used for
	Windows Sockets. The default is sufficient for all existing transports, but new
	transports may be developed that need more IRP stack locations.
	
	Mapping   REG_BINARY:
	
	Default: Depends on transport
	
	Identifies the address families, socket types, and protocols supported by the
	transport. This value is set by the Windows Sockets DLL and is not a user
	settable parameter.
	
	MaxSockAddrLen   REG_DWORD   Octets:
	
	Specifies the maximum length of socket addresses for the INET sockets family.
	This value is set by the Windows Sockets DLL and is not a user settable
	parameter.
	
	MinSockAddrLen   REG_DWORD   Octets:
	
	Specifies the minimum length of socket addresses for the INET sockets family.
	This value is set by the Windows Sockets DLL and is not a user settable
	parameter.
	
	REFERENCES
	==========
	
	"The Windows NT Resource Kit for Operating System Version 3.1."
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
