---
layout: page
title: "Q321209: PRB: Start Menu Hangs When You Install File-Monitoring Utilities"
permalink: /kb/321/Q321209/
---

## Q321209: PRB: Start Menu Hangs When You Install File-Monitoring Utilities

{% raw %}

	Article: Q321209
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6
	Operating System(s): 
	Keyword(s): kbIFS kbDSupport kbGrpDSNTDDK
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install certain file-monitoring utilities, such as antivirus software,
	on a Windows NT 4.0 Service Pack 6 (SP6)-based computer, the Start menu may stop
	responding (hang).
	
	CAUSE
	=====
	
	The Start menu includes link files (.lnk) that act as shortcuts to programs.
	Some file-scanning programs may try to set the Last Access Time (LAT) of those
	.lnk files, which causes the Start menu to stop responding.
	
	RESOLUTION
	==========
	
	To resolve this issue, turn off .lnk file scanning in the program or utility in
	question, if possible. Or, you can disable the LAT feature. If these workarounds
	are not suitable, consider upgrading to a later version of Microsoft Windows
	because this behavior is probably caused by a limitation in Windows NT 4.0.
	
	STATUS
	======
	
	This is a known issue.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbIFS kbDSupport kbGrpDSNTDDK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp6
	Version           : :4.0 SP6
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
