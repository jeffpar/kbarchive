---
layout: page
title: "Q138514: Canceling Print Job Causes Next Job to Be Printed Incorrectly"
permalink: /kb/138/Q138514/
---

## Q138514: Canceling Print Job Causes Next Job to Be Printed Incorrectly

{% raw %}

	Article: Q138514
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
	
	When you send a large print job to a Hewlett Packard (HP) LaserJet printer and
	then cancel the print job, the first page of the next document that is printed
	may not be printed correctly.
	
	CAUSE
	=====
	
	Windows 95 was unable to successfully reset the printer after you canceled the
	original print job. HP LaserJet 4- and 5-series printers cannot be reset by
	software.
	
	RESOLUTION
	==========
	
	To prevent this problem from occurring, do not cancel large print jobs before
	they are completely printed when you are printing to an HP LaserJet 4- or
	5-series printer.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
