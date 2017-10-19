---
layout: page
title: "Q202538: SMS: How to Edit MOF Files with MOF Manager"
permalink: /kb/202/Q202538/
---

## Q202538: SMS: How to Edit MOF Files with MOF Manager

	Article: Q202538
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbInventory kbWEBM
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to edit Managed Object Format (MOF) files with the
	MOF Manager tool (Mofman.exe).
	
	NOTE: Resource kit utilities such as Mofman.exe are supported on a
	reasonable-effort basis.
	
	MORE INFORMATION
	================
	
	MOF is a compiled language created by the Desktop Management Task Force (DMTF).
	MOF files can be used to define dynamic or static classes and instances of the
	classes. The MOF files can be compiled by the MOF compiler (Mofcomp.exe) that
	adds the classes to the Common Information Model (CIM) repository.
	
	Location of Mofman.exe 
	----------------------
	
	You can use Mofman.exe that is included in Systems Management Server (SMS) 2.0 to
	edit existing MOF files and to toggle the classes and instances that are defined
	in the MOF file to be available in the CIM repository and inventoried at each
	client.
	
	Mofman.exe is available at the following locations:
	
	- The Support\Reskit\Bin\I386\Mofman folder on the SMS 2.0 CD-ROM.
	
	- The SMS section of BackOffice Resource Kit version 4.5. Use any of the
	  following methods to access Mofman.exe in the BackOffice Resource Kit:
	
	   - After you install BackOffice Resource Kit version 4.5, start Microsoft
	     Windows Explorer, and then navigate to <Resource Kit
	     Root>\SMS\Mofman\Mofman.exe. By default, the resource kit is installed
	     in the Program Files folder.
	
	   - Click Start, click Programs, click Resource Kit, start the Tools
	     Management Console (Rktmc), and then navigate to Microsoft Resource
	     Kits\BackOffice 4.5 Resource Kit\Systems Management Server
	     Tools\Discovery\Inventory tools.
	
	   - Click Start, click Programs, click Resource Kit, start the Tools
	     Management Console (Rktmc), and then navigate to the Tools A to Z folder.
	
	Refer to the SMS 2.0 Resource Guide for additional information about how to use
	Mofman.exe.
	
	The Sms_def.mof File
	--------------------
	
	All of the classes and instances of information that are collected during
	hardware inventory on a client computer are listed in the Sms_def.mof file. By
	default, this file is located in the SMS\Inboxes\Clifiles.src\Hinv folder on the
	SMS site server. By default, only about 40 percent of the classes are enabled.
	Of the classes that are enabled, only about 50 percent of their individual
	instances are enabled.
	
	Only about 20 percent of all instances are enabled by default because of the
	amount of information that some classes can obtain during an inventory pass. If
	you make changes to the Sms_def.mof file, use caution and test any changes in a
	lab environment. By default, SMS discards any inventory file that has more than
	5,000,000 bytes that reaches the site server. You can increase this value, but
	the value can also be readily exceeded if you enable additional classes.
	
	NOTE: It has been reported that inventory files have reached over 10 megabytes
	(MBs). Inventory files that are this size have adverse effects on the site
	server's performance.
	
	Editing the Sms_def.mof File
	----------------------------
	
	NOTE: It is recommended that you make a copy of the Sms_def.mof file before you
	edit it so that you can restore the original file if unexpected or inappropriate
	results occur.
	
	To edit the Sms_def.mof file, start Mofman.exe, click Open on the File menu, and
	then navigate to Sms_def.mof. Mofman.exe displays the MOF classes in the left
	pane under the "Class List" heading. Each class has either a red or green icon
	beside it. This icon indicates if the class is disabled (red) or enabled (green)
	for inventory collection.
	
	To change the report status of either a class or an instance, use any of the
	following methods:
	
	- Double-click the class or instance that you want reported or disabled. When
	  you do so, the icon color changes.
	
	- Click the Report option above the 'Class List' frame. When you do so, the
	  color of the icon beside the class changes. Double-click any instances that
	  you want reported.
	
	- On the Edit menu, click Class, and then click either Report All, Report None,
	  or Report: <Win32 Class Name>. To enable all instances of a class,
	  click Properties on the Edit menu, and then click Report All. This menu
	  command is instance-specific.
	
	Known Issues
	------------
	
	These are a few of the known issues that may occur if you modify the Sms_def.mof
	file:
	
	- Eight blank classes may be displayed at the beginning of the Sms_def.mof file
	  or you may receive an error message when you attempt to compile the MOF using
	  Mofcomp.exe. For additional information about how to resolve these issues,
	  click the article number below to view the article in the Microsoft Knowledge
	  Base:
	
	  Q237495 SMS: Err Msg: ERROR 2 Failed to Run MofComp
	
	- If you enable any of the following classes, network traffic may occur during
	  an inventory cycle:
	
	   - Win32_BootConfiguration
	   - Win32_Desktop
	   - Win32_Environment
	   - Win32_Group
	   - Win32_LogicalDisk
	   - Win32_NetworkLogonProfile
	   - Win32_Printer
	   - Win32_PrinterConfiguration
	   - Win32_ProgramGroup
	   - Win32_SystemAccount
	   - Win32_UserAccount
	
	- It has been reported that Win32_LogicalDisk contributes to the
	  SMSCliToknAcct& account lockout problems that may occur in versions
	  earlier than SMS 2.0 Service Pack 2 (SP2).
	
	- If you enable the Win32_UserAccount class, trusted domains are examined.
	
	- The Win32_NTLogEvent class can pull the individual events found on Windows NT
	  servers. Depending on the server, the number of messages can be more than
	  10,000.
	
	- The Win32_UserAccount can pull the accounts from the Security Accounts
	  Manager (SAM) database on a Windows NT 4.0 domain controller, and cause
	  unusually large inventory files to be created.
	
	The following white paper describes how to modifying the MOF file by creating
	additional classes:
	
	  Collecting Asset Information with Systems Management Server 2.0
	  (http://www.microsoft.com/smsmgmt/techdetails/getassetinfo.asp)
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbInventory kbWEBM 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbhowto
	
	=============================================================================
	
