---
layout: page
title: "Q295281: HowTo Renew/Create New CSR While Another Certificate Installed"
permalink: kb/295/Q295281/
---

## Q295281: HowTo Renew/Create New CSR While Another Certificate Installed

	Article: Q295281
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can create a new certificate signing request
	(CSR) or generate a renewal request without having to remove the existing
	certificate from your Web site.
	
	MORE INFORMATION
	================
	
	To create a new CSR or generate a renewal request while another certificate
	exists on your Web site, follow these steps:
	
	1. In the Microsoft Management Console (MMC), right-click the default Web site,
	  click New, and then click Site.
	
	2. Create a new site and give it a temporary name.
	
	3. Right-click the new site, click Properties, click the Directory Security tab,
	  and then click Server certificate.
	
	4. Select Create new certificate and follow the wizard to create a new CSR. When
	  prompted, select Prepare the request now but send it later.
	
	5. Use the CSR that you just created to request a new certificate from the
	  certificate authority (CA) that issued the original certificate.
	
	  NOTE: If you are renewing a VeriSign certificate, see the following Web site:
	
	  http://www.verisign.com/repository/digidren.html
	
	  If you are unable to renew the certificate by using this Web site, you can
	  reach VeriSign's renewal department at the following e-mail address or
	  telephone numbers:
	
	  E-mail: renewal@verisign.com
	  Technical Support: (877) 438-8776
	  Sales: (650) 429-3347
	
	6. When you receive the certificate from VeriSign or another third-party CA,
	  save it to your hard drive. Remember the serial number of this certificate
	  and where you save it.
	
	7. Right-click the temporary site that you created in step 2, click Properties,
	  click the Directory Security tab, click Server certificate, and then click
	  Next. Follow the wizard. When prompted, select Process the pending request.
	
	8. After the certificate has been installed, click OK, and then stop and start
	  the Web site.
	
	9. Right-click the temporary site that you created in step 2, click Properties,
	  click Directory Security, and then click Server certificate.
	
	10. Select Remove the current certificate and follow the wizard. This removes
	  the certificate from IIS, but the certificate remains in the certificate
	  store.
	
	11. Right-click the Web site that has the original server certificate installed
	  (that is, the certificate that you are renewing or replacing), click
	  Properties, click Directory Security, click Server certificate, and then
	  select Replace the current certificate.
	
	12. Select the certificate that you just installed. If you see duplicate
	  certificate names, make sure that you select the certificate that matches
	  the serial number that you noted in step 6.
	
	NOTE: The list of available certificates is populated from the personal
	certificate store, which is located under Certificates (Local Computer) in the
	MMC. To view the personal certificate store, add the Certificates snap-in for
	the Computer Account to your MMC.
	
	NOTE: If IIS does not display the new certificate, you may need to copy it from
	the personal certificate store that is located under Certificates - Current User
	in the MMC into the personal certificate store that is located under
	Certificates (Local Computer). To view the personal certificate store, add the
	Certificates snap-in for the User Account to your MMC.
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	
