---
layout: page
title: "Q138028: PPT: Inserted Media Player Object Is Linked, Not Embedded"
permalink: /kb/138/Q138028/
---

## Q138028: PPT: Inserted Media Player Object Is Linked, Not Embedded

	Article: Q138028
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0,7.0
	Operating System(s): 
	Keyword(s): kbole kbusage kbdta
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you insert any type of media clip into a PowerPoint presentation using
	Media Player, the media clips are linked, not embedded.
	
	Some types of media clips you can control through Media Player are:
	
	  MIDI (.mid, .rmi) files
	  CD-Audio clips
	  Sound (.wav) files
	  AutoDesk Animations (.fli, .flc)*
	  Corel Movie (.mov) files*
	  Video for Windows (.avi) files
	  Microsoft MultiMedia Movies (.mmm)*
	
	* The types marked with an asterisk require software drivers that do not ship
	with PowerPoint for Windows.
	
	MORE INFORMATION
	================
	
	PowerPoint links media clips by design. Certain media types do not have files to
	embed (CD-Audio clips, for example). The only information that Media Player does
	embed is the Media Control Interface (MCI) controls for the multimedia device.
	
	If PowerPoint cannot find a linked Media Player file while attempting to edit or
	run the presentation, PowerPoint asks you to locate the file. If you want to
	send your presentation to someone else, you must include all the linked files in
	order for them to play.
	
	Additional query words: ppt7 ppt95 locate find error embedding powerpt ppt
	
	======================================================================
	Keywords          : kbole kbusage kbdta 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt300
	Version           : WINDOWS:3.0,4.0,7.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
