---
layout: page
title: "Q119644: Copying Files from Windows NT Using NBF Can Be Very Slow"
permalink: kb/119/Q119644/
---

## Q119644: Copying Files from Windows NT Using NBF Can Be Very Slow

	Article: Q119644
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a Windows NT computer from a computer with a very slow
	network card (for example, the 3Com 3c501 EtherLink card) installed, copying
	files to the workstation from the server can be extremely slow when using
	NetBEUI as the protocol.
	
	
	CAUSE
	=====
	
	The 3Com 3c501 card can only cope with a send window size of one. Windows NT
	dynamically adapts the send window size for a session to cope with the
	performance of different network cards and differing network conditions, however
	it does not set it to a value less than two. This means that the server always
	sends at least two data packets before expecting an acknowledgment from the
	workstation. Because the network card in the workstation can only cope with one
	packet at a time, the second packet is lost and the workstation only
	acknowledges receipt of the first packet. The server then has to resend the
	second packet.
	
	RESOLUTION
	==========
	
	A new Registry parameter called MinimumSendWindowLimit has been added for the
	Windows NT NBF (NetBEUI) protocol to allow the configuration of the minimum send
	window size that NBF will use. The default value is 2. To fix the above problem,
	this parameter needs to be changed to 1.
	
	Use the Registration Information Editor (REGEDT32.EXE) to add this entry, as
	follows:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start REGEDT32.EXE and locate the following Registry subkey:
	
	  HKEY_LOCAL_MACHINE\CurrentControlSet\Services\NBF\Parameters
	
	2. From the Edit menu, choose Add Value. Enter MinimumSendWindowLimit in the
	  Value Name field. Select REG_DWORD for the Data Type. Enter 1 in the data
	  field. Save your changes.
	
	3. Quit REGEDT32.
	
	4. Quit Windows NT and restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	The 3Com product discussed here is manufactured by 3Com Corp., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
