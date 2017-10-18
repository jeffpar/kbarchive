---
layout: page
title: "Q196992: Current NonAnonymous Users Performance Counter Is Incorrect"
permalink: kb/196/Q196992/
---

## Q196992: Current NonAnonymous Users Performance Counter Is Incorrect

	Article: Q196992
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Information Server (IIS) Current NonAnonymous Users Performance
	Monitor counter continuously increments, even after you log out of the site. The
	problem occurs when you use an Internet Server API (ISAPI) extension that
	registers as an authentication handler, for example Site Server 3.0 Membership
	Authentication.
	
	CAUSE
	=====
	
	ISAPI extensions that register as an authentication provider and set the
	AuthPersistence to MD_AUTH_SINGLEREQUEST cause the Performance Monitor counter
	for CurrentNonAnonymousUsers to constantly increase. The problem occurs because
	IIS increments the counter as soon as the extension indicates authentication is
	successful, but does not decrement the counter when the login is immediately
	released due to the MD_AUTH_SINGLEREQUEST setting.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Windows NT
	service pack.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Size   File Name   Platform
	  ---------------------------------------------
	  12/03/98  09:36p  47,936 Isatq.dll    (x86)
	  12/03/98  09:37p  71,232 Metadata.dll (x86)
	  12/03/98  09:37p  27,696 Admwprox.dll (x86)
	  12/03/98  09:37p  43,456 Coadmin.dll  (x86)
	  12/03/98  09:37p   7,488 Rpcref.dll   (x86)
	  12/03/98  09:37p  13,856 Lonsint.dll  (x86)
	  12/03/98  09:37p   8,336 Lonsiw95.dll (x86)
	  12/03/98  09:37p  61,920 Iislog.dll   (x86)
	  12/03/98  09:37p  29,520 Iscomlog.dll (x86)
	  12/03/98  09:37p  10,224 Iisfecnv.dll (x86)
	  12/03/98  09:37p 184,192 Infocomm.dll (x86)
	  12/03/98  09:37p  16,848 Infoadmn.dll (x86)
	  12/03/98  09:37p   9,584 Infoctrs.dll (x86)
	  12/03/98  09:37p  12,592 Spud.sys     (x86)
	  12/03/98  09:37p  18,032 Svcext.dll   (x86)
	  12/03/98  09:38p 227,392 W3svc.dll    (x86)
	  12/03/98  09:38p  14,752 W3ctrs.dll   (x86)
	  12/03/98  09:38p  81,376 Ftpsvc2.dll  (x86)
	  12/03/98  09:38p  11,168 Ftpctrs2.dll (x86)
	  12/03/98  11:28p  87,536 Wam.dll      (x86)
	  12/03/98  11:29p 327,472 Asp.dll      (x86)
	
	  12/03/98  09:39p  82,704 Isatq.dll    (alpha)
	  12/03/98  09:39p 131,856 Metadata.dll (alpha)
	  12/03/98  09:39p  49,424 Admwprox.dll (alpha)
	  12/03/98  09:39p  77,072 Coadmin.dll  (alpha)
	  12/03/98  09:39p  12,048 Rpcref.dll   (alpha)
	  12/03/98  09:39p  23,312 Lonsint.dll  (alpha)
	  12/03/98  09:39p  13,584 Lonsiw95.dll (alpha)
	  12/03/98  09:39p 110,864 Iislog.dll   (alpha)
	  12/03/98  09:39p  45,840 Iscomlog.dll (alpha)
	  12/03/98  09:39p  17,680 Iisfecnv.dll (alpha)
	  12/03/98  09:39p 302,864 Infocomm.dll (alpha)
	  12/03/98  09:39p  25,872 Infoadmn.dll (alpha)
	  12/03/98  09:39p  15,120 Infoctrs.dll (alpha)
	  12/03/98  09:40p  20,912 Spud.sys     (alpha)
	  12/03/98  09:40p  29,456 Svcext.dll   (alpha)
	  12/03/98  09:40p 381,200 W3svc.dll    (alpha)
	  12/03/98  09:40p  21,264 W3ctrs.dll   (alpha)
	  12/03/98  09:41p 126,224 Ftpsvc2.dll  (alpha)
	  12/03/98  09:41p  17,168 Ftpctrs2.dll (alpha)
	  12/03/98  11:11p 149,264 Wam.dll      (alpha)
	  12/03/98  11:15p 548,112 Asp.dll      (alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0.
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
