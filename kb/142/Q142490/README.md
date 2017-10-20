---
layout: page
title: "Q142490: How to Connect to the Internet Using DUN and CompuServe"
permalink: /kb/142/Q142490/
---

## Q142490: How to Connect to the Internet Using DUN and CompuServe

{% raw %}

	Article: Q142490
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbtool dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a Dial-Up Networking connectoid that uses
	your existing CompuServe account to establish a Point-to-Point Protocol (PPP)
	Internet connection. After you use this Dial-Up Networking connectoid to connect
	to the Internet, you can use Microsoft Internet Explorer or another Internet
	browser to access the Internet.
	
	MORE INFORMATION
	================
	
	To create a Dial-Up Networking connectoid that uses your existing CompuServe
	account to establish a PPP Internet connection, follow these steps:
	
	1. If you have already created a Dial-Up Networking connectoid that you want to
	  use to connect to the Internet using your existing CompuServe account, you
	  can proceed to step 2. If you have not created a Dial-Up Networking
	  connectoid that you want to use for this purpose, use the following steps to
	  create a new Dial-Up Networking connectoid:
	
	  a. Click the Start button, point to Programs, point to Accessories, and then
	     click Dial-Up Networking.
	
	  b. Double-click the Make New Connection icon.
	
	  c. Type a name for the new connectoid in the "Type a name for the computer
	     you are dialing" box, select the modem that you want to use in the Select
	     A Modem box, and then click Next.
	
	  d. Type the area code and phone number that you normally use to connect to
	     CompuServe in the Area Code and Telephone Number boxes, select the
	     appropriate country code in the Country Code box, click Next, and then
	     click Finish.
	
	2. Click the Start button, point to Programs, point to Accessories, and then
	  click Dial-Up Networking.
	
	3. Use the right mouse button to click the connectoid that you want to use to
	  connect to the Internet using your existing CompuServe account, and then
	  click Properties on the menu that appears.
	
	4. Click Configure.
	
	5. Click the Options tab, and then verify that the Bring Up Terminal Window
	  Before Dialing and Bring Up Terminal Window After Dialing check boxes are not
	  selected.
	
	6. Click OK, and then click Server Type.
	
	7. Verify that "PPP: Windows 95, Windows NT 3.5, Internet" is selected in the
	  Type Of Dial-Up Server box.
	
	8. Click the Log On To Network check box to clear it, and then verify that the
	  Require Encrypted Password check box is not selected.
	
	9. Click the NetBEUI and IPX/SPX-Compatible check boxes to clear them, and then
	  verify that the TCP/IP check box is selected (the TCP/IP check box should be
	  the only check box in the Allowed Network Protocols box that is selected).
	
	10. Click the TCP/IP Settings button, click the Specify Name Server Addresses
	  box to select it, and then enter the DNS server settings provided by
	  CompuServe in the Primary DNS and Secondary DNS boxes.
	
	
	1. If the Dial-Up Scripting Tool is not currently installed on your computer,
	  install it by following these steps:
	
	  a. Double-click the Add/Remove Programs icon in Control Panel.
	
	  b. Click the Windows Setup tab.
	
	  c. Click the Have Disk button, type the path to the Rnaplus.inf file in the
	     Copy Manufacturer's Files From box, and then click OK. The Rnaplus.inf
	     file is located in the Admin\Apptools\Dscript folder on the Windows 95
	     CD-ROM.
	
	     NOTE: The Dial-Up Scripting Tool is included in the CD-ROM version of
	     Windows 95, but not in the floppy disk version. If you are using the
	     floppy disk version of Windows 95 and wish to use the Dial-Up Scripting
	     Tool, please see the following article in the Microsoft Knowledge Base for
	     information on the availability of the Dial-Up Scripting Tool:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	  d. Click the SLIP And Scripting For Dial-Up Networking check box to select
	     it, and then click Install.
	
	2. Click the Start button, point to Programs, point to Accessories, and then
	  click Dial-Up Scripting Tool.
	
	3. Type the full path (including the file name) to the Cis.scp file in the File
	  Name box, and then click OK. The Cis.scp file is located in the Program
	  Files\Accessories folder.
	
	To establish a PPP Internet connection using your existing CompuServe account,
	double-click the connectoid that you created in step 1 or double- click the
	connectoid that you had already created to use for this purpose, type your
	CompuServe user ID and password in the User Name and Password boxes, and then
	click Connect.
	
	NOTE: You do not need to click Continue or enter any other data while the Cis.scp
	script is running. It may take 30 seconds or longer to completely establish the
	connection.
	
	======================================================================
	Keywords          : kbtool dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
