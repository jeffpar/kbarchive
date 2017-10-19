---
layout: page
title: "Q125385: File Size and Date Reported Incorrectly On NTFS Drive"
permalink: /kb/125/Q125385/
---

## Q125385: File Size and Date Reported Incorrectly On NTFS Drive

	Article: Q125385
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	File Manager and the Windows NT Command Prompt DIR command incorrectly report
	file date, time, and size information.
	
	CAUSE
	=====
	
	This problems occurs when the file date, time, and size information stored in
	the directory entry for a file is not updated from the file date, time, and size
	information stored in the file record. As a result, file date, time, and size
	data are not displayed correctly when a non-specific or wildcard DIR command
	(one that does not explicitly specify a single file name) is issued.
	
	This problem only affects files on Windows NT machines which have been modified
	by non-Windows NT client workstations.
	
	WORKAROUND
	==========
	
	To work around this problem, explicitly specify the file name in a DIR command,
	or open and close the file exhibiting the problem with an application.
	
	MORE INFORMATION
	================
	
	The NTFS file system maintains the current date, time, and size in the file
	record. It also contains duplicate information in the directory entry for quick
	reference by applications that do not need to access the actual file data (such
	as the DIR command). This results in a substantial performance improvement when
	only the file date, time, or size is being requested.
	
	For performance reasons, when an application has a file open NTFS ignores the
	directory copy of file date, time, and size information. When the file is
	closed, or when an application makes an explicit request to update the
	information, the directory copy of the information is updated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
