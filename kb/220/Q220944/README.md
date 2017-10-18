---
layout: page
title: "Q220944: SMS: Error Message When Using Healthmon on a Secondary Site"
permalink: kb/220/Q220944/
---

## Q220944: SMS: Error Message When Using Healthmon on a Secondary Site

	Article: Q220944
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbMMC kbSecurity kbServer kbsms200 kbsms200bug kbNetMon kbsmsUtil
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Healthmon tool that is installed on a Microsoft
	Systems Management Server 2.0-based secondary site, the following error message
	may be displayed:
	
	  Unable to detect (Please refer to the release notes): SMS_SQL_Monitor
	
	Although the release notes state that the SMS_SQL_Monitor service must be
	installed, this does not apply to secondary sites. Secondary sites do not own
	their own database, so the SMS_SQL_Monitor service is not installed.
	
	CAUSE
	=====
	
	This behavior occurs because the Healthmon tool does not distinguish between
	Systems Management Server 2.0 primary and secondary sites.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	You can find the console or agent for the Healthmon tool in the following folder
	on the Systems Management Server 2.0 CD-ROM:
	
	  <drive>\Healthmon\<platform>\00000409
	
	where <drive> is the drive letter and <platform> is the platform type
	of your computer.
	
	Computers that have been upgraded to Windows Management Instrumentation (WMI) 1.5
	or Microsoft Windows 2000-based computers do not have the WMI 1.1 tool
	(Wbemperm.exe).
	
	NOTE: Windows NT 4.0 users which have WMI 1.5 installed, also need to install the
	Microsoft Security Configuration Editor (SCE), included on the Windows NT 4.0
	Service Pack 4 (SP4) (and later) CD-ROM. On Windows NT-based computers, the tool
	is Wbemcntl.exe. The Microsoft SCE is required to edit the Access Control Lists
	(ACLs) on the Windows Installer (WI) namespaces.
	
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbMMC kbSecurity kbServer kbsms200 kbsms200bug kbNetMon kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
