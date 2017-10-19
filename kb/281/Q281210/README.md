---
layout: page
title: "Q281210: CPU Usage on Computer or Client Reaches 100 Percent"
permalink: /kb/281/Q281210/
---

## Q281210: CPU Usage on Computer or Client Reaches 100 Percent

	Article: Q281210
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbServer kbsms200 kbsms200bug kbAppMan
	Last Modified: 18-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, the CPU usage on a Systems Management Server (SMS) client or
	server computer may reach 100 percent and may remain at 100 percent. This
	article describes one potential cause of this behavior.
	
	Note that the behavior that is described in this article is not the only cause of
	100-percent CPU usage on an SMS client or server computer.
	
	CAUSE
	=====
	
	This behavior can occur when the logging that is performed by the SMS client or
	server services in conjunction with the Cheyenne InocuLAN antivirus program
	cause the CPU usage to reach 100 percent. This behavior has been observed in,
	but is not limited to, the Smsapm32 client-side process and the Sms_Executive
	service.
	
	WORKAROUND
	==========
	
	To work around this behavior, use either of the following methods:
	
	- Stop the Cheyenne InocuLAN antivirus server service
	
	  -or-
	
	- Disable all logging for the SMS process or processes that are involved
	
	NOTE: In some cases where hardware is either extremely busy or underpowered, you
	may have to spend a considerable amount of time to move through and stop the
	InocuLAN service.
	
	RESOLUTION
	
	To resolve this behavior, use InocuLAN driver version 5.0.4521.1 or later for
	Microsoft Windows 2000 or InocuLAN driver version 4.0.4521.1 for Microsoft
	Windows NT 4.0. This driver is located in the Ino_fltr.sys file.
	
	MORE INFORMATION
	================
	
	The CPU usage can remain at 100 percent until you stop the InocuLAN service or
	restart the computer.
	
	To check the version of your driver, click the Version tab in the properties of
	the Ino_fltr.sys file in the Winnt\System32\Drivers folder. Note that you must
	restart your computer to replace the existing driver files.
	
	To install the update, view the following Computer Associates Web site:
	
	  http://support.ca.com/Download/ildrvupdate.html
	  (http://support.ca.com/Download/ildrvupdate.html)
	
	To install the update for Intel-based computer, view the following Computer
	Associates File Transfer Protocol (FTP) Web site:
	
	  ftp://ftp.ca.com/pub/inoculan/drvupdi.exe
	  (ftp://ftp.ca.com/pub/inoculan/drvupdi.exe)
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms ino_fltr sys
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbServer kbsms200 kbsms200bug kbAppMan 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
