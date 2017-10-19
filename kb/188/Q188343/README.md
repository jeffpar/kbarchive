---
layout: page
title: "Q188343: ISAPI Filter Not Receiving SF_NOTIFY_SEND_RAW_DATA with Proxy"
permalink: /kb/188/Q188343/
---

## Q188343: ISAPI Filter Not Receiving SF_NOTIFY_SEND_RAW_DATA with Proxy

	Article: Q188343
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
	
	ISAPI SF_NOTIFY_SEND_RAW_DATA notifications are no longer received by ISAPI raw
	filter after modifying the CbInData value in the HTTP_RAW_DATA_FILTER structure
	after first notification. This behavior has been noted when using the above
	technique in ISAPI raw data filters running in conjunction with Proxy Server and
	can occur with other ISAPI filters.
	
	
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
	
	  Date      Time      Size    File Name     Platform
	  -------------------------------------------------------------
	  11/05/98  04:42p    27,696  Admwprox.dll    (x86)
	  11/05/98  04:44p   325,856  Asp.dll         (x86)
	  11/05/98  04:42p    43,456  Coadmin.dll     (x86)
	  11/05/98  04:44p    11,168  Ftpctrs2.dll    (x86)
	  11/05/98  04:44p    81,376  Ftpsvc2.dll     (x86)
	  11/05/98  04:42p    10,224  Iisfecnv.dll    (x86)
	  11/05/98  04:42p    61,920  Iislog.dll      (x86)
	  11/05/98  04:43p    16,848  Infoadmn.dll    (x86)
	  11/05/98  04:42p   184,192  Infocomm.dll    (x86)
	  11/05/98  04:43p     9,584  Infoctrs.dll    (x86)
	  11/05/98  04:42p    47,936  Isatq.dll       (x86)
	  11/05/98  04:42p    29,520  Iscomlog.dll    (x86)
	  11/05/98  04:42p    13,856  Lonsint.dll     (x86)
	  11/05/98  04:42p     8,336  Lonsiw95.dll    (x86)
	  11/05/98  04:42p    71,232  Metadata.dll    (x86)
	  11/05/98  04:42p     7,488  Rpcref.dll      (x86)
	  11/05/98  04:43p    18,032  Svcext.dll      (x86)
	  11/05/98  04:43p    14,752  W3ctrs.dll      (x86)
	  11/05/98  04:43p   227,392  W3svc.dll       (x86)
	  11/05/98  04:43p    55,456  Wam.dll         (x86)
	
	  11/05/98  04:42p    49,424  Admwprox.dll    (Alpha)
	  11/05/98  04:44p   545,552  Asp.dll         (Alpha)
	  11/05/98  04:42p    77,072  Coadmin.dll     (Alpha)
	  11/05/98  04:43p    17,168  Ftpctrs2.dll    (Alpha)
	  11/05/98  04:43p   126,224  Ftpsvc2.dll     (Alpha)
	  11/05/98  04:42p    17,680  Iisfecnv.dll    (Alpha)
	  11/05/98  04:42p   110,864  Iislog.dll      (Alpha)
	  11/05/98  04:42p    25,872  Infoadmn.dll    (Alpha)
	  11/05/98  04:42p   302,864  Infocomm.dll    (Alpha)
	  11/05/98  04:42p    15,120  Infoctrs.dll    (Alpha)
	  11/05/98  04:42p    82,704  Isatq.dll       (Alpha)
	  11/05/98  04:42p    45,840  Iscomlog.dll    (Alpha)
	  11/05/98  04:42p    23,312  Lonsint.dll     (Alpha)
	  11/05/98  04:42p    13,584  Lonsiw95.dll    (Alpha)
	  11/05/98  04:42p   131,856  Metadata.dll    (Alpha)
	  11/05/98  04:42p    12,048  Rpcref.dll      (Alpha)
	  11/05/98  04:42p    29,456  Svcext.dll      (Alpha)
	  11/05/98  04:43p    21,264  W3ctrs.dll      (Alpha)
	  11/05/98  04:43p   381,200  W3svc.dll       (Alpha)
	  11/05/98  04:43p    92,944  Wam.dll         (Alpha)
	
	NOTE: The IIS 4.0 version of this hotfix must be installed over Windows NT 4.0
	Service Pack 4.
	
	This hotfix has been posted to the following Internet location as Fltrfixi.exe
	(x86) and Fltrfixa.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/fltr-fix/
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
