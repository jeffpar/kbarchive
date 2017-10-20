---
layout: page
title: "Q182127: Computer Hangs With VoiceView Modem"
permalink: /kb/182/Q182127/
---

## Q182127: Computer Hangs With VoiceView Modem

{% raw %}

	Article: Q182127
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbsetup win95
	Last Modified: 06-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your computer restarts for the first time after you install Windows 95,
	your computer may seem to stop responding (hang).
	
	CAUSE
	=====
	
	This issue can occur if your computer has a VoiceView modem installed. The files
	needed to install this modem may cause multiple instances of the Grpconv.exe
	program to start, which may make your computer appear to hang.
	
	RESOLUTION
	==========
	
	To work around this issue, use the appropriate method:
	
	Allow Setup to Finish
	---------------------
	
	Although your computer may seem to be hung, it is not, and you should allow Setup
	to continue until it is finished. Note that you may experience a longer than
	normal installation time.
	
	Edit the Mdmvv.inf File
	-----------------------
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	If you are a System Administrator who wants to run an unattended Setup, you can
	edit the Mdmvv.inf file, and then run Setup again. To do so, use the following
	steps:
	
	1. Right-click the Mdmvv.inf file, and then click Open.
	
	2. In the [VoiceView_Modem] section, place a semi-colon in front of the
	  following line:
	
	  HKR,, Runonce,,"grpconv /o" line.
	
	3. On the File menu, click Save, quit the program you used to edit the Mdmvv.inf
	  file, and then run Setup again.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
