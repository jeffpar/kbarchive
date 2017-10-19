---
layout: page
title: "Q261655: Cannot Make an SSL Connection After Exporting and Importing an S"
permalink: /kb/261/Q261655/
---

## Q261655: Cannot Make an SSL Connection After Exporting and Importing an S

	Article: Q261655
	Product(s): Internet Information Server
	Version(s): 2000,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis500 kbbpqfe1a kbWin2000SP2Fix
	Last Modified: 18-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 5.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You export a certificate from a computer that is running either Internet
	Information Server 4.0 or Internet Information Services (IIS) 5.0 and then
	import the certificate on a computer with IIS 5.0. The import succeeds, but you
	are not able to connect, and in the browser you may receive the "No Server or
	DNS" error message. In the event log you may receive the following error
	message:
	
	  Event Type: Error
	  Event Source: Schannel
	  Event Category: None
	  Event ID: 36871
	  Date: 4/26/2000
	  Time: 11:17:34 AM
	  User: N/A
	  Computer: WEBSERVER2
	  Description: A fatal error occurred while creating an SSL server credential.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time       Version         Size   File name    Platform
	  ------------------------------------------------------------------
	  05/02/2000 12:34:58PM 5.131.2195.2079 466,704 crypt32.dll x86
	
	
	NOTE: To effectively correct this problem, follow these steps:
	
	In this scenario, Server A currently houses all certificates and is used as the
	export server (this can be a Microsoft Windows NT or Windows 2000 server).
	Server B is the failing import server that has certificates that have been
	imported from Server A.
	
	NOTE: Server A and Server B can be the same computer.
	
	1. Remove all certificates from Server B that exist from the failed import. This
	  includes certificates that are located in the "Trusted Root", "Intermediate",
	  and "Personal" certificate stores.
	
	2. Apply the hotfix to Server A.
	
	3. Apply the hotfix to Server B.
	
	4. On Server A, use the MMC Certificates snap-in to export the certificate. When
	  you export a certificate for use on another computer, always select the
	  following options and remember the password:
	
	   - Yes, Export the private key
	
	   - Personal Information Exchange - PKCS #12 (.PFX)
	
	   - Include all certificates in the certification path if possible
	
	NOTE: Do not select Require Stong Encryption.
	
	5. On Server B, import the certificate into the appropriate "Local Computer"
	  certificate store (Trusted Root, Intermediate, or Personal) and test Secure
	  Sockets Layer (SSL).
	
	NOTE: If you apply the High Encryption Pack to the installation, you must apply
	this hotfix after you install Windows 2000 Service Pack 1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 2.
	
	To receive the hotfix without applying SP2, contact Microsoft Product Support
	Services.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis500 kbbpqfe1a kbWin2000SP2Fix 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbiisSearch kbiis500 kbWinAdvServSearch
	Version           : :2000,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
