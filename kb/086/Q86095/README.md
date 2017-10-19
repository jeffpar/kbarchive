---
layout: page
title: "Q86095: PC Win: MSMAIL.INI Entries in &#91;Custom Commands&#93;"
permalink: /kb/086/Q86095/
---

## Q86095: PC Win: MSMAIL.INI Entries in &#91;Custom Commands&#93;

	Article: Q86095
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
	
	This article lists and explains all the entries in the Microsoft Mail for
	Windows private profile, MSMAIL.INI, that are contained in the [Custom Commands]
	section.
	
	[Custom Commands]
	
	This section may contain any number of entries of complicated form. Each entry
	specifies a custom command that is installed into one of the Mail menus at run
	time. This section may appear both in the usual location, the MSMAIL.INI in your
	Windows directory, and in SHARED.INI in the directory pointer to by the
	SharedExtensionsDir entry of MSMAIL.INI. Here are a synopsis and a couple of
	examples of the [Custom Commands] entry format; a description of each subfield
	follows. Each entry must occupy a single line. Many sub fields are optional.
	
	tag=version;menu;name;position;DLL name;command;event map;status text;help
	file;help context;
	
	IC3=3.2;File;&Empty Wastebasket;13;EMPTYWB.DLL;1;;Purge messages from the
	wastebasket
	
	IC4=3.2;Help;&Out of Office;10;OOF.DLL;3;;Out of Office Email Notification
	
	  tag            Identifies the command to someone reading the INI
	                 file, but serves no other purpose.
	
	  version        Identifies the version of Mail with which the
	                 command is compatible; 3.2 is the current version.
	
	  menu           Names the menu to which the custom command should be
	                 added, such as File or Help.
	
	  name           The command name that is to appear on the menu. As
	                 usual, you may include an ampersand (&) just before
	                 the letter that is to serve as an ALT-key
	                 accelerator.
	
	  position       The zero-relative position within its menu at which
	                 the command should appear. -1 places the command at
	                 the end of the menu.
	
	  DLL name       Name or path of the DLL in which the custom command
	                 resides.
	
	  command        Command string passed as one of the parameters to
	                 the DLL entry point for the command.
	
	  event map      Sequence of up to 16 digits. Each can be 0 or 1,
	                 indicating that the DLL should be called for a
	                 specific event. Currently 3 events are defined; the
	                 rest are reserved and must be zero:
	
	                 The first digit means Mail start-up.
	                 The second digit means Mail exit.
	                 The third digit means the arrival of a new message.
	
	  status text    Text to be displayed in the Mail status bar when the
	                 user cursors to the command in the menu.
	
	  help file      Windows Help file to be invoked when the user
	                 presses F1 while the command is selected. Passed to
	                 the Windows Help program.
	
	  help context   Passed to the Windows Help program along with the
	                 Help file name. Use -1 (Help file index) if there is
	                 no specific entry in the Help file for this command.
	
	A more detailed description of custom command creation and installation can be
	found in the Microsoft Mail "Technical Reference."
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
