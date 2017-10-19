---
layout: page
title: "Q139741: Clicking MSN Icon Does Not Open Sign In Window"
permalink: /kb/139/Q139741/
---

## Q139741: Clicking MSN Icon Does Not Open Sign In Window

	Article: Q139741
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you sign out of MSN, The Microsoft Network, double-clicking the MSN icon
	on the desktop may not open the MSN Sign In screen.
	
	CAUSE
	=====
	
	MSN 1.0
	-------
	
	This behavior can occur if the Moscp.exe and Mapisp32.dll files are not closed
	when you sign out of MSN. There may also be two versions of Explorer running.
	
	MSN 2.0
	-------
	
	The MSN Sign In screen may no longer be associated with the MSN icon. This is
	often caused by incorrectly exiting from the MSN Program Viewer.
	
	RESOLUTION
	==========
	
	MSN 1.0
	-------
	
	To sign in to MSN again, follow these steps:
	
	1. Press the CTRL+ALT+DELETE key combination to open the Close Program dialog
	  box.
	
	2. If either of the files Moscp.exe and Mapisp32.dll are listed, click one of
	  these files and then click End Task.
	
	3. Repeat the above step for the other file.
	
	4. Double-click the MSN icon on the desktop to sign in to MSN.
	
	MSN 2.0
	-------
	
	To associate the sign in screen with the MSN icon, do the following:
	
	1. Sign in and then sign out of MSN using another program such as Postman.exe,
	  Inbox (click Deliver Now Using The Microsoft Network on the Tools menu in
	  Microsoft Exchange) or Onlstmnt.exe.
	
	2. Double-click the MSN icon on the desktop. The MSN Sign In screen should now
	  appear.
	
	If this method of association does not work, use Dial-Up Networking to connect to
	the Internet, and then double click the MSN icon on the desktop. The MSN Sign In
	screen now appears. After signing in using this method, sign out of MSN and
	disconnect from the Dial-Up Networking Internet connection. Double-click the MSN
	icon on the desktop. The MSN Sign In screen should now appear.
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN105 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3,2.0
	
	=============================================================================
	
