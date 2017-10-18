---
layout: page
title: "Q314761: RRAS Drops the First Route That Is Added By Using Routemon.exe"
permalink: kb/314/Q314761/
---

## Q314761: RRAS Drops the First Route That Is Added By Using Routemon.exe

	Article: Q314761
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a fresh installation of RRAS on a Windows NT 4.0-based computer, the first
	route that is added by using Routemon.exe is not retained after a start/stop of
	the Router service. Although it is possible to re-add the same route, it may
	never survive a restart of the Router service.
	
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
	
	  Date       Time   Version     Size     File name 
	  ------------------------------------------------
	  21-Dec-01  07:31  4.1.1.100   155,408  Ipmon.dll
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
