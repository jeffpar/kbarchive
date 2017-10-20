---
layout: page
title: "Q86096: PC Win: MSMAIL.INI Entries in &#91;Custom Messages&#93;"
permalink: /kb/086/Q86096/
---

## Q86096: PC Win: MSMAIL.INI Entries in &#91;Custom Messages&#93;

{% raw %}

	Article: Q86096
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists and explains all the entries in the Microsoft Mail for
	Windows private profile, MSMAIL.INI, that are contained in the [Custom Messages]
	section.
	
	[Custom Messages]
	
	This section may contain any number of entries of complicated form, similar in
	many ways to the custom command section. Each entry specifies a custom message
	type that is installed into a Mail menu at run time. This section may appear
	both in the usual location MSMAIL.INI in your Windows directory and in
	SHARED.INI in the directory pointed to by the SharedExtensionsDir entry of
	MSMAIL.INI. Here are a synopsis and a couple of examples of the custom message
	entry format; a description of each sub field follows. Each entry must occupy a
	single line. Many subfields are optional.
	
	class=version;menu;name;position;DLL name;command;operation map;status text;help
	file;help context;
	
	  class           A string uniquely identifying the message type.
	                  Mail places this string in messages, and calls
	                  custom message DLLs based on its value.
	
	  version         Identifies the version of Mail with which the
	                  custom message is compatible; 3.2 is the current
	                  version.
	
	  menu            Names the menu to which the compose command for the
	                  message type should be added, such as File or Mail.
	
	  name            The command name that is to appear on the menu. As
	                  usual, you may include an ampersand (&) just before
	                  the letter that is to serve as an ALT-key
	                  accelerator.
	
	  position        The zero-relative position within its menu at which
	                  the command should appear. -1 places the command at
	                  the end of the menu.
	
	  DLL name        Name or path of the DLL in which the custom command
	                  resides.
	
	  command         Command string passed as one of the parameters to
	                  the DLL entry point for the command.
	
	  operation map   Sequence of up to 16 digits. Each can be 0, 1, or 
	                  2. 0 indicates that Mail should perform its
	                  standard operation on the custom message. 1
	                  indicates that the DLL should be called to handle
	                  the operation. 2 indicates that the operation
	                  should be completely disabled. Currently eight
	                  operations are defined; the rest are reserved and
	                  must be zero. In the following list, 0 is the
	                  leftmost digit:
	
	                  0  Compose (menu command defined in this entry)
	                  1  File.Open
	                  2  Mail.Reply
	                  3  Mail.Reply to All
	                  4  Mail.Forward
	                  5  File.Print
	                  6  File.Save as
	                  7  arrival of new mail
	
	  status text     Text to be displayed in the Mail status bar when
	                  the user cursors to the command in the menu.
	
	  help file       Windows Help file to be invoked when the user
	                  presses F1 while the command is selected. Passed
	                  to the Windows Help program.
	
	  help context    Passed to the Windows Help program along with the
	                  Help file name. Use -1 (Help file index) if there
	                  is no specific entry in the Help file for this
	                  command.
	
	A more detailed description of custom message creation and installation can be
	found in the Microsoft Mail "Technical Reference."
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
