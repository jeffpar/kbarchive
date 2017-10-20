---
layout: page
title: "Q135486: PC DirSync: Err Msg: Fatal 39 Error Generating TID"
permalink: /kb/135/Q135486/
---

## Q135486: PC DirSync: Err Msg: Fatal 39 Error Generating TID

{% raw %}

	Article: Q135486
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When REBUILD.EXE is run to build the Global Address List (GAL), the following
	error may be displayed in the DIRSYNC.LOG:
	
	  Fatal 39 Error generating TID. Allocating unique ID.
	
	CAUSE
	=====
	
	This error occurs if the GALNETPO.GLB on the postoffice is corrupt.
	
	RESOLUTION
	==========
	
	To correct this, delete GAL.NME, GALINDEX.GLB, and GALNETPO.GLB. Re-run
	REBUILD.EXE to recreate the files.
	
	MORE INFORMATION
	================
	
	When Rebuild constructs the GALNETPO.GLB, it starts out with an arbitrarily
	large number, 7F67697F (in hex) as default, for the new tuple identifier (TID).
	Then it reads the GALNETPO.GLB; it reads the first 4 bytes and the first record
	to determine the new TID value in GALNETPO.GLB. If this is successful, it uses
	this number instead of the default for the new TID value.
	
	Then the TID.GLB is read. The value from this is compared with the new TID
	obtained previously. If the new TID is less than or equal to the value from
	TID.GLB, the error 39 is generated. The new TID is expected to be arbitrarily
	large.
	
	If the GALNETPO.GLB is corrupt and consists of records containing all zeroes,
	this error will occur. If you delete the GAL files, the default new TID will be
	used.
	
	Additional query words: 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	

{% endraw %}
