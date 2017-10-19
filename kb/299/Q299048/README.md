---
layout: page
title: "Q299048: MapPoint 2002: &quot;Unable to Locate &#91;CD-ROM Drive&#93;&quot; Err Msg"
permalink: /kb/299/Q299048/
---

## Q299048: MapPoint 2002: &quot;Unable to Locate &#91;CD-ROM Drive&#93;&quot; Err Msg

	Article: Q299048
	Product(s): Microsoft Automap
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002 
	- Microsoft Streets & Trips 2002, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install either product listed in the "Applies to" section of this
	article, you may receive the following error message:
	
	  Unable to locate [CD-ROM drive]:\osp\1033\osp.msi. Please reinsert your
	  installation media, or restore your network connection, and select OK to
	  continue.
	
	If you click Cancel, you may receive an error message similar to the following:
	
	  MapPoint install was incomplete.
	
	Or if you reinsert the product CD-ROM and then click OK, you may receive an error
	message similar to the following:
	
	  Windows Installer: Incorrect command-line parameters.
	
	CAUSE
	=====
	
	This behavior can occur if you attempt to run an administrative installation by
	using the /a switch. This switch is not supported.
	
	RESOLUTION
	==========
	
	To work around this issue, follow these steps to create an administrative
	installation location:
	
	1. Insert the Microsoft MapPoint or Microsoft Streets & Trips compact disc
	  in your computer's CD-ROM or DVD-ROM drive. Hold down the SHIFT key to
	  prevent installation from automatically starting.
	
	2. Open a command prompt window, and then type the following
	
	  msiexec /a <X>:\msmap\data.msi
	
	  where <X> is the letter of your CD-ROM or DVD-ROM drive.
	
	  The Administrative Installation Wizard starts.
	
	3. Click Next.
	
	4. Select a network location for the administrative installation location. For
	  example, select \\machine\share\MapPoint.
	
	5. Follow the Administrative Installation Wizard on-screen instructions.
	
	When you are finished creating the administrative installation location, users
	can install MapPoint either through an advertisement or by browsing to the
	location and double-clicking Setup.exe.
	
	MORE INFORMATION
	================
	
	How to Make MapPoint Available on the Network Through Advertising
	-----------------------------------------------------------------
	
	After you create an administrative installation location, you can make MapPoint
	available through advertising. Advertising is a Windows Installer method for
	making a program available to the user without installing it. When the user
	attempts to use the program, the program is installed and run.
	
	1. On the computer of one of the users on your network, open a command prompt
	  window.
	
	2. Type the following command
	
	  msiexec /jm \\machine\share\MapPoint\msmap\data.msi
	
	  where \\machine\share\MapPoint is the administrative installation location.
	
	A shortcut is placed on the user's Start menu. When the user clicks this
	shortcut, MapPoint Setup is automatically started.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbExpediaSearch kbMapptSearch kbExpediaStreets2002 kbMapPoint2002
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
