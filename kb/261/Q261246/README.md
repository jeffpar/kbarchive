---
layout: page
title: "Q261246: SMS: Sms20info Tool Added to Support.exe in SMS 2.0 Service Pack"
permalink: kb/261/Q261246/
---

## Q261246: SMS: Sms20info Tool Added to Support.exe in SMS 2.0 Service Pack

	Article: Q261246
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200sp2fix
	Last Modified: 24-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Support.exe file included on the Systems Management Server (SMS) Service
	Pack CD-ROM includes many useful tools for SMS 2.0 administrators. The SMS 2.0
	Information Gathering Utility is added to Service Pack 2 through the SMS 2.0
	Supportability Files (Support.exe).
	
	For additional information on how to obtain the latest Systems Management Server
	2.0 service pack, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	MORE INFORMATION
	================
	
	Sms20info.exe is a utility that gathers the following information from a 2.0
	Site Server running Microsoft Windows NT 4.0 or Microsoft Windows 2000:
	
	- Creates SMSINFO_[Sitecode] directory on the "c:" drive to store retrieved
	  information
	
	- Creates WINMSD report for Site Server
	
	- Dumps SMS Registry Key
	
	- Creates SMS\Inboxes directory summary
	
	- Creates SMS\Bin\ directory summary
	
	- Copies all Logs from \SMS\Logs directory
	
	- Stops and Starts WMI service on Site Server
	
	- Launches Microsoft Internet Explorer and points it to the Microsoft File
	  Exchange (MSFE) server to upload the gathered information and files
	  (optional)
	
	To extract and install the SMS 2.0 Supportability Files, run Support.exe.
	
	Note: Administrative rights on the targeted Site Server are required when you run
	this utility. Write access to the location from which this utility is run is
	also required.
	
	Currently this utility does not produce a WINMSD report for a Windows 2000 Site
	Server if it is run on Windows NT 4.0.
	
	Additional query words: prodsms list
	
	======================================================================
	Keywords          : kbsms200 kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : winnt:2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
