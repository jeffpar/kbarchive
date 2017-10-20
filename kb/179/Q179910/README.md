---
layout: page
title: "Q179910: Encarta Err Msg: Qt32inst Caused a Divide Error in Qt32inst.exe"
permalink: /kb/179/Q179910/
---

## Q179910: Encarta Err Msg: Qt32inst Caused a Divide Error in Qt32inst.exe

{% raw %}

	Article: Q179910
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg kbmm kbsetup kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 98 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Encarta 98 Encyclopedia Deluxe Edition for Windows,
	you may receive an error message similar to the following:
	
	  Qt32inst caused a divide error in module Qt32inst.exe.
	
	If you click Close, Encarta 98 Setup continues. When you start Encarta 98,
	however, the Virtual Tours feature may not function properly.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall QuickTime. To do so, use the following steps:
	
	1. Restart the computer.
	
	2. Insert the Encarta 98 Deluxe Edition Disc 1 CD-ROM into the CD-ROM drive.
	  Press and hold down the SHIFT key when you insert the CD-ROM to prevent
	  Encarta 98 from starting automatically.
	
	3. Click Start, and then click Run.
	
	4. In the Open box, type the following line, and then click OK
	
	  <drive>:\AAmsstp\Qt32inst.exe
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	5. Follow the instructions on the screen to install QuickTime for Windows.
	
	If the issue continues to occur, remove Encarta 98, and then install Encarta 98
	without QuickTime. To install Encarta 98 without QuickTime, use the following
	steps:
	
	1. Insert the Encarta 98 Disc 1 CD-ROM into the CD-ROM drive. Press and hold
	  down the SHIFT key when you insert the CD-ROM to prevent Encarta 98 from
	  starting automatically.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. On the Install/Uninstall tab, click Microsoft Encarta 98 Encyclopedia, and
	  then click Add/Remove.
	
	5. Follow the instructions on the screen to remove Encarta 98. If you are
	  prompted to restart the computer, do so.
	
	6. Click Start, and then click Run.
	
	7. In the Open box, type the following line, and then click OK
	
	  <drive>:\setup /noqt
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	8. Follow the instructions on the screen to install Encarta 98.
	
	NOTE: You cannot use the Virtual Tours feature of Encarta 98 when you install
	Encarta 98 without QuickTime.
	
	MORE INFORMATION
	================
	
	QuickTime is manufactured by Apple Computer Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	For information about how to contact Apple Computer Corporation, query in the
	Knowledge Base for the following article:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	
	Additional query words: 98 multimedia mmtitles qt quick time
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg kbmm kbsetup kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1998
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
