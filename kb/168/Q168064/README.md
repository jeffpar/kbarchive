---
layout: page
title: "Q168064: PPTP Protocol Not Available on MCA Computers"
permalink: kb/168/Q168064/
---

## Q168064: PPTP Protocol Not Available on MCA Computers

	Article: Q168064
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install point to point tunneling protocol (PPTP), it does not
	appear as an installable protocol in the Network Control Panel on Microchannel
	computers.
	
	CAUSE
	=====
	
	Windows NT operating system components can be installed based on bus type. In
	this case, MCA is not listed as a supported bus architecture in the
	[PlatformsSupported] section of Oemnxppp.inf.
	
	WORKAROUND
	==========
	
	To work around this problem open the Oemnxppp.inf file (located in the
	%Systemroot%\System32 directory). In the [PlatformsSupported] section, add MCA.
	Another resolution is to delete the [PlatformsSupported] section entirely.
	
	See Example:
	
	Before:
	
	  [PlatformsSupported]
	  ISA
	  EISA
	  "JAZZ-INTERNAL BUS"
	
	After:
	
	  [PlatformsSupported]
	  MCA
	  ISA
	  EISA
	  "JAZZ-INTERNAL BUS"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt Micro-channel MCA Point to point transfer ps/2 micro-channel
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
