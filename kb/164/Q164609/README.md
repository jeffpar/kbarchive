---
layout: page
title: "Q164609: HP JetAdmin 2.33 may cause ARP Storm on Network"
permalink: /kb/164/Q164609/
---

## Q164609: HP JetAdmin 2.33 may cause ARP Storm on Network

	Article: Q164609
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbnetwork kbusage
	Last Modified: 11-JUN-2002
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you diagnose network traffic using a network analyzer, a large series of
	address resolution protocols (ARPs) in sequential order may be detected. This
	problem can cause network access and traffic to and from all hosts to become
	temporarily disrupted. One of the possible causes of this behavior is the result
	of Hewlett Packard's JetAdmin JetDirect discovery tool, which is silently
	installed when a Hewlett Packard published driver is installed in Windows from a
	disk. One of Hewlett Packard's JetAdmin 2.33 methods to discover all JetDirect
	devices (printers) running TCP/IP requires that a ping be sent to every address
	in the subnet. Although this may provide a very thorough list of devices, it can
	also generate a huge amount of network traffic. Take, for example, a Class A
	network address. If JetAdmin were to run, approximately 7 million packets, in
	succession, will be transmitted upon startup of this utility.
	
	WORKAROUND
	==========
	
	There are two possible resolutions to this issue:
	
	- Download JetAdmin version 2.40 from Hewlett Packard's Web site. Hewlett
	  Packard's JetAdmin version 2.40 also provides discovery of printers through
	  broadcasts, as well as the ping method described above. Additionally, the
	  ping method has been modified in version 2.40 so that it will, by default,
	  not send pings to more than 2000 addresses without modifying the registry.
	
	
	  -or-
	
	- WARNING: If you use Registry Editor incorrectly, you may cause serious
	  problems that may require you to reinstall your operating system. Microsoft
	  cannot guarantee that you can solve problems that result from using Registry
	  Editor incorrectly. Use Registry Editor at your own risk.
	
	  Hewlett Packard's JetAdmin Tool version 2.33 is designed to work in the manner
	  described. On the majority of networks where Class C subnets are used, this
	  behavior will not be a problem because of the small number of broadcasts
	  generated. However, if you have a subnetted class B or class A network,
	  Microsoft recommends that you contact Hewlett Packard for further support. To
	  disable this feature, a change in the Registry must be made. To make this
	  change, perform the following steps:
	
	  1. Start the Registry Editor (Regedt32.exe for Windows NT and Regedit.exe for
	     Windows 95).
	
	  2. Change the following key located under:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Hewlett-Packard\HPJetAdmin\TCPIP
	
	     Change the Value for NoSubnetSearch to 1.
	
	  3. In addition, if you run the JetAdmin application, the following option can
	     be selected and disabled or enabled:
	
	  Options\Preferences\TCPIP Discovery\Broadcast
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	NOTE: JetDirect is no longer supported by HP. SDI (Simple Device Installation) is
	now used to install network printers. For more information on this, see:
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj05973
	
	  or
	
	  http://www.hp.com/cposupport/networking/support_doc/bpj06765.html
	
	HP recommends a new software admin package (TCP/IP / IPX/SPX based). For further
	information see:
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06723
	
	  or
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06724
	
	Additional query words: crash hang storm
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbnetwork kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : :3.51,4.0
	
	=============================================================================
	
