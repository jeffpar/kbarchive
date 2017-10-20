---
layout: page
title: "Q249197: Internet Explorer Does Not Allow Use of Single SGC Certificate"
permalink: /kb/249/Q249197/
---

## Q249197: Internet Explorer Does Not Allow Use of Single SGC Certificate

{% raw %}

	Article: Q249197
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are attempting to connect to a Web server with multiple virtual sites
	with Server Gated Cryptography (SGC) encryption, 40-bit encryption is used
	instead of 128-bit encryption on virtual sites.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
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
	
	  Date      Time              Size       File name     Platform
	  -------------------------------------------------------------
	  12/14/1999  05:31p          123,664    Sch128c.dll   x86
	  12/14/1999  05:31p          154,384    Schnlc.dll    x86
	  12/14/1999  05:31p          226,576    Sch128c.dll   Alpha
	  12/14/1999  05:31p          267,536    Schnlc.dll    Alpha
	
	
	
	Windows NT Server version 4.0, Terminal Server Edition
	------------------------------------------------------
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Microsoft Internet Explorer 5.
	
	MORE INFORMATION
	================
	
	Note that this hotfix also requires that the hotfix described in the following
	article in the Microsoft Knowledge Base be applied to your Windows NT-based
	computer:
	
	  Q248652 Dial-Up Networking Cannot Connect to 56-Bit Windows 2000 Server
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
