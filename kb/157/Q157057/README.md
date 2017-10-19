---
layout: page
title: "Q157057: XCLN: Display Name from GAL is not Added to PAB"
permalink: /kb/157/Q157057/
---

## Q157057: XCLN: Display Name from GAL is not Added to PAB

	Article: Q157057
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange for Windows 95, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you add an entry from the Global Address List to the Personal Address Book
	(PAB), the display name in the PAB will not be the same as the display name in
	the Global Address List.
	
	CAUSE
	=====
	
	This behavior is by product design. When you add an entry from the Global
	Address List into the PAB, the display name in the PAB will be a combination of
	the First Name field and the Last Name field. If the First Name and Last Name
	fields are blank in the Global Address List entry, the PAB entry will contain
	the Display Name of the Global Address List entry.
	
	WORKAROUND
	==========
	
	To work around this problem, modify the user's Last Name along with the Display
	Name when you make changes to a Microsoft Exchange Global Address List object.
	
	Another workaround is to create a display name for the Global Address List entry,
	but leave the First Name and Last Name fields blank.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbZNotKeyword8 kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange500Mac kbExchange400Mac kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
