---
layout: page
title: "Q305809: Performance Monitor Processor Counter Explanation Is Unclear"
permalink: /kb/305/Q305809/
---

## Q305809: Performance Monitor Processor Counter Explanation Is Unclear

{% raw %}

	Article: Q305809
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool kbdocerr
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 4.0 Performance Monitor (Perfmon4.exe) Help states that the Processor
	- %DPC Time is "a component of % Privileged Time because DPCs are executed in
	privileged mode. They are counted separately and are not a component of the
	interrupt counters." This implies that the %Privilege Time does not include %DPC
	Time.
	
	MORE INFORMATION
	================
	
	The Performance Monitor Processor Counter explanation may be difficult to
	interpret. Note that %DPC time is included with %Privileged Time and is also
	counted separately. The is also true for %Interrupt Time. %Processor Time equals
	%User time plus %Privileged Time.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbdocerr 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
