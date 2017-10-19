---
layout: page
title: "Q146111: Perfmon Lists &#92; On Instance List For Network Segment Counters"
permalink: /kb/146/Q146111/
---

## Q146111: Perfmon Lists &#92; On Instance List For Network Segment Counters

	Article: Q146111
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade to Windows NT 3.51 Service Pack 3 and add the Network Segment
	object for a domain controller in Performance Monitor (PERFMON.EXE), only a "\"
	(without quotes) appears on the Instance list for any counter. For example, a
	"\device\bh_EPRO1" (without quotes) should appear on the Instance list if you
	have the Network Monitor Agent and the Intel Etherexpress PRO network adapter
	driver installed.
	
	RESOLUTION
	==========
	
	To correct this problem, replace PERFMON.EXE with the one on the Windows NT 3.51
	compact disc. You must expand PERMON.EX_ to PERFMON.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Pack 3. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.51 sp3
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
