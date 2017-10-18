---
layout: page
title: "Q189906: XCLN: How to Ensure Proper Name Resolution"
permalink: kb/189/Q189906/
---

## Q189906: XCLN: How to Ensure Proper Name Resolution

	Article: Q189906
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Outlook for the Macintosh client for Microsoft Exchange
	Server, the e-mail addresses you type into the To, Cc, or Bcc boxes of a mail
	message do not resolve, specifically the names do not appear as underlined.
	
	CAUSE
	=====
	
	You are using either Open Transport or MacTCP to provide TCP/IP protocol
	services on the network, and there is no provision for Domain Name Service
	(DNS).
	
	RESOLUTION
	==========
	
	There are two viable solutions for this condition:
	
	- Configure the Macintosh workstation with a local hosts file that contains
	  names and IP addresses for the Microsoft Exchange Server computer.
	
	  -or-
	
	- Configure and implement a DNS Server on the network.
	
	MORE INFORMATION
	================
	
	DNS is used to identify computers on a TCP/IP network. Implementing a DNS server
	may not be cost effective on a small network.
	
	To configure a local hosts file, follow these steps:
	
	1. Using SimpleText or another text editor, create a Hosts file using the
	  following format.
	
	  <Exchange server name> CNAME <IP domain name> <IP domain
	  name> A <corresponding IP address>
	
	  For Example:
	
	        Mail1 CNAME Mail1.Mycompany.com
	        Mail1.Mycompany.com A 157.54.16.157
	   
	
	  Ensure that there are spaces between each of the Hosts file elements.
	
	2. Save the file with the name, Hosts. Be careful not to add an extension and
	  make sure that the file is saved as text. This file should be saved in the
	  System Folder.
	
	3. On the Apple menu, click Control Panels, and then TCP/IP.
	
	4. On the Edit menu, click User Mode, and then click Advanced.
	
	5. Click Select Hosts File and click your Hosts file in the System Folder. Click
	  Open.
	
	6. Close the TCP/IP window and click Save when you are prompted to save changes.
	
	
	Additional query words: 98
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbOutlookMacSearch kbOutlook800Mac
	Version           : MACINTOSH:8.0
	Issue type        : kbprb
	
	=============================================================================
	
