---
layout: page
title: "Q314731: Access Violation in SNMP Running GETNEXT Query Against RIP"
permalink: kb/314/Q314731/
---

## Q314731: Access Violation in SNMP Running GETNEXT Query Against RIP

	Article: Q314731
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT400nospFix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you query Simple Network Management Protocol (SNMP) Routing Information
	Protocol (RIP) agent tables by using a GETNEXT query, Snmp.exe may cause an
	access violation with an 0xc0000005 error message. The following sample query
	may cause the error message:
	
	  snmputil getnext <computername> public .1.3.6.1.4.1.311.1.11.1.9.1.1
	  .1.3.6.1.4.1.311.1.11.1.9.1.2
	
	CAUSE
	=====
	
	This problem occurs because a buffer is not initialized if the call does not
	succeed because of a Remote Procedure Call (RPC) error.
	
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
	
	  Date         Time   Version        Size    File name
	  ------------------------------------------------------
	  16-Jan-2002  06:09  4.0.1381.7122  14,608  Snmpsfx.dll
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbWinNT400nospFix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
