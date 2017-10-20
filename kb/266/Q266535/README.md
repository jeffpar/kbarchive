---
layout: page
title: "Q266535: Encarta Researcher: Cannot Start Program on Dual Boot Computer"
permalink: /kb/266/Q266535/
---

## Q266535: Encarta Researcher: Cannot Start Program on Dual Boot Computer

{% raw %}

	Article: Q266535
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Africana, Third Edition 
	- Microsoft Encarta Encyclopedia Deluxe 2001 for Windows 
	- Microsoft Encarta Interactive World Atlas 2001 
	- Microsoft Encarta Reference Suite 2001 
	- Microsoft Encarta Researcher 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The programs listed at the beginning of this article may not start when they are
	installed on a computer that is running both the Microsoft Windows 98 and the
	Microsoft Windows 2000 operating systems (dual boot).
	
	For example, when you try to start Encarta Researcher, you may receive the
	following error message:
	
	  Visual C++ Runtime error [abnormal program termination]
	
	-or-
	
	Microsoft Internet Explorer may start, and then quit unexpectedly with no error
	messages.
	
	When starting Encarta Encyclopedia, Encarta World Atlas, or Encarta Africana you
	may receive the following message:
	
	  C:\refdev01\Shared\SharedFind\source\SharedFindServer\SharedFindCtrl.cpp(471):
	  Failed to CoCreateInstance
	  CLSID_SharedFindMgr : HRESULT 0x80004002
	  No such interface supported.
	
	CAUSE
	=====
	
	This behavior can occur if the products listed at the beginning of this article
	are installed on both operating systems on a dual boot computer.
	
	RESOLUTION
	==========
	
	The products listed at the beginning of this article must only be installed on
	one operating system at a time on dual boot computers.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: multi multi-media media mm
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaAfricana300 kbEncartaReference2001 kbEncartaWorldAtlas2001
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
