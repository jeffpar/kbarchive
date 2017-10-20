---
layout: page
title: "Q125903: File Size Displayed Incorrectly After Copying to an NTFS Share"
permalink: /kb/125/Q125903/
---

## Q125903: File Size Displayed Incorrectly After Copying to an NTFS Share

{% raw %}

	Article: Q125903
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you copy a file from a Windows for Workgroups client to an Windows NT file
	system (NTFS) volume, and then run DIR to view the file details in a directory
	listing, the wrong file size is reported.
	
	This problem occurs when the file you copy is larger than 130,048 bytes (127
	KB).
	
	NOTE: The same problem occurs if you view the file in File Manager. The problem
	does not occur if you copy the file using File Manager.
	
	CAUSE
	=====
	
	NTFS does not update the directory entry until the file handle is closed.
	
	WORKAROUND
	==========
	
	To work around this problem, force Windows NT to close the file handle. For
	example, copy the file to NULL from the NTFS volume closes the file handle a
	command line similar to the following:
	
	  copy <filename>.<ext> NULL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: 3.11 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11; winnt:3.5
	
	=============================================================================
	

{% endraw %}
