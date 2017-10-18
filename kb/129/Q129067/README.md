---
layout: page
title: "Q129067: Using Windows NT RAS to Connect to CompuServe PPP"
permalink: kb/129/Q129067/
---

## Q129067: Using Windows NT RAS to Connect to CompuServe PPP

	Article: Q129067
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CompuServe offers direct dialup PPP support for accessing the Internet.
	CompuServe provides an Internet Dialer program that requires an updated 16- bit
	WINSOCK.DLL file that does not function under Windows NT. However, it is
	possible to use the Remote Access Service included with Windows NT to connect to
	the CompuServe PPP server.
	
	MORE INFORMATION
	================
	
	To connect to CompuServe PPP server using Windows NT 4.0:
	
	1. Install Remote Access Service (RAS) in the Windows NT Network Control Panel.
	  Make sure that "Dial-out only" or "Dial-out and Receive calls" is selected
	  for the RAS device, and TCP/IP is one of your installed protocols.
	
	2. Open My Computer and select Dial-Up Networking.
	
	3. Select New, and on the Basic page, enter the entry name, phone number, and
	  modem.
	
	4. On the Server page, clear the IPX/SPX Compatible and NetBEUI protocol check
	  boxes, and make sure that TCP/IP is selected.
	
	5. On the Script page, select Run this Script and select
	  C:\<systemroot>\system32\ras\cis.scp.
	
	6. Click OK to save the new entry.
	
	7. The first time you dial, you will be prompted for a username, password, and
	  domain.
	
	  - For username, enter your Compuserve user ID, which is normally something
	  like 12345,6789.
	
	  - For password, enter your Compuserve logon password.
	
	  - Leave the domain field blank.
	
	NOTE: Your TCP/IP settings should be automatically established when the
	connection is made. You can view your current TCP/IP settings by using the
	ipconfig /all command, after the connection is made.
	
	To connect to CompuServe PPP server using Windows NT 3.5x:
	
	1. Install Remote Access Service (RAS) in Windows NT Network Control Panel. Make
	  sure that "Dial-out only" or "Dial-out and Receive calls" is selected for the
	  RAS device.
	
	2. To make the PPP connection easier, add the following to the
	  %SystemRoot%\System32\Ras\Switch.inf file:
	
	  [CIS-Internet]
	  COMMAND=<cr>
	
	
	  OK=<match>":"
	  COMMAND=CIS<cr>
	  OK=<match>":"
	  COMMAND=userid/GO:PPPCONNECT<cr>
	  OK=<match>":"
	  COMMAND=password<cr>
	  OK=<ignore>
	
	  where userid and password equal your actual CompuServe user ID and password.
	
	  NOTE: Anyone who has access to read your Switch.inf file can see your user ID
	  and password. If you do not want to use Switch.inf, you can choose terminal
	  instead of CIS-Internet in the Security dialog and enter the commands
	  manually (click done after entering your password).
	
	  If you perform this manual connection, the strings presented by CompuServe may
	  be unreadable but everything will still work. CompuServe uses 7 data bits and
	  even parity, and RAS uses 8 data bits and no parity. You can press the PLUS
	  SIGN (+) and then ENTER to view the prompts using 8 data bits, but they may
	  be garbled again after you enter your user ID. You may need to use GO
	  TERMINAL to change your terminal settings on CompuServe. For more information
	  contact CompuServe Customer Support.
	
	1. From the Remote Access Service group, start Remote Access, or run RASPHONE.
	
	2. Create a new RAS Phone Book entry.
	
	  a. Click Add to create a new entry in the RAS Phone Book.
	
	  b. Type Entry Name, Phone Number (same local dialup number normally used to
	     access CompuServe), and Description.
	
	  c. Click Advanced if you are not already viewing the advanced options.
	
	3. Configure your new Phone Book entry.
	
	  a. Click Network.
	
	  b. Select PPP and make sure the TCP/IP protocol is selected (you can disable
	     NetBEUI and IPX).
	
	  c. Select TCP/IP Settings. Select "Server assigned IP address."
	
	  d. Select "Use specific name server addresses" and enter 149.174.211.5
	     149.174.213.5 (backup) for the DNS server.
	
	     NOTE: Use 149.174.64.42 as a backup DNS address. These DNS addresses may
	     change. If you have problems with DNS resolution, you may need to call
	     CompuServe for correct DNS addresses.
	
	  e. Make sure you select the "Use default gateway on remote network" check
	     box.
	
	  f. Accept these setting by clicking OK, and then click OK again.
	
	4. Click Security. Change the After dialing Script to CIS- Internet if you
	  modified the Switch.inf. Otherwise choose terminal.
	
	You should now be able to connect to the CompuServe PPP dialup service and use
	FTP, Telnet, WWW, and other TCP/IP services.
	
	NOTE: In some cases, although you can connect to the CompuServe PPP dialup
	service, you may have trouble connecting to Internet hosts. In this case, for
	additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q166090: MSN Support in Windows NT
	
	  Q161368: Service Pack 2 May Cause Loss of Connectivity in Remote Access
	
	  Q161986: Troubleshooting Internet Service Provider Login Problems
	
	
	Additional query words: prodnt point slip CIS CID netscape compuserv cis.scp mosaic phonebook user id dial up
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
