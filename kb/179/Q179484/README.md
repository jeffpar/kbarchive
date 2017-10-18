---
layout: page
title: "Q179484: Cannot Update the List of MSN 2.5 Access Telephone Numbers"
permalink: kb/179/Q179484/
---

## Q179484: Cannot Update the List of MSN 2.5 Access Telephone Numbers

	Article: Q179484
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Signup.exe or change connection settings for MSN, The Microsoft
	Network, the list of MSN access telephone numbers may not be updated.
	
	CAUSE
	=====
	
	This behavior can occur if the Msn.cms file contains an incorrect entry.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "msn.cms" (without quotation marks), and then click
	  Find Now.
	
	3. Double-click the Msn.cms file.
	
	4. In the "Choose the program you want to use" box, double-click Notepad.
	
	5. In the [Connection Manager] section of the file, change the "Version=" line
	  to read:
	
	  "Version=0" (without the quotation marks)
	
	6. On the File menu, click Save.
	
	7. Quit Notepad.
	
	8. Close the Find: Files Named Msn.cms dialog box.
	
	9. Click Start, and then click MSN or The Microsoft Network. The list of access
	  telephone numbers is automatically updated after the connection is idle for
	  45 seconds.
	
	MORE INFORMATION
	================
	
	For additional information about how to update your phone book, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q140523 How to Update Phone Number List for MSN and the Internet
	
	  Q149547 Phonebook Automatically Updated with MSN 1.3 or Higher
	
	Additional query words: msnet msnetwork sign up sign-up
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbMSNSearch kbMSN250
	Version           : WINDOWS:2.5
	
	=============================================================================
	
