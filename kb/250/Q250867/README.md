---
layout: page
title: "Q250867: Cannot Install SP 6/6a with High Encryption Internet Explorer"
permalink: /kb/250/Q250867/
---

## Q250867: Cannot Install SP 6/6a with High Encryption Internet Explorer

{% raw %}

	Article: Q250867
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 28-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server version 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to install the standard-encryption (or 56-bit) version of Windows
	NT 4.0 Service Pack 6 or 6a on a Windows NT 4.0-based computer that already has
	Microsoft Internet Explorer High Encryption Pack or Internet Explorer version
	5.5 installed, you receive the following error message:
	
	  You have chosen to install a version of the Service Pack with Standard
	  Encryption onto a system with High Encryption. This is not supported. To
	  successfully install this version of the Service Pack, you must install the
	  High Encryption version. Press Help for more information about obtaining the
	  High Encryption Version of this Service Pack. Service Pack Setup will now
	  exit.
	
	CAUSE
	=====
	
	This issue occurs because the Schannel.dll file that is installed by Microsoft
	Internet Explorer High Encryption Pack and Internet Explorer 5.5 cannot be
	overwritten by the service pack installation program.
	
	Internet Explorer 5.5 includes 128-bit encryption by default because of the
	United States government's recent decision to allow companies to export products
	that use strong, 128-bit encryption.
	
	Windows NT 4.0 Service Pack 6 and 6a were released before this decision was made.
	Therefore, localized versions of Service Pack 6 and 6a are 40-bit versions.
	40-bit versions of these service packs detect higher encryption levels and do
	not allow themselves to be installed.
	
	RESOLUTION
	==========
	
	To work around this issue and prevent the version-number scanner from comparing
	the Schannel.dll file versions:
	
	1. Use any text editor (such as Notepad) to open the Update.inf file in the
	  I386\Update folder in the service pack source files.
	
	2. Place a semicolon (;) before the reference to the Schannel.dll, Security.dll,
	  and Ntlmssps.dll files in the [CheckSecurity.System32.files] section of the
	  Update.inf file.
	
	3. Save and then close the Update.inf file.
	
	4. Install the service pack.
	
	Additional query words: 56 bit sp6 sp6a 128bit install 128
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTS400sp6 kbWinNTS400search kbNTTermServ400sp6 kbNTTermServSearch kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
