---
layout: page
title: "Q261298: Access Violation in Remote Procedure Call Server Service (RPCSS)"
permalink: /kb/261/Q261298/
---

## Q261298: Access Violation in Remote Procedure Call Server Service (RPCSS)

{% raw %}

	Article: Q261298
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Remote Procedure Call Server service (RPCSS) may, in certain situations,
	cause an access violation.
	
	CAUSE
	=====
	
	This behavior occurs because a corrupted RPC packet is being sent to the RPC
	service. The code that unmarshalls the data (unpacks it) does not succeed under
	certain conditions of packet corruption.
	
	
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
	
	  Date        Time    Size     File name   Platform
	  -------------------------------------------------
	  04/25/2000  03:00p  342,800  Rpcrt4.dll  Intel
	  04/25/2000  03:08p  106,768  Rpcss.exe   Intel
	  03/28/2000  06:34p  579,344  Rpcrt4.dll  Alpha
	  04/25/2000  03:07p  183,056  Rpcss.exe   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400search kbWinNTS400 kbWinNTW400sp6
	Version           : winnt:4.0,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
