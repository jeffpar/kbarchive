---
layout: page
title: "Q323206: SMS: List of Bugs Fixed in Systems Management Server 2.0 SP4 HRP"
permalink: kb/323/Q323206/
---

## Q323206: SMS: List of Bugs Fixed in Systems Management Server 2.0 SP4 HRP

	Article: Q323206
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists Microsoft Knowledge Base articles for problems that are fixed
	in the Systems Management Server (SMS) 2.0 Service Pack 4 (SP4) Hotfix Rollup
	Package (HRP), and also describes how to obtain the HRP.
	
	You must install SMS 2.0 SP4 before you install the HRP. For additional
	information about how to install SP4, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q311457 SMS: How to Obtain and Install Systems Management Server 2.0 Service
	  Pack 4
	
	To obtain the SMS 2.0 SP4 HRP immediately, contact Microsoft Product Support
	Services. For a complete list of Microsoft Product Support Services (PSS) phone
	numbers and information about support costs, visit the following Microsoft Web
	site::
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	International Client Pack versions of the HRP will also be made available through
	PSS soon after the English-language version of the HRP is released.
	
	IMPORTANT: The application of this hotfix makes a modification to the SMS
	database and performs a site reset. Therefore, you must provide an account and
	password with the necessary privileges to modify the SMS database. Additionally,
	this hotfix updates the SMS Client Base components.
	
	IMPORTANT: If you have an SMS hierarchy with multiple sites in the same domain,
	it is important that you apply this hotfix to all sites in the hierarchy at once
	in order to avoid any mismatched SMS Client components.
	
	MORE INFORMATION
	================
	
	For additional information about the problems that are fixed in the HRP, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q266232 SMS: Windows 9x Clients Hang When Remote Control Agent Is Installed
	
	  Note that the fix for Q266232 is included in SMS 2.0 SP4 for English clients,
	  but you must apply the HRP for Dutch clients.
	
	  Q287409 SMS: The Last Hardware Scan Date Is Incremented by One Month After
	  the Site Attachment Process
	
	  Q287990 Large .tmp File Is Created When You Install or Upgrade an SMS
	  2.0-based Client
	
	  Q295441 SMS: Logon Discovery Agent Creates Multiple Connections When it
	  Passes DDRs to Site Servers
	
	  Q303397 SMS: Cannot View Subcollections on Child Sites
	
	  Q303848 SMS: You Cannot Type a Share Name That is Longer Than 64 Characters
	  When You Create Packages
	
	  Q305096 SMS: Low-Rights User Is Unable to Browse Criteria 'Values' Without
	  Class Rights
	
	  Q305164 SMS: Remote Control Clients That Are Configured for NetBIOS May Not
	  Be Contacted by the Administrator Console
	
	  Q305209 Cannot Upgrade to SMS 2.0 If Any Component Uses the LANDesk Registry
	  Key
	
	  Q306521 SMS: SMS Service Manager May Not Connect
	
	  Q306974 SMS: Software-Metering Agent Heap Operation Fault
	
	  Q307026 SMS: Duplicate Resources Appear in Collections
	
	  Q307434 SMS: The SMSCliToknAcct Account Is Locked Out If You Use a Software
	  Installation Account
	
	  Q308238 SMS: Rchelp.sys File Prevents Chkdsk.exe from Running
	
	  Q308646 SMS: Screen-Redraw Issues and GDI Object Leaks When Programs Are Set
	  to Use Custom Icons
	
	  Q309381 A Distribution Point Does Not Appear on the Parent If You Add a
	  Distribution Point to a Child Site Again from the Child Site
	
	  Q309387 SMS: 'Invalid Collection Name' Error Message After You Browse for
	  Valid Collections
	
	  Q309437 SMS: SMS 2.0 Clients Do Not Work on Windows NT 4.0 Terminal Server
	  SP4 Through SP6
	
	  Q309644 SMS: The Mandatory Countdown Timer Maximum Value Has Been Increased
	
	  Q310127 SMS: Operating System Appears as 'Windows 9x' at Parent Site
	
	  Q310317 SMS: Access Violation in the SMS_LICENSE_SERVER Service
	
	  Q311085 SMS: Distribution Point Wizard Does not Delete a Package from all
	  Distribution Points
	
	  Q311127 High CPU Utilization in LSASS on Primary Domain Controller Emulator
	  When SMS Client Is Installed to BDCs
	
	  Q311212 SMS: Missing Advertisement Status Messages
	
	  Q311462 SMS: User or User Group Advertisements Do Not Run Immediately After a
	  User Logs On
	
	  Q312512 SMS: Network Discovery Cannot Connect Anonymously to Client
	
	  Q313660 SMS: DDM Assigns Clients Incorrectly in a Multi-Tiered Hierarchy
	
	  Q314271 SMS: Windows Explorer May Consume CPU Resources When the Remote
	  Control Agent Stops
	
	  Q314342 SMS: Advertisements May Not Run If the Screen Saver Runs
	
	  Q316021 SMS: SMSAPM32 Does Not Remove Software or Generate Status Messages
	  for Software Uninstall
	
	  Q316132 SMS: Collection Replication Does Not Work if Collection Comment Has a
	  Carriage Return
	
	  Q316258 SMS: Connection to SMS Provider Without Impersonation May Cause the
	  Wrong User Groups to Be Retrieved
	
	  Q316868 Advertisements Do Not Start When a User Logs On
	
	  Q316316 SMS: Distribution Manager Does Not Work and You Receive Error 998
	  During Package Compression
	
	  Q317061 SMS: Software Distribution May Not Work If the SMS Site Server Is
	  Installed with Exchange 2000 Server
	
	  Q317112 SMS: A Site Server Enumerates the Group Membership of the SMS Service
	  Account Too Often
	
	  Q317423 SMS: Software Inventory Agent Generates an Invalid Page Fault
	
	  Q317795 SMS: The Remote Control Console Displays a Gray Screen
	
	  Q318163 SMS: Client Service Does Not Quit During Shutdown
	
	  Q318232 SMS: The 'BROWSTAT.EXE STATUS' Command Does Not Return a Server List
	
	  Q318834 SMS Package Source Versions May Be Reported Incorrectly
	
	  Q319207 SMS: Retrying a Package Update May Create Many Jobs
	
	  Q319427 SMS: File Time Stamp Is Changed During Software Distribution Across
	  Time Zones
	
	  Q319462 SMS: Travel Mode Discovery Property May Not Be Reported in Client
	  DDRs
	
	  Q320066 SMS: A Large .tmp File Is Created When You Install a Client
	
	  Q320459 SMS: Advertisements May Run When No User Is Logged On
	
	  Q320692 SMS: Transaction History Files Increase in Size
	
	  Q320797 SMS: Windows 98 Client Hangs When the Wuser32.exe Agent Starts
	
	  Q321168 SMS: Advertisements for a User or User Group Can Run Again
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
