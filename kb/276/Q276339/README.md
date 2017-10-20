---
layout: page
title: "Q276339: Certificate Server/KMS Do Not Grant Certificate if DN Too Long"
permalink: /kb/276/Q276339/
---

## Q276339: Certificate Server/KMS Do Not Grant Certificate if DN Too Long

{% raw %}

	Article: Q276339
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Certificate Server and Key Management Server (KMS) may not grant a certificate
	to a client that requests one.
	
	CAUSE
	=====
	
	This issue can occur if the Distinguished Name (DN) is too long for the
	certificate server. Each individual CN= string is less than 64 characters.
	Certificate Server version 1.0 enforces the limit only on the concatenation of
	all like Relative Distinguished Names. Certificate Server 1.0 enforces the limit
	on the concatenated string length only, and it is not possible to disable the
	enforcement, because the database schema is fixed.
	
	Certificate Server 2.0 (in Microsoft Windows 2000 Server) enforces the length
	limit on each Relative Distinguished Name (RDN) component, and this enforcement
	can be disabled by editing the registry. It also enforces a much larger limit on
	the concatenated string length by using the DB schema (8192 characters for CN=).
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To disable the length enforcement, you must make a registry change on the
	Certificate Server. You can do so by using the Certutil tool or Regedt32.exe:
	
	Certutil
	--------
	
	1. Open a command prompt.
	
	2. Type "net stop "certificate services"" (without the quotation marks), and
	  then press ENTER.
	
	3. Type "certutil -setreg ca\EnforceX500NameLengths 0" (without the quotation
	  marks), and then press ENTER.
	
	4. Type "net start "certificate services"" (without the quotation marks), and
	  then press ENTER.
	
	Regedt32.exe
	------------
	
	Set the following registry value to zero:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\CertSvc\Configuration\<CA
	  Name>\EnforceX500NameLengths
	
	Stop and restart the certificate services.
	
	MORE INFORMATION
	================
	
	The following is sample Certutil output from the preceding request:
	
	certutil -v request.der
	PKCS10 Certificate Request:
	Version: 1
	Subject:
	   CN=short
	   CN=really really really really really really long container name
	   CN=recipients
	   OU=grahammsite
	   O=grahammorg
	   [0,0]: CERT_RDN_PRINTABLE_STRING, Length = 10 (10/64 Characters)
	       2.5.4.10  Organization (O)="grahammorg"
	       67 72 61 68 61 6d 6d 6f  72 67                     grahammorg
	
	   [1,0]: CERT_RDN_PRINTABLE_STRING, Length = 11 (11/64 Characters)
	       2.5.4.11  Organizational Unit (OU)="grahammsite"
	       67 72 61 68 61 6d 6d 73  69 74 65                  grahammsite
	
	   [2,0]: CERT_RDN_PRINTABLE_STRING, Length = 10 (10/64 Characters)
	       2.5.4.3  Common Name (CN)="recipients"
	       72 65 63 69 70 69 65 6e  74 73                     recipients
	
	   [3,0]: CERT_RDN_PRINTABLE_STRING, Length = 61 (61/64 Characters)
	       2.5.4.3  Common Name (CN)="really really really really really really long container name"
	       72 65 61 6c 6c 79 20 72  65 61 6c 6c 79 20 72 65   really really re
	       61 6c 6c 79 20 72 65 61  6c 6c 79 20 72 65 61 6c   ally really real
	       6c 79 20 72 65 61 6c 6c  79 20 6c 6f 6e 67 20 63   ly really long c
	       6f 6e 74 61 69 6e 65 72  20 6e 61 6d 65            ontainer name
	
	   [4,0]: CERT_RDN_PRINTABLE_STRING, Length = 5 (5/64 Characters)
	       2.5.4.3  Common Name (CN)="short"
	       73 68 6f 72 74                                     short
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Component         : Security
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
