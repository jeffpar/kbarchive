---
layout: page
title: "Q281603: SMS: Executive Service Hangs at Startup Waiting for User Respons"
permalink: kb/281/Q281603/
---

## Q281603: SMS: Executive Service Hangs at Startup Waiting for User Respons

	Article: Q281603
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 29-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Systems Management server (SMS) site server, the SMS Executive service may
	appear to stop responding (hang) after startup. When this occurs, most of the
	threads of the SMS Executive service may not record anything in their respective
	logs (if logging is enabled). There are no error messages in either the Event
	Log or the SMS status system.
	
	CAUSE
	=====
	
	This issue can occur after another program that uses shared ODBC DLL files has
	updated those DLL files to a substantially newer version than the version that
	is included with the currently installed SMS service pack. This can cause the
	initialization of the License Metering thread of the SMS Executive service to
	fail, and can generate the following message in the service context:
	
	  ODBCINT.DLL - the version of this DLL is not valid.
	
	  Hit OK to continue or CANCEL to quit.
	
	WORKAROUND
	==========
	
	WARNING: The following workaround may cause interoperability or compatibility
	issues with the third-party program that updated the DLL files. Because of this,
	you should use caution if you decide to proceed with the following workaround.
	
	To work around this issue, restore the following ODBC DLL files from the
	\SMS\Bin\i386\System32 folder on the SMS 2.0 service pack CD-ROM you are using
	to the %windir%\System32 folder on the SMS site server after you stop all SMS
	services:
	
	  Odbc16gt.dll
	  Odbc32.dll
	  Odbc32gt.dll
	  Odbccp32.dll
	  Odbccr32.dll
	  Odbcint.dll
	  Odbctrac.dll
	
	For example, the SMS 2.0 Service Pack 2 (SP2) version of these DLL files should
	be 3.510.3002.13. Right-click a file, and then click Properties to view the file
	version information.
	
	MORE INFORMATION
	================
	
	Cisco Secure version 2.4 (a RAS Access software), is known to update these
	shared ODBC DLL files.
	
	You can start SMS Executive service as a console program by starting a command
	prompt on the site server, changing the current working directory to
	%windir%\System32, and then using the "D:\sms\bin\i386\smsexec.exe /e" (without
	the quotation marks) command.
	
	This generates messages about DLL version conflicts on the desktop that otherwise
	would be present in the service context.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	STATUS
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
