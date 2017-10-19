---
layout: page
title: "Q290995: SMS: Problems Updating Off-Line License Metering Logs"
permalink: /kb/290/Q290995/
---

## Q290995: SMS: Problems Updating Off-Line License Metering Logs

	Article: Q290995
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running Microsoft Windows 2000 Professional, you may be unable to
	update the log files that are used by License Metering in off-line mode. Because
	of this, the amount of program usage that is reported is inaccurate.
	
	CAUSE
	=====
	
	By default, Windows 2000 Professional "ordinary users" have insufficient
	privileges to the <systemroot>\ms\sms\clicomp\licmtr\i386 folder that is
	used by License Metering as a repository for the off-line logs. Because of this,
	the log cannot be updated by the logged-on user.
	
	WORKAROUND
	==========
	
	Extend folder permissions to include "Write" permission for any account (or
	group of accounts) that log onto the workstation for the
	<systemroot>\MS\SMS\clicomp\licmtr\i386 folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	If you view the SMS License Metering client component log file (Liccli.log), you
	may see the following entry:
	
	  Off-line licensing log error: access to the log file has been denied.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
