---
layout: page
title: "Q139743: DriveSpace Error 395 or 312 When Resizing Removable Media"
permalink: /kb/139/Q139743/
---

## Q139743: DriveSpace Error 395 or 312 When Resizing Removable Media

{% raw %}

	Article: Q139743
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you adjust the free space on removable media in DriveSpace or DriveSpace 3,
	you may receive either or both of the following error messages:
	
	  - Error- Windows cannot work with drive <X> because application is
	  currently using that drive.
	  ID Number: DRVSPACE 312
	
	  - Error- Windows cannot change the estimated compression ratio for drive
	  <X> because it cannot find the compressed volume file for drive
	  <X>.
	  ID Number: DRVSPACE 395.
	
	Next, you receive either of the following error messages:
	
	  - DRVSPACE caused a general protection fault in module USER.EXE at
	  0003:00006e7c.
	
	  - DRVSPACE caused a general protection fault in module DRVSPACE.EXE at
	  0004:00003776.
	
	
	CAUSE
	=====
	
	These errors can occur for any of the following reasons:
	
	- The removable media is not formatted properly.
	
	- The host for the compressed drive is no longer available.
	
	- The removable media is no longer accessible because of a hardware failure or
	  because it has been removed.
	
	RESOLUTION
	==========
	
	To correct this problem, check to make sure that:
	
	1. The removable media is accessible outside of DriveSpace (such as in Windows
	  Explorer).
	
	2. The host drive is available.
	
	3. The removable media is properly formatted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in DriveSpace for Windows 95. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
