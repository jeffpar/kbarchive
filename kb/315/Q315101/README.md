---
layout: page
title: "Q315101: Cannot Cancel Novell Print Job After You Apply Q299444 SRP"
permalink: /kb/315/Q315101/
---

## Q315101: Cannot Cancel Novell Print Job After You Apply Q299444 SRP

{% raw %}

	Article: Q315101
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6a
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg kbnetwork kbprint
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are trying to print from a Windows NT 4.0-based computer to a shared
	printer on a Novell NetWare print server after you apply the Q299444 security
	roll-up fix and you try to cancel a print job in the Print Queue window, you may
	receive the following error message in the status bar:
	
	  Error processing command
	
	When this error message occurs, the print job is not deleted.
	
	CAUSE
	=====
	
	This problem may occur because of a regression in the Q299444 security roll-up
	fix.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next that contains this fix.
	
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
	
	  Date       Time   Version        Size    File name
	  --------------------------------------------------
	  22-Jan-02  15:50  4.0.1381.7125  63,760  Nwwks.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg kbnetwork kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400SP6a
	Version           : :4.0 SP6a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
