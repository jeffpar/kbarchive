---
layout: page
title: "Q177305: Using the Current User Name and Password Option in RAS"
permalink: /kb/177/Q177305/
---

## Q177305: Using the Current User Name and Password Option in RAS

	Article: Q177305
	Product(s): Microsoft Windows NT
	Version(s): Winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dial-up networking gives a user the ability to use the password and the name of
	the current user to connect to a Windows NT Remote Access Server.
	
	On computers running Windows NT Workstation or on stand-alone servers configured
	to use dial-up networking, it is often desirable to use the current user name
	and password for a phonebook entry. This option exists when the phonebook entry
	is configured to accept only Microsoft encrypted authentication.
	
	MORE INFORMATION
	================
	
	The "Use current username and password" option in a phonebook entry has the
	following advantages:
	
	1. It causes the credentials entered at CTRL+ALT+DEL logon to be used for the
	  RAS connection. This eliminates the need for the user to enter logon
	  credentials after either logging on using cached account information, or
	  reconnecting to the domain.
	
	2. This setting eliminates the need to log off and then log on again after you
	  change the domain account password through RAS. With this feature enabled,
	  locally stored account information will be updated, even if the user logged
	  on is using cached account information.
	
	NOTE: You can disable storing locally cached account information.
	
	For more information, see the following article in the Microsoft Knowledge Base:
	
	ARTICLE-ID: Q172931
	TITLE : Cached Logon Information
	
	Assuming a phonebook entry already exists, you can use the following steps to
	enable the feature:
	
	1. Open dial-up networking. With the correct phonebook entry selected, click the
	  More button.
	
	2. Choose Edit entry and modem properties.
	
	3. From the Edit Phonebook Entry screen, select the Security tab.
	
	4. Click Accept only Microsoft encrypted authentication.
	
	5. Place a check in the Use current username and password box.
	
	6. Click OK.
	
	For more information on dial-up networking, see the Windows NT resource kit or
	Windows NT help.
	
	Additional query words: profile howto remote access service
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : Winnt:4.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
