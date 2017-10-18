---
layout: page
title: "Q292743: Error Message: ERROR_PPP_TIMEOUT"
permalink: kb/292/Q292743/
---

## Q292743: Error Message: ERROR_PPP_TIMEOUT

	Article: Q292743
	Product(s): The Microsoft Network
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user may encounter an ERROR_PPP_TIMEOUT error message when trying to connect
	using MSN Explorer.
	
	CAUSE
	=====
	
	This issue occurs when a user creates a user tile in MSN Explorer through a
	LAN/DSL connection, and then tries to switch connection settings to the MSN
	Internet Access Dial-up Connection.
	
	RESOLUTION
	==========
	
	If this is the case, you will need to create a manual connection to get online,
	and then either contact MSN Internet Access Technical Support or delete a
	registry entry.
	
	To change the connection settings
	
	1. Launch MSN Explorer.
	
	2. On the Welcome screen, click Connection Settings.
	
	3. Click Change How to Connect to the Internet.
	
	4. Highlight the original dial-up connection that was created and click OK.
	
	5. Click OK again to return to the Welcome screen.
	
	6. Select your user tile, enter the password, and click OK.
	
	7. A Connect To box will now appear. In the text box labeled Enter your e-mail
	  name enter MSN/username (where username is the your user ID). In the text box
	  labelled Enter your password, enter the password, and click OK.
	
	Note: The following resolution is for expert users only. If you have not edited
	your registry keys before, please contact MSN Explorer Technical Support for
	assistance with the remainder of this procedure.
	
	To delete the MSN6 registry entry
	
	1. Exit MSN Explorer if running.
	
	2. From the Start menu, select Run.
	
	3. Type regedit and click OK. This will start the Registry Editor.
	
	4. Expand HKEY_CURRENT_USER.
	
	5. In the expanded list, expand Software.
	
	6. In the expanded list, expand Microsoft.
	
	7. In this list you should see MSN6. Right-click MSN6 and click Delete.
	
	8. In the dialog box that asks if you are sure you want to delete the registry
	  key, click Yes.
	
	9. Close the Registry Editor.
	
	10. Launch MSN Explorer.
	  This will start the sign-up as if this is the first time MSN Explorer has
	  been opened.
	
	11. Choose MSN Internet Access as your connection device and click Continue.
	
	12. You will receive a prompt asking if you need to create a new MSNIA account
	  or if you have an existing account. Choose Yes, I already get mail at
	  MSN.com.
	
	13. Enter your user name and password and continue to with the steps that
	  follow.
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN600
	Version           : :6.0
	Issue type        : kbhowto
	Solution Type     : kbfix
	
	=============================================================================
	
