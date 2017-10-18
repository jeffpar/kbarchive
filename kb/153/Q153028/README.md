---
layout: page
title: "Q153028: XADM: How to Export Multiple (Secondary) E-mail Addresses"
permalink: kb/153/Q153028/
---

## Q153028: XADM: How to Export Multiple (Secondary) E-mail Addresses

	Article: Q153028
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 31-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you export the directory, only the primary addresses are exported by
	default. In order to export all addresses, including the secondary addresses,
	the export file (.CSV) should have Secondary-Proxy- Addresses as part of the
	header.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server automatically generates the following e-mail addresses
	for the server core components and recipients: MS Mail (PC) address, X.400
	address, and SMTP address. These addresses are the primary addresses and are
	identified by bold, capitalized text in the E-mail Addresses page.
	
	If needed, you can use the E-mail Addresses property page to add multiple
	addresses. These addresses are the secondary addresses and are identified by
	regular, lower case text. You can "promote" the secondary address to the primary
	address by selecting the address and pressing Set as Reply Address button in the
	E-mail Addresses property page.
	
	To export only the primary addresses, you can use the Admin program and either
	click Directory Export on the Tools menu in the user-interface or run the
	program from the command. In order to include the secondary addresses in the
	exported text output (.CSV file), make sure that the export file (CSV file) that
	is specified when you export the directory contains the
	Secondary-Proxy-Addresses in the header.
	
	Complete the following steps to export the multiple addresses:
	
	1. From the Admin program user-interface, click Directory Export on the Tools
	  menu.
	
	2. Select the Export File button to specify the text output file.
	
	3. Select the Export button to export the directory.
	
	4. If the export file specified in step #2 did not exist or did not contain the
	  Secondary-Proxy-Addresses as part of the header, only the primary addresses
	  would have shown in the exported text output.
	
	5. Open the exported text output with any text editor.
	
	6. Go to the end of the first line and add the following:
	
	  , Secondary-Proxy-Addresses
	
	7. Save and close the file.
	
	8. Export the directory again. Make sure to specify the edited file as the
	  export file. As a result, the exported text output has all e-mail
	  addresses---the primary and the secondary addresses.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
