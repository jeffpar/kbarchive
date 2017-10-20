---
layout: page
title: "Q140713: COPYEMBED From AutoCAD LT Works Incorrectly"
permalink: /kb/140/Q140713/
---

## Q140713: COPYEMBED From AutoCAD LT Works Incorrectly

{% raw %}

	Article: Q140713
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Using AutoCAD LT or AutoCAD for Windows, when pasting into another Windows
	application the pasted image may not be proportional to the image that was
	copied from AutoCAD. This works correctly using Windows NT 3.1 or Windows 3.11.
	
	CAUSE
	=====
	
	The COPYEMBED command does not function properly under Windows NT 3.5 and 3.51.
	The COPYEMBED command is used to paste an object from AutoCAD to other Windows
	applications. However, under Windows NT 3.5 and 3.51, when a COPYEMBED command
	is executed, or the Copy Embed option is chosen from the Edit menu, the entire
	work area is copied, instead of the selected area.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	- Use the COPYIMAGE command, or Copy Image from the Edit menu, to copy a bitmap
	  image of the object, but not the object itself, like COPYEMBED does.
	
	  -or-
	
	- Upgrade to the latest version of AutoCAD.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
