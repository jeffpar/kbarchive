---
layout: page
title: "Q139956: RPC from a Big Endian Computer Causes GP Fault"
permalink: kb/139/Q139956/
---

## Q139956: RPC from a Big Endian Computer Causes GP Fault

	Article: Q139956
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When receiving an RPC packet from a Big Endian computer, an access violation in
	RPCRT4.DLL occurs.
	
	CAUSE
	=====
	
	This access violation is caused by a union structure that was incorrectly
	decoded on the Little Endian Windows NT computer. When Windows NT cannot decode
	such a structure, it leaves it in the original Big Endian format.
	
	A union is a 'C' structure which lets you assign multiple names and/or types to
	the same address space. For instance, you can define a union containing an
	integer and a string pointer. Each member shares the same location in memory. If
	you set the string equal to an address, and then print the integer portion, you
	would get the address of the string. Each of these members (the integer and
	string pointer) is known as an ARM of the union.
	
	When RPC communication comes from a Big Endian computer, Windows NT must convert
	the information to Little Endian format on an x86 computer. For example, a
	unicode string has the length passed. A DWORD length of 9 is passed as
	0x09000000 on a Little Endian computer, but as 0x00000009 on a Big Endian
	computer.
	
	When a data structure is passed in an RPC call, information describing the type
	of data, and offset to pointers is passed as well. In the case of the GP fault,
	a union structure is passed to Windows NT from a Big Endian computer. While
	decoding the information, it incorrectly increments a pointer into the RPC data
	for the union structure. This causes it to ignore the translation from Big
	Endian to Little Endian and leaves a unicode string in big endian format. This
	causes a problem decoding the string because the length of the unicode string is
	not reversed, and therefore looks like a huge number. This causes an Access
	Violation when it tries to access passed the unicode strings end.
	
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
