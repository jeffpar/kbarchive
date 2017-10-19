---
layout: page
title: "Q248367: SMSINST: Repackager Hangs When the Package Requires A Reboot"
permalink: /kb/248/Q248367/
---

## Q248367: SMSINST: Repackager Hangs When the Package Requires A Reboot

	Article: Q248367
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbsms200 kbsms200bug smsinst kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) Installer version 2.0.91.00 included with
	Systems Management Server 2.0 Service Pack 1 (SP1) may generate the following
	error message during the Repackage process of the Installer:
	
	  This program has performed an illegal operation and will be shut down.
	  SMSINS32 caused an invalid page fault in module SMSINS32.EXE at xxxx:yyyyyyyy
	
	Note that this symptom is specific to Microsoft Windows 98/95.
	
	CAUSE
	=====
	
	This problem can occur if the program being repackaged creates multiple empty
	folders during the repackage process, and then forces a reboot before the
	repackage post scan. When these conditions exist and you click Finish, the SMS
	Installer does not work correctly, and generates the error message listed
	earlier in this article.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Version      Size        File name      Platform
	  ------------------------------------------------
	  2.0.91.08   2,838,636    Smsinstl.exe   x86
	  2.0.91.08   3,767,901    Smsinstl.exe   Alpha
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 2.0.91.00.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbtool kbsms200 kbsms200bug smsinst kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMSI200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
