---
layout: page
title: "Q245252: Secondary DNS Server Does Not Obtain Glue Record in Child Domain"
permalink: /kb/245/Q245252/
---

## Q245252: Secondary DNS Server Does Not Obtain Glue Record in Child Domain

	Article: Q245252
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a secondary DNS server is queried for a CNAME record that exists in a
	parent domain whose glue (A) record exists in a delegated child domain, the
	secondary DNS server does not attempt to obtain the glue record from the
	delegated child domain's NS server. Instead, only the CNAME record is returned.
	
	For example, the parent domain is dns.com, and the child domain is small.dns.com.
	The child domain is delegated to ns1.small.dns.com using an NS record. This
	information is present on both the primary DNS server (ns1.dns.com) and the
	secondary DNS server (ns2.dns.com) for this domain. The parent domain contains a
	CNAME record called www.dns.com, which points to host.small.dns.com.
	
	When a DNS client queries for www.dns.com against the secondary DNS server, the
	secondary server should query ns1.small.dns.com for the glue (A) record and
	return both the CNAME and A records to the host. This did not occur.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time     Size      File name   Platform
	  -------------------------------------------------
	  10/25/99  02:13p   298,768   Dns.exe     Alpha
	  10/25/99  02:14p   177,424   Dns.exe     I386
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Component         : Transport
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
