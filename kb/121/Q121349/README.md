---
layout: page
title: "Q121349: EGA3.CPI File Not Included with MS-DOS 6.22 Upgrade 720K Disks"
permalink: /kb/121/Q121349/
---

## Q121349: EGA3.CPI File Not Included with MS-DOS 6.22 Upgrade 720K Disks

{% raw %}

	Article: Q121349
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The EGA3.CPI file is not included with the MS-DOS 6.22 Upgrade on 3.5-inch
	720-kilobyte (K) fulfillment disks.
	
	RESOLUTION
	==========
	
	The EGA3.CPI file is included with all other formats of MS-DOS 6.22 Upgrade and
	StepUp disks. If you need this file, you must obtain it from another disk set
	(5.25-inch 360K, 5.25-inch 1.2-megabyte [MB], or 3.5-inch 1.44 MB). For
	information about obtaining a different disk set, call the Microsoft Sales
	Information Center at (800) 426-9400.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS version 6.22. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	MS-DOS 6.22 includes three code-page information files (.CPI): EGA.CPI,
	EGA2.CPI, and EGA3.CPI. Each of these files contains separate information for
	different code pages that work in conjunction with the COUNTRY.SYS, DISPLAY.SYS,
	and KEYBRD2.SYS drivers. The EGA3.CPI contains the following information:
	
	  437 - United States
	  850 - Multilingual (Latin I)
	  852 - Slavic/Eastern European (Latin II)
	  855 - Cyrillic I
	  866 - Russian (Cyrillic II)
	
	For more information about code pages, query on the following words in the
	Microsoft Knowledge Base:
	
	  "code pages" (without the quotation marks) and "country.sys" (without the
	  quotation marks)
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

{% endraw %}
