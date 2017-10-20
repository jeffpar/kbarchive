---
layout: page
title: "Q254532: SMS 1.2 Support Fixes for Windows 2000"
permalink: /kb/254/Q254532/
---

## Q254532: SMS 1.2 Support Fixes for Windows 2000

{% raw %}

	Article: Q254532
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbsms120 kbsms120bug kbHelpDesk kbInventory kbPCM kbPackage kbbpqfe1
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Systems Management Server 1.2 Service Pack 4 (SP4) includes limited
	support for Windows 2000. However, additional compatibility fixes are required
	in Systems Management Server 1.2 SP4 to support Windows 2000 Professional.
	
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
	
	  Date      Time   Version      Size    File name           Platform
	  ------------------------------------------------------------------
	   5/10/00   5:47pm   247,217  Hotfix.map   
	   6/11/98   2:33pm   110,256  Mergemap.exe        Intel
	   6/11/98   2:35pm   330,000  Mergemap_alpha.exe  Alpha
	   6/03/96   6:49pm   117,008  Sendcode.exe        Intel
	   7/23/96   4:40pm   499,472  Sendcode_alpha.exe  Alpha
	   2/02/00   9:35pm       317  Shutdown.ct1
	   6/25/99   4:00am    44,576  Check20.exe         Intel
	   5/05/00   7:48pm   367,440  Clicfg.exe          Intel
	   1/19/00   5:43pm   282,592  Inv32cli.exe        Intel
	   1/19/00   5:44pm   111,072  Invproc.dll         Intel
	   1/19/00   5:43pm   295,344  Invwin32.exe        Intel
	   9/15/99   8:16pm     2,144  Kbs-kbd.inf         Intel
	   9/15/99   7:37pm     2,120  Kbs-mou.inf         Intel
	   1/03/00   5:41pm     5,854  Kbstuf5i.cat        Intel
	   1/03/00   5:37pm       365  Kbstuf5i.cdf        Intel
	   9/15/99   9:11pm     5,150  Kbstuff5.sys        Intel
	   3/23/00   3:26pm   333,008  Sightnt.dll         Intel
	  11/09/99  12:53am   208,320  Smsrcins.exe        Intel
	   2/04/00   9:31pm     2,337  W2000pro.pdf        Intel
	   2/08/00   3:06pm    96,794  W9xtow2k.exe        Intel
	   2/04/00   9:06pm    17,200  Wbeminv.dll         Intel
	   5/05/00   7:49pm   917,264  Clicfg.exe          Alpha
	   1/19/00   5:45pm   865,552  Inv32cli.exe        Alpha
	   1/19/00   5:46pm   227,600  Invproc.dll         Alpha
	   1/19/00   5:45pm   881,936  Invwin32.exe        Alpha
	   3/23/00   3:27pm   649,488  Sightnt.dll         Alpha
	  11/09/99  12:53am   359,184  Smsrcins.exe        Alpha
	   2/04/00   9:08pm    29,456  Wbeminv.dll         Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	For more information about using Systems Management Server 1.2 with Windows
	2000, please download the SMS_Win2k.doc file from the following Microsoft Web
	site:
	
	  http://www.microsoft.com/smsmgmt/zipdocs/sms_win2k.exe
	
	To install the hotfix, use the appropriate method.
	
	NOTE: This hotfix involves updating the System.map file. All clients go through a
	"mini-upgrade" the next time they run the SMS logon script.
	
	Method 1: Using the Hotfix Installer
	------------------------------------
	
	NOTE: This method is only for Intel-based computers.
	
	1. Create a folder in a location that is accessible to your Systems Management
	  Server site server(s).
	
	2. Copy the update program file (along with the required support files
	  Hotfix.map, Sendcode.exe, Mergemap.exe, and Shutdown.ct1) and platform
	  folders to the new folder. The folder structure must be such that the program
	  file and support files are located one folder above the platform folders.
	
	3. From each of the primary and secondary Systems Management Server site servers
	  in your environment, log on to your site server by using an account with
	  administrative privileges.
	
	4. Quit the Systems Management Server Administrator console, where applicable.
	
	5. Run Q254532.exe and follow the directions in the wizard.
	
	Method 2: Manual Installation
	-----------------------------
	
	1. Create a folder in a location that is accessible to your Systems Management
	  Server site server(s).
	
	2. Copy the Hotfix.map, Sendcode.exe, Sendcode_alpha.exe, Mergemap.exe, and
	  Mergemap_alpha.exe files, and the platform folders, to the new folder. For
	  simplicity, the folder structure should be such that the support files are
	  located one folder above the platform folders.
	
	3. From each of the primary and secondary Systems Management Server site servers
	  in your environment, log on to your site server by using an account with
	  administrative privileges.
	
	4. Quit the Systems Management Server Administrator console, where applicable.
	
	5. Perform a site shutdown. You can do this by clicking Shutdown Site from the
	  Operations option in Maintenance-mode Setup (that is, by running Systems
	  Management Server Setup from the Systems Management Server program group).
	  You can also use the supplied Sendcode program to shut down the site. Using
	  the appropriate platform version, (that is, Sendcode.exe for the Intel
	  platform or Sendcode_alpha.exe for the Alpha platform), run the following
	  command from a command prompt from the folder where the support files are
	  located:
	
	  sendcode.exe/sendcode_alpha.exe sms_site_config_manager 234
	
	6. Apply the updated files:
	
	  a. Replace the
	     <Sms_root_folder>\Site.srv\Maincfg.box\Client.src\Check20.exe file
	     with the hotfixed version.
	
	  b. Replace the
	     <Sms_root_folder>\Site.srv\<Platform>.bin\Clicfg.exe file with
	     the hotfixed version.
	
	  c. Replace the
	     <Sms_root_folder>\Site.srv\<Platform>.bin\Invproc.dll file
	     with the hotfixed version.
	
	  d. Replace the
	     <Sms_root_folder>\Site.srv\<Platform>.bin\Invwin32.exe file
	     with the hotfixed version.
	
	  e. Replace the
	     <Sms_root_folder>\Site.srv\<Platform>.bin\Sightnt.dll file
	     with the hotfixed version.
	
	  f. Replace the
	     <Sms_root_folder>\Site.srv\<Platform>.bin\Wbeminv.dll file
	     with the hotfixed version.
	
	  g. Replace the
	     <Sms_root_folder>\Site.srv\Maincfg.box\Client.src\<Platform>.bin\Inv32cli.exe
	     file with the hotfixed version.
	
	  h. Replace the
	     <Sms_root_folder>\Site.srv\Maincfg.box\Client.src\<Platform>.bin\Invwin32.exe
	     file with the hotfixed version.
	
	  i. Replace the
	     <Sms_root_folder>\Site.srv\Maincfg.box\Client.src\<Platform>.bin\Wbeminv.dll
	     file with the hotfixed version.
	
	  j. Replace the
	     <Sms_root_folder>\Site.srv\Maincfg.box\Client.src\X86.bin\Smsrcins.exe
	     file with the hotfixed version.
	
	  k. Replace the
	     <Sms_root_folder>\Site.srv\Maincfg.box\Client.src\X86.bin\Kbs-kbd.inf
	     file with the hotfixed version.
	
	  l. Replace the
	     <Sms_root_folder>\Site.srv\Maincfg.box\Client.src\X86.bin\Kbs-mou.inf
	     file with the hotfixed version.
	
	  m. Replace the
	     <Sms_root_folder>\Site.srv\Maincfg.box\Client.src\X86.bin\Kbstuf5i.cat
	     file with the hotfixed version.
	
	  n. Replace the
	     <Sms_root_folder>\Site.srv\Maincfg.box\Client.src\X86.bin\Kbstuf5i.cdf
	     file with the hotfixed version.
	
	  o. Replace the
	     <Sms_root_folder>\Site.srv\Maincfg.box\Client.src\X86.bin\Kbstuff5.sys
	     file with the hotfixed version.
	
	  p. Replace the
	     <Sms_root_folder>\Site.srv\Maincfg.box\Mstest\W9xtow2k.exe file with
	     the hotfixed version.
	
	  q. Replace the
	     <Sms_root_folder>\Primsite.srv\Import.src\Enu\W2000pro.pdf file with
	     the hotfixed version.
	
	7. Update the System.map file by using the supplied Mergemap program and
	  Hotfix.map file. Using the appropriate platform version of Mergemap, (that
	  is, Mergemap.exe for the Intel platform or Mergemap_alpha.exe for the Alpha
	  platform) run the following command from a command prompt from the folder
	  where the support files are located:
	
	  mergemap.exe/mergemap_alpha.exe <sms_root_folder>\System.map hotfix.map
	
	8. Perform a site reset. You can do this by clicking Reset Site from the
	  Operations option in Maintenance-mode Setup. You can also use the supplied
	  Sendcode program to reset the site. First, restart the
	  SMS_Site_Config_Manager service on the Systems Management Server site server.
	  Then, using the appropriate platform version (that is, Sendcode.exe for the
	  Intel platform or Sendcode_alpha.exe for the Alpha platform), run the
	  following command from a command prompt from the folder where the support
	  files are located:
	
	  sendcode.exe/sendcode_alpha.exe sms_site_config_manager 194
	
	Additional query words: prodsms w2k support 2000 WIN2K QFE wincompat
	
	======================================================================
	Keywords          : kbinterop kbClient kbsms120 kbsms120bug kbHelpDesk kbInventory kbPCM kbPackage kbbpqfe1a 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
