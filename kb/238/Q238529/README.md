---
layout: page
title: "Q238529: Response Truncated for PUT Sent to Port Other Than 80 or 443"
permalink: /kb/238/Q238529/
---

## Q238529: Response Truncated for PUT Sent to Port Other Than 80 or 443

{% raw %}

	Article: Q238529
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
	
	If a PUT request is sent to port 80 or 443 and the response is "HTTP/1.1 201
	Created," an HTML page is attached at the end of the response. For example:
	
	  HTTP/1.1 201 Created
	  Server: Microsoft-IIS/4.0
	  Date: Thu, 19 Jul 2007 20:06:03.GMT
	  Location: http://episode1/uploads/Upload46.M64
	  Content-Type: text/html
	  Content-Length: 69
	  Allow: OPTIONS, TRACE, GET, HEAD, PUT, DELETE
	
	  <body><h1>/uploads/Upload46.M64 was created
	  successfully.</h1></body>
	
	However, if the same PUT request is sent to port other than 80 or 443, (such as
	port 8080), the HTML page is not attached at the end of the response. For
	example:
	
	  HTTP/1.1.201 Created
	  Server: Microsoft-IIS/4.0
	  Date: Thu, 19 Jul 2007 18:38:08.GMT
	  Location: http://episode1:8080/uploads/Upload52.M64
	
	The incomplete response (compared to the response from port 80) may cause some
	programs that require the HTML page to stop responding (hang).
	
	
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
	
	The English language version of this fix should have the following file
	attributes or later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  07/26/99  08:06p               328,512 Asp.dll       x86
	  07/26/99  08:04p                43,456 Coadmin.dll   x86
	  07/26/99  08:06p                11,168 Ftpctrs2.dll  x86
	  07/26/99  08:06p                81,888 Ftpsvc2.dll   x86
	  07/26/99  07:12p                11,396 Httpext.h     x86
	  07/26/99  08:05p                17,424 Iisadmin.dll  x86
	  07/26/99  08:04p                62,960 Iislog.dll    x86
	  07/26/99  08:04p                16,848 Infoadmn.dll  x86
	  07/26/99  08:04p               184,720 Infocomm.dll  x86
	  07/26/99  08:04p                29,520 Iscomlog.dll  x86
	  07/26/99  08:05p                11,248 Iwrps.dll     x86
	  07/26/99  08:04p                71,232 Metadata.dll  x86
	  07/26/99  08:05p                51,296 Nsepm.dll     x86
	  07/26/99  08:05p                14,752 W3ctrs.dll    x86
	  07/26/99  08:05p               227,936 W3svc.dll     x86
	  07/26/99  08:05p                87,504 Wam.dll       x86
	
	  07/26/99  08:00p               549,136 Asp.dll       Alpha
	  07/26/99  07:58p                77,072 Coadmin.dll   Alpha
	  07/26/99  07:59p                17,168 Ftpctrs2.dll  Alpha
	  07/26/99  07:59p               126,736 Ftpsvc2.dll   Alpha
	  07/26/99  07:14p                11,396 Httpext.h     Alpha
	  07/26/99  07:59p                28,432 Iisadmin.dll  Alpha
	  07/26/99  07:58p               112,400 Iislog.dll    Alpha
	  07/26/99  07:58p                25,872 Infoadmn.dll  Alpha
	  07/26/99  07:58p               303,376 Infocomm.dll  Alpha
	  07/26/99  07:58p                45,840 Iscomlog.dll  Alpha
	  07/26/99  07:59p                16,656 Iwrps.dll     Alpha
	  07/26/99  07:58p               131,856 Metadata.dll  Alpha
	  07/26/99  07:59p                87,824 Nsepm.dll     Alpha
	  07/26/99  07:59p                21,264 W3ctrs.dll    Alpha
	  07/26/99  07:59p               382,224 W3svc.dll     Alpha
	  07/26/99  07:59p               149,264 Wam.dll       Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	Additional query words: iiswww
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
