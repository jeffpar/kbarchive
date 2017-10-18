---
layout: page
title: "Q285061: Flight Simulator 2000: How to Configure CH Products Yoke/Pedals"
permalink: kb/285/Q285061/
---

## Q285061: Flight Simulator 2000: How to Configure CH Products Yoke/Pedals

	Article: Q285061
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw fsim kbimu kbHardware
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Flight Simulator 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Flight Simulator 2000 is designed to give you the best simulated
	flying experience. One way to experience the simulation program is with yokes
	and pedals. This article discusses how to configure the hardware by CH Products
	within the programs listed above.
	
	MORE INFORMATION
	================
	
	The following hardware by CH Products can be used in Flight Simulator 2000.
	
	  FlightSim Yoke USB
	  FlightSim Yoke USB LE
	  Pro Pedals USB
	
	The configuration of these products is a two-part process: Configure the devices
	in Windows and configure the devices in Flight Simulator 2000.
	
	Configure the Devices in Windows
	--------------------------------
	
	To do this, follow the steps below:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Gaming Options icon.
	
	  NOTE: Each installed CH Product should be listed under Game Controllers and
	  each should have a status of OK.
	
	3. Click Properties.
	
	4. Click the Test tab and test the device.
	
	5. Click OK. Click OK again.
	
	If the products are listed, but the status is Not Connected, or the device does
	not test properly, contact CH Products for support. For more information, visit
	their Web site:
	
	  www.chproducts.com (www.chproducts.com)
	
	Configure the Devices in Flight Simulator 2000
	----------------------------------------------
	
	1. Get into the cockpit of a plane.
	
	2. Click Options, point to Controls, and then click Assignments.
	
	3. Click the Joystick Axes tab.
	
	4. Under Joystick type, select the CH Products Yoke.
	
	5. Click to select Elevator axis then click Change Assignment.
	
	6. Move your yoke in and out. You should now see Axis 2. Click OK(the green
	  check mark).
	
	7. Click the Aileron axis.
	
	8. Click Change Assignment.
	
	9. Move your yoke left and right. You should now see Axis 1. Click OK.
	
	10. Click the Throttle axis then click Change Assignment.
	
	11. Move your left-most lever up and down. You should now see Axis 3. Click OK.
	
	12. Click the Propeller axis then click Change Assignment.
	
	13. Move your middle lever up and down. You should now see Axis 4. Click OK.
	
	The following axes should be assigned as follows:
	
	+-------------------------+
	| Elevator axis | Axis 02 | 
	+-------------------------+
	| Ailerons axis | Axis 01 | 
	+-------------------------+
	| Rudder axis   | Axis 04 | 
	+-------------------------+
	| Throttle axis | Axis 03 | 
	+-------------------------+
	
	14. Click Rudder axis, and then click Delete joystick assignment.
	
	  NOTE: If you have the Flight Sim Yoke USB (NOT the LE version) you can also
	  assign the other two axes to Spoilers and Mixture.
	
	15. Under Joystick type, select Pro Pedals USB.
	
	16. Delete all joystick assignments for the following:
	
	  Elevator axis
	  Ailerons axis
	  Throttle axis
	
	17. Click Rudder axis, and then click Change assignment.
	
	18. Slide the rudder pedals to assign Axis 03.
	
	  NOTE: Do not push down on the individual pedals; this will not assign the
	  correct axis.
	
	19. Click the green check box, and then click the green check box again to bring
	  you back to the game.
	
	Set Up CH Yoke HAT (POV) Switch
	-------------------------------
	
	To setup CH Yoke HAT (POV) switch in Flight Simulator 2000, follow these steps:
	
	1. Exit Flight Simulator 2000.
	
	2. Click Start, point to Find, then click Files Or Folders.
	
	3. In the Named box, type "Fs2000.cfg" (without the quotation marks).
	
	4. In the Look In box, click My Computer and then click Find Now.
	
	  NOTE: Make sure the Include Subfolders check box is selected.
	
	5. In the list of found files, double-click the FS2000.cfg file.
	
	6. In the "Choose the program you want to use" box, click Notepad. (If the file
	  opened up then you do not have to choose Notepad, continue down the list.)
	
	7. Click to clear the "Always use this program to open this file" check box, and
	  then click OK.
	
	8. On the Search menu, click Find.
	
	9. Type "[JOYSTICK_00]" (without the quotation marks), and then click Find Next.
	
	10. Type the following lines under [Joystick_00] section, press Enter after each
	  line:
	
	  BUTTON_DOWN_EVENT_32=VIEW_DOWN
	  BUTTON_DOWN_REPEAT_32=1
	  BUTTON_DOWN_EVENT_33=VIEW_FORWARD_RIGHT
	  BUTTON_DOWN_REPEAT_33=1
	  BUTTON_DOWN_EVENT_34=VIEW_RIGHT
	  BUTTON_DOWN_REPEAT_34=1
	  BUTTON_DOWN_EVENT_35=VIEW_REAR_RIGHT
	  BUTTON_DOWN_REPEAT_35=1
	  BUTTON_DOWN_EVENT_36=VIEW_REAR
	  BUTTON_DOWN_REPEAT_36=1
	  BUTTON_DOWN_EVENT_37=VIEW_REAR_LEFT
	  BUTTON_DOWN_REPEAT_37=1
	  BUTTON_DOWN_EVENT_38=VIEW_LEFT
	  BUTTON_DOWN_REPEAT_38=1
	  BUTTON_DOWN_EVENT_39=VIEW_FORWARD_LEFT
	  BUTTON_DOWN_REPEAT_39=1
	  BUTTON_UP_EVENT_32=VIEW_RESET
	  BUTTON_UP_EVENT_33=VIEW_RESET
	  BUTTON_UP_EVENT_34=VIEW_RESET
	  BUTTON_UP_EVENT_35=VIEW_RESET
	  BUTTON_UP_EVENT_36=VIEW_RESET
	  BUTTON_UP_EVENT_37=VIEW_RESET
	  BUTTON_UP_EVENT_38=VIEW_RESET
	  BUTTON_UP_EVENT_39=VIEW_RESET
	
	11. On the File menu, click Exit. When you are receiv a prompt to save the
	  changes, click Yes.
	
	12. Restart Flight Simulator.
	
	Test the Devices
	----------------
	
	1. From cockpit view, switch to exterior view by pressing the S key twice.
	
	2. Press the NUM LOCK key on your keyboard to activate the numeric keypad. Press
	  and hold the 4 key on the numeric keypad until you are looking at the plane
	  from the rear.
	
	3. Make sure the parking break is engaged and the game is NOT paused.
	
	4. Check the elevators and ailerons by moving the yoke in and out and left and
	  right.
	
	5. Check the rudder by sliding the pedals forward and backward.
	
	6. Release the parking brake and push the throttle forward on the yoke.
	
	7. Once you have verified that the devices are working properly quit the game to
	  lock in your configuration.
	
	NOTE: If you ever delete or overwrite the Fs2000.cfg file, you must repeat this
	procedure.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kb3rdparty kbhw fsim kbimu kbHardware 
	Technology        : kbGamesSearch kbFlightSimSearch
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
