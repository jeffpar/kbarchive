---
layout: page
title: "Q224460: Err Msg: Error Connecting to &lt;Servername&gt; The RPC Service..."
permalink: /kb/224/Q224460/
---

## Q224460: Err Msg: Error Connecting to &lt;Servername&gt; The RPC Service...

	Article: Q224460
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to remotely administer a multihomed IIS 4.0 computer from the
	Microsoft Management Console (MMC) on a local computer, the following error
	messages may occur:
	
	  Error connecting to <servername> The RPC service is not available
	
	When you click OK, you may see a few additional errors similar to the following:
	
	  Unable to administer IIS "unable to connect to target machine"
	
	CAUSE
	=====
	
	This problem only occurs when you are trying to remotely administer a multihomed
	IIS 4.0 computer from the MMC on a local computer. The MMC uses the default DCOM
	protocol for remote communications. By default, DCOM uses the ncadg_ip_udp DCOM
	protocol for connections instead of ncacn_ip_tcp. Due to a problem with the
	ncadg_ip_udp DCOM protocol in Windows NT Service Pack 3, if the destination IIS
	computer is multihomed, ncadg_ip_udp causes the binding IP address to become
	corrupted.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT version
	4.0. For additional information, please see the following article(s) in the
	Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	If you have not yet implemented Windows NT Service Pack 4 in your environment,
	you can edit the registry to change the DCOM protocols that are used.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	Follow these steps exactly on the multihomed remote Web server:
	
	1. Back up the following registry key using Regedt32.exe (not Regedit.exe):
	
	  HKEY_Local_Machine\Software\Microsoft\RPC
	
	  To do this, highlight the RPC key and choose Registry, and the choose Save
	  Key.
	
	2. In the RPC key, edit the DCOM Protocols setting by double-clicking on it.
	  Change the values to reflect a different order by removing the ncadg_ip_udp
	  protocol and moving ncacn_ip_tcp to the top of the list. Here is what it will
	  look like before and after the change:
	
	  Before
	
	  ncadg_ip_udp
	  ncadg_ipx
	  ncacn_ip_tcp
	  ncacn_spx
	  ncacn_nb_nb
	  ncacn_nb_ipx
	
	  Remove ncadg_ip_udp and move ncacn_ip_tcp to the top of the list.
	
	  After
	
	  ncacn_ip_tcp
	  ncadg_ipx
	  ncacn_spx
	  ncacn_nb_nb
	  ncacn_nb_ipx
	
	3. After the changes are made, close Registry Editor and restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	For additional information about network connection delays, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q288886 PRB: Delayed DCOM Activation on Multihomed Computers
	
	Below is an example of how the binding fails.
	
	Note: Binding Vector[4] has the incorrect IP addresses in the binding handle. In
	this example, it combines both IP addresses from both NICs, thus corrupting the
	IP address format, and the connection fails.
	
	Display STRING representation for each binding handle in Binding Vector
	
	  Binding Handle Count: 7
	  Binding Vector[0]: ncacn_np:\\\\ServerName[\\pipe\\000000B4.001]
	  Binding Vector[1]: ncalrpc:ServerName[WMSG000000B4.00000001]
	  Binding Vector[2]: ncacn_ip_tcp:157.61.239.61[1038]
	  Binding Vector[3]: ncacn_ip_tcp:157.61.239.5[1038]
	  Binding Vector[4]: ncadg_ip_udp:157.61.239.61157.61.239.5[1039]
	  Binding Vector[5]: ncadg_ip_udp:157.61.239.5[1039]
	  Binding Vector[6]: ncacn_nb_tcp:ServerName[106]
	
	If you use network sniffers, such as Network Monitor, you can see the incorrect
	IP addresses as in the above example for Binding Vector[4].
	
	Additional query words: mmc, ntop, iis, dcom, rpc, multi-homed, multi, homed sp hot fix qfe
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
