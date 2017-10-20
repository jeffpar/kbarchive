---
layout: page
title: "Q94302: WFWG May Hang if InDOSPolling=Yes with an Intel EtherExpress"
permalink: /kb/094/Q94302/
---

## Q94302: WFWG May Hang if InDOSPolling=Yes with an Intel EtherExpress

{% raw %}

	Article: Q94302
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If InDOSPolling=Yes is present in the SYSTEM.INI file and an Intel EtherExpress
	16 network interface card (NIC) is being used in the machine, Windows for
	Workgroups may stop responding (hang) for several minutes or may lock up when
	trying to access network drives from any program.
	
	
	CAUSE
	=====
	
	InDOSPolling prevents Windows for Workgroups from running other applications
	when memory-resident software has the InDOS flag set.
	
	WORKAROUND
	==========
	
	The only workaround for this problem is to remove the line from the [386Enh]
	section of the SYSTEM.INI file. Use a text editor (such as Notepad) to delete
	the line.
	
	For more information on InDOSPolling, query on the following words in the
	Microsoft Knowledge Base:
	
	  indospolling and system.ini
	
	Additional query words: 3.10 freeze crash lockup lock up
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
