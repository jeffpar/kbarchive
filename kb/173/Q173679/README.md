---
layout: page
title: "Q173679: MSN Sign In Screen Does Not Appear"
permalink: kb/173/Q173679/
---

## Q173679: MSN Sign In Screen Does Not Appear

	Article: Q173679
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbenv kbtlckbfaq
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, The Microsoft Network, or start Microsoft
	Internet Explorer, the MSN Sign In screen may not appear. Your computer attempts
	to connect to the Web site and you may receive an error message similar to the
	following:
	
	  Internet Explorer cannot open the Internet site http://onstage.msn.com
	
	CAUSE
	=====
	
	MSN and Internet Explorer may no longer be associated with Dial-Up Networking.
	
	RESOLUTION
	==========
	
	To resolve this issue, re-create the association between MSN and Dial-Up
	Networking. To do so, use one of the following methods:
	
	Method 1
	--------
	
	1. Double-click My Computer.
	
	2. Double-click Dial-Up Networking.
	
	3. Double-click the The Microsoft Network connection.
	
	4. Type your MSN Member ID in the User Name box. You must include "MSN/" before
	  your Member ID when you connect to MSN using Dial-Up Networking. For example,
	  type:
	
	  "MSN/<MSN MemberID>" (without the quotation marks)
	
	5. Type your MSN password in the Password box. You must type all letters in the
	  password lowercase letters.
	
	6. Click Connect.
	
	7. After you are connected to MSN, double-click the MSN icon on the desktop to
	  start Program Viewer. Log off the MSN connection (be sure to click Disconnect
	  in the Connected To The Microsoft Network dialog box), and then attempt to
	  connect to MSN again using your normal sign in procedure.
	
	If the MSN Sign In screen still does not appear, use the following steps:
	
	1. Right-click the The Internet icon on the desktop, and then click Properties.
	
	2. On the Connection tab, under Dialing, click the "Connect to the Internet as
	  needed" check box to select it.
	
	3. In the "Use the following Dial-Up Networking connection" box, click The
	  Microsoft Network.
	
	4. Click OK.
	
	5. Attempt to connect to MSN using your normal sign in procedure.
	
	Method 2
	--------
	
	1. Double-click the Inbox icon on the desktop.
	
	2. On the Tools menu, point to Deliver Now Using, and then click The Microsoft
	  Network.
	
	3. Click Connect.
	
	4. After checking for new messages, Microsoft Exchange closes and then
	  disconnects from MSN.
	
	5. Attempt to connect to MSN using your normal sign in procedure.
	
	Method 3
	--------
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "onlstmt.exe" (without the quotation marks).
	
	3. Click Find Now.
	
	4. Double-click the Onlstmt.exe file in the list of found files.
	
	5. Click Connect.
	
	6. When the Online Statement window opens, click Close.
	
	7. When you are prompted to disconnect from MSN, click No.
	
	8. Double-click the MSN icon on the desktop to start Program Viewer. Log off the
	  MSN connection and then attempt to connect to MSN again using your normal
	  sign in procedure.
	
	MORE INFORMATION
	================
	
	If none of the above methods resolves the issue, Program Viewer or its controls
	may be damaged and must be replaced. To do so, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click MSN Program Viewer Controls, and then
	  click Add/Remove.
	
	4. On the Install/Uninstall tab, click MSN Program Viewer, and then click
	  Add/Remove.
	
	5. Restart the computer.
	
	6. Insert the MSN 2.0 CD-ROM into the CD-ROM drive. If the Welcome To MSN Setup
	  window appears, close it.
	
	7. Double-click My Computer.
	
	8. Right-click the CD-ROM drive, and then click Explore.
	
	9. Double-click the Msnsetup folder.
	
	10. Double-click the Compnts folder.
	
	11. Double-click the Coreui.exe file. Follow the instructions on the screen, and
	  accept all default settings.
	
	12. Double-click the Newcore.exe file.
	
	13. Double-click the Controls.exe file. Follow the instructions on the screen,
	  and accept all default settings.
	
	14. If you are prompted to restart the computer, click Yes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtlc kbfaq
	Technology        : kbMSNSearch kbMSN200
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
