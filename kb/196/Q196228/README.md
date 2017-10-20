---
layout: page
title: "Q196228: SMS: Getdisk.exe Does Not Detect CD-ROM on Windows 95 Clients"
permalink: /kb/196/Q196228/
---

## Q196228: SMS: Getdisk.exe Does Not Detect CD-ROM on Windows 95 Clients

{% raw %}

	Article: Q196228
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbInventory
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server hardware inventory fails to detect CD-ROM drives on
	client computers running Microsoft Windows 95 or Windows 98.
	
	This problem occurs after Systems Management Server 1.2 Service Pack 4 has been
	applied.
	
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
	
	  Date       Time               Size      File name    Platform
	  -------------------------------------------------------------
	
	  5/11/99   9:04am            118,960   95Getdsk.exe   x86
	  5/11/99   9:05am             80,652     Invdos.exe   x86
	  5/11/99   9:06am             58,068    Getdisk.exe   x86
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the original Systems Management Server 1.2
	version of Getdisk.exe. To do this, perform the following steps:
	
	1. Retrieve Getdisk.ex_ from the Systems Management Server 1.2 compact disc and
	  rename the file to Getdisk.exe (it is not compressed).
	
	2. Copy Getdisk.exe to the Sms\Site.srv\Maincfg.box\Client.src\X86.bin directory
	  on the computer running Systems Management Server. Getdisk.exe will be
	  replicated to your logon servers from this directory.
	
	3. To update the clients, either manually run Upgrade.bat on each client or
	  follow the instructions in the following article in the Microsoft Knowledge
	  Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 Service Pack 4.
	
	MORE INFORMATION
	================
	
	To install the fix, perform the following steps on the site server:
	
	1. Replace the Getdisk.exe, 95Getdsk.exe, and Invdos.exe files in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\X86.bin directory with the
	  versions obtained from the hotfix.
	
	2. Update the System.map file to ensure that the 95Getdsk.exe file is copied to
	  your clients. Note that this should be done after the updated files have been
	  copied to the Systems Management Server site server.
	
	  WARNING: This method involves making changes to the System.map file. Editing
	  the System.map file incorrectly can damage your site installation, and should
	  only be done according to this specific procedure or at the direction of
	  Systems Management Server Support.
	
	  To update the System.map file, perform the following steps:
	
	  a. Use a text editor such as Notepad to open the System.map file and search
	     for Getdisk.exe.
	
	  b. Do a copy and a paste of the complete Getdisk.exe section. This should
	     produce two identical Getdisk.exe sections.
	
	  c. Replace all references to GETDISK with 95GETDSK for the second section of
	     Getdisk.exe. Also, change the size to 118960.
	
	  d. Save the file and close the text editor. When you are done, the System.map
	     entry should look like the following:
	
	        "GETDISK.EXE", SIZE(1, 16548, 16548),  "GETDISK.EXE",
	        "GETDISK.EX_", REMOTE=YES,   COPYLISTS("WIN95:STANDARD" = "SMS",
	        "WIN16:STANDARD" = "SMS", "DOS:STANDARD" = "SMS"), COMPRESS=NO,
	        FLAGS = 5
	
	        "95GETDSK.EXE", SIZE(1, 118960, 118960),  "95GETDSK.EXE",
	        "95GETDSK.EX_", REMOTE=YES,   COPYLISTS("WIN95:STANDARD" = "SMS",
	        "WIN16:STANDARD" = "SMS", "DOS:STANDARD" = "SMS"), COMPRESS=NO,
	        FLAGS = 5
	
	
	3. The files will be replicated at the next Maintenance Manager work cycle to
	  all Systems Management Server logon servers to the SMS\Logon.srv\X86.bin
	  directory. When that occurs, you can update the clients.
	
	  To update the clients, either manually run Upgrade.bat on each client or
	  follow the instructions in the following article in the Microsoft Knowledge
	  Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Additional query words: prodsms sp sp4 cdrom
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbInventory 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
