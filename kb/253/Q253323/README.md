---
layout: page
title: "Q253323: Y2K: Where.exe Displays Incorrect Date After 1999"
permalink: /kb/253/Q253323/
---

## Q253323: Y2K: Where.exe Displays Incorrect Date After 1999

{% raw %}

	Article: Q253323
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 Server Resource Kit ISBN 1-57231-805-8 
	- MSPRESS Microsoft Windows 2000 Professional Resource Kit ISBN 1-57231-808-2 
	- MSPRESS Microsoft BackOffice Small Business Server 4.5 Resource Kit ISBN 0-7356-0577-7 
	- MSPRESS Microsoft Windows 98 Resource Kit ISBN 1-57231-644-6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Where.exe, the date may be displayed incorrectly after December 31,
	1999. For example: the year 2000 will display as 100.
	
	RESOLUTION
	==========
	
	Microsoft has released a fix for this problem at the following location:
	
	x86 version: ftp://ftp.microsoft.com/reskit/y2kfix/x86/where.exe
	
	MORE INFORMATION
	================
	
	Steps to reproduce the problem:
	
	1. Set the system date to 1/15/2000.
	
	2. Create a file called C:\DIR1\DIR2\TEST.XYZ.
	
	3. From the command line, run the following command:
	
	WHERE /RT . TEST.XYZ
	
	4. Where.exe will return a message similar to the following:
	
	324 1-15-100 2:22p C:\dir1\dir2\test.xyz
	
	Additional query words: RKBOOK W2K TOOLS RESKIT YEAR 2000 Y2K RESOURCE KIT
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
