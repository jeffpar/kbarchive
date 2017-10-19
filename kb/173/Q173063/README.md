---
layout: page
title: "Q173063: Using File Open Command Causes Applications to Terminate"
permalink: /kb/173/Q173063/
---

## Q173063: Using File Open Command Causes Applications to Terminate

	Article: Q173063
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an application that supports the File Open common dialog box in
	Windows NT 4.0, specifying a list of files to be displayed by using a wildcard
	symbol with an extension (i.e., *.ico) may cause the application to terminate if
	one of the files is corrupted. When the application terminates, no errors are
	displayed that may give you a chance to save open files; therefore, any work
	performed in the application prior to the last save is lost.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest Windows NT Service Pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base:
	
	SERVPACK
	
	
	Additional query words: wildcard
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
