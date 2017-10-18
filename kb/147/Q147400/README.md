---
layout: page
title: "Q147400: XCLN: How the Check Names Command Works"
permalink: kb/147/Q147400/
---

## Q147400: XCLN: How the Check Names Command Works

	Article: Q147400
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange MS-DOS client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how the Check Names command performs Address Name
	Resolution (ANR) searches against Microsoft Exchange Address books.
	
	MORE INFORMATION
	================
	
	The order in which the Check Names command searches address lists (*.GAL, *.PAB,
	or other containers) is determined by the Exchange client. If a search against
	one address list yields any matches, then no further containers are searched. To
	configure the order: select Options from the Tools menu, select the Addressing
	property page, and then set the desired search order.
	
	Once an Address container is selected, "Check Names" performs two basic types of
	ANR against the input string: mailbox attribute comparisons and a name fragment
	comparison.
	
	Mailbox attribute comparisons are performed against the Last Name (Surname),
	Display Name (Display-Name), Alias Name(Mail-nickname), Office
	(Physical-Delivery-Office-Name), and E-mail Addresses (Proxy-Addresses).
	
	A name fragment comparison is performed if the input string contains an embedded
	space or another separator character. The input string is split and matched
	pair-wise against the Last Name and First Name (Given-Name) fields. For example,
	a string "ABC XYZ" will match entries where Surname matches ABC and Given-Name
	matches XYZ as well as entries where Surname matches XYZ and Given-Name matches
	ABC.
	
	Normally the Check Names command will return a list of all matches even if the
	match was part of a name. For example, suppose the following users are defined
	on an Exchange Server:
	
	----------------------------------------------------------------------
	First Name       Last Name         Display Name         Alias
	----------------------------------------------------------------------
	Joe              Black             Joe Black            Jo
	Dan              Johnson           Dan Johnson          DJ
	John             Smith             John Smith           JohnS
	Test             User              Testing UserID       TestU
	----------------------------------------------------------------------
	
	If the Check Names command is run with "Jo" (without the quotation marks) as the
	input string, it will return Joe Black, Dan Johnson, and John Smith as the
	matches found.
	
	If instead, you want Check Names to perform a full string match and not return
	partial matches, then precede the input string with an equal (=) sign. In the
	above example, if the input string was "=Jo", Check Names will return only Joe
	Black. This full-string matching affects both the mailbox attribute comparisons
	and the name fragment comparison.
	
	NOTE: Check Names performs case insensitive matches.
	
	A Special Case
	--------------
	
	Check Names does not check the input string against all the individual words in
	the Display Name. It only matches the input string against the first word. If
	this match fails, Check Names matches the input string against the entire
	Display Name. Using the above mailboxes for example, if the input string is
	"Testing", a match will be found, but if the string is "UserID", no matches will
	be found. If input string is "Testing UserID", a match will also be found.
	
	The above behavior occurs while Check Names is checking items in the Global
	Address Book. However, while checking items in the Personal Address Book, Check
	Names will parse the individual words in the Display Name and compare these to
	the input string. In the example above, if "Testing UserID" is in the Personal
	Address Book instead of the Global Address List, the input string "UserID" will
	return a match.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
