---
layout: page
title: "Q115880: ADT2: ADT Application Setup Fails with Error -1809"
permalink: /kb/115/Q115880/
---

## Q115880: ADT2: ADT Application Setup Fails with Error -1809

{% raw %}

	Article: Q115880
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 08-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you install a custom application created with the Microsoft Access
	Developer's Toolkit (ADT), you may receive the following error message:
	
	  Setup couldn't create a SYSTEM.MDA file. After Setup is completed, reboot
	  your computer, then run the Workgroup Administrator before you run this
	  application. (-1809)
	
	CAUSE
	=====
	
	This problem occurs if no form of file sharing (SHARE.EXE, VSHARE.386, or
	network locking) is running when the Workgroup Administrator (WRKGADM.EXE) tries
	to create a SYSTEM.MDA file. In order for the Workgroup Administrator to be able
	to create the SYSTEM.MDA file, some form of file sharing must be running.
	
	RESOLUTION
	==========
	
	There are two workarounds for this problem:
	
	- Ship a SYSTEM.MDA file with your custom application. To do this, add the
	  SYSTEM.MDA file in the Files To Include box in the ADT Setup Wizard. This
	  way, the Workgroup Administrator does not need to create a SYSTEM.MDA file.
	  Note that the file must be named SYSTEM.MDA in order for this workaround to
	  work. No other name (such as MYSYS.MDA) will work.
	
	- Test to see if some form of file sharing is running before starting the
	  custom Setup program. You can test to see if file sharing is running in a
	  number of ways. To test for file sharing in Microsoft Windows, you can start
	  the MS-DOS prompt and then type "share" (without quotation marks). If file
	  sharing is running, you will receive a message stating "SHARE already
	  installed." You can also test for file sharing with a small Microsoft Visual
	  Basic or Microsoft Visual C application (these applications are not discussed
	  in this article).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Access Developer's
	Toolkit version 2.0. This problem no longer occurs in the Microsoft Access
	Developer's Toolkit version 7.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create application disks using the ADT Setup Wizard. Do not include a
	  SYSTEM.MDA file with your application.
	
	2. Install your application on a computer that is not running some form of file
	  sharing (either loading SHARE.EXE in the AUTOEXEC.BAT file or loading
	  VSHARE.386 in the [386Enh] section of the SYSTEM.INI file). Note that you
	  receive the error message mentioned earlier in this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
