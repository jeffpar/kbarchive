---
layout: page
title: "Q122983: ScanDisk Does Not Check for Lowercase Characters in Filenames"
permalink: /kb/122/Q122983/
---

## Q122983: ScanDisk Does Not Check for Lowercase Characters in Filenames

{% raw %}

	Article: Q122983
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a disk stores a file that has lowercase letters in its filename, ScanDisk
	does not find any problems with the file structure, even though you cannot gain
	access to the file.
	
	WORKAROUND
	==========
	
	To work around this problem, rename or delete the file by using wildcards, or
	use a third-party program such as Norton's DiskEdit to change the lowercase
	letters.
	
	NOTE: Lowercase letters can sometimes occur as a result of using Microsoft
	Undelete for Windows, version 6.0. For specific workaround information, please
	see the following article(s) in the Microsoft Knowledge Base:
	
	  Q98404 "Using MS Undelete to Restore Files with Existing Filenames"
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in MS-DOS version 6.22. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

{% endraw %}
