---
layout: page
title: "Q303249: XADM: Export of DLs or Custom Recipients May Fail"
permalink: /kb/303/Q303249/
---

## Q303249: XADM: Export of DLs or Custom Recipients May Fail

{% raw %}

	Article: Q303249
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to export distribution lists (DLs) or custom recipients with
	the Command Line Directory Export Utility by using a Directory Export Options
	file, the export may be unsuccessful and you may receive a .csv file that
	contains only header information.
	
	In the Application event log, the following event may be logged:
	
	  Event ID: 302
	  Event Type: Warning
	  Event Source: MSExchangeDSExp
	  Event Category: None
	  Description: No entries had been found for the specified object class DL.
	
	  (When you want to export distribution lists.)
	
	-or-
	
	  Event ID: 302
	  Event Type: Warning
	  Event Source: MSExchangeDSExp
	  Event Category: None
	  Description: No entries had been found for the specified object class remote.
	
	  (When you want to export custom recipients.)
	
	NOTE: Directory Export in the Exchange Admin tool functions properly.
	
	CAUSE
	=====
	
	This behavior can occur because a "HomeServer=<Servername>" line had been
	added (with the "Servername" entered into this line) to the Directory Export
	Options file.
	
	RESOLUTION
	==========
	
	To resolve this behavior, ensure that the entry for the HomeServer attribute is
	blank, similar to the following example:
	
	  HomeServer=
	
	Or, delete the entire line with the HomeServer attribute in the Directory Export
	Options file.
	
	MORE INFORMATION
	================
	
	Neither DLs nor custom recipients have a HomeServer attribute. If a HomeServer
	attribute is entered in the Export Options file, the Admin.exe program searches
	unsuccessfully for any objects with this HomeServer attribute.
	
	The event that is described in the Symptoms section of this article can be logged
	if the "InformationLevel=" entry is set to Full.
	
	For additional information about command-line export, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q184766 XADM: Command-Line Export Fails on Custom Recipients
	
	  Q160602 XADM: Exporting from Command Line Produces Only Mailboxes
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
