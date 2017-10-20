---
layout: page
title: "Q161623: XCLN: Electronic Forms Support"
permalink: /kb/161/Q161623/
---

## Q161623: XCLN: Electronic Forms Support

{% raw %}

	Article: Q161623
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On the Microsoft Exchange Macintosh client, the following error message
	appears:
	
	  Correctly displaying this item requires a custom form that is either not
	  available or not correctly installed. Please see your network administrator
	  for more information.
	
	On the Compose menu, there is no New Form option.
	
	CAUSE
	=====
	
	Forms support for the Microsoft Exchange Macintosh client is limited. There is
	no MAPI or Visual Basic support for the Microsoft Exchange Macintosh client.
	Forms support is limited to reading a text version of the form.
	
	The Microsoft Exchange Macintosh client cannot access forms directly through the
	Compose menu. This is by product design. With the Microsoft Exchange Macintosh
	client, you will only be able to read a "textized" form.
	
	WORKAROUND
	==========
	
	In order for the Microsoft Exchange Macintosh client to see a text version of
	the form, the form needs to be configured for that option when you create it. To
	do this:
	
	1. In the Electronic Forms Designer, click Window Properties.
	
	2. On the Menus tab, click Submit Options and click the "Show fields as text in
	  the message body" check box.
	
	Controls added by extending a form using Microsoft Visual Basic 4.0 16-bit cannot
	be "textized" without additional code. For more information on extending
	Microsoft Exchange Forms, please see the Microsoft Exchange Forms Designer
	Guide.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q149202 XCLN: Client for Macintosh Release Notes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange400Mac
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
