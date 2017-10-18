---
layout: page
title: "Q138472: Failure Connecting to Network Monitor Agent Across RAS Gateway"
permalink: kb/138/Q138472/
---

## Q138472: Failure Connecting to Network Monitor Agent Across RAS Gateway

	Article: Q138472
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2,3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your Remote Access Service (RAS) client is using the NetBEUI protocol to dial
	in to a remote network, and you attempt to use Microsoft Network Monitor to
	connect to a computer on the remote network running the Network Monitor Agent
	software, the following error message appears:
	
	  Failure connecting to <agent_computer_name>
	
	RAS Clients using TCPIP or IPX may not run into this problem.
	
	For additional information on connecting to an agent over a router, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q124837 Connecting to a Remote Network Monitor Agent Across a Router
	
	CAUSE
	=====
	
	The computer name of the computer running the Network Monitor Agent cannot be
	resolved.
	
	Network Monitor registers two kinds of Names. The Agent registers the
	<computer_name><BE>..<BE> (total of 16 bytes) as a unique
	name. The Manager registers <computer_name><BF>..<BF> (total
	of 16 bytes) as a group name.
	
	Group name is used because multiple instances of Network Monitor can be used on
	the same system. However, by default, Name Query from a Group Name is not
	forwarded by the RAS gateway.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, modify the Registry on the RAS server:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	 \SYSTEM\CurrentControlSet\Services\NetbiosInformation\Parameters
	
	3. A number of values with EnumExport#:REG_DWORD:0 are listed. Change all
	  EnumExport#: from 0 to 1
	
	4. Shutdown and restart the server for the changes to take effect.
	
	MORE INFORMATION
	================
	
	Network Monitor has the ability to capture traffic on a remote network by
	connecting via RAS to a system that is running the Network Monitor Agent
	software on the remote network. The Network Monitor Agent software is shipped
	with Windows NT Workstation and Windows NT Server versions 3.5 and 3.51.
	
	To use Network Monitor to connect to the computer running the Network Monitor
	Agent Software, choose Networks from the Capture menu and select the "remote"
	option. Enter the computer name (with or without "\\") to connect to the remote
	computer.
	
	Additional query words: sms prodsms Netmon BH
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTSsearch kbSMSSearch kbContentX kbPocketIE110 kbSDKDAO351 kbMailPCN350 kbMPTMathopolis
	Version           : winnt:1.0,1.1,1.2,3.5,3.51
	
	=============================================================================
	
