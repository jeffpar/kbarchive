---
layout: page
title: "Q178049: Encarta 98 Err Msg: Error Registering the OCX..."
permalink: /kb/178/Q178049/
---

## Q178049: Encarta 98 Err Msg: Error Registering the OCX...

	Article: Q178049
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg kbsetup kburl kbimukbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 98 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Encarta 98 Encyclopedia for Windows, when
	the progress bar reaches 21 or 22 percent, you may receive the following error
	message:
	
	  Error registering the OCX
	  C:\Windows\System\Macromed\Director\Ie32dsw.ocx.
	
	If you click OK, the Encarta installation process finishes normally. However,
	when you attempt to start Encarta 98, the introductory animation does not play,
	and you may experience any of the following symptoms:
	
	- You may receive one of the following error messages:
	
	      - The ShockWave animation player is missing some components. Please
	     reinstall Encarta from your CD-ROM.
	
	      - This program has caused an illegal operation and will be shut down.
	
	- You may receive an "Installing Macromedia Shockwave..." message in the lower
	  right corner of the screen, with the Macromedia logo, the words "Macromedia
	  Shockwave", and a link to the Macromedia Shockwave Web site in the lower left
	  corner of the screen.
	
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true:
	
	- Macromedia Director is not installed correctly.
	- One of the Microsoft Libraries files is missing, damaged, or the wrong
	  version.
	
	Encarta 98 uses Macromedia Director to display animations and InterActivities.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods:
	
	Install the Windows Library Update
	----------------------------------
	
	To resolve this issue, download and install the Windows Libraries Update. To do
	this:
	
	1. Visit the following Microsoft Web site:
	
	  http://www.microsoft.com/downloads/search.asp?
	
	2. In the Search By area, click Keywords.
	
	3. In the Keywords box, type "libraries update" (without the quotation marks).
	
	4. In the Operating System box, click the appropriate operating system, and then
	  click Find It.
	
	5. Click the link that is returned, and then follow the instructions on the
	  screen to install the Microsoft Libraries Update.
	
	6. When you are prompted to restart the computer, do so.
	
	The Microsoft Libraries Update resolves an issue that can cause some third-party
	software to behave unexpectedly after the installation of Microsoft Works Suite
	99, Microsoft Encarta Encyclopedia 99 (US only), Microsoft Encarta Virtual Globe
	99, Microsoft Graphics Studio Greetings 99, or other third-party software.
	Impacted programs include America Online (AOL) version 4.0 and HyperTerminal.
	
	For additional information about the Microsoft Libraries Update, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q197298 INFO: Microsoft Libraries Update: What, Where, Why
	
	
	If the issue continues to occur, proceed to the next method.
	
	Remove and Reinstall Shockwave Director
	---------------------------------------
	
	To remove and reinstall Shockwave Director:
	
	1. Click Start, point to Settings, then click Control Panel.
	
	2. Double-click Internet or Internet Options.
	
	3. Empty your History folder. To do this, use the appropriate method for your
	  version of Microsoft Internet Explorer.
	
	  Internet Explorer 4.x or later:
	
	  On the General tab, click Clear History, and then click Yes or OK.
	
	  Internet Explorer 3.x:
	
	  On the Navigation tab (Internet Explorer 3.x), click Clear History, and then
	  click Yes.
	
	4. Clear your Internet cache. To do this, use the appropriate method for your
	  version of Internet Explorer.
	
	  Internet Explorer 4.x or later:
	
	  Under Temporary Internet Files on the General tab, click Delete Files, and
	  then click OK.
	
	  Internet Explorer 3.x:
	
	  On the Advanced tab, click Settings. Under Temporary Internet Files, click
	  Empty Folder, and then click Yes.
	
	5. Click OK until you return to Control Panel, and then close Control Panel.
	
	6. Click Start, and then click Run.
	
	7. In the Open box, type "cookies" (without the quotation marks), and then click
	  OK.
	
	8. On the Edit menu, click Select All.
	
	9. On the File menu, click Delete. When you are prompted to confirm the
	  deletion, click Yes.
	
	10. Click Start, and then click Run.
	
	11. If you are using Microsoft Windows 98, in the Open box, type "downloaded
	  program files" (including the quotation marks), and then click OK.
	
	  If you are using any other version of Microsoft Windows, in the Open box,
	  type "occache" (without the quotation marks), and then click OK.
	
	12. On the Edit menu, click Select All.
	
	13. On the File menu, click Remove Program File. When you are prompted to
	  confirm the deletion, click Yes.
	
	14. Insert the Encarta 98 Disc 1 CD-ROM into the CD-ROM drive. Press and hold
	  down the SHIFT key when you insert the CD-ROM to prevent Encarta 98 from
	  starting automatically.
	
	15. Click Start, and then click Run.
	
	16. In the Open box, type the following line and then click OK
	
	  <drive>:\aamsstp
	
	  where <drive> is the letter of the CD-ROM drive.
	
	17. Double-click the Axdist.exe file.
	
	18. Double-click the Swiex6.exe file.
	
	19. Close all open windows.
	
	If the issue continues to occur, proceed to the next section.
	
	Remove and Reinstall Encarta 98 Encyclopedia
	--------------------------------------------
	
	To remove and reinstall Encarta 98 Encyclopedia:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Microsoft Encarta 98 Encyclopedia, and
	  then click Add/Remove.
	
	4. Click Automatic, click Next, and then click Finish.
	
	5. When you are prompted to remove shared files, click Yes.
	
	6. Click OK until you return to Control Panel, and then close Control Panel.
	
	7. Delete the folder in which Encarta 98 is installed. By default, Encarta 98 is
	  installed in the following folder:
	
	  C:\Program Files\Microsoft Reference\Encarta Encyclopedia
	
	  For information about how to delete folders, click Start, and then click Help.
	  On the Index tab, type "deleting" (without the quotation marks), and then
	  double-click the "Deleting files or folders" topic.
	
	8. Reinstall Encarta 98 Encyclopedia.
	
	Additional query words: 98 3.02 multi media multimedia multi-media mmtitles 21% 22% mm
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg kbsetup kburl kbimu kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1998
	Version           : WINDOWS:
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
