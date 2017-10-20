---
layout: page
title: "Q263413: SMS: Remote Control Error with PCDDOS During Installation"
permalink: /kb/263/Q263413/
---

## Q263413: SMS: Remote Control Error with PCDDOS During Installation

{% raw %}

	Article: Q263413
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbsetup kbsms200bug kbsms200preSP3
	Last Modified: 20-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Remote Control on a Systems Management Server (SMS) 2.0
	client on a Microsoft Windows 98/95-based computer, you may receive the
	following error message:
	
	  Cannot find the file \PCDDOS.EXE. Make sure that the file exists on your
	  system and that the path and filename are correct.
	
	While this message is displayed, the computer stops responding except for the
	ability to dismiss the dialog box. After you close the dialog box, the client
	installation continues normally. In some cases, a reboot may be required to
	finish this installation.
	
	CAUSE
	=====
	
	This problem can occur during the installation when the Remote Control component
	looks for PCDDOS in the %windir% folder instead of the %sms_local_dir% folder.
	
	WORKAROUND
	==========
	
	To work around this problem, change the environment variable for sms_local_dir
	to c:\windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.The third-party products discussed in
	this article are manufactured by vendors independent of Microsoft; we make no
	warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbsetup kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
