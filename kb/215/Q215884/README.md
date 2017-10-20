---
layout: page
title: "Q215884: XWEB: Can't Clear OWA Error Dialog Box When Using Netscape Com."
permalink: /kb/215/Q215884/
---

## Q215884: XWEB: Can't Clear OWA Error Dialog Box When Using Netscape Com.

{% raw %}

	Article: Q215884
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running Outlook Web Access (OWA) and Netscape Communicator 4.04 or
	greater and you create a new meeting or appointment in OWA with an invalid start
	date (for example, September 31), you receive an error message. When you click
	OK, the error message is displayed again. An infinite loop results. Earlier
	versions of Netscape Communicator do not exhibit this behavior nor do any
	versions of Microsoft Internet Explorer.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.5 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Outlook Web Access Calendar
	
	+----------------------------------------+
	| File name    | Date     | Size         | 
	+----------------------------------------+
	| Frmroot.asp  | 12/8/98  | 30,651 bytes | 
	+----------------------------------------+
	| Mrappt.asp   | 11/09/98 | 20,850 bytes | 
	+----------------------------------------+
	| Mrplaner.asp | 11/09/98 | 12,535 bytes | 
	+----------------------------------------+
	| Mrrecur.asp  | 11/12/98 | 26,460 bytes | 
	+----------------------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access
	version 5.5.
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
