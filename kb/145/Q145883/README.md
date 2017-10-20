---
layout: page
title: "Q145883: Debug Symbols and Expndsym.cmd on Far East NT Products"
permalink: /kb/145/Q145883/
---

## Q145883: Debug Symbols and Expndsym.cmd on Far East NT Products

{% raw %}

	Article: Q145883
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Expndsym.cmd file is only available on the following CDs:
	
	- Simplified Chinese Windows NT Server 4.0
	
	- Traditional Chinese Windows NT Server 4.0
	
	- Korean Windows NT Server 4.0
	
	MORE INFORMATION
	================
	
	The purpose of Expndsym.cmd is to expand the compressed debug symbol files to
	the Winnt\System32 directory. In the Windows NT traditional Chinese, simplified
	Chinese, and Korean compact disks, only server PPC debug symbol files are
	compressed. Windows NT Workstation CDs do not have compressed symbol files,
	thus, they do not need Expndsym.cmd. The U.S. version of Windows NT Workstation
	and Windows NT Server CDs have all symbol files compressed, and Expndsym.cmd is
	on both CDs.
	
	The software development kit (SDK) Setup file copies debug symbols from retail
	CDs to the hard disk drive. The SDK Setup file is able to expand and copy. If
	you do not have the SDK, you can copy the files manually.
	
	Additional query words: debug symbol
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	

{% endraw %}
