---
layout: page
title: "Q233504: MP2000 Err Msg: Acmsetup.exe Caused an Invalid Page Fault..."
permalink: /kb/233/Q233504/
---

## Q233504: MP2000 Err Msg: Acmsetup.exe Caused an Invalid Page Fault...

	Article: Q233504
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets and Trips 2000 
	- Microsoft MapPoint 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install either of the programs listed at the beginning of
	this article, you may receive the following error message:
	
	  Acmsetup.exe caused an invalid page fault in module Unknown.
	
	NOTE: You receive this error message during the Microsoft Data Access Components
	phase of Setup.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Connect to the following Microsoft Web site:
	
	  http://www.microsoft.com/msdownload/uda/mdac21/mdac_typ21.asp
	
	2. Click the link to the Mdac_typ.exe file.
	
	3. Click "Save this program to disk," and then click OK.
	
	4. Click Save.
	
	5. When the download process is finished, click Close.
	
	6. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	7. Type each of the following commands, pressing ENTER after you type each line
	
	  cd\<windows>\desktop
	  mdac_typ.exe /c /t:c:\mdactemp
	  exit
	
	  where <windows> is the folder in which Microsoft Windows is installed.
	
	8. Click Start, and then click Shut Down.
	
	9. Click "Restart in MS-DOS Mode," and then click OK.
	
	10. At the MS-DOS prompt, type each of the following commands, pressing ENTER
	  after you type each line
	
	  cd c:\mdactemp
	  copy *.dll c:\<windows>\system
	
	  where <windows> is the folder in which Windows is installed.
	
	  NOTE: If you are prompted to overwrite existing files, click "Yes to All."
	
	11. Restart the computer.
	
	12. Double-click the Mdac_typ.exe file on the desktop, and then follow the
	  instructions on the screen to install Microsoft Data Access 2.1.
	
	Additional query words: mp2000 est2000 installation crashes
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbMapptSearch kbMapPoint2000 kbExpediaStreets2000
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
