---
layout: page
title: "Q246365: Cannot View the Exit Status of an Interix Process from Win32"
permalink: /kb/246/Q246365/
---

## Q246365: Cannot View the Exit Status of an Interix Process from Win32

{% raw %}

	Article: Q246365
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot view the exit status of an Interix process from Win32.
	
	CAUSE
	=====
	
	The exit status that is available to a Win32 process is generated from Posix.exe
	or Psxrun.exe. Posix.exe and Psxrun.exe are programs that communicate with the
	subsystem, and do not return the exit code of a subsystem.
	
	STATUS
	======
	
	This feature is under review and will be considered for inclusion in a future
	release.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
