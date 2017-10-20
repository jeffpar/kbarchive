---
layout: page
title: "Q168233: Continuous No Page Break Setting Ignored by Generic Text Driver"
permalink: /kb/168/Q168233/
---

## Q168233: Continuous No Page Break Setting Ignored by Generic Text Driver

{% raw %}

	Article: Q168233
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you printing to a generic text only driver on Windows NT 4.0, you may
	experience unexpected results when using a custom form and the Device Setting
	"Continuous No Page Break."
	
	MORE INFORMATION
	================
	
	When you choose the "Continuous No Page Break" option from the Generic Text only
	driver, the setting is ignored and the driver sends a 0xC in the print job (a
	form feed). The expected behavior is to advance the page to encompass the data
	provided and stop printing.
	
	Output --- Done Correctly
	-------------------------
	
	00000000   0d 0a 0a 0a 0a 0a 0a 0a 20 20 20 20 20 20 20 31  ..       1
	00000010   0d 0a 20 20 20 20 20 20 20 32 0d 0a 20 20 20 20  ..       2..
	00000020   20 20 20 33 0d 0a 20 20 20 20 20 20 20 65 6e 64     3..
	end
	00000030   0d                                               .
	
	Output --- Done Incorrectly
	---------------------------
	
	00000000   0d 0a 0a 0a 0a 0a 0a 20 20 20 20 20 20 20 31 0d  ..       1.
	00000010   0a 20 20 20 20 20 20 20 32 0d 0a 20 20 20 20 20  .       2..
	00000020   20 20 33 0d 0a 20 20 20 20 20 20 20 65 6e 64 0d    3..
	end.
	00000030   0c                                               .
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
