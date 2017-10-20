---
layout: page
title: "Q126576: SMS Does Not Use Local Thesaurus for Word for Windows 6.0"
permalink: /kb/126/Q126576/
---

## Q126576: SMS Does Not Use Local Thesaurus for Word for Windows 6.0

{% raw %}

	Article: Q126576
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbsetup smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you specify the location of the thesaurus during a workstation installation
	of Word for Windows version 6.0 on a Windows for Workgroups version 3.11 system,
	Systems Management Server version 1.0 overwrites the user-modified entries in
	the WINWORD6.INI file with the Universal Naming Convention (UNC) location of the
	Windows for Workgroups shared thesaurus.
	
	For example, after you install Word for Windows, the WINWORD6.INI file contains:
	
	  [Microsoft Word]
	  Thesaurus 1033,0=\\<server name>\<share name>\PROOF\MSTHES.DLL,
	  \\<server name>\<share name>\PROOF\MSTH_AM.LEX
	
	You modify the WINWORD6.INI file to read:
	
	  [Microsoft Word]
	  Thesaurus 1033,0=C:\WINWORD\PROOF\MSTHES.DLL,
	  C:\WINWORD\PROOF\MSTH_AM.LEX
	
	After you install SMS, the WINWORD6.INI file contains:
	
	  [Microsoft Word]
	  Thesaurus 1033,0=\\<server name>\<share name>\PROOF\MSTHES.DLL,
	  \\<server name>\<share name>\PROOF\MSTH_AM.LEX
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms winword word6
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbsetup smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
