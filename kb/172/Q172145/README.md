---
layout: page
title: "Q172145: Windows NT 3.0 SP1 Client  Doesn't Correctly Install  NLS files"
permalink: /kb/172/Q172145/
---

## Q172145: Windows NT 3.0 SP1 Client  Doesn't Correctly Install  NLS files

{% raw %}

	Article: Q172145
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server Windows NT 3.0 SP1 Client is does not correctly copy the SNANLS
	files or add the necessary registry settings during installation. Any Windows NT
	applications which make use of the SNA Server 3.0 SNANLS API character
	conversion functions will not work properly. This problem affects SNA Server-J
	client applications (such as the 3270 and 5250 applets, or AFTP), though it does
	not affect the English version of SNA Server client functions.
	
	RESOLUTION
	==========
	
	The client setup has been updated to correctly copy the NLS files and adds the
	required NLS registry settings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, versions
	3.0 and 3.0 SP1.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	
	Additional query words: Client NLS registry
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
