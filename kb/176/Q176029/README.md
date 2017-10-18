---
layout: page
title: "Q176029: Messenger Service Fails When Using Only NWLINK"
permalink: kb/176/Q176029/
---

## Q176029: Messenger Service Fails When Using Only NWLINK

	Article: Q176029
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinfo kbArtTypeINF
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When NWLink is the only protocol installed, the Messenger service fails to
	start, and the following error is recorded in the Event Log:
	
	  Error ID: 7024  Source:
	  The Messenger Service Terminated With Service-Specific Error 2105.
	
	Server Manager fails with the following error:
	
	  The Network Path Was Not Found. Do You Want to Select Another Domain to
	  Administer?
	
	License Manager fails with the following error:
	
	  The Specified Domain Does Not Exist
	
	Although you cannot connect with NWLink NetBIOS, you can connect with direct
	hosting clients such as Windows 95 and Windows for Workgroups 3.11. SPX and
	NCP-based communication to the server will continue to function correctly.
	
	CAUSE
	=====
	
	Installing support for multiple IPX frame types with Windows NT Server 4.0 can
	cause this problem, depending upon the order in which the frame types are added.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base:
	
	SERVPACK
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
