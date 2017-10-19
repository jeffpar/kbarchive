---
layout: page
title: "Q317112: SMS: Site Server Enumerates Group Membership Too Often"
permalink: /kb/317/Q317112/
---

## Q317112: SMS: Site Server Enumerates Group Membership Too Often

	Article: Q317112
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) services that are running on the site server may
	perform excessive directory accesses. This can generate unnecessary network
	traffic. If you have enabled success auditing of directory service, the SMS
	Service account may generate many event ID 565 entries in the Security event
	log.
	
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
	
	Date         Time   Size       File name    Platform  Version
	-------------------------------------------------------------------
	08-Feb-2002  17:10    252,798  Q317112.exe  Intel     2.0.3.1
	01-Mar-2001  18:30  1,579,936  Basesvr.dll  Intel     2.0.1493.3230
	01-Mar-2001  10:30     81,040  Cmprov.dll   Intel     2.0.1493.3143
	01-Mar-2001  13:30    121,440  Compmgr.exe  Intel     2.0.1493.3182
	01-Mar-2001  18:30  2,432,272  Basesvr.dll  Alpha     2.0.1493.3230
	01-Mar-2001  10:30    126,224  Cmprov.dll   Alpha     2.0.1493.3143
	01-Mar-2001  14:30    171,792  Compmgr.exe  Alpha     2.0.1493.3182
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To reduce the network traffic that is caused by this problem, make sure that the
	SMS Service account is in the same domain as the site server.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	the Systems Management Server 2.0 Service Pack 4 Hotfix Rollup Package (HRP).
	
	For additional information about the SMS 2.0 SP4 HRP, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 SP4 HRP
	
	MORE INFORMATION
	================
	
	How to Install the Hotfix
	-------------------------
	
	To install the hotfix, use the appropriate method.
	
	To Use the Hotfix Installer:
	
	NOTE: This method is for only Intel-based computers.
	
	1. Create a folder in a location that is accessible from your SMS site servers.
	
	2. Copy the update file (Q317112.exe) and platform folders to the new folder.
	  The folder structure must be such that the program (.exe) file is located one
	  folder "above" the platform folders.
	
	3. From each of your primary SMS site servers in your environment, log on to
	  your site server by using an account with administrative permissions.
	
	4. Quit the SMS administrator console.
	
	5. Run Q317112.exe, and then follow the instructions in the wizard.
	
	To Manually Update the SMS Site Server:
	
	1. Create a folder in a location that is accessible to your SMS site servers.
	
	2. Copy the platform folders that contain the hotfix files to the new folder.
	
	3. From each of your primary SMS site servers in your environment, log on to
	  your site server by using an account with administrative permissions.
	
	4. Quit the SMS administrator console.
	
	5. Stop all SMS services, including the Windows Management service.
	
	  Note that with Windows Management Instrumentation (WMI) build 1085, the
	  service name is changed to "Windows Management Instrumentation."
	
	6. Make a backup copy of the following files:
	
	  <SMS_Root>\Bin\<Processor type>\Cmprov.dll
	  <SMS_Root>\Bin\<Processor type>\Compmgr.exe
	  <SMS_Root>\Bin\<Processor type>\Basesvr.dll
	
	7. Copy these updated files from the disk or network share to the SMS
	  administrator console folder:
	
	  <SMS_Root>\Bin\<Processor type>\Cmprov.dll
	  <SMS_Root>\Bin\<Processor type>\Compmgr.exe
	  <SMS_Root>\Bin\<Processor type>\Basesvr.dll
	
	8. Restart the SMS services.
	
	Additional Installation Information
	-----------------------------------
	
	To update remote site computers, such as an SMS administrator console, an SMS SQL
	monitor, or an SMS provider that is not located on the site server, follow the
	appropriate instructions.
	
	To Manually Update a Remote SMS Administrator Console:
	
	NOTE: Before you install this update on your SMS administrator console, you must
	install it on the SMS site servers in your environment.
	
	1. From the updated SMS site server, copy the following SMS administrator
	  console files to a disk or network share:
	
	  <SMS_Root>\Bin\<Processor type>\Cmprov.dll
	  <SMS_Root>\Bin\<Processor type>\Compmgr.exe
	  <SMS_Root>\Bin\<Processor type>\Basesvr.dll
	
	2. Make a backup copy of the following files:
	
	  <SMS_Admin_Root>\Bin\<Processor type>\Cmprov.dll
	  <SMS_Admin_Root>\Bin\<Processor type>\Compmgr.exe
	  <SMS_Admin_Root>\Bin\<Processor type>\Basesvr.dll
	
	3. Copy these updated files from the disk or network share to the SMS
	  administrator console folder:
	
	  <SMS_Admin_Root>\Bin\<Processor type>\Cmprov.dll
	  <SMS_Admin_Root>\Bin\<Processor type>\Compmgr.exe
	  <SMS_Admin_Root>\Bin\<Processor type>\Basesvr.dll
	
	To Update a Remote SMS Provider Server:
	
	NOTE: Before you install this update on your SMS provider server, you must
	install it on the SMS site servers in your environment.
	
	1. From the updated SMS site server, copy the following SMS provider files to a
	  disk or network share:
	
	  <SMS_Root>\Bin\<Processor type>\Cmprov.dll
	  <SMS_Root>\Bin\<Processor type>\Compmgr.exe
	  <SMS_Root>\Bin\<Processor type>\Basesvr.dll
	
	2. On the SMS Provider server, stop the following services:
	
	  SMS_SQL_MONITOR_<SERVERNAME>
	  Windows Management
	
	Note that with Windows Management Instrumentation (WMI) build 1085, the service
	name is changed to "Windows Management Instrumentation."
	
	3. Make a backup copy of the files you are about to overwrite:
	
	  <SMS_Root>\Bin\<Processor type>\Cmprov.dll
	  <SMS_Root>\Bin\<Processor type>\Compmgr.exe
	  <SMS_Root>\Bin\<Processor type>\Basesvr.dll
	
	4. Copy these updated files from the disk or network share to the SMS provider
	  folder:
	
	  <SMS_Root>\Bin\<Processor type>\Cmprov.dll
	  <SMS_Root>\Bin\<Processor type>\Compmgr.exe
	  <SMS_Root>\Bin\<Processor type>\Basesvr.dll
	
	5. Restart the following SMS Provider services:
	
	  SMS_SQL_MONITOR_<SERVERNAME>
	  Windows Management
	
	Note that with Windows Management Instrumentation (WMI) build 1085, the service
	name is changed to "Windows Management Instrumentation."
	
	To Manually Update a Remote SMS SQL Monitor Server:
	
	NOTE: Before you install this update on your SMS site database server, you must
	install it on the SMS site servers in your environment.
	
	1. From the updated SMS site server, copy the following SMS SQL monitor files to
	  a disk or network share:
	
	  <SMS_Root>\Bin\<Processor type>\Cmprov.dll
	  <SMS_Root>\Bin\<Processor type>\Compmgr.exe
	  <SMS_Root>\Bin\<Processor type>\Basesvr.dll
	
	2. On the SMS SQL Monitor server, stop the SMS_SQL_MONITOR_<SERVERNAME>
	  service.
	
	3. Make a backup copy of the SMS SQL monitor files you are about to overwrite:
	
	  <SMS_Root>\Bin\<Processor type>\Cmprov.dll
	  <SMS_Root>\Bin\<Processor type>\Compmgr.exe
	  <SMS_Root>\Bin\<Processor type>\Basesvr.dll
	
	4. Copy these updated files from the disk or network share to the SMS SQL
	  monitor folder:
	
	  <SMS_Root>\Bin\<Processor type>\Cmprov.dll
	  <SMS_Root>\Bin\<Processor type>\Compmgr.exe
	  <SMS_Root>\Bin\<Processor type>\Basesvr.dll
	
	5. Restart the SMS_SQL_MONITOR_<SERVERNAME> SMS SQL monitor service.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP3
	Version           : :2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
