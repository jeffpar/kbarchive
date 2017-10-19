---
layout: page
title: "Q119240: PC DirSync: Err Msg: Error 46 No Fullname"
permalink: /kb/119/Q119240/
---

## Q119240: PC DirSync: Err Msg: Error 46 No Fullname

	Article: Q119240
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error is recorded in the DIRSYNC.LOG file during the execution of
	the Import program:
	
	  Error [ 46] No Fullname
	
	CAUSE
	=====
	
	The alias name file (for example, X400.NME) is empty (or zero bytes) and the
	gateway address file (for example, X400.GLB) contains addressing information
	(larger than 4 bytes). The directory synchronization (Dir-Sync) server on which
	the extraction occurs attempts to create an invalid entry in the import file it
	created on the Dir-Sync server. The error will appear on the requestor when the
	import is performed to add the new addresses to the gateway list. The import
	file is created as part of a request from a requestor for a full import or in a
	RESYNC.GLB file.
	
	RESOLUTION
	==========
	
	Restore the address and alias files to a normal condition. This would include
	reloading the gateway addresses or reducing the addressing file to its four byte
	original state.
	
	MORE INFORMATION
	================
	
	The following error may also be recorded in the DIRSYNC.LOG:
	
	  Warning 43 Gateway alias has no physical address.
	
	This error may appear if the addressing files for the gateway on the server are
	not complete.
	
	Additional query words: 3.20 dirsync dirsynch
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a
	Version           : WINDOWS:3.0,3.0a,3.2
	
	=============================================================================
	
