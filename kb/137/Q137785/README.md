---
layout: page
title: "Q137785: How to Use a Number Other Than 1 When Dialing Long Distance"
permalink: kb/137/Q137785/
---

## Q137785: How to Use a Number Other Than 1 When Dialing Long Distance

	Article: Q137785
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbtool kbusage win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you dial a long distance number using a 32-bit communications program in
	Windows 95, the number 1 is automatically dialed before the area code of the
	number to be dialed. Dialing 1 first for a long distance call is appropriate for
	most phone systems, but some systems require you to dial a number other than 1.
	
	This article describes how to configure Windows 95 to dial a number other than 1
	to begin a long distance call.
	
	MORE INFORMATION
	================
	
	To configure Windows 95 to dial a number other than one to begin a long distance
	call, follow these steps:
	
	1. In Control Panel, double-click the Modems icon.
	
	2. Click Dialing Properties.
	
	3. Click New, type a name for the new location in the dialog box that appears,
	  and then click OK.
	
	4. Click the Dial Using Calling Card check box to select it, and then click New
	  in the dialog box that appears.
	
	5. Type a name for the new calling card in the dialog box that appears, click
	  OK, and then click Advanced.
	
	6. Type "G" (without the quotation marks) in the Calls Within The Same Area Code
	  box.
	
	7. Type "<n>FG" (without the quotation marks) in the Long Distance Calls
	  box, where <n> is the number you want to use in place of 1. For
	  example, if you want to use 8 in place of 1, type "8FG" in the Long Distance
	  Calls box.
	
	8. Type "<n>1EFG" (without the quotation marks) in the International Calls
	  box, where <n> is the number you want to use in place of 1. For
	  example, if you want to use 8 in place of 1, type "81EFG" in the
	  International Calls box.
	
	9. Click Close, and then click OK.
	
	When you want to dial a long distance number using a communications program,
	configure the program to use this new location.
	
	NOTE: "G" inserts the telephone number. "F" inserts the area code. "E" inserts
	the country code.
	
	Note that this method works only with 32-bit communications programs that support
	the Telephony Application Programming Interface (TAPI). You cannot use this
	method if you already use a calling card to dial long distance. When you choose
	a calling card in the Change Calling Card dialog box, the advanced settings are
	set automatically and cannot be changed.
	
	Another method that you can use for a single HyperTerminal or Dial-Up Networking
	connection, or for The Microsoft Network, is to change the area code of the
	number to be dialed to match your own area code, and then enter the entire
	10-digit number you want to dial in the Phone Number box.
	
	For example, if your local area code is 555, enter 555 in the Area Code box and a
	phone number such as "8 123 456-7890" (without the quotation marks) in the Phone
	Number box. Windows 95 dials this phone number exactly as it appears in the
	Phone Number box. When you use this method, dialing options such as call waiting
	or outside line access numbers are used.
	
	Additional query words: awfax
	
	======================================================================
	Keywords          : kbtool kbusage win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
