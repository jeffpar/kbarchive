---
layout: page
title: "Q132899: STOP 0xA Err Msg When Installing Future Domain TMC-3260 PCI SCSI"
permalink: /kb/132/Q132899/
---

## Q132899: STOP 0xA Err Msg When Installing Future Domain TMC-3260 PCI SCSI

	Article: Q132899
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you allow Windows NT 3.51 Setup to detect and install the Future Domain
	TMC-3260 PCI SCSI controller, the following error message appears:
	
	  STOP: 0x0000000A
	
	CAUSE
	=====
	
	This problem occurs when Windows NT Setup incorrectly identifies and installs
	the FD16_700.SYS SCSI driver instead of the FD18_36.SYS SCSI driver (supplied by
	Future Domain).
	
	WORKAROUND
	==========
	
	To work around this problem, select "<Other> Requires disk from
	manufacturer" when installing the SCSI controller, and insert the driver disk
	supplied by Adaptec, Inc. who acquired Future Domain.
	
	NOTE: As of March 1996, this TMC-3260 PCI driver was not available on any of
	Adaptec's download sites. Please contact Adaptec, Inc. for more information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt trap 0x0a blue screen
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
