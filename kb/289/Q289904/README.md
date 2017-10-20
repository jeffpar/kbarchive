---
layout: page
title: "Q289904: HOWTO: Create a CD-ROM Setup Disk with the VFP 6.0 Setup Wizard"
permalink: /kb/289/Q289904/
---

## Q289904: HOWTO: Create a CD-ROM Setup Disk with the VFP 6.0 Setup Wizard

{% raw %}

	Article: Q289904
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAppSetup kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 10-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although a CD-ROM is not a media option in the Setup Wizard, you can create a
	CD-ROM setup disk to install your Visual FoxPro application.
	
	MORE INFORMATION
	================
	
	The Visual FoxPro Setup Wizard does not support creating CDs. However, you can
	create a Netsetup file and place this on a CD. Note that creating a CD using the
	Visual FoxPro Setup Wizard is not supported by Microsoft.
	
	To create a CD to install your application, follow these steps:
	
	1. Create a new folder and name it Mysource. Create your executable file and
	  place it along with any other files, such as data files, in the Mysource
	  folder.
	
	2. Create a destination folder and name it CDROM (this is used in step 3 of the
	  Setup Wizard).
	
	3. Start the Setup Wizard. In step 1 of the wizard, point to the distribution
	  files.
	
	4. In step 2, choose your options as needed.
	
	5. In step 3, for Disks images folder, select CDROM, and for Disk images, select
	  Netsetup (uncompressed).
	
	6. Continue through the remaining steps. In step 7, click Finish.
	
	7. Use your CD-ROM creation software to write the contents of the Netsetup
	  folder to the CD that you are making.
	
	After you have performed these steps, the users can insert the CD on their
	computers, browse to the Setup.exe file, and double-click the file to begin the
	setup process.
	
	REFERENCES
	==========
	
	For additional information on how to make your CD start automatically, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q172078 HOWTO: Enable Autorun for Applications Distributed on CD-ROM
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAppSetup kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
