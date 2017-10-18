---
layout: page
title: "Q216419: SMS: Client Installation Requires a Valid TEMP Directory"
permalink: kb/216/Q216419/
---

## Q216419: SMS: Client Installation Requires a Valid TEMP Directory

	Article: Q216419
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsetup kbsms200 kbsms200bug kbUpgrade
	Last Modified: 04-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The System.ini file is deleted after upgrading a Systems Management Server 1.2
	client. When upgrading to Systems Management Server 2.0, the migration logs
	contain no reference to removing the System.ini file.
	
	On 16-bit Windows clients, the result is that Windows cannot be started.
	
	CAUSE
	=====
	
	This problem occurs if the client's TEMP environment variable is set to a
	directory that does not exist when upgrade is attempted. The client upgrade
	process attempts to write a new System.ini file into the Temp directory, with
	the following process:
	
	1. Open C:\%windir%\System.ini to read original file.
	
	2. Write to C:\%temp%\System.ini.
	
	However, when the TEMP environment variable is invalid, Windows returns the
	Windows directory for a Temp path. Therefore, the C:\%windir%\System.ini is
	opened for both read and write. As a result, the original System.ini file is
	overwritten.
	
	WORKAROUND
	==========
	
	Prevention is the only way to avoid this problem. Before upgrading the clients,
	look at the Systems Management Server 1.2 inventory data to determine if any
	clients do not have the environment variable set for TEMP=. If clients are
	missing the TEMP variable, you can create and distribute a Systems Management
	Server Installer file to the affected clients to create the Temp directory and
	set the environment variable in the Autoexec.bat (for 16-bit clients) file or
	the registry (for 32-bit clients).
	
	Note that it is also possible to use Systems Management Server to back up the
	System.ini file locally on the client or to collect it before upgrade.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms cli32 cli16 hang load boot device set migrate cant can't cannot start
	
	======================================================================
	Keywords          : kbsetup kbsms200 kbsms200bug kbUpgrade 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
