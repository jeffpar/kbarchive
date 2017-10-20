---
layout: page
title: "Q172646: Pdfcomp.exe Does Not Check for Valid Output File Creation"
permalink: /kb/172/Q172646/
---

## Q172646: Pdfcomp.exe Does Not Check for Valid Output File Creation

{% raw %}

	Article: Q172646
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Pdfcomp.exe utility does not check to see whether the
	<Directory>\<Output file name> is valid when trying to compile a
	.pdf file to .pdt format.
	
	CAUSE
	=====
	
	Pdfcomp.exe assumes that all input parameters are correct and does not validate
	the directory or output file name before attempting to write the PDT file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, Pdfcomp.exe checks to make sure the file was successfully
	created before attempting to write information to the specified output file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
