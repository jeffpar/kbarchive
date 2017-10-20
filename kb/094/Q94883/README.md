---
layout: page
title: "Q94883: PC WSPlus: Importing/Exporting Information to the Sharp Wizard"
permalink: /kb/094/Q94883/
---

## Q94883: PC WSPlus: Importing/Exporting Information to the Sharp Wizard

{% raw %}

	Article: Q94883
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Schedule+ version 1.0a supports the ability to import and export
	schedule data with a Sharp Wizard. To export or import data, you must have
	Schedule+ version 1.0a, a Sharp Wizard series OZ-8000s or OZ-8200, and the Sharp
	Organizer Link II model OZ-890.
	
	NOTE: Schedule+ will not support importing and exporting schedule data to the
	Sharp Wizard Series OZ-9000 or higher with the Sharp Organizer Link III model
	OZ-990.
	
	To export from Schedule+ to the Sharp Wizard
	--------------------------------------------
	
	In Schedule+, export schedule information in the Sharp Wizard format. It will
	appear as <username>.OZW.
	
	1. From the Schedule+ File menu, choose Export Appointments. Then from the File
	  Format list box, select Sharp Wizard.
	
	2. Specify the range of dates you want to export, then choose OK and Exit
	  Schedule+.
	
	3. Start the Organizer Link II software (OL2), press F2, and select Schedule.
	
	4. Press F6 and select Export/Import.
	
	5. A new window menu appears. Choose From SDF Format, then select either Append
	  or Overwrite Current Application With Imported Data.
	
	6. Enter the path to the Schedule+ <username>.OZW file and the filename.
	
	7. Press F4 and select Send Application(s) To Organizer (Or Card).
	
	8. A new window menu appears. Choose Send This Application.
	
	To import from the Sharp Wizard to Schedule+
	--------------------------------------------
	
	1. Start the Organizer Link II software (OL2), press F4, and select Get
	  Application(s) From Organizer (Or Card).
	
	2. A new window menu appears. Select Get this Application (Replace).
	
	3. Press F6 to Export/Import To SDF Database Format.
	
	4. Enter a name to save the file as (for example, <username>.OZW).
	
	5. Press ALT+X to exit the OL2 program.
	
	6. Start Windows and Schedule+.
	
	7. From the File menu, choose Import.
	
	8. From the List of File Types drop-down list, select All Files *.*
	
	9. In the File Name display, select the filename you created in step 4. Select
	  the Sharp Wizard format and then select OK.
	
	MORE INFORMATION
	================
	
	Sharp Wizard and Sharp Organizer Link III are manufactured by Sharp Electronics,
	a vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	For more information about the use of the Sharp Wizard, call Sharp Technical
	Support at 800-BE-SHARP (800-237-4277).
	
	Additional query words: schedule plus 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100a
	Version           : WINDOWS:1.0a
	
	=============================================================================
	

{% endraw %}
