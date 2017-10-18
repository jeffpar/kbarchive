---
layout: page
title: "Q156931: STOP 0x0000001E in Nwrdr.sys"
permalink: kb/156/Q156931/
---

## Q156931: STOP 0x0000001E in Nwrdr.sys

	Article: Q156931
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive a STOP 0x0000001E in Nwrdr.sys.
	
	CAUSE
	=====
	
	This error can be caused by a failure in the NetWare locking API
	LogPhysicalRecord(), when issued in a VDM. Note that this API may also be called
	NWLogPhysicalRecord().
	
	RESOLUTION
	==========
	
	Developers of new applications can use the standard run-time library file
	locking routines instead of the NetWare-specific APIs to work around this
	problem.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version 4.0.
	This problem was corrected in the latest Microsoft Windows NT 4.0 U.S. service
	pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Windows NT 3.51
	---------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. To resolve this problem immediately, contact
	Microsoft Technical Support to obtain the fix. If you are not severely impacted
	by this specific problem, Microsoft recommends that you wait for the next
	Windows NT service pack that contains this fix.
	
	For a complete list of Microsoft Technical Support phone numbers and information
	on support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This fix should have the following file attributes:
	
	  Date     Time                  Size    File Name    Platform
	  ------------------------------------------------------------
	  09/26/96  06:34p               109,728 Nwrdr.sys    x86
	  09/24/96  06:58p               189,584 Nwrdr.sys    Alpha
	  09/24/96  06:44p               175,568 Nwrdr.sys    MIPS
	  09/24/96  06:53p               205,392 Nwrdr.sys    PPC
	
	
	Additional query words: 3.51 4.00 servpack
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
