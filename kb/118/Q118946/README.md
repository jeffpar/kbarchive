---
layout: page
title: "Q118946: PC Ext: What Is the RNETSEM.GLB?"
permalink: /kb/118/Q118946/
---

## Q118946: PC Ext: What Is the RNETSEM.GLB?

	Article: Q118946
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The file RNETSEM.GLB contains one long integer (4 bytes) and is used for
	synchronizing the generation of RNETWORK.GLB by the External mail program. On a
	new postoffice (PO), the first run of the External mail program (EXTERNAL.EXE)
	will create this file. The file data is read into memory and stored.
	
	When the rebuild interval for RNETWORK.GLB is reached, the value of this file is
	checked again. If it matches the copy in memory, it implies that no update has
	occurred, and the External mail program can proceed with the update. External
	will, on completion of the update, increment the value of the long integer
	stored in RNETSEM.GLB and save it.
	
	If the checked value is different from the value in memory, it implies that
	another External mail program has already performed a rebuild, so the new value
	is saved, and the rebuild is skipped.
	
	
	Additional query words: 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	
