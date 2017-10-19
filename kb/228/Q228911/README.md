---
layout: page
title: "Q228911: Err Msg: STOP 0x00000035 When Using TDITrace from Resource Kit"
permalink: /kb/228/Q228911/
---

## Q228911: Err Msg: STOP 0x00000035 When Using TDITrace from Resource Kit

	Article: Q228911
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Network tool in Control Panel to install the TDITrace protocol
	from the Windows NT 4.0 resource kit, your computer may display the following
	error message:
	
	  STOP 0x00000035 (0xff787dc8, 0x00000000, 0x00000000, 0x00000000)
	
	The first parameter may vary.
	
	CAUSE
	=====
	
	This behavior occurs because of an old Oemsetup.inf file that was placed in the
	Common\Netdiag\Tditrace subfolder of the initial Windows NT 4.0 Resource Kit CD.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove and reinstall the TDITrace protocol using the
	updated Oemsetup.inf file from the latest Windows NT resource kit.
	
	NOTE: This driver can be installed in both Windows NT 3.51 and Windows NT 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the TDITrace protocol.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Component         : ResourceKit
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
