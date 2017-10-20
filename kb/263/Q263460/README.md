---
layout: page
title: "Q263460: XADM: Error When You Import a Folder with MBX Proxy Addresses"
permalink: /kb/263/Q263460/
---

## Q263460: XADM: Error When You Import a Folder with MBX Proxy Addresses

{% raw %}

	Article: Q263460
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to import a .csv file into an Exchange Server folder with proxy
	addresses for mailboxes with an .mbx file name extension, you receive the
	following error message
	
	  The directory import from file <Filename>.CSV is complete.
	  <X> Error descriptions were recorded in the system's application event
	  log.
	  The file <path>csv.err contains copies of all object descriptions
	  containing errors.
	
	Also, the following event is logged in the Application event log.
	
	  Event ID : 238
	  Source : MSExchangeDSImp
	  Category : none
	  Type : Error
	  Description :
	
	  The e-mail address specified for import object <Useralias> is not
	  unique. MBX:1 has already been assigned to Address Book entry
	  /o=<Organisation></ou=Site></cn=container></cn=<useralias>>
	
	CAUSE
	=====
	
	The import procedure does not work because you cannot use the same proxy
	address, of any type, for more than one recipient. In this case, the value of
	MBX:1 or MBX:0 is assigned to the first record in the .csv file and cannot be
	assigned to any subsequent entries in the .csv file.
	
	STATUS
	======
	
	The folder import procedure cannot be adopted to include or exclude mailboxes
	from cleaning. You can achieve this only by using the Mailbox Manager tool.
	
	MORE INFORMATION
	================
	
	When you use the Mailbox Manager tool, you can either include or set a policy
	for each container to exclude a mailbox. Corresponding to the selection, the
	tool generates a proxy address for the corresponding mailbox of either type
	MBX:0 or type MBX:1. However, if you try to import a .csv file, it does not work
	and you receive the error message that is mentioned in the "Symptoms" section.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q242212 XADM: Mailbox Manager Mailbox Exclusion Information Stored Using MBX
	  Proxy Address
	
	Additional query words: directoy
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
