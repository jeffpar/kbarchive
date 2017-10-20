---
layout: page
title: "Q188346: New Client Connectivity Detection in ServerSupportFunction()"
permalink: /kb/188/Q188346/
---

## Q188346: New Client Connectivity Detection in ServerSupportFunction()

{% raw %}

	Article: Q188346
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Currently, there is no API to detect whether or not a client is connected for
	ISAPI applications.
	
	RESOLUTION
	==========
	
	The HTTP Server Extension request type (dwHSERRequest) in
	ServerSupportFunction() has been extended to include HSE_REQ_IS_CONNECTED, which
	can be used to detect whether or not a client is connected. The
	ServerSupportFunction() returns TRUE if the client is connected; otherwise,
	FALSE is returned. A new header file (Httpext.h) is required for developers to
	use this new feature in writing the ISAPI applications.
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Windows NT 4.0
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File Name     Platform
	  -------------------------------------------------------------
	  12/18/98  02:46p                27,696 admwprox.dll  (x86)
	  12/18/98  02:48p               327,472 asp.dll       (x86)
	  12/18/98  02:46p                43,456 coadmin.dll   (x86)
	  12/18/98  02:47p                11,168 ftpctrs2.dll  (x86)
	  12/18/98  02:47p                81,376 ftpsvc2.dll   (x86)
	  12/18/98  02:47p                55,392 httpodbc.dll  (x86)
	  12/18/98  02:46p                10,224 iisfecnv.dll  (x86)
	  12/18/98  02:46p                61,920 iislog.dll    (x86)
	  12/18/98  02:46p                16,848 infoadmn.dll  (x86)
	  12/18/98  02:46p               184,208 infocomm.dll  (x86)
	  12/18/98  02:46p                 9,584 infoctrs.dll  (x86)
	  12/18/98  02:46p                47,936 isatq.dll     (x86) 
	  12/18/98  02:46p                29,520 iscomlog.dll  (x86)
	  12/18/98  02:47p                11,248 iwrps.dll     (x86)
	  12/18/98  02:46p                13,856 lonsint.dll   (x86)
	  12/18/98  02:46p                 8,336 lonsiw95.dll  (x86)
	  12/18/98  02:46p                71,232 metadata.dll  (x86)
	  12/18/98  02:46p                 7,488 rpcref.dll    (x86)
	  12/18/98  02:46p                12,592 spud.sys      (x86)
	  12/18/98  02:46p                18,032 svcext.dll    (x86)
	  12/18/98  02:47p                14,752 w3ctrs.dll    (x86)
	  12/18/98  02:47p               227,424 w3svc.dll     (x86)
	  12/18/98  02:47p                87,504 wam.dll       (x86)
	  12/18/98  02:01p                11,396 httpext.h     (x86)
	
	  12/18/98  02:48p                49,424 admwprox.dll  (Alpha)
	  12/18/98  02:50p               548,112 asp.dll       (Alpha)
	  12/18/98  02:48p                77,072 coadmin.dll   (Alpha)
	  12/18/98  02:50p                17,168 ftpctrs2.dll  (Alpha)
	  12/18/98  02:50p               126,224 ftpsvc2.dll   (Alpha)
	  12/18/98  02:49p                89,360 httpodbc.dll  (Alpha)
	  12/18/98  02:49p                17,680 iisfecnv.dll  (Alpha)
	  12/18/98  02:49p               110,864 iislog.dll    (Alpha)
	  12/18/98  02:49p                25,872 infoadmn.dll  (Alpha)
	  12/18/98  02:49p               302,864 infocomm.dll  (Alpha)
	  12/18/98  02:49p                15,120 infoctrs.dll  (Alpha)
	  12/18/98  02:48p                82,704 isatq.dll     (Alpha)
	  12/18/98  02:49p                45,840 iscomlog.dll  (Alpha)
	  12/18/98  02:49p                16,656 iwrps.dll     (Alpha)
	  12/18/98  02:48p                23,312 lonsint.dll   (Alpha)
	  12/18/98  02:48p                13,584 lonsiw95.dll  (Alpha)
	  12/18/98  02:48p               131,856 metadata.dll  (Alpha)
	  12/18/98  02:48p                12,048 rpcref.dll    (Alpha)
	  12/18/98  02:49p                20,912 spud.sys      (Alpha)
	  12/18/98  02:49p                29,456 svcext.dll    (Alpha)
	  12/18/98  02:49p                21,264 w3ctrs.dll    (Alpha)
	  12/18/98  02:49p               381,712 w3svc.dll     (Alpha)
	  12/18/98  02:49p               149,264 wam.dll       (Alpha)
	  12/18/98  02:01p                11,396 httpext.h     (Alpha)
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0.
	
	Additional query words: 4.00 iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
