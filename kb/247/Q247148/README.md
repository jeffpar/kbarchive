---
layout: page
title: "Q247148: XADM: Slow Response When Searching on Custom Attributes"
permalink: kb/247/Q247148/
---

## Q247148: XADM: Slow Response When Searching on Custom Attributes

	Article: Q247148
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55kbfaq
	Last Modified: 19-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a search, either by using the Exchange Server Administrator
	program or by clicking Find on the Tools menu of the Address Book in Microsoft
	Outlook, searches against custom attributes may be very slow. These searches may
	be especially slow in large organizations when you search against the global
	address list.
	
	CAUSE
	=====
	
	This issue can occur because custom attributes are not indexed in the Exchange
	Server directory by default, which causes a search for custom attributes to run
	very slowly compared to a search against built-in searchable attributes.
	
	RESOLUTION
	==========
	
	To resolve this issue, index the custom attribute that you want to search
	against by using the Exchange Server Administrator program in raw mode:
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. On the View menu, click Raw Directory. This adds the Schema container in the
	  left pane.
	
	3. Double-click the Schema object, and then press the F5 key to refresh the
	  display.
	
	4. Find the custom attribute in the list, and then open the custom attribute's
	  properties, either by double-clicking the attribute or by clicking the
	  attribute and then clicking Properties on the File menu.
	
	5. When a message box is displayed, click Yes to view the raw properties of the
	  object.
	
	6. From the "Object attributes" list, click the Search-Flags attribute.
	
	7. In the "Edit value" box, type a value of either "1" (without the quotation
	  marks) or "2" (without the quotation marks) (as applicable), and then click
	  Set. If you set the value to 1, the attribute is indexed, which makes the
	  attribute more readily available to a query and therefore much faster to
	  query against. If you set the value to 2, the attribute is indexed and made
	  available for use in Ambiguous Name Resolution (ANR). For a detailed
	  explanation of ANR, refer to the "More Information" section of this article.
	
	8. Click OK to close the properties.
	
	MORE INFORMATION
	================
	
	The Search-Flags object attribute can be set to one of the following values:
	
	- 0 (No index)
	
	- 1 (Index)
	
	- 2 (ANR and index)
	
	Explanation of Ambiguous Name Resolution
	----------------------------------------
	
	ANR is an efficient search algorithm that is associated with Lightweight
	Directory Access Protocol (LDAP) clients that allows for objects to be bound
	without complex search filters. ANR is useful when you want to locate objects
	and attributes that have full names that you do not know. In this case, you can
	present a search for partial matches. For example, in a situation in which the
	requesting client knows a building name but not the associated number for the
	building, a client can query on just the building name. A full list of all of
	the buildings that have that building name are displayed, and the client can
	choose the appropriate building name and number at that point. For example, the
	client may see a list of the following buildings: Campus1, Campus2, and
	Campus3.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q151198 XADM: How to Set Up a Search for a Custom Attribute
	
	  Q146024 XCLN: Ambiguous Name Resolution Methods
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbfaq
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : ALPHA MIPS PPC x86
	Issue type        : kbprb
	
	=============================================================================
	
