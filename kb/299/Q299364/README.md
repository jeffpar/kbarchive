---
layout: page
title: "Q299364: Access Violation in Services.exe with Unconfigured PC Card"
permalink: /kb/299/Q299364/
---

## Q299364: Access Violation in Services.exe with Unconfigured PC Card

{% raw %}

	Article: Q299364
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6a 
	- Microsoft Windows NT Workstation version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you insert an unconfigured PC Card, Windows NT 4.0 may become unstable or an
	access violation may occur in Services.exe. An unconfigured PC Card is a card
	for which drivers have not been loaded yet.
	
	CAUSE
	=====
	
	When you insert a PC Card for which Windows NT 4.0 does not have drivers, the
	PCMCIA driver attempts to log the following event:
	
	  Event ID: 5
	  Source: PCMCIA
	  There is no configuration information for the PCCARD "(Device Name)"
	
	However, the driver does not calculate the size of the event log entry date, and
	this may cause an access violation in Services.exe.
	
	
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
	
	  Date        Time   Version        Size    File name   Platform
	  --------------------------------------------------------------
	  09/24/1999  3:53p  4.0.1381.7002  40,688  Pcmcia.sys  Intel
	  09/24/1999  3:52p  4.0.1381.7002  69,168  Pcmcia.sys  Alpha
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTW400SP6a
	Version           : :4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
