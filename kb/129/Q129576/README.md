---
layout: page
title: "Q129576: Cannot Use Icon When Setting Up Share Package"
permalink: kb/129/Q129576/
---

## Q129576: Cannot Use Icon When Setting Up Share Package

	Article: Q129576
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a share package and select an icon for that package, some icons
	fail to appear when the file containing the icon is chosen. A specific case can
	be reproduced with MSOFFICE.EXE and MACRODE.EXE from the Microsoft Office CD:
	
	1. Create new share package.
	
	2. Choose the New button next to Program Items.
	
	3. Choose Change Icon.
	
	4. Choose the "..." button next to the File Name box.
	
	5. Change to the directory that contains the setup and .EXE files for Microsoft
	  Office.
	
	6. Choose MSOFFICE.EXE.
	
	No icon is displayed for this file. In Program manager, you can create a new
	program item, change the icon using the same file name as above, and it will
	show the icon.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
