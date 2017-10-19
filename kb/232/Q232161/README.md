---
layout: page
title: "Q232161: Changing the Location of Your Certificate Revocation List (CRL)"
permalink: /kb/232/Q232161/
---

## Q232161: Changing the Location of Your Certificate Revocation List (CRL)

	Article: Q232161
	Product(s): Internet Information Server
	Version(s): 2.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Certificate Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Certificate Services 2.0 as a root certificate authority to approve
	and digitally sign certificates, a CRL (Certificate Revocation List) is added to
	the certificates that are issued. A CRL is a list that certificate authorities
	use to publish certificates that have been revoked. This can be used by
	applications (such as Internet Explorer 5.0 for example) to check the validity
	of certificates.
	
	MORE INFORMATION
	================
	
	You may want to change the location of your CRL. There are several reasons you
	may want to do this. For example, the URL may point to the local NetBIOS name of
	the server instead of a valid URL that internet users use to check for
	certificate revocation (such as the DNS name of the Web server and the path to
	the CRL). To change the location of your CRL, do the following:
	
	1. On the Certificate Server computer, open the Certificate Authority console
	  (MMC). Make sure you are logged in as the administrator before performing the
	  following tasks or this procedure may fail.
	
	2. Right-click on the name of the certification authority and click Properties.
	
	3. Click Policy Module, and then click Configure.
	
	4. Click the X.509 extensions.
	
	5. In the CRL Distribution Points section, do one of the following:
	
	   - Click Add and type in a new CRL distribution point to be published in
	     issued certificates.
	
	   - Click Remove and remove a CRL distribution point.
	
	   - Uncheck a URL that you do not want to publish as a CRL distribution point,
	     but want to remain in the list.
	
	   - Check a URL that you now want to publish as a CRL distribution point,
	     which was previously unchecked.
	
	6. When this is changed, you will receive a message stating that you must
	  restart the Certificate Services in order for the change to take effect.
	  Click OK on this message.
	
	7. Restart the Certificate Services by right-clicking on the name of the server,
	  and then choose All Tasks and click Stop Service.
	
	8. To restart the server, perform the same steps as above, but select Start
	  Service.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbCertServSearch kbZNotKeyword3 kbCertServ200
	Version           : :2.0,5.0
	Issue type        : kbinfo
	Solution Type     : kbpending
	
	=============================================================================
	
