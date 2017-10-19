---
layout: page
title: "Q222440: XCLN: Err. Mssg.: The Information Store Could Not Be Opened"
permalink: /kb/222/Q222440/
---

## Q222440: XCLN: Err. Mssg.: The Information Store Could Not Be Opened

	Article: Q222440
	Product(s): Microsoft Exchange
	Version(s): 2000,95,98
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to start Outlook, you may receive the following error message:
	
	  Unable to open your default e-mail folders. The information store could not
	  be opened.
	
	CAUSE
	=====
	
	This problem can occur if you have installed a program that installs Microsoft
	Personal Web Server. Earlier versions of Personal Web Server install an outdated
	version of the Secur32.dll file, which prevents Outlook from opening the
	Exchange mailbox store.
	
	RESOLUTION
	==========
	
	To resolve this problem, replace the outdated version of the Secur32.dll file
	with a newer version by using one of the following methods:
	
	- Method 1:
	
	  1. Locate the Secur32.dll file on your hard disk. In Windows 95 and Windows
	     98, this file is located in the Windows\System folder.
	
	  2. Rename the file to Secur32.old.
	
	  3. Copy the Secur32.dll file from a working computer and paste the
	     Secur32.dll file in the Windows\System folder of the affected computer.
	
	- Method 2:
	
	  1. Locate the Secur32.dll file on your hard disk. In Windows 95 and Windows
	     98, this file is located in the Windows\System folder.
	
	  2. Rename the file to Secur32.old.
	
	  3. Locate the Secur32.001 file in the System folder, and rename Secur32.001
	     file back to Secur32.dll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Programs that install the earlier version of Personal Web Server include
	Microsoft Project 98 and Microsoft FrontPage 98.
	
	Additional query words: OL2K
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOutlookSearch kbOutlook2000Search kbZNotKeyword3
	Version           : :2000,95,98
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
