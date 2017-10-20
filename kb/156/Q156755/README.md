---
layout: page
title: "Q156755: Unable to Use Standard Program I/O in PERL Script"
permalink: /kb/156/Q156755/
---

## Q156755: Unable to Use Standard Program I/O in PERL Script

{% raw %}

	Article: Q156755
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to use standard programming I/O methods to pass arguments and/or
	data to and from external command or separate PERL Scripts that are spawned from
	a parent script.
	
	CAUSE
	=====
	
	When you spawn a script or external command from a CGI application, it is
	created in a separate process. By default Microsoft Internet Information Server
	(IIS) 2.0 does not create a console and does not support standard I/O
	redirection between processes.
	
	RESOLUTION
	==========
	
	To resolve the problem, edit the registry as described below.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and locate the following registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	     \SYSTEM\CurrentControlSet\Services\W3SVC\Parameters
	
	2. Click Add Value on the Edit menu.
	
	3. Type the following:
	
	     Value Name: CreateProcessWithNewConsole
	     Data Type: REG_DWORD
	     DateValue = 1
	
	  NOTE: Creating a new console for each CGI script has serious performance
	  implications and should not be done unless slower performance is acceptable.
	
	
	MORE INFORMATION
	================
	
	For additional information about supported registry parameters, please see the
	Online documentation for IIS 2.0. Go to the product documentation link and
	choose Chapter 10 from the contents page then Service Specific Registry Entries
	with Common Names. Search on CreateProcessWithNewConsole.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis200
	Version           : :2.0
	
	=============================================================================
	

{% endraw %}
