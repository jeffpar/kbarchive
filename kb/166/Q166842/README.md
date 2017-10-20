---
layout: page
title: "Q166842: CSNW &amp; GSNW Won't Display NetWare Servers via a SAP Seed Server"
permalink: /kb/166/Q166842/
---

## Q166842: CSNW &amp; GSNW Won't Display NetWare Servers via a SAP Seed Server

{% raw %}

	Article: Q166842
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A computer running Windows NT cannot list or attach to some Novell NetWare
	servers, although Windows 95-based clients operate successfully.
	
	CAUSE
	=====
	
	Client Services for NetWare (CSNW) and Gateway Services for NetWare (GSNW)
	attach to a default or preferred server. The client then queries that server for
	a list of other servers. Windows NT CSNW is only able to connect to servers that
	are included in its default or preferred server's service advertising process
	(SAP) table. If the segment that the default server is on is not routed or
	bridged to the other segments, the server is unaware of the servers on those
	segments. To see what servers the default server knows about, type DISPLAY
	SERVERS at the NetWare console.
	
	MORE INFORMATION
	================
	
	A network configuration may include intermediate devices such as a bridge that
	filters IPX SAP broadcasts or routers that are not configured to forward SAP
	broadcasts. One NetWare "seed" server can be located on each side of the router.
	SAP information is only forwarded to designated "seed" servers.
	
	When a Windows 95 client attaches to one of the "seed" servers, the SAP queries
	are performed against the bindery of the server being attached to in order to
	obtain the complete SAP table. The Windows 95 redirector performs this operation
	successfully through the Map command run from an MS- DOS prompt. This is not
	supported under Windows NT because CSNW uses the preferred server for all SAP
	queries.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q151236
	  TITLE : CSNW/GSNW Will Only Show Servers on One Network
	
	RESOLUTION
	==========
	
	Log off and log back on, selecting the desired preferred server.
	
	A command line option is now available to allow CSNW to obtain the SAP table from
	a "seed" server. This is only supported with the Net use command. Also, this
	capability is only available from the command line and is not supported through
	API or through any GUI applications such as the Explorer. The NetWare Map
	command does not support this CSNW capability.
	
	To provide support for this new option, first apply the updated Nwrdr.sys file
	mentioned below and then perform the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run the Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \System\CurrentControlSet\Services\NWRDR\parameters
	
	3. From the Edit menu, click Add Value.
	
	4. Add the following:
	
	     Value Name: AllowSeedServerRedirection
	     Data Type:  REG_DWORD
	     Data: 0x1 (Hex)
	
	5. Enable the AllowSeedServerRedirection on CSNW; Default is Disabled (0x0)
	
	Command Line Usage
	------------------
	
	The following command syntax can be used to access the seed server SAP table:
	
	  net use * \\server(bindery_server)\volume
	
	Where server = the name of a Netware file server containing Volume and
	bindery_server = the name of the NetWare seed server.
	
	Net use drivespec /d must be used to disconnect the connection.
	
	Note: This command line option is only intended to provide support through the
	net use command. All other NetWare API interoperability is not supported. The
	Map command should not be used to remove the connection. Support for this
	command option from GUI applications including Explorer is not included.
	
	For example:
	
	Map lists the seed server connection
	
	Drives A,B,C,D,E,F,G,.... map to a local disk.
	Drive T: = NetwareServer\PUB: \ 
	....
	Drive X: = NetwareServerName(SeedServerName)\SYS: \ 
	
	net use lists the "seed" server connection:
	
	Status       Local  Remote                    Network</H3>
	Disconnected F:     \\jsbach\public           Microsoft Windows Network
	            V:     \\bullet\pub              NetWare or Compatible Network
	            W:     \\bullet(nw41_essbp)\sys  NetWare or Compatible Network
	
	Whoami will return the following error upon completing.
	
	User ID:    UserName
	Server:     NetwareServerName   NetWare 4.10
	Connection: 3 (Bindery)
	Login time: Wednesday 3/05/97 9:47:30 am
	....
	
	  WHOAMI-4.1-230: An error occurred during WHOAMI's attempt to get the
	  connection status.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 2. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post additional information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
