---
layout: page
title: "Q165525: &quot;Stop 0xA&quot; Error Message During Setup"
permalink: kb/165/Q165525/
---

## Q165525: &quot;Stop 0xA&quot; Error Message During Setup

	Article: Q165525
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows NT Workstation 4.0 or Windows NT Server 4.0 on
	an IBM PC 350 or 320 computer, the following error message may occur:
	
	  STOP: 0x0000000A
	  IRQL_NOT_LESS_OR_EQUAL
	
	CAUSE
	=====
	
	Windows NT Setup did not detect the correct computer type.
	
	RESOLUTION
	==========
	
	1. Boot Windows NT Setup from the Setup floppy disks and wait for the computer's
	  BIOS information to appear.
	
	2. Press the F5 key at the screen that states:
	
	     Setup is inspecting your computer's hardware configuration
	
	3. Wait for Setup to display a blue screen with text at the top and bottom
	  reading:
	
	     Windows NT Setup
	     ================
	
	     Setup is loading files (Windows NT Executive)
	
	4. Wait for Setup to display a dialog box with a list of computer models.
	
	5. Select Standard PC from the list.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt trap 0xA 0x0a
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
