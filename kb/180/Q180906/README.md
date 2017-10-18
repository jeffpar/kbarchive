---
layout: page
title: "Q180906: Dial-Up Networking Cannot Dial Local Area Code"
permalink: kb/180/Q180906/
---

## Q180906: Dial-Up Networking Cannot Dial Local Area Code

	Article: Q180906
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbtool osr2 win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install TAPI (Telephony Application Programming Interface) 2.1 and
	configure a Dial-Up Networking connection to use the local area code when you
	dial a phone number, the 10-digit phone number to be dialed may be changed to
	contain random or unintelligible characters.
	
	CAUSE
	=====
	
	This behavior occurs because the Tapi32.dll file that is installed with the TAPI
	2.1 software cannot correctly handle the 10-digit local area code and phone
	number.
	
	RESOLUTION
	==========
	
	
	To work around this issue, follow these steps:
	
	1. Double-click the Dial-Up Networking connection you want to use, and then
	  click Dial Properties.
	
	2. Type "000" (without the quotation marks) in the Area Code box, and then click
	  OK.
	
	When you type "000" (without the quotation marks) in the Area Code box, the
	correct local area code is dialed, but the number to be dialed does not contain
	any invalid characters.
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	
	Additional query words: string corrupt
	
	======================================================================
	Keywords          : kbtool osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
