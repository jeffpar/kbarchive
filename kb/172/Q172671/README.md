---
layout: page
title: "Q172671: Print Server Does Not Honor Print Properties Set In Dialog"
permalink: /kb/172/Q172671/
---

## Q172671: Print Server Does Not Honor Print Properties Set In Dialog

{% raw %}

	Article: Q172671
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
	
	When you select the font override properties for a 3270 print session, several
	settings are not reflected in the print output. For example Bold, Italic, Bold
	Italic, Underline, and Strikeout do not print when you select them in the Font
	dialog box.
	
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
	
	With the fix applied, this functionality is available through this dialog box.
	Note these characteristics will be applied to the entire print job and will not
	work if a PDT file is used. Font properties are ignored if a PDT is set up
	because the GDI interface is no longer used. Some fonts do not support bold or
	italic, and other fonts are indistinguishable as bold or non-bold.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
