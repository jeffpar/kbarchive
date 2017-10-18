---
layout: page
title: "Q124747: SFM Err Msg: The Item...Is Missing and Was Probably Deleted..."
permalink: kb/124/Q124747/
---

## Q124747: SFM Err Msg: The Item...Is Missing and Was Probably Deleted...

	Article: Q124747
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Macintosh Operating System 7.5 to find files on a Windows NT 3.5
	Macintosh volume, the following error message appears after the query is
	completed:
	
	  The item <filename> is missing and was probably deleted. Other items
	  may be affected; Checking them now.
	
	A list of files that Macintosh file finder has found is then displayed. The files
	are grayed out and inaccessible.
	
	CAUSE
	=====
	
	On returning from the search, Find File calls AfpResolveId on ID=0. Since 0 is
	an invalid ID Windows NT Services for Macintosh returned ParamErr.
	
	RESOLUTION
	==========
	
	The error code was changed to be IdNotFound which is what is returned from real
	AppleShare servers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem has been corrected in the latest
	U.S. Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt sfm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
