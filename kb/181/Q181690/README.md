---
layout: page
title: "Q181690: XCLN: Contact Fax Number May Fail with +1 Prefix"
permalink: /kb/181/Q181690/
---

## Q181690: XCLN: Contact Fax Number May Fail with +1 Prefix

	Article: Q181690
	Product(s): Microsoft Exchange
	Version(s): 5.5,8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to send a fax to a contact created through the Outlook client,
	sending to a Business Fax address may fail.
	
	CAUSE
	=====
	
	The failure of the fax may occur because the Outlook client has appended a +1 to
	the beginning of the Business Fax number. Certain phone systems such as PBX
	systems may not be able to process the +1 prefix.
	
	MORE INFORMATION
	================
	
	Outlook is responsible for generating a telephone number in canonical format
	
	  [+<country code>(area code) number]
	
	to TAPI, and TAPI is responsible for selecting the digits to be dialed based on
	factors and variables specified by the Dialing Properties dialog box. If a
	number is specified in non-canonical format, TAPI ignores the dialing properties
	and dials only the digits entered.
	
	Because most PBX systems require a "1" to be dialed as a prefix for long
	distance, TAPI adds this prefix to a number entered if the "To access an outside
	line" option is selected.
	
	WORKAROUND
	==========
	
	To bypass this behavior for systems that do not require a "1" prefix for a
	number, select Dialing Properties for the modem, create a new calling card, and
	enter FG into the field for Long Distance dialing prefix rather than 1FG. This
	will allow the number to be dialed "as is" without a prefix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Outlook Windows 95 client,
	versions 8.00, 8.01, 8.02, 8.03; and Outlook Windows NT client, versions 8.00,
	8.01, 8.02, 8.03. Microsoft is researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :5.5,8.0,8.01,8.02,8.03
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
