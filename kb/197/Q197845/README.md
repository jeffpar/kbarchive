---
layout: page
title: "Q197845: COMPAQ Server with System Disk on SMART-2 Array May Hang"
permalink: /kb/197/Q197845/
---

## Q197845: COMPAQ Server with System Disk on SMART-2 Array May Hang

{% raw %}

	Article: Q197845
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Service Pack 4 (SP4) on an NTFS partition with a SMART-2
	array controller, the system may stop responding (hang). This happens when the
	system starts and the following blue screen is displayed during the loading
	phase of the drivers:
	
	  Microsoft (R) Windows NT (TM) version 4.0 (Build 1381 : service pack 4) x
	  System processor [x MB Memory] ....
	
	CAUSE
	=====
	
	This problem is because of an outdated SMART-2 firmware version 1.36 (dated 12
	June 1996).
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade SMART-2 array firmware with version 3.08 (dated
	13 Nov 1998) or later, prior to upgrading to SP4. You can get the latest
	firmware version from the following address:
	
	  ftp://ftp.compaq.com/pub/softpaq/sp8501-9000/sp8560.exe
	  Compaq Options ROMPaq firmware upgrade diskette ver 2.49 Rev a
	
	Also, verify the latest Compaq SSD for Windows NT is installed on your system,
	prior to upgrading to SP4. The current SSD version is 2.10 Rev.A:
	
	  http://www.compaq.com/support/files/server/softpaqs/WINNT/NTSSD400.html
	  Compaq Support Software for Microsoft Windows NT 4.00
	
	MORE INFORMATION
	================
	
	This problem was seen using the SMART-2 firmware rev. 1.36.(12-Jun-96) The
	problem was fixed using the SMART-2 firmware rev. 3.08 (13-Nov-98) Intermediate
	SMART-2 firmware versions were not tested.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: SP4 COMPAQ SMART array
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
