---
layout: page
title: "Q246494: Browsing Fails on NT Network with WFW 3.11, Windows 95 Clients"
permalink: /kb/246/Q246494/
---

## Q246494: Browsing Fails on NT Network with WFW 3.11, Windows 95 Clients

	Article: Q246494
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:3.11; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to browse from Microsoft Windows for Workgroups 3.11-,
	Microsoft Windows NT 3.51-, Microsoft Windows NT 4.0-, or Microsoft Windows
	95-based clients on a Transmission Control Protocol/Internet Protocol (TCP/IP)
	network running through a Windows NT Server 4.0-based computer, you may be
	unable to see resources on different segments of the network.
	
	CAUSE
	=====
	
	This behavior can occur when the browse list for the network is incomplete
	because clients running Windows for Workgroups 3.11 or Windows 95 are winning
	browser elections on their network segments and then not sharing the browse
	lists with the primary domain controller (PDC). This prevents clients from
	browsing for resources on some network segments.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, disable maintenance of a browse list on the Windows 95 and
	Windows for Workgroups 3.11 computers. Follow these steps:
	
	1. On each of the network's Windows 95-based computers, disable the default
	  browse list maintenance by editing the MaintainServerList value in two
	  registry keys:
	
	  a. Start Registry Editor (Regedit) and locate the first registry key you need
	     to edit:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\VNETSUP
	
	  b. Change the MaintainServerList parameter to zero (0), and then click OK.
	
	  c. Locate the second registry key you need to edit:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\VNETSUP\Ndi\Params\MaintainServerList
	
	  d. Change the MaintainServerList parameter to zero (0), and then click OK.
	
	  e. Quit Registry Editor, and then restart the computer.
	
	2. On each of the network's Windows for Workgroups 3.11-based computers, disable
	  maintenance of a browse list by adding a line to the System.ini file:
	
	  a. Open the System.ini file in a text editor such as Notepad.
	
	  b. Add the following line to the [network] section of the System.ini file:
	
	  MaintainServerList=no
	
	  c. Save the changes to the System.ini file, and then restart the computer.
	
	3. On each of the network's Windows 95- and Windows for Workgroups 3.11-based
	  computers, add entries to the Lmhosts file to designate the PDC of the
	  domain.
	
	4. Make sure that the WINS Client (TCP/IP) protocol is listed at the top of the
	  binding for the Server and Workstation services on the network's Windows NT
	  4.0- and Windows NT 3.51-based computers, and that TCP/IP is installed as the
	  default protocol on the Windows 95- and Windows for Workgroups 3.11-based
	  computers.
	
	MORE INFORMATION
	================
	
	By default, when a Windows for Workgroups 3.11-based computer is the master
	browser of a network segment in a Windows NT-based domain, it does not share its
	browse list with the domain master browser (the PDC). However, Microsoft has
	updated files that enable this functionality. For additional information, please
	see the following article in the Microsoft Knowledge Base:
	
	
	  Q102878 Information on Browser Operation
	
	A networked computer running Windows 95 or Windows for Workgroups 3.11 needs
	entries in the Lmhosts file to indicate which computer is the PDC of the domain.
	These Lmhosts entries are not necessary on Windows NT-based computers, which use
	the NetGetDcName application programming interface (API) to identify the PDC.
	
	The Lmhosts file is located in the C:\Windows folder on computers running Windows
	for Workgroups 3.11 or Windows 95. If you want to browse for resources on remote
	Windows NT-based domains, you must add the \0x1b entry for the PDC of each
	remote domain to the Lmhosts file.
	
	For example, the PDC (master browser) of the domain named GOTHAM has the NetBIOS
	(network basic input/output system) name of BATMAN. BATMAN uses the IP address
	of 193.177.60.22. Add the following lines to the Lmhosts file:
	
	  193.177.60.22     BATMAN     #PRE     #DOM:GOTHAM
	  193.177.60.22     ''GOTHAM         \0x1b''     #PRE
	
	When you designate the domain master browser by specifying the sixteenth
	character of the NetBIOS domain name, it is absolutely imperative that the
	NetBIOS name of the domain occupy 15 characters before you specify the NetBIOS
	suffix. There must be a total of 20 characters between the quotation marks (15
	characters for the NetBIOS name, and 5 characters for the NetBIOS suffix). Use
	spaces after the NetBIOS name so that the length of the domain name plus the
	spaces is 15 characters.
	
	For additional information about using the Lmhosts file, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q180094 How to Write an LMHOSTS File for Domain Validation
	
	  Q163409 NetBIOS Suffixes (16th Character of the NetBIOS Name)
	
	Additional query words: nt 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW311
	Version           : WINDOWS:3.11; winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
