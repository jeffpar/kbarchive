---
layout: page
title: "Q252855: SMS: 16-Bit SMS Installer May Not Recognize the 0x5c Character"
permalink: /kb/252/Q252855/
---

## Q252855: SMS: 16-Bit SMS Installer May Not Recognize the 0x5c Character

{% raw %}

	Article: Q252855
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbsms200 kbsms200bug kbPackage kbsmsInst kbSoftwareDist
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the 16-bit version of the Microsoft Systems Management Server
	Installer on a 32-bit Microsoft Windows operating system (such as Microsoft
	Windows 95, Windows 98, or Microsoft Windows NT), various errors occur when
	Systems Management Server Installer interprets the 0x5c (\) character in file
	names and directories.
	
	CAUSE
	=====
	
	Systems Management Server Installer interprets the 0x5c character as a slash
	(\). Because 16-bit operating systems don't support the 0x5c character, this
	behavior does not occur on these operating systems.
	
	WORKAROUND
	==========
	
	Use the 32-bit version of Systems Management Server Installer on 32-bit Windows
	operating systems.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbsms200 kbsms200bug kbPackage kbsmsInst kbSoftwareDist 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
