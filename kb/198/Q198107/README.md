---
layout: page
title: "Q198107: XGEN: Fixes in Ol98qfe.exe that Shipped w/Exchange 5.5 SP1"
permalink: /kb/198/Q198107/
---

## Q198107: XGEN: Fixes in Ol98qfe.exe that Shipped w/Exchange 5.5 SP1

	Article: Q198107
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The file Ol98qfe.exe, which shipped on the client CD for Exchange 5.5 Service
	Pack 1 in the En\Support\Update\Smime directory, is required in order to provide
	full Key Management Server connectivity and S/MIME security. It also introduces
	several protocol and usability fixes.
	
	Below is a comprehensive list of fixes that are included in this self- extracting
	file:
	
	- There is a problem upgrading V1 Certificates to V2 and V3 Certificates
	  automatically. The upgrade does not work automatically as expected.
	
	- JPN: When you export or import a Digital ID, there is no option to select
	  Internet Security (*.pfx,*.p12)" in "files of type" in the Import a Digital
	  ID dialog box. This dialog box is on the Security tab when you click Options
	  from the Tools menu.
	
	- When a user is sending a message from V3 only to V1 only, you receive the
	  following error message:
	
	  TDXScodeFromHR failed with hr=0x80000057
	
	  and an Out of Memory error.
	
	- Outlook crashes before the V2 to V3 certificate renewal process finishes.
	
	- Clicking Next or Previous causes items to shift when the taskbar is placed at
	  left or top of the desktop screen.
	
	- Help About was changed to include DataViz information.
	
	- JPN: International Security/Charset:UTF-7 and 8 Signed/Encrypted messages are
	  corrupted on Conversation Monitor System.
	
	- The client fails to process the V3 renewal response correctly.
	
	- When you switch from V1 to V3 and click the renew all button, you are not
	  able to read V3 mail messages.
	
	- Imported CRl is not getting picked up by the Outlook98 client.
	
	- Recipients cannot read V3 encrypted message sent to many people.
	
	- The Certificate Trust List signing certificate is getting added to the root
	  store, causing the V3 certificate not to be trusted.
	
	- After you install Olcsp128.exe, the Cryptography Service Provider fails to
	  get registered in the registry.
	
	- Revoking a user's V1 certificate and then switching the KMS server to V3 does
	  not allow the user to enroll in V3 properly.
	
	Additional query words: KMS service pack
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
