---
layout: page
title: "Q238992: XFOR: Notes to Exchange Dirsync Generates Events 6206 &amp; 60102"
permalink: /kb/238/Q238992/
---

## Q238992: XFOR: Notes to Exchange Dirsync Generates Events 6206 &amp; 60102

{% raw %}

	Article: Q238992
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 29-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A full directory synchronization (dirsync) from Lotus Notes to Exchange Server
	may generate events 6206 and 60102 under some circumstances. There may be one of
	each of these events for each user in the Lotus Notes Address book. A large
	address book may generate thousands of these events.
	
	  Event 6206
	  Source: MsExchangeNOTES
	  Type: Warning
	
	  Description: MS Exchange Reports: Unable to process custom recipient
	  f7afa2e9-b053f1db-852567be-4a3f83 because target address NOTES:Ralph
	  Jones/LotusOrg@LotusOrg has already been assigned to Address Book entry
	  /o=Ibiza/ou=Shuffletown/cn=Notes Recipients/cn=RalphJ.
	
	  Event 60102
	  Source: MsExchangeNOTES
	  Type: Information
	
	  Description:
	  UPDATE entry details:
	
	  DN: f7afa2e9-b053f1db-852567be-4a3f83
	  TA: NOTES:Ralph Jones/LotusOrg@LotusOrg
	  ACCOUNT:
	  COMPANY:
	  DEPARTMENT:
	  FULLNAME: Ralph Jones
	  FIRSTNAME: Ralph
	  ALIAS: Ralph Jo
	  OFFICE:
	  LASTNAME: Jones
	  NOTESADDR:
	  USNCreated:
	  Initials:
	  Title:
	  Phone:
	  MobilePhn:
	  Fax:
	
	MORE INFORMATION
	================
	
	This only occurs if logging is set to Maximum on the Microsoft Exchange
	Connector for Lotus Notes. To prevent getting these events, set logging to
	Minimum or None.
	
	Changes made to the Lotus Notes Address Book are correctly synchronized to
	Exchange Server, so these events can be dismissed in this situation. Event 6206
	is listed as a Warning, but in this instance, would be more correctly
	interpreted as informational.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
