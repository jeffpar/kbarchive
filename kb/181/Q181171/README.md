---
layout: page
title: "Q181171: Secure Channel Manipulation with TCP/IP"
permalink: /kb/181/Q181171/
---

## Q181171: Secure Channel Manipulation with TCP/IP

	Article: Q181171
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	There are several processes on a Windows NT network that require workstations
	and servers to establish a secure channel with a domain controller. One of these
	processes is user validation. A common misconception is that this secure channel
	will be formed with the nearest domain controller. In reality, a computer
	running Windows NT Workstation or Server will establish a secure channel with
	the first domain controller to respond to a logon request. Because many factors
	contribute to the speed of the response -- including network speed, work load,
	name resolution methods, and WINS registration order -- it is quite possible for
	a secure channel to be established with a domain controller several network hops
	away. This is rarely desirable, and, therefore, it becomes necessary to attempt
	to control the formation of secure channels.
	
	This article will document five methods to control which domain controller a
	secure channel is setup to.
	
	RESOLUTION
	==========
	
	Method 1: M-Node Name Resolution
	--------------------------------
	
	Windows NT will always broadcast first to set up a secure channel; however, we
	will not always wait the full time out period for a response. By explicitly
	setting the Node type to Broadcast first (m-node), we will wait longer and give
	the local domain controller more time to response to our Secure Channel request.
	This method will only work if there is a domain controller on our local subnet.
	If there is not, we will still query WINS (if specified) for a list of domain
	controllers.
	
	H-node is the default node type of a Windows NT client if a WINS address is
	specified. Without a WINS address specified, modified b-node is the default.
	H-node uses the WINS server first and then will broadcast for name resolution.
	M-node will broadcast first on the local subnet.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Regedt32 and navigate to the following key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NetBT\Parameters\DhcpNodeType 
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Change it to 0x00000004 for mixed node or m-node.
	
	  The possible values are:
	
	  0x00000008 for hybrid node or h-node
	  0x00000004 for mixed node or m-node
	  0x00000002 for point-to-point WINS or p-node
	  0x00000001 for broadcast node or b-node
	
	-or-
	
	If the clients in question are using DHCP, use DHCP to change the node type of
	DHCP clients. However, this will change the node type on all computers serviced
	by that scope.
	
	
	After you change the node type, restart the computer for the changes to take
	effect.
	
	Method 2: LMHOSTS File
	----------------------
	
	When a computer running Windows NT sets up a secure channel, it will use the
	NetBIOS 1C entry for the domain that it needs to contact. For a computer running
	Windows NT Server or Workstation, this will be its own domain. For a domain
	controller, it will need to contact all trusted domains. To add a 1C for a
	preferred domain controller, verify that the TCP/IP Enable LMHOSTS Lookup
	property is selected. Edit or create the LMHOSTS file in the
	%SystemRoot%\system32\drivers\etc directory. Add an entry for the domain with
	which you want to control the secure channel. The entry should look like:
	
	     IP_ADDRESS_OF_DC  "DOMAIN         \0x1C" #PRE
	
	The domain name must be padded with sufficient characters to make it 15
	characters. There should be exactly 20 characters inside the quotes. To avoid
	problems that may arise from non-ASCII characters and hidden extensions, the use
	of Notepad.exe is discouraged. Edit.com is a true ASCII editor, and its use is
	strongly recommended. The LMHOSTS file needs to have several blank lines at the
	bottom.
	
	When you are done, use NBTSTAT -R (must be capitalized) and then NBTSTAT -c to
	verify that the entry is now in the NetBIOS cache.
	
	To:
	
	When used by itself, we will have to restart the computer to establish a new
	secure channel; however, an LMHOSTS file can be with the following methods to
	point the secure channel to a desired server.
	
	NOTE: If we preload the 1C entry, and cannot connect to that server then we may
	not be able to connect to any domain controller. This may result in 5719 errors
	and/or being logged on with cached credentials.
	
	Method 3: NLTEST
	----------------
	
	NLTEST (included with the Windows NT Server 4.0 Resource Kit) will allow us to
	determine who our secure channel is set up with and also to force it to
	reestablish the secure channel. To determine who your secure channel is set up
	with, type the following at a command prompt:
	
	" NLTEST /SC_QUERY:<DOMAIN_NAME_TO_CHECK> " (without the quotation marks)
	
	To reestablish a secure channel, use the parameter:
	
	" NLTEST /SC_RESET:<DOMAIN_NAME_TO_RESET> " (without the quotation marks)
	
	The first thing NLTEST does to reestablish a secure channel is query the network
	for the 1C list for the domain. By using NLTEST and an LMHOSTS file to pre-load
	a 1C entry for our preferred domain controller, we can control who we will
	resolve the 1C entry to. NLTEST can also be used if the network has been altered
	and the distant or slow domain controller would not be chosen again.
	
	You do not need to restart your computer when you use NLTEST.
	
	Method 4: SETPRFDC
	------------------
	
	Setprfdc.exe is included with Windows NT 4.0 Service Pack 4. SETPRFDC uses
	additions to the Netlogon.dll file to tell it who it should attempt to set up
	its secure channel with. Usage:
	
	  SETPRFDC <TrustedDomain> <ListOfDcsInTrustedDomain>
	
	SETPRFDC allows you to supply a list of domain controllers in the order you would
	like them tried.
	
	You do not need to restart your computer when you use SETPRFDC.
	
	You must manually copy Setprfdc.exe to the %windir%\System32 folder from the
	Service Pack 4 CD-ROM. If you downloaded Service Pack 4, you must extract the
	SP4 files with the "/x" switch and then manually copy Setprfdc.exe to the
	%windir%\System32 folder.
	
	NOTE: Setprfdc.exe is available only in the Service Pack 4 full download version,
	not in the Service Pack 4 standard download version.
	
	Method 5: NETDOM
	----------------
	
	NETDOM (included with the Windows NT Server 4.0 Resource Kit) allows us to
	control many domain or account functions from the command line. Only the ones
	concerning secure channels will be discussed here.
	
	Type the following to reset a workstation or member server:
	
	" NETDOM /Domain:mydomain MEMBER mycomputer /JOINDOMAIN " (without the quotation
	marks)
	
	Type the following to reset a backup domain controller:
	
	" NETDOM BDC mybdc /RESET " (without the quotation marks)
	
	Type the following to reset a trust relationship:
	
	" NETDOM /Domain:MyResourceDomain /User:MyResourceDomain\AUser
	/Password:apassword MASTER MyMasterDomain MyPassword /TRUST " (without the
	quotation marks)
	
	NETDOM will also query for the 1C list when reestablishing the new secure
	channel. If we preload our preferred domain controller in an LMHOSTS file, we
	can control the location of the secure channel.
	
	For more information on NETDOM, please see the Netdom.hlp file in the Resource
	Kit.
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	TCP/IP Node Types:
	
	  ARTICLE-ID: Q167640
	  TITLE : Automatically Changing the Node Type of a WinNT Wkst
	
	LMHOSTS Files:
	
	  ARTICLE-ID: Q101927
	  TITLE : The Lmhosts File for TCP/IP in Windows NT
	
	  ARTICLE-ID: Q105997
	  TITLE : Differences Between the HOSTS and LMHOSTS Files in Windows NT
	
	NLTEST:
	
	  ARTICLE-ID: Q156684
	  TITLE : How to Use NLTEST to Force a New Secure Channel
	
	  ARTICLE-ID: Q165202
	  TITLE : WinNT Client Logon in Resource and Master Domain Environment
	
	NETDOM:
	
	  ARTICLE-ID: Q175024
	  TITLE : Resetting Domain Member Secure Channel
	
	  ARTICLE-ID: Q150518
	  TITLE : NetLogon Service Fails when Secure Channel Not Functioning
	
	  ARTICLE-ID: Q175025
	  TITLE : How to Build and Reset a Trust Relationship from a Command Line
	
	
	Additional query words: validate validation authenticate authentication
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
