---
layout: page
title: "Q236165: Calling 2-Digit Carrier Codes in Brazil"
permalink: kb/236/Q236165/
---

## Q236165: Calling 2-Digit Carrier Codes in Brazil

	Article: Q236165
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbtool dun win95 win98 win98se kbDialUp
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to make a long distance call to Brazil, you may not be able to
	create an entry for the 2-digit carrier code.
	
	CAUSE
	=====
	
	This issue can occur because Dial-Up Networking does not include a method to
	designate carrier codes.
	
	NOTE: Currently there is no specific method to designate carrier codes in Dial-Up
	Networking that allows you to select the long-distance carrier of you want when
	you are prompted for the dial-up connection.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the dialing properties in the Calling Card tool to
	create rules that will insert the necessary numbers when you make a Dial-Up
	Connection. To do this, try one of the appropriate methods:
	
	Windows 98
	----------
	
	The following steps indicate how to create a Dial-Up Networking connection using
	the 2-digit carrier code:
	
	Create the Dial-Up Networking Connection Profile:
	
	1. Click Start, point to Programs, point to Accessories, point to
	  Communications, and then click Dial-Up Networking.
	
	2. Double-click Make New Connection.
	
	3. In the "Type a name for the computer you are dialing" box, type a name for
	  the connection, and then click Next.
	
	4. In the "Country or region code" box, click Brazil (55).
	
	5. In the "Area code" and "Telephone number" boxes, type the area code and
	  destination number, click Next, and then click Finish.
	
	This completes the first phase of the process.
	
	Create a Location Profile:
	
	1. Double-click the new connection you made in the previous section, and then
	  click Dial Properties.
	
	2. In the "I am dialing from" box, type the name of your location, click New,
	  and then click OK.
	
	3. If the "A new location was created" message is displayed on your screen,
	  click OK.
	
	4. In the "I am in this country/region" box, click Brazil.
	
	5. In the "Area code" box, type "55" (without the quotation marks) for the
	  country code.
	
	6. Click to select the "For long distance calls, use this calling card" box,
	  click Calling Card, and then click New.
	
	7. In the "Create a new calling card named" box, type a name, and then click OK.
	
	8. If the dialing rule dialog box is displayed, click OK.
	
	9. The long distance and international fields are populated with 0 and 00
	  respectively. Append the 2-digit carrier codes to these fields (example: 055
	  and 0055).
	
	10. To edit the rules, click Long Distance Calls.
	
	11. In the Step 1 section, click Nothing in the "then wait for" box.
	
	12. In the Step 2 section, click "Destination Number (including area code)" in
	  the Dial box, and then click Done in the "then wait for" box.
	
	13. In the Step 3 section, click Done in the Dial box, and then click OK.
	
	Repeat the steps in this section to create more connections.
	
	NOTE:The default settings for International Calls are correct. However, to make
	international Dial-Up Networking connections, you may need to create a new
	profile using the "Make new connection" icon in Dial-Up Networking to reflect
	the country code and area code you are trying to call. When you associate your
	location profile with it after you double-click your connection, the
	international rules are applied automatically.
	
	Windows 95
	----------
	
	To create a Calling Card rule, follow these steps:
	
	Create the Dial-Up Networking Connection Profile::
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	2. Double-click Make New Connection.
	
	3. In the "Type a name for the computer you are dialing" box, type a name for
	  the connection, and then click Next.
	
	4. In the "Country code" box, click Brazil (55)
	
	5. In the "Area code" and "Telephone number" boxes, type "0" (without the
	  quotation marks), click Next, and then click Finish.
	
	This completes the first phase of the process.
	
	Create a Location Profile:
	
	1. Double-click the new connection you made in the previous steps, and then
	  click Dial Properties.
	
	2. Click New, type in a location name in the "Create a new location named" box,
	  and then click OK.
	
	3. In the "The area code is" box, type an area code.
	
	4. In the "I am in" box, click Brazil (55), and then click to select the "Dial
	  using Calling Card" check box. The Change Calling Card dialog box is
	  displayed on the screen.
	
	5. Click New, in the "Create a new calling card named" box, type a name, click
	  OK, and then click Advanced.
	
	6. In the Dialing Rules dialog box, type a number to dial in one of the
	  appropriate boxes, and then click Close.
	
	NOTE:
	   - In the "Calls within the same area code " box, type the destination
	     number.
	
	   - In the "Long distance calls" box, type the number in the following format:
	
	  0 + <Carrier Code> + <Area Code> + <Destination Number>
	
	   - In the "International calls" box, type the number in the following format:
	
	  00 + <Carrier Code> + <Country Code> + <Area Code> +
	  <Destination Number>
	
	Repeat the steps in this section to create more connections.
	
	STATUS
	======
	
	Microsoft is currently investigating a method that will enable this
	functionality through the Dial-Up Networking interface.
	
	MORE INFORMATION
	================
	
	Long distance calls in Brazil require a 2-digit carrier code to designate the
	long distance carrier. This affects both national and international long
	distance calls when you create a Dial-Up Networking connection.
	
	For additional information about creating custom calling card rules, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q167220 How to Create Custom Calling Card Rules
	
	Additional query words: 2nd
	
	======================================================================
	Keywords          : kbenv kbtool dun win95 win98 win98se kbDialUp 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
