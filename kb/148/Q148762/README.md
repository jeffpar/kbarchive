---
layout: page
title: "Q148762: FIX: Distribution Disk Setup Fails with Setup Error 279"
permalink: /kb/148/Q148762/
---

## Q148762: FIX: Distribution Disk Setup Fails with Setup Error 279

{% raw %}

	Article: Q148762
	Product(s): Microsoft FoxPro
	Version(s): 3.00b
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating an .exe in Visual FoxPro and using the Setup Wizard to create a
	set of distribution disk images, you run Setup from the disk images and Setup
	fails with the following error:
	
	  Setup Error 279 Object 240 Your Setup files may be damaged. Try restarting
	  the Setup program.
	
	When you click OK (your only option), Setup informs you that the application was
	not set up successfully and the Setup routine ends.
	
	CAUSE
	=====
	
	The Setup Wizard asks you for the platform on which you will be installing your
	application. If you select Windows 95 and the file name of your .exe file
	violates the 8.3 file-naming convention, this problem occurs when you run setup
	from the resulting disk images.
	
	
	RESOLUTION
	==========
	
	The only available workaround is to ensure that your .exe file name conforms to
	the 8.3 naming convention.
	
	Or you can install the updated Setup Wizard files. For a description of these
	files, and how to obtain them, see the following article in the Microsoft
	Knowledge Base:
	
	  Q103323 PATCH: Setupwiz.exe Updated VFP for Windows 3.0b Setup Wizard
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed with the updated
	Setup Wizard files in Setupwiz.exe.
	
	MORE INFORMATION
	================
	
	This problem does not exist in the Visual FoxPro 3.0 Setup Wizard. Nor does it
	affect setup disks created for either Windows 3.x or Windows NT using either of
	the setup wizards included with Visual FoxPro 3.0 or 3.0b.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create an .exe file in Visual FoxPro, and save the file with a name that
	  violates the 8.3 file-naming convention. For example, name it
	  MyLongFileName.exe.
	
	2. Use the Visual FoxPro 3.0b Setup Wizard to create setup disks for your .exe
	  file.
	
	3. In the Setup Wizard, choose Windows 95 for your installation platform.
	
	4. After the Setup Wizard finishes, run setup from the disk images you just
	  created. At this point the error occurs.
	
	Additional query words: VFoxWin buglist3.00b setupwiz.exe
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : 3.00b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
