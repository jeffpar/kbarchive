---
layout: page
title: "Q262486: 100% CPU Utilization or AV When You Use Basic Authentication"
permalink: /kb/262/Q262486/
---

## Q262486: 100% CPU Utilization or AV When You Use Basic Authentication

{% raw %}

	Article: Q262486
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Basic authentication in Internet Information Server (IIS), the CPU
	utilization may reach 100%, or you may receive access violations (AVs).
	
	WORKAROUND
	==========
	
	To work around this problem, do not use Basic authentication.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT service pack that contains this fix.
	
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
	
	 Date      Time       Version      Size    File name     Platform
	 ----------------------------------------------------------------
	 6/01/2000 2:48:00PM  4.2.746.1    330,080 Asp.dll       x86
	 6/01/2000 2:46:16PM  4.2.746.1    185,792 Infocomm.dll  x86
	 6/01/2000 2:47:10PM  4.2.746.1    38,256  Ssinc.dll     x86
	 6/01/2000 2:47:18PM  4.2.746.1    25,360  Sspifilt.dll  x86
	 6/01/2000 2:46:58PM  4.2.746.1    228,496 W3svc.dll     x86
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: TsFlushCacheUser
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
