---
layout: page
title: "Q217058: XFOR: How to Enable DBCS Support on the Exchange Notes Connector"
permalink: /kb/217/Q217058/
---

## Q217058: XFOR: How to Enable DBCS Support on the Exchange Notes Connector

{% raw %}

	Article: Q217058
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the release of the new and enhanced Exchange Notes Connector in the Web 2
	update, Double Byte Character Sets (DBCS) between Exchange Server and Lotus
	Notes is now supported. Most Asian languages are DBCS-based, such as the
	following:
	
	- Chinese-Simplified
	- Chinese-Traditional
	- Japanese (Kanji)
	- Korean
	
	DBCS support is seamlessly integrated with the U.S. English versions of the
	Exchange Notes Connector and Exchange Server. This article explains the steps
	needed to get this working.
	
	MORE INFORMATION
	================
	
	On the Exchange Server Computer with the Exchange Notes Connector
	-----------------------------------------------------------------
	
	1. Locate the DBCS language you want from the Langpack folder on the Windows NT
	  4.0 CD.
	
	2. Right-click on the .inf file, and click Install; this adds the DBCS language
	  you want to the list in regional settings.
	
	3. Click Start, point to Settings, click Control Panel, and double-click
	  Regional Settings.
	
	4. On the Regional Settings tab, select the language you want from the list, and
	  click to select the "Set as system default locale" check box.
	
	5. Click the Input Locales tab.
	
	6. Select the locale you want, and click the "Set as Default" button.
	
	7. Reboot the computer running Windows NT Server.
	
	8. Install the U.S. English version of Exchange Server with Service Pack 1 or
	  later.
	
	9. Install the U.S. English version of the Exchange Notes Connector (Service
	  Pack 2).
	
	10. Install the international version of the Lotus Notes client 4.5.<x> or
	  4.6.<x>.
	
	11. On the Options tab of the Notes Connector Property pages, select the Notes
	  server language based on the DBCS client language you want, and not on the
	  actual language of the corresponding Notes server.
	
	12. Follow the normal procedures for completing the configuration of the
	  Exchange Notes Connector.
	
	On International Notes Server
	-----------------------------
	
	1. The Notes server does not have to be the same DBCS language as specified on
	  the Notes Connector Options tab. It appears that installing the U.S. English
	  version of the Notes server preserves the DBCS information for the Notes
	  user.
	
	2. Create a Notes user ID for the connector. Note that the Security Type should
	  be International for non-U.S. English versions of the Notes server, not North
	  American. Otherwise, the ID file is not usable by the Notes client.
	
	After you finish the configuration of the Exchange Notes Connector, all DBCS
	information in the message header or body, and directory information is
	preserved between Exchange Server and Lotus Notes.
	
	
	Additional query words: kangi cangee khangy
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
