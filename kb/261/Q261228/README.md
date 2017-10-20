---
layout: page
title: "Q261228: XCLN: Users Cannot Connect to Exchange Server After DCPromo"
permalink: /kb/261/Q261228/
---

## Q261228: XCLN: Users Cannot Connect to Exchange Server After DCPromo

{% raw %}

	Article: Q261228
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 07-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run DCPromo to install Active Directory services on a computer that is
	running Windows 2000 Server and Exchange Server 5.5 Service Pack 3, all of the
	e-mail users may not be able to connect to the Exchange Server computer. These
	users include Post Office Protocol version 3 (POP3), Messaging Application
	Programming Interface (MAPI), Internet Message Access Protocol, Version 4rev1
	(IMAP4), and Outlook Web Access (OWA) e-mail users.
	
	CAUSE
	=====
	
	This issue can occur if the Everyone group no longer has the Access this
	Computer from the Network user right.
	
	RESOLUTION
	==========
	
	To resolve this issue, add the Everyone group to the Access this Computer from
	the Network user right in the Default Domain Controllers Policy:
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  Domain Controller Security Policy.
	
	2. In the Domain Controller Security Policy dialog box, double-click Security
	  Settings.
	
	3. Double-click Local Policies.
	
	4. Double-click Users Rights Assignment.
	
	5. Double-click "Access this computer from the network". Make sure that the
	  "Define these policy settings" check box is selected, and then click Add to
	  add the Everyone group to this user right.
	
	MORE INFORMATION
	================
	
	Windows 2000 Server policies are defined from the Domain Controller Security
	Policy down to the Domain Security Policy down to the Local Security Policy.
	Therefore, if the Everyone group is defined at the Domain Controller Security
	Policy level, the Everyone group should also be defined at the Domain Security
	Policy and Local Security Policy levels.
	
	In the Local Security Policy, the Effective Policy Setting column refers to the
	Domain Controller and Domain Security Policies. If the Domain Controller and
	Domain Security Policies are effective, this column is selected and is
	unavailable (dimmed). The Local Policy Setting column refers to rights for the
	local computer. If rights for the local computer are effective, this column is
	selected (this column is not unavailable).
	
	If e-mail users are still unable to connect to the Exchange Server computer after
	you add the Everyone group to the Domain Controller Security Policy, check the
	same user right in the Local Security Policy. Make sure that the Domain
	Controller Security Policy is effective and that the Everyone group has the
	Access this Computer from the Network local user right.
	
	You can also check the User Rights Assignment by using Microsoft Management
	Console (MMC):
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "mmc" (without the quotation marks).
	
	3. On the Console menu under the Console Root, click Add/Remove Snap-in.
	
	4. Add the Local Computer Policy snap-in, Default Domain Policy snap-in, and
	  Default Domain Controllers Policy snap-in (parts of Group Policy). These
	  correspond respectively to the Local Security Policy, Domain Security Policy,
	  and Domain Controller Security Policy in Administrative Tools.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbOSWin2000 kbOSWinSearch kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
