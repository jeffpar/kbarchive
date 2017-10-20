---
layout: page
title: "Q176235: XCON: Cyrillic Characters Not Rendered Correctly"
permalink: /kb/176/Q176235/
---

## Q176235: XCON: Cyrillic Characters Not Rendered Correctly

{% raw %}

	Article: Q176235
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Microsoft Exchange Server receives X.400-messages from another X.400 system
	that uses the ISO 8859-5 (Latin-5) character set for the message bodypart,
	Microsoft Exchange cannot render the Cyrillic characters correctly.
	
	The characters in question are part of ISO 8859-5 (Latin-5) character set.
	Instead, Microsoft Exchange replaces the Cyrillic characters with placeholders.
	The replacement depends on the body-part chosen through the Microsoft Exchange
	Administrator program. Because the ISO 8859-5 (Latin-5) character set is not
	available, the chosen character set is different from the original Latin-5
	character set. Additionally, the lack of ISO 8859-5 (Latin-5) within Microsoft
	Exchange means that it was not possible to send messages with Cyrillic
	characters to foreign X.400 systems that have been set up to use ISO 8859-5
	(Latin-5).
	
	CAUSE
	=====
	
	The use of ISO 8859-5 (Latin-5) as X.400 bodypart for the X.400 message text is
	not implemented in Microsoft Exchange.
	
	WORKAROUND
	==========
	
	Aside of the hotfix described in this article, no workaround is available for
	Cyrillic characters if the communication takes place between Microsoft Exchange
	and foreign X.400 systems. If the communication takes place between different
	Microsoft Exchange Servers, the option Allow MS Exchange Contents can be used to
	prevent the conversion of messages from the internal content (MDBEF) to the
	X.400-format.
	
	STATUS
	======
	
	Microsoft recognizes the increasing need to support the Latin-5 character set
	properly. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Currently, in the Microsoft Exchange Administrator program on the X.400
	Connector's Advanced property page, the drop down list X.400 Bodypart Used for
	Message Text does not expose the added character set. Therefore, the new
	functionality can only be activated using the Raw Properties of the affected
	X.400-connector. To be able to access the Raw properties of an Microsoft
	Exchange object you need to start the Microsoft Exchange Administrator program
	in Raw mode. This is accomplished by typing:
	
	  <drive:>\<path to the admin module>\admin -r
	
	-or-
	
	  <drive:>\<path to the admin module>\admin /r
	
	on the command line.
	
	Once the Microsoft Exchange Administrator program is started in Raw mode, you can
	access the Raw properties of each object by highlighting the object and clicking
	Raw Properties on the File menu. The name of the Raw attribute which needs to be
	changed in this case is Translation-Table-Used and the appropriate value is 8.
	
	Because the fix does not affect Subject-Lines and Display-Names, it is likely
	that in these lines Cyrillic characters will still be displayed as "???".
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
