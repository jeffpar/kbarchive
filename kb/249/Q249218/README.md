---
layout: page
title: "Q249218: XFOR: Using English Version Notes Client and Connector w. DBCS"
permalink: /kb/249/Q249218/
---

## Q249218: XFOR: Using English Version Notes Client and Connector w. DBCS

	Article: Q249218
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to enable the Microsoft Exchange Connector for Lotus
	Notes to support double-byte character sets (DBCS) between Exchange Server and
	Lotus Notes with a North American or English version of the Notes client
	installed on an English version Windows NT Server.
	
	MORE INFORMATION
	================
	
	DBCS between Exchange Server and Lotus Notes is supported in the new and
	enhanced release of the Exchange Notes Connector in the Web 2 update. Most Asian
	languages are DBCS based, such as the following languages:
	
	- Chinese-Simplified
	
	- Chinese-Traditional
	
	- Japanese
	
	- Korean
	
	DBCS support is integrated with the United States English versions of the
	Exchange Notes Connector and Exchange Server. In addition, the English version
	Notes client can support entry and display of DBCS characters that include
	Japanese, Korean, Simplified Chinese, or Traditional Chinese if you copy
	specific .cls files.
	
	Configuring the English version of Windows NT Server and the Exchange Notes Connector to Support DBCS
	-----------------------------------------------------------------------------------------------------
	
	To configure the computer running the English version of Windows NT Server and
	the Exchange Notes Connector to support DBCS:
	
	1. Locate the DBCS language that you want from the Langpack folder on the
	  Windows NT 4.0 CD.
	
	2. Right-click the .inf file for the language that you want, and click Install;
	  this adds the DBCS language that you want to the list in Regional Settings.
	
	3. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Regional Settings.
	
	4. On the Regional Settings tab, click the language that you want in the list,
	  and click to select the "Set as system default locale" check box.
	
	5. Restart the computer running Windows NT Server.
	
	6. Install the U.S. English version of Exchange Server version 5.5, Service Pack
	  1 or later.
	
	7. Install the U.S. English version of the Exchange Notes Connector (Service
	  Pack 2 or later).
	
	8. Install the North American or International English version of the Notes
	  client version 4.5 or later.
	
	9. On the Options tab of the Notes Connector property pages, click the Notes
	  server language that you want, based on the DBCS client language that you
	  want and not on the actual language of the corresponding Notes server.
	
	10. Follow the normal procedures to complete the configuration of the Exchange
	  Notes Connector.
	
	After you configure the Exchange Notes Connector, all of the DBCS information in
	the message header or body and all of the directory information is preserved
	between Exchange Server and Lotus Notes.
	
	Configuring the English Version of the Notes Client to Support DBCS
	-------------------------------------------------------------------
	
	To support DBCS such as Japanese, Korean, Simplified Chinese, or Traditional
	Chinese text, replace some of the .cls files of the English version Notes client
	with the files in the following list. These files are in the Notes program
	directory.
	
	NOTE: Quit Notes before you copy the following files.
	
	To support the following languages, copy the files that are listed for that
	language:
	
	- Japanese:
	
	  L_cp932.cls to L_cpdos.cls
	  L_cp932.cls to L_cpwin.cls
	  Colljpn.cls to Collstd.cls
	  Dbcs\Leadbyte.cls to Notes Directory
	  Dbcs\Hlfpitch.cls to Notes Directory
	  Dbcs\Fulpitch.cls to Notes Directory
	
	- Korean:
	
	  L_cpks.cls to L_cpdos.cls
	  L_cpks.cls to L_cpwin.cls
	  Collks.cls to Collstd.cls
	  Dbcs\Leadbyte.cls to Notes Directory
	  Dbcs\Hlfpitch.cls to Notes Directory
	  Dbcs\Fulpitch.cls to Notes Directory
	
	- Simplified Chinese:
	
	  L_cpgb.cls to L_cpdos.cls
	  L_cpgb.cls to L_cpwin.cls
	  Collgb.cls to Collstd.cls
	  Dbcs\Leadbyte.cls to Notes Directory
	  Dbcs\Hlfpitch.cls to Notes Directory
	  Dbcs\Fulpitch.cls to Notes Directory
	
	- Traditional Chinese:
	
	  L_cpbig5.cls to L_cpdos.cls
	  L_cpbig5.cls to L_cpwin.cls
	  Collbig5.cls to Collstd.cls
	  Dbcs\Leadbyte.cls to Notes Directory
	  Dbcs\Hlfpitch.cls to Notes Directory
	  Dbcs\Fulpitch.cls to Notes Directory
	
	NOTE: You can get DBCS support for only one language at one time. This is by
	Notes design.
	
	For additional information about how to enable the Exchange Notes Connector with
	an international (non-English) version of the Notes client and Windows NT
	Server, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q217058 XFOR: How to Enable DBCS Support on the Exchange Notes Connector
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
