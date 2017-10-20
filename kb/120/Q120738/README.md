---
layout: page
title: "Q120738: &quot;Routine Not Found&quot; Message Box While Viewing Help File"
permalink: /kb/120/Q120738/
---

## Q120738: &quot;Routine Not Found&quot; Message Box While Viewing Help File

{% raw %}

	Article: Q120738
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are viewing a help file, the "Routine Not Found" message box appears.
	
	CAUSE
	=====
	
	The help file invokes the RemoveAccelerator() macro, which is not implemented in
	Windows NT 3.1 or 3.5.
	
	The RemoveAccelerator() macro, as documented in the Windows Help Authoring Guide,
	is not available on Windows NT 3.1 or 3.5. An accelerator key added using
	AddAccelerator() cannot be removed. Invoking RemoveAccelerator() in your help
	file brings up the "Routine Not Found" message box.
	
	WORKAROUND
	==========
	
	Do not invoke the RemoveAccelerator() macro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	

{% endraw %}
