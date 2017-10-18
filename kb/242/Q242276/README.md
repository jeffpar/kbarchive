---
layout: page
title: "Q242276: XADM: KM Server with Subordinate CA Displays Error Message"
permalink: kb/242/Q242276/
---

## Q242276: XADM: KM Server with Subordinate CA Displays Error Message

	Article: Q242276
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to configure Exchange Server 5.5 Key Management server (KM
	server) to use X.509v3 certificates, you can use a subordinate certification
	authority (CA). However, when you change from X.509v1 to X.509v3, you may
	receive the following error message:
	
	  The hierarchy of the MS Certificate Servers for your KM server is invalid.
	
	  ID# c1031daf
	
	CAUSE
	=====
	
	This issue can occur if you try to use a subordinate CA that cannot issue
	certificates to the KM server that are valid for at least two years.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the certificate expiration date on the Microsoft
	Windows 2000 Server CA that issues certificates to the KM server. To change the
	certificate expiration date on the CA, modify the registry values on the Windows
	2000 Server CA.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To change the certificate expiration date:
	
	1. On the CA that the legacy policy module is installed on, start Registry
	  Editor (Regedt32.exe).
	
	2. Locate the ValidityPeriodUnits value under the following registry key (where
	  <your_CA_name> is the name of the Windows 2000 Server CA):
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\CertSvc\Configuration\<your_CA_name>
	
	  The default setting for this value is "1".
	
	3. On the Edit menu, click REG_DWORD, type "2" (without the quotation marks) (or
	  a greater value), and then click OK.
	
	4. Quit Registry Editor.
	
	5. Stop and restart the computer that is running Microsoft Certificate Server.
	
	6. Try to enable X.509v3 certificates again on the KM server.
	
	Note that in a CA hierarchy, the child CA must always have a validity period that
	is less than its parent or root CA. Therefore, you may need to change the
	validity period of more than one CA to achieve an issuing (subordinate) CA that
	can issue certificates with a minimum two-year validity period. To change the
	validity period of a CA:
	
	1. Locate the ValidityPeriod value under the following registry key (where
	  <your_CA_name> is the name of the Windows 2000 Server CA):
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\CertSvc\Configuration\<your_CA_name>
	
	  The default setting for this value is "years".
	
	2. On the Edit menu, click REG_SZ, type the new validity period setting that you
	  want to use (you can use "days", "months", or "years"), and then click OK.
	
	3. Change the number of validity period units in accordance with the validity
	  period that you chose in step 2. Locate the ValidityPeriodUnits value under
	  the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\CertSvc\Configuration\<your_CA_name>
	
	  The default setting for this value is "1".
	
	4. On the Edit menu, click REG_DWORD, type the new number of units for the
	  validity period setting that you chose, and then click OK.
	
	5. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	The following event may also be logged in the Application event log:
	
	  Source: MSExchangeKMS
	  ID: 5017
	  Description: "KMS Admin domain\account failed to set the CertServer
	  configuration"
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
