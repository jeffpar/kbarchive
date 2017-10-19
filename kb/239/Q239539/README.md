---
layout: page
title: "Q239539: Change the Certificate Validity Period From Default of One Year"
permalink: /kb/239/Q239539/
---

## Q239539: Change the Certificate Validity Period From Default of One Year

	Article: Q239539
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbIIS kbiis400
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Certificate Server versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Microsoft Certificate Server 1.0
	
	By default, certificates issued by Microsoft Certificate Server 1.0 are valid for
	one year. You can modify the registry values under the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\CertSvc\Configuration\<YourCAName>
	
	Default values:
	
	1. ValidityPeriod REG_SZ "Years" (Must be plural!)
	2. ValidityPeriodUnits REG_DWORD 0x1
	3. Set ValidityPeriodUnits to an integer value, from 1-5. Stop, and then
	  restart, the Certificate Server service.
	4. The validity period of a root Microsoft Certificate Server CA certificate is
	  five years for Certificate Server 1.0.
	5. The validity period of a non-root Microsoft Certificate Server CA certificate
	  is controlled by the issuing Certificate Authority.
	6. Certificates issued by your Certificate Server will expire no later than the
	  same time when your CA Certificate expires.
	
	  For example, if there are only two years left on your CA Certificate, issued
	  certificates will be valid for no more than two years, even if you set the
	  registry to issue five year certificates.
	
	Additional query words: Expiry Validity Period
	
	======================================================================
	Keywords          : kbDSupport kbIIS kbiis400 
	Technology        : kbiisSearch kbiis400 kbCertServSearch kbZNotKeyword3 kbCertServ100 kbCertServ200
	Version           : :1.0,2.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
