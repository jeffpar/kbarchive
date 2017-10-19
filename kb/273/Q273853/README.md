---
layout: page
title: "Q273853: Installing SMS Admin Console on Secondary Site Impacts Hotfix"
permalink: /kb/273/Q273853/
---

## Q273853: Installing SMS Admin Console on Secondary Site Impacts Hotfix

	Article: Q273853
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you install the Systems Management Server (SMS) Administrator console, on a
	secondary site server, you can prevent successful hotfix installations on that
	secondary site server.
	
	You will see lines in the installation log for the hotfix, similar to the
	following example:
	
	  *** Installation Started 9/8/00 9:29:28 ***
	  Title: Service Update
	  Source: \\scfsms1\hotfix\Q252717\Q252717.EXE
	  File Overwrite: E:\SMS\LOGS\Q252717r.txt
	  File Overwrite: E:\SMS\LOGS\Q252717p.txt
	  File Overwrite: E:\SMS\LOGS\Q252717q.txt
	  User Rights: Admin
	
	The text files get updated, but the hotfix binaries do not.
	
	CAUSE
	=====
	
	This problem occurs because the installation of the Systems Management Server
	Administrator console changes a registry value critical to the hotfix
	application. This registry key is:
	
	  HKLM/SOFTWARE/MICROSOFT/SMS/SETUP/TYPE
	
	The Type value should be either 0x1 for a primary Site, or 0x2 for a secondary
	site. The Administrator console installation process on a secondary site may
	change this to a greater value, such as 0x6. The hotfix installation checks the
	Type value for a value of 0x1 (primary site), or 0x2 (secondary site), to verify
	that the installation is occurring on a site server. Because the value has been
	modified to a greater value, the installation fails.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can resolve this problem by changing the value back to the correct value of
	2, and then running the hotfix application again.
	
	Note: This behavior does not occur with the SMS Service Pack 2 hotfixes.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
