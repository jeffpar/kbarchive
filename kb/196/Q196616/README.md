---
layout: page
title: "Q196616: Deadlock When Updating ASP Pages on a Multiprocessor Server"
permalink: kb/196/Q196616/
---

## Q196616: Deadlock When Updating ASP Pages on a Multiprocessor Server

	Article: Q196616
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400bug kbOSWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an ASP application is updated on a dual processor server, there is a
	possibility that the Internet Information Server (IIS) will deadlock and the
	service will stop servicing requests. The only way to stop IIS is to restart the
	server.
	
	CAUSE
	=====
	
	Two IIS threads are executing on each of the system's processors. Each thread is
	waiting on the other thread to complete, causing the deadlock.
	
	
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
	
	  Date      Time       Size    File Name     Platform
	  ---------------------------------------------------
	  11/30/98  05:54p    27,696   Admwprox.dll   (x86)
	  11/30/98  05:56p   326,384   Asp.dll
	  11/30/98  05:54p    43,456   Coadmin.dll
	  11/30/98  05:55p    11,168   Ftpctrs2.dll
	  11/30/98  05:55p    81,376   Ftpsvc2.dll
	  11/30/98  05:54p    10,224   Iisfecnv.dll
	  11/30/98  05:54p    61,920   Iislog.dll
	  11/30/98  05:54p    16,848   Infoadmn.dll
	  11/30/98  05:54p   184,192   Infocomm.dll
	  11/30/98  05:54p     9,584   Infoctrs.dll
	  11/30/98  05:53p    47,936   Isatq.dll
	  11/30/98  05:54p    29,520   Iscomlog.dll
	  11/30/98  05:54p    13,856   Lonsint.dll
	  11/30/98  05:54p     8,336   Lonsiw95.dll
	  11/30/98  05:54p    71,232   Metadata.dll
	  11/30/98  05:54p     7,488   Rpcref.dll
	  11/30/98  05:54p    12,592   Spud.sys
	  11/30/98  05:54p    18,032   Svcext.dll
	  11/30/98  05:55p    14,752   W3ctrs.dll
	  11/30/98  05:55p   227,392   W3svc.dll
	  11/30/98  05:54p    55,456   Wam.dll
	
	  11/30/98  05:58p    49,424   Admwprox.dll  (Alpha)
	  11/30/98  06:00p   546,064   Asp.dll
	  11/30/98  05:58p    77,072   Coadmin.dll
	  11/30/98  05:59p    17,168   Ftpctrs2.dll
	  11/30/98  05:59p   126,224   Ftpsvc2.dll
	  11/30/98  05:58p    17,680   Iisfecnv.dll
	  11/30/98  05:58p   110,864   Iislog.dll
	  11/30/98  05:58p    25,872   Infoadmn.dll
	  11/30/98  05:58p   302,864   Infocomm.dll
	  11/30/98  05:58p    15,120   Infoctrs.dll
	  11/30/98  05:57p    82,704   Isatq.dll
	  11/30/98  05:58p    45,840   Iscomlog.dll
	  11/30/98  05:58p    23,312   Lonsint.dll
	  11/30/98  05:58p    13,584   Lonsiw95.dll
	  11/30/98  05:57p   131,856   Metadata.dll
	  11/30/98  05:58p    12,048   Rpcref.dll
	  11/30/98  05:58p    20,912   Spud.sys
	  11/30/98  05:58p    29,456   Svcext.dll
	  11/30/98  05:59p    21,264   W3ctrs.dll
	  11/30/98  05:59p   381,200   W3svc.dll
	  11/30/98  05:58p    92,944   Wam.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. The fix is included in Windows NT 4.0 SP5.
	
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch
	
	======================================================================
	Keywords          : kbDSupport kbiis400bug kbOSWinNT400sp5fix 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
