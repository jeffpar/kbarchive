---
layout: page
title: "Q99117: PC DirSync: Err Msg: Fatal &#91;203&#93; GAL Rebuild Problem"
permalink: /kb/099/Q99117/
---

## Q99117: PC DirSync: Err Msg: Fatal &#91;203&#93; GAL Rebuild Problem

{% raw %}

	Article: Q99117
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Directory Synchronization (Dir-Sync), it may place the
	following error into the DIRSYNC.LOG file:
	
	  Fatal [203] Gal Rebuild problem accessing files Global Address List not
	  installed on this Postoffice
	
	In addition, if this error occurs, the Global Address List (GAL) may not appear
	when you address mail.
	
	CAUSE
	=====
	
	The REBUILD.EXE program encountered a locked GAL.NME, GALINDEX.GLB, or
	GALNETPO.GLB file. This is by design.
	
	RESOLUTION
	==========
	
	If the REBUILD.EXE program failed at this step, several temporary files will be
	available, depending on which files are locked and which version of REBUILD was
	used. In all cases, replace the first file with the second (if it exists):
	
	For Mail 3.0 (REBUILD 3.0):
	
	  Replace                With
	  --------------------------------------------
	  GAL.NME                TMP00003.NME
	  GALINDEX.GLB           GALINDE$.GLB
	  GALNETPO.GLB           TMPNETPO.GLB
	
	For Mail 3.2 (REBUILD 3.2):
	
	  Replace                With
	  --------------------------------------------
	  GAL.NME                GAL$.NME
	  GALINDEX.GLB           GALINDE$.GLB
	  GALNETPO.GLB           TMPNETPO.GLB
	
	All three temporary files should have the same date and very nearly the same time
	as well.
	
	For Mail 3.2, if the GALINDEX.GLB or the GALNETPO.GLB are locked when REBUILD is
	run, the GAL.NME file will have been deleted and the GAL will not appear in the
	clients when you address mail. In this case, you must rename the temporary files
	created by REBUILD according to the above table. This will restore the GAL on
	all clients, although you may need to restart the Windows client.
	
	
	Additional query words: temp pcmailfaq
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN350
	Version           : WINDOWS:3.0,3.0b,3.2,3.5
	
	=============================================================================
	

{% endraw %}
