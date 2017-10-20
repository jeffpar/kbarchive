---
layout: page
title: "Q251274: Error When Attempting to Install Program Using Windows Installer"
permalink: /kb/251/Q251274/
---

## Q251274: Error When Attempting to Install Program Using Windows Installer

{% raw %}

	Article: Q251274
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install a product on a computer running Windows NT 4.0 and
	Windows Installer starts, you may receive one of the following error messages:
	
	  
	
	- The Windows Installer service failed to start. Contact your support
	  personnel.
	
	- Error 1631: The Windows Installer service failed to start. Contact your
	  support personnel.
	
	- Internal Error 2755: Please contact product support for assistance.
	
	After you receive the error message, the installation quits.
	
	CAUSE
	=====
	
	This behavior can occur when you try to install a program that is installed
	using Windows Installer. The following registry key contains a value of data
	type REG_EXPAND_SZ, and the string is null:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session
	  Manager\Environment
	
	Userenv.dll returns an error message when it tries to process the value, and
	Windows Installer quits. The following example shows a null value:
	
	  Value Name: CLASSPATH
	  Data Type: REG_EXPAND_SZ
	  String:
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time       Size      File name     Platform
	  ------------------------------------------------------
	  1/18/2000  3:47p      76,048    Userenv.dll   Intel
	  1/18/2000  3:47p     123,664    Userenv.dll   Alpha
	
	
	
	WORKAROUND
	==========
	
	To work around this behavior, remove null environment variables before you
	install the program.
	
	NOTE: The potential impact of removing such variable is unknown at this time.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words: winnt of20 o2k office2000 environment variables installer setup error errmsg
	
	======================================================================
	Keywords          : kbenv kberrmsg kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : :4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
