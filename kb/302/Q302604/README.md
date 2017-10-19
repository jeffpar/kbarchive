---
layout: page
title: "Q302604: Train Simulator: Train Simulator Doesn't Start After Install"
permalink: /kb/302/Q302604/
---

## Q302604: Train Simulator: Train Simulator Doesn't Start After Install

	Article: Q302604
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Train Simulator, one of the following behaviors may
	occur when you attempt to start the program:
	
	- Train Simulator stops responding (hangs).
	
	  -or-
	
	- Train Simulator starts, but a black screen appears.
	
	  -or-
	
	- Train Simulator does not start.
	
	CAUSE
	=====
	
	This behavior can occur if one or both of the following conditions are true:
	
	- Your display adapter does not have enough memory.
	
	  -or-
	
	- Your display adapter does not support DirectX 7.0a.
	
	  -or-
	
	- Your system's video card is based on the following nVidia chipsets which are
	  using drivers based on the Nvidia 3.6X or earlier (Detonator 1) reference
	  drivers, and the drivers need updating:
	
	  TnT
	  TnT 1
	  TnT2 M64
	  TnT2
	  TnT2 Ultra
	  GeForce 256
	  GeForce 256 Pro
	  GeForce 256 Ultra
	
	
	This behavior is known to occur with the following display adapters:
	
	  ATI 264VT4 chipset-based display adapters:
	
	  ATI RAGE IIC 1MB
	  ATI RAGE IIC 2MB
	  ATI RAGE IIC 4MB
	
	  MPACT! (Chromatic Research)
	
	  Chromatic Research Inc., who made the Mpact! Series of chips, is out of
	  business. Please contact your system manufacturer for more information.
	
	  NeoMagic MagicMedia chipset-based display adapters:
	
	  Number Nine Imagine Series 2
	
	  Trident TVGA series display adapters:
	
	  TVGA 8900, 9000, 9200CXr, 9470
	
	  Trident TGUI series display adapters:
	
	  TGUI 9420DGI, 9400CXi, 9440, 9680
	
	  Trident ProVidia 9685 display adapters
	
	  Trident 3DImage display adapters:
	
	  3DImage 9750, 9850
	
	  S3 Trio 3D 2X chipset-based display adapters
	
	  S3 Virge DX/GX PCI 375/380
	
	  SIS 5597/5598 chipset-based display adapters
	
	  SiS 530
	
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods.
	
	Method 1: Obtain Updated Display Drivers
	----------------------------------------
	
	Contact your display adapter manufacturer to obtain display drivers that support
	DirectX 7.0a. For additional information about how to contact your display
	adapter manufacturer, click the article numbers below to view the articles in
	the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	If you have determined that you have an nVidia chipset on your system, you can
	obtain updated drivers at the following website:
	
	  http://www.nvidia.com/view.asp?PAGE=windows9x
	
	Method 2: Upgrade Your Display Adapter
	--------------------------------------
	
	Upgrade your display adapter to an adapter that meets the requirements of
	Microsoft Train Simulator. To do this, contact your display adapter
	manufacturer.
	
	Please see method 1 for a listing of vendors.
	
	MORE INFORMATION
	================
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Microsoft Train Simulator requires a DirectX 7.0a-compatible 3-D accelerator
	display adapter with 4 MB of RAM.
	
	For additional information about the minimum system requirements that are needed
	to play Train Simulator, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q299762 Train Simulator: Minimum System Requirements
	
	Additional information about your display adapter can be obtained by using the
	DirectX Diagnostic Tool. To view your display adapter information by using the
	DirectX Diagnostic Tool, follow these steps:
	
	NOTE: DirectX must be installed on the computer.
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "Dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. In the DirectX Diagnostic Tool dialog box, click the Display tab.
	
	4. Under Device, note the device information. Under Drivers, note the driver
	  information.
	
	5. Click the DirectX Drivers tab. Note the DirectX driver Version, and Date
	  information.
	
	To download the latest version of DirectX, browse to the following Microsoft Web
	site:
	
	  http://www.microsoft.com/directx/homeuser/downloads
	
	Additional query words: msgame TrainSim Simulator Train graphics video black screen hang startup card cards
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch kbTrainSim
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
