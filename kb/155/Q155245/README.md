---
layout: page
title: "Q155245: Dial-Up Networking Error 87 If Foreign Access Number Chosen"
permalink: /kb/155/Q155245/
---

## Q155245: Dial-Up Networking Error 87 If Foreign Access Number Chosen

	Article: Q155245
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you select a primary or backup access number from a country other than the
	country selected in Dialing properties, you may receive the following error
	message when you attempt to connect to MSN, The Microsoft Network:
	
	  Unable to set the Internet phone number because of the following error:
	  Dial-Up Networking error 87 occurred.
	
	CAUSE
	=====
	
	This error may occur after you install Microsoft Internet Explorer version 3.0
	or other new Internet programs that use later versions of the Inet16.dll and
	Inetcfg16.dll files than those included with MSN 1.2 and 1.3.
	
	RESOLUTION
	==========
	
	Click OK in the error message box and continue. This error has no effect on the
	connection.
	
	To prevent this message, change the country in Dialing Properties and select an
	access number using these steps:
	
	1. On the MSN Sign In screen, click Settings.
	
	2. Click Dialing Properties.
	
	3. In the I Am In box, click the country in which you are located, and then
	  click OK.
	
	4. Click Access Numbers.
	
	5. Click Change, and then click the access number for your location.
	
	MORE INFORMATION
	================
	
	Although you do not receive this error message if you use version 4.40.516 of
	the Inetcfg.dll and Inet16.dll files included with MSN 1.2 and 1.3, these older
	files do not work with Internet Explorer 3.0 or the Internet Connection Wizard.
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN130 kbMSN120
	Version           : WINDOWS:1.2,1.3
	
	=============================================================================
	
