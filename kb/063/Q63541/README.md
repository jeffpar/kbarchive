---
layout: page
title: "Q63541: Passing Structures to OS/2 LAN Manager Remote API Calls"
permalink: /kb/063/Q63541/
---

## Q63541: Passing Structures to OS/2 LAN Manager Remote API Calls

	Article: Q63541
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	  A structure passed to NetShareAdd() includes pointers to ASCIIZ strings. To
	  keep all the data in one place, the data for these strings was appended to
	  the end of the structure (that is, the structure and the strings it addresses
	  are kept in one physical buffer).
	
	  Since the buffer includes both the strings and the passed structure, the
	  buffer length supplied must be the length of the structure plus the length of
	  the appended strings. However, when the NetShareAdd() API is called from
	  MS-DOS to add a share on a remote server, it returns an error of
	  ERROR_INVALID_PARAMETER (number 87).
	
	CAUSE
	=====
	
	  This characteristic applies to all the OS/2 LAN Manager Add or SetInfo type
	  API calls; OS/2 LAN Manager uses an optimizing technique to minimize the
	  amount of data actually sent on a remote API call (a call that is performed
	  on another physical machine).
	
	  Any pointers in a passed structure that point to data within the structure
	  itself are set to NULL. Since the code that transfers the API call handles
	  many different APIs, OS/2 LAN Manager determines this by checking whether any
	  pointers point to an area somewhere within where the structure starts and
	  ends, as determined by the passed structure pointer and buffer length field.
	  Since the buffer length includes more than just the structure length, OS/2
	  LAN Manager assumes that the pointers within the structure are pointing into
	  the structure itself, and therefore sets them to NULL. This causes the
	  parameters to become invalid.
	
	RESOLUTION
	==========
	
	  The proper value to supply for the buffer-length argument to Add and SetInfo
	  type OS/2 LAN Manager API calls is as follows
	
	        sizeof(struct xxxxx)
	
	  where "xxxxx" is the name of the structure whose pointer is being passed. You
	  can still place the structure and the data it addresses in the same buffer,
	  just don't let OS/2 LAN Manager be aware of it.
	
	Please note that this information applies to remote API calls only. More
	information on this topic can be found in Chapter 1 of the "Microsoft LAN
	Manager Programmer's Reference for OS/2 LAN Manager and MS-DOS LAN Manager."
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
