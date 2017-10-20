---
layout: page
title: "Q156197: ADT/ODE: Setup Repeatedly Prompts You for Disk2"
permalink: /kb/156/Q156197/
---

## Q156197: ADT/ODE: Setup Repeatedly Prompts You for Disk2

{% raw %}

	Article: Q156197
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0; :97
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 24-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SYMPTOMS
	========
	
	When you run setup for your custom Microsoft Office 97 Developer Edition (ODE)
	application or Microsoft Access Developer's Toolkit (ADT) application, you may
	receive the following error message when you place the second disk into your
	disk drive:
	
	  Insert the disk labeled:
	
	  '<Your Application Name> Setup: Disk2' into Drive A:
	
	CAUSE
	=====
	
	You copied your Disks folders to drive A without first opening each folder and
	highlighting all the files in the folder.
	
	RESOLUTION
	==========
	
	When you copy the files from the Disks folder, make sure you open the folders
	and highlight all of the files in each folder before you try to copy them to the
	floppy disk.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Windows Explorer, locate the folder that has your disk images. The default
	  name for this folder is Disks.
	
	2. Open the folder so that it displays all your disk images. These should be
	  named Disk1, Disk2, Disk3, and so on.
	
	3. Highlight the Disk1 folder, and drag it to drive A to copy the contents of
	  the folder to drive A.
	
	4. Repeat step 3 for all of the folders.
	
	5. Start Setup for your custom application.
	
	6. After Setup has processed Disk1, it prompts you for Disk2.
	
	7. Place Disk2 into the disk drive. Note that after reading Disk2, Setup
	  continues to prompt you for it, even though it is in the disk drive.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : WINDOWS:7.0; :97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
