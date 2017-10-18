---
layout: page
title: "Q264077: MapPoint 2001 Err Msg: This Application Is Unable to Continue..."
permalink: kb/264/Q264077/
---

## Q264077: MapPoint 2001 Err Msg: This Application Is Unable to Continue...

	Article: Q264077
	Product(s): Microsoft Automap
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbimu
	Last Modified: 09-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Streets & Trips 2002, version 1.0 
	- Microsoft Streets and Trips 2001 
	- Microsoft MapPoint 2002 
	- Microsoft MapPoint 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run one of the programs that are listed at the beginning of this
	article, you may receive the following error message:
	
	  This application is unable to continue running. The problem may be the result
	  of low system resources such as memory or disk space. Try closing down other
	  applications, increasing the amount of file space on the disk drive that
	  contains Windows, or adding more memory.
	
	You may receive this error message when you attempt to perform any of the
	following actions:
	
	- Start the program
	
	- Use the Find feature in the program
	
	- Print from the program
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- Hurricane 98 WinGauge is installed on your computer.
	
	- The Microsoft Data Access Components (MDAC) Update installation did not
	  complete successfully.
	
	- The video driver for your video adapter is damaged or outdated.
	
	- The printer driver for your printer is damaged or outdated.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Uninstall Hurricane 98 WinGauge
	-------------------------------
	
	To uninstall Hurricane 98 WinGauge:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Hurricane 98 WinGauge, and then click Add/Remove.
	
	4. Follow the instructions on the screen to remove Hurricane 98 WinGauge.
	
	If Hurricane 98 WinGauge is not installed on your computer, or if the issue
	continues to occur, proceed to the next method.
	
	Download and Install MDAC
	-------------------------
	
	Follow the steps for the operating system that is installed on your system.
	
	Windows 95:
	
	Install DCOM 95 first, and then follow the steps for Windows 98
	
	Windows 98/Millennium Edition:
	
	1. Connect to the following Microsoft Web site:
	
	  http://www.microsoft.com/downloads/release.asp?ReleaseID=23951
	
	2. Click "Save this program to disk", and then click OK.
	
	3. In the Save in box, click Desktop, and then click Save.
	
	4. Click Close when the copying process is done.
	
	To install the MDAC 2.5 SP1 update:
	
	1. Double-click the Mdac_typ.exe file on the Windows desktop.
	
	2. Follow the instructions on the screen to install the MDAC 2.5 sp1 update.
	
	3. When you receive the prompt to restart the computer, click Yes.
	
	If you encounter problems when you install the MDAC 2.5 sp1 update, restart the
	computer in Safe mode, and then repeat this procedure.
	
	Windows 2000:
	
	You need to install the Windows 2000 Service Pack 1. Doing so automatically
	installs the MDAC 2.5 SP1 and protects this MDAC release using System File
	Protection. This means that you can only remove MDAC 2.5 SP1 from Windows 2000
	by uninstalling the Windows 2000 Service Pack 1. You can download SP1 for
	Windows 2000 at the following website:
	
	  http://www.microsoft.com/windows2000/downloads/servicepacks/sp1/default.asp
	
	If the issue continues to occur, proceed to the next method.
	
	Install an Updated Video Driver for Your Video Adapter
	------------------------------------------------------
	
	Contact your hardware manufacturer to inquire about how to obtain and install the
	latest video driver for your video adapter.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	If the issue continues to occur, proceed to the next method.
	
	Reduce the Graphics Hardware Acceleration
	-----------------------------------------
	
	To reduce the graphics hardware acceleration:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the "Hardware acceleration" slider until it is one notch to the right of
	  None (the Basic acceleration setting).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart your computer, do so.
	
	If you are unable to restart your computer successfully:
	
	a. Press and hold down the CTRL key when you see the "Starting Windows 98"
	  message (in Microsoft Windows 98) or press F8 when you see the "Starting
	  Windows 95" message (in Microsoft Windows 95) on the screen.
	
	b. Select Safe Mode from the Startup menu.
	
	c. Repeat steps 1 through 6 to restore your original graphics hardware
	  acceleration setting.
	
	If the issue continues to occur, proceed to the next method.
	
	Install an Updated Printer Driver for Your Printer
	--------------------------------------------------
	
	Contact your hardware manufacturer to inquire about how to obtain and install the
	latest printer driver for your video printer.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: mp2001 st2001 auto-map amap crash quits stops
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbExpediaSearch kbMapptSearch kbMapPoint2001 kbExpediaStreets2001 kbExpediaStreets2002 kbMapPoint2002
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
