---
layout: page
title: "Q287990: SMS: Large .tmp File Created When You Install SMS Client"
permalink: kb/287/Q287990/
---

## Q287990: SMS: Large .tmp File Created When You Install SMS Client

	Article: Q287990
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsetup kbClient kbsms200 kbUpgrade kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install or upgrade a client computer that is running Systems Management
	Server (SMS) 2.0, a large temporary (.tmp) file may be created in the
	<Windows_folder>\MS\SMS\Core\Bin folder on the client. Typically, this
	file is named ~GLH000*.tmp. When this issue occurs, Clicore.exe may use 90
	percent or more of the client's central processing unit (CPU) resources. The
	.tmp file grows until the client runs out of hard disk space, and an error is
	displayed that states that the client installation failed and to contact your
	administrator.
	
	CAUSE
	=====
	
	This issue can occur if the Clicore.exe file on the site server, client access
	point (CAP), or the logon point is corrupted. Clicore.exe may be corrupted if
	any of the following symptoms exist:
	
	- Clicore.exe has a different time/date stamp from the Clicore.exe file in the
	  SMS 2.0 source.
	
	- Clicore.exe is a different size from the Clicore.exe file in the SMS 2.0
	  source.
	
	- If you run clicore.exe /x from a command prompt, a list of client
	  installation files that are contained in clicore.exe that are available for
	  extraction is not displayed.
	
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
	
	The English-language version of this fix for SMS Service Pack 3 (SP3) sites
	should have the following file attributes or later:
	
	    Date        Time     Version       Size     File name      Platform
	  --------------------------------------------------------------------
	
	 31-Jan-2002   07:03                  252,650   Q287990.E       Intel
	 01-Mar-2001   05:25  2.00.1493.3229  253,712   Ccm.dll         Alpha
	 01-Mar-2001   05:25  2.00.1493.3229  158,608   Ccm.dll         Intel
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	Installing the Hotfix
	---------------------
	
	Install this hotfix on all SMS primary and secondary sites. To install the
	hotfix, use the appropriate method on the SMS site server.
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: You can use this method only on I386-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q287990.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Use an account that has administrative privileges to log on to your site
	  server.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run Q287990.exe and follow the instructions in the wizard. Complete any
	  necessary manual installation steps.
	
	Manual Installation
	-------------------
	
	1. Quit the SMS Administrator console and stop all SMS services.
	
	2. Replace the Ccm.dll file in the <Sms_root_folder>\Bin\<Platform>
	  folder with the version from the hotfix.
	
	3. Restart the SMS services.
	
	WORKAROUND
	==========
	
	To work around this issue, use the Clicore.exe file from the appropriate SMS 2.0
	source (verify the correct service pack level) to replace the corrupted
	Clicore.exe file on the logon point, CAP, and the site server.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	the Systems Management Server 2.0 Service Pack 4 Hotfix Rollup Package (HRP).
	
	For additional information about the SMS 2.0 SP4 HRP, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 SP4 HRP
	
	MORE INFORMATION
	================
	
	In some situations, you may need to remove Clicore.exe from the client as well.
	When you install or upgrade the client, the version of Clicore.exe on the client
	(<Windows_folder>\MS\SMS\Core\Bin\Clicore.exe) is compared to the
	Clicore.exe file on the logon point or CAP. If the two files match, Clicore.exe
	is not copied to the client. Therefore, the corrupted Clicore.exe file that was
	previously copied to the client is rerun. To prevent the previous copy of
	Clicore from being rerun, run smsman.exe /u or the 20clicln.bat file that is
	included in SMS 2.0 Support Tools to remove the SMS 2.0-based client.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbClient kbsms200 kbUpgrade kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
