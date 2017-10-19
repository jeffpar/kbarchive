---
layout: page
title: "Q261278: Terminal Server Ignores NumberOfRings Parameter"
permalink: /kb/261/Q261278/
---

## Q261278: Terminal Server Ignores NumberOfRings Parameter

	Article: Q261278
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kbWin2000SP2Fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Independent Computing Architecture (ICA) client dial-in connections are always
	answered on the first ring. You cannot configure Terminal Server to answer after
	a different number of rings.
	
	In Windows NT, you can use the following registry entry to configure the number
	of rings:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\RasMan\Parameters\NumberOfRings
	
	This entry has no effect in Terminal Server.
	
	CAUSE
	=====
	
	The Telephony API services in Terminal Server do not check the configuration
	data in the registry setting listed in the "Symptoms" section.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT Server 4.0, Terminal Server Edition, service pack that
	contains this fix.
	
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
	
	  Date      Time    Size     File name    Platform
	  ------------------------------------------------
	  5/1/2000  9:53PM  19.7 KB  Cdmodem.dll  Intel
	  5/1/2000  9:39PM  37.7 KB  Cdmodem.dll  Alpha
	
	
	
	STATUS
	======
	
	Windows 2000
	------------
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 2000. This
	problem was first corrected in Windows 2000 Service Pack 2.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbWin2000SP2Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Issue type        : kbbug
	Solution Type     : kbfix kbpending
	
	=============================================================================
	
