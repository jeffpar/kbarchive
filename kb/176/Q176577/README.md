---
layout: page
title: "Q176577: Flight Simulator 98: Description of Aircraft/Adventures Converte"
permalink: /kb/176/Q176577/
---

## Q176577: Flight Simulator 98: Description of Aircraft/Adventures Converte

	Article: Q176577
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbfile fs98 kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes Flight Shop Converter 98.
	
	Flight Shop Converter 98 is a program that converts aircraft and adventures from
	Flight Shop or earlier versions of Flight Simulator for use in Flight Simulator
	98. The Flight Shop Converter 98 installation program also updates several
	program files to fix known problems in Flight Simulator 98.
	
	Flight Shop Converter 98 is available as a free download from the following
	Microsoft Web site:
	
	  http://www.microsoft.com/games/fs2000/downloads_archive.asp
	
	For additional information about how to use Flight Shop Converter 98, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q175873 FS98/2000: Using Aircraft and Adventures from Earlier Versions
	
	MORE INFORMATION
	================
	
	Problems Fixed by Flight Shop Converter 98
	------------------------------------------
	
	Flight Shop Converter 98 fixes the following problems in Flight Simulator 98:
	
	- Multiplayer system allows host to remove other players from a session.
	
	- Multiplayer system properly displays user names containing extended
	  characters.
	
	- Multiplayer system can transmit and receive visual data from converted Flight
	  Shop aircraft.
	
	- The slaved ADF gauge in the Bell 206 JetRanger III helicopter now works
	  correctly.
	
	- The control position indicator in the Cessna 182RG now moves in a fashion
	  consistent with the other aircraft in the product.
	
	- The ILS system reception volume is adjusted to allow you to intercept the
	  glideslope from farther below without losing the signal.
	
	- The VOR reception volumes have been adjusted for more realistic tail-off
	  curves. This change should alleviate problems receiving Low or Terminal class
	  VORs at high altitudes.
	
	- The Cessna 182S autopilot no longer automatically engages the wing leveler
	  when it is activated from the panel's radio stack.
	
	- A potential General Protection Fault (GP Fault) error message when you shut
	  down Flight Simulator while an Adventure or Lesson is running is corrected.
	
	- Fix to Fltsim98.cfg file creation and parsing. This fixes the support for the
	  NT361 control module from NT Systems, Inc.
	
	- The visual system now correctly avoids texturing scenery of the Rolling Hills
	  seed type.
	
	- The instrument panel system now correctly colors the panel when the panel
	  starts in night mode.
	
	- The adventure system problem related to the order of commands in the
	  adventure source code is corrected. This problem occurs when you adjust the
	  autopilot parameters to be consistent with prior versions.
	
	- The adventure system problems related to the following APLC functions are
	  corrected:
	
	  SET_POSITION - was ignoring the 3rd parameter (Altitude)
	  WEATHER_CHAR - was ignoring the 4th parameter (Speed)
	  VISIBILITY - was not handling values between 0 and 1 correctly
	
	- The problem in the ATIS window when the system is using large fonts is fixed.
	
	- The problem in the sound system related to playing crash sounds is fixed.
	
	- The problem with the mouse pointer not disappearing on 3DFX based boards when
	  you use Mouse As Yoke Mode is fixed.
	
	- The internal scenery buffer is increased from 256K to 512K and fixes problems
	  with London scenery (and some third-party scenery).
	
	- The display on the Fuel Quantity Gauge is changed to allow for aircraft with
	  more than 100,000 gallons capacity. If the amount is below 100,000 gallons,
	  the display shows 2 large digits and 1 small digit - this is a xx.x * 1000
	  display. If the amount is above 100,000 gallons, then the display shows 3
	  large digits - this is a xxx * 1000 display.
	
	- To use the EGT gauge on the reciprocating engine panels, make sure the
	  Mixture Control check box is selected on the Engine tab in the Aircraft
	  Settings dialog box.
	
	- The behavior of engine controls is changed (throttle, starters, etc.) on
	  multi-engine panels so that they no longer change the selected engine that is
	  controlled by the joystick or keyboard. For example, if you have selected the
	  Adjust All Engines option on the Engine tab of the Aircraft Settings dialog
	  box, dragging engine 2 throttle does not affect the ability of the joystick
	  or keyboard throttle control to move all of them.
	
	Updated Flight Simulator 98 Files Installed by Converter
	--------------------------------------------------------
	
	The file version for the updated Fltsim98.exe file installed by the converter is
	version 6.10.419. The file version for all other updated files installed by the
	converter is version 6.10.440. To check the version number for any file:
	
	1. Right-click the file, and then click Properties.
	
	2. Click the Version tab.
	
	3. On the File Version line, note the version number of the file, and then click
	  OK.
	
	The following updated Flight Simulator 98 files, arranged by folder, are
	installed by Flight Shop Converter 98:
	
	\Program Files\Microsoft Games\Flight Simulator:
	
	- Fltsim98.exe
	
	\Program Files\Microsoft Games\Flight Simulator\Modules:
	
	- Advdrv.dll
	- Controls.dll
	- Fe.dll
	- G3d.dll
	- Hg2d.dll
	- Main.dll
	- Multiplayer.dll
	- Panels.dll
	- Sound.dll
	- Winmsg.dll
	
	\Program Files\Microsoft Games\Flight Simulator\Gauges:
	
	- 737-400.fuel-quantity.gau
	- 737-400.controls.gau
	- 737-400.engine-start.gau
	- Bendix_king_radio.ap.gau
	- Bendix_king.adf.slaved.gau
	- Cessna_182.egt_cht.gau
	- Cessna_182.oil.gau
	- Cessna_182.rpm.gau
	- Cessna_182.manifold_pressure_fuel_flow.gau
	- Cessna_182_rg.oil.gau
	- Cessna_182_rg.controls.gau
	- Lear_45.eicas.gau
	- Lear_45.pfd.gau
	- Lear_45.thrust_levers.gau
	
	\Program Files\Microsoft Games\Flight Simulator\Adv:
	
	- B3execc.adv
	- B3hkgigs.adv
	- B3red_i.adv
	- B3tyofry.adv
	- Cfbficlm.adv
	- Crmvin.adv
	- Ljcperks.adv
	- Ljexecc.adv
	- Ljmedem.adv
	- Ljslots.adv
	
	\Program Files\Microsoft Games\Flight Simulator\Lessons:
	
	- B3dintro.les
	- Ljdintro.les
	
	REFERENCES
	==========
	
	For more information about the Aircraft/Adventure Converter for Flight Simulator
	98, see the Readme.txt file included with the converter.
	
	Additional query words: FS98 conversion utility changed updated
	
	======================================================================
	Keywords          : kbfile fs98 kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim98 kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
