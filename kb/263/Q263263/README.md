---
layout: page
title: "Q263263: Games Err Msg: The Filename.icd File Is Linked to Missing..."
permalink: /kb/263/Q263263/
---

## Q263263: Games Err Msg: The Filename.icd File Is Linked to Missing...

	Article: Q263263
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Motocross Madness 2, version 2.0 
	- Microsoft Pinball Arcade, version 1.0 
	- Microsoft StarLancer, version 1.0 
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the Microsoft programs listed at the beginning of this
	article, you may receive the following error message:
	
	  The <Filename>.icd file is linked to missing export
	  Dinput.dll:DirectInputCreateEx
	
	  Mprofile.exe is linked to missing export ddraw.dll.
	
	When you run the DirectX Diagnostic tool (Dxdiag.exe), the following message may
	be displayed in the Notes box on the DirectX Files tab:
	
	  Several files (ddraw.dll, ddraw16.dll) are old versions, which could cause
	  problems. You should reinstall DirectX to get the latest version.
	
	CAUSE
	=====
	
	This behavior can occur if Microsoft DirectX is not properly installed on your
	computer.
	
	RESOLUTION
	==========
	
	To resolve this issue for Train Sim users, you can copy DirectX 8.0a from the
	installation CD to the desktop, and install from there.
	
	To resolve this issue in other cases, download and install the latest version of
	DirectX from the following Microsoft Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	For additional information about how to install the latest version of DirectX,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q179113 How to Download and Install DirectX
	
	If this issue continues to occur after you install the latest version of DirectX,
	rename and then reinstall the DirectX files:
	
	1. Click Start, point to Find, then click "Files or Folders".
	
	2. In the Named box, type "ddraw.dll ddraw16.dll" (without the quotation marks).
	
	3. Click to select the "Include subfolders" check box.
	
	4. In the "Look in" box, click the hard disk on which Microsoft Windows is
	  installed, and then click Find Now.
	
	5. In the list of found files, rename the Ddraw.dll and Ddraw16.dll files:
	
	  a. Right-click the Ddraw.dll file, and then click Rename.
	
	  b. Type "ddraw.old" (without the quotation marks), and then press ENTER.
	
	  c. Right-click the Ddraw16.dll file, and then click Rename.
	
	  d. Type "ddraw16.old" (without the quotation marks), and then press ENTER.
	
	  e. Close the Find: Files Named Ddraw.dll Ddraw16.dll window.
	
	NOTE: If you receive a message stating that the file is in use, you must rename
	the Ddraw.dll and Ddraw16.dll files at the command prompt. To do this, click OK,
	and then proceed to the "More Information" section of this article.
	
	6. On the desktop, double-click the DirectX file that was downloaded (this file
	  name will depend on the version downloaded), and then follow the instructions
	  on the screen to install DirectX.
	
	MORE INFORMATION
	================
	
	To rename a file at a command prompt:
	
	1. Click Start, and then click Shut Down.
	
	2. Click "Restart the Computer in MS-DOS mode", and then click Yes.
	
	3. At the command prompt, type the following lines, pressing ENTER after you
	  type each line:
	
	  cd \windows\system
	  ren ddraw.dll ddraw.old
	  ren ddraw16.dll ddraw16.old
	  exit
	
	4. On the desktop, double-click the Dx7aeng.exe file, and then follow the
	  instructions on the screen to install DirectX 7.0a.
	
	Additional query words: 1.00 msgame direct-x dx7a star lancer icd dx8 dx8.1 Sim MM2
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbZNotKeyword kbPinballArc kbArcadeSearch _IK kbMotocrossSearch kbStarlancerSearch kbStarlancer kbMotocrossM2 kbTrainSim kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
