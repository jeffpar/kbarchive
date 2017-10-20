---
layout: page
title: "Q168074: XADM: Err Msg When Creating New Custom Recipient"
permalink: /kb/168/Q168074/
---

## Q168074: XADM: Err Msg When Creating New Custom Recipient

{% raw %}

	Article: Q168074
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a custom recipient using the Exchange Server Administrator program,
	the following error message appears:
	
	  This e-mail address is not valid. To view details view the event viewer.
	
	The application log may generate the following event:
	
	  Event ID 2035
	  The e-mail address description object in the MS EX directory for the
	  'RFAX:i386'
	  address type on alpha machines is missing.
	
	CAUSE
	=====
	
	If Right Fax, a third-party fax service, is installed on the computer running
	Microsoft Exchange Server, this problem occurs. To check whether Right Fax is
	installed, check to see if Right Fax is listed in the E-Mail Address Generators
	object and Right Fax has an address specified in the Site Addressing object Site
	Addressing property page.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Remove the Right Fax gateway. If the problem is not resolved by this, please
	  contact the manufacturer of the third-party gateway for support.
	
	
	MORE INFORMATION
	================
	
	Right Fax is a third-party gateway. Right Fax product support needs to be
	contacted for further assistance with this product. Right Fax product support
	can be reached by calling (520) 327-1357.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
