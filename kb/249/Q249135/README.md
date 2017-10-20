---
layout: page
title: "Q249135: Cannot Apply 56-Bit SP6/6a to 128-Bit Windows NT 4.0"
permalink: /kb/249/Q249135/
---

## Q249135: Cannot Apply 56-Bit SP6/6a to 128-Bit Windows NT 4.0

{% raw %}

	Article: Q249135
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You cannot apply the 56-bit (standard encryption) version of Service Pack 6 or
	6a to a version of Windows NT 4.0 that is running a 128-bit (high encryption)
	version of a service pack.
	
	MORE INFORMATION
	================
	
	If you attempt to apply the 56-bit (standard encryption) version of Service Pack
	6 or 6a to a version of Windows NT 4.0 that is running a 128-bit (high
	encryption) version of a service pack, you receive the following error message:
	
	  You have chosen to install a version of the Service Pack with Standard
	  Encryption onto a system with High Encryption. This is not supported. To
	  successfully install this version of the Service Pack, you must install the
	  High Encryption version. Press help for more information about obtaining the
	  High Encryption version of this Service Pack. Service Pack setup will now
	  exit.
	
	In earlier service packs, installing a lower-encryption service pack generates an
	error message stating that you are about to downgrade the level of security, but
	you can install standard encryption over high encryption. In Service Pack 6/6a,
	you cannot do so.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q250867 Cannot Install Service Pack 6/6a with High Encryption Internet
	  Explorer
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
