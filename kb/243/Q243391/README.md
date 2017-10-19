---
layout: page
title: "Q243391: Client Certificate Mapping Corrupts in Server-Side Variables"
permalink: /kb/243/Q243391/
---

## Q243391: Client Certificate Mapping Corrupts in Server-Side Variables

	Article: Q243391
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbIIS kbiis400 kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When accessing an Microsoft Internet Information Server (IIS) 4.0 Web site that
	requires a client certificate, the server-side variables do not consistently
	identify the authenticated client and often the variables contain garbage
	characters.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Size      Version     File name     Platform  
	  --------------------------------------------------------------
	  11/22/99  06:31p  329,024   4.2.733.1   Asp.dll       x86
	  11/03/99  09:03p   17,872   4.2.729.1   Iiscrmap.dll  x86
	  11/22/99  06:29p  185,248   4.2.733.1   Infocomm.dll  x86
	  11/22/99  06:30p   11,248   4.2.733.1   Iwrps.dll     x86
	  11/22/99  06:30p   38,256   4.2.733.1   Ssinc.dll     x86
	  11/22/99  06:30p   25,360   4.2.733.1   Sspifilt.dll  x86
	  11/22/99  06:30p  228,464   4.2.733.1   W3svc.dll     x86
	  11/22/99  06:29p   87,504   4.2.733.1   Wam.dll       x86
	
	  11/22/99  06:31p  549,648   4.2.733.1   Asp.dll       Alpha
	  11/03/99  09:03p   27,920   4.2.729.1   Iiscrmap.dll  Alpha
	  11/22/99  06:29p  303,888   4.2.733.1   Infocomm.dll  Alpha
	  11/22/99  06:30p   16,656   4.2.733.1   Iwrps.dll     Alpha
	  11/22/99  06:30p   60,176   4.2.733.1   Ssinc.dll     Alpha
	  11/22/99  06:30p   39,696   4.2.733.1   Sspifilt.dll  Alpha
	  11/22/99  06:30p  383,760   4.2.733.1   W3svc.dll     Alpha
	  11/22/99  06:29p  149,264   4.2.733.1   Wam.dll       Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch
	
	======================================================================
	Keywords          : kbIIS kbiis400 kbWinNT400PreSP7Fix 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
