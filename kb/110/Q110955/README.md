---
layout: page
title: "Q110955: Invalid EISA CFG File for Olicom Token Ring 16/4 Adapter"
permalink: /kb/110/Q110955/
---

## Q110955: Invalid EISA CFG File for Olicom Token Ring 16/4 Adapter

	Article: Q110955
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Olicom Token Ring 16/4 adapter from the Windows NT Advanced
	Server CD-ROM 0993 (disk assembly 227-075-021) the directory
	DRVLIB\NETCARD\OCTK16\X86 also contains an EISA Configuration file called
	!OLC0902.CFG. This CFG file will not load into an EISA-based system.
	
	CAUSE
	=====
	
	This problem occurs because CFG file is not correctly formatted; it appears to
	be searching for a Pure Data EISA 16/4 adapter.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do not use the !OLC0902.CFG file to install the
	Olicom Token Ring 16/4 adapter. Use the documentation and materials shipped with
	the Olicom Token Ring 16/4 adapter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1. We are researching this problem and will post new information here
	as it becomes available.
	
	The Olicom product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt 3.10 CFE hdwr ntas
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
