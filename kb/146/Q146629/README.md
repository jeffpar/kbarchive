---
layout: page
title: "Q146629: Microsoft Exchange Internet Mail Lines End with &quot;=&quot;"
permalink: kb/146/Q146629/
---

## Q146629: Microsoft Exchange Internet Mail Lines End with &quot;=&quot;

	Article: Q146629
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send SMTP (Internet) mail using Microsoft Exchange, the recipient may
	see an equal sign (=) at the end of each line. In addition, the following text
	may occur in the mail message:
	
	  <Sender composed mail containing characters not in the US-ASCII set.>
	  <These characters have been transformed into a printable form.>
	
	CAUSE
	=====
	
	Microsoft Exchange uses an enhanced character set. The default MIME character
	set for Microsoft Exchange is ISO 8859-1. Some gateways do not support the way
	this character set issues a soft return for line feeds. When this occurs, each
	line is terminated with an equal sign showing the line break where the gateway's
	line-length support ends.
	
	RESOLUTION
	==========
	
	To work around this behavior, use either of the following methods:
	
	- 
	  1. In Control Panel, double-click Mail And Fax.
	
	  2. Click Internet Mail, and then click Properties.
	
	  3. On the General tab, click Message Format, and then click Character Set.
	
	  4. Change the option from ISO 8859-1 to US ASCII, or click the "Use MIME when
	     sending messages" check box to clear it.
	
	- 
	  1. In Microsoft Exchange, click Address Book on the Tools menu.
	
	  2. Use the right mouse button to click the recipient's address, and then
	     click Properties on the menu that appears.
	
	  3. Disable the "Always send messages in Microsoft Exchange rich text format"
	     option.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
