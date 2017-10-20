---
layout: page
title: "Q281480: Workstation Does Not Connect to Network Resources Using NTLMv2"
permalink: /kb/281/Q281480/
---

## Q281480: Workstation Does Not Connect to Network Resources Using NTLMv2

{% raw %}

	Article: Q281480
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400PreSP7Fixkbbuglist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you configure Windows NT 4.0 to use Windows NT LAN Manager version 2 (also
	known as NTLMv2), your computer may not be able to connect to network resources.
	When you attempt to use the "net use" command to connect to a shared resource,
	you may receive error 1788. This error message maps to the following error
	message:
	
	  The trust relationship between the primary domain and the trusted domain
	  failed.
	
	Also, after you try to connect to a computer that is in a different domain, the
	secure channel between the domains appears to be broken.
	
	CAUSE
	=====
	
	This problem can occur when the computer that is configured with NTLMv2 tries to
	authenticate because the computer looks at the wrong data in the buffer. When
	this occurs, the authenticating computer returns ACCESS_DENIED to the calling
	computer which causes the secure channel to be broken.
	
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time      Size     File name     Platform
	  ---------------------------------------------------
	  12/11/2000  04:34p   80,688  Mup.sys       Intel
	  01/03/2001  05:20p  254,736  Netapi32.dll  Intel
	  01/03/2001  05:20p  192,272  Netlogon.dll  Intel 
	  01/03/2001  05:20p   60,176  Wkssvc.dll    Intel
	  12/11/2000  05:04p  142,416  Mup.sys       Alpha
	  01/03/2001  05:17p  412,432  Netapi32.dll  Alpha
	  01/03/2001  05:17p  312,592  Netlogon.dll  Alpha
	  01/03/2001  05:17p   95,504  Wkssvc.dll    Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem can occur under the following circumstances:
	
	- If computer 1 is the domain controller for domain 1
	
	  -and-
	
	- If computer 2 is the domain controller for domain 2
	
	  -and-
	
	- If there is a two-way trust between domain 1 and domain 2
	
	  -and-
	
	- If workstation 1 is a member of domain 1
	
	  -and-
	
	- If user 2 is a user in domain 2
	
	If user 2 logs on to workstation 1 and tries to use the "net use" command to
	connect to a resource on computer 1 with NTLMv2, user 2 receives error 1788.
	
	For information about how to configure NTLMv2, view the following Microsoft
	Knowledge Base article:
	
	  Q239869 How to Enable NTLM 2 Authentication for Windows 95/98/2000 and NT
	
	Additional query words: kbwinnt search ssearch winnt
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400PreSP7Fix kbbuglist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400search
	Version           : :4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
