---
layout: page
title: "Q225095: Spooler Rollup Fix to Address Memory Leaks"
permalink: /kb/225/Q225095/
---

## Q225095: Spooler Rollup Fix to Address Memory Leaks

{% raw %}

	Article: Q225095
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The spooler service may leak private bytes and handles.
	
	CAUSE
	=====
	
	This rollup fix was backported from fixes made in the Windows NT 4.0 version.
	For additional information about Win32spl.dll, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q224345 Spooler Service May Leak Private Bytes Attempting to Close a Remote
	  Printer
	
	For additional information about Lprmon.dll, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q223791 Spooler Service LPR Monitor Leaks Memory With Each Event 2004 Error
	
	For additional information about Localspl.dll, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q223863 Spooler Service May Leak Memory Attempting to Close Print Processor
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time     Size      File name      Platform
	  -----------------------------------------------------
	  03/31/99   08:00P   145,168   Localspl.dll   x86
	  03/17/99   06:33P    21,776   Lprmon.dll     x86
	  03/11/99   05:21P    79,120   Win32spl.dll   x86
	
	
	
	NOTE: The server must be running Windows NT 4.0 Service Pack 4 or later to
	install these hotfixes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	The following article refers to an RPC hotfix that is not specific to the
	Spooler service, but should should also be considered.
	
	  Q225094 RPC Named Pipe Server Application Encounters Invalid Handle
	  Exceptions
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : :4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
