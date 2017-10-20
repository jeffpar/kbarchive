---
layout: page
title: "Q140072: PC WRmt: Recovering Client Functionality After Install Win95"
permalink: /kb/140/Q140072/
---

## Q140072: PC WRmt: Recovering Client Functionality After Install Win95

{% raw %}

	Article: Q140072
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade from Microsoft Windows version 3.x to Microsoft Windows 95,
	the previously installed version 3.x of Mail for Windows or Mail Remote for
	Windows may not perform properly.
	
	CAUSE
	=====
	
	During the Windows 95 upgrade, if Exchange Inbox components are selected for
	installation, MAPI.DLL is overwritten with a new MAPI.DLL for the Microsoft
	Windows 95 Exchange client, and MAILSPL.EXE is renamed to MAILSPL.BAK.
	
	NOTE: The MAPI.DLL and MAILSPL.EXE files reside in the \WINDOWS\SYSTEM directory.
	
	RESOLUTION
	==========
	
	You can recover using one of the two methods below:
	
	Method 1
	--------
	
	1. Remove the Exchange Inbox components by opening the Control Panel and
	  selecting Add/Remove Programs then the Windows Setup tab. Clear the Exchange
	  Inbox check box. Click the OK button.
	
	2. Restore version 3.x of Mail for Windows or Mail Remote for Windows MAPI.DLL
	  file, and rename the MAILSPL.BAK file to MAILSPL.EXE.
	
	  The MAPI.DLL file can be copied from another non-Windows 95 machine's
	  \WINDOWS\SYSTEM subdirectory, or the MAPI.DLL file can be expanded off of
	  version 3.x of Mail for Windows or Mail Remote for Windows installation
	  disks.
	
	Method 2
	--------
	
	1. Remove the Exchange Inbox components by opening the Control Panel and
	  selecting Add/Remove Programs then the Windows Setup tab. Clear the Exchange
	  Inbox check box. Click the OK button.
	
	2. Reinstall version 3.x of Mail for Windows or Mail Remote for Windows into
	  Windows 95 from the original installation disks.
	
	  NOTE: For reinstalling Mail Remote, you will need a data disk and the three
	  Microsoft Mail Remote for Windows Setup disks.
	
	3. Delete the \WINDOWS\MSMAIL\MSRMT subdirectory.
	
	  IMPORTANT: If the mail message file (MMF) has been moved to the
	  \WINDOWS\MSMAIL\MSRMT subdirectory, make sure it is copied to another
	  directory before you delete the subdirectory.
	
	4. Reinstall Mail Remote for Windows.
	
	5. Set the Port, Script, and other options as necessary.
	
	Additional query words: 3.00 start initialize setup win95x win95
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail350 kbMail320 kbMail300b kbMail320a kbMailRemote320
	Version           : WINDOWS:3.0,3.0b,3.2,3.2a,3.5
	
	=============================================================================
	

{% endraw %}
