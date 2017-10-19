---
layout: page
title: "Q220858: Client Install Fails on NT 4.0: CLICORE.EXE Returns Exit Code=1"
permalink: /kb/220/Q220858/
---

## Q220858: Client Install Fails on NT 4.0: CLICORE.EXE Returns Exit Code=1

	Article: Q220858
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbsms200 kbsms200bugkbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Windows NT Workstation 4.0 computers that have had the Zero Administration Kit
	(ZAK) modifications applied fail Systems Management Server 2.0 client
	installation.
	
	The workstation's %windir%\Ms\Sms\Logs\Ccim32.log file shows the following:
	
	  Process "clicore.exe /S" finished; exit code = 1. <CCIM32>
	  ERROR - base component "SMS Client Base Components" install state set to ""
	  <CCIM32>
	
	When you review the Clicore.log, there is no indication that problems were
	encountered during installation.
	
	The result is that the Cliex32.dll process never begins and the client
	installation does not successfully complete.
	
	CAUSE
	=====
	
	The Zero Administration Kit (ZAK) modification adds the following two registry
	values with the data type REG_SZ:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment\temp=%SystemDrive%\temp 
	
	  -and-
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment\tmp=%SystemDrive%\temp 
	
	This causes the Systems Management Server 2.0 client installation to fail. The
	corrected data type is REG_EXPAND_SZ.
	
	WORKAROUND
	==========
	
	Changing the data type for the preceding values from REG_SZ to REG_EXPAND_SZ
	allows the Systems Management Server 2.0 client installation to complete.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	a. Record the existing values, and then delete them.
	
	  1. Start the Registry Editor (Regedt32.exe).
	
	  2. Locate the temp value under the following key in the registry:
	
	        HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment\ 
	
	  3. On the Edit menu, click String, record the value, and then click OK.
	
	  4. On the Edit menu, click Delete, and then click Yes.
	
	  5. Locate the tmp value under the following key in the registry:
	
	         HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment\
	
	  6. On the Edit menu, click String, record the value, and then click OK.
	
	  7. On the Edit menu, click Delete, and then click Yes.
	
	b. Add the values back to the registry with the correct data type.
	
	  1. Locate the following key in the registry:
	
	         HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment\
	
	  2. On the Edit menu, click Add Value, and then add the following registry
	     value:
	
	        Value Name: temp
	        Data Type:  REG_EXPAND_SZ
	        Value:      Enter value recorded for temp in step a.
	   
	
	  3. On the Edit menu, click Add Value, and then add the following registry
	     value:
	
	        Value Name: tmp
	        Data Type:  REG_EXPAND_SZ
	        Value:      Enter value recorded for tmp in step a.
	   
	
	  4. Quit Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q222967 ZAK Client Setup Does Not Create TEMP Folders Correctly
	
	Additional query words: prodsms client installation
	
	======================================================================
	Keywords          : kbClient kbsms200 kbsms200bug kbfaq
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
