---
layout: page
title: "Q168465: XFOR: Event ID 68 Running cc:Mail DirSync"
permalink: /kb/168/Q168465/
---

## Q168465: XFOR: Event ID 68 Running cc:Mail DirSync

{% raw %}

	Article: Q168465
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run directory synchronization (dirsync) with the Microsoft Exchange
	Connector for Lotus cc:Mail, the following event may appear in the event log:
	
	  Event ID: 68
	  Source: MSExchangeCCMC
	  Type: Error
	  Category: General
	  Description: Lotus cc:Mail EXPORT to file CCMDIR.EXP returned result code 1.
	  Could not access the Lotus cc:Mail Post Office.
	
	CAUSE
	=====
	
	This problem can occur when you are using the wrong version of Import.exe and
	Export.exe. The problem can also occur when you are using the correct versions
	of the files, but the wrong versions are selected in the properties of the
	Exchange Connector for Lotus cc:Mail.
	
	RESOLUTION
	==========
	
	If you are connecting to a Lotus cc:Mail DB6 post office, the Exchange Server
	computer must be running Import.exe version 5.15 and Export.exe version 5.14. In
	addition, in the properties of the Exchange Connector for Lotus cc:Mail, on the
	Post Office tab, "Import 5.15/Export 5.14" must be selected.
	
	If you are connecting to a Lotus cc:Mail DB8 post office, the Exchange Server
	computer must be running Import.exe and Export.exe version 6.0 or later. In
	addition, in the properties of the Exchange Connector for Lotus cc:Mail, on the
	Post Office tab, "Import 6.0/Export 6.0" must be selected.
	
	To select a different version in the properties of the connector, follow these
	steps:
	
	1. Start the Administrator program. To do so, click Start, point to Programs,
	  point to Microsoft Exchange, and then click Microsoft Exchange Administrator.
	
	2. In the left pane, click the Connections object under the appropriate site. In
	  the right pane, click the Exchange Connector for Lotus cc:Mail, and then on
	  the File menu, click Properties. Note that the Connections object appears
	  under the Configuration object.
	
	3. On the Post Office tab, under "Import/Export version", select the appropriate
	  version.
	
	MORE INFORMATION
	================
	
	Please contact Lotus for information about obtaining the correct versions of the
	cc:Mail Import.exe and Export.exe utilities.
	
	NOTE: You can also troubleshoot Event ID 68 in the same way as Event ID 70. For
	information about troubleshooting Event ID 70, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q166045 XFOR: cc:Mail Connector Event ID 70
	
	
	Additional query words: CCMC fail stop
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
