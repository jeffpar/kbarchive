---
layout: page
title: "Q149694: PCMCIA Problem on Austin Business Audio DX4 100 Color Notebook"
permalink: /kb/149/Q149694/
---

## Q149694: PCMCIA Problem on Austin Business Audio DX4 100 Color Notebook

	Article: Q149694
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pcmcia.sys fails with the following error on the Austin Business Audio DX4 100
	Color Notebook computer:
	
	  Could not start the Pcmcia service on \\<server name>.
	  Error 0020: The system cannot find the device specified.
	
	CAUSE
	=====
	
	The Pcmcia.sys that ships with Windows NT 3.51 Server and Workstation is not
	compatible with the PCMCIA slot of the Austin Business Audio DX4 100 Color
	Notebook.
	
	RESOLUTION
	==========
	
	To correct this problem, install Service Pack 3 or higher or copy Pcmcia.sys
	from SP3 to the \\winnt35\sytem32\drivers directory, overwriting the existing
	copy of Pcmcia.sys. Then go into the Windows NT Control Panel, open Devices, and
	set PCMCIA to either manual or automatic start-up. If you set it to manual, you
	will need to start the device through the Devices dialog box; if you choose
	automatic, start-up will be automatic when a PCMCIA device is inserted in the
	slot.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in Service Pack 3 for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt sp3
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
