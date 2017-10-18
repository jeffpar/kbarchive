---
layout: page
title: "Q231609: Requesting ASP File May Cause 404 Error"
permalink: kb/231/Q231609/
---

## Q231609: Requesting ASP File May Cause 404 Error

	Article: Q231609
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HTTP 404 "File not found" errors may occur on valid Active Server Pages (ASP)
	when the same ASP page is requested with an ending forward slash. For example,
	if a user requests "http://server/default.asp/" and this results in a 404 error,
	the next request to "http://server/default.asp," will also result in a 404
	error.
	
	CAUSE
	=====
	
	This only occurs on servers that have an ISAPI filter that requests
	SF_NOTIFY_URL_MAP. Internet Information Server (IIS) treats all requests
	terminated by a slash as a directory. When this value is stored in the ASP
	cache, requests to the actual page fail because only the value up to the final
	slash is compared when looking up a value in the cache.
	
	WORKAROUND
	==========
	
	There is a time factor involved in the cache. If you wait long enough, the item
	will be flushed from the cache and you will not receive the 404 error. If you
	use the Microsoft Management Console to connect to the server and then view the
	properties, the cache will be cleared as well. You can also start and stop the
	IISAdmin service.
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	 05/06/99  18:51                 28,224 Admwprox.dll	 (X86)
	 05/06/99  18:53                214,032 Adsiis.dll	 (X86)
	 05/06/99  18:53                328,512 Asp.dll	 (X86)
	 05/06/99  18:51                 43,456 Coadmin.dll	 (X86)
	 05/06/99  18:53                 11,168 Ftpctrs2.dll	 (X86)
	 05/06/99  18:53                 81,888 Ftpsvc2.dll	 (X86)
	 05/06/99  18:52                 55,392 Httpodbc.dll	 (X86)
	 04/22/99  19:19                  4,687 Iiadmhd.asp	 (X86)
	 05/06/99  18:53                 98,400 Iischema.dll	 (X86)
	 05/06/99  18:51                 10,224 Iisfecnv.dll	 (X86)
	 05/06/99  18:51                 62,960 Iislog.dll	 (X86)
	 05/06/99  18:51                 16,848 Infoadmn.dll	 (X86)
	 05/06/99  18:51                184,720 Infocomm.dll	 (X86)
	 05/06/99  18:51                  9,584 Infoctrs.dll	 (X86)
	 05/06/99  18:51                 47,936 Isatq.dll	 (X86)
	 05/06/99  18:51                 29,520 Iscomlog.dll	 (X86)
	 05/06/99  18:52                 11,248 Iwrps.dll	 (X86)
	 05/06/99  18:51                 13,856 Lonsint.dll	 (X86)
	 05/06/99  18:51                  8,336 Lonsiw95.dll	 (X86)
	 05/06/99  18:51                 53,968 Mdutil.exe	 (X86)
	 05/06/99  18:51                 71,232 Metadata.dll	 (X86)
	 05/06/99  18:51                  7,488 Rpcref.dll	 (X86)
	 05/06/99  18:52                 12,592 Spud.sys	 (X86)
	 05/06/99  18:52                 18,032 Svcext.dll	 (X86)
	 05/04/99  20:49                  2,459 Template.asp	 (X86)
	 04/20/99  19:06                  1,473 Urlform.asp	 (X86)
	 05/06/99  18:52                 14,752 W3ctrs.dll	 (X86)
	 05/06/99  18:54                 71,248 W3key.dll	 (X86)
	 05/06/99  18:52                227,936 W3svc.dll	 (X86)
	 05/06/99  18:52                 87,504 Wam.dll	 (X86)
	
	 05/06/99  18:51                 50,448 Admwprox.dll	(Alpha)
	 05/06/99  18:53                307,472 Adsiis.dll	(Alpha)
	 05/06/99  18:53                549,136 Asp.dll	(Alpha)
	 05/06/99  18:51                 77,072 Coadmin.dll	(Alpha)
	 05/06/99  18:53                 17,168 Ftpctrs2.dll	(Alpha)
	 05/06/99  18:52                126,736 Ftpsvc2.dll	(Alpha)
	 05/06/99  18:52                 89,360 Httpodbc.dll	(Alpha)
	 04/22/99  19:19                  4,687 Iiadmhd.asp	(Alpha)
	 05/06/99  18:53                106,768 Iischema.dll	(Alpha)
	 05/06/99  18:51                 17,680 Iisfecnv.dll	(Alpha)
	 05/06/99  18:51                112,400 Iislog.dll	(Alpha)
	 05/06/99  18:51                 25,872 Infoadmn.dll	(Alpha)
	 05/06/99  18:51                303,376 Infocomm.dll	(Alpha)
	 05/06/99  18:51                 15,120 Infoctrs.dll	(Alpha)
	 05/06/99  18:51                 82,704 Isatq.dll	(Alpha)
	 05/06/99  18:51                 45,840 Iscomlog.dll	(Alpha)
	 05/06/99  18:52                 16,656 Iwrps.dll	(Alpha)
	 05/06/99  18:51                 23,312 Lonsint.dll	(Alpha)
	 05/06/99  18:51                 13,584 Lonsiw95.dll	(Alpha)
	 05/06/99  18:51                 85,776 Mdutil.exe	(Alpha)
	 05/06/99  18:51                131,856 Metadata.dll	(Alpha)
	 05/06/99  18:51                 12,048 Rpcref.dll	(Alpha)
	 05/06/99  18:52                 20,912 Spud.sys	(Alpha)
	 05/06/99  18:52                 29,456 Svcext.dll	(Alpha)
	 05/04/99  20:49                  2,459 Template.asp	(Alpha)
	 04/20/99  19:06                  1,473 Urlform.asp	(Alpha)
	 05/06/99  18:52                 21,264 W3ctrs.dll	(Alpha)
	 05/06/99  18:54                122,128 W3key.dll	(Alpha)
	 05/06/99  18:52                381,712 W3svc.dll	(Alpha)
	 05/06/99  18:52                149,264 Wam.dll	(Alpha)
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
