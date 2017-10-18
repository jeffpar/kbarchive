---
layout: page
title: "Q87465: PC DB: How to Tell if an ACCESS File Is Corrupt"
permalink: kb/087/Q87465/
---

## Q87465: PC DB: How to Tell if an ACCESS File Is Corrupt

	Article: Q87465
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some symptoms of corrupted access record entries are as follows:
	
	1. A user cannot load his or her folders subdirectory.
	
	2. A user is no longer recognizable as a remote modem mail user.
	
	3. A user gets the error message "Error in mail header retrieval."
	
	4. A user sees corrupted character strings in different fields that relate to
	  his or her personally set environment.
	
	WORKAROUND
	==========
	
	To check whether an ACCESS file is corrupt, divide the file sizes by the
	following numbers:
	
	  ACCESS.GLB (1172 / 586) = 2
	  ACCESS2.GLB ( 138 / 69 ) = 2
	  ACCESS3.GLB (1024 / 512) = 2
	
	The file sizes must always divide evenly and the number of records per file must
	always be the same for the same files. This number will not always accurately
	represent the number of local users defined at the postoffice because the
	concept of deleted records is being used. The above calculations show that there
	are/were two users defined on the local postoffice.
	
	File size alone will not always guarantee that the files are not corrupted. It is
	still possible for an individual's access record to be corrupted and not reflect
	this in the file size.
	
	
	Additional query words: 2.10e 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.2
	
	=============================================================================
	
