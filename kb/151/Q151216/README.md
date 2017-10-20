---
layout: page
title: "Q151216: NTVDM May Leak Memory When Opening/Closing COMM Ports"
permalink: /kb/151/Q151216/
---

## Q151216: NTVDM May Leak Memory When Opening/Closing COMM Ports

{% raw %}

	Article: Q151216
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A memory leak occurs in the Windows NT Virtual DOS Machine (NTVDM) used by
	Windows 16-bit (Win 16) applications when opening and closing COMM ports on
	Windows NT 3.51.
	
	CAUSE
	=====
	
	The Windows on Windows (WOW) support code for Win 16 applications allocates a
	write buffer whenever a Win 16 application opens a COMM port. The WOW was not
	releasing the write buffer when the Win 16 application closed the COMM port.
	
	RESOLUTION
	==========
	
	The WOW has been modified to release the write buffer when a COMM port is
	closed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
