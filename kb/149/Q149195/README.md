---
layout: page
title: "Q149195: Err Msg:  Could Not Connect.  Invalid Member ID or Password"
permalink: kb/149/Q149195/
---

## Q149195: Err Msg:  Could Not Connect.  Invalid Member ID or Password

	Article: Q149195
	Product(s): The Microsoft Network
	Version(s): 5.0,5.1,5.2
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtlc kbmsnkbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN versions 5.0, 5.1, 5.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, The Microsoft Network, you may receive any
	of the following error messages:
	
	  Invalid Member ID or Password.
	
	  Could not connect. The Member ID or Password is not valid.
	
	  The password is not valid. Please type it again.
	
	  The Member ID is not valid. Please make sure it is correct and try again.
	
	CAUSE
	=====
	
	This behavior can occur for any for the following reasons:
	
	- You may have typed your MSN Member ID or password incorrectly.
	
	- Dial-Up Networking uses your password file, <Username>.pwl, for
	  password validation. This file may be damaged.
	
	- The MSN connections in Dial-Up Networking may be damaged.
	
	- Dial-Up Networking may be damaged.
	
	- Your account may not be available because it is locked or it has expired.
	
	- MSN is temporarily unable to validate your account.
	
	RESOLUTION
	==========
	
	To resolve this issue, first retype your correct MSN Member ID and password in
	the MSN sign-in screen.
	
	NOTE: Your MSN Member ID does not include @msn.com. That is only used as part of
	your MSN e-mail address.
	
	If you continue to receive the error message, use the methods below in the order
	presented. After you complete each method, attempt to connect to MSN. If you are
	unable to connect to MSN, continue with the next method.
	
	Rename Password List Files
	--------------------------
	
	To eliminate password file problems, locate and then rename your password list
	file. The file is named <Username>.pwl, where as <Username> is the
	name you use to log on to MSN, and should be located in the Windows folder. To
	rename the file, follow these steps:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type *.pwl, and then click Find Now.
	
	3. Right-click your <Username.pwl> file, click Rename, and then type a new
	  name for the file, such as <Username.old>.
	
	  NOTE: If you are using a personal certificate, you should export it before
	  renaming your .pwl file. If you do not do so, it may be unavailable when you
	  send e-mail. For more information, see the following article in the Microsoft
	  Knowledge Base:
	
	  Q190296 Unable to Use Personal Certificatesin Outlook Express
	
	4. Double-click the MSN icon to open the sign-in screen.
	
	5. Click the Remember My Password check box to clear it.
	
	6. Type xxxxxxxx in the Member ID and Password boxes, and then click Connect. Do
	  not use your existing password.
	
	7. When you receive the Invalid member ID or password error message, click OK.
	
	8. Type your correct member ID and password in the Member ID and Password boxes,
	  and then click Connect.
	
	NOTE: If you have installed Microsoft Windows 95 Service Pack 1, password list
	files may be damaged even after you delete them and they are recreated
	automatically. To resolve this issue, obtain the Mspwlupd.exe update file and
	run it. You can obtain this update file from your MSN CD or from the following
	page on the Microsoft site on the World Wide Web:
	
	  http://www.microsoft.com/windows95
	
	Replace Damaged MSN Connections in Dial-Up Networking
	-----------------------------------------------------
	
	To replace damaged MSN connections for MSN 1.x or 2.0:
	
	1. Double-click My Computer, and then double-click Dial-Up Networking.
	
	2. Right-click an MSN connection, and then click Delete. Repeat this step until
	  all other MSN connections are deleted, and then close the Dial-Up Networking
	  window.
	
	3. Right-click the MSN icon on the desktop, and then click Connection Settings.
	
	4. Click Phone Book, and then select the appropriate primary and backup access
	  numbers for your region.
	
	5. Click OK until you return to Windows.
	
	To replace damaged MSN connections for MSN 2.5 or MSN 2.6:
	
	1. Double-click My Computer, and then double-click Dial-Up Networking.
	
	2. Right-click an MSN connection, and then click Delete. Repeat this step until
	  all other MSN connections are deleted, and then close the Dial-Up Networking
	  window.
	
	3. Right-click the MSN icon on the desktop, and then click Connection Settings.
	
	4. Click Phone Book, and then select the appropriate primary and backup access
	  numbers for your region.
	
	5. Click OK until you return to Windows.
	
	Remove and Reinstall Dial-Up Networking
	---------------------------------------
	
	There may be a problem with Dial-Up Networking. To remove and reinstall the
	Dial-Up adapter, follow these steps (Note that you will need the Windows CD-rom
	to reinstall the Networking components.):
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. On the Configuration tab, click Dial-Up Adapter, and then click Remove.
	
	4. Click OK, and then when you are prompted to restart the computer click Yes.
	
	5. Click Start, point to Settings, then click Control Panel.
	
	6. In Control Panel, double-click Network, and then on the Configuration tab,
	  click Add.
	
	7. In the Select Network Component Type dialog box, click Adapter, and then
	  click Add.
	
	8. In the Manufacturers box, click Microsoft.
	
	9. In the Network Adapters box, click Dial-Up Adapter, and then click OK.
	
	10. In the Select Network Component Type dialog box, click Protocol, and then
	  click Add.
	
	11. In the Manufacturers box, click Microsoft. Then, in the Network Adapters
	  box, click TCP/IP, and then click OK.
	
	12. On the Configuration tab, double-click Dial-Up Adapter.
	
	13. On the Bindings tab, make sure TCP/IP -> Dial-Up Adapter is the only
	  protocol selected. If any other protocol is selected, click the check box to
	  the left of the protocol to clear it.
	
	14. Click OK, and then click OK again.
	
	15. When you are prompted to restart the computer, click Yes.
	
	NOTE: For more information about how to remove and reinstall the Dial-Up Adapter
	for MSN, please see the following article in the Microsoft Knowledge Base:
	
	  Q173088 How to Remove and Reinstall the Dial-Up Adapter for MSN
	
	Account Is Locked or Expired
	----------------------------
	
	MSN may be unable to verify your account information. Your account may have
	expired or have been locked.
	
	For answers to questions about accounts and billing, contact MSN Customer Service
	at (800) 386-5550.
	
	NOTE: If your credit card has expired, your MSN account is automatically locked
	and you must contact MSN Customer Service to supply your new credit card number
	or expiration date.
	
	
	MSN Is Temporarily Unable to Validate Your Account
	--------------------------------------------------
	
	If MSN is temporarily unable to validate your account, please try again later.
	
	
	Additional query words: msn kbimu
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtlc kbmsn kbfaq
	Technology        : kbMSNSearch kbMSN520 kbMSN510 kbMSN500
	Version           : :5.0,5.1,5.2
	Issue type        : kbprb
	
	=============================================================================
	
