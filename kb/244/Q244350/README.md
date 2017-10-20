---
layout: page
title: "Q244350: Memory Leaks in &quot;Drsd&quot; Tag When Printing to Generic Text Printer"
permalink: /kb/244/Q244350/
---

## Q244350: Memory Leaks in &quot;Drsd&quot; Tag When Printing to Generic Text Printer

{% raw %}

	Article: Q244350
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2.0,3.0,4.0; winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbprint kbtool kbWinNT400PreSP7Fixkbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	- Microsoft SNA Server, versions 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Over a period of time, the Windows NT Spooler service stops responding (hangs)
	because of a lack of memory. Also, if you monitor Pool Paged Bytes with
	Performance Monitor, the counter shows an increasing amount of paged bytes until
	the Windows NT Spooler service stops responding.
	
	CAUSE
	=====
	
	This problem occurs because of a problem in the Windows NT Graphics Device
	Interface that causes a memory leak when printing to the Generic Text print
	driver. The problem is most frequently observed when printing with SNA Server,
	but the leak may also occur when printing with legacy programs that use the
	Escape API to send data directly to the Generic Text print driver.
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  10/25/99  05:12 PM             73,072  RASDD.DLL     i386
	  10/25/99  05:11 PM            129,456  RASDD.DLL     Alpha
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbtool kbWinNT400PreSP7Fix kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbWinNTW400sp6 kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ400
	Version           : WINDOWS:2.0,3.0,4.0; winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
