---
layout: page
title: "Q163129: RAS Client Fails to Connect to Service Pack 2 Using NetBEUI"
permalink: kb/163/Q163129/
---

## Q163129: RAS Client Fails to Connect to Service Pack 2 Using NetBEUI

	Article: Q163129
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP2 
	- Microsoft Windows NT Server version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Remote Access Service (RAS) client attempts to dial into a Windows NT 4.0
	Service Pack 2 RAS server and the RAS server has NetBEUI configured to access
	This Computer Only, the NetBEUI connection is never established.
	
	The RAS client receives an error 718 stating that the connection was not
	established. For example, a Windows 95 RAS client usually receives the following
	error message:
	
	  Dial up Networking could not negotiate a compatible set of protocols you
	  specified in the Server Type Settings. Check your network configuration in
	  the Control Panel then try the connection again.
	
	A Windows NT Server machine acting as a RAS client usually receives the following
	error message:
	
	  NetBEUI CP reported error 718. Timed out waiting for a valid response from
	  the PPP peer.
	
	CAUSE
	=====
	
	This problem is caused by a change in RAS in Windows NT Service Pack 2.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp2 kbWinNTSsearch kbWinNTS400sp2 kbWinNTS400search
	Issue type        : kbbug
	
	=============================================================================
	
