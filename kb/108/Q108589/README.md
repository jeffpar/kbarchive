---
layout: page
title: "Q108589: Flight Simulator 5.0 Manual Installation"
permalink: /kb/108/Q108589/
---

## Q108589: Flight Simulator 5.0 Manual Installation

{% raw %}

	Article: Q108589
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	kbsetup
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To manually install Flight Simulator, copy the contents of the disks, expand the
	files, and then run Setup.
	
	MORE INFORMATION
	================
	
	To manually install Flight Simulator, do the following:
	
	1. At the MS-DOS command prompt, type "cd\" (without the quotation marks) and
	  press ENTER.
	
	2. Type "md fltsim5" (without the quotation marks) and press ENTER.
	
	3. Type "cd\fltsim5" (without the quotation marks) and press ENTER.
	
	4. Insert disk 1 of Flight Simulator in your floppy disk drive and type "copy
	  <drive>:\*.*" (without the quotation marks) and press ENTER, where
	  <drive> is your floppy disk drive. For example, if your floppy disk
	  drive is drive A, type copy a:\*.*
	
	5. Insert disk 2 of Flight Simulator in your floppy disk drive and type "copy
	  <drive>:\*.*" (without the quotation marks) and press ENTER.
	
	6. Type "disk1" (without the quotation marks) and press ENTER. It will now
	  decompress some files.
	
	7. Type "disk2a" (without the quotation marks) and press ENTER. It will now
	  decompress more files.
	
	8. Type "disk2b" (without the quotation marks) and press ENTER. It will
	  decompress the rest of the files.
	
	9. Type "cd texture" (without the quotation marks) and press ENTER to switch to
	  the texture directory.
	
	10. Type "coast" (without the quotation marks) and press ENTER. It will generate
	  scenery textures.
	
	11. Type "cd.." (without the quotation marks) and press ENTER.
	
	12. Type "setup" (without the quotation marks) and press ENTER. This will start
	  the Flight Simulator setup process. Follow the on-screen prompts to set up
	  Flight Simulator.
	
	Additional query words: 5.00 flightsim fltsim dos fs5
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
