---
layout: page
title: "Q121393: Error Message Claims NTFS Files Corrupt, Chkdsk Does Nothing"
permalink: /kb/121/Q121393/
---

## Q121393: Error Message Claims NTFS Files Corrupt, Chkdsk Does Nothing

	Article: Q121393
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access a file on a NTFS partition, a message appears saying
	that file(s) are corrupt and that you should run CHKDSK.EXE to repair the
	problem. After running CHKDSK.EXE, the problem reoccurs.
	
	-or-
	
	An application performing a write operation to the NTFS disk hang and other
	applications may subsequently hang when they attempt to perform disk
	operations.
	
	NOTE: The file(s) indicated are NOT corrupted. Running CHKDSK.EXE is not
	successful because CHKDSK.EXE has nothing to repair.
	
	CAUSE
	=====
	
	The problem is in the way that NTFS.SYS handles certain internal files
	structures when multiple attributes are present.
	
	While the problem is extremely difficult to reproduce, it is most likely to
	affect files with 'extra' data attributes that are located in directories with
	'extra' data attributes. Files and directories in Services for Macintosh (SFM)
	volumes have such extra data attributes, so the problem is more likely to occur
	on these files. Files with long names in addition to 8.3 names and files
	manipulated with the POSIX subsystem which may have additional named data
	streams are more likely to trigger the problem than other NTFS files.
	
	WORKAROUND
	==========
	
	When the error message appears, it is usually possible to retry the operation
	successfully. It may be helpful to give the file a different name, or to copy
	the file using a different technique.
	
	If your computer hangs due to the application attempting to write to a file,
	there is no option except to restart the operating system. Although file system
	corruption is not likely, as with any improper (dirty) system shutdown, user
	data may be lost.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in the latest
	service pack for Windows NT 3.1 and in Windows NT Workstation and Windows NT
	Server version 3.5.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
