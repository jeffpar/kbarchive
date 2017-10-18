---
layout: page
title: "Q156316: Inability to Open Files May Be Caused by Bad Registry Key"
permalink: kb/156/Q156316/
---

## Q156316: Inability to Open Files May Be Caused by Bad Registry Key

	Article: Q156316
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the size of the Windows NT PagedPool or NonPagedPool memory resources is
	set to improper values, it may not be possible to copy or open "large" files.
	Further, attempts to open large files may result in file corruption.
	
	MORE INFORMATION
	================
	
	If the values of the PagedPoolSize or NonPagedPoolSize parameter in the system
	registry is incorrectly specified, various Windows NT kernel mode components may
	be unable to allocate sufficient memory to function normally. These values are
	located in the following registry key:
	
	\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management
	
	Ordinarily, the value of these parameters is set to zero, which indicates that
	Windows NT should compute default values for resource allocation. Nonzero values
	override the default computation, and should be avoided in most circumstances.
	Please remember that any value entered is a hard limit. This means that these
	values can be used to only limit memory to a SMALLER value than the automatic
	system calculation, these values cannot ever be used to increase the memory
	setting. So in all situations there is no reason to ever enter non zero values.
	This is because the optimal settings will depend on the amount of memory
	actually installed.
	
	For additional information about these registry parameters, please see the
	following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q126402
	  TITLE : PagedPoolSize and NonPagedPoolSize Values in Windows NT 3.5
	
	When an application opens a file, Windows NT file systems must be able to
	allocate a certain amount of memory to keep track of various information about
	the file on behalf of the application. In general, the larger the file, the more
	memory will be required. Therefore, in low memory situations, attempting to open
	or copy a large file may fail, while it is still possible to open or copy
	smaller files.
	
	In extreme cases, file system corruption can even take place if memory settings
	are incorrect. This file corruption is not likely to take place on a correctly
	configured system, even in very low memory situations. Rather, when the
	PagedPoolSize and/or NonPagedPoolSize parameters have been set to inappropriate
	nonzero values, other internal resource allocations may be "thrown off,"
	resulting in the potential for corruption.
	
	
	Additional query words: cannot won't don't transfer read prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	
