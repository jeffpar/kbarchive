---
layout: page
title: "Q255671: Unlocking Workstation with Invalid Password Increments Twice"
permalink: /kb/255/Q255671/
---

## Q255671: Unlocking Workstation with Invalid Password Increments Twice

{% raw %}

	Article: Q255671
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 4 to a workstation or server,
	attempts to unlock the computer by using a valid user name and an invalid
	password can cause the account lockout count for the account being used to be
	incremented by two.
	
	CAUSE
	=====
	
	A new registry key was added in Service Pack 4 to confirm that a valid password
	is used against a domain controller rather than the local computer's credentials
	cache. When this is enabled, attempting to unlock the computer by using an
	invalid password causes the password to be validated twice against a domain
	controller, causing the account lockout count to be incremented twice.
	
	The registry key is:
	
	  HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon\ForceUnlockLogon
	
	For additional information about this key, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q188700 Screensaver Password Works Even if Account Is Locked Out
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time                Size    File name     Platform
	  --------------------------------------------------------------
	  24/02/2000  02:33              124,176  Msgina.dll    Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
