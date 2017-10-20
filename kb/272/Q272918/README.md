---
layout: page
title: "Q272918: XADM: Preventing Attrib. Repl. from Exchange to Active Directory"
permalink: /kb/272/Q272918/
---

## Q272918: XADM: Preventing Attrib. Repl. from Exchange to Active Directory

{% raw %}

	Article: Q272918
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 19-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a general description of how to prevent the replication of
	a particular attribute to Active Directory.
	
	The Active Directory Connector (ADC) replicates entries from the Exchange Server
	directory to Active Directory, from Active Directory to the Exchange Server
	directory, and keeps all of these entries synchronized. To prevent the
	replication of a particular attribute to Active Directory, follow the steps
	outlined in the "More Information" section.
	
	MORE INFORMATION
	================
	
	1. Open the Active Directory Connector snap-in in Microsoft Management Console
	  (MMC).
	
	2. Right-click Active Directory Connector Management, and then click Properties
	  on the shortcut menu.
	
	3. Click the From Exchange tab. On this tab, if you click to select the check
	  box that is next to an attribute, you enable replication for that attribute;
	  if you click to clear the check box next to an attribute, you disable
	  replication for that attribute.
	
	  NOTE: Use caution when you disable the replication of some attributes because
	  you may disrupt the ADC.
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	You can test whether an attribute is being replicated to Active Directory to help
	you determine if you need to disable replication. To do so:
	
	1. Start the Exchange Server Administrator program in raw mode by typing "admin
	  /r" (without the quotation marks) at a command prompt in the Exchsrvr\Bin
	  folder.
	
	2. Click the Recipients container, and then click a mailbox.
	
	3. On the File menu, click Raw Properties.
	
	4. In the "List Attributes of Type" list, click All.
	
	5. In the Object Attributes box, find the attribute name of the attribute that
	  you want to test for.
	
	6. In the Edit Value field, type a number, such as "1036" (without the quotation
	  marks).
	
	7. Click Set, and then click OK.
	
	8. To check if the attribute replicated to Active Directory, open a program such
	  as ADSI Edit.
	
	WARNING: If you use the ADSI Edit snap-in, the LDP utility, or any other LDAP
	version 3 client and incorrectly modify the attributes of Active Directory
	objects, you can cause serious problems that may require you to reinstall
	Microsoft Windows 2000 Server and/or Microsoft Exchange 2000 Server. Microsoft
	cannot guarantee that problems resulting from the incorrect modification of
	Active Directory object attributes can be solved. Modify these attributes at
	your own risk.
	
	  a. Start ADSI Users and Computers from the Administrative Tools group.
	
	  b. Expand the Domain container.
	
	  c. Expand the Users container.
	
	  d. Right-click a user in the right pane, and then click Properties on the
	     shortcut menu.
	
	  e. On the Attributes tab, in the Select Property to View list, find attribute
	     that you modified in step 6; its value should be 1036 (or whatever value
	     you set in step 6).
	
	Additional query words: AD
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :2000,5.5 SP3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
