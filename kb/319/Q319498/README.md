---
layout: page
title: "Q319498: Err Msg: Unable to Start or Register Saminfo1 Control Pack"
permalink: /kb/319/Q319498/
---

## Q319498: Err Msg: Unable to Start or Register Saminfo1 Control Pack

{% raw %}

	Article: Q319498
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the Small Business Server (SBS) console in Microsoft
	BackOffice Small Business Server 4.5, you may receive the following error
	message:
	
	  Unable to register or start the Saminfo1 control pack. Please make sure all
	  support packs are properly installed and registered.
	
	CAUSE
	=====
	
	This behavior may occur if some components of the SBS console are damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall the SBS console. The console reinstall option
	is designed to restore the functionality of Small Business Server by verifying
	and updating the necessary components and default settings. To reinstall the SBS
	console, follow these steps:
	
	1. Perform a backup of all files in the <drive>:\SmallBusiness folder,
	  where <drive> is the drive on which Windows is installed.
	
	2. Start Windows Explorer, browse to the <drive>:\SmallBusiness folder,
	  and then delete all files in the folder. Click Yes when you are prompted to
	  confirm the file deletion.
	
	3. Insert CD3 of the Small Business Server CD-ROM package into your computer's
	  CD-ROM or DVD-ROM drive.
	
	4. Click Start, and then click Run.
	
	5. In the Open box, type "cmd" (without the quotation marks), and then click OK.
	
	6. Type the following lines at the command prompt, pressing ENTER after each
	  line, where <CD-ROM drive> is the drive of your computer's CD-ROM or
	  DVD-ROM drive that contains Small Business Server CD3:
	
	  <CD-ROM drive>:
	  sbsadmin\i386\sbssetup.exe /reinstall
	
	NOTE: After you reinstall the console and restart your computer, you must
	re-create the Administrator profile. The Administrator profile must be present
	for the Microsoft Fax Service to send fax notifications.
	
	For additional information about how to do this, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q225101 Reinstalling the SBS 4.5 Console Deletes All MAPI Profiles from the
	  Server
	
	For additional information about how to reinstall the SBS console, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q226331 Reinstalling the Small Business Server Console
	
	NOTE: This article also provides an alternative method that you may want to use
	to restore the Administrator profile without having to follow the steps in
	Q225101.
	
	MORE INFORMATION
	================
	
	For more information about the SBS console, see the Microsoft BackOffice Small
	Business Server 4.5 Administrative Console white paper available at the
	following Microsoft Web site.
	
	NOTE: This white paper includes a list of all files, dynamic-link libraries
	(DLLs), wizards, and registry entries that are copied, modified, or replaced
	during the reinstallation of the SBS console.
	
	  http://www.microsoft.com/sbserver/techinfo/administration/45/ConsoleArch.asp
	  (http://www.microsoft.com/sbserver/techinfo/administration/45/ConsoleArch.asp)
	
	For additional information about how to troubleshoot console problems, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q222531 Troubleshooting SBS Console Problems
	
	For additional information about the installation points for programs and
	components included in the Small Business Server 4.5 CD-ROMs, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q236418 Installation Points for Programs in Small Business Server 4.5
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : :4.0,4.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
