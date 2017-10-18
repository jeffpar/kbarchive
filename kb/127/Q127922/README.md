---
layout: page
title: "Q127922: Setting BDC to be WINS Proxy Agent May Cause Broadcast Storms"
permalink: kb/127/Q127922/
---

## Q127922: Setting BDC to be WINS Proxy Agent May Cause Broadcast Storms

	Article: Q127922
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IP broadcast storms can occur when non-WINS clients attempt to log on if Enable
	WINS Proxy Agent is selected in the Advanced configuration dialog box on a
	Windows NT version 3.5 Backup Domain Controller (BDC). If multiple backup domain
	controllers (BDCs) are running WINS proxy agent, then the servers may crash with
	a STOP message 0xA. The stack trace might look like the following:
	
	kd> kb
	ChildEBP RetAddr  Args to Child
	fc8b9b74 801088d2 ffbb7828 c038401c e100743e
	T!_MiWaitForInPageComplete+0xf6
	fc8b9bc8 80106f3b 00000000 e100743e c038401c
	NT!_MiDispatchFault+0x144
	fc8b9c18 8013b8ef 00000000 e100743e 00000000
	NT!_MmAccessFault+0x221
	fc8b9c18 8014fccf 00000000 e100743e 00000000
	NT!_KiTrap0E+0xab
	
	CAUSE
	-----
	
	The WINS proxy code does not check to see if the datagram it receives is from
	another WINS proxy agent. This allows the same datagrams to be repeatedly
	forwarded.
	
	This problem occurs only if the BDC is a WINS proxy agent.
	
	WORKAROUND
	----------
	
	To work around this problem, configure another server to be the WINS proxy
	agent.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words: 3.50 internet naming service prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
