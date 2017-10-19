---
layout: page
title: "Q216485: HOW TO: Limit the Number of Trusted Certification Authorities"
permalink: /kb/216/Q216485/
---

## Q216485: HOW TO: Limit the Number of Trusted Certification Authorities

	Article: Q216485
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbAudDeveloper kbAudITPro kbHOWTOmaster
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - To Make Trusted Certification Authorities Unavailable by Modifying the
	  Registry
	
	SUMMARY
	=======
	
	This step-by-step article describes how to make unavailable some of the trusted
	certification authorities (CAs) that are included with Microsoft Internet
	Information Server (IIS) 4.0 You may want to make some of these trusted CAs
	unavailable to make sure that only certain CAs are used.
	
	To Make Trusted Certification Authorities Unavailable by Modifying the Registry
	-------------------------------------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	All trusted CA certificates are handled by Schannel.dll, which stores its data in
	the registry. In the registry, you see a series of registry keys under the
	CertificationAuthorities key. There is one key for each preinstalled CA. Each CA
	key contains an Enabled entry. This entry is set to 0x1 if the CA is trusted, or
	is set to 0x0 if the CA is not trusted.
	
	NOTE: Do not delete these registry entries. If you do, Schannel automatically
	re-creates them.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\CertificationAuthorities
	
	3. You see a list of all of the trusted CAs. Click the CA that you do not want
	  to trust.
	
	4. Click the Enabled subkey, and then set its value to 0 (zero).
	
	5. Repeat these steps to make unavailable all of the CA certificates that you do
	  not want to trust.
	
	6. Restart the computer.
	
	
	Additional query words: disable
	
	======================================================================
	Keywords          : kbAudDeveloper kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
