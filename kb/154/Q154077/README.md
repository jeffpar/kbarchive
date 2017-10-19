---
layout: page
title: "Q154077: Windows NT 4.0 Explorer Displays Incorrect File Size"
permalink: /kb/154/Q154077/
---

## Q154077: Windows NT 4.0 Explorer Displays Incorrect File Size

	Article: Q154077
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you bring up a directory with more than 4 gigabytes (GB) of files in a
	Windows NT Explorer window, Explorer will show an incorrect file size summary in
	the status bar. The size of the files is displayed correctly in File Manager, on
	the command prompt, and in the directory properties (also counting
	subdirectories).
	
	CAUSE
	=====
	
	The calculation of this value does not use 64-bit integers and thus wraps at 4
	GB.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.00. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
