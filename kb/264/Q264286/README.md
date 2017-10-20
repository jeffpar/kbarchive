---
layout: page
title: "Q264286: PC DirSync: Exch. Postoffice Not in MS Mail Global Address List"
permalink: /kb/264/Q264286/
---

## Q264286: PC DirSync: Exch. Postoffice Not in MS Mail Global Address List

{% raw %}

	Article: Q264286
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2,3.2a,3.5; winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an MS Mail postoffice is converted to an Exchange Server postoffice, the
	converted Exchange Server postoffice may not be displayed in the global address
	list of other MS Mail postoffices. The recipients in the converted Exchange
	Server postoffice are displayed in the Exchange Server Administrator program.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. In the Exchange Server Administrator program, click the requestor object for
	  an MS Mail postoffice that has a global address list in which the converted
	  (from MS Mail) Exchange Server posoffice is not displayed.
	
	2. Open the requestor object properties, click the Export Containers tab, and
	  then select the appropriate site in the Site list.
	
	3. On the Export Containers tab, select the Recipients container under Recipient
	  Containers, and then click Add to add it under "Export these recipients".
	
	  NOTE: If multiple MS Mail postoffices have a global address list in which the
	  converted (from MS Mail) Exchange Server posoffice is not displayed, perform
	  steps 1 through 3 for the requestor objects for all of these MS Mail
	  postoffices.
	
	4. In MS Mail, check the System.mbg file to make sure that it is updating.
	
	5. On the Exchange Server hub postoffice, check the Recipients container. Make
	  sure that the Recipients container contains addresses for the converted
	  Exchange Server postoffice and that the Recipients container is displayed
	  under "Export these recipients" on the Export Containers tab (to be exported
	  to MS Mail).
	
	6. In MS Mail, run the Netdump utility to make sure that the Exchange Server
	  postoffice .usr file exists.
	
	  The following is a sample of the netdump command line:
	
	  NETDUMP admin [-D[d|path]] [-Ffilename] [-Llogfile] -Ppassword
	
	  Check the third column from the left for the postoffice Mailbag, which has the
	  same hexadecimal ID (hexid) as the .usr file. Check for the same hexid in the
	  Usr directory on the MS Mail postoffices.
	
	7. Empty the Dxadata directory.
	
	8. Stop and restart the Directory Synchronization Service (DXA).
	
	9. Make sure that the amount of disk space available on the hard disk is equal
	  to or greater than the size of the Xdir.edb file multiplied by 4.
	
	10. Manually synchronize the directories.
	
	For additional information about how to manually synchronize the directories,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q147464 XFOR: Manual Dirsync with Exchange Server as Dirsync Server
	
	  Q148309 XFOR: Manual Dir-Sync with Exchange as Dir-Sync Requestor
	
	Additional query words: GAL
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : WINDOWS:3.2,3.2a,3.5; winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
