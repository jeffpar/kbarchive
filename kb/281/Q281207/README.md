---
layout: page
title: "Q281207: SMS: Manual Upgrds (1.2 to 2.0 SP2) Cause 2.0 SP3 Upgrd to Fail"
permalink: /kb/281/Q281207/
---

## Q281207: SMS: Manual Upgrds (1.2 to 2.0 SP2) Cause 2.0 SP3 Upgrd to Fail

{% raw %}

	Article: Q281207
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbsms200 kbsms200bug
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade an existing Systems Management Server (SMS) 1.2 secondary site
	to SMS 2.0 Service Pack 2 (SP2) by running the Setup.exe program from the
	CD-ROM, and then selecting the "Upgrade an existing SMS Server" option, any
	future attempts to upgrade to Service Pack 3 (SP3) by using the Administrator
	Console do not work.
	
	CAUSE
	=====
	
	This problem occurs because during the original upgrade from SMS 1.2 to SMS 2.0
	SP2, whether or not the Microsoft Network Monitor tool (NetMon) is installed, a
	NetMon directory structure exists. When you attempt to upgrade by using the SMS
	Administrator Console, the entire package is sent to the secondary site. During
	the installation, you receive the following error message:
	
	  Cannot copy C:\IUSH4YZ5.TMP\SMSSETUP\netmon\i386\parsers\atalk.dll to
	  x:\sms\netmon\i386\parsers\atalk.dll, Win32 error = 3
	
	"Error = 3" indicates that the specified path cannot be found, because the file
	is not present on the secondary site.
	
	WORKAROUND
	==========
	
	To work around this problem, manually run the upgrade from either the SP2, or
	SP3 CD-ROM directly on the secondary site. By running the SP2, or SP3 CD-ROM
	directly on the site server, and not through the Administrator Console of the
	parent site, this allows the secondary site server to accept future upgrades
	from parent sites.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
