---
layout: page
title: "Q245816: SMS: Screen Saver Disabled After Applying the Hotfix for Q193269"
permalink: /kb/245/Q245816/
---

## Q245816: SMS: Screen Saver Disabled After Applying the Hotfix for Q193269

{% raw %}

	Article: Q245816
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply the hotfix that is described in the following Microsoft
	Knowledge Base article, the screen saver on clients running Microsoft Windows 95
	or Microsoft Windows 98 may not start:
	
	  Q193269 SMS: Remote Control to Win9x Clients Fails w/Winsock2, Using IP
	
	This problem occurs only if you start Wuser9x.exe and then quit it by using the
	Close button (X) in the Remote Control Status dialog box.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time     Size    File name    Platform
	  ------------------------------------------------
	  04/14/99  10:24pm  202,476 Cli_dos.exe  Intel
	  07/12/99  08:25pm   12,288 Coexst9x.dll Intel
	  03/23/00  07:09pm  293,979 Idisp9x.dll  Intel
	  03/23/00  07:25pm    8,464 Idispthk.dll Intel
	  03/23/00  07:09pm  127,804 Imp9x.dll    Intel
	  03/23/00  07:09pm  149,636 Loc16vc0.dll Intel
	  06/11/98  02:33pm  110,256 Mergemap.exe Intel
	  03/23/00  07:25pm   84,112 Multpr9x.dll Intel
	  03/23/00  07:25pm   38,320 Queue9x.dll  Intel
	  06/03/96  06:49am  117,008 Sendcode.exe Intel
	  06/26/98  05:29pm      317 Shutdown.ctl 
	  03/23/00  07:10pm    8,024 Vuser9x.vxd  Intel
	  03/23/00  07:09pm   63,344 Woudat9x.dll Intel
	  04/11/00  07:46pm  266,208 Wuser9x.exe  Intel
	  03/23/00  07:09pm   15,768 _Idisp9x.dll Intel
	  03/23/00  07:25pm   91,584 _Wuser9x.dll Intel
	  04/28/99  05:50pm    3,525 Cl_w95.mod   Intel
	  05/11/00  05:27pm  248,057 Hotfix.map
	  03/23/00  03:26pm  333,008 Sightnt.dll  Intel
	  03/23/00  07:24pm   36,800 Wumsg9x.dll  Intel
	
	  06/11/98  02:35pm  330,000 Mergemap.exe Alpha
	  07/23/96  04:40am  499,472 Sendcode.exe Alpha
	  03/23/00  03:27pm  649,488 Sightnt.dll  Alpha   
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, quit Wuser9x.exe by using the following command:
	
	  wuser9x.exe /x
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the appropriate method.
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: This method is only for Intel-based Systems Management Server (SMS) site
	server computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q245816.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. Run Q245816.exe and follow the instructions in the wizard.
	
	Manual Installation
	-------------------
	
	For a manual installation, you must:
	
	- Stop the SMS site services.
	
	- Copy the Windows 95/Windows 98 remote control files to the site server.
	
	- Modify the System.map file to support the new files.
	
	- Restart the SMS site services, and allow the site to propagate the changes to
	  the rest of the site.
	
	- Upgrade the clients.
	
	To do this, follow these steps:
	
	1. Stop the SMS_EXECUTIVE, SMS_SITE_CONFIG_MANAGER, and SMS_HIERARCHY_MANAGER
	  SMS server services on the site server.
	
	2. Copy the following files to your site server's
	  Sms\Site.srv\Maincfg.box\Client.src\X86.bin folder:
	
	  Cli_dos.exe
	  Coexst9x.dll
	  Idisp9x.dll
	  Idispthk.dll
	  Imp9x.dll
	  Loc16vc0.dll
	  Multpr9x.dll
	  Queue9x.dll
	  Vuser9x.vxd
	  Woudat9x.dll
	  Wuser9x.exe
	
	3. Copy the following files to your site server's
	  Sms\Site.srv\Maincfg.box\Client.src\X86.bin\<Language> folder:
	
	  Cl_w95.mod
	  Wumsg9x.dll
	  _Idisp9x.dll
	  _Wuser9x.dll
	
	4. Copy the following file to your site server's Sms\Site.srv\<Platform>
	  folder:
	
	  Sightnt.dll
	
	5. Make a backup copy of the current System.map file.
	
	6. You must remove 16-bit Wuser support for Windows 95/Windows 98. To do this,
	  scan the System.map file looking for the Wuser.exe entry in the section
	  titled:
	
	  DIRECTORY "SITE.SRV\MAINCFG.BOX\CLIENT.SRC\X86.BIN" PLATFORM "INTEL X86"
	  LANGUAGE "" SOURCE "X86\INTNL" FLAGS = 10 UNIT = "INTEL CLIENT"
	
	7. Remove Wuser.exe from the WIN95 CopyList entry. To do this, locate the line
	  for Wuser.exe. Change the following line from
	
	  REMOTE=YES, COPYLISTS("WIN16:REMOTE_CONTROL" = "SMS", "WIN95:REMOTE_CONTROL"
	  = "SMS"), COMPRESS=NO, FLAGS = 5
	
	to:
	
	  REMOTE=YES, COPYLISTS("WIN16:REMOTE_CONTROL" = "SMS"), COMPRESS=NO, FLAGS = 5
	
	8. Remove Vuser.386 from the WIN95 CopyList entry. To do this, locate the line
	  for Vuser.386. Change the following line from
	
	  REMOTE=YES, COPYLISTS("WIN16:REMOTE_CONTROL_386" = "WINDIR",
	  "WIN95:REMOTE_CONTROL_386" = "WINDIR"), COMPRESS=NO, FLAGS = 1
	
	to:
	
	  REMOTE=YES, COPYLISTS("WIN16:REMOTE_CONTROL_386" = "WINDIR"), COMPRESS=NO,
	  FLAGS = 1
	
	9. You must remove 16-bit Wuser support for Windows 95/98. To do this, scan the
	  System.map file, looking for the _wuser.dll entry in the section titled:
	
	  DIRECTORY "SITE.SRV\MAINCFG.BOX\CLIENT.SRC\X86.BIN\00000409" PLATFORM "INTEL
	  X86" LANGUAGE "ENGLISH" SOURCE "X86\ENGLISH" FLAGS = 10 UNIT = "INTEL CLIENT"
	
	10. Remove _wuser.dll from the WIN95 CopyList entry. To do this, locate the line
	  for _wuser.dll. Change the following line from
	
	  REMOTE=YES, COPYLISTS("WIN16:REMOTE_CONTROL" = "SMS", "WIN95:REMOTE_CONTROL"
	  = "SMS"), COMPRESS=NO, FLAGS = 5
	
	to:
	
	  REMOTE=YES, COPYLISTS("WIN16:REMOTE_CONTROL" = "SMS"), COMPRESS=NO, FLAGS = 5
	
	11. Merge the new additions that are located in the enclosed Hotfix.map file.
	  The headers for each section in the Hotfix.map file are included for
	  reference, but you only need to merge the new lines into the appropriate
	  matching section in the System.map file.
	
	  NOTE: Pay attention to these headers because some may look similar but are
	  not the same. Look for Wuser.exe on an Intel platform and Wusermsg.dll for
	  the same platform, and then merge into those areas.
	
	12. Restart the SMS services on the site server.
	
	13. Wait for the copylist files to be upgraded from the System.map file. This
	  should take about 10 minutes on an average site.
	
	14. Run Runsms, Smsls, or Upgrade to install or upgrade the Windows 95/Windows
	  98 client.
	
	Additional query words: prodsms winsock
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
