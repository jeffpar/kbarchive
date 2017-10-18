---
layout: page
title: "Q186182: XFOR: Some Macintosh Attachments Not Encoded Using BinHex"
permalink: kb/186/Q186182/
---

## Q186182: XFOR: Some Macintosh Attachments Not Encoded Using BinHex

	Article: Q186182
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Some Macintosh-based programs create files that are also compatible with
	programs that are not Macintosh-based. When you attach these files to a message
	and send the message through the Internet Mail Service, the information store
	may not recognize the file as a Macintosh file. This causes the Microsoft
	Exchange Server computer to encode the file using UUENCODE instead of BinHex,
	even if you specified that the file should be encoded using BinHex in the
	Exchange client or in the properties for the Internet Mail Service.
	
	Because the file is encoded using UUENCODE, you are unable to open the attachment
	when you view the message in a Macintosh e-mail client. To open the attachment,
	you must manually decode the file using a program that is able to do so.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	When you apply the first fix, a MacCreatorTypes registry value is created In the
	following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS
	  \ParametersSystem\InternetContent
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	This registry value has a type of REG_MULTI_SZ and contains a list of Macintosh
	file types. If the file you attach to the message has an extension that is
	specified in this registry value, the information store recognizes the file as a
	Macintosh file and encodes the file using BinHex.
	
	When you apply the second fix, a BinHexAllFiles registry value is created in the
	above registry key. This registry value has a type of REG_DWORD. If the registry
	value is assigned a value greater than 0 (zero) and the Internet Mail Service is
	configured so that outbound attachments are sent in BinHex, all attachments sent
	through the Internet Mail Service are encoded in BinHex. If the registry value
	is assigned a value of 0 (zero) and the Internet Mail Service is configured so
	that outbound attachments are sent in BinHex, Macintosh attachments sent through
	the Internet Mail Service are encoded in BinHex and non-Macintosh attachments
	are encoded in UUENCODE.
	
	To configure the Internet Mail Service so that outbound attachments are sent in
	BinHex, perform the following steps:
	
	1. Start the Exchange Server Administrator program.
	
	2. In the left pane of the Administrator window, click the Connections object
	  under the appropriate site. In the right pane, click the Internet Mail
	  Service, and then click Properties on the File menu. Note that the
	  Connections object appears under the Configuration object.
	
	3. On the Internet Mail tab, select UUENCODE, select the Binhex check box, and
	  then click OK.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
