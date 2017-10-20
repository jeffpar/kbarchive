---
layout: page
title: "Q74681: Printer CPI Files Do Not Support CP 852"
permalink: /kb/074/Q74681/
---

## Q74681: Printer CPI Files Do Not Support CP 852

{% raw %}

	Article: Q74681
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following message when you attempt to prepare codepage 852
	for the printer:
	
	  Device or codepage missing from font file.
	
	CAUSE
	=====
	
	MS-DOS version 5.0 introduced support for codepage 852. The codepage information
	(.CPI) files for the display device (EGA.CPI and LCD.CPI) were updated to
	support this codepage. The codepage information files for the printers
	(4201.CPI, 4208.CPI, and 5202.CPI) were not updated to support this codepage.
	Therefore, you receive the error message when you attempt to prepare the
	codepage for the printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a limitation of MS-DOS version 5.0. This
	feature is under review and will be considered for inclusion in a future release
	of MS-DOS.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
