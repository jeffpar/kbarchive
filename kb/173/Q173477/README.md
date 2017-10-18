---
layout: page
title: "Q173477: How to Dial Local Access Numbers Using a Different Area Code"
permalink: kb/173/Q173477/
---

## Q173477: How to Dial Local Access Numbers Using a Different Area Code

	Article: Q173477
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5,2.51,2.52,2.6
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some cities or regions may have more than one area code, and calls between these
	area codes may not be long-distance calls.
	
	Because Windows 95 is designed to add a 1 before a telephone number if the number
	has a different area code than your own, if you want to dial an MSN, The
	Microsoft Network, access number with a different area code as a local call, you
	must reconfigure the modem dialing properties to use different rules.
	
	MORE INFORMATION
	================
	
	To dial an MSN access number with a different area code as a local call, use the
	following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the modem you are using, and then click Dialing Properties.
	
	4. Under Where I Am, click New.
	
	5. Type a name for the location, and then click OK.
	
	6. In the Area Code Is box, type the area code of the MSN access number you want
	  to dial.
	
	7. Under How I dial from this location, click the Dial Using Calling Card check
	  box to select it, and then click New.
	
	8. Type a name for the new calling card, click OK, and then click Advanced.
	
	9. Use the following table to configure the Dialing Rules dialog box:
	
	     Field                             Dialing Rule
	     ----------------------------------------------
	     Calls Within The Same Area Code   FG
	     Long Distance Calls               1FG
	     International Calls               011EFG
	
	  Meaning of the Dialing Rules:
	
	     F - Inserts Area code when dialing
	     G - Inserts Local phone number when dialing
	     E - Inserts Country code when dialing
	
	10. To list other dialing rules, right-click the field names and then click
	  What's This? to see information about valid entries for each field.
	
	11. Click Close, and then click OK until you return to Windows.
	
	You can use the location you created in the steps above to dial the MSN access
	number in the specified area code as a local call.
	
	To switch between your default location and the location you created in the steps
	above, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click the modem you are using, and then click Dialing Properties.
	
	4. Under Where I Am, click the appropriate location in the I Am Dialing From
	  box.
	
	5. Click OK until you return to Windows.
	
	For additional information about dialing in Windows 95, see the following
	articles in the Microsoft Knowledge Base:
	
	  Q121891 <A0>Windows 95 Adds a Preceding "1" If Area Codes are Different
	
	  Q129049 <A0>How to Perform 10-Digit Dialing in Windows 95 and Windows NT
	
	  Q137785 <A0>How to Use a Number Other Than 1 When Dialing Long Distance
	
	Additional query words: 2.50 2.60
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.5,2.51,2.52,2.6
	Issue type        : kbhowto
	
	=============================================================================
	
