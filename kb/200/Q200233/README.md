---
layout: page
title: "Q200233: XFOR: Modifying Proxy Address Generators for Notes, SNADS, and P"
permalink: /kb/200/Q200233/
---

## Q200233: XFOR: Modifying Proxy Address Generators for Notes, SNADS, and P

	Article: Q200233
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbusage
	Last Modified: 08-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, the administrator of an Exchange Server computer may want to
	alter the format used in generating e-mail proxy addresses, particularly for the
	Lotus Notes, SNADS, and OV/VM (PROFS) connectors. This is accomplished by
	altering the Address Type definitions within the Site Addressing object.
	
	MORE INFORMATION
	================
	
	For example, take the Lotus Notes proxy address generator. By default, Notes
	proxy addresses are generated in the following format:
	
	  Display Name/Exchange Site/Exchange Org@Exchange
	
	You may want to change this addressing format to follow naming conventions used
	within your organization. You can use variables in place of the defaults. The
	following variables may be used within the Site Addressing object (case
	insensitive):
	
	  &M - The mailbox name or alias of the user.
	  &I - The user's initials.
	  &D - The user's display name (compressed to avoid white spaces).
	  &G - The user's first name.
	  &S - The user's last name.
	
	Combinations of these can be used together, as well as a specific number of
	characters from each group. To specify the number of characters used for a
	particular variable, simply append a number on the end of the variable, as
	follows:
	
	  &S2 = The first two characters of the user's last name
	
	See the examples at the end of this article.
	
	To modify these settings for your Exchange Server site, follow the steps below:
	
	1. Start the Exchange Server Administrator program.
	
	2. Select the Configuration container directly underneath your Site.
	
	3. Double-click the Site Addressing object in the right pane.
	
	4. Select the Site Addressing tab.
	
	5. Select the Notes address, and click Edit.
	
	6. Type in your new address format using the variables inidicated above.
	
	7. Click OK.
	
	At this time, you are asked if you would like all the existing Notes addresses to
	be modified to reflect the changes within site addressing. If you select Yes,
	the recipients within that site will inherit the new addressing format for their
	Notes e-mail proxy addess.
	
	Examples
	--------
	
	Name: Nancy M. Lee
	
	  Site Addressing: &G@Exchange
	  Result: Nancy@Exchange
	
	  Site Addressing: &S&G&I/Microsoft@Exchange
	  Result: LeeNancyM/Microsoft@Exchange
	
	  Site Addressing: &S&G3@Exchange
	  Result: LeeNan@Exchange
	
	This modification to site addressing can also be done with the Exchange Server
	SMTP proxy generator. For additional information on how to do this, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q153270 Internet Mail Connector Proxy Generator Options
	
	Additional query words: modifying proxy address generator
	
	======================================================================
	Keywords          : kb3rdparty kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
