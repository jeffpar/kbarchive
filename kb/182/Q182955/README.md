---
layout: page
title: "Q182955: XWEB: Some MHTML and HTML Messages Are Not Displayed Correctly"
permalink: /kb/182/Q182955/
---

## Q182955: XWEB: Some MHTML and HTML Messages Are Not Displayed Correctly

	Article: Q182955
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages may not display correctly when you use Microsoft Outlook Web Access
	(OWA) to open the following types of messages:
	
	- Multipurpose Internet Mail Extensions Hypertext Markup Language (MHTML)
	  messages in which pictures or other objects have been inserted. The objects
	  are displayed as attachments instead of being displayed in the message.
	
	- Hypertext Markup Language (HTML) messages that contain relative links. These
	  messages are not displayed correctly even if the BASE element is properly
	  defined in the HTML header.
	
	CAUSE
	=====
	
	These problems occur for the following reasons:
	
	- MHTML messages that contain pictures or other inserted objects are not
	  displayed properly because the message is not correctly converted to Rich
	  Text Format (RTF).
	
	- HTML messages that contain relative links are not displayed correctly because
	  the HTML header is not maintained when the message is opened in OWA. The HTML
	  header contains the BASE element, which is necessary for a relative link to
	  function properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
