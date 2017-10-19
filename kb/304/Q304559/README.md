---
layout: page
title: "Q304559: The &quot;NBTSTAT -RR&quot; Command Does Not Refresh All Names"
permalink: /kb/304/Q304559/
---

## Q304559: The &quot;NBTSTAT -RR&quot; Command Does Not Refresh All Names

	Article: Q304559
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 24-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the "nbtstat -RR" command to release and refresh the NetBIOS names
	on a multihomed computer, all names are released on all adapters. However, the
	names are refreshed on only the primary network adapter, instead of being
	refreshed on all adapters.
	
	This issue causes Windows Internet Name Service (WINS) name registrations to be
	lost for non-primary adapters, which can prevent other computers on the network
	from communicating with the multihomed computer.
	
	CAUSE
	=====
	
	This issue occurs because an incorrect parameter is passed to the function that
	starts the refresh operation. The incorrect parameter inhibits the refreshing of
	names on all but the primary network adapter.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Size     File name  Platform
	  ------------------------------------------------
	  08-Aug-2001  00:49  124,688  Netbt.sys  Intel
	  08-Aug-2001  00:43  224,976  Netbt.sys  Alpha
	
	NOTE: Because of file dependencies, this hotfix requires Windows NT 4.0 Service
	Pack 6a (SP6a).
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
