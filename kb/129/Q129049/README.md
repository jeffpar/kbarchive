---
layout: page
title: "Q129049: How to Perform 10-Digit Dialing in Windows 95 and Windows NT"
permalink: /kb/129/Q129049/
---

## Q129049: How to Perform 10-Digit Dialing in Windows 95 and Windows NT

	Article: Q129049
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95; winnt:4.0
	Operating System(s): 
	Keyword(s): dun win95 msnetwork kbDialUp
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to dial a 10-digit number (the telephone number plus the area
	code), Windows ignores the area code specified if it matches your local area
	code.
	
	CAUSE
	=====
	
	Windows is designed to conform to the North American Dialing Standard. This
	standard requires you to dial a one, plus the area code and the telephone number
	for all long-distance numbers. If the telephone number is a local call, you do
	not need to dial the area code.
	
	Some regional telephone companies use area code overlays that require you to dial
	the area code plus the telephone number for all calls. If it is a long-distance
	call, you must precede this number with a one. Windows is not designed to comply
	with this 10-digit dialing scheme.
	
	RESOLUTION
	==========
	
	There are three methods for working around this issue.
	
	Method 1
	--------
	
	You can create your own dialing rules in the Dialing properties. Use the
	following steps to create a custom calling card that dials all local calls with
	10 digits.
	
	Windows95:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems, and then click Dialing Properties.
	
	3. Click the Dial Using Calling Card check box to select it, and then click
	  Change.
	
	4. Click New.
	
	5. Type a name for the calling card (for example, Direct Dial), click OK, and
	  then click OK again.
	
	6. Click Advanced, and then fill out the dialing rules as follows:
	
	     Field                             Dialing Rule
	     ----------------------------------------------
	     Calls Within The Same Area Code   FG
	     Long Distance Calls               1FG
	     International Calls               011EFG
	
	  NOTE: To see information about valid entries for each field, right-click the
	  field names and then click "What's This?" For example, an entry of FG means
	  to dial the area code and the local number.
	
	7. Click Close, and then click OK.
	
	Windows NT:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems, and then Dialing Properties.
	
	3. Click the Dial Using Calling Card check box to select it, and then click
	  Change.
	
	4. Click New.
	
	5. Type a name for the calling card (for example, Direct Dial), click OK, and
	  then click OK again.
	
	6. In the Dialing Rules dialog box type in the dialing rules as follows:
	
	     Field                             Dialing Rule
	     ----------------------------------------------
	     Calls Within The Same Area Code   FG
	     Long Distance Calls               1FG
	     International Calls               011EFG
	
	  NOTE: To see information about valid entries for each field, right-click the
	  field names and then click "What's This?" For example, an entry of FG means
	  to dial the area code and the local number.
	
	7. Click Close, and then click OK.
	
	This method causes Windows to dial all telephone numbers with the same area code
	as your own with 10 digits. When you use this method, Dialing properties (such
	as call waiting or outside line access numbers) are used.
	
	You can use this method with HyperTerminal, Dial-Up Networking, and The Microsoft
	Network.
	
	You can also use this method with Microsoft Schedule+, but you must also create a
	new location that uses the custom calling card. To switch between regular
	dialing and 10-digit dialing, click Dialing Properties in the Modems tool in
	Control Panel and then select the appropriate location in the I Am Dialing From
	box.
	
	Method 2
	--------
	
	Windows limits the number of digits you can enter in the Phone Number box to 36
	characters. You can, therefore, set the area code to match your local area code
	and you can enter the 10-digit telephone number to dial in the Phone Number
	box.
	
	For example, if your local area code is 111, you can enter 111 in the Area Code
	box and a phone number such as 555 123-4567 in the Phone Number box. Windows
	will dial this phone number using all 10 digits.
	
	To change the area code in Windows, use the following steps:
	
	Windows 95:
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	2. Click the connection, and then click Properties on the File menu.
	
	3. Click the "Use Country Code and Area Code" check box to select it, and then
	  type the area code and phone number.
	
	Windows NT:
	
	1. Double-click My Computer, and then double-click Dial-Up Networking.
	
	2. In the Phonebook Entry To Dial box, click the appropriate connection.
	
	3. Click More, and then click "Edit Entry and Modem Properties."
	
	4. Click the Use Telephony Dialing Properties check box to select it, and then
	  type the area code and phone number.
	
	When you use this method, Dialing properties (such as call waiting or outside
	line access numbers) are used. You can use this method with HyperTerminal,
	Dial-Up Networking, The Microsoft Network, and Microsoft Fax.
	
	Method 3
	--------
	
	You can click the "Use country code and area code" check box in Windows 95 or the
	"Use Telephony Dialing Properties" check box in Windows NT to clear it, to make
	Windows dial the number you enter in the Phone Number box exactly as you enter
	it. Dialing properties (such as call waiting and outside line access numbers)
	are not applied.
	
	For example, if your local area code is 111, click Modify beside the Phone Number
	box, and then click the "Use country code and area code" check box to clear it.
	If you must dial a 9 to gain an outside line, you would type "9 555 123-4567"
	(without the quotation marks) in the Phone Number box.
	
	When you use this method you must enter every digit that is to be dialed in the
	Phone Number box. The digits are not automatically adapted as you change
	locations, but you have complete control over the number that is dialed.
	
	You can use this method with HyperTerminal, Dial-Up Networking, and The Microsoft
	Network.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: dun msn hyperterm ten w95cnfaq
	
	======================================================================
	Keywords          : dun win95 msnetwork kbDialUp 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : Win2000:95; winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
