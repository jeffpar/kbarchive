---
layout: page
title: "Q138406: Cannot Access Multiple Panasonic CD-5xx Series CD-ROM Drives"
permalink: /kb/138/Q138406/
---

## Q138406: Cannot Access Multiple Panasonic CD-5xx Series CD-ROM Drives

{% raw %}

	Article: Q138406
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure multiple Panasonic CD-5xx series CD-ROM drives using the
	Windows NT 3.51 MKECR5XX.SYS CD-ROM driver, you can only access one Panasonic
	CD-ROM drive.
	
	NOTE: The driver allows you to access up to four CD-ROM drives under Windows NT
	3.5.
	
	WORKAROUND
	==========
	
	To work around this problem, copy the MKECR5XX.SYS driver file from the \I386
	directory on the Windows NT 3.5 compact disc to the Windows NT 3.51
	%SystemRoot%\SYSTEM32\DRIVERS directory. Shut down and restart Windows NT 3.51
	and access the CD-ROM drives.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt video adapter
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
