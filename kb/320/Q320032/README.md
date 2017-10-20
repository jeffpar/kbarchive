---
layout: page
title: "Q320032: XFOR: Cannot Establish Connection with Lotus Notes Server"
permalink: /kb/320/Q320032/
---

## Q320032: XFOR: Cannot Establish Connection with Lotus Notes Server

{% raw %}

	Article: Q320032
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to configure the Microsoft Exchange Server 5.5 connector for Lotus
	Notes, you may not be able to establish a connection with the Notes server. You
	may receive error messages similar to the following in the Exchange Connectivity
	Administrator Log Browser.
	
	  
	
	  <date>  <time>-        LME-NOTES-MEXNTS(0a18) 1 64210:Unable to connect to
	  to the Notes Server SERVERNAME/NOTESWAY.
	
	  >> ntshcdb(116) 
	
	-and-
	
	  
	
	  <date> <time>-        LME-NOTES-MEXNTS(0a18) 1 00510:Error {Mail system
	  failure}: The application failed to initialize.
	  >> stdmain(863) 
	
	-and-
	
	  
	
	  <date> <time>-        LME-NOTES-MEXNTS(0a18) 3 00505:LME-NOTES-MEXNTS is
	  ending, last return code was {Mail system failure}.
	  >> stdmain(958) 
	
	-and-
	
	  
	
	  <date> <time>-        LME-NOTES-MEXNTS(0a18) 1 41220:Error: no Notes
	  Session Open.
	  >> ntshcs(2055) 
	
	CAUSE
	=====
	
	This problem may occur if the path to the Notes.ini file in the properties of
	the Lotus Notes Connector is not vaild.
	
	RESOLUTION
	==========
	
	To resolve this issue, type the complete path and file name of the Notes.ini
	file in the Lotus Notes Connector Properties dialog box. To do this, follow
	these steps:
	
	1. Start the Microsoft Exchange Administrator program. To do this, click Start,
	  point to Programs, point to Microsoft Exchange, and then click Microsoft
	  Exchange Administrator.
	
	2. Expand your site, and then click Connections.
	
	3. In the right pane, click "Connector for Lotus Notes".
	
	4. On the File menu, click Properties.
	
	5. Click the Advanced tab.
	
	6. In the "Notes INI file location" box, type the complete path (including the
	  file name) to the Notes.ini file. For example, if the Notes.ini file is
	  stored in the C:\Winnt folder, type "c:\winnt\notes.ini" (without the
	  quotation marks).
	
	7. Click OK.
	
	MORE INFORMATION
	================
	
	For additional information about how to troubleshoot Lotus Notes Connector
	issues, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q198677 XFOR: Troubleshooting Common Exchange Notes Connector Problems
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
