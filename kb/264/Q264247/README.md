---
layout: page
title: "Q264247: &quot;Stop 0x0a&quot; Error When Using the QLogic Fibre Channel Driver"
permalink: /kb/264/Q264247/
---

## Q264247: &quot;Stop 0x0a&quot; Error When Using the QLogic Fibre Channel Driver

{% raw %}

	Article: Q264247
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under heavy system load, a multiprocessor computer using the QLogic Fibre
	Channel disk array controller may experience "Stop 0x0a" error messages
	involving the Scsiport.sys and Ql2100.sys drivers.
	
	NOTE: The observed frequency of this behavior is once/twice per week of system
	stress.
	
	CAUSE
	=====
	
	The memory becomes corrupted when the virtual address that is returned by the
	Scsiport.sys driver overlaps the QLogic PhysicalCommonBuffer.
	
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date        Time    Size    File name     Platform
	  --------------------------------------------------
	  05-15-2000  02:23p  35,568  Scsiport.sys  x86
	  05-15-2000  02:22p  56,592  Scsiport.sys  Alpha
	
	
	
	The problem is fixed in Scsiport.sys, which no longer returns a virtual address
	that overlaps the QLogic CommonBuffer area.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
