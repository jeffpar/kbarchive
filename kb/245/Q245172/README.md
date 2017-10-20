---
layout: page
title: "Q245172: Err Msg: Could Not Find Domain Controller for This Domain"
permalink: /kb/245/Q245172/
---

## Q245172: Err Msg: Could Not Find Domain Controller for This Domain

{% raw %}

	Article: Q245172
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to establish a trust relationship from a trusting domain by
	connecting to a primary domain controller (PDC) running Microsoft Windows NT
	Server 4.0 in a trusted domain, you may receive the following error message:
	
	  Could not find domain controller for this domain.
	
	CAUSE
	=====
	
	This behavior can occur if the 1b (domain master browser) and 1c (domain
	controller) NetBIOS names for the PDC in the trusted domain are not registered
	in the Windows Internet Naming Service (WINS). This can occur when the WINS
	servers in the two domains do not replicate to each other.
	
	RESOLUTION
	==========
	
	To resolve this issue, modify the Lmhosts file that contains the 1b and 1c
	entries for the PDC of the trusted domain:
	
	1. In a text editor (such as Notepad), open the Lmhosts file located in the
	  %SystemRoot%\System32\drivers\etc folder.
	
	2. Add the following lines to the Lmhosts file, using the name of the trusted
	  domain, the Internet Protocol (IP) address, and the NetBIOS name of the PDC
	  in the trusted domain, as indicated in the following example:
	
	   10.0.0.1   PDCName   #PRE #DOM:DomainName
	   10.0.0.1   "DOMAINNAME     \0x1b"   #PRE
	
	   - Replace 10.0.0.1 in the example with the IP address of the PDC in the
	     trusted domain.
	
	   - Replace the PDCName with the NetBIOS name of the trusted domain PDC. When
	     you specify the NetBIOS suffix (the sixteenth character), the spacing
	     between the quotation marks is critical. There must be a total of 20
	     characters within the quotation marks (the domain name plus the
	     appropriate number of spaces to pad up to 15 characters plus the backslash
	     (\) plus the NetBIOS hex representation of the service type).
	
	   - Replace DomainName with the Windows NT 4.0 domain name of the trusted
	     domain.
	
	3. Save the changes to the Lmhosts file.
	
	4. Specify the use of the Lmhosts file:
	
	  a. In Control Panel, double-click Network.
	
	  b. Click the Protocols tab.
	
	  c. In the Network Protocols box, click TCP/IP Protocol, and then click
	     Properties.
	
	  d. In the WINS Address tab, click the Enable LMHOSTS Lookup check box, and
	     then click OK.
	
	5. Click Yes when you are prompted to restart your computer.
	
	MORE INFORMATION
	================
	
	This behavior can also occur if you manually added the RestrictAnonymous
	registry value to the registry on the PDC of the trusted domain. This value
	prevents null session connections. In addition, this registry value also
	prevents a trusting domain from connecting to the PDC in the trusted domain to
	establish a trust relationship.
	
	For information about establishing a trust relationship between domains, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q178640 Could Not Find Domain Controller When Establishing a Trust
	
	For more information about using an Lmhosts file, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q180094 How to Write an LMHOSTS File for Domain Validation
	
	  Q163409 NetBIOS Suffixes (16th Character of the NetBIOS Name)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
