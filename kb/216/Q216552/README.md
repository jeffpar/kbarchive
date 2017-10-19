---
layout: page
title: "Q216552: SMS: SMSRUN Hangs at 90% CPU While IE Setup Is Running"
permalink: /kb/216/Q216552/
---

## Q216552: SMS: SMSRUN Hangs at 90% CPU While IE Setup Is Running

	Article: Q216552
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsetup kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Systems Management Server client software is installed on a Windows NT
	client computer at the same time that Microsoft Internet Explorer 4.01 setup is
	performing its one-time per user configuration, SMSRUN32 may stop responding
	with CPU usage greater than 90 percent.
	
	Furthermore, if you use Windows NT Task Manager to list the running processes,
	two instances of SMSRUN32 will appear.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	  Date      Time            Size     File name      Platform
	  ----------------------------------------------------------
	
	  1/14/99   11:21pm         89,792   Smsrun32.exe   x86
	   2/4/99   10:27pm         89,792   Smssrv32.exe   x86
	  1/14/99   11:19pm        181,008   Smsrun32.exe   Alpha
	   2/4/99   10:27pm        181,008   Smssrv32.exe   Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. In the
	  <SMS_root_directory>\Site.srv\Maincfg.box\Client.src\<platform>.bin
	  directory on the site server, replace the Smsrun32.exe file with the version
	  obtained from the hotfix.
	
	2. In the
	  <SMS_root_directory>\Site.srv\Maincfg.box\Client.src\<platform>.bin
	  directory on the site server, replace the Smssrv32.exe file with the version
	  obtained from the hotfix.
	
	NOTE: These steps can be performed automatically by using Hotfix.exe with the
	supplied Hotfix.ini file.
	
	At the next Maintenance Manager work cycle, the files will be replicated to all
	Systems Management Server logon servers, to the
	<SMS_root_directory>\Logon.srv\<platform>.bin directory. When that
	occurs, new clients will get the new Smsrun32.exe and the existing clients can
	be updated.
	
	To update the existing clients, either manually run Upgrade.bat on each client or
	follow the instructions in the following article in the Microsoft Knowledge
	Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	NOTE: This hotfix applies only to the 32-bit version of SMSRUN.
	
	Additional query words: prodsms smsrunx hang hangs hung ie ie4 ie401 utilization 90%
	
	======================================================================
	Keywords          : kbsetup kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
