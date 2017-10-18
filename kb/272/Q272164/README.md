---
layout: page
title: "Q272164: MSCEP.DLL Add-on No Longer Functions After One Successful Enroll"
permalink: kb/272/Q272164/
---

## Q272164: MSCEP.DLL Add-on No Longer Functions After One Successful Enroll

	Article: Q272164
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 Server Resource Kit ISBN 1-57231-805-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MSCEP.DLL is a Certificate Services add-on ISAPI dynamic-link library (DLL) that
	enables enrollment for Cisco Systems, Inc., routers for IPSec authentication
	certificates from a Microsoft Windows 2000 Certificate Authority (CA) using the
	Simple Certificate Enrollment Protocol (SCEP).
	
	The MSCEP add-on that is included with the Windows 2000 Resource Kits will stop
	issuing certificates to the client after one successful enrollment. Subsequent
	enrollments may return an integrity check error on the client.
	
	After the Certificate Authority is restarted, the first enrollment will again
	succeed, with subsequent requests failing.
	
	MORE INFORMATION
	================
	
	This problem is corrected when you use the updated version of the Windows 2000
	Certificate Services Add-on for SCEP (version 4.71.1015.0) which is available on
	the Microsoft Windows Update Web site.
	
	  http://corporate.windowsupdate.microsoft.com/en/default.asp
	
	To locate the updated file, use the search engine provided at the URL mentioned
	above, with the keyword "SCEP" for software updates.
	
	Microsoft has confirmed this to be a problem in MSCEP.DLL. Please note that this
	only applies to IRE Windows SCEP clients. This does not apply to Cisco IOS
	routers.
	
	Additional query words: reskit w2k Win2000 RKBook tools 1-57231-805-8 1-57231-808-2
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbprb kbinfo
	
	=============================================================================
	
