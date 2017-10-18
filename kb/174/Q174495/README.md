---
layout: page
title: "Q174495: ODE97: Setup Wizard Disk Images Do Not Contain Long File Names"
permalink: kb/174/Q174495/
---

## Q174495: ODE97: Setup Wizard Disk Images Do Not Contain Long File Names

	Article: Q174495
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SYMPTOMS
	========
	
	When you use the Microsoft Office 97 Developer Edition Tools (ODE) Setup wizard
	to create disk images for your custom application, all file names that are added
	to the Add Files list are copied to the disk images using the MS-DOS naming
	convention. Therefore, if you add files that contain long file names to the Add
	Files list, the file names are truncated on the disk images.
	
	RESOLUTION
	==========
	
	When the custom setup program is installed on a computer that conforms to the
	long file names naming convention, the file names are expanded to what they
	originally were.
	
	There is no option in the Setup Wizard program that enables you to copy the long
	file names in the Add Files list box to the disk images.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the ODE Setup Wizard.
	
	2. On the Add File screen, add several files that have long file names.
	
	3. Continue through the Setup wizard program until you have added all the
	  necessary options.
	
	4. Let the ODE Setup Wizard program create your disk images.
	
	5. After the disk images are created, open the images folder in Windows
	  Explorer.
	
	  Note that the long file names have been truncated.
	
	Additional query words: prb
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
