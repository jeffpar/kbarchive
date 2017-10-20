---
layout: page
title: "Q294345: Registry Hive Fragmentation Behavior Is Not Configurable"
permalink: /kb/294/Q294345/
---

## Q294345: Registry Hive Fragmentation Behavior Is Not Configurable

{% raw %}

	Article: Q294345
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following Microsoft Knowledge Base article describes a registry entry and
	hotfix that you can use to configure the Registry Hive Cell Size algorithm:
	
	  Q283217 Registry Hive Fragmentation Fix May Cause Excessive SAM Registry Hive
	  Size
	
	This fix does not allow you to switch to the new behavior; it only uses the
	original behavior even if the registry key is changed. By default, this fix
	enables the original behavior.
	
	CAUSE
	=====
	
	The variable that is used to control this behavior is always set to zero,
	regardless of the registry value.
	
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
	
	  Date        Time   Size     File name     Platform
	  --------------------------------------------------
	  06/04/2001  11:11  957,056  Ntkrnlmp.exe  Intel
	  06/04/2001  11:11  936,832  Ntoskrnl.exe  Intel
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
