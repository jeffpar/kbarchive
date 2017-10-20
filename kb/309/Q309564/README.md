---
layout: page
title: "Q309564: MechCommander 2: Video RAM Error Setting Hardware Configuration"
permalink: /kb/309/Q309564/
---

## Q309564: MechCommander 2: Video RAM Error Setting Hardware Configuration

{% raw %}

	Article: Q309564
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechCommander 2.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the "Set Hardware Configuration for MechCommander 2"
	tool, you may receive an error message similar to the following:
	
	  Your video card has 0 bytes of video RAM. MechCommander 2 requires a video
	  card with at least 6291456 bytes of video RAM. Click OK to try and continue,
	  or click Cancel to exit.
	
	CAUSE
	=====
	
	This issue can occur when any of the following conditions are true:
	
	- DirectDraw is disabled.
	
	- Direct3D is disabled.
	
	- DirectX files are corrupted or missing.
	
	- The video driver needs to be updated.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods.
	
	Enable DirectDraw and Direct3D Acceleration
	-------------------------------------------
	
	1. Click Start, and then click Run.
	
	2. Type "dxdiag" (without the quotation marks), and then click OK.
	
	3. On the Display tab, verify that DirectDraw Acceleration and Direct3D
	  Acceleration features are set to Enabled.
	
	4. Click Exit.
	
	5. Run the configuration tool.
	
	If the error persists, continue with the next method.
	
	Reinstall DirectX in Safe Mode
	------------------------------
	
	1. See the following Microsoft Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	2. Click the link appropriate to your operating system, and then click the
	  DirectX link underneath Download Now.
	
	3. Click "Save this program to disk" to copy the download to your computer for
	  installation at a later time, note the name and location of the file, and
	  then click OK.
	
	4. Restart Windows in Safe mode. To do this, use one of the following methods,
	  as appropriate to your version of Windows.
	
	   - Microsoft Windows 95
	
	     Restart the computer. When you see the "Starting Windows 95" message, press
	     the F8 key. On the Startup menu, select Safe Mode, and then press ENTER.
	
	   - Microsoft Windows 98 and Microsoft Windows Millennium Edition (Me)
	
	     Restart the computer. When the computer completes the Power On Self-Test
	     (POST), press and hold down the CTRL key until you see the Startup menu.
	     On the Startup menu, select Safe Mode, and then press ENTER.
	
	   - Microsoft Windows 2000
	
	     Restart your computer, and when the Boot menu appears, press F8. When the
	     "Windows 2000 Advanced Options" menu appears, select an option, and then
	     press ENTER. When the Boot menu appears again with the words "Safe Mode"
	     displayed in red at the bottom, select the installation that you want to
	     start, and then press ENTER.
	
	     WARNING: Do not select a Microsoft Windows NT 4.0 installation.
	
	5. Run the DirectX setup program from the location noted in step 3. Follow the
	  steps to complete the installation of DirectX.
	
	6. Restart the computer in normal mode.
	
	7. Run the configuration tool.
	
	If the error persists, proceed to the next method.
	
	Check Whether the Video Adapter Meets the Minimum System Requirements
	---------------------------------------------------------------------
	
	For additional information about minimum requirements for MechCommander 2, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q303893 MechCommander 2.0: System Requirements
	
	To determine how much video RAM is installed on your video adapter:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Display tab.
	
	4. Under Device, note the amount of RAM displayed on the Approx. Total Memory
	  line.
	
	5. Click Exit.
	
	If you video adapter does not meet the minimum system requirements, you can
	upgrade your video adapter or return the game for a refund or exchange.
	
	Please contact our Customer Service department at 1-800-426-9400 for more
	information.
	
	Update Video Adapter Driver
	---------------------------
	
	If your video adapter meets or exceeds the minimum system requirements, you may
	need to update to the latest video driver for your video adapter.
	
	To determine the version of your video driver:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Display tab.
	
	4. Under Drivers, note the values displayed on the Main Driver, and the Version
	  lines.
	
	5. Click Exit.
	
	For information about how to contact your video adapter manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: msgame MechCommander 2 Mech Commander 0bytes zero 0 video ram nvidia geforce dxdiag direct directx direct3d 3d directdraw draw
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbMSNSearch kbMechCommSearch kbMechCommander200
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
