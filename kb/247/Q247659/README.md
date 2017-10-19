---
layout: page
title: "Q247659: Removing Trusted Certification Authorities from an IIS Server"
permalink: /kb/247/Q247659/
---

## Q247659: Removing Trusted Certification Authorities from an IIS Server

	Article: Q247659
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbiis400
	Last Modified: 26-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to remove one or more of the Trusted Certification
	Authorities that Microsoft Internet Information Server (IIS) uses to trust
	client or other types of certificates.
	
	MORE INFORMATION
	================
	
	NOTE: This only applies to Windows NT 4.0 not Windows 2000.
	
	For Re-Installed Certificate Authorities:
	
	See Knowledge Base article
	
	  Q216485 How to Limit the Number of Trusted Certificate Authorities
	
	This article shows how to remove pre-installed authorities. These are Trusted
	Certificate Authorities (TCA's) that were installed with IIS or Microsoft
	Internet Explorer.
	
	NOTE: In the article above replace step 4 "With the name selected, click Edit,
	and then click Delete once you have selected the name. Click on the sub-key
	Enabled and set to "0".
	
	For Post-Install Certificate Authorities:
	
	(for third party authorities installed after IIS or Internet Explorer has been
	installed)
	
	The certificate authorities will not be listed at the registry key mentioned in
	the above article. You must use Internet Explorer 5.0 to remove the trusted
	authority from the IIS certificate store.
	
	Here are the steps (for Internet Explorer 5.0 only):
	
	1. Start Internet Explorer, select Tools and then select Internet Options.
	
	2. Select the Content tab.
	
	3. Click the Certificates button.
	
	4. Select the certificate you want to remove.
	
	5. Click Remove and then OK.
	
	NOTE: The local certificate store is kept in a hidden part of the registry which
	is encrypted and cannot be viewed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbiis400 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
