---
layout: page
title: "Q89872: Control Panel Changes Have No Effect with Proof Reader, 1-2-3"
permalink: /kb/089/Q89872/
---

## Q89872: Control Panel Changes Have No Effect with Proof Reader, 1-2-3

	Article: Q89872
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Windows Sound System Proof Reader with Lotus 1-2-3 for Windows, any
	changes you make to the International option in Control Panel have no effect
	when you proofread a spreadsheet.
	
	MORE INFORMATION
	================
	
	You can use the International option in Control Panel to specify international
	settings for country, language, keyboard layout, and system of measurement. When
	you select a country, Windows adjusts the date, time, currency, and number
	formats to reflect those used by the selected country (these settings are saved
	in the WIN.INI file). Lotus 1-2-3 for Windows does not review these changes
	before starting, and therefore is not aware of them.
	
	1-2-3 provides a way of handling internationalization (dates and times only) by
	using the Format command on the Range menu. Set the format for a cell to be the
	type found in this menu selection, then it should proofread accordingly.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
