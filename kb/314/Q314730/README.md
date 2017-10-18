---
layout: page
title: "Q314730: Access Violation in SNMP Running GETNEXT Queries Against OSPF"
permalink: kb/314/Q314730/
---

## Q314730: Access Violation in SNMP Running GETNEXT Queries Against OSPF

	Article: Q314730
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
	
	If you run multiple GETNEXT queries against the Open Shortest Path First (OSPF)
	agent, Simple Network Management Protocol (SNMP) may intermittently generate
	access violations with error message 0xc0000005. The following sample query may
	cause the error message:
	
	  snmputil getnext <computername> public .1.3.6.1.4.1.9.9.23.1.2.1.1.6
	  .1.3.6.1.4.1.9.9.23.1.2.1.1.7 .1.3.6.1.4.1.9.9.23.1.2.1.1.3
	  .1.3.6.1.4.1.9.9.23.1.2.1.1.4
	
	This command was looped in a batch file to run 1,000 times to cause the problem
	to occur.
	
	CAUSE
	=====
	
	When Windows compares the OID string against the OID IpBaseRtEntry value, the
	buffer is overrun if the buffer entry that contains the original OID also
	contains a number that matches the IpBaseRtEntry value. If the buffer is at the
	end of a page and the next page is not initialized, an access violation occurs.
	
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
	  -------------------------------------------------------
	  16-Jan-2002  06:02  4.0.1381.7122  11,024  Ospfagnt.dll
	  16-Jan-2002  06:08  4.0.1381.7122  47,888  Mpradmin.dll
	
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
	
