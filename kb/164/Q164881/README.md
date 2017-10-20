---
layout: page
title: "Q164881: PERL 5 May Cause a Dr. Watson Access Violation in Inetinfo.exe"
permalink: /kb/164/Q164881/
---

## Q164881: PERL 5 May Cause a Dr. Watson Access Violation in Inetinfo.exe

{% raw %}

	Article: Q164881
	Product(s): Internet Information Server
	Version(s): WinNT:2.0,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a PERL 5 script, you may get the following Dr. Watson error
	message:
	
	  Exception Access Violation (0x00000005), address 0x77e77dc9.
	
	CAUSE
	=====
	
	You have three or more "%s" entries after the value .pl in the following key:
	
	  Hkey_local_machine\system\currentcontrolset\services\W3Svc\ 
	  parameters\Script Map
	
	WORKAROUND
	==========
	
	You may use up to two "%s" entries after Perl.exe, as in .pl: REG_SZ:
	C:\perl\bin\perl.exe %s %s.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	After you install PERL for WIN32, you will have to edit the registry to add the
	script map entries under the following key:
	
	  Hkey_local_machine\system\currentcontrolset\services\W3Svc\ 
	  parameters\Script Map
	
	The value is .pl: REG_SZ: C:\perl\bin\perl.exe %s.
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : WinNT:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
