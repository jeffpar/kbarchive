---
layout: page
title: "Q121891: Windows 95 Adds a Preceding &quot;1&quot; If Area Codes Are Different"
permalink: /kb/121/Q121891/
---

## Q121891: Windows 95 Adds a Preceding &quot;1&quot; If Area Codes Are Different

	Article: Q121891
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.00 95
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui dun win95 msnetwork kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- The Microsoft Network version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following Windows 95 tools place the number "1" at the beginning of a number
	to be dialed if the number has a different area code than your default area
	code:
	
	- HyperTerminal
	
	- Dial-Up Networking
	
	- Phone Dialer
	
	- The Microsoft Network
	
	Some countries (Canada, for example) have telephone numbers that are in different
	area codes but that are not long distance calls.
	
	This situation also occurs in some areas of the United States as well. For
	example, in Maryland, area codes 301 and 202 are in the same region. Callers in
	the region can make calls to either area code as a local call.
	
	CAUSE
	=====
	
	Windows 95 is designed to add a preceding "1" before a telephone number that has
	a different area code than your default area code so that you do not need to add
	it manually.
	
	RESOLUTION
	==========
	
	HyperTerminal
	-------------
	
	The following steps enable HyperTerminal to dial a telephone number with a
	different area code as a local number:
	
	1. Click the Start button, point to Programs, and then click Accessories.
	
	2. Click HyperTerminal Connections.
	
	3. Double-click the icon that was created when you made a new HyperTerminal
	  connection.
	
	4. In the Dial dialog box, click the Modify button beside the phone number.
	
	5. Click the Phone Number tab, then change the area code to match your local
	  area code.
	
	6. Type the phone number you want to dial, including the area code, in the Phone
	  Number box.
	
	  NOTE: You can skip the above steps by entering your local area code in the
	  area code field, and by typing the telephone number you want to dial,
	  including the area code, when you first create the connection.
	
	Dial-Up Networking
	------------------
	
	The following steps enable Dial-Up Networking to dial a telephone number with a
	different area code as a local number:
	
	1. Click the Start button, point to Programs, and then click Accessories.
	
	2. Click Dial-Up Networking.
	
	3. Double-click the icon that was created when you made a new Dial-Up Networking
	  connection.
	
	4. On the Connect To dialog box, remove the "1" from the phone number field.
	
	  NOTE: This must be done each time you attempt to connect.
	
	  -or-
	
	5. Click the Start button on the taskbar.
	
	6. On the Programs menu, click Accessories, then click Dial-Up Networking.
	
	7. Click the icon that was created when you made a new Dial-Up Networking
	  connection with the right (secondary) mouse button, then click Properties.
	
	8. On the General tab, change the area code to match your local area code.
	
	9. Type the phone number you want to dial, including the area code, in the
	  Telephone Number box.
	
	  NOTE: You can skip the above steps by entering your local area code in the
	  area code field, and by typing the telephone number you want to dial,
	  including the area code, when you first create the connection.
	
	Example:
	
	In this example, the local area code is 555, and the number to ANYBODY'S Dial-Up
	Networking server is (425) 999-9999; however, it is not a long distance call.
	Because the area codes are different, Windows 95 dials the number as a long
	distance number, 1-425-999-9999. To change this behavior, use the right
	(secondary) mouse button to click the icon called ANYBODY'S Dial-Up Networking
	Server, then click Properties. Type "555" (without the quotation marks) in the
	Area code field. Now type "425-936-6735" (without the quotation marks) in the
	Telephone Number field. When you dial the number, only (425) 999-9999 is dialed
	because the area code field matches your local area code field.
	
	Phone Dialer
	------------
	
	The following steps enable Phone Dialer to dial a telephone number with a
	different area code as a local number:
	
	1. Click the Start button, point to Programs, and then click Accessories.
	
	2. Click Phone Dialer.
	
	3. On the Tools menu, click Dialing Properties, then click New.
	
	4. Enter a new location. For example, TEST.
	
	5. For the TEST location, enter the area code for the number you want to dial,
	  then click OK. For example, 555.
	
	6. Type the number you want to dial in the Number To Dial field.
	
	  NOTE: Remember to change locations when necessary for each call you make.
	
	Example:
	
	In this example, the local area code is 555, and the number to the number you
	want to dial is (425) 999-9999; however, it is not a long distance call. Because
	the area codes are different, Windows 95 dials the number as a long distance
	number, 1-425-999-9999. To change this behavior, open Phone Dialer and click
	Dialing Properties on the Tools menu. Create a new location called TEST by
	clicking the New button, and then enter the area code of the number you want to
	dial. In this scenario, the area code is 425. When you want to dial a number
	with an area code of 425, choose the TEST location and type the number to be
	dialed.
	
	The Microsoft Network
	---------------------
	
	The following steps enable The Microsoft Network to dial a telephone number with
	a different area code as a local number:
	
	1. On the Sign In screen for The Microsoft Network, click the Settings button.
	
	2. Click the Access Numbers button.
	
	3. In both the Primary and Backup boxes, delete "+1" from the beginning of the
	  access number.
	
	4. Click OK.
	
	5. Click OK.
	
	When you click the Connect button, the access number will be dialed as a local
	call.
	
	NOTE: You can change the primary and backup access numbers while you are signing
	up for The Microsoft Network the first time.
	
	MORE INFORMATION
	================
	
	For additional information about dialing 10-digit telephone numbers in Windows
	95, please see the following article in the Microsoft Knowledge Base:
	
	  Q129049 How to Perform 10-Digit Dialing in Windows 95 and Windows NT
	
	Additional query words: digit assume rna helper hyperterm awfax dialer.exe
	
	======================================================================
	Keywords          : kbenv kbtool kbui dun win95 msnetwork kbDialUp 
	Technology        : kbWin95search kbMSNSearch kbZNotKeyword3
	Version           : 1.00 95
	
	=============================================================================
	
