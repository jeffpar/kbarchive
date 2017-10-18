---
layout: page
title: "Q193690: Wildcard Certificate Rule Mappings Disappear"
permalink: kb/193/Q193690/
---

## Q193690: Wildcard Certificate Rule Mappings Disappear

	Article: Q193690
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 20-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Wildcard rule mappings may disappear after deleting other wildcard rule
	mappings.
	
	CAUSE
	=====
	
	Wildcard rule mappings are not re-indexed when a deletion occurs. Any mappings
	with an index higher than the index of the deleted mapping will be orphaned from
	the list of wildcard mappings, but will still reside in the metabase. When new
	mappings are created, a duplicate may appear if it uses a index that correspond
	to one of the existing orphaned mappings.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 5.
	
	MORE INFORMATION
	================
	
	Before you apply this fix, install the fix described in Q191385, "Duplicate
	Rules Appear in Secure Channel Account Mappings Advanced," to avoid additional
	deletion problems in Certmap.ocx.
	
	
	This fix is not included in the Windows NT Option Pack QFE update.
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
