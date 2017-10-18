---
layout: page
title: "Q249588: Package from Parent Makes SQL Problems at Restored Child Site"
permalink: kb/249/Q249588/
---

## Q249588: Package from Parent Makes SQL Problems at Restored Child Site

	Article: Q249588
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbtool kbServer kbsms120 kbsms120bug kbPackage kbSoftwareDist kbUpgrade
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Systems Management Server (SMS) software distribution package that is
	created on a parent site arrives at the child site after the child site has been
	restored from a backup, SQL arithmetic overflow problems may be recorded at the
	child site. For example, Offer Manager may record the following error message in
	the Offermgr.log file when it tries to process the package:
	
	  ~SQL Err #10007> General SQL Server error: Check messages from the SQL
	  Server.~ $$<SMS_OFFER_MANAGER>...<thread=1720 (0x6B8)> ~SQL Msg
	  #3606> Arithmetic overflow occurred.~
	  $$<SMS_OFFER_MANAGER>...<thread=1720 (0x6B8)>
	
	CAUSE
	=====
	
	This problem can occur after a child site is restored from a backup. After this
	occurs, Offer Manager does not verify the existence of the package first before
	it updates or inserts advertisements.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 SP1. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: You can use this method only for Intel-based computers.
	
	1. Copy the hotfix folder structure to a local folder on your site server or to
	  a share on your network. It is important to keep the folder structure intact
	  because the Q249588.exe update is dependent upon the folder structure. The
	  Q249588.exe file is a Microsoft Windows Installer file that updates specific
	  files on your site server.
	
	2. Log on to your site server by using an account with administrative
	  privileges, and then quit all instances of the SMS Administrator console.
	
	3. Run the Q249588.exe file, and then follow the directions in the wizard to
	  finish.
	
	Manual Installation
	-------------------
	
	NOTE: You can use this method for both Intel-based and Alpha-based primary site
	servers.
	
	1. Copy the hotfix folder structure to a local folder on your site server or to
	  a share on your network.
	
	2. Quit the SMS Administrator console.
	
	3. Stop all SMS Services.
	
	4. Copy the following files from the appropriate hotfix platform folder to the
	  path that is specified below. A site server that is running on an Intel
	  platform only needs the hotfix files from the I386 hotfix folder. A site
	  server that is running on an Alpha platform only needs the hotfix files from
	  the Alpha hotfix folder.
	
	  Basesvr.dll i386<A0><A0><A0><A0><A0>1,562,528 bytes
	  Smsprov.dll i386<A0><A0><A0><A0><A0>4,153,808 bytes
	  Basesvr.dll Alpha<A0><A0><A0><A0><A0>2,394,384 bytes
	  Smsprov.dll Alpha<A0><A0><A0><A0><A0>11,708,176 bytes
	
	5. Update the remote SMS provider by following these steps on the remote server
	  that is running the SMS provider:
	
	  a. Stop the SMS_SQL_MONITOR and Windows Management services.
	
	  b. Copy the hotfixed SMS provider files from the appropriate hotfix platform
	     folder to the <Drive>:\Smsprov\Bin\<Platform> folder.
	
	  c. Restart the SMS_SQL_MONITOR and Windows Management services.
	
	  d. Restart the SMS_SITE_COMPONENT_MANAGER service on the site server.
	
	To Update a Remote SMS Administrator Console
	--------------------------------------------
	
	1. From the updated SMS site server, copy the following SMS Administrator
	  console file(s) to a diskette or network share:
	
	  <DriveLetter>:\SMS\bin\i386\basesvr.dll
	
	2. Make a backup copy of the file(s).
	
	3. Copy the updated file(s) from the diskette or network share to the SMS
	  Administrator console folder:
	
	  \\<AdminConsole>\SMSAdmin\bin\i386\basesvr.dll
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbinterop kbtool kbServer kbsms120 kbsms120bug kbPackage kbSoftwareDist kbUpgrade kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
