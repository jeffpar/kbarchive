---
layout: page
title: "Q246483: Installation Unsuccessful for 3Com 3C575-TX CardBus Network Card"
permalink: /kb/246/Q246483/
---

## Q246483: Installation Unsuccessful for 3Com 3C575-TX CardBus Network Card

{% raw %}

	Article: Q246483
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install a 3Com 3C575-TX network adapter, the installation
	may stop, and you may receive this error message:
	
	  Missing Oemnt.inf or Oemsetup.inf file
	
	CAUSE
	=====
	
	This behavior can occur if you try to install a 3Com 3C575-TX network adapter on
	a computer running Microsoft Windows NT 4.0.
	
	You can install this 3Com network adapter only on a computer that supports the
	CardBus specification. The CardBus specification implements a 32-bit
	architecture and allows operation at speeds up to 33 MHz. This specification
	requires drivers beyond the scope of the PC Card 2.1 specifications that Windows
	NT 4.0 supports.
	
	RESOLUTION
	==========
	
	To work around this issue, install the 3Com 3C574-TX network adapter.
	
	MORE INFORMATION
	================
	
	For additional information and support for 3Com network adapters, visit the
	following 3Com web site:
	
	  http://support.3com.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: setup cardbus pccard
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
