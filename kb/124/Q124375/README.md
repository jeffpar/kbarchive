---
layout: page
title: "Q124375: SFM: File Permissions Problem When Volume is Shared at Root"
permalink: kb/124/Q124375/
---

## Q124375: SFM: File Permissions Problem When Volume is Shared at Root

	Article: Q124375
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
	
	After you install Services for Macintosh (SFM) on a computer running Windows NT
	Server version 3.5, you encounter file permission problems on the Macintosh
	volume. For example, file permissions are not applied to files dynamically on
	the Macintosh volume. As a result, Macintosh clients cannot view the files.
	
	CAUSE
	=====
	
	This problem occurs when a Macintosh volume is shared at the drive root.
	
	
	WORKAROUND
	==========
	
	To work around this problem, recreate the Macintosh volume.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest U.S. Service Pack for Windows NT version
	3.5. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt mac zone sfm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
