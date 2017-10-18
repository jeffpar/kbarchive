---
layout: page
title: "Q221481: FIX: WMI Fails to Install on Windows NT 4.0 SP 5 or Later"
permalink: kb/221/Q221481/
---

## Q221481: FIX: WMI Fails to Install on Windows NT 4.0 SP 5 or Later

	Article: Q221481
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbWBEM kbWinNT400sp5fix kbsms200 kbsms200bug kbsmsProviderkbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Systems Management Server 2.0 on a computer running Microsoft
	Windows NT Server 4.0 Service Pack 5 (SP5) or later, you may receive the
	following error:
	
	  Setup cannot compile MOF file
	  <drive>:\SMS\Bin\<Platform>\Sms_schm.mof. Do you want to
	  continue?
	
	If you click Yes to this and all subsequent dialog boxes, you will see a series
	of message boxes similar to the first that state that other MOF files cannot be
	compiled: Smsprov.mof, Cmpprov.mof, Cppprof.mof, Pollprov.mof, and Netdisc.mof.
	Setup then continues and ends with the message:
	
	  SMS has successfully installed.
	
	If you then view the Systems Management Server Administrator console, the site
	database is displayed with a question mark.
	
	
	RESOLUTION
	==========
	
	This hotfix has been posted to the following Internet location as Wmintsp5.exe:
	
	  ftp://ftp.microsoft.com/bussys/winnt/sms-public/wmintsp5.exe
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	This problem was first corrected in Systems Management Server (SMS) 2.0 Service
	Pack 1.
	
	MORE INFORMATION
	================
	
	The rest of this article describes the recovery steps you need to perform:
	
	- If you have not yet installed Systems Management Server 2.0 on Windows NT
	  Server 4.0 SP5 or later.
	
	- To recover a Systems Management Server 2.0 primary site server that has run
	  into this problem.
	
	- To recover a Systems Management Server 2.0 secondary site server that has run
	  into this problem.
	
	- To recover a Systems Management Server 2.0 client that has run into this
	  problem.
	
	- To recover a Systems Management Server 2.0 Administrator console.
	
	You Have Not Yet Installed Systems Management Server 2.0 on Windows NT Server 4.0 SP5 or later
	----------------------------------------------------------------------------------------------
	
	If you have not yet installed Systems Management Server 2.0 on a computer running
	Windows NT Server 4.0 SP5, all you need to do is update the source that you are
	going to install from.
	
	Recovery Steps:
	
	1. Copy the Systems Management Server 2.0 CD to a network share point.
	
	2. Replace the Wbemsdk.exe file in the Smssetup\Bin\<Platform> directory
	  with the version obtained from the hotfix.
	
	3. Install Systems Management Server 2.0 from the network share point you
	  created in Step 1 of this procedure.
	
	Recovery of a Systems Management Server 2.0 Primary Site Server
	---------------------------------------------------------------
	
	If you attempted to install a Systems Management Server 2.0 primary site server
	on a computer running Windows NT Server 4.0 Service Pack 5 or later, error
	messages were displayed indicating that the MOF files could not be compiled. If
	you canceled the installation at this point, perform the three steps listed in
	the "You Have Not Yet Installed Windows NT Server 4.0 SP5 or later" section of
	this article. However, if you continued with the installation, the site is
	currently inoperative but recoverable. In this case, perform the steps below.
	
	Recovery Steps:
	
	1. Replace the Wbemsdk.exe file in the <SMS_root>\Bin\<Platform>
	  directory with the version obtained from the hotfix.
	
	2. Replace the Wbemsdk.exe file in the
	  <SMS_root>\Inboxes\Clicomp.src\Wbem\<Platform> directory with the
	  version obtained from the hotfix.
	
	3. Replace the Compver.ini file in the <SMS_root>\Inboxes\Clicomp.src\Wbem
	  directory with the version obtained from the hotfix.
	
	4. Set up the Windows Management Instrumentation (WMI) server components. From a
	  command prompt, type the following command, using the hotfixed version of
	  Wbemsdk.exe:
	
	  Wbemsdk.exe /s /server
	
	5. Manually compile the MOF files that failed to compile by typing the following
	  commands from a command prompt (press ENTER after each command):
	
	  cd %SystemRoot%\system32\wbem
	  Mofcomp x:\<SMS_root>\bin\<Platform>\sms_schm.mof
	  Mofcomp x:\<SMS_root>\bin\<Platform>\smsprov.mof
	  Mofcomp x:\<SMS_root>\bin\<Platform>\cmprov.mof
	  Mofcomp x:\<SMS_root>\bin\<Platform>\cpprov.mof
	  Mofcomp x:\<SMS_root>\bin\<Platform>\pollprov.mof
	  Mofcomp x:\<SMS_root>\bin\<Platform>\netdisc.mof
	
	  If the SQL Server is located on a computer other than the site server, then
	  compile the .mof files located on that computer by typing the following from
	  a command prompt:
	
	  cd %SystemRoot%\system32\wbem
	  Mofcomp x:\smsprov\mofs\<sitecode>\sms_schm.mof
	  Mofcomp x:\smsprov\mofs\<sitecode>\smsprov.mof
	
	  where x is the drive where Systems Management Server is installed or where the
	  SMS Provider is installed on a remote SQL Server.
	
	6. In the Systems Management Server Administrator console, the node under the
	  Systems Management Server node will state that the connection failed. Delete
	  that failed connection node by right-clicking it and then clicking Delete on
	  the shortcut menu. Restore the node by right-clicking the Systems Management
	  Server node, pointing to All Tasks, and then clicking Connect To Site
	  Database on the shortcut menu. In the Site Database Connection Wizard, click
	  Next, then select "Reconnect to the site database for this site server".
	  Click Next and then click Finish to complete the wizard.
	
	7. Restart the system.
	
	Recovery of a Systems Management Server 2.0 Secondary Site Server
	-----------------------------------------------------------------
	
	If you attempted to install a Systems Management Server 2.0 secondary site server
	from the Systems Management Server 2.0 CD to a computer running Windows NT
	Server 4.0 Service Pack 5 or later, error messages were displayed indicating
	that the MOF files could not be compiled. If you canceled the installation at
	this point, perform the three steps listed in the "You Have Not Yet Installed
	Windows NT Server 4.0 SP5 or later" section of this article. However, if you
	continued with the installation, the secondary site is functional but
	performance and manageability of it from its parent site will suffer. In this
	case, perform the steps below.
	
	If you attempted to install a Systems Management Server 2.0 secondary site server
	from a Systems Management Server 2.0 primary site server to a computer running
	Windows NT Server 4.0 Service Pack 5 or later, the Smssetup.log file on the
	secondary site server will indicate that the MOF files could not be compiled.
	The error messages mentioned in the SYMPTOMS section of this article will not be
	displayed. The secondary site is functional but performance and manageability of
	it from its parent will suffer.
	
	Recovery Steps:
	
	1. On both the primary and secondary site servers, replace the Wbemsdk.exe file
	  in the <SMS_root>\Bin\<Platform> directories with the version
	  obtained from the hotfix.
	
	2. On both the primary and secondary site servers, replace the Wbemsdk.exe files
	  in the <SMS_root>\Inboxes\Clicomp.src\Wbem\<Platform> directories
	  with the version obtained from the hotfix.
	
	3. On both the primary and secondary site servers, replace the Compver.ini file
	  in the <SMS_root>\Inboxes\Clicomp.src\Wbem directory with the version
	  obtained from the hotfix.
	
	4. On the secondary site server, set up the WMI server components. From a
	  command prompt, type the following command, using the hotfixed version of
	  Wbemsdk.exe:
	
	  Wbemsdk.exe /s /server
	
	5. On the secondary site server, manually compile the MOF files that failed to
	  compile by typing the following commands from a command prompt (press ENTER
	  after each command):
	
	  cd %SystemRoot%\system32\wbem
	  Mofcomp x:\<SMS root directory>\bin\<Platform>\sms_schm.mof
	  Mofcomp x:\<SMS root directory>\bin\<Platform>\cmprov.mof
	  Mofcomp x:\<SMS root directory>\bin\<Platform>\cpprov.mof
	  Mofcomp x:\<SMS root directory>\bin\<Platform>\pollprov.mof
	  Mofcomp x:\<SMS root directory>\bin\<Platform>\netdisc.mof
	
	  where x is the drive where Systems Management Server is installed.
	
	6. Restart the systems.
	
	Recovery of a Systems Management Server 2.0 Client
	--------------------------------------------------
	
	If you attempted to install the Systems Management Server 2.0 client on a
	computer running Windows NT Server 4.0 Service Pack 5, WMI and hardware
	inventory will not install. All other client agents will function properly.
	
	Recovery Steps:
	
	1. On the site server(s), replace the Wbemsdk.exe file in the
	  <SMS_root>\bin\<Platform> directories with the version obtained
	  from the hotfix.
	
	2. On the site server(s), replace the Wbemsdk.exe file in the
	  <SMS_root>\Inboxes\Clicomp.src\Wbem\<Platform> directories with
	  the version obtained from the hotfix.
	
	3. On the site server(s), replace the Compver.ini file in the
	  <SMS_root>\Inboxes\Clicomp.src\Wbem directory with the version obtained
	  from the hotfix.
	
	  Every 23 hours, the Client Configuration and Installation Manager (CCIM) will
	  poll its site server(s). This will initiate the installation of WMI and
	  hardware inventory.
	
	4. Restart the systems.
	
	NOTE: To verify the above fix without waiting 23 hours, perform the following
	steps:
	
	1. On one of the client computers, open Control Panel, double-click the Systems
	  Management icon, and click the Components tab.
	
	2. Select the Windows Management item and click the Repair Installation button.
	
	3. After a short time, click the Refresh Status button. Windows Management
	  should indicate its version as 698 and status as Installed.
	
	4. Perform the same actions for the Hardware Inventory Agent item.
	
	Recovery of a Systems Management Server 2.0 Administrator Console
	-----------------------------------------------------------------
	
	If you attempted to install a Systems Management Server 2.0 Administrator console
	on a computer running Windows NT Server 4.0 Service Pack 5, the administrative
	console will not be functional.
	
	Recovery Steps:
	
	1. Remove the administrative console by running the Systems Management Server
	  2.0 Setup program.
	
	2. Perform the three steps listed in the "You Have Not Yet Installed Systems
	  Management Server 2.0 on Windows NT Server 4.0 SP5 or later" section of this
	  article.
	
	Additional query words: prodsms windows management interface wbem webm
	
	======================================================================
	Keywords          : kbWBEM kbWinNT400sp5fix kbsms200 kbsms200bug kbsmsProvider kbfaq
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
