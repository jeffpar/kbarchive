---
layout: page
title: "Q255931: TAMA Additions Appear as Modifcations in Export File"
permalink: /kb/255/Q255931/
---

## Q255931: TAMA Additions Appear as Modifcations in Export File

{% raw %}

	Article: Q255931
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Together Administration Management Agent (TAMA) tool, new
	records are added to the Export.ta file as modifications rather than as new
	records. This creates a problem with connected directories such as Microsoft
	Exchange, because a new user is not created if the record is submitted as a
	modification.
	
	CAUSE
	=====
	
	This problem can occur when the import process uses the Modification Parsing
	template instead of the Add template. If you view the Export.ta file in the
	working directory of the Management Agent (MA), new records are preceded with an
	M rather than an A. This behavior occurs when TAMA runs, and creates new users
	below the MA.
	
	RESOLUTION
	==========
	
	To resolve this problem, in the MA working directory, open the Export.ta file in
	a text editor and change the M at the beginning of each record to an A.
	
	The Export.ta file appears as:
	
	  M cn=Jane Doe
	  Telephone: 222-2222
	  e-mail: someone@microsoft.com
	
	The Export.ta file after modification:
	
	  A cn=Jane Doe
	  Telephone: 222-2222
	  e-mail: someone@microsoft.com
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
