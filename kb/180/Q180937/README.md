---
layout: page
title: "Q180937: Reset Button Problems in Print Session Properties"
permalink: /kb/180/Q180937/
---

## Q180937: Reset Button Problems in Print Session Properties

{% raw %}

	Article: Q180937
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Reset button included on the Printing tab of the Print Session Properties
	page is always available (not grayed out). This option is only used when a print
	session is configured to print to a file and if the "Unique Filename Extension:"
	option is selected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0 SP1
	and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the Reset (unique file extension) button is enabled only
	if:
	
	- Print To File is selected.
	
	- The "Unique Filename Extension" option is selected.
	
	- The current extension is non-zero.
	
	The reset button is available (not grayed out) once the following value in the
	registry becomes non-zero:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SNA Print Server
	  \Sessions\FileExtension 0
	
	Selecting Reset sets it back to zero. The print service will increment this value
	every time it prints a job on this session.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
