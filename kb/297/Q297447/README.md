---
layout: page
title: "Q297447: Error Message: MSN Explorer (MSN Version 6.0)--We Were Not Able"
permalink: /kb/297/Q297447/
---

## Q297447: Error Message: MSN Explorer (MSN Version 6.0)--We Were Not Able

{% raw %}

	Article: Q297447
	Product(s): The Microsoft Network
	Version(s): 6.0,6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 6.0, 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You try to sign in to MSN Internet Access using MSN Explorer 6.0. A dial-up
	connection is established, but you get one of the following error messages:
	
	  "We were not able to sign you in. There may be problems with our servers, or
	  problems with your Internet connection. Please try again later."
	
	  "Slow Connection Speed. Problem with you modem or connection settings."
	
	CAUSE
	=====
	
	Any of the following could cause this issue:
	
	- Passport server issues
	
	- Corrupted network components on your computer
	
	- Temporary access number outages
	
	- Modem connection speed is set too low
	
	- Problems with the phone line
	
	- Your Internet Explorer Cipher strength is set for 0 bit.
	
	RESOLUTION
	==========
	
	First, confirm your Internet Explorer version.
	
	To confirm your Internet Explorer version
	
	- Start Internet Explorer, click Help, and then click About Internet Explorer.
	
	If the version of Internet Explorer you currently have is 5.5 or below, download
	the latest version of Internet Explorer at: http://www.microsoft.com/windows/ie.
	If you have the most current version of Internet Explorer, call Internet
	Explorer Technical Support at 425-635-7123.
	
	Next, insure your modem speed is set correctly.
	
	To confirm settings
	
	1. Click Start, point to Settings, click Control Panel, and then click Phone and
	  Modem Options.
	
	2. Select the Modem in use and click Properties.
	  Note: Modem settings should be as follows:
	   - 56k: 115200
	
	   - 33.6k: 57600
	
	   - 28.8k: 38400
	
	3. Click Ok.
	  Note: Line quality can be a factor. Your phone line must be capable of
	  handling 28.8 kilobits per second (Kbps). If you are unsure of your phone
	  line capabilities, please contact your telephone company.
	
	Next, confirm that your dial-up connection is still active.
	
	To confirm that your dial-up connection is active
	
	1. Check to see that the connection icon next to the clock on your computer (in
	  the "system tray" area) is still present.
	
	2. Start Internet Explorer and try to view Web sites.
	
	To troubleshoot further, remove your current connection file from Dial-up
	Networking so MSN Explorer can reconnect you.
	
	To remove your connection file from Dial-up Networking
	
	1. On the desktop double-click the My Computer icon, and then double-click
	  Dial-up Networking.
	  Note: For Windows 2000 and Millenium, double-click Control Panel, then
	  double-click Dial-up Networking.
	
	2. Delete the MSN Internet Access connection.
	  Note: For DellNet users the connection is called DellNet by MSN, and for
	  Compaq users, the connection is called MSN for Compaq.
	
	3. Start MSN Explorer and try to connect again.
	
	If you continue to experience this issue, there may be temporary issues with the
	access number that you are using to connect. You may simply choose another
	access number to resolve your issue.
	
	To choose another access number
	
	1. In upper-right corner of the Welcome screen, click Connection Settings.
	
	2. In the lower-left corner, click Advanced Options.
	
	3. Click Verify the phone numbers to connect to the Internet.
	
	4. Click Next, and then click Change.
	
	5. Clear the Use box next to the first access number listed, and then click
	  Done.
	  This will force MSN Explorer to use the next number in the list.
	
	6. Click Accept, click OK, and then click OK again.
	
	7. Try to sign in to MSN Explorer.
	  If you can't sign in, repeat the steps above to use the next number in the
	  connections list. MSN Explorer may have up to four numbers stored in the
	  connection settings. If the above steps do not work, the issue may be with
	  the access numbers in the area.
	
	To try an access number from another region
	
	1. Click Change Where I am Dialing From.
	  Note: If this option is not present, then click Change How to Connect to the
	  Internet and select the appropriate connection device, depending on the
	  version of MSN Explorer you are using:
	   - For the standard version of MSN Explorer, click MSN Internet Access.
	
	   - For DellNet by MSN, click DellNet by MSN using modem.
	
	   - For the Compaq version, click MSN for Compaq using modem.
	
	2. Type the area code and telephone number you are dialing from and then click
	  OK.
	  Note: It is not enough to change one of the last four digits of the phone
	  number to force MSN Explorer to choose another number. You must modify either
	  the area code or the prefix (first 3 numbers of the telephone number) to
	  force MSN Explorer to select a new number.
	
	3. On the Connection Settings screen, click OK.
	
	4. Click the user tile you want to sign in with, type your password, and then
	  click Sign In.
	  MSN Explorer will dial a 1-800 number to detect local access numbers for your
	  area. MSN Explorer will sign out and return you to the Welcome screen after
	  it detects the access numbers.
	
	5. Click the user tile and sign in again.
	  A message appears stating "Your internet connection has been improved".
	
	6. Click Next.
	  A list of access numbers detected for your area appears.
	
	7. Do one of the following:
	   - If the numbers are local and correct, click Accept.
	
	   - If the numbers are not local and correct, click Change.
	     This allows you to uncheck any numbers which may be long distance, and to
	     change the dialing properties for the numbers (such as dialing 1 or the
	     area code).
	
	- After the settings are correct, click Done, then click Accept.
	  MSN Explorer will now dial the first of the new access numbers and sign you
	  in.
	
	If you still can't sign in, you may have forgotten your password or you may be
	mistyping it. Consider resetting your password.
	
	To reset your password
	
	- Follow the instructions in Knowledge Base article Q297420to reset your
	  password, and then sign in again.
	
	If you can't surf the Web, then the issue may be with your Internet Connection.
	In this case, do the following:
	
	- Clear the Temporary Internet Files and History.
	
	- Uninstall and reinstall network components (dial-up adapter and TCP/IP)--see
	  Knowledge Base article Q294853.
	  Note: This should only be done if you have a Windows CD.
	
	- Try another access number.
	
	To try another access number
	
	1. On the Welcome screen, click Connection Settings.
	
	2. In the lower-left corner, click Advanced Options.
	
	3. Click Verify the phone numbers to connect to the Internet.
	
	4. Click Next, and then click Change.
	
	5. Clear the Use box next to the first access number listed, and then click
	  Done.
	  This will force MSN Explorer to use the next number in the list.
	
	6. Click Accept, click OK, and then click OK again.
	
	7. Try to sign in to MSN Explorer.
	  If you can't sign in, repeat the steps above to use the next number in the
	  connections list. MSN Explorer may have up to four numbers stored in the
	  connection settings.
	
	If you still can't connect, there may be a temporary issue with the access
	numbers in your area. Follow the below instructions to try a phone number from a
	different area.
	
	To select an access number from a different area
	
	1. In upper-right corner of the Welcome screen lick Connection Settings.
	
	2. Click Change Where I am Dialing From.
	  Note: If this option is not present, then click Change How to Connect to the
	  Internet and select the appropriate connection device, depending on the
	  version of MSN Explorer your have:
	   - For the standard version of MSN Explorer, click MSN Internet Access.
	
	   - For the DellNet by MSN version, click DellNet by MSN using modem.
	
	   - For the Compaq version, click MSN for Compaq using modem.
	
	3. Type the area code and telephone number you are dialing from, and then click
	  OK.
	  Note: It is not enough to change one of the last four digits of the phone
	  number to force Explorer to select a new number. You must change either the
	  area code or the prefix (first three numbers of the telephone number).
	
	4. On the Connection Settings screen click OK.
	
	5. Click the user tile you wish to sign in with, type in your password, and then
	  click Sign In.
	  MSN Explorer will now dial a 1-800 number to detect local access numbers for
	  your area. MSN Explorer will sign out and return you to the Welcome screen
	  once the access numbers have been detected.
	
	6. Click the user tile and sign in again.
	  This time you will see a box appear stating "Your internet connection has been
	  improved".
	
	7. Click Next.
	  You will now see a list of the access numbers detected for your area.
	
	8. Do one of the following:
	   - If the numbers are correct, click Accept.
	
	   - If the numbers are not correct, click Change. The Change feature allows
	     you to uncheck any numbers which may be long distance, and to change the
	     dialing properties for the numbers (dialing 1 or the area code).
	
	9. Click Done, then click Accept.
	  MSN Explorer will now dial the first of the new access numbers and sign you
	  in.
	
	If you still can't sign in, a Passport server issue may be causing the "Unable to
	Log on to Network" error in MSN Explorer. In this case, Contact Customer Service
	at 1-800-386-5550.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN600 kbMSN610
	Version           : :6.0,6.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
