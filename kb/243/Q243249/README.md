---
layout: page
title: "Q243249: &quot;STOP 0x00000024&quot; Error Message Because of NTFS Timing Issue"
permalink: /kb/243/Q243249/
---

## Q243249: &quot;STOP 0x00000024&quot; Error Message Because of NTFS Timing Issue

{% raw %}

	Article: Q243249
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message on a blue screen in Windows NT
	Server 4.0:
	
	  Stop 0x00000024 (0x00190201, 0xf1525364, 0xf15251a0, 0x8019fdfd)
	
	Note that not all "STOP 0x00000024" error messages are caused by the problem
	described in this article. Also, the parameters may vary depending on the system
	configuration.
	
	CAUSE
	=====
	
	This error message can be caused by a synchronization problem in the NTFS file
	system that causes a pointer to be freed while it is still in use.
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  10/06/1999  05:48p             363,568 Ntfs.sys      x86
	  10/06/1999  05:47p             556,176 Ntfs.sys      Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
