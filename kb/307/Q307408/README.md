---
layout: page
title: "Q307408: Err Msg: Lrun32 Caused Exception 10H in Module Lrun32.exe"
permalink: kb/307/Q307408/
---

## Q307408: Err Msg: Lrun32 Caused Exception 10H in Module Lrun32.exe

	Article: Q307408
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	WARNING:This information is preliminary and has not been confirmed or tested by Microsoft. Use only with discretion.
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Office 2000 Step By Step Interactive ISBN 0-7356-0506-8 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Office 2000 Step By Step Interactive, you may receive
	the following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	When you click Details, you receive a message similar to the following:
	
	  LRUN32 caused an exception 10H in module LRUN32.EXE.
	
	CAUSE
	=====
	
	This behavior can occur if Macromedia Shockwave Player is outdated or damaged.
	Macromedia Flash Player, which is included in Macromedia Shockwave Player, is
	required for the tutorials in Office 2000 Step by Step Interactive to function
	correctly.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the Shockwave objects from the Downloaded Program
	Files folder on your computer's hard disk, remove Office 2000 Step by Step
	Interactive, install the latest version of Macromedia Shockwave Player, and then
	reinstall Office 2000 Step by Step Interactive. To do this, follow these steps:
	
	1. Start Windows Explorer, and then browse to the Downloaded Program Files
	  folder on your hard disk.
	
	  In Microsoft Windows 98, Windows 98 Second Edition (SE), or Microsoft Windows
	  Millennium Edition (Me), the Downloaded Program Files folder is in the
	  <C>:\Windows folder.
	
	  In Microsoft Windows NT 4.0 and Microsoft Windows 2000, the Downloaded Program
	  Files folder is located in the <C>:\Winnt folder.
	
	  NOTE: <C> is the drive on which Windows is installed.
	
	2. In the Downloaded Program Files folder, locate the Shockwave Player control
	  object or objects (for example, Shockwave Flash Object and Shockwave ActiveX
	  Control).
	
	3. Right-click each object that is found, and then click Remove.
	
	  Click Yes when you are prompted to remove the file.
	
	4. Quit Windows Explorer.
	
	5. Click Start, point to Settings, and then click Control Panel.
	
	6. Double-click Add/Remove Programs.
	
	7. Click "Microsoft Office 2000 Step by Step Interactive", and then click
	  Change/Remove (if you are running Microsoft Windows 98, Window 98 SE, Windows
	  Me, or Windows NT 4.0), or click Add/Remove (if you are running Windows
	  2000).
	
	  Click OK when you are prompted to remove the program.
	
	8. Start Microsoft Internet Explorer, and then connect to the following
	  Macromedia Web site:
	
	  http://sdc.shockwave.com/shockwave/download/frameset.fhtml?
	
	9. Click Install Now to install the latest version of Macromedia Shockwave
	  Player.
	
	10. When the Shockwave Player installation is complete, quit Internet Explorer.
	
	11. Insert your Office 2000 Step by Step Interactive CD-ROM into your computer's
	  CD-ROM or DVD-ROM drive.
	
	12. Run Setup to reinstall Office 2000 Step by Step Interactive.
	
	MORE INFORMATION
	================
	
	For additional information about Microsoft Office 2000 Step by Step Interactive,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q235243 Microsoft Office 2000 Step By Step Interactive Comments and
	  Corrections
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
