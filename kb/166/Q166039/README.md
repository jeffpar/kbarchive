---
layout: page
title: "Q166039: Kids Plus!: Protect It! MS-DOS Applications Won't Start"
permalink: kb/166/Q166039/
---

## Q166039: Kids Plus!: Protect It! MS-DOS Applications Won't Start

	Article: Q166039
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbusagekbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Kids, version 1.0 
	-------------------------------------------------------------------------------
	
	NOTE: The workaround outlined in this article may not work with some
	MS-DOS based applications. If a customized .pif has been created, the
	corresponding MS-DOS based application may have problems starting.
	
	SYMPTOMS
	========
	
	When you use Microsoft Plus! For Kids Protect It!, MS-DOS based applications may
	not run when Protect It! restrictions are turned on.
	
	CAUSE
	=====
	
	MS-DOS based applications commonly install a .pif file on the Windows desktop
	that acts as a link to the programs executable file (.exe). Though Protect It!
	recognizes the .pif and will resolve it to an .exe in the Allowed Programs list,
	.pif files will not launch with Protect It! restrictions turned on.
	
	WORKAROUND
	==========
	
	
	To work around this problem, do the following:
	
	1. Drag a copy of the MS-DOS based application's .exe to the Windows desktop.
	  (The icon must be on the Desktop for this workaround to function properly.)
	
	2. Using your right mouse button, click on the new .exe icon, and then click
	  Properties.
	
	3. From the Program tab, set the Working Directory to the folder where the
	  application is installed. (E.g. C:\flightsim)
	
	4. A second, default .pif icon will be created. (NOTE: This icon is required for
	  the application to launch from the .exe icon.)
	
	5. Launch Protect It!
	
	6. From Allowed Programs, click the More button, navigate to the Desktop, select
	  the MS-DOS based .exe, and then click OK.
	
	7. Click the Start button, click Shut Down, and the select "Close all programs
	  and log on as a different user."
	
	8. After you log on as a different user, the MS-DOS based application will run
	  from the .exe icon on the Desktop.
	
	NOTE: In some cases the default .pif settings will not be allowed by the
	application. In this case, Protect It! restrictions will need to be removed to
	run the application.
	
	For more information about running MS-DOS-based programs, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q138410 Problems Running MS-DOS-Based Programs with Windows 3.x PIF
	
	Additional query words: kids kidsplus kidsplus! pack plus plus!
	
	======================================================================
	Keywords          : kbusage kbfaq
	Technology        : _IKkbbogus kbGamesSearch kbPlusKids kbPlusSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
