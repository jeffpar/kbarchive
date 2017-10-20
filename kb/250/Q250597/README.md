---
layout: page
title: "Q250597: PRB: Windows 2000 CD Not Found Discover Program Is Started"
permalink: /kb/250/Q250597/
---

## Q250597: PRB: Windows 2000 CD Not Found Discover Program Is Started

{% raw %}

	Article: Q250597
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 2000 Professional is started for the first time, the
	Getting Started with Windows 2000 dialog box appears for each user. If you click
	Start to start the Discover Windows program, the Windows 2000 CD Not Found
	dialog box is displayed with the message "Please insert your Windows 2000 CD,
	and then Click OK. To run the Discover 2000 tour from a different location,
	Click Cancel."
	
	CAUSE
	=====
	
	The Discover Windows program cannot find the Discover folder, which is on the
	Windows 2000 Professional CD-ROM (CD).
	
	RESOLUTION
	==========
	
	To correct this problem, use one of the following resolutions:
	
	- Insert the Windows 2000 Professional CD in the CD-ROM drive of the local
	  computer. When the Windows 2000 CD Not Found dialog box is displayed, click
	  OK to run the Discover Windows program.
	
	-or-
	
	- If you want to start the Discover Windows program from a different location
	  on the local hard disk, copy the Discover folder from the Windows 2000
	  Prefessional CD to the \%SystemRoot% folder on the local hard disk. When you
	  start the Discover Windows program, click OK on the Windows 2000 CD Not Found
	  dialog box. To run the Discover 2000 tour from a different location, click
	  Cancel, and then click Cancel again.
	
	  The Discover Tour Not Found dialog box is displayed with the message "The
	  Discover Tour could not be located. Please indicate the location of the
	  required files." Type the location of the files as
	  "<drive_letter>\%SystemRoot%" (without the quotation marks) in the text
	  box to start the Discover Windows program from the local hard disk.
	
	  You only need to do this once. The next time that you start the Discover
	  Windows program, the Windows 2000 CD Not Found dialog box will not be
	  displayed.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: opk sbk discover win2k
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
