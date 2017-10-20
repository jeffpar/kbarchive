---
layout: page
title: "Q141386: Using Send Command in 16-Bit Program Starts Microsoft Exchange"
permalink: /kb/141/Q141386/
---

## Q141386: Using Send Command in 16-Bit Program Starts Microsoft Exchange

{% raw %}

	Article: Q141386
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Send command in a 16-bit program, Microsoft Exchange may be
	started instead of the 16-bit mail program installed on your computer.
	
	CAUSE
	=====
	
	The Send command is a Simple MAPI function. All 16-bit programs use Mapi.dll for
	Simple MAPI. When you install Microsoft Exchange, Setup installs the Windows 95
	version of the Mapi.dll file. When a 16-bit program calls Mapi.dll, Mapi.dll
	calls Microsoft Exchange.
	
	RESOLUTION
	==========
	
	To use the Send command in a 16-bit program with the 16-bit mail program
	installed on your computer, replace the Windows 95 version of the Mapi.dll file
	with the 16-bit mail program's version. Note that reinstalling the 16-bit mail
	program does not resolve the issue because the Windows 95 version of the
	Mapi.dll file is newer and is not replaced.
	
	To replace the Windows 95 version of the Mapi.dll file, follow these steps:
	
	1. Rename the Mapi.dll file in the Windows\System folder to Mapi.w95.
	
	  NOTE: The Windows 95 version of the Mapi.dll file is 431K in size with a date
	  of 7/11/95.
	
	2. Obtain a copy of the 16-bit mail program's version of the Mapi.dll file and
	  copy it to the Windows\System folder.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
