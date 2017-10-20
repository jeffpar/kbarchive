---
layout: page
title: "Q190891: SMS Doc Err: RSERVICE Is Unable to Install Rcmdsvc.exe"
permalink: /kb/190/Q190891/
---

## Q190891: SMS Doc Err: RSERVICE Is Unable to Install Rcmdsvc.exe

{% raw %}

	Article: Q190891
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbdocerr smsdocerr
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pages 27-30 of the Systems Management Server Resource Guide Supplement provide
	steps for the unattended installation of the Systems Management Server client.
	The documentation incorrectly states that RSERVICE can be used to install the
	Remote Command Server service (Rcmdsvc.exe).
	
	CAUSE
	=====
	
	Rcmdsvc.exe runs under the LocalSystem account. However, RSERVICE is unable to
	configure a service to start up using the LocalSystem account.
	
	WORKAROUND
	==========
	
	To work around this problem, do any one of the following:
	
	- Install Rcmdsvc.exe by using the steps outlined in the Windows NT Resource
	  Kit documentation.
	
	  -or-
	
	- Obtain the hotfix mentioned in the following article in the Microsoft
	  Knowledge Base:
	
	  Q190832 SMS: RSERVICE Unable to Configure Service to Use the LocalSystem
	
	  -or-
	
	- Wait for the next Systems Management Server service pack, which will include
	  the hotfix mentioned in article
	
	  Q190832
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	The following is an example initialization file for the Remote Command Server
	installation that must be used in conjunction with hotfix mentioned above.
	
	  [domain name]
	  ; all workstations in domain "domain"
	  ;domain=ntwd
	  ; or, for this named "domain", use the listed machine(s)
	  ;domain=listed
	  EC_SALES=NTWD
	
	  [machine list]
	  ; specifically include or exclude certain machines
	
	  [service account]
	  ; needs domain user rights and local admin rights. Only needed when
	  ; using /C.
	  *=EC_SALES\SMS_RCMD
	
	  [service name]
	  *=Remote Command Server
	
	  [executable file]
	  *=RCMDSVC.EXE
	
	  [installation directory]
	  ; best to keep this consistent, all systems have a C: drive
	  *=c:\sms_rcmd
	
	  [startup parameters]
	
	  [source directory]
	  *=\\server1\rcmd
	
	  [other files]
	
	  [access permissions]
	  *=Administrators:FULL
	
	  [automatic start]
	  *=yes
	
	  [registry settings]
	  *="key:HKLM\System\CurrentControlSet\Services\Remote Command Server"
	  SZ:"DependOnService=LanmanServer"
	
	  [logfile path]
	  *=\\server1\rcmd\rcmd.log
	
	Additional query words: prodsms startup
	
	======================================================================
	Keywords          : kbdocerr smsdocerr 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
