---
layout: page
title: "Q139671: Error Message: EMM386 Has Detected Error #6"
permalink: /kb/139/Q139671/
---

## Q139671: Error Message: EMM386 Has Detected Error #6

{% raw %}

	Article: Q139671
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
	
	When you are running Windows 95 Setup, you may receive the following error
	message when Setup is finished and you click Finish:
	
	  EMM386 has detected error #6 in an application at memory address 00:0bc6. To
	  minimize the chance of data loss, EMM386 has halted your computer.
	
	CAUSE
	=====
	
	This is a problem with the version of Emm386.exe included with earlier versions
	of Windows.
	
	RESOLUTION
	==========
	
	Press ENTER to continue. When your computer restarts, Setup will finish
	normally.
	
	MORE INFORMATION
	================
	
	Setup replaces the earlier version of Emm386.exe during the setup process. When
	your computer restarts (after you receive the error message stated above), the
	new version of Emm386.exe is loaded into memory and the error does not reoccur.
	
	Additional query words: blue screen
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
