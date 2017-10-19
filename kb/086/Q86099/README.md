---
layout: page
title: "Q86099: PC Win: MSMAIL.INI Entries in &#91;Custom Menus&#93;"
permalink: /kb/086/Q86099/
---

## Q86099: PC Win: MSMAIL.INI Entries in &#91;Custom Menus&#93;

	Article: Q86099
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists and describes all the entries in the Microsoft Mail for
	Windows private profile, MSMAIL.INI, that are contained in the [Custom Menus]
	section.
	
	[Custom Menus]
	
	This section may contain any number of entries (within reason). Each entry
	specifies a menu name to be added to the Mail menu bar. You can use these menus
	to group custom commands and/or messages under a single, distinctive menu item.
	This section may appear both in the usual location, MSMAIL.INI in your Windows
	directory, and in SHARED.INI in the directory pointed to by the
	SharedExtensionsDir entry of MSMAIL.INI. Below is a synopsis of the custom
	command entry format, followed by two examples. A description of each subfield
	follows. Each entry must occupy a single line. Many subfields are optional.
	
	Custom Command Entry Format
	---------------------------
	
	  tag=version;name;name to follow;status text
	
	  tools=3.2;&Tools;Window;Useful development toys
	
	  Subfield        Description
	  ----------------------------------------------------------------------
	
	  tag             Identifies the command to someone reading the INI file,
	                  but serves no other purpose.
	
	  version         Identifies the version of Mail with which the command is
	                  compatible; 3.2 is the current version.
	
	  name            The menu name to be added to the menu bar. As usual, you
	                  may include an ampersand (&) just before the letter that
	                  is to serve as an ALT+<key> accelerator.
	
	  name to follow  Name of an existing menu. The new menu will be added
	                  directly after it.
	
	  status text     Text to be displayed in the Mail status bar when the
	                  user cursors to the menu.
	
	Additional query words: 3.00 3.00b 3.20 Custom Menus
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
