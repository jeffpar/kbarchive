---
layout: page
title: "Q248123: DNS CNAME Resolution May Not Work"
permalink: kb/248/Q248123/
---

## Q248123: DNS CNAME Resolution May Not Work

	Article: Q248123
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your computer resolves a name that you entered as a CNAME in DNS, you
	receive the following error messages
	
	- When you try to ping the CNAME <x> like x.y.z.,where x.y.z. is a fully
	  qualified domain name (FQDN):
	
	  Bad IP address
	
	- When you use Nslookup to resolve the CNAME x <x> like x.y.z.,where
	  x.y.z. is a FQDN:
	
	  Can't find x.y.z.: non-existent domain
	
	CAUSE
	=====
	
	This issue occurs because name resolution for CNAME records does not work when
	the corresponding "A" record resides in a delegated subzone.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time      Size     File name   Platform
	  -------------------------------------------------
	  12/10/99  1:58 am   178,448  dns.exe     (Intel)
	  12/10/99  1:57 am   299,792  dns.exe     (Alpha)
	
	
	
	WORKAROUND
	==========
	
	In the zonefile, move the complete "zone records" section of the parent zone
	below the "delegated sub-zone" section.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
