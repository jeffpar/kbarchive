---
layout: page
title: "Q156472: Incorrect Error on Dial-In Only Server"
permalink: kb/156/Q156472/
---

## Q156472: Incorrect Error on Dial-In Only Server

	Article: Q156472
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message can appear on a dial-in only RAS server:
	
	  The xxxx protocol can not be selected because it is not installed or it is
	  disabled for Remote Access. To change, in Control Panel start Network, choose
	  Services page, Remote Access Properties, and press the Network button.
	
	This error message is incorrect.
	
	CAUSE
	=====
	
	If you configure a RAS server for dial-in only, start Dial-Up Networking (to
	dial out), and select a protocol under the server tab (independent of the
	dial-up server type chosen), you get an error message incorrectly saying that
	you don't have the protocol installed or you don't have the protocol enabled for
	RAS.
	
	Because dial-out is disabled on the computer, the error message should be
	something like the following (which you might see if the Dial-Up Networking tool
	is started from Accessories):
	
	  This server is configured to be a dial-in only server. You cannot use phone
	  book to configure dial-out options. Please contact your administrator for
	  more information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: prodnt RAS
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
