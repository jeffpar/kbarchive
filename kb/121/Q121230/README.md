---
layout: page
title: "Q121230: Maximizer for Windows Cannot Find Databases"
permalink: /kb/121/Q121230/
---

## Q121230: Maximizer for Windows Cannot Find Databases

{% raw %}

	Article: Q121230
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Maximizer for Windows 1.1 in Windows 95, it cannot find its
	databases.
	
	CAUSE
	=====
	
	Maximizer for Windows does not recognize network paths that use the universal
	naming convention (UNC).
	
	NOTE: The following example illustrates the UNC. The UNC path for a shared
	directory called SHARE on a server called TEST is \\Test\Share.
	
	WORKAROUND
	==========
	
	You can work around this problem with the following steps:
	
	1. Create a persistent connection to the machine that contains the Maximizer
	  databases.
	
	2. Open the MAXWIN.INI file and change
	
	  [Directory]
	  DBases=\\<MachineName>\<ShareName>\<PathName>
	
	  to
	
	  [Directory]
	  DBases=<x>:\<path to the Maximizer databases>
	
	  where <x>: is the drive letter specified in step 1.
	
	MORE INFORMATION
	================
	
	Although this article discusses Maximizer for Windows, the workaround provided
	can also be used for other applications that do not recognize UNC names.
	However, it is helpful only if the application in question allows you to
	designate the path (in an .INI file for example).
	
	Maximizer for Windows is manufactured by Richmond Technologies Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	For more information about Maximizer for Windows, contact Richmond Technologies
	at (604) 299-2121.
	
	Additional query words: 3rdparty can't db
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
