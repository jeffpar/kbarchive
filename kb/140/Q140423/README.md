---
layout: page
title: "Q140423: SNA Server EHNAPPC Security fails using 10 Character User ID"
permalink: /kb/140/Q140423/
---

## Q140423: SNA Server EHNAPPC Security fails using 10 Character User ID

{% raw %}

	Article: Q140423
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use SNA Server client and IBM CA/400 (V3R1), you are prompted to enter
	a User ID and password. If your user ID has nine or less characters, you are
	able to log on. If your user ID has ten characters, the following error
	appears:
	
	  SNA Server EHNAPPC Security
	  7003 Cannot assign a network drive
	
	If you choose OK, the user ID and password prompt appears again. This time only
	the first nine characters of the user ID appear in the User ID box.
	
	CAUSE
	=====
	
	The SNA Server Win 3.x EHNAPPC interface does not properly handle AS/400 signon
	if the AS/400 userid is ten characters in length. The tenth character is
	truncated.
	
	RESOLUTION
	==========
	
	Microsoft has updated the following files to correct this problem (on Windows
	3.1x clients):
	
	  <winroot>\SYSTEM\EHNAPPC.DLL
	  <winroot>\SYSTEM\EHNRTRW.DLL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
