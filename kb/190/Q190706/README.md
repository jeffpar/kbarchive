---
layout: page
title: "Q190706: XADM: Exported Multi-valued Fields May Vary in Order Listed"
permalink: /kb/190/Q190706/
---

## Q190706: XADM: Exported Multi-valued Fields May Vary in Order Listed

	Article: Q190706
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some fields within Exchange Server are "multi-valued," meaning that they can
	have an unspecified number of values assigned to them. An example of a
	multi-valued field is the E-mail Addresses field. When exporting a mailbox
	object to a .csv file, this field will have several values, depending on the
	configuration of the system, each separated by default with a percent sign (%).
	
	The order of the values may change based on any number of changes to the system
	or mailbox. When writing applications to handle these fields, each value should
	be parsed out and evaluated before being used. Also, the field may not be in the
	same order for the same object exported at two different times or on two
	different computers. In other words, some mailboxes may have their X.400 address
	as the first value while others have their SMTP value listed first, or one
	mailbox may have the X.400 address first in one export but in a subsequent
	export have the SMTP address first.
	
	MORE INFORMATION
	================
	
	The separator character for multi-valued fields can be modified through the
	Exchange Server Administrator program when the export is being done. From the
	Tools menu, click Directory Export. Click the Separators button, and change the
	Property field to the desired character. Valid characters are the percent sign
	(%), the ampersand (&), the caret (^), the number sign (#), the at symbol
	(@), the exclamation mark (!), the dollar sign ($), and the double-quote
	character (").
	
	When doing bulk exports, the separator value can be set with the MVSeparator
	parameter using the ASCII value of the character with which you want to separate
	the fields. For example, set the MVSeparator parameter to "MVSeparator=37" to
	use the % sign as a separator (37 is the ASCII value for the % sign).
	
	Additional query words: multivalued
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
