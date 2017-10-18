---
layout: page
title: "Q241127: ASP Uses SYSTEM Account to Release User Object"
permalink: kb/241/Q241127/
---

## Q241127: ASP Uses SYSTEM Account to Release User Object

	Article: Q241127
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
	
	The ATL COM object can be instantiated and its functions can be invoked in an
	ASP page. ASP uses the credential of the user who accesses the page to run the
	functions in the object. ASP uses the SYSTEM account to release the object when
	it is out of scope. Using the SYSTEM account to release the object causes a
	potential security problem.
	
	CAUSE
	=====
	
	ASP reverts to the SYSTEM account earlier than it should.
	
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
	  08/20/99  02:13p               329,024 asp.dll       (x86)
	  08/20/99  02:11p                43,456 coadmin.dll   (x86)
	  08/20/99  02:13p                11,168 ftpctrs2.dll  (x86)
	  08/20/99  02:13p                81,888 ftpsvc2.dll   (x86)
	  08/20/99  01:22p                11,396 httpext.h     (x86)
	  08/20/99  02:12p                17,424 iisadmin.dll  (x86)
	  08/20/99  02:11p                62,960 iislog.dll    (x86)
	  08/20/99  02:12p                16,848 infoadmn.dll  (x86)
	  08/20/99  02:12p               184,736 infocomm.dll  (x86)
	  08/20/99  02:12p                29,520 iscomlog.dll  (x86)
	  08/20/99  02:12p                11,248 iwrps.dll     (x86)
	  08/20/99  02:11p                71,232 metadata.dll  (x86)
	  08/20/99  02:12p                51,296 nsepm.dll     (x86)
	  08/20/99  02:12p                14,752 w3ctrs.dll    (x86)
	  08/20/99  02:12p               229,008 w3svc.dll     (x86)
	  08/20/99  02:12p                87,504 wam.dll       (x86)
	
	  08/20/99  02:13p               549,648 asp.dll       (Alpha)
	  08/20/99  02:11p                77,072 coadmin.dll   (Alpha)
	  08/20/99  02:12p                17,168 ftpctrs2.dll  (Alpha)
	  08/20/99  02:12p               126,736 ftpsvc2.dll   (Alpha)
	  08/20/99  01:25p                11,396 httpext.h     (Alpha)
	  08/20/99  02:11p                28,432 iisadmin.dll  (Alpha)
	  08/20/99  02:11p               112,400 iislog.dll    (Alpha)
	  08/20/99  02:11p                25,872 infoadmn.dll  (Alpha)
	  08/20/99  02:11p               303,888 infocomm.dll  (Alpha)
	  08/20/99  02:11p                45,840 iscomlog.dll  (Alpha)
	  08/20/99  02:12p                16,656 iwrps.dll     (Alpha)
	  08/20/99  02:10p               131,856 metadata.dll  (Alpha)
	  08/20/99  02:11p                87,824 nsepm.dll     (Alpha)
	  08/20/99  02:12p                21,264 w3ctrs.dll    (Alpha)
	  08/20/99  02:12p               385,296 w3svc.dll     (Alpha)
	  08/20/99  02:11p               149,264 wam.dll       (Alpha)
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	Additional query words: asp security
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
