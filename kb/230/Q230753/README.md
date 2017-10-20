---
layout: page
title: "Q230753: XCLN: Outlook 8.03 Stays in Memory after Exiting"
permalink: /kb/230/Q230753/
---

## Q230753: XCLN: Outlook 8.03 Stays in Memory after Exiting

{% raw %}

	Article: Q230753
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:8.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Outlook will not exit from memory after you start a custom form and drag an
	attachment into the rich text format (RTF) body of that form.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Outlook 97 service pack that contains this fix.
	
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
	
	Component: Outllib.dll
	
	+----------------------------+
	| File name   | Version      | 
	+----------------------------+
	| Outllib.dll | 8.04.00.5725 | 
	+----------------------------+
	
	
	
	WORKAROUND
	==========
	
	A reference to the form was not being released.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook for Windows
	3.x, Exchange Server Edition 8.0.
	
	This problem is also fixed in Microsoft Outlook 98.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch
	Version           : WINDOWS:8.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
