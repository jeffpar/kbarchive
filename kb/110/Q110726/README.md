---
layout: page
title: "Q110726: PC Win: Summary List of Mail for Windows 3.2 Bug Fixes"
permalink: /kb/110/Q110726/
---

## Q110726: PC Win: Summary List of Mail for Windows 3.2 Bug Fixes

{% raw %}

	Article: Q110726
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	The following is a list of bugs fixed in version 3.2 of Microsoft Mail for
	Windows. This is not a comprehensive list; this list is current as of
	January 1, 1994.
	
	For more information on the fix listed, query in the Microsoft Knowledge
	Base on the article ID.
	
	PROBLEMS FIXED IN VERSION 3.2
	-----------------------------
	
	- Name Finder Fails If Space Before Name
	
	- Extended Characters Not Supported in .MMF Filename
	
	- GP Fault During Setup When Installing Only Spelling
	
	- Import/Export Does Not Work with Extended Characters
	
	- Send Mail Command Doesn't Support Extended Characters
	
	- Failure to Connect to SHARED.INI Skips MSMAIL.INI
	
	- Err Msg: Mail System Error. Mail Could Not Read...
	
	Name Finder Fails If Space Before Name
	--------------------------------------
	
	  Q95731
	
	
	In version 3.0 or 3.0b of Microsoft Mail for Windows, if the friendly name
	is defined as [space]Name or [space]LastName,[space]FirstName, the name
	appears at the top of the address list, but using Name Finder to search for
	that name fails.
	
	Extended Characters Not Supported in .MMF Filename
	--------------------------------------------------
	
	  Q104029
	
	Extended characters are not supported in .MMF filenames in the following
	areas of versions 3.0 and 3.0b of Microsoft Mail for Windows:
	
	
	- The Backup command on the Mail menu.
	
	- The Open Message File dialog box. (You can enter an .MMF filename with
	  extended characters, or select an .MMF filename with extended characters from
	  the list box, but Mail cannot open the .MMF file.)
	
	- Mail invoked with the /f parameter (that is, MSMAIL /F NAME.MMF, where
	  NAME.MMF is a filename with extended characters). In this case, Mail cannot
	  open the .MMF file.
	
	GP Fault During Setup When Installing Only Spelling
	---------------------------------------------------
	
	  Q104106
	
	If you specify the Custom Install option during the Setup process of
	version 3.0 or 3.0b of Microsoft Mail for Windows, and you choose to
	install only the spelling drivers, the following error occurs:
	
	  Could not open the file named: C:\WINDOWS\SYSTEM\TRNSCHED.DLL
	  Choose Abort and click Yes to exit. Re-run SETUP.EXE.
	
	
	This error results in a general protection (GP) fault in MSCOMSTF.DLL
	@002D:001A.
	
	
	
	Import/Export Does Not Work with Extended Characters
	----------------------------------------------------
	
	  Q104130
	
	Version 3.0b of Microsoft Mail for Windows does not correctly import
	or export a folder with an extended character (such as the letter O
	with two dots above it) in the filename. The folder appears to be saved
	correctly, but the filename is not converted properly.
	
	Send Mail Command Doesn't Support Extended Characters
	-----------------------------------------------------
	
	  Q104134
	
	Versions 3.0 and 3.0b of Microsoft Mail for Windows do not support sending
	files with extended characters in the filename through the Windows 3.0 or
	3.1 File Manager.
	
	Failure to Connect to SHARED.INI Skips MSMAIL.INI
	-------------------------------------------------
	
	  Q105961
	
	In versions 3.0 and 3.0b of Microsoft Mail for Windows, if you start
	up Mail offline (not on the network) with the Mail message file (MMF)
	stored locally, no shared extensions commands are available if the
	SHARED.INI file cannot be found.
	
	Err Msg: Mail System Error. Mail Could Not Read...
	--------------------------------------------------
	
	  Q107756
	
	In versions 3.0 and 3.0b of Microsoft Mail for Windows, you may receive an
	unreadable message. The header information is correct (To: From: and
	Subject: fields) but the text indicates a MAIL SYSTEM ERROR. The error
	message states:
	
	  Mail could not read the entire message from the postoffice. Some parts of the
	  message may be missing. Ask the sender to resend the message.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
