---
layout: page
title: "Q308335: Access Violation in IIS When Web Server Is Under a Heavy Load"
permalink: /kb/308/Q308335/
---

## Q308335: Access Violation in IIS When Web Server Is Under a Heavy Load

{% raw %}

	Article: Q308335
	Product(s): Internet Information Server
	Version(s): 2000,2000 SP1,2000 SP2,5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Advanced Server 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Server 
	- Microsoft Windows versions 2000, 2000 SP2 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a heavily loaded Web server, you may receive an access violation (AV) error
	in Internet Information Services (IIS).
	
	CAUSE
	=====
	
	Under a heavy load, or during stress testing, IIS may stop responding (hang)
	during a call to the SetLocale function. This behavior occurs when IIS makes
	many and repeated SetLocale calls, and it is caused by a code deficiency in the
	SetLocale function pointer.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date         Time   Version        Size    File name
	  -------------------------------------------------------
	  02-Oct-2001  22:40  5.0.2195.4450  70,416  Metadata.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbiisSearch kbiis500 kbWinAdvServSearch kbWinDataServSearch kbWin2000AdvServSP2 kbWin2000AdvServSP1 kbWin2000DataServSP2 kbwin2000ServSP1 kbwin2000ServSP2
	Version           : :2000,2000 SP1,2000 SP2,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
