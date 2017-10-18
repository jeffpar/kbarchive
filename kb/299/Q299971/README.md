---
layout: page
title: "Q299971: &quot;WLX_SAS_ACTION_LOCK_WKSTA&quot; Returned from GINA Causes Shutdown"
permalink: kb/299/Q299971/
---

## Q299971: &quot;WLX_SAS_ACTION_LOCK_WKSTA&quot; Returned from GINA Causes Shutdown

	Article: Q299971
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
	
	If "WLX_SAS_ACTION_LOCK_WKSTA" is returned from the Graphical Identification and
	Authentication (GINA) component while a logoff procedure is in progress, the
	computer may instead shut down.
	
	CAUSE
	=====
	
	There is a condition that causes the main Winlogon loop to end; when this
	occurs, a call is made to shut down the computer.
	
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
	
	  Date          Time   Size     File name     Platform
	  ----------------------------------------------------
	  11-July-2001  11:51  343,312  Rpcrt4.dll    x86
	  24-July-2001  13:32  192,784  Winlogon.exe  x86
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	This issue does not occur with Service Pack 6 (SP6) or Service Pack 6a (SP6a)
	and the Security Rollup Package (SRP) installed. It occurs only with certain
	post-SP6a Winlogon hotfixes installed.
	
	For additional information about the SRP, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTW400SP6a
	Version           : :4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
