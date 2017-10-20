---
layout: page
title: "Q159762: MSB Human: ErrMsg: MIDI Device Is in Use by Another ..."
permalink: /kb/159/Q159762/
---

## Q159762: MSB Human: ErrMsg: MIDI Device Is in Use by Another ...

{% raw %}

	Article: Q159762
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	- the operating system: Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Magic School Bus Explores the Human Body (MSB Human), you may
	encounter the following error in Microsoft Windows version 3.x:
	
	  MIDI device is in use by another application; the program will use system
	  speaker instead
	
	
	RESOLUTION
	==========
	
	Set the MIDI Mapper to use a valid MIDI device by doing the following:
	
	1. Open the Main group, double-click Control Panel, then double- click MIDI
	  Mapper.
	
	2. Click the Edit button.
	
	3. Click the first cell under the heading, "Port Name", then click the down
	  arrow that is displayed on the right portion of the cell.
	
	4. Click the FM Synth option listed in the drop down box (for example, Voyetra
	  OPL FM Synth).
	
	5. Repeat steps 3 and 4 for each of the remaining 16 channels.
	
	6. Make sure that each of the cells in the Patch Map column are set to [None].
	  If they are not, set them as such.
	
	7. Click OK. Then click Yes to confirm save.
	
	8. Click Close to close the MIDI mapper.
	
	After following the steps listed above, you should be able to successfully run
	the application.
	
	MORE INFORMATION
	================
	
	If MSB Human queries the multimedia components of Windows for a valid MIDI
	device and does not receive confirmation, it may display the error message
	described above. Once a valid MIDI device is installed and enabled, MSB Human
	should run correctly.
	
	Additional query words: kids mskids msb msbhb frizz kbmm multimedia multi-media multi media msbhuman
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeProdSearch kbZNotKeyword6 kbZNotKeyword kbKidsSearch kbScholasticHuman kbOSWin310 kbOSWin311 kbOSWin300 kbOSWin300a kbMSBSearch
	Version           : WINDOWS:1.0,3.x
	
	=============================================================================
	

{% endraw %}
