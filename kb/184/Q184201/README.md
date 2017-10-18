---
layout: page
title: "Q184201: The File &lt;Filename&gt; Could Not Be Found..."
permalink: kb/184/Q184201/
---

## Q184201: The File &lt;Filename&gt; Could Not Be Found...

	Article: Q184201
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0,2.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbhw kbsetup kbmsn kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install MSN, The Microsoft Network, you may receive an error
	message similar to the following:
	
	  The file <filename> could not be found on the installation disc.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions exist:
	
	- The CD-ROM is dirty or damaged.
	
	- The CD-ROM drive is not properly configured.
	
	- The CD-ROM drive hardware may be damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Confirm that the CD-ROM drive is double-speed or faster. The MSN software
	  does not support single-speed CD-ROM drives.
	
	2. Verify that the MSN CD-ROM is clean and free of scratches. To do so, inspect
	  the shiny side of the CD-ROM. Use a CD-ROM cleaning kit or a soft, lint-free
	  cloth to clean the CD-ROM, and then run the MSN Setup program again. If the
	  issue continues to occur, proceed to the next step.
	
	3. Determine if the CD-ROM is damaged. To do so, attempt to install MSN on a
	  different computer using the same CD-ROM. If the issue does not occur on the
	  other computer, continue to the next step. If the issue does occur on the
	  other computer, the MSN CD-ROM is damaged. You can request a replacement MSN
	  CD-ROM by calling the Microsoft Order Desk at (800) 360-7561. If you are
	  outside the United States, contact the Microsoft subsidiary for your area. To
	  obtain contact information for your Microsoft subsidiary, visit the following
	  Microsoft Web page:
	
	  http://www.microsoft.com/worldwide/default.htm
	
	
	4. Use a CD-ROM lens cleaning kit to clean the CD-ROM drive. If the issue
	  continues to occur, proceed to the next step.
	
	5. To decrease the likelihood of CD-ROM read errors, try reducing data caching
	  on the CD-ROM drive.
	
	  To reduce CD-ROM data caching, you must first determine whether you are using
	  real-mode or protected-mode drivers to access your CD-ROM drive. To determine
	  this, follow these steps:
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click System.
	
	  c. Click the Device Manager tab.
	
	     If a CD-ROM device is listed, you are using protected-mode drivers. Follow
	     the steps in the "Reducing Protected-Mode CD-ROM Drive Caching" section
	     later in this article. If a CD-ROM device is not listed, use the steps in
	     the "Reducing Real-Mode CD-ROM Drive Caching" section.
	
	  Reducing Real-Mode CD-ROM Drive Caching
	  ---------------------------------------
	
	  To reduce CD-ROM data caching if you are using real-mode drivers, follow these
	  steps:
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click System.
	
	  c. On the Performance tab, click File System.
	
	  d. Click the CD-ROM tab.
	
	  e. In the Optimize Access Pattern For box, click No Read-Ahead.
	
	  f. Click OK, and then click Close.
	
	  g. If you are prompted to restart the computer, click Yes.
	
	  Reducing Protected-Mode CD-ROM Drive Caching
	  --------------------------------------------
	
	  To reduce CD-ROM data caching if you are using protected-mode drivers, follow
	  these steps:
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click System.
	
	  c. On the Performance tab, click File System.
	
	  d. Click the CD-ROM tab.
	
	  e. In the Optimize Access Pattern For box, click No Read-Ahead.
	
	     NOTE: Selecting a faster speed than is appropriate for your CD-ROM drive
	     does not necessarily increase performance.
	
	  f. Make sure the Supplemental Cache Size slider is set all the way to the
	     left (the Small setting), and then click OK.
	
	  g. Click OK, and then click Close.
	
	  h. If you are prompted to restart the computer, click Yes.
	
	  For additional information about how to adjust CD-ROM cache settings, please
	  see the following articles in the Microsoft Knowledge Base:
	
	  Q184410 How to Use Msinfo32.exe to Optimize CD-ROM Cache Settings
	
	  Q154883 Home Products Containing Multimedia Version of Msinfo32.exe
	
	  Q140583 How to Configure CD-ROM Caching for Windows 95
	
	  Q132882 Computer Hangs Copying Data from CD-ROM Drive
	
	
	6. If the issue continues to occur, contact your hardware manufacturer to
	  inquire about obtaining the most recent BIOS updates and drivers for your
	  CD-ROM drive.
	
	MORE INFORMATION
	================
	
	For information about how to contact your hardware manufacturer, query in the
	Microsoft Knowledge Base for one of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbenv kberrmsg kbhw kbsetup kbmsn kbHardware 
	Technology        : kbMSNSearch kbMSN200 kbMSN250
	Version           : WINDOWS:2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
