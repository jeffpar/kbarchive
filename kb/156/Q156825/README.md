---
layout: page
title: "Q156825: Error Message: Invalid Product Identification Number"
permalink: /kb/156/Q156825/
---

## Q156825: Error Message: Invalid Product Identification Number

{% raw %}

	Article: Q156825
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using an .inf file to perform a batch installation of Windows 95,
	you may receive the following error message during Setup:
	
	  Invalid Product Identification Number
	
	When you click Ignore, Setup continues normally.
	
	CAUSE
	=====
	
	This error can occur if the .inf file contains the "Display=1" setting.
	
	RESOLUTION
	==========
	
	Change the "Display=1" setting to "Display=0" in the [NameAndOrg] section of the
	.inf file. Note that the occurrence of this problem is dependent upon many
	variables; the problem is not always reproducible.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: msbatch
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
