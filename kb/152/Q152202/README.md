---
layout: page
title: "Q152202: Dial-Up Networking Error 87"
permalink: /kb/152/Q152202/
---

## Q152202: Dial-Up Networking Error 87

	Article: Q152202
	Product(s): The Microsoft Network
	Version(s): 2.0,2.5,2.6
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you attempt to connect to MSN, The Microsoft Network, you may receive the
	following error message:
	
	  Unable to set the Internet phone number because of the following error:
	  Dial-Up Networking error 87 occurred.
	
	CAUSE
	=====
	
	This message can occur if you manually change the default access numbers.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	Method One
	----------
	
	MSN Version 1.x, 2.0
	
	1. On the MSN Sign-in screen, click Settings, and then click Access Numbers.
	
	2. In the Service Type box, click Internet and MSN, and then click Change to
	  select your primary and secondary numbers. Do not modify the phone numbers as
	  listed.
	
	3. Click OK, click OK again, and then attempt to connect to MSN.
	
	MSN Version 2.5, 2.6
	
	1. On the MSN Sign-in screen, click Settings.
	
	2. Next to the Phone Number, click Phone Book, select the access number nearest
	  to you, and then click OK.
	
	3. Click Backup Phone Number, and then click the access number nearest to you.
	
	4. Click OK, and then click OK again.
	
	Method Two
	----------
	
	Set up a connection in Dial-Up Networking, use it to connect to an MSN access
	number, and then use the MSN desktop icon to connect to the MSN service itself:
	
	1. Double-click My Computer, and then double-click Dial-Up Networking.
	
	2. Double-click Make New Connection, and then type a name for the connection.
	
	3. In the Select a Modem box, click your modem, and then click Next.
	
	4. Type the MSN access number (including area code) that you want to dial. You
	  can obtain your access number using these steps:
	
	  A. On the MSN Sign-in screen, click Settings.
	
	  B. Click MSN is my dial-up Internet access provider, and then click Access
	  Numbers.
	
	  C. In the Service Type box, click Internet and The Microsoft Network.
	
	  D. Click the Change button next to the Primary box.
	
	  E. Select your country, state/region, and city to find your access number.
	
	5. In the Country Code box, select your country, click Next, and then click
	  Finish. You should see a new connection icon for the connection you just set
	  up.
	
	6. Use the right mouse button to click the new connection, and then click
	  Properties.
	
	7. Click the Use country code and area code check box to clear it, and then
	  click Server Type.
	
	8. Make sure the server type listed at the top of the screen is PPP: Windows 95,
	  Windows NT 3.5, Internet.
	
	9. Make sure only the following items are selected:
	
	  - Log on to network
	
	  - Enable software compression
	
	  - TCP/IP
	
	10. Click TCP/IP Settings, and make sure only the following items are selected:
	
	  - Server assigned IP address
	
	  - Server assigned name server addresses
	
	  - Use IP header compression
	
	  - Use default gateway on remote network
	
	11. Click OK until all dialog boxes are closed.
	
	To use the new connection to connect to MSN, follow these steps:
	
	1. Double-click the new connection in Dial-Up Networking.
	
	2. Type your MSN user name as MSN/<username>. NOTE: MSN must be in
	  uppercase letters, substitute your MSN Member ID for <username>.
	
	3. Type your MSN password.
	
	4. Verify that the phone number is present, including any code needed to access
	  an outside line. If it is not, click Cancel, use the right mouse button to
	  click the connection icon, click Properties, and then type the phone number.
	
	5. Click Connect.
	
	6. When the connection is established, double-click the MSN icon on the desktop,
	  and then click Settings.
	
	7. Click the Connect using another dial-up Internet access provider option,
	  click OK, and then click Connect.
	
	If these steps do not resolve the issue, use the following steps:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type phone.pbk, and then click Find Now.
	
	3. In the list of found files, right-click the Phone.pbk file, and then click
	  Delete.
	
	4. Close the Find: Files named phone.pbk window, click Start, and then click
	  Run.
	
	5. In the Open box, type signup.exe, and then click OK.
	
	6. Click the Click here if you are already a member of The Microsoft Network
	  check box to select it, and then click OK. This downloads a new phone book
	  file.
	
	7. Remove and then reinstall Dial-Up Networking. To do so, use the following
	  steps:
	
	  A. Click Start, point to Settings, and then click Control Panel.
	
	  B. Double-click Add/Remove Programs.
	
	  C. On the Windows Setup tab, click Communications, and then click Details.
	
	  D. Click the Dial-Up Networking check box to clear it, click OK until you
	  return to Windows, and then restart the computer.
	
	  E. Double-click Add/Remove Programs, and then on the Windows Setup tab, click
	  Communications, and then click Details.
	
	  F. Click the Dial-Up Networking check box to select it, click OK, and then
	  click OK again. Follow the instructions on the screen. You may be prompted to
	  insert your Windows 95 CD-ROM or floppy disks. When you are prompted to
	  restart the computer, click Yes.
	
	Additional query words: msn 1.20 1.30 2.00 2.50 2.60
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN200 kbMSN260 kbMSN250
	Version           : :2.0,2.5,2.6
	Issue type        : kbprb
	
	=============================================================================
	
