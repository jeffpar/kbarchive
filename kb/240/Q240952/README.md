---
layout: page
title: "Q240952: Zone Err Msg: Zone Setup Failed to Copy Itself to..."
permalink: kb/240/Q240952/
---

## Q240952: Zone Err Msg: Zone Setup Failed to Copy Itself to...

	Article: Q240952
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbfile kbsetup igz kbimu msgamekbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to the Zone and the Zone attempts to download new software, you
	may receive the following error message
	
	  Your computer is trying to update your Zone files, but is receiving old
	  stored files from your ISP or network. Wait for your ISP or network to update
	  their files and try again later.
	
	When you click Details, the DownloadedVersion= line may be blank.
	
	When you click OK, you may receive the following error message:
	
	  Zone Setup failed to copy itself to <path>.
	
	where <path> is the path to the folder to which the Zone software is being
	installed.
	
	If you attempt to connect to the Zone a second time, you may receive only the
	second error message listed in the Symptoms section of this article.
	
	CAUSE
	=====
	
	This behavior can occur if the Zone Setup information on your hard disk is
	damaged.
	
	The Zone Setup information stored on your hard disk is used to download and
	install new Zone files.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented. After you complete each method, test to see if the issue is resolved.
	If the issue continues to occur, proceed to the next method.
	
	Restore the Setup Information Used to Install the Zone Files
	------------------------------------------------------------
	
	To restore the Setup information used to install the Zone files:
	
	1. Download the Zone_dat.exe file from the Microsoft Download Center and save it
	  to the Windows desktop.
	
	  The following file is available for download from the Microsoft Download
	  Center:
	
	  Zone_dat.exe
	  (http://download.microsoft.com/download/msngamezone/Utility/1/WIN98/EN-US/Zone_dat.exe)
	
	  Release Date: May-05-1999
	
	  For additional information about how to download Microsoft Support files,
	  click the following article number to view the article in the Microsoft
	  Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	  Microsoft scanned this file for viruses. Microsoft used the most current
	  virus-detection software that was available on the date that the file was
	  posted. The file is stored on secure servers that prevent any unauthorized
	  changes to the file.
	
	2. Double-click the Zone_dat.exe file you downloaded and saved on the Windows
	  desktop, click Yes, and then click OK.
	
	  NOTE: This program deletes the stored Setup information used to install the
	  Zone files.
	
	3. To restore the Setup information used to install the Zone files, connect to
	  the following Zone Web site:
	
	  http://zone.msn.com
	
	Remove and Reinstall the Zone
	-----------------------------
	
	To remove and reinstall the Zone:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Microsoft Zone.com, and then click
	  Add/Remove.
	
	4. Follow the instructions on the screen to remove the Zone.
	
	5. Connect to the following Zone Web site:
	
	  http://zone.msn.com
	
	  The first time you connect to the Zone Web site, the Zone automatically
	  installs the basic Zone software. Additional software is installed when you
	  visit game rooms and chat rooms.
	
	For additional information about how to remove and reinstall the Zone software,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q186161 Zone: How to Remove and Reinstall the Zone Software
	
	Additional query words: msngz igz installation installs
	
	======================================================================
	Keywords          : kberrmsg kbfile kbsetup igz kbimu msgame kbfaq
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
