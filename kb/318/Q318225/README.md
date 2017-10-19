---
layout: page
title: "Q318225: IIS May Return HTTP Status 401 Every 30 Days When Using Kerberos"
permalink: /kb/318/Q318225/
---

## Q318225: IIS May Return HTTP Status 401 Every 30 Days When Using Kerberos

	Article: Q318225
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP3Fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows Integrated and Kerberos authentication, you may receive the
	following error message every 30 days from Internet Information Services (IIS):
	
	  401 access denied
	
	This problem does not occur when you only use NTLM.
	
	CAUSE
	=====
	
	IIS caches some credential handles. These handles are removed by a scavenger if
	they get too old. However, this does not occur for handles that are used to
	decrypt Kerberos tickets. Because of this, if the handle ages, IIS cannot
	correctly use the related Kerberos tickets.
	
	WORKAROUND
	==========
	
	Disable the use of Kerberos for Windows Integrated authentication. For
	additional information about how to disable Kerberos authentication, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q215383 How to Ensure Windows Integrated Logons in Internet Information
	  Services 5.0
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest IIS cumulative security patch. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q319733 MS02-018: April 2002 Cumulative Patch for Internet Information
	  Services
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows 2000 service pack that contains this fix.
	
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
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 The Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with Only One Reboot
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000PreSP3Fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
