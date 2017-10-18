---
layout: page
title: "Q97078: PC WRmt: New MMF Created in Apparently Incorrect Location"
permalink: kb/097/Q97078/
---

## Q97078: PC WRmt: New MMF Created in Apparently Incorrect Location

	Article: Q97078
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Mail Remote version 3.2 for Windows cannot locate your message
	store file (MSMAIL.MMF), it automatically creates a new message store file. Mail
	prompts for the file name and location. The initial prompt shown is based on the
	file location in the OfflineMessages parameter in the MSMAIL.INI file in your
	Windows directory (by default, C:\WINDOWS).
	
	If you change to a new directory in the prompt dialog box, Mail creates the file
	in the directory it originally displayed and ignores the change of the directory
	location for the message store file.
	
	CAUSE
	=====
	
	Even though this behavior appears to create the file in an incorrect location,
	Mail is designed to perform in this manner.
	
	MORE INFORMATION
	================
	
	Perform the following three steps to demonstrate this behavior.
	
	1. Delete your MMF and edit your MSMAIL.INI file to indicate a different
	  location for the OfflineMessages parameter. In this example, store the file
	  in the C:\NEW directory, as follows:
	
	  [Microsoft Mail]
	  OfflineMessages=C:\NEW\MSMAIL.MMF
	
	2. Start Mail. As expected, Mail displays the "Your message file could not be
	  found" message and displays the Open Message File dialog box. The current
	  directory in the message box is C:\NEW.
	
	3. In the Directory list box, change the directory to a different directory, for
	  example, to C:\DOS. Then choose New.
	
	Mail creates the MSMAIL.MMF file in the C:\NEW directory rather than in the
	C:\DOS directory as you chose in the Open Message File dialog box. The
	OfflineMessages setting in the edited MSMAIL.INI file remains (as C:\NEW in this
	example). You might expect Mail to create MSMAIL.MMF in the C:\DOS directory.
	
	Each Mail version 3.x for Windows client acts in the same manner with respect to
	the OfflineMessages setting and creating the MMF file.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
