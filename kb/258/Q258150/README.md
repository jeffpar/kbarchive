---
layout: page
title: "Q258150: FS2000: How to Adjust Trim Sensitivity and Effectiveness"
permalink: /kb/258/Q258150/
---

## Q258150: FS2000: How to Adjust Trim Sensitivity and Effectiveness

	Article: Q258150
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to adjust the sensitivity and effectiveness of the
	elevator trim controls for an aircraft in Flight Simulator 2000.
	
	MORE INFORMATION
	================
	
	The sensitivity and effectiveness of the trim controls vary from one type of
	aircraft to another.
	
	To adjust the sensitivity or effectiveness of the elevator trim controls for an
	aircraft in Flight Simulator 2000, use the appropriate method.
	
	Change the Sensitivity of the Trim Controls
	-------------------------------------------
	
	To change the sensitivity of the "Elevator trim down" and "Elevator trim up"
	controls, adjust the Repeat slider for each control.
	
	NOTE: This is the preferred method for adjusting trim sensitivity in Flight
	Simulator 2000.
	
	To adjust the Repeat sliders for the "Elevator trim down" and "Elevator trim up"
	controls:
	
	1. Start a new flight in Flight Simulator 2000.
	
	2. On the Options menu, point to Controls, and then click Assignments.
	
	  NOTE: If the menu bar is not visible, press the ALT key.
	
	3. In the "Event category" box on the Buttons/Keys tab, click "Control surface
	  commands".
	
	4. In the Event column, click the "Elevator trim down" line.
	
	  To decrease "Elevator trim down" sensitivity, move the slider in the Repeat
	  column to the left.
	
	  To increase "Elevator trim down" sensitivity, move the slider in the Repeat
	  column to the right.
	
	5. In the Event column, click the "Elevator trim up" line.
	
	  To decrease "Elevator trim up" sensitivity, move the slider in the Repeat
	  column to the left.
	
	  To increase "Elevator trim up" sensitivity, move the slider in the Repeat
	  column to the right.
	
	6. Click the green check mark to return to the cockpit view.
	
	NOTE: The following table lists the effect of each Repeat slider position.
	
	  
	  +-----------------------------------------------------------------------------+
	  | Repeat slider   | Effect                                                    | 
	  +-----------------------------------------------------------------------------+
	  | Left position   | No repeat. Single increment for each button or key press. | 
	  +-----------------------------------------------------------------------------+
	  | Center position | Slow repeat as long as button or key is pressed.          | 
	  +-----------------------------------------------------------------------------+
	  | Right position  | Fast repeat as long as button or key is pressed.          | 
	  +-----------------------------------------------------------------------------+
	
	Change the Effectiveness of the Trim Controls
	---------------------------------------------
	
	To change the effectiveness of the trim controls for an aircraft, modify the
	Aircraft.cfg file for that aircraft.
	
	NOTE: The default settings for each aircraft in Flight Simulator 2000 are
	designed to be as realistic as possible. When you modify an Aircraft.cfg file to
	change the effectiveness of the trim controls for an aircraft in Flight
	Simulator 2000, you decrease the realism in the program.
	
	To modify the Aircraft.cfg file for an aircraft:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line (including the quotation marks), and
	  then click OK
	
	  "<drive>:\program files\microsoft games\fs2000\aircraft\"
	
	  where <drive> is the drive letter of the hard disk on which Flight
	  Simulator 2000 is installed.
	
	3. Double-click the folder for the aircraft that you want to modify.
	
	  The following table lists the folders for each of the aircraft included with
	  Flight Simulator 2000 and Flight Simulator 2000 Professional.
	
	  
	  +---------------------------------------------------------------------------+
	  | Folder             | Aircraft                 | Version                   | 
	  +---------------------------------------------------------------------------+
	  | B737_400           | Boeing 737-400           | Standard and Professional | 
	  +---------------------------------------------------------------------------+
	  | C182               | Cessna Skylane 182R RG   | Standard and Professional | 
	  +---------------------------------------------------------------------------+
	  | EXTRA300           | Extra 300S               | Standard and Professional | 
	  +---------------------------------------------------------------------------+
	  | LEAR45             | Learjet 45               | Standard and Professional | 
	  +---------------------------------------------------------------------------+
	  | SCHEIZER           | Schweizer 2-32 Sailplane | Standard and Professional | 
	  +---------------------------------------------------------------------------+
	  | SOPCAMEL           | Sopwith Camel            | Standard and Professional | 
	  +---------------------------------------------------------------------------+
	  | Bell206B           | Bell 206B JetRanger*     | Standard and Professional | 
	  +---------------------------------------------------------------------------+
	  | CONCORDE           | Concorde                 | Standard and Professional | 
	  +---------------------------------------------------------------------------+
	  | B777_300           | Boeing 777-300           | Standard and Professional | 
	  +---------------------------------------------------------------------------+
	  | MOONEY_BRAVO       | Mooney Bravo             | Professional only         | 
	  +---------------------------------------------------------------------------+
	  | BEECH_KING_AIR_350 | Beech King Air 350       | Professional only         | 
	  +---------------------------------------------------------------------------+
	
	  * Because the Bell 206B JetRanger is a helicopter, it does not use trim
	  controls.
	
	4. Double-click the Aircraft.cfg file.
	
	  If you are prompted to select the program that you want to use to open the
	  file, click Notepad in the "Choose the program you want to use" box, and then
	  click OK.
	
	5. On the Search menu, click Find.
	
	6. In the "Find what" box, type "[flight_tuning]" (without the quotation marks),
	  and then click Find Next.
	
	  If you receive a "Cannot find '[flight_tuning]'" message:
	
	  a. Click OK, and then click Cancel.
	
	  b. Press CTRL+END to move to the end of the file.
	
	  c. Press ENTER twice, and then type the following lines, pressing ENTER after
	     you type each line:
	
	  [flight_tuning]
	  elevator_trim_effectiveness=1.0
	
	  NOTE: The Aircraft.cfg file for the Cessna Skylane 182R RG is the only
	  Aircraft.cfg file that contains the "elevator_trim_effectiveness" line by
	  default. The Aircraft.cfg file for the Cessna Skylane 182R RG contains all
	  possible Aircraft.cfg variables. You can use this file as a template for
	  other Aircraft.cfg files.
	
	7. Change the value for the "elevator_trim_effectiveness" line.
	
	  NOTE: The value on this line functions as a multiplier. By default, the
	  "elevator_trim_effectiveness" value is set to 1.0. If you change the value to
	  2.0, the trim becomes twice as effective. If you change the value to 0.5, the
	  trim becomes half as effective. If you change the value to 0.0, the trim
	  becomes completely unresponsive.
	
	NOTE: If the trim keys on the keyboard function properly, but the trim buttons on
	your game controller do not function properly, your game controller may not be
	configured properly.
	
	For additional information about how to troubleshoot game controller problems in
	Flight Simulator 2000, click the article numbers below to view the articles in
	the Microsoft Knowledge Base:
	
	  Q243981 FS 2000: Troubleshooting Joystick Problems (Part 1)
	
	  Q244515 FS 2000: Troubleshooting Joystick Problems (Part 2)
	
	Additional query words: msgame flightsim fsim fs2000 fs2k
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbSimSearch
	Version           : :
	
	=============================================================================
	
