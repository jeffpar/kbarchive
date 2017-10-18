---
layout: page
title: "Q288207: IISSYNC May Fail If SSL Is Enabled on IIS5/Windows 2000 Cluster"
permalink: kb/288/Q288207/
---

## Q288207: IISSYNC May Fail If SSL Is Enabled on IIS5/Windows 2000 Cluster

	Article: Q288207
	Product(s): Internet Information Server
	Version(s): 2000,2000 SP1,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis500
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Windows versions 2000, 2000 SP1 Advanced Server 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add a server certificate to Internet Information Services (IIS) to use
	Secure Sockets Layer (SSL) encryption, the IISSYNC utility may stop responding
	(hang) and fail to complete the synchronization of the two nodes.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	NOTE: All of the following steps are performed on Node A unless otherwise
	specified.
	
	1. Create a certificate request.
	
	2. Fill the certificate requests (for example, use Microsoft Certificate Server
	  or a certificate authority such as VeriSign).
	
	  NOTE: If Microsoft Certificate Server creates the certificate, make sure that
	  the root certificate authority (CA) is a trusted root CA, and then install
	  the root CA into the Local Store if necessary.
	
	  For more information, see the "References" section.
	
	3. After you download the new certificate to Node A and before you install it,
	  make a copy of the certificate, and place the copy on Node B.
	
	4. Install the certificate on Node A through the Internet Service Administrator
	  (ISM), and set the appropriate configurations (for example, using the Server
	  Certificate Wizard, click Process pending certificate).
	
	5. On Node B, double-click the certificate that you copied earlier, and then
	  click Install Certificate. Complete the wizard, accepting all of the
	  defaults.
	
	6. On Node A, run IISSYNC. The status should now return as "Successful".
	
	If you still do not receive a "Successful" status, you may want to contact
	Microsoft Support Services for additional assistance. To contact Microsoft
	Support Services, see the following Microsoft Web site:
	
	  http://support.microsoft.com
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q290625 HOWTO: IIS5: How to Configure SSL in a Windows 2000 IIS 5 Test
	  Environment Using Certificate Server 2.0
	
	This article includes the following topics:
	
	- Create a Certificate Request
	- Fill the Certificate Requests
	- Installing the Certificate/Configuring SSL in IIS5
	- Install a Root CA
	- Process Pending Certificates
	
	Additional query words: iis 5 hang 0.0
	
	======================================================================
	Keywords          : kbDSupport kbiis500 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Search kbiisSearch kbAudDeveloper kbClustServSearch kbiis500 kbWinAdvServSearch kbWin2000AdvServSP1
	Version           : :2000,2000 SP1,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
