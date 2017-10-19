---
layout: page
title: "Q253502: Error When Resolving NetBIOS Name Longer than 16 Characters"
permalink: /kb/253/Q253502/
---

## Q253502: Error When Resolving NetBIOS Name Longer than 16 Characters

	Article: Q253502
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to resolve a NetBIOS server name that is longer than 16
	characters (for example, "net view \\<xxxxxxxxxxxxxxxxx>" (without the
	quotation marks)) after you establish a virtual private network (VPN) or Remote
	Access Service (RAS) connection, the following error message may be displayed:
	
	  System error 53 has occurred.
	
	In addition, programs that rely on resolution of NetBIOS server names that are
	longer than 16 characters may be unable to contact the server and error messages
	similar to the following examples may be displayed:
	
	  Server not found.
	  Server unavailable.
	
	CAUSE
	=====
	
	This behavior occurs because the service responsible for directing the
	resolution of NetBIOS server names longer than 16 characters was not informed of
	the creation of the transient registry key that contained the new DNS server's
	Internet Protocol (IP) address.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Windows NT 4.0 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date         Time     Size     File name     Platform
	  -----------------------------------------------------
	  02/03/2000   01:26p   76,560   Mswsock.dll   I386
	  02/03/2000   01:27p   45,328   Rnr20.dll     I386
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0.
	
	Additional query words: name resolution view
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
