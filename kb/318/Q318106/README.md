---
layout: page
title: "Q318106: XADM: Correct Order to Define Custom Attributes in Exchange 5.5"
permalink: kb/318/Q318106/
---

## Q318106: XADM: Correct Order to Define Custom Attributes in Exchange 5.5

	Article: Q318106
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you set up (or map) custom attributes in Exchange Server by using the
	Microsoft Exchange Server Administrator program, it is extremely important that
	you define the attributes and populate the attributes in the correct order. This
	article describes the correct method to do so.
	
	MORE INFORMATION
	================
	
	To reduce the occurrence of duplicate entries, you must first define the custom
	attribute mapping in DS Site Configuration before you populate the attribute.
	
	The following procedure is the correct order to follow:
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Start the Administrator program.
	
	2. Click Configuration.
	
	3. Double-click DS Site Configuration, and then click the Custom Attributes tab.
	
	4. Type a name for each attribute that you want to use in the Values section.
	
	5. Click OK, and then exit the Administrator program.
	
	6. Start the Administrator program in raw mode by typing the following text at a
	  command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	7. Click an object such as a mailbox.
	
	8. On the File menu, click RAW Properties.
	
	9. In the "List attributes of type" box, click All.
	
	10. For each attribute that you defined as a custom attribute in step 4, verify
	  that the Object Attribute definition matches the common name
	  <Extension-Attribute-X>, where <X> is the custom attribute
	  number that you defined for that attribute in step 4.
	
	11. After you have verified that the Object Attribute definition matches the
	  common name <Extension-Attribute-X>, populate the defined custom
	  attribute either manually or through a Directory Import.
	
	NOTE: The key to success in this process is to define the custom attribute
	mapping first, verify that the custom attribute was mapped properly, and then
	enter the data for that defined attribute.
	
	For additional information about custom attribute uses and Directory
	Import/Export, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q151198 XADM: How to Set Up a Search for a Custom Attribute
	
	  Q155414 XADM: Bulk Import/Export FAQ
	
	Additional query words: schema; Admin; excel; csv
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
