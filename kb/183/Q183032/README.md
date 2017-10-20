---
layout: page
title: "Q183032: XCLN: Error: Mapi Mapisend Failed: 3"
permalink: /kb/183/Q183032/
---

## Q183032: XCLN: Error: Mapi Mapisend Failed: 3

{% raw %}

	Article: Q183032
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use MapiSend.exe from a command prompt, with no Exchange Client
	running, you may get the following error message:
	
	  Error: mapi mapisend failed: 3
	
	You can run MapiSend.exe successfully if you have an Exchange Client running.
	
	CAUSE
	=====
	
	This problem occurs if you are logged on to a Windows NT domain that is
	different than the Windows NT domain that Exchange Server is on.
	
	WORKAROUND
	==========
	
	Make sure that you are logged on to the same Windows NT domain as Exchange
	Server.
	
	MORE INFORMATION
	================
	
	MapiSend.exe is a Resource Kit utility that allows a user to send a message to
	an Exchange user from a DOS command window. If you are not logged on to an
	Exchange Client and are logged into a different domain from the Windows prompt,
	you will not be able to use the correct authentication necessary to use the
	MapiSend utility. For more information concerning the MapiSend.exe utility, see
	the Readme.txt file in the Exchange or BackOffice Resource Kit.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
