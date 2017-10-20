---
layout: page
title: "Q146027: XCLN: Font Changes May Truncate Data"
permalink: /kb/146/Q146027/
---

## Q146027: XCLN: Font Changes May Truncate Data

{% raw %}

	Article: Q146027
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When selecting and changing fonts while in the Microsoft Exchange client,
	message data may seem to disappear in a very narrow set of circumstances.
	
	MORE INFORMATION
	================
	
	When a user highlights information and then selects the Footlight MT Light font
	having first bold-faced the data, the last character of the data seem to
	disappear.
	
	This is a problem with the way that this font is reporting its particular metrics
	back to Microsoft Windows. If the user chooses another font, then the data
	reappears even if new text has been added.
	
	This is only a problem when the text has first been bold-faced. In the instance
	where the font choice is merely changed, the problem does not occur.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	

{% endraw %}
