---
layout: page
title: "Q307617: CurrentNonAnonymousUsers Counter Change from Zero to Negative"
permalink: /kb/307/Q307617/
---

## Q307617: CurrentNonAnonymousUsers Counter Change from Zero to Negative

	Article: Q307617
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP3Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you configure a Web site to redirect all requests to another Web site, the
	CurrentNonAnonymousUsers performance counter value of this Web site may increase
	significantly.
	
	CAUSE
	=====
	
	The default setting of the W3SVC/AuthPersistence property is
	AuthSingleRequestIfProxy(0x80). An HTTP request from a proxy server causes the
	CurrentNonAnonymousUsers value to decrease, but this counter never increases
	because the site is a redirection Web site.
	
	RESOLUTION
	==========
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version       Size    File name
	  --------------------------------------------------
	  20-Jul-2001  15:07  5.0.2195.3532 508,929 Infocomm.dll
	  07-Sep-2001  11:30  5.0.2195.4111 724,992 W3svc.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services 5.0.
	
	MORE INFORMATION
	================
	
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000PreSP3Fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
