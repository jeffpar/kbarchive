---
layout: page
title: "Q156884: Problems Saving Event Viewer Log from Windows NT 4.0 to 3.51"
permalink: kb/156/Q156884/
---

## Q156884: Problems Saving Event Viewer Log from Windows NT 4.0 to 3.51

	Article: Q156884
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is not possible to remotely save the Event Viewer log from a Microsoft
	Windows NT 4.0 computer, to a Microsoft Windows NT 3.51 computer.
	
	CAUSE
	=====
	
	The way file names are referenced was changed in Windows NT 4.0. In Windows NT
	4.0, file names are referenced internally as \??, instead of as \DosDevices, as
	they are referenced in Windows NT version 3.51.
	
	RESOLUTION
	==========
	
	Advapi32.dll was modified to retry saving the file using the Windows NT 3.51
	method of referencing the file when it fails using the Windows NT 4.0 method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
