---
layout: page
title: "Q273614: Cannot Change Cluster Share Resource Permissions"
permalink: /kb/273/Q273614/
---

## Q273614: Cannot Change Cluster Share Resource Permissions

	Article: Q273614
	Product(s): Microsoft Windows NT
	Version(s): 1.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbtool kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cluster Server, version 1.0 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you make changes to the cluster share resource permissions after you
	install Cluster Server Service Pack 4 (SP4), your changes may not be saved.
	
	CAUSE
	=====
	
	Cluster Server made a change in Cluster Server SP4 to include smbshares. The
	NetShareSetInfo function is in Cluster Server SP4, but it does not match with
	what happened in earlier versions. For example, in Cluster Server Service Pack 3
	(SP3) this function is imported from netapi to check and set the security upon a
	change.
	
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
	
	  Date      Time                 Size     File name     Platform
	  -------------------------------------------------------------
	 11/03/200  08:14 PM             166,000  Clusres.dll   Intel
	 11/03/200  08:14 PM              30,000  Resutils.dll  Intel
	 11/03/200  08:12 PM             266,000  Clusres.dll   Alpha
	 11/01/200  09:41 PM              49,000  Resutils.dll  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400search kbAudDeveloper kbClustServSearch kbWinNTSEnt400SP6a kbClustServ100
	Version           : :1.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
