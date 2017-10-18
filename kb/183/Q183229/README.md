---
layout: page
title: "Q183229: RAS Uses Fixed TCP/IP MTU Size"
permalink: kb/183/Q183229/
---

## Q183229: RAS Uses Fixed TCP/IP MTU Size

	Article: Q183229
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): _IK12469
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you run a program over a Remote Access Service (RAS) connection, you may
	encounter one of the following symptoms:
	
	- You are able to download data normally but you are not always able to upload
	  data successfully.
	
	- Your Internet mail or news reading programs may time out or stop responding
	  (hang) when you attempt to send new messages.
	
	CAUSE
	=====
	
	This behavior can occur because Windows NT RAS uses a fixed size Maximum
	Transmission Unit (MTU) of 1500.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, obtain the latest service pack for Windows NT version
	4.0. For additional information, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: Your computer must run Windows NT 4.0 Service Pack 3 before you apply this
	fix. This hotfix can also be applied to the Routing and Remote Access Service
	Upgrade.
	
	This hotfix also includes the fix referred to in the following article in the
	Microsoft Knowledge Base:
	
	  Q163251 STOP 0xA Due to Buffer Overflow in Ndiswan.sys
	
	There are two new registry keys to address this issue, one that allows you to
	edit the MTU for a RAS connection and another that allows you to edit the MTU
	for a Point-to-Point Tunneling Protocol (PPTP) connection. To edit the
	registry:
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe) and locate the following
	  registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NdisWan\Parameters
	
	2. Create the following two new data values using the following information:
	
	  Value name: IPMTU
	  Data type : REG_DWORD
	  Data range: 1 - 1500 (default is 1500)
	
	  Value name: TunnelMTU
	  Data type : REG_DWORD
	  Data range: 1 - 1500 (default is 1400)
	
	  NOTE: Setting these values to the smallest MTU of your data path will prevent
	  fragmentation.
	
	3. Restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	Using the EnablePMTUDiscovery and/or EnablePMTUBHDetect registry values will
	have no effect because the TCP/IP MTU for a RAS connection is a fixed value.
	
	For additional information on TCP/IP, please see the following white paper
	available on the Microsoft ftp server:
	
	  File Name: Tcpipimp2.doc
	  Location: ftp://ftp.microsoft.com/bussys/winnt/winnt-docs/papers/
	  Title: "Microsoft Windows NT 3.5/3.51/4.0: TCP/IP Implementation Details
	  TCP/IP Protocol Stack and Services, Version 2.0"
	
	
	Additional query words: rras steelhead
	
	======================================================================
	Keywords          : _IK12469 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
