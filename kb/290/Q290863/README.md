---
layout: page
title: "Q290863: Microsoft Enterprise Learning Library: Step by Step Interactive"
permalink: /kb/290/Q290863/
---

## Q290863: Microsoft Enterprise Learning Library: Step by Step Interactive

{% raw %}

	Article: Q290863
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Enterprise Learning Library: Step by Step Interactive Version 3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments and information related to error "Can't load
	L1_Aa.CBZ" for Microsoft Enterprise Learning Library Step by Step Interactive
	Version 3 Network Installations.
	
	MORE INFORMATION
	================
	
	A share has not been correctly set to give users access to the content files.
	The following steps are required to correct this error:
	
	1. Locate the content folder on the server. Default installation location is
	C:\Program Files\MSPress\MPItraining
	2. There are several folders at this location: Admin and Database are for all
	products.
	
	3. The remaining folder(s) contain the content files. 4. All remaining folders
	need to be shared with read access for Everyone.
	
	Additional query words: MELL Enterprise Learning Library Version3
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
