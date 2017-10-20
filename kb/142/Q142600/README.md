---
layout: page
title: "Q142600: MSN Mail Not Delivered: No Transport Provider Available"
permalink: /kb/142/Q142600/
---

## Q142600: MSN Mail Not Delivered: No Transport Provider Available

{% raw %}

	Article: Q142600
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3,2.0,2.5,2.6,8.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3, 2.0, 2.5, 2.6 
	- Microsoft Outlook 97, version 8.0, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send e-mail using MSN, The Microsoft Network, you may receive a
	non-delivery receipt with the following message:
	
	  No transport provider was available for delivery to this recipient.
	
	CAUSE
	=====
	
	This error has four possible causes:
	
	- You do not have The Microsoft Network Online Service in your e-mail profile.
	  To check your profile, double-click Mail And Fax in Control Panel.
	
	- You replied to e-mail that has an address not found in the MSN address book
	  and that is not an Internet address. This problem occurs when the sender
	  includes an address that is available on the sender's mail system but not on
	  MSN.
	
	- The service provider is not loaded. To check this, follow these steps:
	
	  
	
	  1. In Microsoft Exchange, click Services on the Tools menu, and then click MSN.
	
	  2. Now click About. You should then see the following files in the File Names
	  box:
	
	  
	
	- Mosrxp32.dll
	
	- Mosabp32.dll
	
	- Moscfg32.dll
	
	- The addressee's mail server is unable to accept the message because the
	  server is down or blocked when the mail message is being distributed.
	
	- The profile in Outlook 97 is corrupted.
	
	RESOLUTION
	==========
	
	To resolve the problem, use the appropriate method:
	
	- If The Microsoft Network Online Service is not in your profile, double-click
	  Mail and Fax in Control Panel, click Add, and then add the service.
	
	- All addresses must either be in the MSN address book or be valid Internet
	  addresses. You cannot send replies to addresses that exist only on the
	  sender's mail system.
	
	- If the service provider is not loaded (i.e., you do not see three file names
	  when you check the service provider), remove and reinstall Microsoft Exchange
	  and MSN using these steps:
	
	  
	
	  1. In Control Panel, double-click Add/Remove Programs, click the Windows Setup
	  tab, and then click the Microsoft Exchange and MSN check boxes to clear them.
	
	  2. Click OK, and then restart your computer.
	
	  3. In Control Panel, double-click Add/Remove Programs, click the Windows Setup
	  tab, and then click the Microsoft Exchange and MSN check boxes to select
	  them.
	
	  4. Click OK, and then restart your computer.
	
	- If the receiving mail server was down, send the message again when the server
	  is working properly.
	
	- If using Outlook 97, create a new profile using a different name for the
	  *.pst and *.pab files.
	
	Additional query words: msn 1.00 2.00 2.50 2.60
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbMSNSearch kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:1.0,1.05,1.2,1.3,2.0,2.5,2.6,8.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
