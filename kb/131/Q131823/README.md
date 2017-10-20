---
layout: page
title: "Q131823: Error Message: Vines NDIS Interface Error 1021"
permalink: /kb/131/Q131823/
---

## Q131823: Error Message: Vines NDIS Interface Error 1021

{% raw %}

	Article: Q131823
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95 with a Banyan Vines network, you may receive the
	following error message:
	
	  Vines NDIS Interface error: 1021. See NDISBAN.DOC for an error description.
	
	CAUSE
	=====
	
	This error can occur if the correct "Bindings=" setting is not used in the
	PROTOCOL.INI file.
	
	RESOLUTION
	==========
	
	To correct this problem, use the Banyan Vines PCCONFIG.EXE configuration
	utility. For information about using this utility, please refer to your Banyan
	Vines documentation, or contact your network administrator or Banyan Vines
	Technical Support.
	
	Using PCCONFIG.EXE, modify this setting:
	
	  PROTOCOL.INI BINDINGS=
	
	Change the setting to the same value in the "Bindings=<xxxx>" line in the
	PROTOCOL.INI file, where <xxxx> is the internal name of the network
	adapter driver.
	
	For example, if you are using an Intel EtherExpress network adapter, the
	PROTOCOL.INI file contains this entry:
	
	  Bindings=EXP16$
	
	In this example, the internal name of the network adapter driver is EXP16$.
	
	MORE INFORMATION
	================
	
	For additional information about Banyan Vines error messages, please see the
	NDISBAN.DOC file provided by Banyan Systems.
	
	Banyan Vines is manufactured by Banyan Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
