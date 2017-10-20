---
layout: page
title: "Q304742: Event ID: 6008 After Remote Shutdown with an Active Screensaver"
permalink: /kb/304/Q304742/
---

## Q304742: Event ID: 6008 After Remote Shutdown with an Active Screensaver

{% raw %}

	Article: Q304742
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you shut down your computer remotely (by using the Shutdown.exe tool or a
	similar tool) while a password-protected screensaver is active, you may receive
	the following Event 6008 entry in the Event log:
	
	  The previous system shutdown at time on date was unexpected.
	
	CAUSE
	=====
	
	This problem can occur if Winlogon does not log off the user, and because of
	this, the screensaver continues. After this occurs, a proper shutdown is not
	initiated.
	
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
	
	  Date         Time     Size     File name    Platform 
	  -----------------------------------------------------
	  11/01/2001  08:59a    343,824  Rpcrt4.dll    I386
	  11/02/2001  06:27a    192,784  Winlogon.exe  Alpha
	  10/16/2001  10:19a    602,896  Rpcrt4.dll    I386
	  11/02/2001  06:22a    275,728  Winlogon.exe  Alpha
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, disable the password-protected screensaver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
