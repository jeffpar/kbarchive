---
layout: page
title: "Q317830: FS2002: CH Products Controllers Do Not Work As Expected"
permalink: /kb/317/Q317830/
---

## Q317830: FS2002: CH Products Controllers Do Not Work As Expected

{% raw %}

	Article: Q317830
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
	
	When you attempt to play Microsoft Flight Simulator 2002, you may experience any
	of the following issues if you use a CH Flight Yoke or CH Virtual Pilot Pro:
	
	- When you launch a new flight, the plane pulls to right or left immediately
	  after the cockpit is loaded.
	
	  -or-
	
	- The toe brakes may be extremely sensitive, and you cannot release the parking
	  brake.
	
	  -or-
	
	- The throttle controls do not work.
	
	CAUSE
	=====
	
	This issue can be caused by outdated or incorrectly configured CH driver
	software.
	
	RESOLUTION
	==========
	
	To resolve this issue, update CH Products software, calibrate your yoke and
	pedals, and then rebuild the Fs2002.cfg file. To do this, follow these steps:
	
	Update CH Products Software
	---------------------------
	
	Connect to the following CH Web site to download the newest version of CH
	Products software:
	
	  http://www.chproducts.com
	
	Calibrate the Yoke and Pedals
	-----------------------------
	
	If you use a digital Microsoft SideWinder game controller with Microsoft
	SideWinder Game Device software version 2.0 or later or Microsoft SideWinder
	Game Controller software, the software calibrates the game controller
	automatically.
	
	To use Microsoft SideWinder Game Device software version 2.0 to test the
	calibration for your digital SideWinder game controller, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Game Controllers.
	
	3. On the Test tab, test all of the functions for your digital SideWinder game
	  controller, and then click OK.
	
	4. Close Control Panel.
	
	Rebuild the Fs2002.cfg File
	---------------------------
	
	To rebuild the Fs2002.cfg file, press and hold down CTRL+SHIFT as you start
	Flight Simulator and start a new flight. Continue to hold down CTRL+SHIFT until
	the game is in Cockpit view.
	
	NOTE: When you rebuild the Fs2002.cfg file, some of your joystick settings may
	change.
	
	If your game controller is installed properly and the Devices.cfg file contains
	the default settings for your game controller, Flight Simulator 2002 adds the
	appropriate entries for your game controller to the Fs2002.cfg file.
	
	The Devices.cfg file contains the following joystick headings:
	
	  [Generic]
	  [Generic SLEW]
	  [Generic Gamepad]
	  [Generic Gamepad SLEW]
	  [Mad Catz Panther XL]
	  [Mad Catz Panther XL SLEW]
	  [Gravis GrIP MultiPort]
	  [Gravis GrIP MultiPort SLEW]
	  [Logitech ThunderPad Digital]
	  [Logitech ThunderPad Digital SLEW]
	  [Microsoft SideWinder Freestyle Pro]
	  [Microsoft SideWinder Freestyle Pro SLEW]
	  [Microsoft USB SideWinder Game Pad]
	  [Microsoft USB SideWinder Game Pad SLEW]
	  [Microsoft SideWinder Force Feedback Wheel]
	  [Microsoft SideWinder Force Feedback Wheel SLEW]
	  [INTERACT Vortex 3D (General 2)]
	  [INTERACT Vortex 3D (General 2) SLEW]
	  [Logitech CyberMan 2]
	  [Logitech CyberMan 2 SLEW]
	  [Thrustmaster NASCAR Pro w/combined pedals]
	  [Thrustmaster NASCAR Pro w/separate pedals SLEW]
	  [Logitech WingMan Warrior]
	  [Logitech WingMan Warrior SLEW]
	  [Logitech WingMan Extreme Digital]
	  [Logitech WingMan Extreme Digital SLEW]
	  [INTERACT Vortex 3D (Flight Simulation)]
	  [INTERACT Vortex 3D (Flight Simulation) SLEW]
	  [Spacetec SpaceOrb 360]
	  [Spacetec SpaceOrb 360 SLEW]
	  [Creative GamePad]
	  [Creative GamePad SLEW]
	  [Gravis Gamepad]
	  [Gravis Gamepad SLEW]
	  [Gravis GrIP]
	  [Gravis GrIP SLEW]
	  [Gravis Analog Joystick]
	  [Gravis Analog Joystick SLEW]
	  [Gravis Analog Pro Joystick]
	  [Gravis Analog Pro Joystick SLEW]
	  [Thrustmaster Formula T1/T2 without adapter]
	  [Thrustmaster Formula T1/T2 without adapter SLEW]
	  [Thrustmaster Formula T1/T2 with adapter SLEW]
	  [Thrustmaster Flight Control System]
	  [Thrustmaster Flight Control System SLEW]
	  [ThrustMaster Attack Throttle]
	  [ThrustMaster Attack Throttle SLEW]
	  [Logitech WingMan Light]
	  [Logitech WingMan Light SLEW]
	  [Logitech WingMan Extreme]
	  [Logitech WingMan Extreme SLEW]
	  [Logitech WingMan]
	  [Logitech WingMan SLEW]
	  [Logitech ThunderPad]
	  [Logitech ThunderPad SLEW]
	  [CH Flightstick]
	  [CH Flightstick SLEW]
	  [CH Flightstick Pro]
	  [CH Flightstick Pro SLEW]
	  [CH Virtual Pilot]
	  [CH Virtual Pilot SLEW]
	  [CH Virtual Pilot Pro]
	  [CH Virtual Pilot Pro SLEW]
	  [CH Flight Sim Yoke LE]
	  [CH Flight Sim Yoke LE SLEW]
	  [CH Flight Sim Yoke PC (Win98)]
	  [CH Flight Sim Yoke PC (Win98) SLEW]
	  [CH GameStick 14]
	  [CH GameStick 14 SLEW]
	  [CH GameStick 3D USB]
	  [CH GameStick 3D USB SLEW]
	  [CH GameStick 3D]
	  [CH GameStick 3D SLEW]
	  [CH Force FX Joystick (analog mode)]
	  [CH Force FX Joystick (analog mode) SLEW]
	  [Suncom Sceptor LCD]
	  [Suncom Sceptor LCD SLEW]
	  [Suncom SFS Flight Controller USB]
	  [Suncom SFS Flight Controller USB SLEW]
	  [Suncom SFS Throttle and SFS Flight Controller with Left grip]
	  [Suncom SFS Throttle and SFS Flight Controller with Left grip SLEW]
	  [Mad Catz Panther DX]
	  [Mad Catz Panther DX SLEW]
	  [Microsoft SideWinder game pad]
	  [Microsoft SideWinder game pad SLEW]
	  [Microsoft SideWinder]
	  [Microsoft SideWinder SLEW]
	  [Microsoft SideWinder 3D Pro]
	  [Microsoft SideWinder 3D Pro SLEW]
	  [Microsoft SideWinder Force Feedback Pro]
	  [Microsoft SideWinder Force Feedback Pro SLEW]
	  [Microsoft SideWinder Precision Pro]
	  [Microsoft SideWinder Precision Pro SLEW]
	  [Microsoft SideWinder Precision Pro (USB)]
	  [Microsoft SideWinder Precision Pro (USB) SLEW]
	  [Microsoft SideWinder Dual Strike]
	  [Microsoft SideWinder Dual Strike SLEW]
	  [CH FLIGHT SIM YOKE USB]
	  [CH FLIGHT SIM YOKE USB SLEW]
	  [CH PRO PEDALS USB]
	  [CH PRO PEDALS USB SLEW]
	  [CH Pro Pedals USB Rudder Pedals]
	  [CH Pro Pedals USB Rudder Pedals SLEW]
	  [Microsoft SideWinder Precision 2]
	  [Microsoft SideWinder Precision 2 SLEW]
	  [Microsoft SideWinder Force Feedback 2]
	  [Microsoft SideWinder Force Feedback 2 SLEW]
	  [SideWinder Precision 2 Joystick]
	  [SideWinder Precision 2 Joystick SLEW]
	  [SideWinder Force Feedback 2 Joystick]
	  [SideWinder Force Feedback 2 Joystick SLEW]
	
	The settings under the SLEW headings determine how the game controller behaves in
	Slew mode. The settings under the RUDDER headings determine how the game
	controller behaves when the rudder is enabled. To enable the rudder settings,
	click to select the Rudder check box on the Settings tab in the Game Controllers
	tool in Control Panel.
	
	NOTE: If your game controller is not defined in the Devices.cfg file, Flight
	Simulator 2002 may not assign any actions to the buttons on your game
	controller. For additional information about how to manually assign actions to
	the buttons on your game controller, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q315941 Flight Simulator 2002: Troubleshooting Joystick Problems (Part 2)
	
	Install the Latest Version of Microsoft DirectX
	-----------------------------------------------
	
	Download and install the latest version of DirectX from the following Microsoft
	Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	For additional information about how to obtain and install the latest version of
	DirectX, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	MORE INFORMATION
	================
	
	For more information about CH products, see the following CH Web site:
	
	  http://www.chproducts.com
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	REFERENCES
	==========
	
	For additional information about joystick troubleshooting, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q315941 Flight Simulator 2002: Troubleshooting Joystick Problems (Part 2)
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2002 kbFlightSim2002Pro
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
