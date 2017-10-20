---
layout: page
title: "Q146516: XCLN: Richedit Max Chars Allowed Does Not Recognize Zero"
permalink: /kb/146/Q146516/
---

## Q146516: XCLN: Richedit Max Chars Allowed Does Not Recognize Zero

{% raw %}

	Article: Q146516
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the Maximum Characters Allowed setting in the Format tab of the
	Rich Entry Field to 0, user input will not be limited to none. What actually
	happens is that you can enter as many characters as you want in that Rich Entry
	Field. The Maximum Characters Allowed setting does not seem to effect data entry
	when it has a value of zero. If the value of the maximum allowed characters is
	set to anything other than zero, it works correctly.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange version
	4.0 Windows 3.x, Windows 95, and Windows NT clients. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	MORE INFORMATION
	================
	
	To have the Rich Entry Field visible but not accept any user input, follow the
	steps below:
	
	1. Go to the General tab of the Rich Entry Field.
	
	2. Check the 'Field is: Locked' option on that tab.
	
	3. Regenerate and reinstall the form.
	
	4. The Rich Entry will now be visible, but will not allow any user input.
	
	Additional query words: Rich entry limit zero
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
