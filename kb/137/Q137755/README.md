---
layout: page
title: "Q137755: No More Than 16 MB of Memory Reported on Some IBM PS/2 Models"
permalink: /kb/137/Q137755/
---

## Q137755: No More Than 16 MB of Memory Reported on Some IBM PS/2 Models

{% raw %}

	Article: Q137755
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Windows 95 on one of the following computers with more than
	16 MB of RAM, Windows 95 reports that only 16 MB of RAM are present:
	
	- IBM PS/2 Model 77
	
	- IBM PS/2 Model 90
	
	- IBM PS/2 Model 95
	
	- IBM PS/Note 425 model 2618-M40
	
	CAUSE
	=====
	
	These computers use a nonstandard API for reporting memory in excess of 16 MB
	that is not supported by Windows 95.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	The computers listed in this article use INT 15 ax=c700h to report memory above
	16 MB. (Other IBM PS/2 Microchannel computers may use INT 15 ax=E881.) The
	updated version of Himem.sys accepts a /P switch that causes HIMEM to use this
	API to detect memory in excess of 16 MB. Without the /P switch, the updated
	HIMEM does not use this API, and functions the same as the shipping version of
	HIMEM.
	
	The new version of Himem.sys reports itself as version 3.95, the same as the
	shipping version.
	
	Additional query words: W95QFE
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
