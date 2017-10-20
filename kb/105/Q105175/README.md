---
layout: page
title: "Q105175: PC Win: Err Msg: Mail Failed to Relocate Your Message File"
permalink: /kb/105/Q105175/
---

## Q105175: PC Win: Err Msg: Mail Failed to Relocate Your Message File

{% raw %}

	Article: Q105175
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0, 3.0b, and 3.2 of Microsoft Mail for Windows, when a user tries
	to move the Mail message file (MMF) from the postoffice to the local computer
	(or vice versa), the following error message may be displayed:
	
	  Mail failed to relocate your message file
	
	This error message may occur if there is insufficient free disk space on the
	target drive or if the MSMAIL.INI file is marked as Read Only.
	
	RESOLUTION
	==========
	
	If there is insufficient disk space, you can resolve the problem by freeing disk
	space on the target drive.
	
	If the MSMAIL.INI file is marked as Read Only, simply changing the properties of
	the MSMAIL.INI file will not resolve the problem. After changing the properties
	of the MSMAIL.INI file, another error message will be displayed the next time
	the user logs into the Windows client:
	
	  Your message file could not be found
	
	The user is then prompted for the location of an .MMF file.
	
	Mail for Windows uses the MSMAIL.INI file to write intermediate information while
	the .MMF file is being transferred. Because the MSMAIL.INI file is marked Read
	Only, this information cannot be written and hence the error occurs. Even though
	the .MMF file was not relocated, the ACCESS3.GLB file was changed to reflect the
	intended new location.
	
	If the .MMF file is on the postoffice, perform the following steps:
	
	1. Determine the user's 8-digit ID number. You can determine this number in one
	  of two ways:
	
	   - Use USRDUMP.EXE or LISTUSER.EXE.
	
	   - Log in to the MS-DOS client and move the user's folders to
	     Private-Storage. This creates an .IDX file with the same filename as the
	     user's 8-digit ID. After the user's ID has been determined, the user's
	     private folders should be moved back to the server.
	
	2. Copy the user's .MMF file (<user's 8 digit ID>.MMF) from the MMF
	  directory on the postoffice to the user's local computer.
	
	  The exact location of the .MMF file is now known.
	
	3. Start Microsoft Mail. After the user signs in, the following error message is
	  displayed:
	
	  Your Message file could not be found
	
	  The Open Message File dialog box will then be displayed.
	
	4. Select the correct .MMF file.
	
	The user should now be able to move the .MMF file to or from local storage.
	
	MORE INFORMATION
	================
	
	The LISTUSER utility is included as part of the Database Maintenance Utilities
	document. To obtain these utilities, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
