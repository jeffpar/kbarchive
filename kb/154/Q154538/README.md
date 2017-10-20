---
layout: page
title: "Q154538: WinNT 4.0 Upgrade CD Will Not Upgrade WinNT 4.0 Installation"
permalink: /kb/154/Q154538/
---

## Q154538: WinNT 4.0 Upgrade CD Will Not Upgrade WinNT 4.0 Installation

{% raw %}

	Article: Q154538
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetupkbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to reinstall the upgrade version of Microsoft Windows NT
	version 4.0 over an existing version of Microsoft Windows NT version 4.0, you
	may receive one of the following error messages:
	
	  - No previous version of Windows NT could be found on your computer. Setup is
	  unable to verify that you qualify to use this upgrade product. Press F3 to
	  exit.
	
	  - Setup could not find a previous version of Windows NT installed on your
	  computer. To continue, Setup will need to verify that you qualify to use this
	  upgrade product. Please insert your Windows NT Workstation CD- ROM from
	  Windows NT 3.1, 3.5, or 3.51, into your CD-ROM drive.
	
	  - Setup could not find a previous version of Windows NT installed on your
	  computer. To continue, Setup will need to verify that you qualify to use this
	  upgrade product. Please insert your Windows NT Server CD-ROM from Windows NT
	  3.1, 3.5, or 3.51, into your CD-ROM drive.
	
	If you insert a Windows NT CD-ROM from a previous version of Windows NT, you can
	install Windows NT version 4.0 to a new folder, but you cannot reinstall over
	the existing installation of Windows NT version 4.0.
	
	CAUSE
	=====
	
	The Windows NT version 4.0 Upgrade Setup checks for Microsoft Windows NT
	versions 3.1, 3.5, and 3.51. Setup does not recognize Windows NT version 4.0 as
	a version of Windows NT that can be upgraded.
	
	RESOLUTION
	==========
	
	To work around this behavior, upgrade using the full retail version of Microsoft
	Windows NT version 4.0.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbsetup kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
