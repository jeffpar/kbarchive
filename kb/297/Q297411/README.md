---
layout: page
title: "Q297411: Resolving the Duplicate Tile issue with MSN Explorer (MSN Versio"
permalink: /kb/297/Q297411/
---

## Q297411: Resolving the Duplicate Tile issue with MSN Explorer (MSN Versio

	Article: Q297411
	Product(s): The Microsoft Network
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user installs MSN Explorer and sets up an MSNIA account. The user cancels the
	original MSNIA account through Customer Service, and then wants to set up
	another MSNIA account in MSN Explorer. As the first account has been cancelled,
	the user cannot sign in to an account in order to delete it. In addition, the
	auto-dialer is still set to connect the user to the cancelled MSNIA account.
	
	CAUSE
	=====
	
	A user has a new account set up at a retail store, comes home, and sets up a
	different account.
	
	RESOLUTION
	==========
	
	Set up the original account and remove the expired account from MSN Explorer
	(MSN Version 6.1).
	
	1. Follow the instructions in Knowledge Base article Q294853 to create a manual
	  connection and change the default connection in Internet Options, but do not
	  change the connection settings in MSN Explorer.
	
	2. Start MSN Explorer.
	
	3. Click Connection Settings.
	
	4. Click Change how you connect to the internet, and then click Continue.
	
	5. Click Existing Internet Service Provider, and then click Continue.
	  This should return you to the Welcome (sign-in) screen.
	
	6. Press Ctrl+Shift+F12.
	  A new box should appear.
	
	7. Select Clear all dialing credentials, and then click OK.
	
	8. Click Add New User in the upper-right section of the Welcome screen.
	  A connection box appears.
	
	9. Type the user name and password for the account that is still active, and
	  then click OK.
	
	10. Once connected, select I have an msn.com e-mail address, and then click
	  Continue.
	
	11. Type the user name and password for the account that is still active, and
	  then click Continue.
	
	12. On the member agreement page, click I accept, and then click Continue.
	  A message appears stating that MSN Explorer has detected that the account is
	  an MSN Internet Access account.
	
	13. Click Yes.
	  MSN Explorer will now sign you in.
	
	14. Click Help And Settings, click Accounts, and then click Remove Users.
	
	15. Click Remove next to the tile for the account that you cancelled.
	  A message appears asking if you are "sure you want to delete the account?".
	
	16. Click OK, and then click Sign out.
	
	17. On the Welcome screen, click Connection Settings.
	
	18. Click Change how to connect to the Internet, and then click Continue.
	
	19. Select MSN dial-up Internet Access, and then click Continue.
	
	20. Verify the dialing options, and then click Continue.
	  A list of the local access numbers in your area appears.
	
	21. Select Use beside each local number, and then click Continue.
	  You are now configured to use MSN Internet Access with the original account.
	
	Note: Be sure to delete the connection file you created created manually; you no
	longer need this file.
	
	To delete the manual connection file
	
	1. Double-click the My Computer icon.
	
	2. Double-click the Dial-up Networking icon (or for Windows ME and Windows 2000,
	  click the Dial-up Networking link).
	
	3. Right-click the dial-up connection that was created earlier and click Delete.
	
	4. When prompted "are sure you want to delete the connection", click Yes.
	
	You should also add any secondary accounts you may have deleted in the procedure
	above.
	
	To add accounts to MSN Explorer
	
	1. Start MSN Explorer.
	
	2. In the upper-right corner of the Welcome screen, click Add New User.
	
	3. Follow the directions for adding a user tile.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN610
	Version           : :6.1
	Issue type        : kbprb
	
	=============================================================================
	
