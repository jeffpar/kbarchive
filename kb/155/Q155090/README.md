---
layout: page
title: "Q155090: BUG: Setup Wizard Doesn't Have Netsetup Distribution Option"
permalink: /kb/155/Q155090/
---

## Q155090: BUG: Setup Wizard Doesn't Have Netsetup Distribution Option

	Article: Q155090
	Product(s): Microsoft FoxPro
	Version(s): 3.00b
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Setup Wizard, an option for "Netsetup" is not available. The
	Setup Wizard will always create disk folders sized for distribution on high
	density floppy disks.
	
	WORKAROUND
	==========
	
	The following steps can be used to simulate a Netsetup method of distribution:
	
	1. Complete the Setup Wizard. For this example, refer to the application as
	  MyApp.
	
	2. Create a folder for network access. For this example, refer to this folder as
	  NetFolder.
	
	3. Copy each created disk folder, such as Install Disk 3 and Setup Disk, to
	  NetFolder.
	
	4. From the NetFolder:Setup Disk, make an alias of MyApp Setup.
	
	5. Move this alias up one level to the root of NetFolder. The executable should
	  now be installable from this alias.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Macintosh Finder will treat folders at the same level as mounted volumes
	(floppy disks) so that a floppy disk-type install is approximated.
	
	Additional query words: VFoxMac kbdse
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : 3.00b
	Issue type        : kbbug
	
	=============================================================================
	
