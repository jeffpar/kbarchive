---
layout: page
title: "Q165816: STOP 0x0000000A in HAL.DLL on Multiprocessor Computers"
permalink: /kb/165/Q165816/
---

## Q165816: STOP 0x0000000A in HAL.DLL on Multiprocessor Computers

{% raw %}

	Article: Q165816
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Windows NT on a multiprocessor computer under heavy stress, you may
	receive the following STOP message:
	
	  STOP 0x0000000A (0x00000000, 0x00000002, 0x00000000, 0x80150810)
	
	The exact address where the STOP occurs may vary, but it is always in the
	hardware abstraction layer (HAL.)
	
	CAUSE
	=====
	
	This STOP message is caused by a timing problem in the kernel that occurs when
	two processes are executing that are operating on the same memory structures,
	such as multiple disk reads or writes. Due to a compiler optimization that
	caused two operations to be executed in the wrong order, one of the processes
	attempts to use a pointer it thinks has been initialized correctly, when in fact
	it has not.
	
	This error can only occur on a multiprocessor computer and has been observed most
	frequently on NCR multiprocessor systems, however it could occur on any
	multiprocessor computer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 0xa prodnt
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
