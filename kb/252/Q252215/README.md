---
layout: page
title: "Q252215: SMART Capability Available for Released Version of Windows 95"
permalink: /kb/252/Q252215/
---

## Q252215: SMART Capability Available for Released Version of Windows 95

{% raw %}

	Article: Q252215
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kbenv win95kbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a program on your Windows 95-based computer, the program may be
	unable to query the "Self Monitoring, Analysis and Reporting Technology" (SMART)
	capabilities of any or your Integrated Drive Electronics (IDE) drives when you
	are using Microsoft-supplied drivers.
	
	CAUSE
	=====
	
	This problem can occur if you are running the released version of Windows 95
	instead of Windows 95 OEM Service Release 2 or later. The component to query
	SMART capabilities of IDE drives was first included with Windows 95 OEM Service
	Release 2.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version    Size    File name
	  ---------------------------------------------------
	  03/06/1996  08:18p  4.00.954   18,518  Voltrack.vxd
	  08/24/1996  02:11p  4.00.1111  17,982  Smartvsd.vxd
	  08/25/1997  03:12p  4.00.1116  24,426  Esdi_506.pdr
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This hotfix includes the files that are required for SMART support, and these
	files are listed in the following Microsoft Knowledge Base article:
	
	  Q154435 Windows 95 IDE Support for SMART, DMA, and ATAPI Tape Drives
	
	For additional information about SMART capabilities, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q208048 SAMPLE: SmartApp.exe Accesses SMART Stats in IDE Drives
	
	Additional query words: original equipment manufacturer
	
	======================================================================
	Keywords          : kbenv win95 kbbuglist kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
