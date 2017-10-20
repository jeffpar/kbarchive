---
layout: page
title: "Q142204: CSNW Drive Mappings Incorrect"
permalink: /kb/142/Q142204/
---

## Q142204: CSNW Drive Mappings Incorrect

{% raw %}

	Article: Q142204
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
	
	Customers running Client Services for NetWare to access a Novell 3.11 server may
	intermittently receive incorrect volume information for permanent drive
	mappings. Visible symptoms of this are File Manager showing the directory
	information for the wrong volume while the Title Bar in File Manager actually
	shows the correct volume path (for example, File Manager - VOL1\Home may
	actually show the SYS\Apps directory).
	
	CAUSE
	=====
	
	NetWare clients request directory search handles from a Novell Server for
	Volumes it would like to reference or map. Novell contains support for Temporary
	and Permanent directory search handles for volume mapping. Permanent handles are
	maintained entirely by the client and should only be terminated by the server
	when a new volume mapping is requested for the same drive letter, or the client
	connection is terminated. The client maintains the drive mapping by initially
	requesting a directory search handle, maintaining a reference to it, and
	requesting that the handle be deallocated when it is done.
	
	Windows NT Client Services for NetWare (CSNW) maintains permanent directory
	handles in a list of Volume Control Blocks (VCB's) per Server Connection Block
	(SCB). CSNW frees a permanent directory handle when a VCB (mapping) is freed, or
	when the owner SCB is marked as down. In the case that the SCB is marked as
	down, CSNW actually changes the handle to 0xff indicating a new directory search
	handle needs to be requested for this VCB when the SCB is active again (the
	connection is re-established) -- like a ghosted connection.
	
	In this case, the Novell server loses track of permanent directory search handles
	allocated by the Windows NT client. Traces of this problem have shown no
	deallocation request for a particular permanent directory search handle coming
	from the Windows NT client, and a debug dump of the VCB list shows a duplicate
	handle ID is assigned to a new mapping from the Novell server.
	
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT 3.51.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the interoperation of NetWare
	and Windows NT version 3.51. A workaround to this problem included in the latest
	Windows NT 3.51 U.S. Service Pack. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.50 prodnt novell
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
