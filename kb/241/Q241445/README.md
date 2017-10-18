---
layout: page
title: "Q241445: Parameters after #EXEC Directive Are Limited to 260 Characters"
permalink: kb/241/Q241445/
---

## Q241445: Parameters after #EXEC Directive Are Limited to 260 Characters

	Article: Q241445
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
	
	The parameters following the server-side include directive #EXEC are limited to
	260 characters. Therefore, a long parameter string is truncated.
	
	CAUSE
	=====
	
	The 260 character limit was a hard-coded limit.
	
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
	  09/16/99  12:40p               329,024 asp.dll       (x86)
	  09/16/99  12:38p                43,456 coadmin.dll   (x86)
	  09/16/99  12:39p                11,168 ftpctrs2.dll  (x86)
	  09/16/99  12:39p                81,888 ftpsvc2.dll   (x86)
	  09/16/99  11:49a                11,396 httpext.h     (x86)
	  09/16/99  12:38p                17,424 iisadmin.dll  (x86)
	  09/16/99  12:38p                62,960 iislog.dll    (x86)
	  09/16/99  12:38p                16,848 infoadmn.dll  (x86)
	  09/16/99  12:38p               184,736 infocomm.dll  (x86)
	  09/16/99  12:38p                29,520 iscomlog.dll  (x86)
	  09/16/99  12:39p                11,248 iwrps.dll     (x86)
	  09/16/99  12:37p                71,232 metadata.dll  (x86)
	  09/16/99  12:38p                51,296 nsepm.dll     (x86)
	  09/16/99  12:39p                38,256 ssinc.dll     (x86)
	  09/16/99  12:39p                14,752 w3ctrs.dll    (x86)
	  09/16/99  12:39p               229,008 w3svc.dll     (x86)
	  09/16/99  12:38p                87,504 wam.dll       (x86)
	
	  09/16/99  12:40p               549,648 asp.dll       (Alpha)
	  09/16/99  12:38p                77,072 coadmin.dll   (Alpha)
	  09/16/99  12:39p                17,168 ftpctrs2.dll  (Alpha)
	  09/16/99  12:39p               126,736 ftpsvc2.dll   (Alpha)
	  09/16/99  11:53a                11,396 httpext.h     (Alpha)
	  09/16/99  12:38p                28,432 iisadmin.dll  (Alpha)
	  09/16/99  12:38p               112,400 iislog.dll    (Alpha)
	  09/16/99  12:38p                25,872 infoadmn.dll  (Alpha)
	  09/16/99  12:38p               303,888 infocomm.dll  (Alpha)
	  09/16/99  12:38p                45,840 iscomlog.dll  (Alpha)
	  09/16/99  12:39p                16,656 iwrps.dll     (Alpha)
	  09/16/99  12:37p               131,856 metadata.dll  (Alpha)
	  09/16/99  12:38p                87,824 nsepm.dll     (Alpha)
	  09/16/99  12:39p                60,176 ssinc.dll     (Alpha)
	  09/16/99  12:39p                21,264 w3ctrs.dll    (Alpha)
	  09/16/99  12:39p               385,296 w3svc.dll     (Alpha)
	  09/16/99  12:38p               149,264 wam.dll       (Alpha)
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	The 260 character limit was hard coded; it has been changed to 2,048 characters.
	
	Additional query words: iisapi iisinterop iisscript
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
