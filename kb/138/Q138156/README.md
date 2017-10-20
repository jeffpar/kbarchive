---
layout: page
title: "Q138156: Problems Setting Up Carmen Sandiego from CD-ROM"
permalink: /kb/138/Q138156/
---

## Q138156: Problems Setting Up Carmen Sandiego from CD-ROM

{% raw %}

	Article: Q138156
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to set up the following programs from a CD-ROM, the Make Program
	Accessible Under Windows option does not work:
	
	- Where in the World is Carmen Sandiego
	
	- Where in the USA is Carmen Sandiego
	
	- Where in Time is Carmen Sandiego
	
	CAUSE
	=====
	
	The Setup program for these programs checks the System.ini file for the
	"SHELL=PROGMAN.EXE" line when you use the Make Program Accessible Under Windows
	option. In Windows 95, this line has changed to "SHELL=EXPLORER.EXE," causing
	the Setup program to fail.
	
	RESOLUTION
	==========
	
	Do not use the Make Program Accessible Under Windows option. After you install
	one of these programs, run it by double-clicking it in Windows Explorer or My
	Computer, or from an MS-DOS prompt.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
