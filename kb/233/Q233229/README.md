---
layout: page
title: "Q233229: XCLN: Mess. Times One Hour Off If Changing Standard to Daylight"
permalink: /kb/233/Q233229/
---

## Q233229: XCLN: Mess. Times One Hour Off If Changing Standard to Daylight

{% raw %}

	Article: Q233229
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you change between standard time and daylight saving time in the Microsoft
	Exchange Client, the date and time fields of every mail message may change one
	hour forward or backward.
	
	CAUSE
	=====
	
	The Exchange Client, Microsoft Schedule+, and related components are designed to
	use the local file time-conversion utilities provided by the operating system.
	Therefore, the time change behavior is dependent upon the operating system
	settings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	You may want to consider upgrading to Microsoft Outlook, which does not exhibit
	this behavior.
	
	
	Additional query words: difference forward central eastern western behind
	
	======================================================================
	Keywords          :  
	Component         : Capone
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
