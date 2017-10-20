---
layout: page
title: "Q207957: Broken Trust Between Domains Results in Unsuccessful Logon"
permalink: /kb/207/Q207957/
---

## Q207957: Broken Trust Between Domains Results in Unsuccessful Logon

{% raw %}

	Article: Q207957
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0,4.5
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft BackOffice Server versions 4.0, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to a Windows NT server, workstation, or domain
	controller using account credentials from a trusted domain, you may receive the
	following error:
	
	  The system cannot log you on to this domain because the trust relationship
	  between the primary domain and the trusted domain failed.
	
	CAUSE
	=====
	
	This problem will occur if the trust was broken at the accounts domain
	(trusted), but not the resource domain (trusting).
	
	NOTE: You can use the Microsoft Windows NT 4.0 resource kit utility Netdom.exe
	file to check both the status of the trust and re-create the trust.
	
	RESOLUTION
	==========
	
	Break the trust in both the account and resource domains, and then re-establish
	it on both sides.
	
	Break the Trust Relationship
	----------------------------
	
	1. To break the trust on the primary domain controller (PDC) in the <resource
	  domain>, click Start, point to Programs, point to Administrative Tools,
	  and then double-click User Manager for Domains.
	
	2. On the Policies menu, click Trust Relationships.
	
	3. Select the <accounts domain> from the Trusted Domains list box and
	  click Remove.
	
	4. When prompted to complete the removal, click Yes
	
	5. At the PDC in the <accounts domain>, click Start, point to Programs,
	  point to Administrative Tools, and then double-click User Manager for
	  Domains.
	
	6. On the Policies menu, click Trust Relationships.
	
	7. Select the <resource domain> from the Trusting Domains list box and
	  click Remove.
	
	8. When prompted to complete the removal, click Yes
	
	Re-establish the Trust Relationship
	-----------------------------------
	
	1. On the PDC in the <accounts domain>, click Start, point to Programs,
	  point to Administrative Tools, and then double-click User Manager for
	  Domains.
	
	2. On the Policies menu, click Trust Relationships, and then click Add next to
	  the Trusting Domains list box.
	
	3. In the Add Trusting Domain dialog box, type in the <resource domain>
	  name. Enter a <password> that you will use for the resource domain to
	  access the accounts domain, retype the <password> in the Confirmation
	  field, and then click OK.
	
	4. On the PDC in the <resource domain>, click Start, point to Programs,
	  point to Administrative Tools, and then double-click User Manager for
	  Domains.
	
	5. On the Policies menu, click Trust Relationships, and then click Add next to
	  the Trusted Domains list box.
	
	6. In the Add Trusted Domain dialog box, type in the <accounts domain>
	  name and the <password> that you supplied in step 3.
	
	7. Click OK in the "Trust Relationship With <accounts domain> Successfully
	  Established" dialog box.
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400 kbBackOfficeServ450
	Version           : winnt:3.51,4.0,4.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
