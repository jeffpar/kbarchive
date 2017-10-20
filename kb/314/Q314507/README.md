---
layout: page
title: "Q314507: FS2002: Err Msg: System Is Not Able to Use Hardware Acceleration"
permalink: /kb/314/Q314507/
---

## Q314507: FS2002: Err Msg: System Is Not Able to Use Hardware Acceleration

{% raw %}

	Article: Q314507
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2002 Professional Edition 
	- Microsoft Flight Simulator 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Flight Simulator, you may receive a message similar to
	the following:
	
	  System is not able to use hardware acceleration.
	
	CAUSE
	=====
	
	This behavior can occur if your video card is using outdated drivers, or it does
	not meet the minimum system requirements as listed on the product package.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Method 1: Download and Install the Current Version of Microsoft DirectX
	-----------------------------------------------------------------------
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	To download and install Microsoft DirectX, see the following Microsoft Web site.
	Click the link appropriate to your version of Microsoft Windows. The
	installation proceeds automatically.
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	For additional information about how to install the latest version of DirectX,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q179113 How to Download and Install DirectX
	
	Method 2: Download and Install the Current Version of the Video Driver
	----------------------------------------------------------------------
	
	1. Identify the manufacturer and model of your video adapter. For more
	  information about how to identify your video adapter, see the "More
	  Information" section of this article.
	
	2. For information about how to obtain and install the latest driver for your
	  video card, contact your video adapter manufacturer.
	
	WORKAROUND
	----------
	
	To work around this issue, use the following methods in the order in which they
	are presented.
	
	Method 1: Reduce the Graphics Hardware Acceleration Setting
	-----------------------------------------------------------
	
	NOTE: When you reduce the graphic hardware acceleration setting, your computer's
	graphics performance may be reduced. In addition, applications that require 3D
	acceleration to run may not start if you reduce the hardware acceleration
	setting to Basic or None.
	
	To reduce the graphics hardware acceleration setting, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the Basic acceleration setting).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart the computer, click Yes.
	
	Method 2: Enable Direct3D
	-------------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then press
	  ENTER.
	
	3. Click the Display tab.
	
	4. Ensure that Direct3D Acceleration is enabled. If not, click Enable.
	
	5. Click Exit.
	
	MORE INFORMATION
	================
	
	How to Identify the Manufacturer and Model of your Video Adapter
	----------------------------------------------------------------
	
	To identify your video adapter, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then press
	  ENTER.
	
	3. Click the Display tab.
	
	4. Note the manufacturer and model of your video adapter.
	
	5. Click Exit to close the DirectX Diagnostic Tool.
	
	For information about how to contact your video adapter manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	For additional information about how to determine the version of the video
	driver that is installed on your computer, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q159487 Games: How to Determine the Version of Installed Video Driver
	
	For additional information about how to obtain Microsoft support files, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2002 kbFlightSim2002Pro
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
