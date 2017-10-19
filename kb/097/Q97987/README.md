---
layout: page
title: "Q97987: PC WRmt: Font Changes Make Some Text Unreadable"
permalink: /kb/097/Q97987/
---

## Q97987: PC WRmt: Font Changes Make Some Text Unreadable

	Article: Q97987
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the fonts used by Microsoft Windows in the [FontSubstitutes]
	section of the WIN.INI file, text in version 3.2 of Microsoft Mail Remote for
	Windows may become unreadable.
	
	RESOLUTION
	==========
	
	The only valid option is to leave the values in [FontSubstitutes] at the default
	settings.
	
	MORE INFORMATION
	================
	
	The default settings of the [FontSubstitutes] section of the WIN.INI file are:
	
	  [FontSubstitutes]
	  Helv=MS Sans Serif
	  Tms Rmn=MS Serif
	  Times=Times New Roman
	  Helvetica=Arial
	
	This is the only setting that was used by testing for validating text. While you
	can change these settings, some text will not be readable. You must revert to
	the default settings to view all the text for Mail Remote for Windows.
	
	Additional query words: 3.20 dialog
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
