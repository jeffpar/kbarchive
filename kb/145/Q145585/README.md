---
layout: page
title: "Q145585: XADM: Migrated MS Mail 3.x X400 PAB Entries NDR w/ Bad Address"
permalink: /kb/145/Q145585/
---

## Q145585: XADM: Migrated MS Mail 3.x X400 PAB Entries NDR w/ Bad Address

	Article: Q145585
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send mail to a recipient in your Personal Address Book (PAB),
	and this PAB entry was migrated from a version 3.x Microsoft Mail for Windows
	mail message file (.mmf), you may get the following undeliverable message from
	the System Administrator:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject:msgsubject
	  Sent:1/1/80 4:05:41PM
	
	  The following recipients could not be reached:
	  Migrated Ms Mail User (X400)' on 1/1/80 4:05:42PM
	  The message was undelivered because the specified recipient postal address was
	  incorrectMSEXCH:MSExchangeIS:sitename:SERVERNAME
	
	CAUSE
	=====
	
	During the migration process of a .mmf file (either through the Migration Wizard
	or Import menu option), the existing PAB entries are created in a Microsoft
	Exchange Personal Address Book. With a Microsoft Mail X400 type PAB entry, all
	of the fields in the recipients OR address are migrated regardless of whether
	they contain data. For example, if a user created a X400 PAB entry in Microsoft
	Mail using the X400 fields template as follows:
	
	  Alias: User1
	  Country Code: US
	  Administration Domain Name:  (one space)
	  Private Domain Name: MICROSOFT
	  Personal Name: Surname: user1
	  Given Name:
	  Initials:
	  Organization Name: SiteName
	  Organizational Unit Names (OU):
	  Organizational Unit Names (OU):
	  Domain attribute type:
	  value:
	  Domain attribute type:
	  value:
	  Comment:
	
	When the above is migrated into a Microsoft Exchange PAB, and a message is
	addressed to this user, the address formed for the recipient will be as
	follows:
	
	  c=US;ADMD=;PRMD=MICROSOFT;S=User1;G=;I=;O=SiteName;OU=;OU=;DDA.TYPE=;
	  DDA.VALUE=;DA.TY PE=;DDA.VALUE=
	
	Even though the fields (G, I, and OU) had no value (ADMD contains a single space
	and is valid) in the Microsoft Mail PAB entry, they were still migrated into the
	newly formed address in Microsoft Exchange. Blank entries are invalid for X400
	fields; therefore, the Message Transfer Agent rejects the message and the
	Information Store returns it to the sender.
	
	RESOLUTION
	==========
	
	The migration utilities were updated to parse out any blank or null fields that
	exist in a Microsoft Mail X400 PAB entry. By parsing out these blank fields, a
	valid X400 address is formed in the Microsoft Exchange PAB and messages will no
	longer NDR. The same address as above will look as follows after you apply the
	fix:
	
	  C=US;ADMD= ;PRMD=MICROSOFT;S=User1;O=SiteName.
	
	NOTE: The fix needs to be applied before you migrate the .mmf file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: HotFix
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
