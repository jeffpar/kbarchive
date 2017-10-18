---
layout: page
title: "Q149643: Printing to NetWare Deallocates Directory Handle"
permalink: kb/149/Q149643/
---

## Q149643: Printing to NetWare Deallocates Directory Handle

	Article: Q149643
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print to a Novell NetWare print queue, a directory handle may be
	inadvertently deallocated. This may cause the following symptoms (this list of
	symptoms is not exhaustive):
	
	- An "Invalid handle" messages appear in File Manager.
	
	- A network application is unable to reconnect to the server without refreshing
	  the drive.
	
	You can use a network trace to identify the problem.
	
	CAUSE
	=====
	
	When the reference count for a Verb Control Block (VCB) becomes zero, the
	NetWare redirector (Nwrdr) scavenger thread cleans up the VCB by calling the
	NwCleanupVcb() application programming interface (API). NwCleanupVcb()
	deallocates the directory handle for every VCB regardless of whether its Flags
	information indicates a print queue or drive mapping.
	
	When the last handle is closed, the print queue will have a Reference count of
	zero. If a print queue has a Reference Count value of zero and has a directory
	handle value that is identical to the handle value of a drive mapping , then the
	NetWare redirector deallocates the handle of the drive mapping erroneously. The
	Novell server then responds with "Invalid Path" to subsequent requests
	referencing the deallocated handle.
	
	MORE INFORMATION
	================
	
	When a connection is made to a volume on a NetWare server, the Novell NetWare
	server allocates a directory handle for the client. When the client connects to
	a print queue, the server provides the client a print queue ID. NT uses a union
	in the Verb Control Block (VCB) structure to represent, drive, and print
	information in the same storage space. For this reason, Client Service for
	NetWare (CSNW) should keep track of which type is currently stored in the union
	by evaluating the flag field in the VCB structure, but it fails to do so. A
	Flags value of 0x3 indicates an explicit drive mapping connection, and a Flags
	value of 0x4 indicates a print queue connection.
	
	Below are two sample VCB dumps that illustrate the problem, one for a Flags value
	of 0x3 and one for 0x4. They both have the same Handle value. Example B has a
	Reference Count value of 0, causing the scavenger thread to become active and
	deallocate all VCBs with a handle value of 2.
	
	Example A (Flags value 0x3 and Reference Count value of 1):
	
	kd> !nw.vcblist e13d3ca8    [Local           13:54]
	------------------------------VCB at e13a8008------------------------------
	NodeTypeCode             : NW_NTC_VCB
	NodeByteSize             : 246
	Reference Count          : 00000001
	Last Used Time           : 00000000 00000000
	GlobalVcbListEntry       : e13a8018 (LIST_ENTRY, VCB)
	SequenceNumber           : 46
	VolumeName               : c1a4\M:\VICTIM\SYS\USERS\JOHNGIL\MAILDATA
	NW ShareName             : SYS:USERS\JOHNGIL\MAILDATA
	VolumeNumber             : 0
	LongNameSpace            : -1
	Handle                   : 2
	QueueId                  : 1090715392
	Drive letter             : M:
	Scb Addr                 : e13d3ca8
	VcbListEntry             : e13a805c (LIST_ENTRY, VCB)
	FcbListEntry             : e13a8064 (LIST_ENTRY, FCB)
	OpenFileCount            : 0
	Flags                    : 00000003
	---------------------------------------------------------------------------
	
	Example B (Flags value 0x4 and Reference Count value of 0):
	
	------------------------------VCB at e14cd148------------------------------
	NodeTypeCode             : NW_NTC_VCB
	NodeByteSize             : 176
	Reference Count          : 00000000
	Last Used Time           : 01bb1ffa 7d6454f0
	GlobalVcbListEntry       : e14cd158 (LIST_ENTRY, VCB)
	SequenceNumber           : 51
	VolumeName               : c1a4\VICTIM\LASER4_RAJ
	NW ShareName             : LASER4_RAJ
	VolumeNumber             : -26
	LongNameSpace            : 0
	Handle                   : 2
	QueueId                  : -553516826
	Drive letter             : UNC
	Scb Addr                 : e13d3ca8
	VcbListEntry             : e14cd19c (LIST_ENTRY, VCB)
	FcbListEntry             : e14cd1a4 (LIST_ENTRY, FCB)
	OpenFileCount            : 0
	Flags                    : 00000004
	
	A Flags value of 4 in example B indicates the union is being used for a print
	queue ID. The print queue ID returned by the Novell server for the print queue
	above is:
	
	  -553516826 decimal or 0xDF0200E6 hexadecimal.
	
	The second byte from the left in the hexadecimal number indicates the handle and
	has a value of 02. It has the same handle value as the Handle in the first VCB
	example above.
	
	RESOLUTION
	==========
	
	A fix for this problem is available in the latest Service Pack for Windows NT
	3.51. The fix evaluates the VCB to determine whether it represents a drive
	mapping or a print queue. If it is a print queue, it does not enter the code
	that deallocates directory handles.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest U.S. Service Pack for Windows NT
	Workstation or Server version 3.51. For information on obtaining this update,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.50 3.51 prodnt csnw gsnw
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
