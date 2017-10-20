---
layout: page
title: "Q271374: Windows NT 4.0 SP6 Clients Contact the PDC Every 21 Minutes"
permalink: /kb/271/Q271374/
---

## Q271374: Windows NT 4.0 SP6 Clients Contact the PDC Every 21 Minutes

{% raw %}

	Article: Q271374
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbdomain kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows NT 4.0 may contact the primary domain controller (PDC) when
	you start your computer and every 21 minutes to get a Distributed File System
	(DFS) referral. When this occurs, there may be unwanted network traffic and
	unwanted load on the server service in larger domains.
	
	CAUSE
	=====
	
	This problem can occur because there are changes to the Mup.sys file from
	Q242001. It is necessary to periodically check with a Microsoft Windows
	2000-based domain controller for a DFS referral. Because Windows NT 4.0 Service
	Pack 6 (SP6) cannot locate a Windows 2000-based domain controller if one exists,
	it must contact the PDC. Note that the PDC is the only system in a domain that
	is guaranteed to be a Windows 2000 domain controller if any Windows 2000-based
	domain controllers exist.
	
	
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
	
	  Date        Time     Version        Size     File name  Platform
	  ----------------------------------------------------------------
	  09/08/2000  01:33pm  4.0.1381.7086  80,848   Mup.sys    Intel
	  09/08/2000  01:32pm  4.0.1381.7086  142,800  Mup.sys    Alpha 
	
	
	
	The Mup.sys file enables a new registry entry to be specified that can enable a
	delay. The delay is specified in minutes, starting at 21 minutes. When you
	enable this registry entry, the initial traffic when you start the computer is
	not prevented, however, the subsequent traffic is prevented.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanmanWorkstation\
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: DfsDcNameDelay
	  Data Type: REG_DWORD
	  Radix: select Decimal
	  Value: Delay in minutes
	
	4. Quit Registry Editor.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	
	Additional query words: mup
	
	======================================================================
	Keywords          : kbenv kbdomain kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : :4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
