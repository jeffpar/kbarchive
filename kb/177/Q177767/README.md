---
layout: page
title: "Q177767: XADM: ESE97 Keys Not Removed From Registry During Remove All"
permalink: /kb/177/Q177767/
---

## Q177767: XADM: ESE97 Keys Not Removed From Registry During Remove All

{% raw %}

	Article: Q177767
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	When you run Microsoft Exchange Server setup and choose Remove All, the
	following keys may still exist in the registry:
	
	  HKLM\Software\Microsoft\ESE97
	  HKLM\System\CurrentControlSet\Services\ESE97\Performance
	  HKLM\System\CurrentControlSet\Services\ESE97
	
	This is by design. Registry entries pertaining to the ESE97 category will not be
	removed, because ESE97 is shared with components other than Exchange.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
