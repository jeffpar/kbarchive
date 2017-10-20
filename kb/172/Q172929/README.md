---
layout: page
title: "Q172929: Windows 95 Print Jobs Disappear from Windows NT Print Queue"
permalink: /kb/172/Q172929/
---

## Q172929: Windows 95 Print Jobs Disappear from Windows NT Print Queue

{% raw %}

	Article: Q172929
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbprint
	Last Modified: 03-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows Millennium Edition 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your attempts to print to a Windows NT 4.0 or Windows 2000 printer from a
	Windows 95, Windows 98, or Windows Millennium (Me) workstation fail. No error is
	logged on the Windows NT or Windows 2000 Server, or on the Windows 95, Windows
	98, or Windows Me client. The Windows NT or Windows 2000 printer receives the
	job but the job disappears. The print device never receives the job and does not
	show an error.
	
	CAUSE
	=====
	
	The Windows NT or Windows 2000 print processor may be set to "NT EMF 1.003."
	
	To verify this, perform the following steps:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click on the printer, and then click Properties.
	
	3. On the General tab, and then click Print Processor.
	
	  NOTE: In Windows 2000 this button is located on the Advanced tab.
	
	4. Observe the Default Datatype (the highlighted item).
	
	If the item is NT EMF 1.003, Windows 95 clients exhibit the above problem.
	
	RESOLUTION
	==========
	
	Set the default Datatype to RAW by using the steps outlined above. Windows 95
	clients should then be able to print.
	
	STATUS
	======
	
	Microsoft has confirmed this to be by design.
	
	
	MORE INFORMATION
	================
	
	Windows NT 95 EMF is only used when jobs are printed locally. All remote print
	jobs are spooled using the RAW datatype.
	
	Additional query words: meta file prodnt queue
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : :2000,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
