---
layout: page
title: "Q258727: Web Site Accepts Revoked Certificates"
permalink: kb/258/Q258727/
---

## Q258727: Web Site Accepts Revoked Certificates

	Article: Q258727
	Product(s): Internet Information Server
	Version(s): winnt:5.0; :2.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Certificate Services, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Information Services (IIS) supports real-time Certificate Revocation
	List (CRL) checking to ensure that the client certificates authenticating to a
	Web site are valid (not revoked). CRL checking is enabled when the CertCheckMode
	metabase property is set to 0, and the Web site or Web page requires client
	certificates.
	
	NOTE: This entry must be manually added; it is not included by default.
	
	However, even if you have CRL checking enabled and the Web site or Web page
	requires client certificates, the client may still successfully authenticate to
	the IIS computer even when the client certificate has been revoked.
	
	CAUSE
	=====
	
	Any changes or revocations to a certificate are not processed by the IIS
	computer until a new CRL is published. The default time for this is one week.
	
	RESOLUTION
	==========
	
	Change the Publication Interval setting for the CRL from the default time of one
	week to a shorter duration. To change the default time, do the following:
	
	1. Start the Microsoft Management Console (MMC) Certificate Authority snap-in.
	
	2. Open the properties for the Revoked Certificates folder, and then change the
	  Publication Interval setting. You can also view the current CRL.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q231881 How to Install/Uninstall a Public Key Certificate Authority
	
	  Q232165 Enabling Certificate Revocation Checking in IIS 4.0
	
	REFERENCES
	==========
	
	Microsoft Internet Information Services 5.0 Documentation
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbCertServSearch kbZNotKeyword3 kbCertServ200
	Version           : winnt:5.0; :2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
