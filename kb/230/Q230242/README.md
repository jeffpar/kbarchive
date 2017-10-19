---
layout: page
title: "Q230242: SMS: PCM May Cause Account Lockouts in a High-Security Domain"
permalink: /kb/230/Q230242/
---

## Q230242: SMS: PCM May Cause Account Lockouts in a High-Security Domain

	Article: Q230242
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsms120 kbsms120bug kbPCM
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a high-security domain where password expiration and account lockout are
	enabled, if users remain logged on their Windows NT computers and do not change
	their passwords within the required time, Package Command Manager (PCM)
	continually attempts to connect to servers using the expired passwords. This
	causes high CPU utilization by the local security authority (Lsass.exe) on the
	primary domain controller (PDC) of the validating domain.
	
	The new version of PCM provided in the hotfix described below will detect when
	the account it is using to connect to a server is locked out or has a bad or
	expired password. When this occurs, PCM will suspend its connection attempts for
	a period of three days or until it is restarted. The errors that PCM receives
	from its connection attempts are written to the log file and PCMWIN32 displays a
	connection error message to the logged-on user:
	
	  Security violation: access denied
	
	
	During the suspension period, you will see what appears to be connection attempts
	being logged in the PCM log file. The connections to the server are not actually
	being made despite what is being logged.
	
	CAUSE
	=====
	
	Every account validation attempt for a locked-out account is sent to the PDC for
	verification.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time       Version           Size    File name      Platform
	  ----------------------------------------------------------------------
	
	  5/6/99   6:30pm   1.2(build 786)     469,936   Pcmwin32.exe   x86
	  5/6/99   6:30pm   1.2(build 786)     270,832   Pcmsvc32.exe   x86
	  5/6/99   6:30pm   1.2(build 786)   1,175,312   Pcmwin32.exe   alpha
	  5/6/99   6:34pm   1.2(build 786)     801,040   Pcmsvc32.exe   alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	If password expiration and account lockout policies are in effect, users should
	be directed to log off their computers instead of simply locking them.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following procedures at the Systems
	Management Server site server.
	
	1. Replace the Pcmsvc32.exe file in the
	  <SMS_root>\Site.srv\<Platform>.bin directory with the version
	  obtained from the hotfix.
	
	2. Reset the site. This is necessary to copy the updated file to all servers
	  managed by the Site Configuration Manager. Windows NT workstation computers
	  running PCMSVC32 can be updated using RSERVICE.
	
	3. Replace the Pcmwin32.exe file in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\<Platform>.bin
	  directory with the version provided in the hotfix.
	
	4. Maintenance Manager will replicate the updated file to the Systems Management
	  Server logon servers on its next work cycle. To update the clients running
	  PCMWIN32, either manually run Upgrade.bat on each client or follow the
	  instructions in the following article in the Microsoft Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	NOTE: There is no 16-bit version of this hotfix.
	
	Additional query words: prodsms lock out locked
	
	======================================================================
	Keywords          : kbnetwork kbsms120 kbsms120bug kbPCM 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
