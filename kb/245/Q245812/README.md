---
layout: page
title: "Q245812: SMS: Visual C++ 6 Run-Time Libraries Installed with SMS"
permalink: /kb/245/Q245812/
---

## Q245812: SMS: Visual C++ 6 Run-Time Libraries Installed with SMS

{% raw %}

	Article: Q245812
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you apply or upgrade to Systems Management Server version 2.0 Service Pack 1
	on a client computer, you may install Microsoft Visual C++ 6 (6.00.8168.0)
	version of the run-time libraries. This can lead to heap compatibility problems
	in third-party programs installed on the client using the run-time libraries as
	outlined in the following Microsoft Knowledge Base article:
	
	  Q190536 Invalid Page Fault in Msvcrt.dll
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server service pack that contains this fix.
	
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
	
	
	
	WORKAROUND
	==========
	
	To workaround this problem, manually replace the run-time libraries on the
	client with VC++ 6 Service Pack 3 (6.0.8447.0) or later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	The hotfix for this article is dependent upon other developed fixes and you must
	install it as a complete package for compatibility.
	
	For additional information about the contents of this consolidated fix, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q253151 SMS: Systems Management Server 2.0 Dependency Package
	
	
	Additional query words: prodsms mfc42.dll msvcrt.dll
	
	======================================================================
	Keywords          : kbsms200 kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200SP1
	Version           : winnt:2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
