---
layout: page
title: "Q142196: PC Gen: BackOffice Mail Server Has Serial Number 0799-99992"
permalink: /kb/142/Q142196/
---

## Q142196: PC Gen: BackOffice Mail Server Has Serial Number 0799-99992

{% raw %}

	Article: Q142196
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Microsoft Mail Server version 3.5 from Microsoft BackOffice
	version 1.5, it creates an invalid serial number for the postoffice.
	
	NOTE: The serial number created is 0799-99992.
	
	CAUSE
	=====
	
	The serial number 0799-99992 will be assigned to the postoffice if:
	
	- The installation of the Mail Server was installed using only disk 2 of the
	  BackOffice CD package, and you ran the Setup program from any of the Mail
	  subdirectories.
	
	-or-
	
	- The installation of the Mail Server was installed from a BackOffice Test
	  Platform or BackOffice Solution Providers package.
	
	RESOLUTION
	==========
	
	If the Mail Server was installed using only disk 2, the postoffice should be
	reinstalled using disk 1. Complete the integrated installation procedure by
	selecting Setup from disk 1. The integrated installation will give the Mail
	Server a valid serial number.
	
	If the Mail Server was installed using either the BackOffice Test platform or
	BackOffice Solutions Provider CDs, these Mail Server are not intended for use in
	a production environment and are used for testing purposes only and will have
	limited functionality.
	
	
	MORE INFORMATION
	================
	
	If the installation of the Mail Server version 3.5 was done using BackOffice
	version 1.5, and it contains an invalid serial number in a live production
	environment, you should contact Microsoft Product Support Services for
	assistance.
	
	Additional query words: 3.50 799-99992
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	
	=============================================================================
	

{% endraw %}
