---
layout: page
title: "Q151432: Invalid File Handle with SP4 Nwrdr.sys"
permalink: /kb/151/Q151432/
---

## Q151432: Invalid File Handle with SP4 Nwrdr.sys

	Article: Q151432
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following message occurs in File Manager when you attempt to browse
	directories on a Novell NetWare 3.11 or 3.12 server volume:
	
	  Invalid File Handle
	
	CAUSE
	=====
	
	A check was put into the Service Pack 4 version of Client Services for NetWare
	(CSNW) because of the possibility of a NetWare Server assigning a duplicate
	directory handle. This fix caused a regression in Windows NT because it did not
	differentiate between directory handles and print queue IDs.
	
	RESOLUTION
	==========
	
	Check each Volume Control Block (VCB) to determine whether it is a print queue
	or not before invalidating the handles.
	
	MORE INFORMATION
	================
	
	CSNW uses a single DWORD union to represent directory-specific or printer-
	specific information in its record of a mapping, or Volume Control Block (VCB).
	The value in the union depends on the resource type for that VCB; the resource
	type can be either print or disk. The fix for duplicate directory handle
	assignment did not check the resource type. Therefore a print queue ID of
	0xf903004f would also appear to represent a directory handle of 0x3, because the
	second byte in the union represents a directory handle if the resource type is
	disk.
	
	In the example above, if a disk resource mapping results in a NetWare server
	allocating a Directory Handle of 3, then both the new directory handle and the
	second byte of the existing print queue ID would be invalidated with an FF(-1).
	Subsequent commands sent to the NetWare server, using FF for a file handle,
	result in the Invalid File Handle message and the remapping of the Disk resource
	connection. This invalidation also has the effect of changing the print queue
	ID. This causes print failures, because it is likely that the resulting print
	queue ID the client attempts to use does not exist.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 with
	Service Pack 4. This problem was corrected in the latest Windows NT 3.51 U.S.
	Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
