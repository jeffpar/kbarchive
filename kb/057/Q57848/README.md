---
layout: page
title: "Q57848: Mac AL GW: Creating AppleLink Gateway Accounts"
permalink: /kb/057/Q57848/
---

## Q57848: Mac AL GW: Creating AppleLink Gateway Accounts

{% raw %}

	Article: Q57848
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: All Microsoft Mail version 2.0 customers who have gateways installed
	should be using the "MS Mail GW" file version 2.0b and the "Microsoft Mail
	Server" file version 2.0b, both of which are located in the System Folder of the
	Mail server. An updated "MS Mail GW" file is available through Microsoft End
	User Sales and Service at (800) 426-9400 or Microsoft International Customer
	Service at (206) 936-8661 but ONLY for customers using the AppleLink Gateway to
	Microsoft Mail. Customers using other gateways must obtain an updated "MS Mail
	GW" file from the developer of the gateway they are using. The Microsoft Mail
	server upgrade can also be obtained at the above numbers.
	
	
	Before creating an AppleLink gateway account, the AppleLink gateway must have
	previously been installed on the Microsoft Mail server by using the Gateway
	Installer program.
	
	MORE INFORMATION
	================
	
	To create an AppleLink gateway account, do the following:
	
	1. Sign in as Network Manager.
	
	2. From the Mail menu, choose Gateway Accounts to bring up the Define Gateway
	  Accounts window. In Mail version 3.0, choose Gateway from the Mail menu, then
	  select Accounts.
	
	3. Click the icon for the AppleLink gateway.
	
	4. Fill in the information for the following:
	
	  a. Name - In the case of the AppleLink gateway, the account name is used only
	     to identify accounts.
	
	  b. AppleLink mail address - The address on AppleLink to be used. A typical
	     AppleLink address might be "D4751" (without the quotation marks) or a
	     name, such as "John.Doe" (without the quotation marks).
	
	  c. AppleLink password - The password of the above AppleLink mail address.
	
	5. Click the Add User button to bring up the Define Account Members window to
	  add users to the account. In some cases, you will add one user per AppleLink
	  gateway account. In other cases, such as a small company that has only one
	  AppleLink account, you will give many users access to the account. Click the
	  Close button to exit the Define Account Members window when done.
	
	6. Highlight the user or group name that will receive all incoming gateway mail
	  for this account. For more information, query on the following keywords:
	
	  "default" (without the quotation marks) and "user" (without the quotation
	  marks)
	
	7. Click the Define button. To create more accounts, repeat steps 4 through 7,
	  or click the close box of the Define Gateway Accounts window to exit.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	

{% endraw %}
