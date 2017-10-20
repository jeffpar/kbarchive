---
layout: page
title: "Q215113: SMS: Windows 9x Clients Can't Connect to Bindery Emulation CAPs"
permalink: /kb/215/Q215113/
---

## Q215113: SMS: Windows 9x Clients Can't Connect to Bindery Emulation CAPs

{% raw %}

	Article: Q215113
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbClient kbConfig kbSecurity kbServer kbsms kbsms200 kbsms200bug kb
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 9x clients cannot connect to client access points (CAPs) on servers that
	use bindery emulation.
	
	
	CAUSE
	=====
	
	The client must make an initial connection to a bindery logon point to
	authenticate before gaining access to a CAP or distribution point on another
	NetWare 4.x server.
	
	WORKAROUND
	==========
	
	Place all CAPs and distribution points on the bindery emulation servers that act
	as logon points for the Windows 9x clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbClient kbConfig kbSecurity kbServer kbsms kbsms200 kbsms200bug kbBindery kbCAP kbOSNovell 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
