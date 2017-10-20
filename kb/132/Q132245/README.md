---
layout: page
title: "Q132245: SNA Server Version 2.11 - New Features"
permalink: /kb/132/Q132245/
---

## Q132245: SNA Server Version 2.11 - New Features

{% raw %}

	Article: Q132245
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the major new features of SNA Server 2.11, as included in
	the SNA Server 2.11 Enhancements Guide, along with some updated technical
	information on some of the features.
	
	NOTE: The information contained in this article applies to an outdated version of
	SNA Server. For the latest information on Microsoft SNA Server and Product
	Companion Catalog, go to the following location:
	
	  http://www.microsoft.com/sna
	
	MORE INFORMATION
	================
	
	PowerPC Platform Support
	------------------------
	
	To run on a PowerPC, Windows NT 3.51 is required. However, SNA Server 2.11 is
	also supported on Windows NT 3.5.
	
	SNA Server 2.11 adds support for the PowerPC architecture. This allows you to run
	SNA Server on new computers based on the PowerPC processors from IBM, Motorola
	and others. Combined with the current support for Intel, MIPS- and Alpha-based
	systems, SNA Server now supports the widest variety and the most scalable set of
	hardware platforms of all the SNA gateways on the market today.
	
	Support for TN3270 Clients
	--------------------------
	
	SNA Server 2.11 includes a TN3270 Service which runs on the same computer as SNA
	Server and allows any client running a TN3270 emulator, such as a UNIX-based
	workstation, to connect to the IBM mainframe through SNA Server. This feature
	allows customers to use TN3270 emulators on their desktops, yet keep the hosts
	running the native and optimized SNA protocols, saving the cost and the
	performance penalty of installing and running TCP/IP on the mainframe.
	
	The TN3270 Service supports 10,000 sessions (up to 2000 users running multiple
	sessions), making this the highest capacity TN3270 gateway on the market. The
	TN3270 Service allows TN3270 clients to connect to a host through any of the
	connections supported by SNA Server. It communicates with TN3270 clients via
	TCP/IP sessions running the TN3270 option of the Telnet protocol and does not
	require installation of an SNA Server client on the user's workstation. The
	TN3270 Service gives administrators more control over resources by allowing
	specific IP addresses to be assigned to LUs. The TN3270 Service supports any
	third-party TN3270 emulator that uses the DO TERMTYPE option of Telnet, for any
	client operating system.
	
	ODBC/DRDA Drivers
	-----------------
	
	SNA Server 2.11 includes Open Database Connectivity/Distributed Relational
	Database Architecture (ODBC/DRDA) drivers for Windows operating system- and
	Windows NT-based clients, enabling standard desktop applications that support
	database connectivity via ODBC, such as Microsoft Excel and Microsoft Access, to
	access IBM host databases without an expensive host- based database gateway.
	These drivers support connectivity to the following IBM host databases: DB2 for
	MVS, SQL/DS for VM, and DB2/400 for OS/400. A single-user ODBC/DRDA license is
	included with SNA Server 2.11. See the enclosed license card for instructions on
	obtaining additional licensing.
	
	SNA Remote Access Service
	-------------------------
	
	Prior versions of SNA Server already support the full SNA client functionality
	for remote clients dialing into the LAN using the Remote Access Service (RAS) of
	Windows NT Server. SNA Server version 2.11 adds a feature that allows
	administrators to create virtual LAN connections between Windows NT systems
	across an existing SNA network. This is achieved by integrating SNA Server's
	LU6.2 transport with the RAS architecture, allowing the use of familiar RAS
	tools to initiate remote network connections across the SNA network and to
	benefit from the data compression, administration, and security features built
	into RAS. Customers with large SNA wide-area backbones now can access remote
	LANs and servers without setting up redundant LAN-to-LAN networks or having to
	install a dial-up modem in each remote branch office. This feature is
	particularly useful for network administrators who need to manage remote branch
	offices connected to the corporation's mainframe or AS/400 only through
	low-speed synchronous data-link control (SDLC) lines.
	
	The SNA Server Remote Access Service is supported on top of Windows NT 3.5 or
	3.51 client machines. This feature is not available from Windows 3.x or WFW
	clients.
	
	Support for IBM's New Client Access/400 Product
	-----------------------------------------------
	
	SNA Server 2.11 adds support for IBM's new CA/400 product, which is a
	Windows-based front-end package to access AS/400 applications and data. The
	Windows-based client component of SNA Server 2.11 is enhanced to be compatible
	with the CA/400 router, allowing users to replace the CA/400 router and connect
	to the AS/400 via an SNA Server. Users benefit from using an IBM-endorsed client
	package to access the new OS/400 V3R1 operating system for the AS/400, while
	getting the benefits of the leading SNA gateway to offload communications
	processing from the AS/400, saving CPU and memory resources on the host. When
	using Windows for Workgroups or the upcoming Windows 95 operating system, SNA
	Server allows the Windows- based desktops to run protected-mode LAN protocols
	only, saving precious MS- DOS operating system-based memory and making the
	overall Windows environment more stable. Network administrators will benefit
	from the reduced administration requirements for both the AS/400 and the
	Windows- based desktops.
	
	EHNAPPC API Support
	-------------------
	
	SNA Server 2.11 adds support for the EHNAPPC application programming interface
	(API) which is the Windows-based APPC API supported by IBM's PC Support and
	Client Access/400 (CA/400) products. IBM has presented EHNAPPC API to its
	independent software vendor (ISV) community as the way to write Windows-based
	applications that integrate with the AS/400. There are estimated to be more than
	60 applications that utilize this API as a way to connect to the AS/400 data and
	applications. These ISV applications will work unchanged with SNA Server 2.11.
	
	Support for 16-bit SNA Applications on Windows NT
	-------------------------------------------------
	
	A set of new Dynamic-Link Libraries (DLLs) included with SNA Server version 2.11
	maps the 16-bit SNA API to native 32-bit SNA APIs, allowing users to run all the
	16-bit Windows-based applications that work with SNA Server in the 32-bit
	Windows NT environment. This feature brings the Windows NT-based clients to
	parity with Windows-based clients for running SNA applications.
	
	The 16-bit SNA API's which are now supported on Windows NT running the 32-bit SNA
	Server client software include APPC, CPIC, LUA and Common Service Verbs. The
	16-bit Emulator Interface Specification (EIS) API, used by 16-bit 3270
	applications, is not supported on top of the 32-bit SNA Server client software.
	
	Drivers for IBM and Andrew Twinaxial Adapters
	---------------------------------------------
	
	New drivers included with SNA Server 2.11 allow SNA Servers to be connected to
	AS/400s using twinaxial cabling, the native way to connect to an AS/400. These
	drivers, developed for Microsoft by Andrew Corp., provide a cost- effective
	option to connect the PC LANs to the AS/400s for the estimated 70 percent of the
	300,000 AS/400s installed worldwide that do not yet have LAN adapters. Instead
	of spending as much as $3,200 for a token ring adapter for the AS/400, a $350
	twinaxial adapter can be installed on the SNA Server computer, providing up to
	512 host sessions for the LAN clients attached to the SNA Server.
	
	The Andrew Twinax link service supports the Andrew 3xTwin Adapter, and is
	available for the Intel platform. The IBM Twinax link service supports the IBM
	5250 Enhanced Adapter, or compatible, and is available for the Intel platform.
	(There are register-compatible cards from independent hardware vendors, such as
	DCI.)
	
	For a full list of and contact information for third-party vendors providing
	adapters, see the SNA Server Companion Product Catalog, ISVCATAL.DOC, in the
	\COLLATRL\GENERAL directory on the SNA Server CD-ROM. Updates to this catalog
	are distributed on the Microsoft TechNet CD-ROM and posted on the MSSNA
	Compuserve Forum, the latest third party companion guide can be found on Lib #1,
	called ISVCAT.EXE, which self-extracts to a Word for Windows document.
	
	Drivers for Barr Systems and Bus-Tech Channel Adapters
	------------------------------------------------------
	
	SNA Server 2.11 includes drivers for Barr Systems and Bus-Tech channel adapters,
	which allow the SNA Server to be directly connected to an IBM mainframe channel.
	The direct channel attachment can provide a significant improvement in
	performance compared to other ways of attaching SNA Servers to the host. An SNA
	Server running on a multiprocessor Pentium* or RISC system with two LAN and two
	channel adapters installed can challenge the overall performance and capacity of
	some of the fastest IBM controllers and front-end processors. The Barr channel
	link service supports the Barr S/370 Channel adapter, available for the Intel,
	MIPS, and Alpha AXP platforms. The Bus-Tech channel link service supports the
	BTI Channel adapter, available for the Intel platform.
	
	Additional SDLC Driver Support
	------------------------------
	
	Link services have been added for Attachmate SDLC and Attachmate Advanced SDLC
	cards for the Intel platform, and for a Barr SDLC card for the MIPS and Alpha
	AXP platforms.
	
	AFTP Client and Server utilities
	--------------------------------
	
	SNA Server version 2.11 includes a set of utilities that enable high-speed file
	transfer between Windows NT-based systems and IBM hosts. APPC File Transfer
	Protocol (AFTP) is an IBM-developed protocol that duplicates for the SNA
	environment the function of the popular FTP utility in the TCP/IP environment.
	IBM now is offering the host component of AFTP at a nominal cost for most of the
	host operating systems. AFTP allows customers to perform multi-megabyte file
	transfers between the host and the Windows NT- based system quickly using native
	SNA protocols, eliminating the need to install the expensive and CPU-intensive
	TCP/IP stack for the host in order to perform FTP file transfers. The AFTP
	feature is based on IBM source code that Microsoft recently licensed as part of
	the APPC Application Suite from IBM.
	
	The AFTP Client and Server programs will be installed automatically during setup
	of an SNA Server version 2.11 client or server on a computer running Windows NT
	version 3.5x. SNA Server AFTP Client will work on a Windows NT client or server
	as a command-line utility, which can be used to create batch jobs. SNA Server
	AFTP Server is a Windows NT service that will allow AFTP clients to initiate
	file transfer (for example, from a host computer). AFTP provides generic
	filename mapping support for consistency between different operating systems'
	file systems.
	
	For information on AFTP availability for other IBM platforms including host
	systems and the AS/400, contact IBM directly, and/or contact IBM through IBM's
	APPC compuserve forum (or "GO APPC" on Compuserve).
	
	Demo Host Facility
	------------------
	
	This new software feature, included with SNA Server 2.11, allows resellers,
	trainers, consultants, and customers to evaluate and demonstrate nearly all SNA
	Server features and capabilities without a live host connection or any special
	hardware. Previously, resellers had to purchase expensive access time from host
	service providers in order to train their own personnel on the features of a
	given SNA gateway product, or had to purchase a separate hardware-based host
	simulator at a significant cost. The demo host facility included with SNA Server
	can act both as a mainframe host and an AS/400 host and exercises the core
	functionality of SNA Server, including 3270 and 5250 sessions with multiple host
	connections, in an identical fashion to the live host environment.
	
	For detailed information, see the "DEMO SDLC Link Service" section later in this
	guide.
	
	SNA Monitor
	-----------
	
	This new monitor, which is similar to the monitor in Remote Access Service, can
	be used to monitor the status of an SDLC connection. The SNA Server 2.11 Setup
	program will create an icon for this utility in the Microsoft SNA Server program
	group. From the SNA Monitor Setting menu, you can specify options such as sound,
	update interval, and which link service to monitor.
	
	Default APPC LUs
	----------------
	
	SNA Server 2.11 will create default Local and Remote APPC LUs. During Setup of an
	SNA Server 2.11, a Local APPC LU will be created on the server node with
	suggested default values. When you configure a new link service, if the
	connection is configured as a peer connection, and if a remote APPC LU is not
	detected, the New APPC Remote LU Properties dialog box will appear with
	suggested default values when the OK button is chosen. Remember to change the
	default values if they do not match your needs.
	
	Planning Guide
	--------------
	
	A new document, called the SNA Server Planning Guide, is provided at no charge
	with SNA Server version 2.11. This document contains information to help
	resellers and users implement SNA Server in existing networks such as NetWare,
	Banyan and TCP/IP environments. Among the topics covered are server sizing
	recommendations for CPU types, and memory for various usage patterns,
	preinstallation guidelines, enterprise rollout information, and maintenance and
	troubleshooting tips collected from current users of SNA Server.
	
	Concurrent Licensing Option
	---------------------------
	
	Customers will continue to be able to license SNA Server on a per-client and
	per-server basis, which allows any client to access any SNA Server on the
	network. This is the most affordable licensing option when deploying multiple
	SNA Servers for extra capacity, load balancing and hot backup, because each
	extra server only costs approximately $409. SNA Server 2.11 adds the option to
	license SNA Server for concurrent use, which the user can choose at the time of
	installation. With this option, customers are required to purchase only as many
	client licenses as there are simultaneous users accessing a given SNA Server.
	This option is suitable for single- server installations or when only infrequent
	access to the host resources is required. Licensing is a Windows NT Server-only
	application located in Control Panel. Licensing allows you to manage licensing
	for Microsoft server products installed on your networks.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
