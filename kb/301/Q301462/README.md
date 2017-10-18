---
layout: page
title: "Q301462: RDP High Encryption Unavailable with French (Standard) Locale"
permalink: kb/301/Q301462/
---

## Q301462: RDP High Encryption Unavailable with French (Standard) Locale

	Article: Q301462
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer that is running Microsoft Windows NT Server version 4.0 Service
	Pack 6 (SP6), Terminal Server Edition and that is configured to use the French
	(Standard) locale, the Required Encryption setting in Terminal Server Connection
	Configuration under the Advanced setting of the RDP-TCP connection may be
	unavailable.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT Server 4.0, Terminal Server Edition service pack that
	contains this fix.
	
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
	
	  Date          Time    Version         Size     File name   
	  ----------------------------------------------------------------
	  May 17, 2001  15:42   4.0.1381.33478   34,200  Rdpwsx.dll
	  May 17, 2001  15:41   4.0.1381.33478   91,288  Rdpwd.sys
	  May 17, 2001  15:42   4.0.1381.33478  195,344  Mstsc.exe (32-bit)
	  May 17, 2001  15:42   4.0.1381.710    177,520  Mstsc.exe (16-bit)
	
	NOTE: In addition to the installation of this hotfix, you must also reinstall the
	Terminal Server client on all clients that will be connecting to the server.
	This hotfix package will update the client files that are located in the
	WINNT\System32\Clients\Tsclient folders on the server.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Until you apply the hotfix that is described in this article, it is not possible
	to enable high encryption on an RDP-TCP connection.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
