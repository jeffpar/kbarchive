---
layout: page
title: "Q184957: XCLN: Outlook &amp; Exchange One-Off SMTP &amp; Display Name Parsing"
permalink: /kb/184/Q184957/
---

## Q184957: XCLN: Outlook &amp; Exchange One-Off SMTP &amp; Display Name Parsing

{% raw %}

	Article: Q184957
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03; WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 03-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange and Outlook clients are unable to parse one-off SMTP
	addresses in the following forms:
	
	  <someone@microsoft.com>
	  First Last <someone@microsoft.com>
	  (First Last) <someone@microsoft.com>
	  "First Last" <someone@microsoft.com>
	  (First Last) someone@microsoft.com
	  "First Last" someone@microsoft.com
	  First Last <"<First>Last"@microsoft.com>
	  (First Last) "<First>Last"@microsoft.com
	  someone@microsoft.com (First Last)
	  someone@microsoft.com "First Last"
	  <someone@microsoft.com> (First Last)
	  <someone@microsoft.com> "First Last"
	
	CAUSE
	=====
	
	Microsoft Exchange clients and Microsoft Outlook 97 client versions 8.00, 8.01,
	8.02, and 8.03 only accept one-off SMTP addresses in the form of:
	
	  someone@microsoft.com
	
	Microsoft Outlook 98 version 8.50 accepts one-off SMTP addresses in the following
	forms:
	
	  someone@microsoft.com
	  First Last <someone@microsoft.com>
	
	Outlook 98 parses the SMTP address from the one-off string in the last example
	above, but it uses the full original string as the display name.
	
	WORKAROUND
	==========
	
	Use the one-off SMTP addressing forms supported by the Outlook and Exchange
	clients.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	Additional SMTP one-off address parsing features are now available from Microsoft
	as an official hotfix for Outlook and Exchange clients. Contact Microsoft
	Technical Support for more information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed above.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	This problem was first corrected in Exchange Server 5.5 Service Pack 2.
	
	
	MORE INFORMATION
	================
	
	Microsoft Exchange and Outlook clients can parse one-off SMTP addresses and
	display names in the following forms when you apply the hotfix:
	
	  someone@microsoft.com
	  <someone@microsoft.com>
	  First Last <someone@microsoft.com>
	  (First Last) <someone@microsoft.com>
	  "First Last" <someone@microsoft.com>
	  (First Last) someone@microsoft.com
	  "First Last" someone@microsoft.com
	  First Last <"<First>Last"@microsoft.com>
	  (First Last) "<First>Last"@microsoft.com
	  "First Last" "<First>Last"@microsoft.com
	  someone@microsoft.com (First Last)
	  someone@microsoft.com "First Last"
	  <someone@microsoft.com> (First Last)
	  <someone@microsoft.com> "First Last"
	
	These additional addressing forms are only available as one-off addresses. The
	new parsing code successfully parses the display names and e-mail addresses from
	the strings. For example, if someone entered the following string as a one-off:
	
	    First Last <someone@microsoft.com>
	
	it would be parsed as follows:
	
	  Display Name: First Last
	  E-mail Address: someone@microsoft.com
	
	The new parsing functionality only applies to one-off SMTP addresses. PAB SMTP
	addresses still need to be entered as follows:
	
	  Display Name: First Last
	  E-mail Address: someone@microsoft.com
	
	The new SMTP parsing code is only invoked when an SMTP address has been entered
	as a one-off on the "TO" line and a "check names" has been performed, or when
	the Outlook background name check thread is invoked.
	
	The Outlook background name check thread is executed when an SMTP one-off address
	has been entered and the TAB key is selected to advance to the next field. The
	Outlook background name check thread was designed to remove white space from the
	one-off string. This was a useful feature for eliminating typos before
	processing the address. However, this feature needed to be removed, because the
	clients are now able to parse complex strings and addresses that may contain
	spaces. The new SMTP one-off parsing functionality was added to Mapi32.dll. The
	Outlook background name check function was modified in Outllib.dll. These were
	separate modifications, but both should be implemented when using the Outlook
	client. If the Outllib.dll is not updated, the display name will be parsed
	without a space and will appear as:
	
	  Display Name: FirstLast
	  E-mail Address: someone@microsoft.com
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :8.0,8.01,8.02,8.03; WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
