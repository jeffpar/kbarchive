---
layout: page
title: "Q321320: SMSINST: Installer v2.0.148.00 repackage changes registry entry"
permalink: /kb/321/Q321320/
---

## Q321320: SMSINST: Installer v2.0.148.00 repackage changes registry entry

{% raw %}

	Article: Q321320
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 04-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Systems Management Server (SMS) Installer version 2.0.148.00 repackage changes
	registry entry from "%1" to <SystemRoot>. This may prevent software from
	running.
	
	WORKAROUND
	==========
	
	To work around this problem, put a "dummy" variable name in the second variable
	of the Parse String script item.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you repackage, compile, and run a program with SMS Installer 2.0148.00, a
	registry entry value (the registry path may vary from one program to another)
	under HKEY_CLASS_ROOT\APP.Document\shell\open\command (or DDEEXEC) changes from
	"%1" to "\WINNT". After this registry entry is changed, running a program file
	from anywhere on the computer displays the following error message:
	
	  There was an error opening this document. The file does not exist.
	
	This problem occurs in the Parse String script item, which is part of the default
	script that is created when you use Installation Expert. The string that is
	parsed is the WIN variable. This is typically similar to C:\WINNT. The line is
	split at the colon (:); the first part of the string (such as C) is placed in
	the SYSDRIVE variable. Because there is no variable defined for the second part
	of the string, it should be discarded, but Installer creates a NULL variable
	that is equal to WINNT. Therefore, if %% is used later in the script to
	reference the percent (%) sign, the NULL variable is references instead. Because
	the NULL variable has been set to WINNT in the Parse String script item, %% is
	evaluated as WINNT.
	
	Additional query words: prodsms smsinst systemroot
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
