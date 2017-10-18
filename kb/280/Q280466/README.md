---
layout: page
title: "Q280466: Programs Using LDAP May Generate Access Violation Error Messages"
permalink: kb/280/Q280466/
---

## Q280466: Programs Using LDAP May Generate Access Violation Error Messages

	Article: Q280466
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Lightweight Directory Access Protocol (LDAP) program performs extensive
	bind and unbind operations over a Secure Sockets Layer (SSL) connection, the
	program may generate an access violation error message and stop responding
	(hang).
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
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
	
	  Date      Time                 Size     File name     Platform
	  --------------------------------------------------------------
	  11/28/00  04:27p               91,408   Wldap32.dll   i386
	  11/28/00  04:26p               158,480  Wldap32.dll   Alpha
	
	
	
	NOTE: When you apply the preceding hotfix, Microsoft recommends that you also
	apply the hotfix that is listed in the following Microsoft Knowledge Base
	article:
	
	  Q280321 LDAP Program May Generate Access Violation Under Stress
	
	The hotfix that is listed in the preceding article fixes a problem in the
	Schannel.dll file that may cause the Schannel.dll file to generate access
	violation error messages under stress conditions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Windows 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
