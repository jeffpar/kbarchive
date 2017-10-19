---
layout: page
title: "Q235223: XADM: Cannot Configure Dial-Up Connections in German Version"
permalink: /kb/235/Q235223/
---

## Q235223: XADM: Cannot Configure Dial-Up Connections in German Version

	Article: Q235223
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to configure a Dial-Up Connection in the German version of
	Microsoft Exchange Server, the following error message may be displayed:
	
	  
	  Microsoft Exchange Administrator<BR/>
	  Die Resource Fur die Dialogfelder [301] (Language=0x7, Sub-Language=0x0) konnte nicht geladen werden.<BR/>
	  Die angegebene Sprachen-ID fur die Resourcen konnte nicht in der Image-Datei gefunden werden.<BR/>
	  Microsoft Windows NT<BR/>
	  ID-Nr: 0xc0020717
	
	After you click OK, the following error message may be displayed:
	
	  Internet Mail-Dienst
	  Bei der Initialisierung des Dialogfelds trat ein Fehler auf.
	
	These error messages may be displayed after you perform the following steps:
	
	1. In the Exchange Administrator Program, select the Internet Mail Service.
	
	2. Click <B>Enwahlverbindungen</B>.
	
	3. Check the previously configured phone book entry so that the Erhalten von
	  Nachrichten... button is enabled.
	
	4. In the <B>Domanen</B> dialogue, select Diese Domanen benutzen.
	
	5. Click the <B>Hinzufugen</B> button.
	
	NOTE: This problem does not occur in the English version of Exchange Server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The German version of this fix should have the following file attributes or
	later:
	
	Component: Administrator Program
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Imcadmin.dll | 5.5.2634.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: Admin Fehler IMC RAS
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
