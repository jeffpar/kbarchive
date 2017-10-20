---
layout: page
title: "Q140988: BUG: Negative File Size Replacing File Over 2 Gigabytes"
permalink: /kb/140/Q140988/
---

## Q140988: BUG: Negative File Size Replacing File Over 2 Gigabytes

{% raw %}

	Article: Q140988
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you replace a two-gigabyte or larger file from within File Manager, the
	"Confirm File Replace" dialog box shows a negative value rather than the
	expected value of the file. For example, the dialog box may show:
	
	  Replace File:     C:\TEMP\TEXT.TXT
	                              -2147483648 bytes 1/1/80 12:00:00 AM
	
	  With File:        C:\TEMP2\TEXT.TXT
	                               1024 bytes 1/1/80 12:00:00 AM
	
	When the actual file sizes are:
	
	  C:\TEMP\TEXT.TXT   2147483648 bytes
	  C:\TEMP2\TEXT.TXT  1024 bytes
	
	RESOLUTION
	==========
	
	The file is correctly replaced without error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: minus sign copy over
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
