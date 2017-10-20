---
layout: page
title: "Q111951: PRB: System Errors When Using SET LIBRARY TO in FoxPro for Mac"
permalink: /kb/111/Q111951/
---

## Q111951: PRB: System Errors When Using SET LIBRARY TO in FoxPro for Mac

{% raw %}

	Article: Q111951
	Product(s): Microsoft FoxPro
	Version(s): 2.5b,2.5c,2.6a,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installing FoxPro for Macintosh on a system that has had Apple's Internet Router
	version 3.0 installed or installing Apple's Internet Router version 3.0 after
	installing FoxPro for Macintosh can cause system errors when you use the SET
	LIBRARY TO command.
	
	CAUSE
	=====
	
	The following two situations can cause the system errors to occur:
	
	- If the router is installed on the machine prior to installing FoxPro, the
	  Shared Library Manager extension installed and used by the router may not be
	  replaced with the newer version shipped with FoxPro.
	
	- If the router is installed after FoxPro, an alert box is presented,
	  indicating that a newer version of the Shared Library Manager is already
	  installed. The alert box provides two options: click Continue to replace, or
	  Cancel to leave the installation untouched. If you click Continue, the newer
	  version of the Shared Library Manager is replaced with the older one.
	
	In both of these cases, various system errors will occur when a SET LIBRARY TO
	command is issued.
	
	2.5x RESOLUTION
	---------------
	
	To solve this problem, do the following:
	
	1. Insert the Apple Shared Library Manager installation disk (the disk icon says
	  "ASLM Installer") in the floppy disk drive.
	
	2. Click the Shared Library Manager Files folder, and then drag the Shared
	  Library Manager extension file to the System Folder on your startup volume.
	
	2.6a RESOLUTION
	---------------
	
	NOTE: In FoxPro 2.6a for Macintosh, the Apple Shared Library Manager (ASLM) is
	part of the core product within Setup.
	
	Follow these steps to remove and reinstall FoxPro, which also reinstalls the ASLM
	files.
	
	1. Run the FoxPro Setup Program, located in the Setup folder under in main
	  FoxPro folder on the hard disk.
	
	2. Select Add/Remove from the Maintenance Mode Setup screen.
	
	3. Select "FoxPro for the Macintosh", located at the top of the "Installed
	  Components" list to remove FoxPro.
	
	4. Repeat steps 1 and 2 above.
	
	5. Select "FoxPro for the Macintosh" from the "Components not installed list" to
	  reinstall FoxPro.
	
	MORE INFORMATION
	================
	
	The Shared Library Manager versions are as follows:
	
	  Shipping with Internet Router v3.0         1.0    12/7/92   108K
	  Shipping with FoxPro for Macintosh v2.5b   1.1.1  11/15/93  152K
	
	Additional query words: vFoxMac 3.00bvFoxMac FoxMac 2.50b 2.50c
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : :2.5b,2.5c,2.6a,3.0b
	
	=============================================================================
	

{% endraw %}
