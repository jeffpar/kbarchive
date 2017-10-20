---
layout: page
title: "Q214951: SMS: List Items Dimmed with Custom MIF &amp; Two Sets of Parentheses"
permalink: /kb/214/Q214951/
---

## Q214951: SMS: List Items Dimmed with Custom MIF &amp; Two Sets of Parentheses

{% raw %}

	Article: Q214951
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP4
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbsms120 kbsms120bug kbInventory
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a custom Management Information Format (MIF) file is created using a set of
	parentheses within a set of parentheses in the description field drop-down list,
	the item may be dimmed and unavailable for selection.
	
	CAUSE
	=====
	
	This behavior can occur if the MIF Entry program is running on a Macintosh
	Centris 650 (M1205) client.
	
	WORKAROUND
	==========
	
	To work around this issue, remove the inner set of parentheses.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbsms120 kbsms120bug kbInventory 
	Technology        : kbSMSSearch kbSMS120SP4
	Version           : :1.2 SP4
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
