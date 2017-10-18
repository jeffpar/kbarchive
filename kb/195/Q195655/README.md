---
layout: page
title: "Q195655: HOWTO: How to Set a Screen Saver Through a System Policy"
permalink: kb/195/Q195655/
---

## Q195655: HOWTO: How to Set a Screen Saver Through a System Policy

	Article: Q195655
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The options that are available to system policies can be enhanced through
	incorporating user-defined .adm files. The following .adm file will add the
	ability to configure screen saver options through a system policy.
	
	MORE INFORMATION
	================
	
	This policy enables three options in the user-based portion of a policy:
	
	- The choice of screen saver.
	
	- Enabling the screen saver.
	
	- Enabling the password for the screen saver.
	
	The screen saver will use the Default Wait time of 15 minutes. To use this
	policy, perform the following steps:
	
	1. Enter the text below that is between the rows of hyphens (-) into a text file
	  and save it as Scrsave.adm in the Winnt\Inf folder.
	
	2. Open System Policy Editor and click Options and then click Policy Template.
	
	3. Add Scrsave.adm to the listed template files.
	
	4. The additional options will show under any user or group in the policy, with
	  a label of "Screen Saver Policies."
	
	Scrsave.adm <start>
	
	     CLASS USER
	
	     CATEGORY  !!Screen_Saver_Policy
	             POLICY !!Screen_Saver
	             KEYNAME "Control Panel\Desktop"
	                     PART !!Screen_Saver_Location EDITTEXT
	                     DEFAULT !!DEF_SCREEN_SAVER
	                     VALUENAME SCRNSAVE.EXE
	                     END PART
	             END POLICY
	             POLICY !!ENABLE_SCREEN_SAVER
	             KEYNAME "Control Panel\Desktop"
	                     VALUENAME ScreenSaveActive
	                     VALUEON "1" VALUEOFF "0"
	             END POLICY
	             POLICY !!ENABLE_Password
	             KEYNAME "Control Panel\Desktop"
	                     VALUENAME ScreenSaverIsSecure
	                     VALUEON "1" VALUEOFF "0"
	             END POLICY
	     END CATEGORY
	
	     [strings]
	     Screen_Saver_Policy="Screen Saver Policies"
	     Screen_Saver="Screen Saver"
	     ENABLE_SCREEN_SAVER="Enable Screen Saver"
	     Screen_Saver_Location="Enter the location of the Screen Saver"
	     DEF_Screen_Saver="%SYSTEMROOT%\system32\logon.scr"
	     ENABLE_Password=Enable Password
	
	Scrsave.adm <end>
	
	For setting the amount of system idle time after which the screen saver will
	start:
	
	In the CATEGORY !!Screen_Saver_Policy section add:
	
	  POLICY !!SCREEN_SAVER_IDLE_TIMEOUT
	  KEYNAME "Control Panel\Desktop"
	  VALUENAME ScreenSaveTimeout
	  VALUEON "600"
	  END POLICY
	
	In the [strings] section add:
	
	  SCREEN_SAVER_IDLE_TIMEOUT="Screen Saver Activation Timeout"
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q161334 Guide To Windows NT 4.0 Profiles and Policies (Part 1 of 6)
	
	  Q185589 Guide To Windows NT 4.0 Profiles and Policies (Part 4 of 6)
	
	For additional information, please also see the Windows 95 Resource Kit, pages
	518-524.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
