---
layout: page
title: "Q198478: Infinite Loop When Connecting Through RPC to HP-UX 9.x"
permalink: /kb/198/Q198478/
---

## Q198478: Infinite Loop When Connecting Through RPC to HP-UX 9.x

	Article: Q198478
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	WMI will go into an infinite loop when an attempt is made to connect to an HP-UX
	9.x system running DCE. The customer will be unaware of this loop except that
	WMI will hang, and that there is constant network traffic between the systems
	until the Windows NT system is restarted.
	
	CAUSE
	=====
	
	The implementation of RPC used in HP-UX 9.x does not handle connections
	correctly. In the endless loop case, the remote server returns
	NCA_STATUS_UNK_IF(0x1C010003). HP-UX 9.x's RPC implementation is incorrect.
	Specifically they are not byte-swapping the TimeHiAndVersion field of the
	Activity UUID. Because of this, MSRPC does not recognize the datagram reject
	packet. This has been resolved in HP-UX 10.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Windows NT
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File Name     Platform
	  -------------------------------------------------------------
	  12/02/98  01:54p               330,000 Rpcrt4.dll    (x86)
	  12/02/98  01:54p               582,928 Rpcrt4.dll    (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	Additional query words: 4.00
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
