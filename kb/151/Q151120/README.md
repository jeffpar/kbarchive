---
layout: page
title: "Q151120: NT: Only First User or Administrator Can Run Program"
permalink: /kb/151/Q151120/
---

## Q151120: NT: Only First User or Administrator Can Run Program

{% raw %}

	Article: Q151120
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 500 Nations, version 1.0 
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions 
	- Microsoft Complete Gardening for Windows, version 1.0 
	- Microsoft Dogs for Windows, version 1.0 
	- Microsoft Reader's Digest Complete Do-It-Yourself Guide for Windows, version 1.0 
	- Microsoft Music Central for Windows, 1996, 1997 edition 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The second user who attempts to run any of the programs listed at the top of
	this article on Microsoft Windows NT Workstation, version 3.51 receives an error
	message.
	
	For example, the first user can run the program successfully. The Administrator,
	or any other users with 'Administrative' rights is also to run the program.
	However, other Users, Power Users, etc., are not be able to run the program.
	Error messages may include the following:
	
	  
	
	  MSCNTR96
	  The Registry settings for Music Central have become corrupted. To
	  fix this, restart Music Central.
	
	  Microsoft Complete Gardening
	  Unable to find file, please insert CD and/or check registry
	  settings, then hit OK to try again.
	
	  Microsoft Complete Gardening
	  Insufficient memory for Microsoft Complete Gardening
	  to function properly. Please close other applications or
	  documents.
	
	  Complete Do-It-Yourself Guide
	  A Complete Do-It-Yourself Guide internal error
	  occurred. Please close, and then restart the
	  program.
	
	500 Nations and Dogs 1.0a:
	
	  
	
	  Microsoft Home logo appears, then disappears. The program does not
	  start.
	
	CAUSE
	=====
	
	The Music Central README says to log on as Administrator to install the program.
	This is not accurate.
	
	You should log on as the person who is going to be using the program.
	
	Only the user who first uses the program, the Administrator, and other users with
	Administrator rights can run the program. Users without Administrator rights can
	NOT run it.
	
	
	RESOLUTION
	==========
	
	To allow a different User to access the program, do the following:
	
	1. The user who first installed the program, or any user with 'Administrative'
	  rights, should uninstall the program. Instructions for this process are
	  included in the Readme file for the program.
	
	2. Log in as the user who is going use the program.
	
	3. Run the program to install it.
	
	This allows the installing user, plus any users with 'Administrative' rights, to
	run the program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Multimedia
	products listed at the top of this article. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	There is no currently known way to enable all non-administrative users to use
	the program.
	
	Additional query words: 96 1996 multi media multimedia multi-media mmtitles kbmm NOSETUP
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeProdSearch kbOSWinNT351 kbHomeMMsearch kbZNotKeyword kbCineManiaSearch kbOSWinNTSearch kb500Nations100 kbCompleteGardening kbDogs100 kbMusicCentral kbMusicCentral1996 kbMusicCentral1997 kbDoItYourself
	
	=============================================================================
	

{% endraw %}
