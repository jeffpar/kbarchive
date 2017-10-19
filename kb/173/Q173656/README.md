---
layout: page
title: "Q173656: XFOR: How to Troubleshoot Authenticated IMS Logons w/ Base64.exe"
permalink: /kb/173/Q173656/
---

## Q173656: XFOR: How to Troubleshoot Authenticated IMS Logons w/ Base64.exe

	Article: Q173656
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to use the Base64.exe utility and a Telnet or TCP
	session to troubleshoot authenticated logons to the Microsoft Exchange Server
	Internet Mail Service (IMS).
	
	MORE INFORMATION
	================
	
	Use the following steps to test an authenticated logon to the IMS using the
	Base64.exe utility and a Telnet session:
	
	1. Start Base64.exe and type the following command, where USERNAME is the
	  Windows NT account used to login to the Windows NT domain:
	
	  " encode USERNAME " (without the quotation marks)
	
	  This returns the user name in Base64 code. For example, the name "jsmith"
	  returns "anNtaXRo".
	
	2. Repeat step 1 for your Windows NT account password by typing:
	
	  " encode PASSWORD " (without the quotation marks)
	
	3. Start a Telnet session with the IMS by typing the following command:
	
	  " TELNET servername 25 " (without the quotation marks)
	
	  A response similar to the following should be displayed:
	
	  220 server.domain.com ESMTP Server (Microsoft Exchange Internet Mail Service
	  5.5.1664.3) ready
	
	4. Type the following command in the Telnet window:
	
	  " auth login " (without the quotation marks)
	
	  This returns the following response, which represents the word "Username" in
	  base64:
	
	  334 VXNlcm5hbWU6
	
	5. Type the Base64-encoded user name from Step 1 into the Telnet session and
	  press Enter. The following response will appear, which represents the word
	  "Password" in base64:
	
	  " 334 UGFzc3dvcmQ6 " (without the quotation marks)
	
	6. Type the Base64-encoded password from Step 2 into the Telnet session and
	  press Enter. The following response will appear, which indicates a successful
	  login to the IMS:
	
	  235 LOGIN authentication successful
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
