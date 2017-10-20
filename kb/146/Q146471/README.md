---
layout: page
title: "Q146471: XCLN: Cannot Save Parameters of Electronic Forms"
permalink: /kb/146/Q146471/
---

## Q146471: XCLN: Cannot Save Parameters of Electronic Forms

{% raw %}

	Article: Q146471
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange MS-DOS client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you resize a Microsoft Exchange Electronic Form that is contained in a
	message, there is no way to keep the changed size of the form. Any changes that
	you make to a form's size will not be retained for future use.
	
	
	MORE INFORMATION
	================
	
	This is by design. MAPI forms have no interface that allow us to specify a
	location to open the form at or a way to save the parameters that a form's size
	was changed to. There is no way of even telling if the form has been resized.
	When forms are loaded, they will always default back to their initial size.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
