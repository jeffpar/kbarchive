---
layout: page
title: "Q159931: Error 5 Opening File Using DataEase"
permalink: /kb/159/Q159931/
---

## Q159931: Error 5 Opening File Using DataEase

{% raw %}

	Article: Q159931
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a version of the DOS application DataEase 4.5 that is shared from a
	Windows NT partition, the following message is received at the client's DOS
	prompt:
	
	  Error 5 opening file.
	
	The error message references the file Denetwrk.ovl.
	
	CAUSE
	=====
	
	The user is limited to Read permissions to the file, directory, or share that
	contains the file.
	
	RESOLUTION
	==========
	
	At least change permissions are required to access the DataEase files on the
	Windows NT Server computer.
	
	Additional query words: dataease
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51
	
	=============================================================================
	

{% endraw %}
