---
layout: page
title: "Q230660: SMS 1.2 PCM Dialog Box Remains Open After Logging On"
permalink: /kb/230/Q230660/
---

## Q230660: SMS 1.2 PCM Dialog Box Remains Open After Logging On

{% raw %}

	Article: Q230660
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms120
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you log on to a Systems Management Server (SMS) 1.2 client, the Package
	Command Manager dialog box may appear and remain open even though there are no
	jobs scheduled to run.
	
	The symptoms of this problem are similar to those described in the following
	Microsoft Knowledge Base article, but the cause is different and applying SMS
	Service Pack 3 or 4 does not solve the problem:
	
	  Q174460 PCM Introduction Dialog Box Does Not Close Automatically
	
	CAUSE
	=====
	
	This behavior occurs if Smsrun16.exe or Smsrun32.exe appears twice in the
	"Load=" line in the Win.ini file or the Load entry in the client registry
	(HKCU\Software\Microsoft\Windows NT\currentversion\windows\load).
	
	This situation can occur after a client reinstallation or upgrade.
	
	WORKAROUND
	==========
	
	To work around this behavior, remove one of the instances of Smsrun16 or
	Smsrun32. After you do so, the Package Command Manager dialog box does not
	remain open unless jobs are available to run.
	
	Additional query words: prodsms pcmwin maximize minimize close
	
	======================================================================
	Keywords          : kbsms200 kbsms120 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
