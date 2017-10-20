---
layout: page
title: "Q197974: XCLN: Sending Encrypted Mail to a User in Another Organization"
permalink: /kb/197/Q197974/
---

## Q197974: XCLN: Sending Encrypted Mail to a User in Another Organization

{% raw %}

	Article: Q197974
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Key Management server (in Exchange Server version 5.5 Service Pack 1 and later)
	and the Key Management Service (in Exchange 2000 Server) support X509.V3.
	Outlook 98 users that are enrolled in Advanced Security can use their X509.V3
	certificate to send encrypted mail to users in a different organization that
	also uses X509.V3 certificates.
	
	MORE INFORMATION
	================
	
	To send encrypted mail between users in different organizations, Outlook 98 must
	detect the recipient's enrollment in Advanced Security. If Outlook 98 does not
	detect the recipient's enrollment in Advanced Security, you receive the
	following message:
	
	  "None of the recipients can process an encrypted message. You can either
	  proceed with an unencrypted message or cancel the operation"
	
	However, users can send digitally signed messages to any user, whether or not the
	user is enrolled in Advanced Security. The digitally signed message indicates to
	the recipient that the sender is enrolled in advanced security and therefore can
	decrypt messages.
	
	The following scenario describes how to configure users in different
	organizations to send encrypted e-mail messages by using Outlook 98.
	
	For UserA to send an encrypted message to UserB using Outlook 98, perform the
	following steps:
	
	1. Enroll both UserA and UserB in X509.V3 security.
	
	2. UserB sends a digitally signed message to UserA.
	
	3. UserA opens the message, right-clicks on UserB's address, and clicks Add to
	  Contacts.
	
	4. A contact is created for UserB containing the certificate information.
	
	  NOTE: If a contact already exists, UserA is prompted to update the contact.
	
	5. UserA can now send encrypted mail to UserB by selecting UserB from the
	  Contacts list.
	
	NOTE: Outlook 98 takes some time to process the digitally signed Contact
	information. After you add a contact with a digital signature, it is recommended
	that you log off and restart Outlook 98, or wait a few minutes before you
	attempt to send encrypted mail to a newly added or updated Contact.
	
	Additional query words: km server kms xadm 8.5
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbOutlook98Search kbZNotKeyword3
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
