---
layout: page
title: "Q140504: Err Msg: Error Happened While Writing to Msbatch.inf"
permalink: /kb/140/Q140504/
---

## Q140504: Err Msg: Error Happened While Writing to Msbatch.inf

{% raw %}

	Article: Q140504
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
	
	When you are creating a server-based Windows 95 Setup folder on a network server
	using Netsetup.exe, you may receive the following error message:
	
	  Error happened while writing one or more entries to Msbatch.inf. It is not
	  possible to continue the Server-based Windows 95 Setup install process.
	
	CAUSE
	=====
	
	This error can occur when the files already exist in the destination folder due
	to a previous installation using Netsetup.exe.
	
	RESOLUTION
	==========
	
	Remove all files from the server folder and perform the server-based Windows 95
	Setup process again.
	
	MORE INFORMATION
	================
	
	For additional information about creating a server-based Windows 95 Setup,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q133221 Installing a Server-based Windows 95 Setup
	
	Note that Netsetup.exe is included only in the CD-ROM version of Windows 95. It
	is not included in the floppy disk version of Windows 95.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
