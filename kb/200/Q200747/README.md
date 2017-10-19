---
layout: page
title: "Q200747: SMS: Wuser Causes Invalid Page Fault in Coexist.dll"
permalink: /kb/200/Q200747/
---

## Q200747: SMS: Wuser Causes Invalid Page Fault in Coexist.dll

	Article: Q200747
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): smsremtshoot kbRemoteProg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you start Remote Control Agent
	on a Microsoft Windows 95-based client that uses an ATI Rage 3D video adapter:
	
	  Wuser16 caused an invalid page fault in module coexist.dll
	
	This behavior has been reported on Dell Optiplex GX-series computers running
	Microsoft Windows 95 OEM Service Release 2 (OSR2).
	
	WORKAROUND
	==========
	
	To work around this behavior, use either of the following methods:
	
	Method 1
	--------
	
	Replace the existing version of the Coexist.dll file with the original release
	version from the Systems Management Server (SMS) 1.2 CD-ROM. The existing file
	is located in the following folder on the site server: <SMS
	drive>:\Sms\Site.srv\Maincfg.box\Client.src\X86.bin Logon servers store the
	file in this folder: <SMS drive>\SMS\Logon.srv\<Platform> Then, open
	and save the System.map file on the site server.
	
	It may be quicker to manually copy the file to all logon servers because there
	may be a delay of one or more days (depending on your site configuration). After
	the site server and all logon servers have received the original version of the
	Coexist.dll file, open the System.map file with Notepad, and then save the
	file.
	
	NOTE: Make sure the System.map file is not saved as a .txt or .doc file. It must
	be saved as a file named System.map. For more information about this procedure,
	please see the following Microsoft Knowledge Base article:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Method 2
	--------
	
	Download and install the latest video driver for your video adapter.
	
	Changing the video driver to VGA or disabling the Yamaha sound driver (if it is
	present) may also resolve the problem.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: gp gpf general protection fault prodsms
	
	======================================================================
	Keywords          : smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
