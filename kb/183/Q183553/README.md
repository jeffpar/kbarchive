---
layout: page
title: "Q183553: OLE DB Hangs Trying to Access Field Over 32,745 Bytes Long"
permalink: /kb/183/Q183553/
---

## Q183553: OLE DB Hangs Trying to Access Field Over 32,745 Bytes Long

{% raw %}

	Article: Q183553
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for AS/400 and VSAM, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	At runtime, when the OLE DB Provider tries to access a field of more than 32,745
	bytes, it hangs.
	
	CAUSE
	=====
	
	The mainframe IBM DFM manual states that, for SAM data sets and PDSE members,
	the maximum length of fixed-length records is 32,760 bytes and for
	variable-length records is 32,756 bytes. For VSAM data sets, the manual states
	the maximum record length is 32,760 bytes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft OLE DB Provider for
	AS/400 and VSAM version 1.00, included with SNA Server version 4.0.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvSearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
