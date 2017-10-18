---
layout: page
title: "Q118964: PC WFW: Upgrade from WGPO to Microsoft Mail 3.2 PO Hangs"
permalink: kb/118/Q118964/
---

## Q118964: PC WFW: Upgrade from WGPO to Microsoft Mail 3.2 PO Hangs

	Article: Q118964
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail and Schedule+ Extensions for Microsoft Windows for Workgroups, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from a Microsoft Windows for Workgroups Mail postoffice to
	version 3.2x or 3.5 of Microsoft Mail for PC Networks, the setup will fail if
	the mailbox name of the postoffice creator is exactly 10 characters.
	
	When you run SETUP.EXE from the Mail Extensions package or the Postoffice/Server
	Upgrade disk that ships with version 3.5 of Microsoft Mail for PC Networks, you
	will get one of the following errors, depending on the operating system:
	
	From Microsoft Windows:
	
	  This application has violated system integrity due to execution of an invalid
	  instruction and will be terminated. Quit all applications, quit Windows and
	  then restart your computer
	
	From Microsoft Windows NT:
	
	  The NTVDM CPU has encountered an illegal instruction. CS:<location>
	
	CAUSE
	=====
	
	The setup will hang if you supply a mailbox name for the administrator account
	that is 10 characters in length. For example, if you use "POSTMASTER" as the
	administrator account name, setup will hang.
	
	RESOLUTION
	==========
	
	You must change the administrator's mailbox to be under 10 characters.
	
	NOTE: The administrator of the workgroup postoffice (WGPO) is the only user that
	can make changes to mailbox names.
	
	To change postoffice administrator mailbox name
	-----------------------------------------------
	
	1. Sign into Mail as the Postoffice Manager.
	
	2. From the Mail menu, choose Postoffice Manager.
	
	3. In the Postoffice Manager dialog box, select the name of the current
	  administrator, and click the details button.
	
	4. Change the name in the mailbox field to a new name of less than 10
	  characters, and click the OK button.
	
	For additional information, please see the Microsoft Windows for Workgroups Mail
	"User's Guide," pages 42-45.
	
	Additional query words: 3.20 3.11 3.1 WFWG PO WGPO workgroup extension extensions upgrade
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbScheduleSearch kbWFWSearch kbZNotKeyword3 kbMailScheduleX320
	Version           : :3.2
	
	=============================================================================
	
