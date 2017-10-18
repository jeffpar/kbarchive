---
layout: page
title: "Q246164: intraNetWare Login Dialog Box Appears During Hardware Inventory"
permalink: kb/246/Q246164/
---

## Q246164: intraNetWare Login Dialog Box Appears During Hardware Inventory

	Article: Q246164
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbInventory
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a hardware inventory of Microsoft Windows NT-based clients, the Novell
	intraNetWare login dialog box may appear, requesting the SMSCliToknAcct&
	account to log on.
	
	CAUSE
	=====
	
	This problem can occur under the following circumstances:
	
	- The Sms_def.mof file has been modified to enable the WIN32_Printer class.
	
	- Windows NT users have printers defined that are on NetWare servers.
	
	The System Management Server (SMS) hardware inventory agent for Windows NT
	(Hinv32.exe) is attempting to determine certain printer properties as defined in
	the properties of the WIN32_Printer WMI class. Because Hinv32.exe is running
	under the context of the SMSCliToknAcct& account, it attempts to use this
	account context to enumerate printer properties on NetWare servers.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Version      Size      File name   Platform
	  ---------------------------------------------
	  2.00.1054   3,821,637  Wbemsdk.exe   i386
	  2.00.1054   7,200,646  Wbemsdk.exe   Alpha
	  2.00.1078     327,681  Inhinv32.exe  i386
	  2.00.1078     567,382  Inhinv32.exe  Alpha
	  2.00.1078      75,457  Sms_def.mof     -
	  2.00.1054          67  Compver1054.ini -   Renamed to Compver.ini
	  2.00.1078          67  Compver1078.ini -   Renamed to Compver.ini
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	If you do not want the information provided by the Win32_Printer class, you can
	disable it in the Sms_def.mof file. To prevent the Win32_Printer class from
	being enumerated during hardware inventory (the SMS installation default), you
	can modify the Sms_def.mof as follows on all SMS site servers on which it has
	been modified.
	
	1. Locate the Sms_def.mof in the SMS\Inboxes\Clifiles.src\Hinv folder.
	
	2. Edit the file with any text editor (such as Notepad).
	
	3. Search the file for "Printer Device".
	
	4. The result of the search should show "SMS_Group_Name("Printer Device")".
	
	5. Immediately before this line, you see the following line:
	
	  [SMS_Report(TRUE)),
	
	6. Modify the word TRUE to read FALSE, and then save the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use either of the following methods at the SMS site
	server.
	
	Using The Hotfix Installer
	--------------------------
	
	NOTE: Use this method on i386 platforms only.
	
	1. Copy or extract the fix to the SMS site server, making sure to maintain the
	  folder structure. The Q246164.exe SMS Installer script attempts to locate and
	  copy files from the subordinate i386 and Alpha folders that contain the files
	  listed above.
	
	2. Stop the SMS_Site_Component_Manager and SMS_Executive services.
	
	3. Make a backup copy of the SMS\Inboxes\Clifiles.box\Hinv\Sms_def.mof file
	  before installing the hotfix. Make a note of any modifications made to this
	  file that you may want to add or change in the new version of the file that
	  is copied as part of this hotfix. The version supplied as part of the hotfix
	  must replace the currently installed version on the SMS site servers. The
	  WIN32_Printer class no longer exists in the updated .mof file; it has been
	  replaced by the SMS_Printer class. Enabling the SMS_Printer class and
	  properties does not longer produce the intraNetWare client dialog box as
	  described in this article.
	
	4. Run Q246164.exe and follow the installation wizard instructions.
	
	5. After installation, verify that the SMS services have restarted.
	
	Clients will upgrade their Windows Management Instrumentation (WMI) and hardware
	inventory components within the 23-hour maintenance cycle.
	
	Manual installation
	-------------------
	
	1. Stop the SMS_EXECUTIVE and SMS_SITE_COMPONENT_MANAGER services on the site
	  server.
	
	2. Make a backup copy of the SMS\Inboxes\Clifiles.box\Hinv\Sms_def.mof file
	  before installing the hotfix. Make a note of any modifications made to this
	  file that you may want to add or change in the new version of the file that
	  is copied as part of this hotfix. The version supplied as part of the hotfix
	  must replace the currently installed version on the SMS site servers. The
	  WIN32_Printer class no longer exists in the updated .mof file; it has been
	  replaced by the SMS_Printer class. Enabling the SMS_Printer class and
	  properties does not longer produce the intraNetWare client dialog box as
	  described in this article.
	
	3. Copy the updated Wbemsdk.exe file to the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Wbem\<Platform> folder.
	
	4. Copy the Compver1054.ini file to the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Wbem folder and rename it to
	  Compver.ini.
	
	5. Copy the updated Inhinv32.exe file to the
	  <Sms_root_folder>\Inboxes\Clicomp.src\hinv\<Platform> folder.
	
	6. Copy the Compver1078.ini file to the
	  <Sms_root_folder>\Inboxes\Clicomp.src\hinv folder and rename it to
	  Compver.ini.
	
	7. Start the SMS_SITE_COMPONENT_MANAGER and SMS_EXECUTIVE services. The clients
	  can be updated after the Client Access Points (CAPs) and logon points have
	  been updated.
	
	NOTE: The default Client Configuration Installation Manager (CCIM) polling
	interval is 23 hours. Therefore, it may take up to 23 hours for the hotfixed
	files to be propagated to the clients. To speed up this process, you can stop
	and restart the SMS Client service on each client. You can also create a
	software distribution for one of the Resource Kit tools (Setevnt.exe or
	Cliutils.exe) along with the appropriate parameter(s) to start a CCIM work
	cycle. For information about the proper syntax to use with these tools, see the
	Resource Kit documentation.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbInventory 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
